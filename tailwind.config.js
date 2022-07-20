/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0f1525',
        lightShade: '#C2CFF2',
        accent: '#3D414D',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
