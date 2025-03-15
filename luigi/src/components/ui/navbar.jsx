import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full bg-black/95 backdrop-blur-sm fixed top-0 z-50 border-b border-white/5"
    >
      <div className="flex items-center justify-between h-16 px-8 pr-16 max-w-[1800px] mx-auto">
        {/* Logo */}
        <motion.div 
          className="w-[120px]"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <NavLink to="/" className="block">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-[45px] w-[45px] object-contain drop-shadow-[0_0_15px_rgba(255,89,0,0.3)]"
            />
          </NavLink>
        </motion.div>

        {/* Navigation Links */}
        <div className="flex items-center justify-end flex-1">
          <div className="flex items-center">
            {[
              { path: "/", label: "HOME" },
              { path: "/models", label: "MODELS" },
              { path: "/datasets", label: "DATASETS" },
              { path: "/about", label: "ABOUT" },
              { path: "/faq", label: "FAQ" }
            ].map((item, index) => (
              <NavLink 
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  relative text-[14px] font-medium tracking-[1px] uppercase 
                  transition-all duration-300 px-6 select-none
                  ${isActive ? 'text-[#ff5900]' : 'text-white hover:text-[#ff5900]'}
                  before:content-[''] before:absolute before:bottom-0 before:left-0 
                  before:w-full before:h-[1px] before:bg-[#ff5900] before:scale-x-0 
                  before:origin-right before:transition-transform before:duration-300
                  hover:before:scale-x-100 hover:before:origin-left
                  after:content-[''] after:absolute after:inset-0 after:z-10
                  after:bg-white/0 hover:after:bg-white/5 after:rounded-md
                  after:transition-colors after:duration-300
                `}
              >
                <span className="relative z-10">
                  {item.label}
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}