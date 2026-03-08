import React from 'react';
import IngredientCard from './IngredientCard';

const ingredients = [
  {
    title: "Sourdough Base",
    description: "Light, airy, flavourful sourdough, patiently proved for 24 to 48 hours.",
    imageUrl: "base.png"},
  {
    title: "Premium Cheese",
    description: "Cheese so fresh it squeaks, from happy cows across India and Europe.",
    imageUrl: "cheese.png"
  },
  {
    title: "Quality Flour",
    description: "High protein flour with zero additives, preservatives or stabilisers.",
    imageUrl: "flour.png"
  },
  {
    title: "Perfect Crust",
    description: "Superbly crusty and perfectly charred in specially-built brick ovens.",
    imageUrl: "crust.png"
  },
  {
    title: "Authentic Sauce",
    description: "Sauce made using an Italian family recipe with San Marzanos from southern Italy.",
    imageUrl: "sauce.png"
  }
];

const IngredientsSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-red-700 mb-2 text-center">Our Premium Ingredients</h2>
        <br></br><p className="text-gray-600 text-lg text-center mb-12 max-w-3xl mx-auto">
          We select only the finest ingredients to create the perfect pizza experience. 
          Quality is our top priority - you can taste the difference in every bite.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-5 gap-40">
          {ingredients.map((ingredient, index) => (
            <IngredientCard 
              key={index}
              title={ingredient.title}
              description={ingredient.description}
              imageUrl={ingredient.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;