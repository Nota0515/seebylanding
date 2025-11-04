/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        sans: ['Bricolage Grotesque', 'system-ui', 'sans-serif'],
        mainFont: ['Bricolage Grotesque', 'sans-serif'],
      },
    },
  },
  plugins: [],
}