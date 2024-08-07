import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import UniversalFooter from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { HiMenuAlt3 } from 'react-icons/hi';
import { FaRegUserCircle, FaRegPlayCircle, FaRegEye } from 'react-icons/fa';

const sectionData = [
  {
    title: 'Create Profile',
    description: 'Set up your profile and start debating or watching live streams.',
    cta: 'Get Started',
  },
  {
    title: 'Join a Debate',
    description: 'Participate in live debates and challenge others to exciting matches.',
    cta: 'Join Now',
  },
  {
    title: 'Watch Previous Debates',
    description: 'Browse and watch past debates to learn and enjoy the content.',
    cta: 'Watch Now',
  },
];

const LandingPage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Dark mode enabled by default

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  return (
    <div className={`flex flex-col h-[500vh] ${isDarkMode ? 'bg-darkMode text-white' : 'bg-lightMode text-black'}`}>
      <Header sidebarOpen={sidebarOpen} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="flex flex-1 pt-[60px]">
        <div
          role="navigation"
          aria-label="Sidebar navigation"
          className={`fixed top-0 left-0 h-full transition-transform duration-300 ease-in-out ${
            isDarkMode ? 'bg-darkMode' : 'bg-lightMode'
          } border-r-2 border-gray-700 ${sidebarOpen ? 'w-56' : 'w-16'}`}
          style={{ zIndex: 100 }}
        >
          <Sidebar open={sidebarOpen} isDarkMode={isDarkMode} />
          <div className="absolute top-2 left-[1px] flex items-center">
            <button
              onClick={() => setSidebarOpen((prev) => !prev)}
              className="cursor-pointer flex items-center justify-center px-2 rounded-full transition-colors duration-300"
              aria-label={sidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
              aria-expanded={sidebarOpen}
              aria-controls="sidebar"
            >
              <HiMenuAlt3 fill="currentColor" size={40} />
            </button>
            {sidebarOpen && (
              <span className={`text-${isDarkMode ? 'white' : 'black'} text-1xl`}>
                Welcome Guest
              </span>
            )}
          </div>
        </div>

        <main
          className={`transition-margin duration-300 ease-in-out flex-1 p-4 ${
            sidebarOpen ? 'ml-56' : 'ml-16'
          }`}
        >
          <section className={`p-4 ${isDarkMode ? 'bg-sectionTint' : 'bg-header'}`}>
            <h1 className={`text-3xl font-bold lg:text-left mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>
              Welcome to Debate Me
            </h1>
            <p className={`text-lg mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Join the ultimate platform for live debates! Engage in thrilling 1v1, 2v2, or 3v3 debates, watch previous debates, and follow your favorite debaters.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectionData.map(({ title, description, cta }) => (
                <div
                  key={title}
                  className={`relative p-6 rounded-lg text-center shadow-md transition-transform transform hover:scale-105 ${
                    isDarkMode ? 'bg-gradient-to-r from-gray-700 to-gray-800 text-white' : 'bg-gradient-to-r from-white to-gray-100 text-black'
                  }`}
                >
                  <div className="mb-6 text-4xl">
                    {/* Empty space where icons were */}
                  </div>
                  <h2 className={`text-2xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {title}
                  </h2>
                  <p className={`text-gray-300 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    {description}
                  </p>
                  <a
                    href="#"
                    className={`mt-4 inline-block px-4 py-2 rounded-lg font-semibold ${
                      isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-200 text-blue-700'
                    }`}
                  >
                    {cta}
                  </a>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
      <UniversalFooter sidebarOpen={sidebarOpen} />
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-3 rounded-full bg-orange-500 text-white hover:bg-orange-600"
          aria-label="Back to top"
        >
          Back to Top
        </button>
      )}
    </div>
  );
};

export default LandingPage;
