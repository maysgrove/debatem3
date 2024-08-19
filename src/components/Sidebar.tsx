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
} from 'react-icons/fc';

interface SidebarProps {
  open: boolean;
  isDarkMode: boolean;
}

const menuItems = [
  { name: "Dashboard", link: "/Dashboard", icon: FcHome },
  { name: "Explore Page", link: "/ExplorePage", icon: FcConferenceCall },
  { name: "Friends", link: "/ErrorPage", icon: FcConferenceCall },
  { name: "Messages", link: "/", icon: FcFeedback, borderBottom: true },
  { name: "Start Debate", link: "/", icon: FcCamcorderPro, margin: true },
  { name: "Join Debate", link: "/", icon: FcOldTimeCamera },
  { name: "Previous Debates", link: "/", icon: FcClapperboard, borderBottom: true },
  { name: "Help", link: "/", icon: FcCustomerSupport, margin: true },
  { name: "Setting", link: "/", icon: FcAutomatic },
];

const Sidebar: React.FC<SidebarProps> = ({ open, isDarkMode }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div
      className={`fixed top-0 left-0 h-screen ${
        isDarkMode ? 'bg-darkModeSidebar text-white' : 'bg-lightMode text-black'
      } border-r-2 border-gray-700 transition-transform duration-800 ${
        open ? 'w-52' : 'w-16'
      } flex flex-col py-4 px-2`}
    >

      <div className="flex-grow flex flex-col mt-12 space-y-4">
        {menuItems.map((item, index) => (
          <React.Fragment key={item.name}>
            <div
              className={`relative flex items-center px-2 py-2 rounded-md ${
                item.margin ? 'mt-5' : ''
              } transition-colors duration-300 hover:bg-[#00000071]`}
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <item.icon size={28} className="flex-shrink-0" />
              <Link
                to={item.link}
                className={`flex-1 text-sm font-semibold lg:text-base whitespace-nowrap ${
                  open ? 'opacity-100 fade-in' : 'opacity-0'
                } transition-opacity duration-300`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <span className={`ml-4 ${!open ? 'sr-only' : ''}`}>{item.name}</span>
              </Link>
              {!open && hoveredItem === item.name && (
                <div className="absolute left-14 text-nowrap text-sm bg-gray-700 font-semibold text-white rounded-md px-2 py-1 pointer-events-none">
                  {item.name}
                </div>
              )}
            </div>
            {item.borderBottom && (
              <hr className="my-2 border-gray-600 w-full" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
