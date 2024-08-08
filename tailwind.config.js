/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3D8AFF",
        secondary: "#4A5A7A",
        background: "#0D1117",
        secondaryBackground: "#2A3138",
        text: "#E6E8EA",
        interactiveElements: "#6A9AE6",
      },
      fontFamily: {
        mont: ["var(--font-montserrat)", "sans-serif"],
        pop: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
