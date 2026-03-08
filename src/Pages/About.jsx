import { Users, Award, Clock, Heart, ChefHat, Flame } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#be3636] via-[#630f00f3] to-[#f16b6b] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-64 h-64 rounded-full bg-orange-400 blur-3xl -top-16 -right-16 animate-pulse"></div>
          <div className="absolute w-48 h-48 rounded-full bg-amber-500 blur-3xl bottom-16 left-16 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-6xl font-bold mb-6 text-white">About The Pizza Place</h1>
          <p className="text-2xl text-orange-200 max-w-3xl mx-auto leading-relaxed">
            Where passion meets perfection, and every slice tells a story of tradition, quality, and love.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center mb-6">
                <Heart className="text-red-600 mr-3" size={32} />
                <h2 className="text-4xl font-bold text-red-700">Our Story</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 2001, The Pizza Place began as a dream to bring authentic Italian flavors to our community. What started as a small family kitchen has grown into the beloved gathering place you know today.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                For over two decades, we've been perfecting our craft using traditional Italian recipes that have been refined through generations of pizza makers. Our commitment to authentic ingredients, time-honored techniques, and genuine hospitality has made us more than just a restaurant – we're part of the community.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every pizza that leaves our wood-fired oven carries with it the passion, tradition, and love that defines who we are. We don't just make pizza; we create memories, one slice at a time.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
                <img 
                  src="/About/Pizza story.png"
                  alt="Traditional pizza making"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-semibold">Traditional Italian Craftsmanship</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Recipes Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-700 mb-4">Our Traditional Recipes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every recipe we use has been carefully developed and refined over decades, combining authentic Italian techniques with the finest ingredients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Signature Dough</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our pizza dough is made fresh daily using a recipe that combines Italian "00" flour, sea salt, and a carefully cultivated sourdough starter. The dough is cold-fermented for 48-72 hours, developing complex flavors and creating the perfect texture – crispy on the outside, tender and airy on the inside.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This slow fermentation process not only enhances flavor but also makes our pizza more digestible, following the traditional Neapolitan method that has been perfected over centuries.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/About/Pizza Signature Dough.png"
                alt="Fresh pizza dough"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/About/san_marzano_tomatoes.png"
                alt="San Marzano tomatoes"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Authentic San Marzano Sauce</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our tomato sauce is made exclusively from San Marzano tomatoes, grown in the volcanic soil of Mount Vesuvius. These tomatoes are renowned for their sweet flavor, low acidity, and perfect balance – the gold standard for authentic Neapolitan pizza.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We prepare our sauce simply: crushing the tomatoes by hand, adding a pinch of sea salt, fresh basil, and the finest extra virgin olive oil. No cooking required – the heat of our wood-fired oven does the rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-red-700 mb-12 text-center">What We Stand For</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="text-red-600" size={48} />,
                title: "Quality First",
                description: "We source only the finest ingredients, from San Marzano tomatoes to fresh mozzarella made daily. Every component is carefully selected to ensure exceptional taste."
              },
              {
                icon: <Clock className="text-red-600" size={48} />,
                title: "Time-Honored Tradition",
                description: "Our recipes have been perfected over generations. We honor traditional Italian methods while embracing innovation to create unforgettable flavors."
              },
              {
                icon: <Users className="text-red-600" size={48} />,
                title: "Community Heart",
                description: "We're more than a restaurant – we're a gathering place where families create memories, friends reconnect, and our community comes together."
              }
            ].map((value, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Italian Chefs Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <ChefHat className="text-red-600 mr-3" size={40} />
              <h2 className="text-4xl font-bold text-red-700">Our Italian Chefs</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our kitchen is led by authentic Italian chefs who bring generations of culinary expertise and passion for traditional pizza making.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Masters of Their Craft</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our Italian chefs trained in the heart of Naples, where pizza was born. They learned the ancient art of pizza making from master pizzaiolos, understanding not just the techniques, but the soul of authentic Italian cuisine.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Each chef brings their own regional expertise – from the classic Margherita of Naples to the rustic flavors of Sicily. Their combined knowledge creates a menu that celebrates the diversity and richness of Italian culinary tradition.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With over 40 years of combined experience, our chefs maintain the highest standards of authenticity while innovating with seasonal ingredients and modern techniques.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/About/Italian Chef.png"
                alt="Italian chef preparing pizza"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-semibold">Authentic Italian Expertise</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Neapolitan Tradition",
                description: "Trained in the birthplace of pizza, our chefs master the art of the perfect Neapolitan crust – soft, chewy, and charred to perfection in our wood-fired oven."
              },
              {
                title: "Regional Specialties",
                description: "From Roman-style thin crust to Sicilian thick crust, our chefs bring authentic regional variations that showcase Italy's diverse pizza heritage."
              },
              {
                title: "Artisan Techniques",
                description: "Hand-stretching dough, wood-fired cooking, and traditional ingredient combinations – our chefs preserve the time-honored methods of Italian pizza making."
              }
            ].map((specialty, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold text-gray-800 mb-4">{specialty.title}</h4>
                <p className="text-gray-600 leading-relaxed">{specialty.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <ChefHat className="text-red-500 mr-3" size={40} />
              <h2 className="text-4xl font-bold">Our Craft</h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every pizza is a masterpiece, crafted with precision and passion in our traditional wood-fired oven.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Fresh Dough",
                description: "Hand-stretched daily using our traditional Italian recipe, cold-fermented for 48-72 hours for perfect texture and flavor."
              },
              {
                step: "02",
                title: "Premium Sauce",
                description: "San Marzano tomatoes, fresh herbs, and extra virgin olive oil create our signature sauce base."
              },
              {
                step: "03",
                title: "Quality Toppings",
                description: "Fresh mozzarella di bufala, premium Italian meats, and locally-sourced vegetables top every pizza."
              },
              {
                step: "04",
                title: "Wood-Fired Magic",
                description: "Baked at 900°F in our authentic Neapolitan wood-fired oven for that perfect leopard-spotted crust."
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-red-500 mb-4">{process.step}</div>
                <h3 className="text-xl font-bold mb-4">{process.title}</h3>
                <p className="text-gray-300 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-700 mb-12">Awards & Recognition</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                year: "2023",
                award: "Best Pizza in Town",
                organization: "City Food Awards"
              },
              {
                year: "2022",
                award: "Excellence in Service",
                organization: "Restaurant Association"
              },
              {
                year: "2021",
                award: "Community Choice",
                organization: "Local Business Awards"
              },
              {
                year: "2020",
                award: "Authentic Italian",
                organization: "Culinary Institute"
              }
            ].map((award, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-red-600 mb-2">{award.year}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{award.award}</h3>
                <p className="text-gray-600">{award.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#be4242] via-[#b34b4b] to-[#f16b6b] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Flame className="text-orange-300 mr-3" size={40} />
            <h2 className="text-4xl font-bold">Experience The Difference</h2>
          </div>
          <p className="text-xl mb-8 leading-relaxed">
            Come taste the passion, tradition, and love that goes into every pizza we make. 
            Join our family and discover why we're more than just a pizza place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <Link 
            to="/contact"
            className="px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300 text-lg inline-block text-center cursor-pointer"
          >
            Visit Us Today
          </Link>
          <Link 
            to="/menu"
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-red-600 transition-colors duration-300 text-lg inline-block text-center cursor-pointer"
          >
            View Our Menu
          </Link>
          </div>
        </div>
      </section>
    </main>
  );
}