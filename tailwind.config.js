/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mabry: ["Mabry Pro", "sans"],
        mabrybold: ["Mabry Bold", "sans"],
        mabryitalic: ["Mabry Italic", "sans"],
      },
    },
  },
  plugins: [],
}
