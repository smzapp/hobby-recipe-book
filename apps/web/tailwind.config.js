/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          default: 'red', // indigo-500
          hover: '#4f46e5',   // indigo-600
          light: '#e0e7ff',   // indigo-100
        },
      },
    },
  },
  plugins: [],
}