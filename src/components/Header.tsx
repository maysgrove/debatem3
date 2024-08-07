import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import icons
import SignIn from './SignIn';

interface UniversalHeaderProps {
  sidebarOpen: boolean;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<UniversalHeaderProps> = ({ sidebarOpen, isDarkMode, toggleDarkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full flex items-center justify-between ${
        isDarkMode ? 'bg-darkMode text-white' : 'bg-lightMode text-black'
      } shadow-[inset_0_0px_3px_rgba(0,0,0,0.6)] px-4 py-2 h-[60px] transition-transform duration-300 ease-in-out ${
        sidebarOpen ? 'pl-60' : 'pl-20'
      }`}
      style={{ zIndex: 11 }}
    >
      <h1 className="text-2xl lg:text-3xl font-bold">
        DEBATE.ME
      </h1>
      <div className="flex-grow flex items-center mx-2">
        <input
          type="text"
          placeholder="Search"
          className={`h-8 w-full md:w-[80%] lg:w-[60%] border rounded-md pl-2 ${
            isDarkMode
              ? 'bg-[#00000071] text-white border-white'
              : 'bg-[#ffffff71] text-black border-black'
          } text-sm lg:text-base`}
        />
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleModal}
          className="bg-orange-500 text-nowrap text-white font-bold px-3 lg:px-4 h-8 lg:h-10 rounded text-xs lg:text-base hover:bg-[#000] transition-colors duration-300"
        >
          Create Account
        </button>
        <button
          onClick={toggleDarkMode}
          className="flex items-center justify-center p-2 rounded-full transition-colors duration-300"
          aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'} // Tooltip
        >
          {isDarkMode ? (
            <FaSun className="text-yellow-500" size={24} />
          ) : (
            <FaMoon className="text-gray-800" size={24} />
          )}
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <SignIn
            onClose={() => setIsModalOpen(false)}
            isOpen={isModalOpen}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
