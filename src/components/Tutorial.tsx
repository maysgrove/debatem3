import React, { useState, useEffect, useRef } from "react";

interface TutorialProps {
  user: {
    DEBATE_NAME: string;
    STREAMER_NAME: string;
    STREAMER_PROFILE_PIC: string;
    TOTAL_VIEWS: number;
  } | null;
  onClose: () => void;
}

const Tutorial: React.FC<TutorialProps> = ({ user, onClose }) => {
  const [currentPage, setCurrentPage] = useState(0); 
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!user) return null;

  const pages = [
    { title: "Introduction", content: <div><h2 className="text-2xl font-bold mb-4">Welcome</h2><p>This is an introduction to the tutorial.</p></div> },
    { title: "Step 1", content: <div><h2 className="text-2xl font-bold mb-4">Create a Debate</h2><p>Learn how to create a debate.</p></div> },
    { title: "Step 2", content: <div><h2 className="text-2xl font-bold mb-4">Join a Debate</h2><p>Learn how to join debates.</p></div> },
    { title: "Conclusion", content: <div><h2 className="text-2xl font-bold mb-4">You're Ready!</h2><p>You've completed the tutorial.</p></div> }
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        ref={modalRef}
        className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl w-full sm:w-11/12 lg:w-3/4 h-5/6" // Increased height to 5/6 of the viewport
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Breadcrumb Navigation */}
        <nav className="mb-6 flex justify-center items-center space-x-4"> {/* Added space between breadcrumbs */}
          {pages.map((page, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`text-xs px-2 py-1 rounded-md transition-all ${
                currentPage === index
                  ? "bg-blue-500 text-white dark:bg-blue-400"
                  : "bg-gray-300 text-gray-600 dark:bg-gray-600 dark:text-gray-300"
              }`}
              style={{ minWidth: "60px" }} // Smaller width for breadcrumbs
            >
              {page.title}
            </button>
          ))}
        </nav>

        {/* Tutorial Page Content */}
        <div className="text-center flex-1 overflow-y-auto">
          {pages[currentPage].content}
        </div>

        {/* Page Navigation Buttons */}
        <div className="mt-4 flex justify-between">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
            className={`px-4 py-2 rounded-lg transition-colors ${
              currentPage === 0
                ? "bg-gray-300 text-gray-600 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400"
                : "bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500"
            }`}
          >
            Previous
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, pages.length - 1))
            }
            disabled={currentPage === pages.length - 1}
            className={`px-4 py-2 rounded-lg transition-colors ${
              currentPage === pages.length - 1
                ? "bg-gray-300 text-gray-600 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400"
                : "bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
