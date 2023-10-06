/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      spacing: {
        '500': '500px',
      },
      colors: {
        'hover': '#3258b1',
        'item-bg': '#cecece'
      },
    },
  },
  plugins: [],
}

