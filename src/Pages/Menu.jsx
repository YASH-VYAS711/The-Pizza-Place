import React, { useState, useEffect } from 'react';
import MenuHeader from '../Components/menu/MenuHeader';
import MenuNavigation from '../Components/menu/MenuNavigation';
import MenuPage from '../Components/menu/MenuPage';
import MenuPagination from '../Components/menu/MenuPagination';
import menuData from '../data/menuData.ts'; // Assuming you have a JSON file with menu data

const Menu = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const totalPages = menuData.length;

  const handlePageChange = (direction) => {
    if (isAnimating) return;

    setIsAnimating(true);
    const newPage =
      direction === 'next'
        ? (currentPage + 1) % totalPages
        : (currentPage - 1 + totalPages) % totalPages;

    setCurrentPage(newPage);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePageSelect = (pageIndex) => {
    if (isAnimating || pageIndex === currentPage) return;

    setIsAnimating(true);
    setCurrentPage(pageIndex);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePageChange('prev');
      } else if (e.key === 'ArrowRight') {
        handlePageChange('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, isAnimating]);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;

    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handlePageChange('next');
      } else {
        handlePageChange('prev');
      }
    }

    setTouchStart(null);
  };

  return (
    <div className="min-h-screen bg-[#f8f4e9] py-8 md:py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <MenuHeader />

        <div
          className="relative flex items-center justify-center mt-16"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <MenuNavigation
            onPageChange={handlePageChange}
            isAnimating={isAnimating}
            currentPage={currentPage}
            categories={menuData}
          />

          <MenuPage
            category={menuData[currentPage]}
            isAnimating={isAnimating}
          />
        </div>

        <MenuPagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageSelect={handlePageSelect}
        />

        {/* Menu Legend */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-gray-600">
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-1"></span>
            <span>Spicy</span>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-1"></span>
            <span>Vegetarian</span>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 bg-amber-500 rounded-full mr-1"></span>
            <span>Popular</span>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 bg-amber-700 rounded-full mr-1"></span>
            <span>Gluten Free</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
