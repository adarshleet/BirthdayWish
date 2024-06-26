/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playwrite-au': ['"Playwrite AU NSW"', 'sans-serif'],
        'playwrite-ng': ['"Playwrite NG Modern"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

