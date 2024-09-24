import React, { useState } from "react";
import Header from "../components/Universal/Header";
import UniversalFooter from "../components/Universal/Footer";
import Tutorial from "../components/Tutorial_PopUp";
import Sidebar from "../components/Universal/Sidebar";

const LandingPage: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const [showTutorial, setShowTutorial] = useState(false);
  const handleGetStartedClick = () => {
    setShowTutorial(true);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(true); // Add this line

  return (
    <div className={`min-h-screen flex flex-col md:flex-row ${isDarkMode ? "dark bg-darkMode text-white" : "bg-lightMode text-black"}`}>
      <Sidebar open={isSidebarOpen} isDarkMode={isDarkMode} isLoggedIn={isLoggedIn} /> {/* Pass isLoggedIn here */}

      <div className={`flex-1 transition-transform duration-300 ${isSidebarOpen ? "ml-16 md:ml-52" : "ml-14"} p-2`}>
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} toggleSidebar={toggleSidebar} />

        <section className={`flex flex-col items-center rounded-xl mt-[50px] py-10 ${isDarkMode ? "bg-gray-900 text-white" : "bg-blue-600 text-white"}`}>
          <div className="text-center mt-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">Mind Battle</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Engage in lively debates, start new discussions, or catch up on live debates—all in one place.
            </p>
            <button className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-blue-600 rounded-full font-semibold shadow-md hover:bg-gray-100 transition-colors" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
        </section>
        

        <section className="py-8 px-4 sm:py-12 min-h-[400px]">
          <div className="flex flex-wrap justify-center gap-8">
            {/* Cards Section */}
          </div>
        </section>

        <UniversalFooter isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        
        {showTutorial && <Tutorial user={{ DEBATE_NAME: "Example Debate", STREAMER_NAME: "DebateHost", STREAMER_PROFILE_PIC: "/src/assets/Skeletor.webp", TOTAL_VIEWS: 100 }} onClose={() => setShowTutorial(false)} />}
      </div>
    </div>
  );
};

export default LandingPage;
