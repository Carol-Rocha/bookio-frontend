/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          300: '#F3B18A',
          400: '#E98B5E',
          500: '#D86A3A',
          600: '#C4512C',
        },
        secondary: {
          400: '#F1C88E',
          500: '#E4B372',
          600: '#C4934B',
        },
        neutral: {
          50:  '#FAF6F1',
          100: '#F2E9E2',
          200: '#E6DCD4',
          300: '#D6C7BD',
          400: '#B79E92',
          500: '#8C746C',
          600: '#6A5048',
          700: '#4A332E',
        },
        success: {
          100: '#E5EFE3',
          500: '#759568',
        },
        error: {
          100: '#F6E8E8',
          500: '#B84040',
        },
        warning: {
          100: '#FAF0D9',
          500: '#D49A3A',
        },
        info: {
          100: '#E5EDF1',
          500: '#7A99AD',
        },
        accent: {
          olive: '#7E8B5E',
          wine: '#803B4D',
        },
      },
    },
  },
  plugins: [],
};
