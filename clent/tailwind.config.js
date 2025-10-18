/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // This tells Tailwind to scan all your React files for class usage
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
