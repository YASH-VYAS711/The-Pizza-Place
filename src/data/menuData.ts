export interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
  popular?: boolean;
  spicy?: boolean;
  vegetarian?: boolean;
  vegan?: boolean;
  glutenFree?: boolean;
}

export interface MenuCategory {
  title: string;
  description?: string;
  items: MenuItem[];
  theme?: string;
}

const menuData: MenuCategory[] = [
  {
    title: "Signature Pizzas",
    description: "Our chef-crafted pizzas with premium ingredients and perfect flavor combinations",
    theme: "bg-red-50",
    items: [
      { 
        name: "Margherita Classic", 
        description: "Fresh tomatoes, buffalo mozzarella, basil, extra virgin olive oil", 
        price: "$14.99",
        vegetarian: true,
        popular: true 
      },
      { 
        name: "Pepperoni Supreme", 
        description: "Double pepperoni, extra mozzarella, oregano, tomato sauce", 
        price: "$16.99",
        popular: true 
      },
      { 
        name: "Vegetarian Delight", 
        description: "Bell peppers, mushrooms, red onions, black olives, tomatoes, mozzarella", 
        price: "$15.99",
        vegetarian: true 
      },
      { 
        name: "BBQ Chicken", 
        description: "Grilled chicken, red onions, cilantro, smoky BBQ sauce, mozzarella", 
        price: "$17.99" 
      },
      { 
        name: "Mediterranean", 
        description: "Feta cheese, kalamata olives, sun-dried tomatoes, spinach, red onions, herbs", 
        price: "$16.99",
        vegetarian: true 
      },
      { 
        name: "Spicy Diavola", 
        description: "Spicy salami, hot peppers, chili flakes, mozzarella, tomato sauce", 
        price: "$16.99",
        spicy: true 
      }
    ]
  },
  {
    title: "Create Your Own",
    description: "Start with our fresh base and customize with your favorite toppings",
    theme: "bg-amber-50",
    items: [
      { 
        name: "Basic Cheese", 
        description: "Tomato sauce, mozzarella cheese on our handcrafted dough", 
        price: "$12.99",
        vegetarian: true 
      },
      { 
        name: "Classic Meat Toppings", 
        description: "Pepperoni, sausage, bacon, ham, grilled chicken", 
        price: "$2.50 each" 
      },
      { 
        name: "Fresh Vegetable Toppings", 
        description: "Mushrooms, bell peppers, onions, olives, tomatoes, spinach, jalapeños", 
        price: "$1.50 each",
        vegetarian: true,
        vegan: true 
      },
      { 
        name: "Premium Toppings", 
        description: "Prosciutto, anchovies, artichoke hearts, sun-dried tomatoes, goat cheese", 
        price: "$3.50 each" 
      },
      { 
        name: "Extra Cheese Options", 
        description: "Extra mozzarella, feta, gorgonzola, ricotta, dairy-free alternatives", 
        price: "$2.99",
        vegetarian: true 
      },
      { 
        name: "Specialty Sauces", 
        description: "BBQ, Alfredo, Pesto, Spicy Marinara, Garlic Olive Oil", 
        price: "$1.99" 
      }
    ]
  },
  {
    title: "Sides & Extras",
    description: "Perfect companions to complete your meal",
    theme: "bg-green-50",
    items: [
      { 
        name: "Garlic Bread", 
        description: "Fresh baked bread with garlic butter and melted mozzarella", 
        price: "$5.99",
        vegetarian: true 
      },
      { 
        name: "Caesar Salad", 
        description: "Crisp romaine, house-made croutons, shaved parmesan, Caesar dressing", 
        price: "$7.99" 
      },
      { 
        name: "Chicken Wings", 
        description: "Choice of Buffalo, BBQ, or Garlic Parmesan sauce (6 pcs)", 
        price: "$8.99",
        popular: true 
      },
      { 
        name: "Mozzarella Sticks", 
        description: "Golden-fried with our special marinara dipping sauce (8 pcs)", 
        price: "$6.99",
        vegetarian: true 
      },
      { 
        name: "Loaded Cheesy Fries", 
        description: "Crispy fries topped with melted cheese, bacon bits and ranch dipping sauce", 
        price: "$5.99" 
      },
      { 
        name: "Italian Sodas", 
        description: "Handcrafted sodas in various flavors with optional cream", 
        price: "$3.99",
        vegetarian: true,
        vegan: true,
        glutenFree: true 
      }
    ]
  }
];

export default menuData;