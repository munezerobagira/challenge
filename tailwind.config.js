/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#FF385C',
          light: '#f7f7f7',
          dark: '#D61A18',
        },

        accent: {
          light: '#0f172a',
          dark: '#f1f5f9',
          DEFAULT: '#0f172a',
        },
        grey: {
          light: '#d3d3d3',
          dark: '#575757',
          DEFAULT: '#575757',
        },
      },
    },
  },
  plugins: [],
};
