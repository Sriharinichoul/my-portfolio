/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'lavender': {
          '50': '#f4f1fa',
          '100': '#e6e6fa',
          '200': '#d8ceef',
          '300': '#c3b2e3',
          '400': '#ae90d4',
          '500': '#9a74c7',
          '600': '#875bb4',
          '700': '#734a9e',
          '800': '#5f3d81',
          '900': '#4f3569',
          '950': '#2e1d3f',
        },
        'sky': {
          '50': '#f0f9ff',
          '100': '#e0f2fe',
          '200': '#bae6fd',
          '300': '#7fc8f8',
          '400': '#38bdf8',
          '500': '#0ea5e9',
          '600': '#0284c7',
          '700': '#0369a1',
          '800': '#075985',
          '900': '#0c4a6e',
          '950': '#082f49',
        },
        'green': {
          '50': '#f0fdf4',
          '100': '#dcfce7',
          '200': '#bbf7d0',
          '300': '#86efac',
          '400': '#4ade80',
          '500': '#58D68D',
          '600': '#16a34a',
          '700': '#15803d',
          '800': '#166534',
          '900': '#14532d',
          '950': '#052e16',
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards',
        slideUp: 'slideUp 0.5s ease-out forwards',
        bounce: 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};