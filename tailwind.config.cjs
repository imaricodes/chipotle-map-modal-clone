/** @type {import('tailwindcss').Config} */



module.exports = {
  content: [
    './src/components/**/*.{html,js,jsx, mjs}',
    './index.html'
  ],
  theme: {
    fontFamily: {
      body: ['Nunito', 'sans-serif'],
      tradeGothicBold: ['Trade-Gothic-LT-Std-Bold', 'sans-serif'],
  },
    extend: {},
  },
  plugins: [],
}

