import React from 'react';
import MenuItem from './MenuItem';

const MenuPage = ({ category, isAnimating }) => {
  return (
    <div 
      className={`menu-card bg-white/90 rounded-lg shadow-2xl p-6 md:p-8 w-full min-h-[600px] transform transition-all duration-500 ${
        isAnimating ? 'scale-95 opacity-80' : 'scale-100 opacity-100'
      } ${category.theme || 'bg-white'}`}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 text-center">
        {category.title}
      </h2>
      
      {category.description && (
        <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto text-sm md:text-base italic">
          {category.description}
        </p>
      )}
      
      <div className="grid gap-4 md:gap-6">
        {category.items.map((item, index) => (
          <MenuItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
