import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const footerSections = {
    about: {
      title: "About LUIGI",
      links: [
        { text: "Our Mission", href: "/about" },
        { text: "For Students", href: "/students" },
        { text: "For Universities", href: "/universities" },
        { text: "Success Stories", href: "/success-stories" }
      ]
    },
    resources: {
      title: "Resources",
      links: [
        { text: "Dataset Library", href: "/datasets" },
        { text: "Project Ideas", href: "/project-ideas" },
        { text: "Documentation", href: "/docs" },
        { text: "API Access", href: "/api" }
      ]
    },
    support: {
      title: "Support",
      links: [
        { text: "Help Center", href: "/help" },
        { text: "Dataset Guidelines", href: "/guidelines" },
        { text: "Contact Us", href: "/contact" },
        { text: "Report Issues", href: "/report" }
      ]
    },
    legal: {
      title: "Legal",
      links: [
        { text: "Terms of Use", href: "/terms" },
        { text: "Privacy Policy", href: "/privacy" },
        { text: "Dataset Licensing", href: "/licensing" },
        { text: "Academic Usage", href: "/academic-usage" }
      ]
    }
  };

  return (
    <footer className="bg-[#171717] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6">LUIGI</h3>
            <p className="text-gray-400 mb-4">
              Empowering students with high-quality datasets for academic projects. 
              Making data-driven development accessible and efficient for educational purposes.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Links */}
              <a href="https://github.com" className="text-[#32CD32] hover:text-white transition-colors duration-300">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="https://linkedin.com" className="text-[#32CD32] hover:text-white transition-colors duration-300">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="https://twitter.com" className="text-[#32CD32] hover:text-white transition-colors duration-300">
                <i className="fab fa-twitter text-xl"></i>
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-[#32CD32] transition-colors duration-300"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 LUIGI. All rights reserved. Dedicated to supporting student projects.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-gray-400 hover:text-[#32CD32] text-sm transition-colors duration-300">
                Terms
              </Link>
              <Link to="/privacy" className="text-gray-400 hover:text-[#32CD32] text-sm transition-colors duration-300">
                Privacy
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-[#32CD32] text-sm transition-colors duration-300">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
