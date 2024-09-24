import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FcHome,
  FcConferenceCall,
  FcFeedback,
  FcCamcorderPro,
  FcOldTimeCamera,
  FcClapperboard,
  FcCustomerSupport,
  FcAutomatic,
  FcLock,
} from 'react-icons/fc';

interface SidebarProps {
  open: boolean;
  isDarkMode: boolean;
  isLoggedIn: boolean; // Add this prop
}

const menuItems = [
  { name: 'Dashboard', link: '/Dashboard', icon: FcHome },
  { name: 'Explore Page', link: '/ExplorePage', icon: FcConferenceCall },
  { name: 'Friends', link: '/ErrorPage', icon: FcConferenceCall },
  { name: 'Messages', link: '/', icon: FcFeedback, borderBottom: true },
  { name: 'Start Debate', link: '/debate', icon: FcCamcorderPro, margin: true },
  { name: 'Join Debate', link: '/', icon: FcOldTimeCamera },
  { name: 'Previous Debates', link: '/', icon: FcClapperboard, borderBottom: true },
  { name: 'Help', link: '/', icon: FcCustomerSupport, margin: true },
  { name: 'Setting', link: '/', icon: FcAutomatic },
];

const Sidebar: React.FC<SidebarProps> = ({ open, isDarkMode, isLoggedIn }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className={`fixed top-0 left-0 h-screen bg-darkMode ${isDarkMode ? 'bg-darkModeSidebar text-white' : 'bg-lightMode text-black'} transition-transform duration-800 ${open ? 'w-52' : 'w-14'} flex flex-col py-3 px-1 z-30`}>
      <div className="flex-grow flex flex-col mt-14 space-y-2">
        {menuItems.map((item, index) => (
          <React.Fragment key={item.name}>
            <div className={`relative flex items-center px-2 py-2 rounded-md ${item.margin ? 'mt-5' : ''} transition-colors duration-300 hover:bg-[#00000071]`} onMouseEnter={() => setHoveredItem(item.name)} onMouseLeave={() => setHoveredItem(null)}>
              <item.icon size={28} className="flex-shrink-0 ml-[1px]" />
              <Link to={item.link} className={`flex-1 text-sm font-semibold lg:text-base whitespace-nowrap ${open ? 'opacity-100 fade-in' : 'opacity-0'} transition-opacity duration-300`} style={{ animationDelay: `${index * 100}ms` }}>
                <span className={`ml-4 ${!open ? 'sr-only' : ''}`}>{item.name}</span>
              </Link>
              {!open && hoveredItem === item.name && (
                <div className="absolute left-14 text-nowrap text-sm bg-gray-700 font-semibold text-white rounded-md px-2 py-1 pointer-events-none z-40">
                  {item.name}
                </div>
              )}
            </div>
            {item.borderBottom && <hr className="my-2 border-gray-600 w-full" />}
          </React.Fragment>
        ))}
      </div>

      {/* Online Status Button */}
      <div className="mb-4 flex items-center justify-center">
        <button
          className={`w-6 h-6 rounded-full border-2 border-black text-white font-semibold flex items-center justify-center ${
            isLoggedIn ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          {isLoggedIn ? '' : ''}
        </button>
      </div>

      {/* Logout button stuck to the bottom */}
      <div className="mt-auto">
        <div className={`relative flex items-center px-2 rounded-md transition-colors duration-300 hover:bg-[#00000071]`} onMouseEnter={() => setHoveredItem('Logout')} onMouseLeave={() => setHoveredItem(null)}>
          <FcLock size={28} className="flex-shrink-0" />
          <Link to="/" className={`flex-1 text-sm font-semibold lg:text-base whitespace-nowrap ${open ? 'opacity-100 fade-in' : 'opacity-0'} transition-opacity duration-300`}>
            <span className={`ml-4 ${!open ? 'sr-only' : ''}`}>Logout</span>
          </Link>
          {!open && hoveredItem === 'Logout' && (
            <div className="absolute left-14 text-nowrap text-sm bg-gray-700 font-semibold text-white rounded-md px-2 py-1 pointer-events-none z-40">
              Logout
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
