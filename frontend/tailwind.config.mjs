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
        primary: {
          DEFAULT: 'rgb(var(--color-steel-blue-s02) / <alpha-value>)',
          50: 'rgb(var(--color-steel-blue-s02) / 0.5)', // Manually define shades
        },
        secondary: 'rgb(var(--color-primary-light-sea-green) / <alpha-value>)',
        background: 'rgb(var(--color-white) / <alpha-value>)',
        text: 'rgb(var(--color-main-text) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        heading: ['Poppins', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      spacing: {
        'std': '16px',
        'std-md': '24px',
        'std-lg': '32px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
