import React, { useState, useEffect } from "react";
import Header from "../components/Universal/Header";
import UniversalFooter from "../components/Universal/Footer";
import Sidebar from "../components/Universal/Sidebar";

const LandingPage: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [status, setStatus] = useState<"online" | "away" | "offline">("offline");

  useEffect(() => {
    const checkSession = async () => {
      const response = await fetch('http://localhost:4040/session'); // New endpoint to check session
      const data = await response.json();
      if (data.isLoggedIn) {
        setIsLoggedIn(true);
        setStatus(data.status);
      }
    };
    checkSession();
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleLoginToggle = async () => {
    if (isLoggedIn) {
      await fetch('http://localhost:4040/logout', { method: 'POST' });
      setIsLoggedIn(false);
      setStatus('offline');
    } else {
      const response = await fetch('http://localhost:4040/login', { method: 'POST' });
      const data = await response.json();
      setIsLoggedIn(true);
      setStatus(data.userSession.status);
    }
  };

  const updateStatus = async (newStatus: "online" | "away" | "offline") => {
    const response = await fetch('http://localhost:4040/status', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus }),
    });
    const data = await response.json();
    setStatus(data.status);
  };

  return (
    <div className={`min-h-screen flex flex-col md:flex-row ${isDarkMode ? "dark bg-darkMode text-white" : "bg-lightMode text-black"}`}>
      <Sidebar
        open={isSidebarOpen}
        isDarkMode={isDarkMode}
        isLoggedIn={isLoggedIn}
        setStatus={updateStatus}
      />

      <div className={`flex-1 transition-transform duration-300 ${isSidebarOpen ? "ml-16 md:ml-52" : "ml-14"} p-2`}>
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} toggleSidebar={toggleSidebar} />

        <section className={`flex flex-col items-center rounded-xl mt-[50px] py-10 ${isDarkMode ? "bg-[#0A74DA] text-white" : "bg-[#1E90FF] text-white"}`}>
          <div className="text-center mt-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">Mind Battle</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Engage in lively debates, start new discussions, or catch up on live debates—all in one place.
            </p>

            {isLoggedIn && (
              <div className="mb-4">
                <span className={`inline-block w-2 h-2 rounded-full ${status === 'online' ? 'bg-green-500' : status === 'away' ? 'bg-yellow-500' : 'bg-red-500'}`}></span>
                <span className="ml-2 text-lg">
                  {status === "online" ? "Online" : status === "away" ? "Away" : "Offline"}
                </span>
              </div>
            )}

            <button className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-blue-600 rounded-full font-semibold shadow-md hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </div>

          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full"
            onClick={handleLoginToggle}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </section>

        <section className="py-8 px-4 sm:py-12 min-h-[400px]">
          <div className="flex flex-wrap justify-center gap-8">
            <div>asd</div>
          </div>
        </section>

        <UniversalFooter isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </div>
  );
};

export default LandingPage;
