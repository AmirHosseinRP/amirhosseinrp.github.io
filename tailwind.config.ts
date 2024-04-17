import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["class", "[data-mode='dark']"],
  theme: {
    extend: {
      colors: {
        /**
         * :::: primary colors (brand) ::::
         */
        "rp-brand-50": "var(--rp-brand-50)",
        "rp-brand-100": "var(--rp-brand-100)",
        "rp-brand-200": "var(--rp-brand-200)",
        "rp-brand-300": "var(--rp-brand-300)",
        "rp-brand-400": "var(--rp-brand-400)",
        "rp-brand-500": "var(--rp-brand-500)",
        "rp-brand-600": "var(--rp-brand-600)",
        "rp-brand-700": "var(--rp-brand-700)",
        "rp-brand-800": "var(--rp-brand-800)",
        "rp-brand-900": "var(--rp-brand-900)",
        "rp-brand-950": "var(--rp-brand-950)",

        /**
         * :::: primary colors (info) ::::
         */
        "rp-info-50": "var(--rp-info-50)",
        "rp-info-100": "var(--rp-info-100)",
        "rp-info-200": "var(--rp-info-200)",
        "rp-info-300": "var(--rp-info-300)",
        "rp-info-400": "var(--rp-info-400)",
        "rp-info-500": "var(--rp-info-500)",
        "rp-info-600": "var(--rp-info-600)",
        "rp-info-700": "var(--rp-info-700)",
        "rp-info-800": "var(--rp-info-800)",
        "rp-info-900": "var(--rp-info-900)",
        "rp-info-950": "var(--rp-info-950)",

        /**
         * :::: primary colors (success) ::::
         */
        "rp-success-50": "var(--rp-success-50)",
        "rp-success-100": "var(--rp-success-100)",
        "rp-success-200": "var(--rp-success-200)",
        "rp-success-300": "var(--rp-success-300)",
        "rp-success-400": "var(--rp-success-400)",
        "rp-success-500": "var(--rp-success-500)",
        "rp-success-600": "var(--rp-success-600)",
        "rp-success-700": "var(--rp-success-700)",
        "rp-success-800": "var(--rp-success-800)",
        "rp-success-900": "var(--rp-success-900)",
        "rp-success-950": "var(--rp-success-950)",

        /**
         * :::: primary colors (warning) ::::
         */
        "rp-warning-50": "var(--rp-warning-50)",
        "rp-warning-100": "var(--rp-warning-100)",
        "rp-warning-200": "var(--rp-warning-200)",
        "rp-warning-300": "var(--rp-warning-300)",
        "rp-warning-400": "var(--rp-warning-400)",
        "rp-warning-500": "var(--rp-warning-500)",
        "rp-warning-600": "var(--rp-warning-600)",
        "rp-warning-700": "var(--rp-warning-700)",
        "rp-warning-800": "var(--rp-warning-800)",
        "rp-warning-900": "var(--rp-warning-900)",
        "rp-warning-950": "var(--rp-warning-950)",

        /**
         * :::: primary colors (error) ::::
         */
        "rp-error-50": "var(--rp-error-50)",
        "rp-error-100": "var(--rp-error-100)",
        "rp-error-200": "var(--rp-error-200)",
        "rp-error-300": "var(--rp-error-300)",
        "rp-error-400": "var(--rp-error-400)",
        "rp-error-500": "var(--rp-error-500)",
        "rp-error-600": "var(--rp-error-600)",
        "rp-error-700": "var(--rp-error-700)",
        "rp-error-800": "var(--rp-error-800)",
        "rp-error-900": "var(--rp-error-900)",
        "rp-error-950": "var(--rp-error-950)",

        /**
         * :::: primary colors (gray blue) ::::
         */
        "rp-gray-blue-50": "var(--rp-gray-blue-50)",
        "rp-gray-blue-100": "var(--rp-gray-blue-100)",
        "rp-gray-blue-200": "var(--rp-gray-blue-200)",
        "rp-gray-blue-300": "var(--rp-gray-blue-300)",
        "rp-gray-blue-400": "var(--rp-gray-blue-400)",
        "rp-gray-blue-500": "var(--rp-gray-blue-500)",
        "rp-gray-blue-600": "var(--rp-gray-blue-600)",
        "rp-gray-blue-700": "var(--rp-gray-blue-700)",
        "rp-gray-blue-800": "var(--rp-gray-blue-800)",
        "rp-gray-blue-900": "var(--rp-gray-blue-900)",
        "rp-gray-blue-950": "var(--rp-gray-blue-950)",

        /**
         * :::: primary colors (gray) ::::
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
         * :::: neutral colors ::::
         */
        "rp-neutral-white": "var(--rp-neutral-white)",
        "rp-neutral-black": "var(--rp-neutral-black)",

        /**
         * :::: button colors ::::
         */
        "rp-btn-primary-light": "var(--rp-btn-primary-light)",
        "rp-btn-primary-light-hover": "var(--rp-btn-primary-light-hover)",
        "rp-btn-primary-light-active": "var(--rp-btn-primary-light-active)",

        "rp-btn-primary-normal": "var(--rp-btn-primary-normal)",
        "rp-btn-primary-normal-hover": "var(--rp-btn-primary-normal-hover)",
        "rp-btn-primary-normal-active": "var(--rp-btn-primary-normal-active)",

        "rp-btn-info-light": "var(--rp-btn-info-light)",
        "rp-btn-info-light-hover": "var(--rp-btn-info-light-hover)",
        "rp-btn-info-light-active": "var(--rp-btn-info-light-active)",

        "rp-btn-info-normal": "var(--rp-btn-info-normal)",
        "rp-btn-info-normal-hover": "var(--rp-btn-info-normal-hover)",
        "rp-btn-info-normal-active": "var(--rp-btn-info-normal-active)",

        "rp-btn-success-light": "var(--rp-btn-success-light)",
        "rp-btn-success-light-hover": "var(--rp-btn-success-light-hover)",
        "rp-btn-success-light-active": "var(--rp-btn-success-light-active)",

        "rp-btn-success-normal": "var(--rp-btn-success-normal)",
        "rp-btn-success-normal-hover": "var(--rp-btn-success-normal-hover)",
        "rp-btn-success-normal-active": "var(--rp-btn-success-normal-active)",

        "rp-btn-warning-light": "var(--rp-btn-warning-light)",
        "rp-btn-warning-light-hover": "var(--rp-btn-warning-light-hover)",
        "rp-btn-warning-light-active": "var(--rp-btn-warning-light-active)",

        "rp-btn-warning-normal": "var(--rp-btn-warning-normal)",
        "rp-btn-warning-normal-hover": "var(--rp-btn-warning-normal-hover)",
        "rp-btn-warning-normal-active": "var(--rp-btn-warning-normal-active)",

        "rp-btn-danger-light": "var(--rp-btn-danger-light)",
        "rp-btn-danger-light-hover": "var(--rp-btn-danger-light-hover)",
        "rp-btn-danger-light-active": "var(--rp-btn-danger-light-active)",

        "rp-btn-danger-normal": "var(--rp-btn-danger-normal)",
        "rp-btn-danger-normal-hover": "var(--rp-btn-danger-normal-hover)",
        "rp-btn-danger-normal-active": "var(--rp-btn-danger-normal-active)",

        "rp-btn-gray": "var(--rp-btn-gray)",
        "rp-btn-gray-hover": "var(--rp-btn-gray-hover)",
        "rp-btn-gray-active": "var(--rp-btn-gray-active)",

        /**
         * :::: text colors ::::
         */
        "rp-text-primary": "var(--rp-text-primary)",
        "rp-text-secondary": "var(--rp-text-secondary)",
        "rp-text-placeholder": "var(--rp-text-placeholder)",
        "rp-text-disabled": "var(--rp-text-disabled)",
        "rp-text-white": "var(--rp-text-white)",
        "rp-text-link": "var(--rp-text-link)",
      },
      backgroundColor: {
        "rp-bg-default": "var(--rp-bg-default)",
        "rp-bg-paper": "var(--rp-bg-paper)",
        "rp-bg-menu": "var(--rp-bg-menu)",
        "rp-bg-modal": "var(--rp-bg-modal)",

        "rp-button-disable": "var(--rp-btn-primary-normal-disable)",

        "rp-menu-normal": "var(--rp-menu-normal)",
        "rp-menu-hover": "var(--rp-menu-hover)",
        "rp-menu-active": "var(--rp-menu-active)",

        "rp-transparent-white-8": "var(--rp-transparent-white-8)",
        "rp-transparent-white-12": "var(--rp-transparent-white-12)",
        "rp-transparent-white-16": "var(--rp-transparent-white-16)",
        "rp-transparent-white-24": "var(--rp-transparent-white-24)",
        "rp-transparent-white-32": "var(--rp-transparent-white-32)",
        "rp-transparent-white-48": "var(--rp-transparent-white-48)",
        "rp-transparent-white-80": "var(--rp-transparent-white-80)",

        "rp-transparent-black-8": "var(--rp-transparent-black-8)",
        "rp-transparent-black-12": "var(--rp-transparent-black-12)",
        "rp-transparent-black-16": "var(--rp-transparent-black-16)",
        "rp-transparent-black-24": "var(--rp-transparent-black-24)",
        "rp-transparent-black-32": "var(--rp-transparent-black-32)",
        "rp-transparent-black-48": "var(--rp-transparent-black-48)",
        "rp-transparent-black-80": "var(--rp-transparent-black-80)",
      },
      backgroundImage: {
        // login: "url('/images/bg-login.svg')",
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
