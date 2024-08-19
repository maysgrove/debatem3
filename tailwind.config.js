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
        darkMode: ' #151515 ',  
        darkModeHeader: '#0c0c0c',
        darkModeSidebar: '#1515',   
        lightMode: '#fff',
        alert: 'red',
        blue: '#4c35ff',
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

// #D5303 