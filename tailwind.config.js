/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0px 4px 4px 0px rgba(0,0,0,0.25)",
      },
      backgroundImage: {
        sign_up_mb: "url('/assets/images/illustration-sign-up-mobile.svg')",
      },
    },
    colors: {
      "slate-grey": "#27293F",
      white: "#ffffff",
      "dark-navy": "#242742",
    },
    fontFamily: {
      sans: ['"Roboto"'],
    },
  },
  plugins: [],
};
