
// UserInfoModal.tsx

import React, { useRef, useEffect } from "react";

interface UserInfoModalProps {
  user: {
    DEBATE_NAME: string;
    STREAMER_NAME: string;
    STREAMER_PROFILE_PIC: string;
    TOTAL_VIEWS: number;
  } | null;
  onClose: () => void;
}

const UserInfoModal: React.FC<UserInfoModalProps> = ({ user, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle click outside the modal to close it
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

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div
        ref={modalRef}
        className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="flex items-center">
          <img
            src={user.STREAMER_PROFILE_PIC}
            alt={`${user.STREAMER_NAME}'s profile`}
            className="w-16 h-16 rounded-full border-2 border-gray-800"
          />
          <div className="ml-4">
            <h2 className="text-lg font-bold">{user.STREAMER_NAME}</h2>
            <p className="text-gray-700">{user.DEBATE_NAME}</p>
            <p className="text-gray-500">{user.TOTAL_VIEWS} views</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoModal;
