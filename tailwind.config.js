/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        'bangers': ['Bangers', 'cursive'],
        'arima': ['Nunito', 'sans-serif']
      },
      colors: {
        customBlue: "#05be9e",
        customLightBlue: "#C7F1F0",
        customBlack: "#2f2f27",
        customWhite: "#F0E6DD",
        customOrange: "#F8A12E",
        customLightOrange: "#FEC782"
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'headerFallBounce': `headerFallBounce 1s ease-in-out`,
        'spinSlow': 'spin 2s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'zoom-in': 'zoomIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        headerFallBounce: {
          '0%': { transform: 'translateY(-100vh)' },
          '50%': { transform: 'translateY(0px)' },
          '70%': { transform: 'translateY(10px)'},
          '80%': { transform: 'translateY(0px)' },
          '90%': { transform: 'translateY(5px)' },
          '100%': { transform: 'translateY(0px)' }
        },
      },
    },
  },
  plugins: [],
}