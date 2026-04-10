/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          lilac: "#6d67c8",
          sky: "#578daf",
          mint: "#20bb96",
          cream: "#fdfcfb",
          sand: "#f7f6f3",
          mist: "#f0f4ff",
        },
      },
      fontFamily: {
        display: ['"Caveat"', "cursive"],
        sans: ['"Montserrat"', "sans-serif"],
      },
      boxShadow: {
        soft: "0 22px 55px rgba(87, 141, 175, 0.16)",
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        rise: "rise 0.8s ease-out both",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
