/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        openSans: "'Open Sans', sans-serif ",
        Playfair: "'Playfair Display', serif",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#013220",
          secondary: "#9DC183",
          accent: "#FFD700",
          neutral: "#333333",
          "base-100": "#ffffff",
        },
      },
      "light",
      "synthwave",
    ],
  },
};
