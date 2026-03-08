import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Heart } from 'lucide-react';
import InfernoNoir from '../Components/InfernoNoir';
import IngredientsSection from '../Components/IngredientsSection';

const FRAME_START = 1;
const FRAME_END = 148;
const FRAME_STEP = 3;
const IMAGE_PATH = '/imagesequence/scene';
const LOADER_PATH = '/Pizza-sliced.gif';

const frameNumbers = [];
for (let i = FRAME_START; i <= FRAME_END; i += FRAME_STEP) {
  frameNumbers.push(i);
}
const NUM_IMAGES = frameNumbers.length;

function usePreloadImages(frames) {
  const [loaded, setLoaded] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let loadCount = 0;
    const promises = frames.map((frame) => {
      return new Promise((resolve) => {
        const img = new window.Image();
        const src = `${IMAGE_PATH}${String(frame).padStart(5, '0')}.jpeg`;
        img.src = src;
        img.onload = () => {
          loadCount += 1;
          if (isMounted) setLoaded(loadCount);
          resolve();
        };
        img.onerror = () => {
          loadCount += 1;
          if (isMounted) setLoaded(loadCount);
          // Optionally: reject(); or just resolve();
          resolve();
        };
      });
    });

    Promise.all(promises)
      .catch(() => {
        if (isMounted) setError(true);
      });

    return () => { isMounted = false; };
  }, [frames]);

  return { loaded, error };
}

const Home = () => {
  const heroRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const { loaded, error } = usePreloadImages(frameNumbers);
  const allLoaded = loaded === NUM_IMAGES;

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScroll = rect.height - windowHeight;
      const scrollTop = Math.min(Math.max(-rect.top, 0), totalScroll);
      const progress = scrollTop / totalScroll;
      const idx = Math.floor(progress * (NUM_IMAGES - 1));
      setScrollIndex(idx);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans">
      <main id="home" className="bg-white">
        {/* Header and Scroll Indicator */}
        <header className="relative z-10 pt-10 pb-6 bg-white shadow">
          <h1 className="text-6xl font-bold text-red-600 mb-3 text-center">Welcome to The Pizza Place</h1>
          <p className="text-xl bold italic text-center text-black mt-3">
            "There are pizza places… and then there's The Pizza Place."
          </p>
          <br />
          <p className="text-2xl text-gray-600 text-center mb-3 flex items-center justify-center gap-2">
            Best pizza in town, made with love <Heart className="w-6 h-6 text-red-500 fill-current" />!
          </p>
        </header>
        <div className="relative z-10 mb-4">
          <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
            <p className="text-gray-600 mb-2">Scroll to take a slice</p>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto relative flex items-center justify-center">
              <ChevronDown className="w-4 h-4 text-gray-400 animate-bounce" style={{ animationDuration: '1.5s' }} />
            </div>
          </div>
        </div>

        {/* Hero Section with Image Sequence */}
        <section
          ref={heroRef}
          className="relative min-h-[200vh] bg-gray-100 -mt-6"
        >
          <div className="sticky top-0 h-screen w-full flex items-center justify-center z-0">
            {!allLoaded || error ? (
              <div className="text-center">
                <img
                  src={LOADER_PATH}
                  alt="Loading pizza..."
                  className="w-32 h-32 mx-auto"
                  onError={(e) => {
                    console.error('Failed to load loader GIF');
                    e.target.style.display = 'none';
                  }}
                />
                {error && <p className="text-red-500 mt-2">Error loading images!</p>}
              </div>
            ) : (
              <img
                src={`${IMAGE_PATH}${String(frameNumbers[scrollIndex]).padStart(5, '0')}.jpeg`}
                alt={`Pizza animation frame ${frameNumbers[scrollIndex]}`}
                className="w-full h-full object-cover"
                draggable={false}
              />
            )}
          </div>
        </section>

        {/* Inferno Noir Section */}
        <InfernoNoir />
        <IngredientsSection />
        {/* Restaurant Content */}
        
         <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-red-700 mb-4">Our Story</h2>
                <p className="text-gray-700 mb-6">
                  For over two decades, we've been crafting the perfect pizza using traditional recipes 
                  passed down through generations. Our commitment to quality ingredients and authentic 
                  cooking methods has made us a beloved part of the community.
                </p>
                <Link to="/about" className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
                  Learn More About Us
                </Link>
              </div>
              <div className="relative">
                <img 
                  src="pizza fire black orange red _The Pizza Place_ (2).jpg"
                  alt="Pizza making process"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-red-700 mb-8">What Our Customers Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Sarah M.",
                  review: "The best pizza I've ever had! The crust is perfectly crispy and the toppings are always fresh.",
                  rating: 5
                },
                {
                  name: "John D.",
                  review: "Great atmosphere, friendly staff, and amazing food. This is our family's favorite pizza place!",
                  rating: 5
                },
                {
                  name: "Mike R.",
                  review: "The authentic Italian flavors and cozy atmosphere make this place truly special.",
                  rating: 5
                }
              ].map((review, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-yellow-400 mb-4">
                    {"★".repeat(review.rating)}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{review.review}"</p>
                  <p className="text-gray-600 font-semibold">{review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Restaurant Ambiance */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-red-700 mb-8 text-center">Experience The Atmosphere</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <img 
                src="/Atmosphere/Atmosphere 1.png"
                alt="Restaurant interior with tasty food"
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full h-64 object-cover"
              />
              <img 
                src="/Atmosphere/Atmosphere 2.png"
                alt="Restaurant interior"
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full h-64 object-cover"
              />
              <img 
                src="/Atmosphere/Atmosphere 3.png"
                alt="Dining area"
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full h-64 object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;