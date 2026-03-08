import { Flame } from 'lucide-react';
const InfernoNoir = () => {
  return (
    <section className="relative h-[50vh] min-h-[400px] bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-48 h-48 rounded-full bg-red-600 blur-2xl -top-8 -right-8"></div>
        <div className="absolute w-48 h-48 rounded-full bg-orange-500 blur-2xl bottom-8 left-8"></div>
      </div>
      
      <div className="container h-full mx-auto px-4 relative z-10 max-w-6xl flex items-center">
        <div className="flex flex-col md:flex-row items-center gap-6 size-10 w-full">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="text-4xl font-bold text-red-500 mb-8 text-center md:text-left">Try our signature Pizza</h2>
            
            <div className="mb-4 flex items-center">
               <Flame className="text-red-500 mr-2" size={28} />
              <h3 className="text-5xl inferno-title">The Inferno Noir Pizza</h3>
            </div>
            
            <p className="text-2sm mb-3 leading-relaxed">
              The Inferno Noir is a bold artisan pizza born from fire and forged in flavor. Baked in a blazing wood-fired oven, 
              it features our signature charred black garlic and squid ink sauce — a smoky, umami-rich base unlike anything you've tasted.
            </p>
            
            <p className="text-2sm mb-3 leading-relaxed">
              Crowned with molten discs of fresh mozzarella, each one caramelized to golden perfection, the cheese forms glowing 
              islands of creamy richness against the dramatic black canvas.
            </p>
            
            <div className="mt-4">
              <button className="px-8 py-4 text-xl bg-red-600 hover:bg-red-700 transition-colors duration-300 rounded-lg text-white font-bold flex items-center">
                <span className="mr-2 text-xl">🔥</span>
                Order Inferno Noir
              </button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2 mb-4 md:mb-0">
            <div className="relative rounded-lg overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30 z-10"></div>
              <img 
                src="inferno noir.png" 
                alt="The Inferno Noir Pizza" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfernoNoir;