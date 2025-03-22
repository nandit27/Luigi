import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from '../../context/AuthContext';
import { getAnnouncements } from '../../services/api';

const Navbar = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAnnouncementOpen, setIsAnnouncementOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, login, logout, isTeacher } = useAuth();

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

  // Fetch announcements when the popup is opened
  useEffect(() => {
    if (isAnnouncementOpen) {
      const fetchAnnouncements = async () => {
        try {
          const data = await getAnnouncements();
          setAnnouncements(data);
        } catch (error) {
          console.error('Error fetching announcements:', error);
        }
      };
      fetchAnnouncements();
    }
  }, [isAnnouncementOpen]);

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

  const handleGoogleSuccess = async (credentialResponse) => {
    const success = await login(credentialResponse);
  };

  const handleGoogleError = () => {
    console.error('Login failed');
  };

  // Replace the Connect button with this new component
  const AuthButton = () => {
    if (user) {
      return (
        <div className="flex items-center space-x-4">
          <span className="text-gray-300">{user.email}</span>
          <button
            onClick={logout}
            className="px-6 py-2 bg-gradient-to-r from-[#32CD32] to-[#00FF7F] text-black font-semibold rounded-lg 
              hover:from-[#00FF7F] hover:to-[#32CD32] transform hover:scale-105 transition-all duration-300"
          >
            Logout
          </button>
          <Link 
            to={user.role === 'admin' ? '/dashboard/admin' : '/dashboard/regular'}
            className="relative group"
          >
            <img 
              src={user.picture || '/default-avatar.png'} 
              alt="Profile" 
              className="w-10 h-10 rounded-full border-2 border-[#32CD32] transition-transform 
                duration-300 group-hover:scale-110"
            />
          </Link>
        </div>
      );
    }

    return (
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={handleGoogleError}
        useOneTap={false}
        theme="filled_black"
        shape="rectangular"
        text="signin_with"
        size="large"
        width="200"
        context="signin"
      />
    );
  };

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
            
            {/* Add Announcement Button */}
            <div className="relative">
              <button
                onClick={() => setIsAnnouncementOpen(!isAnnouncementOpen)}
                className="text-gray-300 hover:text-[#32CD32] transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>

              {/* Announcement Popup */}
              {isAnnouncementOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-[#171717] border border-[#32CD32]/20 rounded-lg shadow-lg shadow-[#32CD32]/10 p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-[#32CD32] font-semibold">Announcements</h3>
                    <button
                      onClick={() => setIsAnnouncementOpen(false)}
                      className="text-gray-400 hover:text-[#32CD32]"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="text-gray-300">
                    {announcements.length > 0 ? (
                      announcements.map((announcement) => (
                        <p key={announcement._id} className="mb-2">{announcement.content}</p>
                      ))
                    ) : (
                      <p className="mb-2">No new announcements</p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Replace Connect button with AuthButton */}
            <AuthButton />
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
            
            {/* Add Announcement Button to Mobile Menu */}
            <div className="py-2">
              <button
                onClick={() => setIsAnnouncementOpen(!isAnnouncementOpen)}
                className="flex items-center text-gray-300 hover:text-[#32CD32] transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                Announcements
              </button>
            </div>

            {/* Add AuthButton to Mobile Menu */}
            <div className="flex justify-center py-2">
              <AuthButton />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;