import React from 'react';
import { Pizza } from 'lucide-react';

const MenuHeader = ({ showLogo = true }) => {
  return (
    <div className="text-center mb-8 md:mb-12">
      {showLogo && (
        <div className="flex justify-center mb-4">
          <div className="bg-red-800 text-white p-3 rounded-full">
            <Pizza size={40} />
          </div>
        </div>
      )}

      <h1 className="text-4xl md:text-5xl font-bold text-red-800 relative inline-block">
        Our Menu
        <span className="absolute -bottom-2 left-0 right-0 h-1 bg-red-800 rounded-full"></span>
      </h1>

      <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm md:text-base">
        Made with love using only the freshest ingredients and traditional techniques.
        All of our pizzas are hand-stretched and baked in our wood-fired oven.
      </p>
    </div>
  );
};

export default MenuHeader;
