module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,

      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        sans: "'Cabin', sans-serif",
      },
      colors: {
        dark1: "#171923",
        dark2: "#1A202C",
        light1: "#E2E8F0",
        light2: "#EDF2F7",
        accent: "#F2718C",
        middle: "#718096",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
