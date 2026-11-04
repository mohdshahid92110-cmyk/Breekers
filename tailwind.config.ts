import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#09090F",
        surface: "#11111B",
        mute: "#A1A1AA",
        brand: { violet: "#8B5CF6", cyan: "#22D3EE", indigo: "#6366F1" },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      keyframes: {
        drift: {
          "0%,100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(40px,-30px,0) scale(1.12)" },
        },
        rise: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pagein: { from: { opacity: "0", transform: "translateY(6px)" }, to: { opacity: "1", transform: "none" } },
        dot: { "0%,80%,100%": { opacity: ".25" }, "40%": { opacity: "1" } },
      },
      animation: {
        drift: "drift 18s ease-in-out infinite",
        "drift-slow": "drift 26s ease-in-out infinite reverse",
        rise: "rise .7s cubic-bezier(.2,.7,.2,1) both",
        pagein: "pagein .35s ease-out both",
        dot: "dot 1.2s infinite",
      },
    },
  },
  plugins: [animate],
};
export default config;
