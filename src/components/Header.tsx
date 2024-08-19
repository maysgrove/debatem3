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
      className={`fixed top-0 left-0 h-[60px] w-full flex items-center justify-between ${
        isDarkMode ? 'bg-darkModeHeader text-white' : 'bg-gray-100 text-black'
      } shadow-[inset_0_0px_3px_rgba(0,0,0,0.6)] px-4 py-2 transition-transform duration-300 ease-in-out ${
        sidebarOpen ? 'pl-60' : 'pl-20'
      }`}
      style={{ zIndex: 11 }}
    >
      <h1 className="text-2xl lg:text-3xl font-semibold">
        DEBATE.ME
      </h1>
      <div className="flex-grow flex items-center mx-2">
        <input
          type="text"
          placeholder="Search"
          className={`h-8 w-full md:w-[60%] lg:w-[50%] border rounded-md pl-2 ${
            isDarkMode
              ? 'bg-gray-700 text-white border-gray-500'
              : 'bg-white text-black border-gray-300'
          } text-sm lg:text-base`}
        />
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleModal}
          className={`font-bold px-3 lg:px-4 h-8 text-nowrap lg:h-10 rounded text-md lg:text-base transition-colors duration-300 ${ isDarkMode ? 'text-white' : 'text-black'}`} >
          Create Account
        </button>
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
