import { ChefHat, Leaf, Filter, BookOpen, Heart } from 'lucide-react';
import { useState } from 'react';

export default function VedikFood() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Recipes' },
    { id: 'weightloss', label: 'Weight Loss' },
    { id: 'immunity', label: 'Immunity Boost' },
    { id: 'detox', label: 'Detox' },
    { id: 'energy', label: 'Energy' }
  ];

  const recipes = [
    {
      id: 1,
      title: "Khichdi - Complete Meal",
      category: 'detox',
      time: "30 mins",
      difficulty: "Easy",
      description: "Perfect balance of protein, carbs, and healing spices",
      image: "🍲",
      benefits: ["Easy to digest", "Detoxifying", "Balances all doshas"]
    },
    {
      id: 2,
      title: "Golden Turmeric Milk",
      category: 'immunity',
      time: "10 mins",
      difficulty: "Easy",
      description: "Ancient immunity booster with anti-inflammatory properties",
      image: "🥛",
      benefits: ["Boosts immunity", "Better sleep", "Reduces inflammation"]
    },
    {
      id: 3,
      title: "Sprout Salad Bowl",
      category: 'weightloss',
      time: "15 mins",
      difficulty: "Easy",
      description: "Protein-rich, enzyme-packed living food",
      image: "🥗",
      benefits: ["High protein", "Living enzymes", "Weight management"]
    },
    {
      id: 4,
      title: "Millet Energy Bowl",
      category: 'energy',
      time: "25 mins",
      difficulty: "Medium",
      description: "Ancient grain packed with sustained energy",
      image: "🍚",
      benefits: ["Sustained energy", "Rich in minerals", "Gluten-free"]
    },
    {
      id: 5,
      title: "Ayurvedic Digestive Tea",
      category: 'detox',
      time: "5 mins",
      difficulty: "Easy",
      description: "Cumin, coriander, fennel blend for perfect digestion",
      image: "☕",
      benefits: ["Improves digestion", "Reduces bloating", "Detoxifies"]
    },
    {
      id: 6,
      title: "Seasonal Vegetable Sabzi",
      category: 'immunity',
      time: "20 mins",
      difficulty: "Easy",
      description: "Local, seasonal vegetables with healing spices",
      image: "🥘",
      benefits: ["Nutrient-dense", "Seasonal eating", "Easy to prepare"]
    }
  ];

  const filteredRecipes = selectedCategory === 'all'
    ? recipes
    : recipes.filter(recipe => recipe.category === selectedCategory);

  const principles = [
    "Eat fresh, locally-sourced ingredients",
    "Cook with love and positive intention",
    "Follow seasonal eating patterns",
    "Use six tastes in every meal",
    "Avoid processed and packaged foods",
    "Eat in a calm, mindful state"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Vedik Food</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Food is medicine. Discover recipes that nourish your body, mind, and soul.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Filter className="h-6 w-6 text-orange-600" />
            <h2 className="text-2xl font-bold text-gray-900">Filter by Goal</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-orange-100 to-amber-100 h-40 flex items-center justify-center text-7xl">
                {recipe.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{recipe.title}</h3>
                <p className="text-gray-600 mb-4">{recipe.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <ChefHat className="h-4 w-4" />
                    {recipe.time}
                  </span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                    {recipe.difficulty}
                  </span>
                </div>
                <div className="space-y-2 mb-4">
                  {recipe.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <Heart className="h-4 w-4 text-orange-500" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full py-2 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors">
                  View Recipe
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="h-6 w-6 text-orange-600" />
            <h2 className="text-2xl font-bold text-gray-900">Vedik Eating Principles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {principles.map((principle, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg">
                <Leaf className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-800">{principle}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl shadow-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Get Your Personalized Meal Plan</h2>
          <p className="text-lg mb-6 opacity-90">
            Customized recipes based on your body type, health goals, and preferences
          </p>
          <button className="px-8 py-3 bg-white text-orange-700 rounded-lg font-semibold hover:bg-orange-50 transition-colors shadow-lg">
            Create My Plan
          </button>
        </div>
      </div>
    </div>
  );
}
