/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-steel-blue-s02)',
        secondary: 'var(--color-primary-light-sea-green)',
        background: 'var(--color-white)',
        text: 'var(--color-main-text)',
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans], // Use Inter as default sans-serif
        heading: ['Poppins', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      spacing: {
        'std': '16px', // Define a standard padding value
        'std-md': '24px',
        'std-lg': '32px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
