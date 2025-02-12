/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB", // Blue for buttons
        background: "#F3F4F6", // Light gray background
        text: "#111827", // Dark text color
      },
    },
  },
  plugins: [],
};
