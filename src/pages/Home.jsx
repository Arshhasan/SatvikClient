import { ArrowRight, Star, Award, Users, Heart } from 'lucide-react';
import FreeMealPlanSection from '../components/FreeMealPlanSection';

export default function Home({ setActivePage }) {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Lost 15kg in 3 months",
      text: "SatvikFit transformed my life. The natural approach to wellness made all the difference.",
      rating: 5
    },
    {
      name: "Rahul Verma",
      role: "Reversed pre-diabetes",
      text: "The Vedik food plan and daily routines helped me regain my health without medication.",
      rating: 5
    },
    {
      name: "Anjali Patel",
      role: "Improved mental clarity",
      text: "Mind & Body practices gave me peace I never thought possible in today's busy world.",
      rating: 5
    }
  ];

  const features = [
    {
      icon: Heart,
      title: "Satvik Living",
      description: "Ancient wisdom for modern wellness through natural daily practices"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Join thousands who transformed their health naturally"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with like-minded individuals on the same journey"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-green-50 via-white to-amber-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Reclaim Your Health
              <span className="block text-green-700">Naturally</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Transform your life through Satvik lifestyle, Vedik nutrition, and holistic wellness practices rooted in ancient wisdom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setActivePage('challenges')}
                className="px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Start Your Journey
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => setActivePage('lifestyle')}
                className="px-8 py-4 bg-white text-green-700 border-2 border-green-600 rounded-lg font-semibold hover:bg-green-50 transition-all"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl border-2 border-gray-100 hover:border-green-200 hover:shadow-lg transition-all">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600">Real people, real transformations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-green-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FreeMealPlanSection/>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Life?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Take our quick health assessment and receive a personalized wellness plan
          </p>
          <button
            onClick={() => setActivePage('challenges')}
            className="px-10 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all shadow-lg hover:shadow-xl text-lg"
          >
            Get Your Free Plan
          </button>
        </div>
      </section>
    </div>
  );
}
