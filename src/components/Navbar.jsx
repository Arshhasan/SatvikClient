import { Menu, X, Leaf } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ activePage, setActivePage }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'lifestyle', label: 'Satvik Lifestyle' },
    { id: 'food', label: 'Vedik Food' },
    { id: 'fitness', label: 'Fitness Classes' },
    { id: 'mind', label: 'Mind & Body' },
    { id: 'challenges', label: 'Challenges' },
    { id: 'community', label: 'Community' },
    { id: 'profile', label: 'Profile' },
    { id : 'instructordashboard', label:'Instructor dashboard'}
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setActivePage('home')}>
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-green-700">SatvikFit</span>
          </div>

          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activePage === item.id
                    ? 'bg-green-100 text-green-800'
                    : 'text-gray-700 hover:bg-green-50 hover:text-green-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-green-50"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActivePage(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  activePage === item.id
                    ? 'bg-green-100 text-green-800'
                    : 'text-gray-700 hover:bg-green-50 hover:text-green-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
