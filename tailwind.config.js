/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecfdf5',
          500: '#22c55e',
          600: '#16a34a',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(34,197,94,0.2), 0 20px 45px rgba(34,197,94,0.15)',
      },
    },
  },
  plugins: [],
}

