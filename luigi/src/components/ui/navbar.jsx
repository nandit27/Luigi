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
                  transition-all duration-300 hover:text-[#ff5900] group px-6
                  ${isActive ? 'text-[#ff5900]' : 'text-white'}
                `}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.span>
                <motion.div 
                  className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#ff5900] group-hover:w-full transition-all duration-300"
                  whileHover={{ width: "100%" }}
                />
                <div className="absolute -inset-x-2 -inset-y-2 bg-white/0 group-hover:bg-white/5 rounded-md transition-all duration-300" />
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}