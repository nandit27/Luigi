/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oxanium: ['Oxanium', 'sans-serif'],
      },
      colors: {
        primary: "#FF8000",
        secondary: "#DEDEDE",
        background: "#000000",
        foreground: "#DEDEDE",
        card: "#121212",
        "card-foreground": "#DEDEDE",
        popover: "#121212",
        "popover-foreground": "#DEDEDE",
        muted: "#333333",
        "muted-foreground": "#DEDEDE",
        accent: "#FF8000",
        "accent-foreground": "#000000",
        destructive: "#FF4D4F",
        border: "#333333",
        input: "#333333",
        ring: "#FF8000",
      },
      animation: {
        "meteor": "meteor 5s linear infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
        shimmer: {
          from: {
            "backgroundPosition": "0 0"
          },
          to: {
            "backgroundPosition": "-200% 0"
          }
        },
      },
    },
  },
  plugins: [],
}

