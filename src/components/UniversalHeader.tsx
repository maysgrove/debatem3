/* 
PRIMARY_1 #ffa500 | SECONDARY_1 #00ccff | PRIMARY_BG: #4a4ae7 
PRIMARY_2 #ff0055   #292929                      OLD_BG #40414b;
PRIMARY_3 #adff2f                         OLD_OVERLAY rgba(0, 0, 0, 0.404);
*/

// Needed Imports
import { useState } from "react";
import { Link } from "react-router-dom";

// COMPONENT IMPORTS


// PAGE ICON IMPORTS
//import { FaAlignJustify } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
// import { FaGithub } from "react-icons/fa6";

const UniversalHeader = () => {
	//const [sidebar, toggleSidebar] = useState(false)
	const [user, toggleUser] = useState(false)

	// Figure out why when toggling the sidebar the sidebar dropdown button changes to light blue. resets on page reload
	// nvm just a dev tools screen resize bug

	return (
		<header className={`flex w-full p-2 bg-[#1b1b1b] px-4 h-14 `}>
			{/* <FaAlignJustify onClick={() => toggleSidebar(!sidebar)} size={30} color="black" className="my-auto cursor-pointer h-full hover:fill-[#00ccff] lg:mr-0 mr-auto"/>
		{sidebar && (
		<Sidebar />
		)} */}
			<h1 className="text-4xl my-auto font-bold lg:ml-2 lg:text-3xl lg:pr-4 text-white">DEBATE.ME</h1>
			<div className="container hidden flex-row list-none lg:flex text-white text-[1.2rem] font-semibold">
				<input placeholder="Search" className="h-[75%] w-[300px] lg:w-[270px] border rounded-md pl-2 my-auto bg-[#00000071]"></input>
				<Link className="my-auto mx-2 ml-4 hover:text-[#00ccff] hover:underline underline-offset-4 decoration-2" to="/">HOME</Link>
				<Link className="my-auto mx-2 hover:text-[#00ccff] hover:underline underline-offset-4 decoration-2" to="/Dashboard">DASHBOARD</Link>
				<Link className="my-auto mx-2 hover:text-[#00ccff] hover:underline underline-offset-4 decoration-2" to="/DebateDefault">DEBATE</Link>
				<Link className="my-auto mx-2 hover:text-[#00ccff] hover:underline underline-offset-4 decoration-2" to="*">ERROR</Link>
			</div>
			<FaCircleUser onClick={() => toggleUser(!user)} size={33} color="black" fill="white" className="my-auto h-full hover:fill-[#00ccff] ml-auto sm:ml-auto" />
			{user && (
				<ul className="flex flex-col fixed right-1 top-[60px] w-[300px] px-2 py-2 rounded bg-[#000000b0]">
					<h3 className="text-white text-4xl font-semibold">Login</h3>
					<input type="username" placeholder="Username" className="my-4 h-10 rounded pl-2 text-[16px]"></input>
					<input type="password" placeholder="Password" className="h-10 rounded pl-2 text-[16px]"></input>
					<div className="flex">
						<h3 className="text-white text-sm py-2 font-semibold mr-auto">Create Account</h3>
						<h3 className="text-white py-2 text-sm font-semibold">Forgot Password?</h3>
					</div>
					<button className="bg-[#0044ff] rounded-md py-1 font-bold  text-white text-2xl">SIGN IN</button>
				</ul>
			)}
		</header>
	);
};

export default UniversalHeader;
