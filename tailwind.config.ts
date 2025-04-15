import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["class", "[data-mode='dark']"],
  theme: {
    extend: {
      screens: {
        xs: "448px",
      },
      colors: {
        reverse: "var(--reverse)",

        brand: "var(--brand)",
        "brand-hover": "var(--brand-hover)",
        "brand-active": "var(--brand-active)",
        "brand-light": "var(--brand-light)",
        "brand-light-hover": "var(--brand-light-hover)",
        "brand-light-active": "var(--brand-light-active)",

        info: "var(--info)",
        "info-hover": "var(--info-hover)",
        "info-active": "var(--info-active)",
        "info-light": "var(--info-light)",
        "info-light-hover": "var(--info-light-hover)",
        "info-light-active": "var(--info-light-active)",

        success: "var(--success)",
        "success-hover": "var(--success-hover)",
        "success-active": "var(--success-active)",
        "success-light": "var(--success-light)",
        "success-light-hover": "var(--success-light-hover)",
        "success-light-active": "var(--success-light-active)",

        warning: "var(--warning)",
        "warning-hover": "var(--warning-hover)",
        "warning-active": "var(--warning-active)",
        "warning-light": "var(--warning-light)",
        "warning-light-hover": "var(--warning-light-hover)",
        "warning-light-active": "var(--warning-light-active)",

        critical: "var(--critical)",
        "critical-hover": "var(--critical-hover)",
        "critical-active": "var(--critical-active)",
        "critical-light": "var(--critical-light)",
        "critical-light-hover": "var(--critical-light-hover)",
        "critical-light-active": "var(--critical-light-active)",

        /**
         * :::: gray palette ::::
         */
        "rp-gray-50": "var(--rp-gray-50)",
        "rp-gray-100": "var(--rp-gray-100)",
        "rp-gray-200": "var(--rp-gray-200)",
        "rp-gray-300": "var(--rp-gray-300)",
        "rp-gray-400": "var(--rp-gray-400)",
        "rp-gray-500": "var(--rp-gray-500)",
        "rp-gray-600": "var(--rp-gray-600)",
        "rp-gray-700": "var(--rp-gray-700)",
        "rp-gray-800": "var(--rp-gray-800)",
        "rp-gray-900": "var(--rp-gray-900)",
        "rp-gray-950": "var(--rp-gray-950)",

        /**
         * :::: prose colors ::::
         */
        "prose-primary": "var(--prose-primary)",
        "prose-secondary": "var(--prose-secondary)",
        "prose-hint": "var(--prose-hint)",
        "prose-disabled": "var(--prose-disabled)",
        "prose-inverse": "var(--prose-inverse)",
        "prose-link": "var(--prose-link)",
        "prose-white": "var(--prose-white)",
        "prose-brand": "var(--prose-brand)",
        "prose-info": "var(--prose-info)",
        "prose-success": "var(--prose-success)",
        "prose-warning": "var(--prose-warning)",
        "prose-critical": "var(--prose-critical)",

        /**
         * :::: transparent colors ::::
         */
        "transparent-white-8": "var(--transparent-white-8)",
        "transparent-white-12": "var(--transparent-white-12)",
        "transparent-white-16": "var(--transparent-white-16)",
        "transparent-white-24": "var(--transparent-white-24)",
        "transparent-white-32": "var(--transparent-white-32)",
        "transparent-white-48": "var(--transparent-white-48)",
        "transparent-white-80": "var(--transparent-white-80)",

        "transparent-black-8": "var(--transparent-black-8)",
        "transparent-black-12": "var(--transparent-black-12)",
        "transparent-black-16": "var(--transparent-black-16)",
        "transparent-black-24": "var(--transparent-black-24)",
        "transparent-black-32": "var(--transparent-black-32)",
        "transparent-black-48": "var(--transparent-black-48)",
        "transparent-black-80": "var(--transparent-black-80)",
      },
      backgroundColor: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        tertiary: "var(--bg-tertiary)",
        dialog: "var(--bg-dialog)",
        highlight: "var(--bg-highlight)",
      },
      backgroundImage: {
        app: "url('/assets/images/bg-app.webp')",
      },
      boxShadow: {
        "rp-shadow-xs": "var(--rp-shadow-xs)",
        "rp-shadow-sm": "var(--rp-shadow-sm)",
        "rp-shadow-md": "var(--rp-shadow-md)",
        "rp-shadow-lg": "var(--rp-shadow-lg)",
        "rp-shadow-xl": "var(--rp-shadow-xl)",
        "rp-shadow-2xl": "var(--rp-shadow-2xl)",
        "rp-shadow-3xl": "var(--rp-shadow-3xl)",
      },
    },
  },
  plugins: [],
};
export default config;
