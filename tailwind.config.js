/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       // Define custom styles for the active link
       textColor: {
        'active-link': 'red', // Replace 'red' with your desired color
      }
    },
  },
  plugins: [],
}

