import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import UniversalFooter from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { HiMenuAlt3 } from 'react-icons/hi';

const LandingPage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`flex flex-col h-[300vh] ${isDarkMode ? 'dark dark-mode-background text-white' : 'bg-lightMode text-black'}`}>
      <Header sidebarOpen={sidebarOpen} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <div className="h-full pt-[60px] relative">
        <div
          role="navigation"
          aria-label="Sidebar navigation"
          className={`fixed top-[-8px] left-0 h-full transition-transform duration-300 ease-in-out ${isDarkMode ? 'bg-darkMode' : 'bg-lightMode'} border-r-2 border-gray-700 ${sidebarOpen ? 'w-52' : 'w-16'}`}
          style={{ zIndex: 100 }}
        >
          <Sidebar open={sidebarOpen} isDarkMode={isDarkMode} />
          <div className="absolute top-3 flex items-center">
            <button
              onClick={() => setSidebarOpen((prev) => !prev)}
              className="cursor-pointer flex items-center justify-center px-2 py-1 rounded-full transition-colors duration-300"
              aria-label={sidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
              aria-expanded={sidebarOpen}
              aria-controls="sidebar"
            >
              <HiMenuAlt3 fill="currentColor" size={40} />
            </button>
            {sidebarOpen && (
              <span className={`ml-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                Welcome Guest
              </span>
            )}
          </div>
        </div>

        <main className={`transition-margin h-full ease-in-out flex-1 p-4 ${sidebarOpen ? 'ml-52' : 'ml-16'} ${isDarkMode ? 'bg-darkMode' : 'bg-lightMode'}`}>
          {/* Main content goes here */}
            
          {/* Scroll to Top Button */}
          {showBackToTop && (
            <button
              onClick={scrollToTop}
              className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg transition-opacity duration-300 ${isDarkMode ? 'bg-darkMode text-white border border-orange-400' : 'bg-lightMode text-black border border-black'} ${showBackToTop ? 'opacity-100' : 'opacity-0'}`}
              aria-label="Scroll to Top"
            >
              <span className="text-xl">↑</span>
            </button>
          )}
        </main>
      </div>
      <UniversalFooter sidebarOpen={sidebarOpen} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

export default LandingPage;
