import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              50: "#FFE8E5",
              100: "#FFCFCB",
              200: "#FFB0A5",
              300: "#FF917F",
              400: "#FF7159",
              500: "#FF5233",
              600: "#E6482E",
              700: "#CC3E29",
              800: "#B33423",
              900: "#992A1E",
              DEFAULT: "#FF4C29"
            }
          }
        },
        dark: {
          colors: {
            primary: {
              50: "#FFE8E5",
              100: "#FFCFCB",
              200: "#FFB0A5",
              300: "#FF917F",
              400: "#FF7159",
              500: "#FF5233",
              600: "#E6482E",
              700: "#CC3E29",
              800: "#B33423",
              900: "#992A1E",
              DEFAULT: "#FF4C29"
            }
          }
        }
      }
    })
  ],
};
export default config;
