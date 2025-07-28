// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      theme: {
        primary_color: "#B0DD1D",
      },
    },
  },
  plugins: [],
};
