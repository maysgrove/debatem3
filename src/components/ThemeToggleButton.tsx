// src/components/ThemeToggleButton.tsx
import React, { useState, useEffect } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

const ThemeToggleButton: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Check the saved theme from local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    // Apply the dark class to the root element
    const root = document.documentElement;
    root.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(prev => !prev)}
      className="flex items-center p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-300"
      aria-label="Toggle Dark/Light Mode"
    >
      {isDarkMode ? <HiSun size={24} /> : <HiMoon size={24} />}
    </button>
  );
};

export default ThemeToggleButton;
