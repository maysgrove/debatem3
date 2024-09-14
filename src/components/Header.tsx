import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaSearch, FaTimes, FaBars } from 'react-icons/fa'; // Import icons
import SignIn from './SignIn';
import { motion } from 'framer-motion';

interface UniversalHeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  toggleSidebar: () => void; // Add this prop
}

const Header: React.FC<UniversalHeaderProps> = ({ isDarkMode, toggleDarkMode, toggleSidebar }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 h-[60px] w-full flex items-center justify-between ${
        isDarkMode ? 'bg-darkMode text-white' : 'bg-lightMode text-black'
      } shadow-[inset_0_0px_3px_rgba(0,0,0,0.6)] px-4 py-2 transition-transform duration-300 ease-in-out z-40`}
      initial={{ opacity: 0 }} // Initial state for animation
      animate={{ opacity: 1 }} // Final state for animation
      transition={{ duration: 0.5 }} // Transition duration
    >
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="mr-4"
        aria-label="Toggle Sidebar"
      >
        <FaBars className={isDarkMode ? 'text-white' : 'text-black'} size={24} />
      </button>

      {isSearchOpen ? (
        // Only show the search bar when isSearchOpen is true
        <div className="flex-grow flex items-center w-full">
          <input
            type="text"
            placeholder="Search"
            className={`h-8 w-full border rounded-md pl-2 ${
              isDarkMode
                ? 'bg-gray-700 text-white border-gray-500'
                : 'bg-white text-black border-gray-300'
            } text-sm lg:text-base`}
          />
          <button
            onClick={toggleSearch}
            className="ml-2"
            aria-label="Close Search"
          >
            <FaTimes className={isDarkMode ? 'text-white' : 'text-black'} size={20} />
          </button>
        </div>
      ) : (
        // Show the entire header content when isSearchOpen is false
        <>
          <h1 className="text-2xl lg:text-3xl font-semibold">
            DEBATE.ME
          </h1>

          <div className="flex-grow flex items-center mx-2">
            {/* Conditionally render search bar based on window width */}
            {windowWidth >= 768 && (
              <input
                type="text"
                placeholder="Search Debates, Debaters, Topics"
                className={`h-8 w-full md:w-[60%] lg:w-[50%] border rounded-md pl-2 ${
                  isDarkMode
                    ? 'bg-gray-700 text-white border-gray-500'
                    : 'bg-white text-black border-gray-300'
                } text-sm lg:text-base`}
              />
            )}
          </div>

          <div className="flex items-center space-x-4">
            {/* Create Account button */}
            <button
              onClick={toggleModal}
              className={`font-bold px-3 lg:px-4 h-8 text-nowrap lg:h-10 rounded text-md lg:text-base transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}
            >
              Create Account
            </button>

            {/* Search toggle button */}
            <button
              onClick={toggleSearch}
              className="block md:hidden"
              aria-label="Toggle Search"
            >
              {isSearchOpen ? (
                <FaTimes className={isDarkMode ? 'text-white' : 'text-black'} size={20} />
              ) : (
                <FaSearch className={isDarkMode ? 'text-white' : 'text-black'} size={20} />
              )}
            </button>

            {/* Dark mode toggle button */}
            <button
              onClick={toggleDarkMode}
              className="flex items-center justify-center p-2 rounded-full transition-colors duration-300"
              aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'} // Tooltip
            >
              {isDarkMode ? (
                <FaSun className="text-yellow-400" size={24} />
              ) : (
                <FaMoon className="text-gray-700" size={24} />
              )}
            </button>
          </div>
        </>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <SignIn onClose={() => setIsModalOpen(false)} isOpen={isModalOpen} />
        </div>
      )}
    </motion.header>
  );
};

export default Header;
