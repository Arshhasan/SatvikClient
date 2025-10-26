import { Brain, Timer, Smile, TrendingUp, Play, Pause } from 'lucide-react';
import { useState } from 'react';

export default function MindBody() {
  const [timerActive, setTimerActive] = useState(false);
  const [selectedMood, setSelectedMood] = useState(null);

  const meditations = [
    {
      id: 1,
      title: "Morning Gratitude",
      duration: "5 mins",
      type: "Guided",
      icon: "🌅",
      description: "Start your day with positivity and thankfulness"
    },
    {
      id: 2,
      title: "Stress Relief",
      duration: "10 mins",
      type: "Guided",
      icon: "🌊",
      description: "Release tension and find inner calm"
    },
    {
      id: 3,
      title: "Deep Sleep",
      duration: "15 mins",
      type: "Guided",
      icon: "🌙",
      description: "Prepare your mind for restful sleep"
    },
    {
      id: 4,
      title: "Body Scan",
      duration: "12 mins",
      type: "Awareness",
      icon: "✨",
      description: "Connect with every part of your body"
    }
  ];

  const moods = [
    { emoji: "😊", label: "Great" },
    { emoji: "😌", label: "Good" },
    { emoji: "😐", label: "Okay" },
    { emoji: "😔", label: "Low" },
    { emoji: "😰", label: "Stressed" }
  ];

  const affirmations = [
    "I am healthy, strong, and full of energy",
    "My body is a temple, and I treat it with respect",
    "I choose peace and calmness in every moment",
    "I am grateful for my body and all it does for me",
    "Every day I am becoming healthier and happier"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Mind & Body</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Cultivate mental peace, emotional balance, and spiritual growth through daily practices
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Timer className="h-6 w-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-900">Meditation Timer</h2>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-gray-900 mb-6">10:00</div>
              <div className="flex gap-4 justify-center mb-6">
                <button className="px-6 py-2 bg-purple-100 text-purple-700 rounded-lg font-medium hover:bg-purple-200 transition-colors">
                  5 min
                </button>
                <button className="px-6 py-2 bg-purple-100 text-purple-700 rounded-lg font-medium hover:bg-purple-200 transition-colors">
                  10 min
                </button>
                <button className="px-6 py-2 bg-purple-100 text-purple-700 rounded-lg font-medium hover:bg-purple-200 transition-colors">
                  15 min
                </button>
              </div>
              <button
                onClick={() => setTimerActive(!timerActive)}
                className="w-full py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
              >
                {timerActive ? (
                  <>
                    <Pause className="h-5 w-5" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="h-5 w-5" />
                    Start Meditation
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Smile className="h-6 w-6 text-pink-600" />
              <h2 className="text-2xl font-bold text-gray-900">Daily Mood Check</h2>
            </div>
            <p className="text-gray-600 mb-6">How are you feeling today?</p>
            <div className="flex justify-around mb-6">
              {moods.map((mood, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedMood(mood.label)}
                  className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-all ${
                    selectedMood === mood.label
                      ? 'bg-pink-100 scale-110'
                      : 'hover:bg-pink-50'
                  }`}
                >
                  <span className="text-4xl">{mood.emoji}</span>
                  <span className="text-sm font-medium text-gray-700">{mood.label}</span>
                </button>
              ))}
            </div>
            {selectedMood && (
              <div className="bg-pink-50 rounded-lg p-4 text-center">
                <p className="text-gray-800">Thanks for sharing! Your 7-day streak continues 🔥</p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900">Guided Meditations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {meditations.map((meditation) => (
              <div key={meditation.id} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4 text-center">{meditation.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{meditation.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <span>{meditation.duration}</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                    {meditation.type}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{meditation.description}</p>
                <button className="w-full py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
                  <Play className="h-4 w-4" />
                  Start
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg p-8 mb-12 text-white">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="h-6 w-6" />
            <h2 className="text-2xl font-bold">Your Meditation Streak</h2>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">7</div>
              <div className="text-sm opacity-90">Days Streak</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">42</div>
              <div className="text-sm opacity-90">Total Sessions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">280</div>
              <div className="text-sm opacity-90">Minutes</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Daily Affirmations</h2>
          <div className="space-y-4">
            {affirmations.map((affirmation, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border-l-4 border-purple-600">
                <p className="text-gray-800 font-medium italic">"{affirmation}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
