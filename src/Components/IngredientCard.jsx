import React from 'react';

const IngredientCard = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white h-100 w-60 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="p-6 min-h-[160px] flex flex-col justify-between">
        <h3 className="text-lg font-semibold text-red-700 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      <div className="h-60 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default IngredientCard;