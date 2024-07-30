import React from "react";
import { Link } from "react-router-dom";
import { FcHome, FcConferenceCall, FcFeedback, FcCamcorderPro, FcOldTimeCamera, FcClapperboard, FcCustomerSupport, FcAutomatic, FcLock } from "react-icons/fc";

interface SidebarProps {
  open: boolean;
  isLoggedIn: boolean;
}

const menus = [
  { name: "Dashboard", link: "/", icon: FcHome },
  { name: "Friends", link: "/ErrorPage", icon: FcConferenceCall, hideWhenLoggedOut: true },
  { name: "Messages", link: "/", icon: FcFeedback, borderBottom: true, hideWhenLoggedOut: true },
  { name: "Start Debate", link: "/", icon: FcCamcorderPro, margin: true, hideWhenLoggedOut: true },
  { name: "Join Debate", link: "/", icon: FcOldTimeCamera },
  { name: "Previous Debates", link: "/", icon: FcClapperboard, borderBottom: true },
  { name: "Help", link: "/", icon: FcCustomerSupport, margin: true },
  { name: "Setting", link: "/", icon: FcAutomatic, hideWhenLoggedOut: true },
];

const Sidebar: React.FC<SidebarProps> = ({ open, isLoggedIn }) => (
  <div className={`h-full flex flex-col p-4 bg-gray-800 text-white fixed transition-all duration-1000 ease-in-out ${open ? "w-56" : "w-16"} border-r-2 border-gray-700`}>
    <div className="flex flex-col gap-2 mt-12">
      {menus
        .filter(menu => isLoggedIn || !menu.hideWhenLoggedOut) // Filter based on login status
        .map((menu, index) => (
          <React.Fragment key={index}>
            <div className={`relative group flex items-center text-lg hover:text-white gap-3.5 font-medium px-1 py-0 h-[40px] hover:bg-gray-700 rounded-md ${menu.margin ? "mt-5" : ""}`}>
              <Link to={menu.link} className="flex items-start w-full">
                <div className="flex-shrink-0 mt-auto mb-auto rounded-full bg-gray-900">
                  {React.createElement(menu.icon, { size: "20" })}
                </div>
                <h2 className={`ml-3 text-nowrap transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 invisible"}`}>
                  {menu.name}
                </h2>
              </Link>
              <h2 className={`absolute top-1/2 left-full transform ml-[20px] -translate-x-2 -translate-y-1/2 bg-black text-white font-semibold whitespace-nowrap rounded-md shadow-lg p-2 transition-opacity duration-300 ${open ? "hidden" : "opacity-0 group-hover:opacity-100 group-hover:block"}`}>
                {menu.name}
              </h2>
            </div>
            {menu.borderBottom && <hr className="border-gray-600" />}
          </React.Fragment>
        ))}
    </div>
    <Link to="/sign-out" className={`group flex items-center text-lg hover:text-white gap-3.5 h-[40px] font-medium py-3 mt-auto hover:bg-gray-700 rounded-md ${!isLoggedIn ? "hidden" : ""}`}>
      <div className="flex-shrink-0">
        {React.createElement(FcLock, { size: "35" })}
      </div>
      <h2 className={`ml-3 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 invisible"}`}>
        Sign Out
      </h2>
      <h2 className={`absolute bottom-[-10px] left-full transform -translate-x-2 -translate-y-1/2 bg-black text-white font-semibold whitespace-nowrap rounded-md shadow-lg p-2 transition-opacity duration-300 ${open ? "hidden" : "opacity-0 group-hover:opacity-100 group-hover:block"}`}>
        Sign Out
      </h2>
    </Link>
  </div>
);

export default Sidebar;
