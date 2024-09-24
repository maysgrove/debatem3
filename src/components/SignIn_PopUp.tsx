import React, { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

interface GetStartedProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignIn: React.FC<GetStartedProps> = ({ isOpen, onClose }) => {
  const [view, setView] = useState<'welcome' | 'signup' | 'signin'>('welcome');
  const modalRef = useRef<HTMLDivElement>(null);

  const handleBack = () => setView('welcome');

  const handleClickOutside = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <CSSTransition in={isOpen} timeout={300} classNames="modal" unmountOnExit>
      <div
        className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
        onClick={handleClickOutside}
      >
        <div
          ref={modalRef}
          className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-6 rounded-lg shadow-lg relative w-full max-w-sm h-5/6 z-60"
        >
          {view === 'welcome' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Welcome to Debate.me</h2>
              <p className="mb-6">sign in sign up.</p>
              <div className="flex justify-end space-x-4">
                <button
                  className="bg-gray-700 text-white py-2 px-4 rounded"
                  onClick={() => setView('signin')}
                >
                  Sign In
                </button>
                <button
                  className="bg-blue-600 text-white py-2 px-4 rounded"
                  onClick={() => setView('signup')}
                >
                  Sign Up
                </button>
              </div>
            </div>
          )}
          {view === 'signup' && (
            <div className="fade-in">
              <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-200">Username</label>
                  <input className="w-full px-4 py-2 border rounded-lg" type="text" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-200">Email</label>
                  <input className="w-full px-4 py-2 border rounded-lg" type="email" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-200">Password</label>
                  <input className="w-full px-4 py-2 border rounded-lg" type="password" />
                </div>
                <div className="mb-4">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 px-4 rounded w-full"
                  >
                    Sign Up
                  </button>
                </div>
                <div className="flex justify-center items-center space-x-4">
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-full"
                  >
                    Facebook
                  </button>
                  <button
                    className="bg-red-500 text-white py-2 px-4 rounded-full"
                  >
                    Google
                  </button>
                  <button
                    className="bg-blue-400 text-white py-2 px-4 rounded-full"
                  >
                    Twitter
                  </button>
                </div>
                <button
                  type="button"
                  className="text-gray-400 underline mt-4 block"
                  onClick={handleBack}
                >
                  Back
                </button>
              </form>
            </div>
          )}
          {view === 'signin' && (
            <div className="fade-in">
              <h2 className="text-2xl font-bold mb-4">Sign In</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-200">Email</label>
                  <input className="w-full px-4 py-2 border rounded-lg" type="email" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-200">Password</label>
                  <input className="w-full px-4 py-2 border rounded-lg" type="password" />
                </div>
                <div className="mb-4">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 px-4 rounded w-full"
                  >
                    Sign In
                  </button>
                </div>
                <div className="flex justify-center items-center space-x-4">
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-full"
                  >
                    Facebook
                  </button>
                  <button
                    className="bg-red-500 text-white py-2 px-4 rounded-full"
                  >
                    Google
                  </button>
                  <button
                    className="bg-blue-400 text-white py-2 px-4 rounded-full"
                  >
                    Twitter
                  </button>
                </div>
                <button
                  type="button"
                  className="text-gray-400 underline mt-4 block"
                  onClick={handleBack}
                >
                  Back
                </button>
              </form>
            </div>
          )}
          <button
            className="absolute top-2 right-2 text-gray-300"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default SignIn;
