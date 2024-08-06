import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{html,tsx}",
    "./Components/**/*.{html,tsx}"
  ],
  theme: {
    fontFamily: {
      'jost-regular': ['Jost-Regular', 'sans-serif'],
      'jost-medium': ['Jost-Medium', 'sans-serif'],
      'jost-medium-italic': ['Jost-Medium-Italic', 'sans-serif'],
      'jost-bold': ['Jost-Bold', 'sans-serif'],
      'jost-extrabold': ['Jost-Extra-Bold', 'sans-serif'],
      'jost-black': ['Jost-Black', 'sans-serif'],
    },
    screens: {
      'tablet': '480px',
      'min-600px': '600px',
      'min-650px': '650px',
      'min-700px': '700px',
      'min-750px': '750px',
      'min-800px': '800px',
      'min-900px': '900px',
      'navMin-960px': '960px',
      'desktop': '992px',
      'navMin-1125px': '1125px',
      'ultrawide': '1400px',
    },
    listStyleType: {
      'square': 'square',
    },
    extend: {
      spacing: {
        'img-text-gap': 'clamp(1rem, 4vw, 6rem)',
        'button-clamp': 'clamp(1rem, 6vw, 4rem)',
      },
    },
  },
  plugins: [],
};
export default config;
