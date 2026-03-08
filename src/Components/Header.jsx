import { Link } from 'react-router-dom';
export default function Header() {
  return (


<header
      className="text-white bg-center bg-cover h-47 flex items-center justify-center shadow-lg"
      style={{
        backgroundImage: "url('/headerBanner.png')",
        backgroundSize: "contain",
      }}
    >
          <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
      <nav className="w-full">
      <ul className="grid grid-cols-5 items-center text-center text-2xl tracking-wide font-semibold uppercase" style={{ fontFamily: '"Bebas Neue", cursive' }}>
          <li><Link to="/" className="hover:text-yellow-500">Home</Link></li>
          <li><Link to="/menu" className="hover:text-yellow-500">Menu</Link></li>
          <li>
            <img
              src="/logo.png"
              alt="The Pizza Place logo"
              className="border-black border-[1px] w-45 h-37 m-0.5 mx-auto"
            />
          </li>
          <li><Link to="/about" className="  hover:text-yellow-500">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-500">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
