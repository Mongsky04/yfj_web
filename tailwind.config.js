// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        futura: ['Futura', 'sans-serif', 'Moul'],
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(50%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-up': 'slide-up 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};
