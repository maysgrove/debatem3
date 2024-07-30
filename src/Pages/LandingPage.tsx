import React, { useState, useEffect } from "react";
import UniversalHeader from "../components/UniversalHeader";
import UniversalFooter from "../components/UniversalFooter";
import Sidebar from "../components/Sidebar";
import { HiMenuAlt3 } from "react-icons/hi";

const colors = ["red", "white", "aqua"];

export const LandingPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true); // Track the sidebar state
  const [colorIndex, setColorIndex] = useState(0); // Track the current color index
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000); // Change color every second
    return () => clearInterval(interval);
  }, []);

  //Simulate a login status change for demonstration
  //Replace this with actual logic to set `isLoggedIn`
  useEffect(() => {
    const checkLoginStatus = () => {
      setIsLoggedIn(true); 
    };
    checkLoginStatus();
  }, []);

  let userName = 'Guest';

  return (
    <div className="flex h-[200vh] overflow-hidden">
      {/* sidebar */}
      <div
        className={`fixed top-0 left-0 h-full transition-transform duration-3000 ease-in-out ${sidebarOpen ? "w-56" : "w-16"} bg-gray-900`}
        style={{ zIndex: 100 }}>
        <Sidebar open={sidebarOpen} isLoggedIn={isLoggedIn} /> {/* Pass the open state and isLoggedIn */}
        <div className="absolute top-4 left-[35%] transform w-full -translate-x-[35%] flex items-center">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="cursor-pointer mt-[-10px] ml-1 mb-auto"
            style={{ color: colors[colorIndex], transition: "color 1s" }}
            aria-label={sidebarOpen ? "Close Sidebar" : "Open Sidebar"}
          >
            <HiMenuAlt3 size={46} />
          </button>
          <span className={`text-white text-xl font-bold ml-2 mt-[-10px] transition-opacity duration-0 ${sidebarOpen ? "opacity-100" : "opacity-0 invisible"}`}>
            Welcome {userName}
          </span>
        </div>
      </div>
      {/* main content */}
      <div className={`flex-1 lx-4 flex flex-col transition-transform duration-0 ease-in-out ${sidebarOpen ? "ml-56" : "ml-16"}`}>
        <UniversalHeader />
        <main className="flex-1 p-4 bg-gray-900">
          {/* Main content here */}
        </main>
        <UniversalFooter />
      </div>
    </div>
  );
};

export default LandingPage;
