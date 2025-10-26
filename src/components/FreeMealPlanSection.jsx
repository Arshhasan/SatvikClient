import { useState } from "react";
// import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../firebaseConfig.js";
import { Phone } from "lucide-react";

export default function FreeMealPlanSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [verified, setVerified] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);

  const sendOtp = async () => {
    if (phone.trim().length !== 10) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    try {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
      });

      const result = await signInWithPhoneNumber(auth, `+91${phone}`, window.recaptchaVerifier);
      setConfirmationResult(result);
      setOtpSent(true);
      alert("OTP sent successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to send OTP. Please try again.");
    }
  };

  const verifyOtp = async () => {
    if (!otp) return alert("Please enter the OTP");
    try {
      await confirmationResult.confirm(otp);
      setVerified(true);
      alert("Phone number verified!");
    } catch {
      alert("Invalid OTP, please try again.");
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-amber-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Get Your Free Satvik Meal Plan
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Enter your details below to receive a personalized meal plan designed for natural health
          and balance.
        </p>

        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 max-w-md mx-auto">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <div className="flex gap-2">
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                onClick={sendOtp}
                disabled={otpSent || verified}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  verified
                    ? "bg-green-500 text-white cursor-default"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                {verified ? "Verified" : otpSent ? "Sent" : "Verify"}
              </button>
            </div>

            {otpSent && !verified && (
              <>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  onClick={verifyOtp}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all"
                >
                  Confirm OTP
                </button>
              </>
            )}

            {verified && (
              <a
                href="/free-meal-plan.pdf"
                download
                className="mt-4 px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-all shadow-md"
              >
                Download Meal Plan
              </a>
            )}
          </div>

          {/* Firebase Recaptcha */}
          <div id="recaptcha-container"></div>
        </div>
      </div>
    </section>
  );
}
