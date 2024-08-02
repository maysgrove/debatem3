import { useState, useRef, useEffect } from "react";
import { SignInSignUpModal } from "./SignInSignUpModal";

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
		<header className="flex items-center bg-gray-800 shadow-[inset_0_0px_3px_rgba(0,0,0,0.6)] px-4 py-2 h-[60px]">
			<h1 className="text-2xl lg:text-3xl font-bold text-white lg:pr-4">DEBATE.ME</h1>
			<div className="flex-grow flex items-center mx-2">
				<input
					placeholder="Search"
					className="h-8 w-full md:w-[80%] lg:w-[60%] border rounded-md pl-2 bg-[#00000071] text-white text-sm lg:text-base"
				/>
			</div>
			<button onClick={toggleModal} className="bg-orange-500 text-white font-bold px-3 lg:px-4 h-8 lg:h-10 rounded text-xs lg:text-base hover:bg-[#000] transition-colors duration-300 ml-auto">
				Create Account
			</button>
			{isModalOpen && (
				<SignInSignUpModal onClose={() => toggleModal()} />
			)}
		</header>
	);
};

export default UniversalHeader;
