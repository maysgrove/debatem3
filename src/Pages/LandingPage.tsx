import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import UniversalFooter from '../components/Footer';
import Tutorial from '../components/Tutorial';

const LandingPage: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);

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

  const toggleTutorial = () => {
    setShowTutorial((prev) => !prev);
  };

  return (
    <div className={`flex flex-col h-[300vh] ${isDarkMode ? 'dark dark-mode-background text-white' : 'bg-lightMode text-black'}`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <div className="h-full pt-[60px] relative">
        <main className={`h-full flex-1 p-4 ${isDarkMode ? 'bg-darkMode' : 'bg-lightMode'}`}>
          {/* Main content goes here */}

          {/* Toggle Tutorial Button */}
          <button
            onClick={toggleTutorial}
            className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            {showTutorial ? 'Hide Tutorial' : 'Show Tutorial'}
          </button>

          {/* Tutorial Component */}
          {showTutorial && (
            <Tutorial
              user={{
                DEBATE_NAME: "Sample Debate",
                STREAMER_NAME: "Guest",
                STREAMER_PROFILE_PIC: "path/to/profile-pic.jpg",
                TOTAL_VIEWS: 1000
              }} 
              onClose={() => setShowTutorial(false)} 
            />
          )}

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
      <UniversalFooter isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
    </div>
  );
};

export default LandingPage;
