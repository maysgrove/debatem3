import React, { useState } from "react";
import Slider from "react-slick";
import Header from "../components/Header";
import UniversalFooter from "../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Slick Carousel settings
const carouselSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <button className="slick-prev">←</button>,
  nextArrow: <button className="slick-next">→</button>,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const categories = ["Education", "Politics", "Entertainment", "Tech", "Science"];

const LandingPage: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div
      className={`min-h-screen flex flex-col ${
        isDarkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"
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
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Debate Me</h1>
          <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto">
            Engage in lively debates, start new discussions, or catch up on live debates—all in one place.
          </p>
          <button className="px-6 py-3 md:px-8 md:py-4 bg-white text-blue-600 rounded-full font-semibold shadow-md hover:bg-gray-100 transition-colors">
            Get Started
          </button>
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
      <section className="py-8 md:py-12 px-4 overflow-hidden">
        <h2 className="text-2xl md:text-3xl mx-4 font-semibold text-left mb-6 md:mb-8">
          Featured Debates
        </h2>

        {categories.map((category, index) => (
          <div key={index} className="mb-8 mx-4">
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <Slider className="p-4" {...carouselSettings}>
              {[...Array(10)].map((_, idx) => (
                <div
                  key={idx}
                  className="relative w-full pb-[56.25%] bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden"
                >
                  <img
                    src="/src/assets/Debate Thumbnails/bidenVtrump.webp"
                    alt="Video Thumbnail"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black via-transparent to-transparent text-white">
                    <h4 className="text-sm md:text-base font-semibold mb-1">Debate Title</h4>
                    <div className="flex items-center">
                      <img
                        src="/src/assets/Skeletor.webp"
                        alt="Channel Pic"
                        className="w-6 h-6 md:w-8 md:h-8 rounded-full mr-2"
                      />
                      <span className="text-xs md:text-sm">NEWS4U</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ))}
      </section>

      <UniversalFooter isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

export default LandingPage;
