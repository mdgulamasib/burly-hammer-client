module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        barlytheme: {
          primary: "#ff7606",
          secondary: "#7a2ea6",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#f5e7dc",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}