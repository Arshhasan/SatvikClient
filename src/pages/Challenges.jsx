import { Trophy, Calendar, Target, CheckCircle, Lock, TrendingUp } from 'lucide-react';

export default function Challenges() {
  const challenges = [
    {
      id: 1,
      title: "7-Day Sugar Detox",
      duration: "7 days",
      difficulty: "Medium",
      participants: 2341,
      status: "active",
      progress: 57,
      icon: "🍎",
      benefits: ["Reduced cravings", "Better energy", "Weight loss"],
      description: "Eliminate refined sugar and discover natural sweetness"
    },
    {
      id: 2,
      title: "21-Day Early Rising",
      duration: "21 days",
      difficulty: "Hard",
      participants: 1876,
      status: "upcoming",
      icon: "🌅",
      benefits: ["More productive hours", "Better sleep cycle", "Mental clarity"],
      description: "Wake up before sunrise and harness the power of Brahma Muhurta"
    },
    {
      id: 3,
      title: "40-Day Satvik Living",
      duration: "40 days",
      difficulty: "Advanced",
      participants: 892,
      status: "upcoming",
      icon: "🧘",
      benefits: ["Complete transformation", "Spiritual growth", "Disease prevention"],
      description: "Full immersion into Satvik lifestyle with all practices"
    },
    {
      id: 4,
      title: "14-Day Walking Challenge",
      duration: "14 days",
      difficulty: "Easy",
      participants: 3421,
      status: "active",
      progress: 85,
      icon: "🚶",
      benefits: ["Improved fitness", "Better circulation", "Stress relief"],
      description: "Walk 10,000 steps daily and transform your health"
    },
    {
      id: 5,
      title: "30-Day Meditation",
      duration: "30 days",
      difficulty: "Medium",
      participants: 2156,
      status: "completed",
      icon: "🧘‍♀️",
      benefits: ["Mental peace", "Reduced anxiety", "Better focus"],
      description: "Build a daily meditation practice that lasts"
    },
    {
      id: 6,
      title: "10-Day Oil Pulling",
      duration: "10 days",
      difficulty: "Easy",
      participants: 1567,
      status: "upcoming",
      icon: "💧",
      benefits: ["Oral health", "Detoxification", "Clearer skin"],
      description: "Ancient Ayurvedic practice for overall wellness"
    }
  ];

  const activeChallenge = challenges.find(c => c.status === 'active' && c.progress);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Challenges & Progress</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join challenges, track progress, earn badges, and transform your life one day at a time
          </p>
        </div>

        {activeChallenge && (
          <div className="bg-gradient-to-r from-orange-600 to-yellow-600 rounded-xl shadow-lg p-8 mb-12 text-white">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">Your Active Challenge</h2>
                <p className="text-lg opacity-90">{activeChallenge.title}</p>
              </div>
              <div className="text-6xl">{activeChallenge.icon}</div>
            </div>
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Progress</span>
                <span className="font-bold">{activeChallenge.progress}%</span>
              </div>
              <div className="w-full bg-white/30 rounded-full h-3">
                <div
                  className="bg-white rounded-full h-3 transition-all"
                  style={{ width: `${activeChallenge.progress}%` }}
                ></div>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-white text-orange-700 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
                Mark Today Complete
              </button>
              <button className="px-6 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors">
                View Details
              </button>
            </div>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Trophy className="h-6 w-6 text-orange-600" />
              <h2 className="text-2xl font-bold text-gray-900">Your Achievements</h2>
            </div>
            <button className="text-orange-600 font-medium hover:text-orange-700">View All</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-4xl mb-2">🏆</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">5</div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-4xl mb-2">🔥</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">12</div>
              <div className="text-sm text-gray-600">Day Streak</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-4xl mb-2">⭐</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">850</div>
              <div className="text-sm text-gray-600">Total Points</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-4xl mb-2">👥</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">#127</div>
              <div className="text-sm text-gray-600">Leaderboard</div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <button className="px-6 py-2 bg-orange-600 text-white rounded-full font-medium">
              All Challenges
            </button>
            <button className="px-6 py-2 bg-orange-100 text-orange-700 rounded-full font-medium hover:bg-orange-200">
              Active
            </button>
            <button className="px-6 py-2 bg-orange-100 text-orange-700 rounded-full font-medium hover:bg-orange-200">
              Completed
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`h-2 ${
                challenge.status === 'active' ? 'bg-green-500' :
                challenge.status === 'completed' ? 'bg-blue-500' :
                'bg-gray-300'
              }`}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-5xl">{challenge.icon}</div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      challenge.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                      challenge.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {challenge.difficulty}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{challenge.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{challenge.description}</p>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {challenge.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Target className="h-4 w-4" />
                    {challenge.participants}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  {challenge.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                {challenge.progress !== undefined && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-1 text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-bold text-gray-900">{challenge.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 rounded-full h-2 transition-all"
                        style={{ width: `${challenge.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                <button className={`w-full py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                  challenge.status === 'active' ? 'bg-green-600 text-white hover:bg-green-700' :
                  challenge.status === 'completed' ? 'bg-blue-600 text-white hover:bg-blue-700' :
                  'bg-orange-600 text-white hover:bg-orange-700'
                }`}>
                  {challenge.status === 'active' && (
                    <>
                      <TrendingUp className="h-4 w-4" />
                      Continue Challenge
                    </>
                  )}
                  {challenge.status === 'completed' && (
                    <>
                      <Trophy className="h-4 w-4" />
                      View Results
                    </>
                  )}
                  {challenge.status === 'upcoming' && (
                    <>
                      <Lock className="h-4 w-4" />
                      Join Challenge
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
