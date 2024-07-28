import { FaBan } from "react-icons/fa6";
import { useRef, useEffect } from "react";

export const SignInSignUpModal = ({ onClose }: { onClose: () => void }) => {
  const modalRef = useRef<HTMLUListElement>(null);
  const closeButtonRef = useRef<HTMLDivElement>(null);

  // Function to generate a unique ID
  function generateUniqueId() {
    const timestamp = Date.now();
    return timestamp.toString().slice(-10);
  }

  // Handle clicks outside the modal
  const handleClickOutside = (event: MouseEvent) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target as Node) &&
      closeButtonRef.current &&
      !closeButtonRef.current.contains(event.target as Node)
    ) {
      onClose(); // Notify parent to close the modal
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside the modal
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Clean up event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <ul
        ref={modalRef}
        className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 w-[400px] h-[500px]"
        role="alert"
      >
        <div className="flex justify-between">
          <p className="font-bold">HI, Guest #{generateUniqueId()}</p>
          <div ref={closeButtonRef}>
            <FaBan
              onClick={onClose} // Close modal via callback
              fill="black"
              role="button"
              aria-label="Close Modal"
            />
          </div>
        </div>
        <p>This is a Simple Alert with Tailwind Snippets</p>
      </ul>
    </div>
  );
};
