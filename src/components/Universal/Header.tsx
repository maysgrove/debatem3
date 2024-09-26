import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaSearch, FaTimes, FaBars } from 'react-icons/fa'; 

interface UniversalHeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  toggleSidebar: () => void; 
}

const Header: React.FC<UniversalHeaderProps> = ({ isDarkMode, toggleDarkMode, toggleSidebar }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleSearch = () => setIsSearchOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`fixed top-0 left-0 h-[55px] w-full flex items-center justify-between ${isDarkMode ? 'bg-darkModeHS text-white' : 'bg-lightModeHS text-black'} px-[14px] transition-transform duration-300 z-40`}>
      <button onClick={toggleSidebar} className="mr-4" aria-label="Toggle Sidebar">
        <FaBars className={isDarkMode ? 'text-white' : 'text-black'} size={24} />
      </button>

      {isSearchOpen ? (
        <div className="flex-grow flex items-center w-full">
          <input type="text" placeholder="Search" className={`h-8 w-full border rounded-md pl-2 ${isDarkMode ? 'bg-gray-700 text-white border-gray-500' : 'bg-white text-black border-gray-300'} text-sm lg:text-base`} />
          <button onClick={toggleSearch} className="ml-2" aria-label="Close Search">
            <FaTimes className={isDarkMode ? 'text-white' : 'text-black'} size={20} />
          </button>
        </div>
      ) : (
        <>
          <h1 className="text-2xl lg:text-3xl ml-2 font-semibold">DEBATE.ME</h1>
          <div className="flex-grow flex items-center mx-2">
            {windowWidth >= 768 && (
              <input type="text" placeholder="Search Debates, Debaters, Topics" className={`h-8 w-full md:w-[60%] lg:w-[50%] border rounded-md pl-2 ${isDarkMode ? 'bg-gray-700 text-white border-gray-500' : 'bg-white text-black border-gray-300'} text-sm lg:text-base`} />
            )}
          </div>
          <div className="flex items-center space-x-4">
            <button className={`font-bold px-3 lg:px-4 h-8 lg:h-10 rounded text-md lg:text-base ${isDarkMode ? 'text-white' : 'text-black'}`}>Create Account</button>
            <button onClick={toggleSearch} className="block md:hidden" aria-label="Toggle Search">
              {isSearchOpen ? <FaTimes className={isDarkMode ? 'text-white' : 'text-black'} size={20} /> : <FaSearch className={isDarkMode ? 'text-white' : 'text-black'} size={20} />}
            </button>
            <button onClick={toggleDarkMode} className="p-2 rounded-full transition-colors duration-300" aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
              {isDarkMode ? <FaSun className="text-yellow-400" size={24} /> : <FaMoon className="text-gray-700" size={24} />}
            </button>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
