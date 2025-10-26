import { Sun, Droplet, Moon, Heart, CheckCircle } from 'lucide-react';

export default function SatvikLifestyle() {
  const practices = [
    {
      icon: Sun,
      title: "Early Rising (Brahma Muhurta)",
      description: "Wake up before sunrise for optimal health and mental clarity",
      benefits: ["Enhanced energy", "Better focus", "Hormonal balance"],
      color: "orange"
    },
    {
      icon: Droplet,
      title: "Daily Detox Practices",
      description: "Cleanse your body naturally with traditional techniques",
      benefits: ["Oil pulling", "Tongue scraping", "Warm water therapy"],
      color: "blue"
    },
    {
      icon: Heart,
      title: "Dinacharya (Daily Routine)",
      description: "Follow nature's rhythm for optimal health",
      benefits: ["Meal timing", "Exercise routine", "Work-rest balance"],
      color: "green"
    },
    {
      icon: Moon,
      title: "Sleep & Recovery",
      description: "Quality sleep for complete rejuvenation",
      benefits: ["Early bedtime", "Screen-free evenings", "Relaxation rituals"],
      color: "indigo"
    }
  ];

  const principles = [
    "Live in harmony with nature's cycles",
    "Eat according to your body constitution",
    "Practice mindful breathing throughout the day",
    "Maintain cleanliness of body and mind",
    "Cultivate positive thoughts and gratitude",
    "Exercise regularly without excess strain"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Satvik Lifestyle</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ancient wisdom for disease-free living. Embrace practices that have kept generations healthy and vibrant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {practices.map((practice, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className={`inline-flex items-center justify-center w-14 h-14 bg-${practice.color}-100 rounded-full mb-4`}>
                <practice.icon className={`h-7 w-7 text-${practice.color}-600`} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{practice.title}</h3>
              <p className="text-gray-600 mb-4">{practice.description}</p>
              <div className="space-y-2">
                {practice.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Core Principles of Satvik Living</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {principles.map((principle, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-800 font-medium">{principle}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl shadow-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Start Your Satvik Journey Today</h2>
          <p className="text-lg mb-6 opacity-90">
            Join our 21-day challenge to experience the transformative power of Satvik living
          </p>
          <button className="px-8 py-3 bg-white text-green-700 rounded-lg font-semibold hover:bg-green-50 transition-colors shadow-lg">
            Join 21-Day Challenge
          </button>
        </div>
      </div>
    </div>
  );
}
