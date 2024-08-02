import React, { useState, useEffect } from "react";
import UniversalHeader from "../components/UniversalHeader";
import UniversalFooter from "../components/UniversalFooter";
import Sidebar from "../components/Sidebar";
import { HiMenuAlt3 } from "react-icons/hi";

const LandingPage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    setIsLoggedIn(true);
    setIsAdmin(false);
  }, []);

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

  const handlePrev = () => {
    setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => Math.min(prevIndex + 1, 7)); // Update to the total number of items - 1
  };

  const categories = [
    'Tech', 'Politics', 'Science', 'Philosophy', 
    'Economics', 'Environment', 'Health', 'Education'
  ];

  const categoryColors = [
    'bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-purple-500',
    'bg-yellow-500', 'bg-teal-500', 'bg-orange-500', 'bg-pink-500'
  ];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div
        role="navigation"
        aria-label="Sidebar navigation"
        className={`fixed top-0 left-0 h-full transition-transform duration-120 ease-in-out ${sidebarOpen ? "w-56" : "w-16"} border-r-2 border-gray-700`}
        style={{ zIndex: 100 }}
      >
        <Sidebar open={sidebarOpen} isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
        <div className="fixed top-2 left-2 flex items-center">
          <button
            onClick={() => setSidebarOpen(prev => !prev)}
            className="cursor-pointer"
            aria-label={sidebarOpen ? "Close Sidebar" : "Open Sidebar"}
            aria-expanded={sidebarOpen}
            aria-controls="sidebar"
          >
            <HiMenuAlt3 fill="white" size={46} />
          </button>
        </div>
      </div>
      <div className={`flex-1 flex flex-col transition-transform duration-500 ease-in-out ${sidebarOpen ? "ml-56" : "ml-16"} bg-gray-900`}>
        <UniversalHeader />
        <main className="flex-1 flex flex-col overflow-auto p-4">
          {/* Hero Section */}
          <section className="mb-8">
            <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-6 rounded-lg shadow-md relative overflow-hidden">
              <h1 className="text-4xl font-bold mb-4">Welcome to Debate.me</h1>
              <p className="text-lg">
                Discover and engage in meaningful debates. Share your thoughts, watch insightful discussions, and connect with others.
              </p>
              <div className="mt-4">
                <button className="bg-[#181818] hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md relative">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 opacity-20 rounded-lg"></span>
                  Get Started
                </button>
              </div>
            </div>
          </section>

          {/* Debate Categories Carousel */}
          {selectedCategory === null ? (
            <section className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Debate Categories</h2>
              <div className="relative">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  >
                    {categories.map((category, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
                      >
                        <button
                          onClick={() => handleCategoryClick(category)}
                          className={`w-full text-white font-bold py-4 px-6 rounded-lg shadow-md ${categoryColors[index]}`}
                        >
                          {category}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className={`absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  &#9664;
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentIndex === 7} // Update to the total number of items - 1
                  className={`absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg ${currentIndex === 7 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  &#9654;
                </button>
              </div>
            </section>
          ) : (
            <section className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Debates in {selectedCategory}</h2>
              <button
                onClick={handleBackToCategories}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md mb-4"
              >
                Back to Categories
              </button>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Array.from({ length: 12 }).map((_, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col justify-between"
                  >
                    <div className="relative pb-[56.25%] bg-gray-700 rounded-lg overflow-hidden mb-4">
                      <img
                        src={`https://via.placeholder.com/300x200?text=${selectedCategory}+Debate+${index + 1}`}
                        alt={`Debate Thumbnail ${index + 1}`}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {selectedCategory} Debate Topic {index + 1}
                      </h3>
                      <p className="text-gray-400 mb-4">
                        A brief description of the debate topic in {selectedCategory} goes here.
                      </p>
                      <button className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-2 px-4 rounded-lg relative">
                        <span className="absolute inset-0 opacity-20 rounded-lg"></span>
                        Join Debate
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Featured Debates */}
          {selectedCategory === null && (
            <section className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Featured Debates</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Array.from({ length: 12 }).map((_, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col justify-between"
                  >
                    <div className="relative pb-[56.25%] bg-gray-700 rounded-lg overflow-hidden mb-4">
                      <img
                        src={`https://via.placeholder.com/300x200?text=Debate+${index + 1}`}
                        alt={`Debate Thumbnail ${index + 1}`}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Debate Topic {index + 1}
                      </h3>
                      <p className="text-gray-400 mb-4">
                        A brief description of the debate topic goes here. Learn more and participate in the discussion.
                      </p>
                      <button className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-2 px-4 rounded-lg relative">
                        <span className="absolute inset-0 opacity-20 rounded-lg"></span>
                        Join Debate
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
        <UniversalFooter />
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            aria-label="Back to top"
          >
            ↑
          </button>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
