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
          primary: "#12B788",
          secondary: "#f44369",
          accent: "#FFD700",
          neutral: "#0d1224",
          "base-100": "#ffffff",
        },
      },
      "light",
      "synthwave",
    ],
  },
};
