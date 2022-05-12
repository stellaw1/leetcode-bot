module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  plugins: [
    require("daisyui")
  ],
  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: ["bumblebee", "dark", "cmyk"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}
