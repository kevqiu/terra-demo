module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        portfolio: "48rem",
        "luna-price": "12rem",
        "recent-activity": "34rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
