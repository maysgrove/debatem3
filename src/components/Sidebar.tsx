/* 
PRIMARY_1 #ffa500 | SECONDARY_1 #00ccff | PRIMARY_BG: #4a4ae7 
PRIMARY_2 #ff0055   #292929                      OLD_BG #40414b;
PRIMARY_3 #adff2f                         OLD_OVERLAY rgba(0, 0, 0, 0.404);
*/

import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

let userName = 'Guest'

const Sidebar = () => {
  const menus = [
    { name: "dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "user", link: "/", icon: AiOutlineUser },
    { name: "messages", link: "/", icon: FiMessageSquare },
    { name: "analytics", link: "/", icon: TbReportAnalytics, margin: true },
    { name: "File Manager", link: "/", icon: FiFolder },
    { name: "Cart", link: "/", icon: FiShoppingCart },
    { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    { name: "Setting", link: "/", icon: RiSettings4Line },
  ];



  {/* <h1 className="text-4xl my-auto font-bold text-[#ffffff]">DEBATE.ME</h1> */}

  React.useEffect(() => {
	const handleResize = () => {
	  if (window.innerWidth > 1200) {
		 setOpen(true);
	  } else {
		 setOpen(false);
	  }
	};

	window.addEventListener('resize', handleResize);
	console.log(`Initial screen width: ${window.innerWidth}, height: ${window.innerHeight}`);
	// Cleanup event listener on component unmount
	return () => {
	  window.removeEventListener('resize', handleResize);
	};
 }, []);

  const [open, setOpen] = useState(!true);

	return (
	<section className="flex gap-6 h-full">
		<div className={`bg-[#292929] ${open ? "w-56" : "w-16"} duration-500 text-gray-100 px-4`}>
			<div className="flex flex-col lg:flex-row justify-between">
				<div className="py-3 flex justify-start">
					<HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => setOpen(!open)}/>
					<h2
						className={`whitespace-pre duration-500 ${
						!open && "opacity-0 translate-x--28 overflow-hidden"}`}>
							<h2>Welcome {userName}</h2>
					</h2>
				</div>
			</div>
			<div className="mt-4 flex flex-col gap-4 relative">
			{menus?.map((menu, i) => (
				<Link to={menu?.link} key={i} className={` $ { menu?.margin && "mt-5"} group flex items-center text-sm text-[#adff2f] gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}>
					<div>{React.createElement(menu?.icon, { size: "20" })}</div>
					<h2 style={{transitionDelay: `${i + 3}40ms`,}}
						className={`whitespace-pre duration-500 ${
						!open && "opacity-0 translate-x-28 overflow-hidden"}`}>
						{menu?.name}
					</h2>
					<h2 className={`${ open && "hidden"
						} absolute  left-48 bg-white font-semibold whitespace-pre text-black rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 g
						roup-hover:py-1 group-hover:left-10 group-hover:duration-300 group-hover:w-fit  `}>
						{menu?.name}
					</h2>
				</Link>
				))}
			</div>
		</div>
	</section>
	);
};

export default Sidebar;
