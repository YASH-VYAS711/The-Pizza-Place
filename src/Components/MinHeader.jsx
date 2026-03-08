import { Link } from 'react-router-dom';

export default function MinHeader() {
  const linkstyle="hover:text-yellow-300 transition-colors font-medium text-lg";
  return (
    <header className="bg-red-700 text-white shadow-md py-6 h-25">
      <nav className="container mx-auto px-4 h-full">
        <div className="flex items-center h-full relative">
          {/* Left-aligned navigation links */}
          <ul className="flex space-x-10 absolute left-0">
          <li>
              <Link 
                to="/" 
                className={linkstyle}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/menu" 
                className={linkstyle}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={linkstyle}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={linkstyle}
              >
                Contact
              </Link>
            </li>
          </ul>
          
          {/* Centered logo with Home link */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
            
            <Link to="/">
              <img
                src="/logo.png"
                alt="The Pizza Place logo"
                className="h-20 w-auto border border-black"
              />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}