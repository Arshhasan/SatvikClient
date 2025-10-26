import { MessageCircle, ThumbsUp, Share2, User, Award, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export default function Community() {
  const [activeTab, setActiveTab] = useState('discussions');

  const discussions = [
    {
      id: 1,
      author: "Priya Sharma",
      authorImage: "👩",
      title: "Best time for oil pulling - morning or evening?",
      category: "Satvik Tips",
      content: "I've been doing oil pulling for a week now, but I'm confused about timing. Some say morning on empty stomach, others say evening works too. What's your experience?",
      likes: 24,
      replies: 12,
      timeAgo: "2 hours ago",
      trending: true
    },
    {
      id: 2,
      author: "Rahul Verma",
      authorImage: "👨",
      title: "Lost 10kg in 2 months with Satvik diet!",
      category: "Success Stories",
      content: "I can't believe the transformation! Started with the sugar detox challenge, then moved to complete Satvik eating. My energy is through the roof and I feel 10 years younger.",
      likes: 156,
      replies: 45,
      timeAgo: "5 hours ago",
      trending: true
    },
    {
      id: 3,
      author: "Anjali Patel",
      authorImage: "👩‍🦰",
      title: "Need help with early rising habit",
      category: "Ask Experts",
      content: "I've tried the early rising challenge 3 times but can't seem to maintain it beyond a week. Any tips from people who've successfully made this shift?",
      likes: 18,
      replies: 23,
      timeAgo: "1 day ago",
      trending: false
    },
    {
      id: 4,
      author: "Vikram Singh",
      authorImage: "👨‍💼",
      title: "Simple breakfast ideas for busy mornings",
      category: "Satvik Tips",
      content: "Looking for quick Satvik breakfast recipes that take less than 15 minutes. I have early morning meetings and need something nutritious and fast.",
      likes: 32,
      replies: 18,
      timeAgo: "1 day ago",
      trending: false
    },
    {
      id: 5,
      author: "Maya Krishnan",
      authorImage: "👩‍🏫",
      title: "Meditation helped me overcome anxiety",
      category: "Success Stories",
      content: "After years of anxiety medication, I'm finally free! The Mind & Body practices, especially morning meditation, have been life-changing. Thank you SatvikFit!",
      likes: 89,
      replies: 34,
      timeAgo: "2 days ago",
      trending: false
    }
  ];

  const topContributors = [
    { name: "Dr. Ananya", posts: 234, badge: "🏆" },
    { name: "Swami Raghavan", posts: 189, badge: "🥇" },
    { name: "Priya Sharma", posts: 156, badge: "🥈" },
    { name: "Rahul Verma", posts: 142, badge: "🥉" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Community</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Connect, share, and grow together on your wellness journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <button
                  onClick={() => setActiveTab('discussions')}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    activeTab === 'discussions'
                      ? 'bg-teal-600 text-white'
                      : 'bg-teal-100 text-teal-700 hover:bg-teal-200'
                  }`}
                >
                  Discussions
                </button>
                <button
                  onClick={() => setActiveTab('trending')}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    activeTab === 'trending'
                      ? 'bg-teal-600 text-white'
                      : 'bg-teal-100 text-teal-700 hover:bg-teal-200'
                  }`}
                >
                  Trending
                </button>
                <button
                  onClick={() => setActiveTab('success')}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    activeTab === 'success'
                      ? 'bg-teal-600 text-white'
                      : 'bg-teal-100 text-teal-700 hover:bg-teal-200'
                  }`}
                >
                  Success Stories
                </button>
              </div>

              <button className="w-full py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors mb-6">
                Start New Discussion
              </button>

              <div className="space-y-4">
                {discussions
                  .filter(d => {
                    if (activeTab === 'trending') return d.trending;
                    if (activeTab === 'success') return d.category === 'Success Stories';
                    return true;
                  })
                  .map((discussion) => (
                    <div key={discussion.id} className="border border-gray-200 rounded-lg p-6 hover:border-teal-300 hover:shadow-md transition-all">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl">{discussion.authorImage}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-semibold text-gray-900">{discussion.author}</span>
                            <span className="text-gray-500 text-sm">• {discussion.timeAgo}</span>
                            {discussion.trending && (
                              <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium flex items-center gap-1">
                                <TrendingUp className="h-3 w-3" />
                                Trending
                              </span>
                            )}
                          </div>
                          <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium mb-2">
                            {discussion.category}
                          </span>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{discussion.title}</h3>
                          <p className="text-gray-600 mb-4">{discussion.content}</p>
                          <div className="flex items-center gap-6 text-sm text-gray-500">
                            <button className="flex items-center gap-2 hover:text-teal-600 transition-colors">
                              <ThumbsUp className="h-4 w-4" />
                              {discussion.likes}
                            </button>
                            <button className="flex items-center gap-2 hover:text-teal-600 transition-colors">
                              <MessageCircle className="h-4 w-4" />
                              {discussion.replies} replies
                            </button>
                            <button className="flex items-center gap-2 hover:text-teal-600 transition-colors">
                              <Share2 className="h-4 w-4" />
                              Share
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-teal-600" />
                <h3 className="text-lg font-bold text-gray-900">Top Contributors</h3>
              </div>
              <div className="space-y-3">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-teal-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{contributor.badge}</span>
                      <div>
                        <p className="font-medium text-gray-900">{contributor.name}</p>
                        <p className="text-xs text-gray-500">{contributor.posts} posts</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Community Guidelines</h3>
              <ul className="text-sm space-y-2 opacity-90">
                <li>• Be respectful and supportive</li>
                <li>• Share authentic experiences</li>
                <li>• No spam or self-promotion</li>
                <li>• Stay on topic</li>
                <li>• Help others grow</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Topics</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">Weight Loss</span>
                <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">Meditation</span>
                <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">Recipes</span>
                <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">Yoga</span>
                <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">Detox</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
