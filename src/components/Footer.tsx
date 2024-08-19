import React from 'react';
import { Link } from 'react-router-dom';
import {
  FcHome, FcConferenceCall, FcFeedback, FcCamcorderPro, FcOldTimeCamera,
  FcClapperboard, FcCustomerSupport, FcVoicePresentation
} from 'react-icons/fc';

interface FooterProps {
  sidebarOpen: boolean;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Footer: React.FC<FooterProps> = ({ sidebarOpen, isDarkMode }) => {
  return (
    <footer
      className={`py-4 transition-transform duration-300 ease-in-out ${
        sidebarOpen ? 'pl-56' : 'pl-16'
      } ${isDarkMode ? 'bg-darkMode text-white' : 'bg-lightMode text-black'}`}
    >
      {/* Top Border */}
      <div className={`border-t-2 ${isDarkMode ? 'border-gray-600' : 'border-gray-300'} mb-6`} />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
          {/* Community Group */}
          <div aria-labelledby="footer-community" className="flex-1">
            <h2 id="footer-community" className="text-lg font-semibold mb-4">Community</h2>
            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className={`flex items-center hover:text-gray-400 space-x-2 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}
                aria-label="Dashboard"
              >
                <FcHome size="20" />
                <span>Dashboard</span>
              </Link>
              <Link
                to="/ErrorPage"
                className={`flex items-center hover:text-gray-400 space-x-2 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}
                aria-label="Friends"
              >
                <FcConferenceCall size="20" />
                <span>Friends</span>
              </Link>
              <Link
                to="/"
                className={`flex items-center hover:text-gray-400 space-x-2 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}
                aria-label="Messages"
              >
                <FcFeedback size="20" />
                <span>Messages</span>
              </Link>
            </div>
          </div>

          {/* Debate Management Group */}
          <div aria-labelledby="footer-debate" className="flex-1">
            <h2 id="footer-debate" className="text-lg font-semibold mb-4">Debate</h2>
            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className={`flex items-center hover:text-gray-400 space-x-2 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}
                aria-label="Start Debate"
              >
                <FcCamcorderPro size="20" />
                <span>Start Debate</span>
              </Link>
              <Link
                to="/"
                className={`flex items-center hover:text-gray-400 space-x-2 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}
                aria-label="Join Debate"
              >
                <FcOldTimeCamera size="20" />
                <span>Join Debate</span>
              </Link>
              <Link
                to="/"
                className={`flex items-center hover:text-gray-400 space-x-2 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}
                aria-label="Previous Debates"
              >
                <FcClapperboard size="20" />
                <span>Previous Debates</span>
              </Link>
            </div>
          </div>

          {/* Support Group */}
          <div aria-labelledby="footer-support" className="flex-1">
            <h2 id="footer-support" className="text-lg font-semibold mb-4">Support</h2>
            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className={`flex items-center hover:text-gray-400 space-x-2 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}
                aria-label="Help"
              >
                <FcCustomerSupport size="20" />
                <span>Help</span>
              </Link>
              <Link
                to="/"
                className={`flex items-center hover:text-gray-400 space-x-2 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}
                aria-label="Ai (Coming Soon)"
              >
                <FcVoicePresentation size="20" />
                <span>Ai (Coming Soon)</span>
              </Link>
            </div>
          </div>

          {/* Legal Group */}
          <div aria-labelledby="footer-legal" className="flex-1">
            <h2 id="footer-legal" className="text-lg font-semibold mb-4">Legal</h2>
            <div className="flex flex-col gap-3">
              <Link
                to="/terms-of-service"
                className={`hover:text-gray-400 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}
                aria-label="Terms of Service"
              >
                Terms of Service
              </Link>
              <Link
                to="/legal"
                className={`hover:text-gray-400 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}
                aria-label="Legal"
              >
                Legal
              </Link>
              <Link
                to="/privacy-policy"
                className={`hover:text-gray-400 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}
                aria-label="Privacy Policy"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-600 pt-4 text-center text-sm mt-6">
        <p className="text-center mx-4 sm:mx-0" aria-live="polite">
          &copy; {new Date().getFullYear()} Debate Me. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
