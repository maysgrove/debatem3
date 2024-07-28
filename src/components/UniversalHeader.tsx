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
    <header className="flex w-full p-2 bg-[#1b1b1b] px-4 h-14 relative">
      <h1 className="text-4xl my-auto font-bold lg:ml-2 lg:text-3xl lg:pr-4 text-white">DEBATE.ME</h1>
      <div className="container hidden lg:flex flex-row list-none text-white text-[1.2rem] font-semibold">
        <input
          placeholder="Search"
          className="h-[75%] w-[300px] lg:w-[270px] border rounded-md pl-2 my-auto bg-[#00000071]"
        />
        <Link className="my-auto mx-2 ml-4 hover:text-[#00ccff] hover:underline underline-offset-4 decoration-2" to="/">HOME</Link>
        <Link className="my-auto mx-2 hover:text-[#00ccff] hover:underline underline-offset-4 decoration-2" to="/Dashboard">DASHBOARD</Link>
        <Link className="my-auto mx-2 hover:text-[#00ccff] hover:underline underline-offset-4 decoration-2" to="/DebateDefault">DEBATE</Link>
        <Link className="my-auto mx-2 hover:text-[#00ccff] hover:underline underline-offset-4 decoration-2" to="*">ERROR</Link>
      </div>
      <div ref={buttonRef} className="relative bg-purple-500 ml-auto">
        <FaCircleUser
          onClick={toggleModal}
          size={33}
          color="black"
          fill="white"
          className="my-auto h-full hover:fill-[#00ccff] "
          role="button"
          aria-label="User Menu"
          aria-haspopup="true"
        />
        {isModalOpen && (
			<SignInSignUpModal onClose={() => setIsModalOpen(false)} />
        )}
      </div>
    </header>
  );
};

export default UniversalHeader;
