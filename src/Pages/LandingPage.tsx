import React, { useState } from "react";
import Header from "../components/Header";
import UniversalFooter from "../components/Footer";
import Tutorial from "../components/Tutorial"; // tutorial modal
import Sidebar from "../components/Sidebar"; // Import your Sidebar component

// Import your image
import HeroImage from "../assets/VectorCharacters/Brain/brain.png"; // Adjust the path to your image

const LandingPage: React.FC = () => {
  // DARK MODE STATE AND EFFECT
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // SIDEBAR STATE AND EFFECT
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // TUTORIAL STATE AND EFFECT
  const [showTutorial, setShowTutorial] = useState(false); // Tutorial modal state
  const handleGetStartedClick = () => {
    setShowTutorial(true); // Open the tutorial modal
  };

  return (
    <div
      className={`min-h-screen flex ${
        isDarkMode ? "dark bg-darkMode text-white" : "bg-lightMode text-black"
      }`}
    >
      {/* Sidebar */}
      <Sidebar open={isSidebarOpen} isDarkMode={isDarkMode} />

      {/* Main Content */}
      <div
        className={`flex-1 transition-transform duration-300 ${
          isSidebarOpen ? "ml-52" : "ml-16"
        } md:ml-`}
      >
        <Header
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          toggleSidebar={toggleSidebar}
        />

        {/* Hero Section */}
        <section
          className={`flex flex-col items-center justify-center px-4 py-5 ${
            isDarkMode ? "bg-gray-900 text-white" : "bg-blue-600 text-white"
          } min-h-[500px]`} // Adjust this value as needed
        >
          <div className="text-center mt-20">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              Mind Battle
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto">
              Engage in lively debates, start new discussions, or catch up on
              live debates—all in one place.
            </p>
            <button
              className="px-6 py-3 md:px-8 md:py-4 bg-white text-blue-600 rounded-full font-semibold shadow-md hover:bg-gray-100 transition-colors"
              onClick={handleGetStartedClick} // Toggle tutorial on click
            >
              Get Started
            </button>
          </div>

          {/* Image added below */}
          <div className="mt-10">
            <img
              src={HeroImage}
              alt="Hero"
              className="h-[260px] fixed top-24 left-[70%] z-[10] opacity-15 max-w-4xl mx-auto rounded-lg"
            />
          </div>
        </section>

        {/* Cards Section */}
        <section className="py-8 md:py-12 mb-8 px-4 min-h-[400px]">
          {" "}
           {/* Adjust this value as needed */}
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                title: "Join Debate",
                icon: "🙋‍♂️",
                bodyText:
                  "Find and join exciting debates on a variety of topics.",
              },
              {
                title: "Create Debate",
                icon: "✍️",
                bodyText: "Start your own debate and engage with others.",
              },
              {
                title: "Watch Debate",
                icon: "📺",
                bodyText: "Catch up on previous debates and learn from them.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="w-full sm:w-80 p-6 bg-gray-200 dark:bg-gray-500 rounded-lg text-center shadow-lg transform hover:scale-105 hover:rotate-2 transition-transform"
              >
                <div className="text-3xl md:text-4xl mb-4">{card.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {card.bodyText}
                </p>
              </div>
            ))}
          </div>
        </section>

        <UniversalFooter
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />

        {showTutorial && (
          <Tutorial
            user={{
              DEBATE_NAME: "Example Debate",
              STREAMER_NAME: "DebateHost",
              STREAMER_PROFILE_PIC: "/src/assets/Skeletor.webp",
              TOTAL_VIEWS: 100,
            }}
            onClose={() => setShowTutorial(false)} // Close tutorial
          />
        )}
      </div>
    </div>
  );
};

export default LandingPage;
