import React, { useState, useEffect, useRef, useCallback } from "react";

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

  const pages = [
    {
      title: "Introduction",
      content: (
        <p>This is an introduction to the tutorial. Let's get you ready to start debating!</p>
      ),
    },
    {
      title: "Create a Debate",
      content: (
        <p>Learn how to set up your first debate. You can choose 1v1, 2v2, or 3v3 formats.</p>
      ),
    },
    {
      title: "Join a Debate",
      content: (
        <p>Search for ongoing debates and join one that fits your interest.</p>
      ),
    },
    {
      title: "Watch Previous Debates",
      content: (
        <p>Review past debates and learn from top debaters.</p>
      ),
    },
    {
      title: "Conclusion",
      content: (
        <p>You've completed the tutorial. Start debating now!</p>
      ),
    },
  ];

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    },
    [onClose]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setCurrentPage((prev) => Math.min(prev + 1, pages.length - 1));
      } else if (event.key === "ArrowLeft") {
        setCurrentPage((prev) => Math.max(prev - 1, 0));
      } else if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose, pages.length]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClickOutside, handleKeyDown]);

  if (!user) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      role="dialog"
      aria-labelledby="tutorial-title"
      aria-describedby="tutorial-description"
      aria-modal="true"
    >
      <div
        ref={modalRef}
        className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl w-full sm:w-11/12 lg:w-3/4 h-5/6"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          aria-label="Close tutorial"
        >
          &times;
        </button>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="h-2 bg-gray-300 dark:bg-gray-700 rounded">
            <div
              className="h-2 bg-blue-500 dark:bg-blue-400 rounded"
              style={{ width: `${(currentPage + 1) * (100 / pages.length)}%` }}
            ></div>
          </div>
        </div>

        {/* Title for each page */}
        <div className="text-center mb-6">
          <h2 id="tutorial-title" className="text-2xl font-bold">
            {pages[currentPage].title}
          </h2>
        </div>

        {/* Tutorial Page Content */}
        <div id="tutorial-description" className="text-center flex-1">
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
            onClick={() => {
              if (currentPage === pages.length - 1) {
                onClose();
              } else {
                setCurrentPage((prev) => Math.min(prev + 1, pages.length - 1));
              }
            }}
            className={`px-4 py-2 rounded-lg transition-colors ${
              currentPage === pages.length - 1
                ? "bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500"
                : "bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500"
            }`}
          >
            {currentPage === pages.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
