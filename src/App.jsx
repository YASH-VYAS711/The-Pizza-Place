import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Menu from './Pages/Menu.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Header from './Components/Header.jsx';
import MinHeader from './Components/MinHeader';
import Footer from './Components/Footer';
import ScrollToTop from "./Components/ScrollToTop";

function HeaderSelector() {
  const location = useLocation();
  return location.pathname === '/' ? <Header /> : <MinHeader />;
}


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans">
        <HeaderSelector />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;