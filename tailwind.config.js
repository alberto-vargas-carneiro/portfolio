/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        headerColor: "hsl(271, 58%, 18%)",
        whats: "rgb(37, 211, 102)",
        linkedin: "rgb(0, 119, 181)",
      },
    },
  },
  plugins: [],
};
