import React from 'react';

const MenuPagination = ({ 
  totalPages, 
  currentPage, 
  onPageSelect 
}) => {
  return (
    <div className="flex justify-center items-center mt-8 space-x-2">
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          className={`h-3 rounded-full transition-all duration-300 page-indicator ${
            currentPage === index ? 'bg-red-800 active w-6' : 'bg-red-300 w-3'
          }`}
          onClick={() => onPageSelect(index)}
          aria-label={`Go to menu page ${index + 1}`}
          aria-current={currentPage === index ? 'page' : undefined}
        />
      ))}
    </div>
  );
};

export default MenuPagination;
