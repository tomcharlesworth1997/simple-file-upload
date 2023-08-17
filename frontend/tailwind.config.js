/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {},
    colors: {
      blue: "#000028",
      teal: "#00EBD4"
    }
  },
  plugins: [],
}

