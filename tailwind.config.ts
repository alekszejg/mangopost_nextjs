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
      'jost-bold': ['Jost-Bold', 'sans-serif'],
      'jost-extrabold': ['Jost-Extra-Bold', 'sans-serif'],
      'jost-black': ['Jost-Black', 'sans-serif'],
    },
    screens: {
      'mobile': '0px',
      'tablet': '480px',
      
      'min-650px': '650px',
      'min-750px': '750px',
      'min-800px': '800px',
      'min-900px': '900px',

      'navMin-960px': '960px',

      'desktop': '992px',

      'navMin-1125px': '1125px',

      'ultrawide': '1400px',
    },
    extend: {},
  },
  plugins: [],
};
export default config;
