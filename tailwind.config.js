/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        screens: {

          'max-1023': { 'max': '1023px' },
        },
      },
    },
    plugins: [],
  };
