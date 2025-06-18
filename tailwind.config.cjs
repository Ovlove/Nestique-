module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#5B5BD6",
          accent: "#E6B980",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
