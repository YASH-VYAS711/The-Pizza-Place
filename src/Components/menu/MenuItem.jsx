import React from 'react';
import { Flame, Leaf, Award, Wheat } from 'lucide-react';

const MenuItem = ({ item, index }) => {
  return (
    <div
      className="menu-item p-4 md:p-6 border-b border-gray-200 last:border-b-0 transition-all duration-300 relative rounded-lg hover:bg-white/50"
      style={{ '--animation-order': index }}
    >
      <div className="flex justify-between items-start">
        <div className="flex-grow pr-4">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold text-gray-800">
              {item.name}
            </h3>
            <div className="flex space-x-1">
              {item.popular && <Award size={16} className="text-amber-500" title="Popular" />}
              {item.spicy && <Flame size={16} className="text-red-500" title="Spicy" />}
              {item.vegetarian && <Leaf size={16} className="text-green-500" title="Vegetarian" />}
              {item.glutenFree && <Wheat size={16} className="text-amber-700" title="Gluten Free" />}
            </div>
          </div>
          <p className="text-gray-600 mt-1 text-sm md:text-base">{item.description}</p>
        </div>
        <span className="text-xl font-bold text-red-800 whitespace-nowrap">{item.price}</span>
      </div>

      {item.popular && (
        <div className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-full transform rotate-3 shadow-sm hidden md:block">
          Popular
        </div>
      )}
    </div>
  );
};

export default MenuItem;
