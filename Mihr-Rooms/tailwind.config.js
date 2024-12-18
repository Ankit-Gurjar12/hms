// tailwind.config.js
import scrollbarHide from 'tailwind-scrollbar-hide';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#000000',
        'navbar-dark': '#202020',
      },
      width: {
        'navbar': '1728px',
        'sidebar': '298px',
      },
      height: {
        'full-layout': '1117px',
        'navbar': '130px',
        'sidebar': '938px',
      }
    },
  },
  plugins: [
    scrollbarHide,
  ],
};
  