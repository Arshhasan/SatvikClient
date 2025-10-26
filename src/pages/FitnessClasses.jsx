import { Play, Clock, Users, Star, Lock } from 'lucide-react';

export default function FitnessClasses() {
  const classes = [
    {
      id: 1,
      title: "Morning Yoga Flow",
      instructor: "Dr. Ananya Desai",
      duration: "45 mins",
      level: "Beginner",
      type: "Yoga",
      students: 1243,
      rating: 4.9,
      isFree: true,
      schedule: "Daily at 6:00 AM",
      image: "🧘‍♀️"
    },
    {
      id: 2,
      title: "Functional Strength Training",
      instructor: "Vikram Singh",
      duration: "60 mins",
      level: "Intermediate",
      type: "Strength",
      students: 892,
      rating: 4.8,
      isFree: false,
      schedule: "Mon, Wed, Fri at 7:00 PM",
      image: "💪"
    },
    {
      id: 3,
      title: "Pranayama & Breathing",
      instructor: "Swami Raghavan",
      duration: "30 mins",
      level: "All Levels",
      type: "Breathwork",
      students: 2156,
      rating: 5.0,
      isFree: true,
      schedule: "Daily at 5:30 PM",
      image: "🌬️"
    },
    {
      id: 4,
      title: "Sunset Meditation",
      instructor: "Maya Krishnan",
      duration: "20 mins",
      level: "All Levels",
      type: "Meditation",
      students: 3421,
      rating: 4.9,
      isFree: true,
      schedule: "Daily at 6:30 PM",
      image: "🧘"
    },
    {
      id: 5,
      title: "Satvik Fitness Bootcamp",
      instructor: "Rohit Malhotra",
      duration: "50 mins",
      level: "Advanced",
      type: "HIIT",
      students: 567,
      rating: 4.7,
      isFree: false,
      schedule: "Tue, Thu, Sat at 6:00 AM",
      image: "🏃"
    },
    {
      id: 6,
      title: "Gentle Stretching & Recovery",
      instructor: "Priya Nair",
      duration: "35 mins",
      level: "Beginner",
      type: "Recovery",
      students: 1876,
      rating: 4.8,
      isFree: true,
      schedule: "Daily at 8:00 PM",
      image: "🤸"
    }
  ];

  const benefits = [
    "Expert instructors with years of experience",
    "Live interactive sessions",
    "Recorded sessions for flexible viewing",
    "Community support and accountability",
    "Progress tracking and personalized feedback"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Fitness Classes</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Transform your body and mind with expert-led online and offline fitness programs
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-lg p-8 mb-12 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Unlock All Premium Classes</h2>
              <p className="text-lg opacity-90">Get unlimited access to all classes for just ₹999/month</p>
            </div>
            <button className="px-8 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg whitespace-nowrap">
              Start Free Trial
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {classes.map((classItem) => (
            <div key={classItem.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative bg-gradient-to-br from-blue-100 to-cyan-100 h-48 flex items-center justify-center text-8xl">
                {classItem.image}
                {classItem.isFree && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                    FREE
                  </div>
                )}
                {!classItem.isFree && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                    <Lock className="h-3 w-3" />
                    PREMIUM
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    {classItem.type}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                    {classItem.level}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{classItem.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{classItem.instructor}</p>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {classItem.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {classItem.students}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    {classItem.rating}
                  </span>
                </div>

                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <p className="text-sm text-gray-700 font-medium">{classItem.schedule}</p>
                </div>

                <button className={`w-full py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                  classItem.isFree
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-amber-600 text-white hover:bg-amber-700'
                }`}>
                  <Play className="h-4 w-4" />
                  {classItem.isFree ? 'Join Free Class' : 'Unlock Premium'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Our Classes Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                <Star className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-800">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
