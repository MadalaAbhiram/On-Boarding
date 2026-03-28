/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f3f5fb",
        surface: "#ffffff",
        surfaceMuted: "#f4f8fc",
        stroke: "#d8e1ee",
        textMain: "#162033",
        textSoft: "#66758f",
        brand: "#4f7cff",
        brandDark: "#3d63d9",
        success: "#22a06b",
        accentUser: "#4f7cff",
        accentAdmin: "#14b8a6",
      },
      boxShadow: {
        soft: "0 18px 40px rgba(137, 144, 168, 0.16)",
      },
    },
  },
  plugins: [],
};
