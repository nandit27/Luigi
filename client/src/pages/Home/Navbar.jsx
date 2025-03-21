import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionClick = (sectionId) => {
    if (location.pathname !== '/') {
      // If we're not on the home page, navigate to home first
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      // If we're already on the home page, just scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { name: "HOME", href: "/home" },
    { name: "MODELS", href: "/models" },
    { name: "DATASETS", href: "/datasets" },
    { 
      name: "ABOUT", 
      href: "#about",
      onClick: () => handleSectionClick('about')
    },
    { 
      name: "FAQ", 
      href: "#faq",
      onClick: () => handleSectionClick('faq')
    },
  ];

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scroll to section when navigating from another page
  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Small delay to ensure the page is loaded
      }
      // Clear the state after scrolling
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 bg-[#171717]/95 backdrop-blur-sm py-4`}>
      <nav className="max-w-[1140px] mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="images/logo.png"
              alt="Logo"
              className="h-[60px] w-[60px] hover:scale-105 transition-transform duration-300"
            />
            <span className="ml-2 text-[#32CD32] font-bold text-2xl hidden sm:block">
              LUIGI
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                onClick={item.onClick}
                className="cursor-pointer"
              >
                {item.onClick ? (
                  <span className="text-gray-300 hover:text-[#32CD32] transition-colors duration-300">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-[#32CD32] transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <button className="px-6 py-2 bg-gradient-to-r from-[#32CD32] to-[#00FF7F] text-black font-semibold rounded-lg 
              hover:from-[#00FF7F] hover:to-[#32CD32] transform hover:scale-105 transition-all duration-300
              hover:shadow-[0_0_15px_rgba(50,205,50,0.5)] focus:ring-2 focus:ring-[#32CD32] focus:ring-opacity-50">
              Connect
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 focus:outline-none"
          >
            <div className={`w-6 h-5 relative transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`}>
              <span className={`absolute h-0.5 w-full bg-[#32CD32] transform transition-all duration-300 
                ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'}`}></span>
              <span className={`absolute h-0.5 w-full bg-[#32CD32] transform transition-all duration-300 translate-y-2 
                ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute h-0.5 w-full bg-[#32CD32] transform transition-all duration-300 translate-y-4 
                ${isMobileMenuOpen ? '-rotate-45 -translate-y-0' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-[400px] opacity-100 visible mt-4' 
            : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="bg-[#171717]/95 backdrop-blur-md rounded-lg p-4 space-y-4">
            {navItems.map((item) => (
              <div
                key={item.name}
                onClick={() => {
                  item.onClick?.();
                  setIsMobileMenuOpen(false);
                }}
                className="py-2"
              >
                {item.onClick ? (
                  <span className="text-gray-300 hover:text-[#32CD32] transition-colors duration-300">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-[#32CD32] transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <button className="w-full px-6 py-2 bg-gradient-to-r from-[#32CD32] to-[#00FF7F] text-[#171717] font-semibold rounded-lg 
              hover:from-[#00FF7F] hover:to-[#32CD32] transform hover:scale-105 transition-all duration-300
              hover:shadow-[0_0_15px_rgba(255,129,66,0.3)]">
              Connect
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;