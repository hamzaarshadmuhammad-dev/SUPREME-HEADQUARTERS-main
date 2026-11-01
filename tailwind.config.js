/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#080808", char: "#111111", blood: "#FF3030" },
      fontFamily: { display: ["Anton", "Impact", "sans-serif"], body: ["Chakra Petch", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
