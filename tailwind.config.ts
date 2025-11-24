import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // Pages Router
    "./components/**/*.{js,ts,jsx,tsx}", // Wszystkie komponenty
    "./app/globals.css",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#b31782",
        secondary: "#e582c6",
        accent: "#e85bbb",
        background: "#faf2f7",
        txt: "#11080e",
      },
      borderRadius: {
        lg: "1rem", // dla .card
      },
    },
  },
  plugins: [],
};

export default config;
