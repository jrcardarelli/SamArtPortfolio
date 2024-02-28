import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'Righteous': 'Righteous'
    },
    colors: {
      'eggshell': '#EDE4BB',
      'eggshell2': '#EDE4BB',
      'background': '#FFFFF0',
      'border-line': '#E1C564',
      'normal-text': '#42322D',
      'text-highlight': '#EB6B34',
      'yellow': '#ffd500'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        '90vh': '90vh',
      },
      maxHeight: {
        '70dvh': '70dvh',
        '60dvh': '60dvh',
        '90vh': '90vh'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'fadeIn': 'fadeIn 5s linear ease-in entry'
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.8)"
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)"
          }
        }
      }
    },
  },
  plugins: [],
};
export default config;
