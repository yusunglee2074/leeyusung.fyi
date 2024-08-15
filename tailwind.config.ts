import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "comic-sans": ['"Comic Sans MS"', "cursive"],
      },
      colors: {
        navy: "#000080",
        fuchsia: "#FF00FF",
      },
      boxShadow: {
        brutal: "5px 5px 0 #000000",
      },
      textShadow: {
        "brutal-text": "2px 2px 0 #FFFF00",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      const newUtilities = {
        ".text-shadow-brutal": {
          textShadow: "2px 2px 0 #FFFF00",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
export default config;
