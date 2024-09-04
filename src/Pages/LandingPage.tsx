import React, { useState, useEffect } from "react";
import axios from "axios";

// Component Imports
import Header from "../components/Header";
import UniversalFooter from "../components/Footer";
import Tutorial from "../components/Tutorial"; //tutorial modal
import Carousel from "../components/Carousel"; 

const LandingPage: React.FC = () => {
  
  // DARK MODE STATE AND EFFECT
  const [isDarkMode, setIsDarkMode] = useState(true);
    const toggleDarkMode = () => {
      setIsDarkMode((prev) => !prev);
    };

  // TUTORIAL STATE AND EFFECT
  const [showTutorial, setShowTutorial] = useState(false); // Tutorial modal state
    const handleGetStartedClick = () => {
      setShowTutorial(true); // Open the tutorial modal
    };

  // WATER STATE AND EFFECT
  const [myWater, SetMyWater] = useState<string[]>([]); // state to hold water
    useEffect(() => {
      const myWater = async () => {
        const response = await axios.get("http://localhost:4040/myWater");
        SetMyWater(response.data.fruits);
      };
      myWater();
    }, []);

  return (
    <div
      className={`min-h-screen flex flex-col ${
        isDarkMode ? "dark bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* Hero Section */}
      <section
        className={`flex flex-col items-center justify-center px-4 py-5 ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-blue-600 text-white"
        }`}
      >
        <div className="text-center mt-20">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Mind Battle</h1>
          <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto">
            Engage in lively debates, start new discussions, or catch up on live debates—all in one place.
          </p>
          <button
            className="px-6 py-3 md:px-8 md:py-4 bg-white text-blue-600 rounded-full font-semibold shadow-md hover:bg-gray-100 transition-colors"
            onClick={handleGetStartedClick} // Toggle tutorial on click
          >
            Get Started
          </button>

          {/* Map the fruits and display them in the hero section */}
          <ul className="list-none">
            {myWater.map((myWater, index) => (
              <li key={index} className="text-lg">
                {myWater}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-8 md:py-12 px-4">
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { title: "Join Debate", icon: "🙋‍♂️", bodyText: "Find and join exciting debates on a variety of topics." },
            { title: "Create Debate", icon: "✍️", bodyText: "Start your own debate and engage with others." },
            { title: "Watch Debate", icon: "📺", bodyText: "Catch up on previous debates and learn from them." },
          ].map((card, idx) => (
            <div
              key={idx}
              className="w-full sm:w-80 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg text-center shadow-lg transform hover:scale-105 hover:rotate-2 transition-transform"
            >
              <div className="text-3xl md:text-4xl mb-4">{card.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {card.bodyText}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Video Carousel Section */}
      <section className="py-4 md:py-12 px-4 overflow-hidden">
        <h2 className="text-2xl md:text-3xl mx-4 font-semibold text-left mb-6 md:mb-8">
          Featured Debates
        </h2>

        <Carousel />
      </section>

      <UniversalFooter isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

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
  );
};

export default LandingPage; 
