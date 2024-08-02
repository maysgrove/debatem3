import React from "react";
import UniversalHeader from "../components/UniversalHeader";
import UniversalFooter from "../components/UniversalFooter";
import Sidebar from "../components/Sidebar";
import { HiMenuAlt3 } from "react-icons/hi";

const ExplorePage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <div
        role="navigation"
        aria-label="Sidebar navigation"
        className={`fixed top-0 left-0 h-full transition-transform duration-120 ease-in-out ${sidebarOpen ? "w-56" : "w-16"} border-r-2 border-gray-700`}
        style={{ zIndex: 100 }}
      >
        <Sidebar open={sidebarOpen} isLoggedIn={true} isAdmin={true} />
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
          <h2 className="text-2xl font-bold text-white">Welcome to Explore</h2>
          {/* Your content goes here */}
        </main>
        <UniversalFooter />
      </div>
    </div>
  );
};

export default ExplorePage;
