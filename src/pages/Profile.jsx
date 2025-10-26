import { User, Mail, Calendar, Award, Activity, Target, Settings, LogOut } from 'lucide-react';

export default function Profile() {
  const userStats = [
    { icon: Activity, label: "Active Days", value: "42", color: "blue" },
    { icon: Target, label: "Challenges Completed", value: "5", color: "green" },
    { icon: Award, label: "Total Points", value: "850", color: "yellow" },
  ];

  const recentActivity = [
    { date: "Today", activity: "Completed morning meditation", type: "meditation" },
    { date: "Today", activity: "Logged Satvik breakfast", type: "food" },
    { date: "Yesterday", activity: "Finished 7-Day Sugar Detox", type: "challenge" },
    { date: "2 days ago", activity: "Joined Early Rising Challenge", type: "challenge" },
    { date: "3 days ago", activity: "Posted in Community Forum", type: "community" }
  ];

  const savedContent = [
    { title: "Khichdi Recipe", type: "Recipe", category: "Vedik Food" },
    { title: "Morning Yoga Flow", type: "Class", category: "Fitness" },
    { title: "Oil Pulling Guide", type: "Article", category: "Lifestyle" },
    { title: "Stress Relief Meditation", type: "Audio", category: "Mind & Body" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-12 w-12 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Priya Sharma</h2>
              <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
                <Mail className="h-4 w-4" />
                <span className="text-sm">priya.sharma@email.com</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-600 mb-6">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">Member since Jan 2025</span>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                  <Settings className="h-4 w-4" />
                  Settings
                </button>
                <button className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Health Profile</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Height</span>
                  <span className="font-medium text-gray-900">165 cm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Weight</span>
                  <span className="font-medium text-gray-900">68 kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">BMI</span>
                  <span className="font-medium text-green-600">24.9</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Body Type</span>
                  <span className="font-medium text-gray-900">Vata-Pitta</span>
                </div>
              </div>
              <button className="w-full mt-4 py-2 bg-green-100 text-green-700 rounded-lg font-medium hover:bg-green-200 transition-colors">
                Update Profile
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {userStats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-${stat.color}-100 rounded-full mb-3`}>
                    <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Active Challenges</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">7-Day Sugar Detox</h4>
                    <span className="text-sm font-medium text-green-600">Day 4/7</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 rounded-full h-2" style={{ width: '57%' }}></div>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">14-Day Walking Challenge</h4>
                    <span className="text-sm font-medium text-green-600">Day 12/14</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 rounded-full h-2" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {recentActivity.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      item.type === 'meditation' ? 'bg-purple-500' :
                      item.type === 'food' ? 'bg-orange-500' :
                      item.type === 'challenge' ? 'bg-green-500' :
                      'bg-blue-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{item.activity}</p>
                      <p className="text-sm text-gray-500">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Saved Content</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {savedContent.map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-green-300 hover:shadow-md transition-all cursor-pointer">
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium mb-2">
                      {item.category}
                    </span>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.type}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
