/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "500px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        Primary: "#386A20",
        OnPrimary: "#FFFFFF",
        PrimaryContainer: "#B7F397",
        OnPrimaryContainer: "#042100",
        Secondary: "#55624C",
        OnSecondary: "#FFFFFF",
        SecondaryContainer: "#D9E7CB",
        OnSecondaryContainer: "#131F0D",
        Tertiary: "#19686A",
        OnTertiary: "#FFFFFF",
        TertiaryContainer: "#A8EFF0",
        OnTertiaryContainer: "#002021",
        Neutral: "#FDFDF5",
        OnNeutral: "#191C18",
        NeutralContainer: "#FDFDF5",
        OnNeutralContainer: "#191C18",
        NeutralVariant: "#E0E5D7",
        OnNeutralVariant: "#43483E",
        NeutralVariantContainer: "#72776C",
        OnNeutralVariantContainer: "#C4C9BC",
      },
      fontFamily: {},
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
        "2xs": ["0.5rem", { lineHeight: "1" }],
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '16/9': '16 / 9'
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '16/9': '16 / 9'
      },
    },
  },
  plugins: [],
};
