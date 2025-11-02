const { colors } = require("laravel-mix/src/Log");

module.exports = {
  content: ["./resources/**/*.js", "./resources/**/*.vue"],
  theme: {
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      sans: ["Lusitana", "sans-serif"],
      serif: ["Roboto", "sans-serif"],
    },

    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "Info-Image": "url('/images/info.png')",
        "pattern-image": "url('/images/pattern.svg')",
        "mug-Image": "url('/images/mug.jpg')",
        "well-image": "url('/images/well.png')",
        "stone-icon": "url('/images/icons/stone.png')",
        "saturn-icon": "url('/images/icons/saturn.png')",
        "binoculars-icon": "url('/images/icons/binoculars.png')",
        "medical-icon": "url('/images/icons/medical.png')",
        "about-icon": "url('/images/icons/about.png')",
        "contact-icon": "url('/images/icons/contact.png')",
        "tel-icon": "url('/images/icons/telephone.png')",
        "consulting-icon": "url('/images/icons/consulting.png')",
        "business-image": "url('/images/business-md.png')",
        "saver-image-1": "url('/images/screensaver/1.jpg')",
        "saver-image-2": "url('/images/screensaver/2.jpg')",
        "saver-image-3": "url('/images/screensaver/3.jpg')",
        "saver-image-4": "url('/images/screensaver/4.jpg')",
        "service1-image": "url('/images/services/service1.png')",
        "service2-image": "url('/images/services/2.png')",
        "service3-image": "url('/images/services/service3.png')",
        "service4-image": "url('/images/services/service4.png')",
        "service5-image": "url('/images/services/service5.png')",
        "service6-image": "url('/images/services/6.png')",
        "business-image": "url('/images/business-md.png')",
        "business-image": "url('/images/business-md.png')",
        "sub1-image": "url('/images/1a.jpg')",
        "sub2-image": "url('/images/2a.jpg')",
        "side-image": "url('/images/side.png')",
        "sub3-image": "url('/images/3a.jpg')",
      },
      backgroundPosition: {
        "bottom-4": "left 15% bottom",
        "left-center": "left 50% bottom",
        "center-top": "center top",
      },
      backgroundSize: {
        50: "40px",
      },
      fontSize: {
        base: "17px",
        sm: "15px",
      },
      height: {
        0.5: "2px",
        76: "280px",
        92: "320px",
        98: "669px",
      },
      width: {
        38: "150px",
      },
      padding: {
        92: "540px",
      },
      colors: {
        org: {
          100: "#ffddbc",
          200: "#fd8103",
          300: "#a94f20",
          400: "#ff4721",
          500: "#f62c1f",
          600: "#fd8103b8",
          700: "#ef2f21",
        },
        purp: {
          100: "#270c3b",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
