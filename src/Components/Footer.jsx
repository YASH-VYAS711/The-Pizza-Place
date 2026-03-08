import { Link } from 'react-router-dom';
import { Navigation, Clock, Phone, MapPin, Mail, Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-red-900 via-red-800 to-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-1">
          {/* Navigation Links */}
          <div>
            <h1 className="text-xl font-bold mb-1 flex items-center">
              <Navigation className="mr-1" size={20} /> Quick Links
            </h1>
            <ul className="space-y-1 text-lg">
              {[
                { name: 'Home', path: '/' },
                { name: 'Menu', path: '/menu' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-red-300 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div className='text-lg'>
            <h3 className="font-bold mb-1 flex items-center">
              <Clock className="mr-1" size={20} /> Hours
            </h3>
            <div className="space-y-0.5">
              <p>Mon–Fri: 11:00 AM – 10:00 PM</p>
              <p>Sat–Sun: 12:00 PM – 11:00 PM</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className='text-lg'>
            <h3 className="font-bold mb-1 flex items-center">
              <Phone className="mr-1" size={20} /> Contact Us
            </h3>
            <address className="not-italic space-y-0.5">
              <p className="flex items-center"><MapPin className="mr-1" size={16} /> 123 Pizza Street, Flavor Town</p>
              <p className="flex items-center"><Phone className="mr-1" size={16} /> (123) 456-7890</p>
              <p className="flex items-center"><Mail className="mr-1" size={16} /> contact@thepizzaplace.com</p>
            </address>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mb-2">
          {[
            { name: 'Instagram', icon: Instagram },
            { name: 'Facebook', icon: Facebook },
            { name: 'Twitter', icon: Twitter },
            { name: 'WhatsApp', icon: MessageCircle },
          ].map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={`#${social.name.toLowerCase()}`}
                className="hover:opacity-80 transition-opacity duration-200"
                aria-label={social.name}
              >
                <IconComponent size={32} className="text-white" />
              </a>
            );
          })}
        </div>

        {/* Legal Info */}
        <div className="text-center text-[12px] text-gray-400 border-t border-white/10 pt-2">
          <p>© 2025 The Pizza Place. All rights reserved.</p>
          <p className="mt-0.5">
            <a href="#privacy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>{' '}
            |{' '}
            <a href="#terms" className="hover:text-white transition-colors duration-200">
              Terms & Conditions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;