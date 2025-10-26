import { Leaf, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-green-500" />
              <span className="text-2xl font-bold text-white">SatvikFit</span>
            </div>
            <p className="text-sm mb-4">
              Reclaim your health naturally through Satvik living, Vedik nutrition, and holistic wellness.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 cursor-pointer hover:text-green-400 transition-colors" />
              <Twitter className="h-5 w-5 cursor-pointer hover:text-green-400 transition-colors" />
              <Instagram className="h-5 w-5 cursor-pointer hover:text-green-400 transition-colors" />
              <Youtube className="h-5 w-5 cursor-pointer hover:text-green-400 transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-green-400 cursor-pointer transition-colors">Satvik Lifestyle</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">Vedik Food</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">Fitness Classes</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">Mind & Body</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-green-400 cursor-pointer transition-colors">Challenges</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">Forum</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">Success Stories</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">Ask Experts</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Stay Connected</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for wellness tips</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-sm focus:outline-none focus:border-green-500"
              />
              <button className="px-4 py-2 bg-green-600 text-white rounded-r-md hover:bg-green-700 transition-colors text-sm font-medium">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2025 SatvikFit. All rights reserved. Reclaim Your Health Naturally.</p>
        </div>
      </div>
    </footer>
  );
}
