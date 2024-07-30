import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { SignInSignUpModal } from "./SignInSignUpModal";
import { FaCircleUser } from "react-icons/fa6";

const UniversalHeader = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const modalRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLDivElement>(null);

	const toggleModal = () => {
		setIsModalOpen((prev) => !prev);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (
			modalRef.current &&
			!modalRef.current.contains(event.target as Node) &&
			buttonRef.current &&
			!buttonRef.current.contains(event.target as Node)
		) {
			setIsModalOpen(false);
		}
	};

	useEffect(() => {
		if (isModalOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isModalOpen]);

	return (
		<header className="flex w-full bg-gray-800 shadow-[inset_0_0px_3px_rgba(0,0,0,0.6)] px-4 h-14">
			<h1 className="text-4xl my-auto font-bold lg:text-3xl lg:pr-4 text-white">DEBATE.ME</h1>
			<div className="container hidden lg:flex flex-row list-none text-black text-[1.2rem] font-semibold">
				<input
					placeholder="Search"
					className="h-[65%] w-[300px] lg:w-[500px] border rounded-md pl-2 my-auto bg-[#00000071]"
				/>
			</div>
			<button className="bg-orange-500 ml-auto text-white font-bold py-2 px-4 h-[80%] text-nowrap  my-auto rounded hover:bg-[#000] transition-colors duration-300">
    Click Me
  </button>
				{isModalOpen && (
					<SignInSignUpModal onClose={() => setIsModalOpen(false)} />
				)}
		</header>
	);
};

export default UniversalHeader;

{/* 
	<Link className="my-auto mx-2 ml-4 hover:text-[#00ccff] hover:underline underline-offset-4 decoration-2" to="/">HOME</Link>
	<Link className="my-auto mx-2 hover:text-[#00ccff] hover:underline underline-offset-4 decoration-2" to="/Dashboard">DASHBOARD</Link>
	<Link className="my-auto mx-2 hover:text-[#00ccff] hover:underline underline-offset-4 decoration-2" to="/DebateDefault">DEBATE</Link>
	<Link className="my-auto mx-2 hover:text-[#00ccff] hover:underline underline-offset-4 decoration-2" to="*">ERROR</Link> 
*/}