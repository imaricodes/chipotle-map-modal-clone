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
  screens: {
    'sm': '640px',
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'lg-header': '1200px',

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  },
    extend: {
      keyframes: {
        zoomOut: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        zoomIn: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
        fadeIn: {
          '0%': { transform: 'opacity(0)' },
          '100%': { transform: 'opacity(1)' },
        },
      },
      animation: {
        'zoom-out': 'zoomOut .25s ease-in-out',
        'zoom-in': 'zoomIn .25s ease-in-out ',
        'fade-in': 'fadeIn .25s ease-in-out' 
      },
    },
  },
  plugins: [],
}

