import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["**/next.config.mjs", "**/logger.ts"],
}, ...compat.extends(
    "next/core-web-vitals",
    "plugin:react/recommended",
    "standard-with-typescript",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
), {
    plugins: {
        react,
        prettier,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
        },

        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",
    },

    rules: {
        "prettier/prettier": "error",
        quotes: ["error", "double"],
        "no-console": "warn",
        semi: "off",
        "react/react-in-jsx-scope": "off",
        "react-hooks/exhaustive-deps": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/no-confusing-void-expression": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/method-signature-style": "off",
    },
}, {
    files: ["./src/**/*.tsx"],

    rules: {
        "max-lines": ["error", {
            max: 256,
            skipBlankLines: true,
            skipComments: true,
        }],
    },
}];