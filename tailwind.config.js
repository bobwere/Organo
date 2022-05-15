module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        green: {
          DEFAULT: "#71B214",
        },
        gray: {
          600: "#606060",
        },
      },
    },
  },
  plugins: [],
};
