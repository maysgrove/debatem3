/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode based on the 'dark' class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          // Define your primary colors here
        },
        secondary: {
          // Define your secondary colors here
        },
        gray: {
          // Define additional gray shades here
        },
        darkMode: '#151515',     // Additional dark color
        lightMode: '#bdbdbd',    // Additional light color
        header: '#00000056', // Semi-transparent black for sections
        teal: {
          500: '#38b2ac', // Teal color for dark mode
          700: '#2c7a7b'  // Teal color for light mode
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
