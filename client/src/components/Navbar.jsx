import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = ["HOME", "MODELS", "DATASETS", "ABOUT", "FAQ"];

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#171717]/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'
    }`}>
      <nav className="max-w-[1140px] mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/aaf39f326dac61e47f6251305cc3868b0b3f531a"
              alt="Logo"
              className="h-[60px] w-[60px] hover:scale-105 transition-transform duration-300"
            />
            <span className="ml-2 text-[#FF8142] font-bold text-2xl hidden sm:block">
              LUIGI
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-white font-semibold text-lg tracking-wider hover:text-[#FF8142] transition-colors duration-300 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF8142] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button className="px-6 py-2 bg-gradient-to-r from-[#FF8142] to-[#FF9061] text-white font-semibold rounded-lg 
              hover:from-[#FF9061] hover:to-[#FF8142] transform hover:scale-105 transition-all duration-300
              hover:shadow-[0_0_15px_rgba(255,129,66,0.3)] focus:ring-2 focus:ring-[#FF8142] focus:ring-opacity-50">
              Connect
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 focus:outline-none"
          >
            <div className={`w-6 h-5 relative transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`}>
              <span className={`absolute h-0.5 w-full bg-[#FF8142] transform transition-all duration-300 
                ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'}`}></span>
              <span className={`absolute h-0.5 w-full bg-[#FF8142] transform transition-all duration-300 translate-y-2 
                ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute h-0.5 w-full bg-[#FF8142] transform transition-all duration-300 translate-y-4 
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
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-white font-semibold py-2 px-4 hover:bg-[#FF8142]/10 rounded-lg transition-colors duration-300"
              >
                {item}
              </a>
            ))}
            <button className="w-full px-6 py-2 bg-gradient-to-r from-[#FF8142] to-[#FF9061] text-white font-semibold rounded-lg 
              hover:from-[#FF9061] hover:to-[#FF8142] transform hover:scale-105 transition-all duration-300
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
