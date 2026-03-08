import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MenuNavigation = ({ 
  onPageChange, 
  isAnimating, 
  currentPage, 
  categories 
}) => {
  return (
    <>
      {/* Navigation Arrows */}
      <button
        onClick={() => onPageChange('prev')}
        className="category-nav-button absolute left-0 z-10 transform -translate-x-1/2 bg-red-800 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-red-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2"
        disabled={isAnimating}
        aria-label="Previous menu category"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() => onPageChange('next')}
        className="category-nav-button absolute right-0 z-10 transform translate-x-1/2 bg-red-800 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-red-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2"
        disabled={isAnimating}
        aria-label="Next menu category"
      >
        <ChevronRight size={24} />
      </button>

      {/* Category Names (Visible on larger screens) */}
      <div className="hidden lg:flex absolute -top-14 left-0 right-0 justify-center space-x-8">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => !isAnimating && (currentPage !== index) && onPageChange(currentPage < index ? 'next' : 'prev')}
            className={`px-4 py-2 rounded-t-lg transition-all duration-300 text-sm font-medium ${
              currentPage === index 
                ? 'bg-white text-red-800 shadow-md transform -translate-y-1' 
                : 'bg-red-800/10 text-gray-700 hover:bg-red-800/20'
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>
    </>
  );
};

export default MenuNavigation;
