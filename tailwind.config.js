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
        // Dynamic colors for dark mode
        darkMode: '#151515',
        darkModeHeader: '#0c0c0c',
        darkModeSidebar: '#1f1f1f',
        darkModeText: '#e5e5e5',
        
        // Dynamic colors for light mode
        lightMode: '#ffffff',
        lightModeHeader: '#f0f0f0',
        lightModeSidebar: '#f9f9f9',
        lightModeText: '#333333',
        
        // Custom alert and action colors
        alert: '#ff0033',
        primary: '#4c35ff',
        secondary: '#ff7e35',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
/* 
PRIMARY_1 #ffa500 | SECONDARY_1 #00ccff | PRIMARY_BG: #4a4ae7 
PRIMARY_2 #ff0055   #292929                      OLD_BG #40414b;
PRIMARY_3 #adff2f                         OLD_OVERLAY rgba(0, 0, 0, 0.404);
*/
