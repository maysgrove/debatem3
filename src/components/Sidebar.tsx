import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FcHome, FcConferenceCall, FcFeedback, FcCamcorderPro, FcOldTimeCamera, FcClapperboard, FcCustomerSupport, FcAutomatic, FcSafe } from "react-icons/fc";
import { AiOutlineWarning } from "react-icons/ai";

// Define the types for props
interface SidebarProps {
  open: boolean;
  isLoggedIn: boolean;
  isAdmin: boolean;
}

const menus = [
  { name: "Dashboard", link: "/", icon: FcHome },
  { name: "Explore Page", link: "/ExplorePage", icon: FcConferenceCall }, // New Explore Page link
  { name: "Friends", link: "/ErrorPage", icon: FcConferenceCall, hideWhenLoggedOut: true },
  { name: "Messages", link: "/", icon: FcFeedback, borderBottom: true, hideWhenLoggedOut: true },
  { name: "Start Debate", link: "/", icon: FcCamcorderPro, margin: true, hideWhenLoggedOut: true },
  { name: "Join Debate", link: "/", icon: FcOldTimeCamera },
  { name: "Previous Debates", link: "/", icon: FcClapperboard, borderBottom: true },
  { name: "Help", link: "/", icon: FcCustomerSupport, margin: true },
  { name: "Setting", link: "/", icon: FcAutomatic, hideWhenLoggedOut: true },
];

const users = [
  { name: "Alice", id: 1 },
  { name: "Bob", id: 2 },
  { name: "Charlie", id: 3 },
];

const Sidebar: React.FC<SidebarProps> = ({ open, isLoggedIn, isAdmin }) => {
  const [usernameToBan, setUsernameToBan] = useState("@");
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [showBanModal, setShowBanModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [banLength, setBanLength] = useState("");
  const [banAlert, setBanAlert] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setDropdownVisible(false);
        setUsernameToBan("@");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.startsWith("@") ? e.target.value : "@" + e.target.value;
    setUsernameToBan(value);
    setFilteredUsers(users.filter(user => user.name.toLowerCase().includes(value.slice(1).toLowerCase())));
    setDropdownVisible(value.length > 1);
  };

  const handleBanClick = (userName: string) => {
    setSelectedUser(userName);
    setShowBanModal(true);
    setDropdownVisible(false);
  };

  const handleModalClose = () => {
    setShowBanModal(false);
    setSelectedUser(null);
    setBanLength("");
    setUsernameToBan("@");
  };

  const handleBanSubmit = () => {
    setBanAlert(`User ${selectedUser} has been banned for ${banLength} days`);
    handleModalClose();
  };

  const sortedMenus = menus.slice().sort((a, b) => !isLoggedIn && a.hideWhenLoggedOut && !b.hideWhenLoggedOut ? 1 : 0);

  return (
    <div className={`fixed top-0 left-0 h-[100%] flex flex-col py-4 px-4 bg-gray-800 text-white transition-all duration-500 ${open ? "w-56" : "w-16"} border-r-2 border-gray-700`}>
      <div className="flex flex-col mt-12">
        {sortedMenus.map((menu, index) => {
          const isDisabled = !isLoggedIn && menu.hideWhenLoggedOut;
          return (
            <React.Fragment key={index}>
              <div className={`relative group flex items-center text-lg text-nowrap font-medium px-1 py-0 h-[40px] rounded-md ${menu.margin ? "mt-5" : ""} ${isDisabled ? "text-gray-500 cursor-not-allowed" : "hover:bg-gray-700"} ${!isLoggedIn && isDisabled ? "line-through" : ""}`} aria-disabled={isDisabled}>
                <Link to={isDisabled ? "#" : menu.link} className={`flex items-center w-full ${isDisabled ? "text-gray-500 cursor-not-allowed" : ""}`} aria-label={isDisabled ? `${menu.name} - Access Restricted` : menu.name} onClick={e => isDisabled && e.preventDefault()}>
                  <div className={`flex-shrink-0 rounded-full bg-gray-900 ${!isLoggedIn && isDisabled && !open ? "line-through" : ""}`}>
                    {React.createElement(menu.icon, { size: 25 })}
                  </div>
                  <h2 className={`ml-3 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 invisible"}`} aria-hidden={!open}>{menu.name}</h2>
                </Link>
                {!isDisabled && (
                  <h2 className={`absolute top-1/2 left-full transform -translate-x-2 -translate-y-1/2 bg-black text-white font-semibold whitespace-nowrap rounded-md shadow-lg p-2 transition-opacity duration-300 ${open ? "opacity-0 invisible" : "opacity-0 group-hover:opacity-100"}`} aria-hidden={open}>{menu.name}</h2>
                )}
              </div>
              {menu.borderBottom && <hr className="border-gray-600" />}
            </React.Fragment>
          );
        })}
        {isAdmin && (
          <div className={`relative mt-[260px] ${open ? "flex" : "hidden"} flex-col w-full bg-black bg-opacity-10 p-4 rounded-md`} ref={containerRef}>
            <div className="absolute top-[-20px] left-0 right-0 p-2 text-center text-lg font-semibold text-white bg-black bg-opacity-60 rounded-t-md">Admin Panel</div>
            {[
              { to: "/admin", icon: <FcSafe size={20} />, text: "Admin" },
              { to: "/user-history", icon: <FcOldTimeCamera size={20} />, text: "User History" },
            ].map((link, index) => (
              <Link key={index} to={link.to} className="flex items-center w-full mt-5" aria-label={link.text}>
                <div className={`flex-shrink-0 rounded-full bg-gray-900 ${!open ? "line-through" : ""}`}>
                  {link.icon}
                </div>
                <h2 className={`ml-3 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 invisible"}`} aria-hidden={!open}>{link.text}</h2>
              </Link>
            ))}
            <div className="relative flex flex-col w-full mt-5 p-2 bg-gray-800 rounded-md">
              <h2 className="text-white font-semibold mb-2">Ban User</h2>
              <input
                type="text"
                value={usernameToBan}
                onChange={handleInputChange}
                className="w-full px-2 py-1 rounded-md bg-gray-700 text-white border border-gray-600"
                ref={inputRef}
                placeholder="Start typing a username..."
              />
              {dropdownVisible && filteredUsers.length > 0 && (
                <div className="absolute top-[60px] bg-gray-800 text-white border border-gray-700 rounded-md w-full max-h-[200px] overflow-y-auto">
                  {filteredUsers.map(user => (
                    <div key={user.id} className="flex justify-between p-2 hover:bg-gray-700 cursor-pointer" onClick={() => handleBanClick(user.name)}>
                      <span>{user.name}</span>
                      <button onClick={() => handleBanClick(user.name)} className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600">Ban</button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      {!isLoggedIn && open && (
        <div className="mt-auto p-4 text-black text-center rounded-md flex items-center justify-center gap-2 bg-yellow-500" aria-live="polite" role="alert">
          <AiOutlineWarning size={24} />
          <div>
            <p className="font-semibold">Access Restricted</p>
            <p>Sign in to view all menu items.</p>
          </div>
        </div>
      )}
      {showBanModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="bg-black text-white p-4 rounded-md">
            <h2 className="text-lg font-bold mb-2">Ban {selectedUser}</h2>
            <div className="mb-4">
              <label className="block text-gray-400 mb-1">Ban Duration (days):</label>
              <input
                type="number"
                value={banLength}
                onChange={e => setBanLength(e.target.value)}
                className="w-full px-2 py-1 rounded-md bg-gray-700 border border-gray-600"
              />
            </div>
            <div className="flex justify-end gap-4">
              <button onClick={handleModalClose} className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">Cancel</button>
              <button onClick={handleBanSubmit} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Ban</button>
            </div>
          </div>
        </div>
      )}
      {banAlert && (
        <div className="fixed bottom-4 right-4 bg-yellow-500 text-black p-4 rounded-md shadow-lg" role="alert" aria-live="assertive">
          {banAlert}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
