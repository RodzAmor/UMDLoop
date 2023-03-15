/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'umd-red': '#E21833',
        'umd-gray': '#6C6C6C',
        'umd-gray2': 'rgba(255, 255, 255, 0.5)',
        'umd-gold': "#E0B13A"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
