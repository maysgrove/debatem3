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
        darkModeHeader: '#151515',
        
        // Dynamic colors for light mode
        lightMode: 'rgb(229 229 229);',
        lightModeHeader: '#fff',
        
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
