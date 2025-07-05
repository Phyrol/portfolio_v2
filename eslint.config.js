const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const eslintPluginReact = require("eslint-plugin-react/configs/recommended");
const eslintPluginPrettier = require("eslint-plugin-prettier/recommended");
const eslintPluginsReactHooks = require("eslint-plugin-react-hooks");

const files = ["src/**/*.{ts,tsx}"];
// This is needed specifically for the VSCode ESLint extension because it does not follow the "files" array
const ignores = ["*.{js,jsx}", "node_modules/*", "public/*"];

module.exports = tseslint.config(
    {settings: {react: {version: "detect"}}},
    {files},
    {ignores},
    eslint.configs.recommended,
    ...tseslint.configs.recommended, // help ESLint read Typescript
    eslintPluginReact, // help ESLint read React
    {
        plugins: {
            "react-hooks": eslintPluginsReactHooks,
        },
    },
    eslintPluginPrettier, // override the TS/React rules with the Prettier config
    {
        rules: {
            "@typescript-eslint/no-unused-vars": ["error", {"vars": "all", "args": "none", "ignoreRestSiblings": true}],
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/ban-ts-comment": ["error", {"ts-ignore": "allow-with-description"}],
            "@typescript-eslint/no-var-requires": "off",
            "@typescript-eslint/no-non-null-assertion": "warn",
            "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
            "@typescript-eslint/no-duplicate-enum-values": "off",
            "react/no-children-prop": "off",
            "react/no-deprecated": "off",
            "react/display-name": "off",
            "react/react-in-jsx-scope": "off", // With React 17+ the React import is automatic, so this rule is obsolete
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            "prefer-const": "off",
            "no-empty": "off",
            "no-empty-pattern": "off",
            "no-extra-boolean-cast": "off",
            "no-constant-binary-expression": "off",
            "no-useless-escape": "off",
            "no-self-assign": "off",
            "no-case-declarations": "off",
        },
    }
);
