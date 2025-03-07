import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import tseslint from "@typescript-eslint/eslint-plugin";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    parser: '@typescript-eslint/parser', // Parser for TypeScript
    parserOptions: {
      ecmaVersion: 2020, // Supports modern JavaScript features
      sourceType: 'module', // Allows the use of imports/exports
    },
    settings: {
      react: {
        version: 'detect', // Automatically detects the React version
      },
    },
    extends: [
      'eslint:recommended', // ESLint's recommended rules
      'plugin:react/recommended', // React-specific rules
      'plugin:@typescript-eslint/recommended', // TypeScript-specific rules
      'plugin:react-hooks/recommended', // React hooks-specific rules
    ],
    rules: {
      'react/prop-types': 'off', // Disable prop-types since TypeScript handles typing
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Optionally disable explicit return types
      '@typescript-eslint/no-explicit-any': 'warn', // Warn about using the 'any' type
      'react/react-in-jsx-scope': 'off', // React 17+ doesn't require React to be in scope
      'react/jsx-uses-react': 'off', // As above, React doesn't need to be in scope for JSX
    },
    overrides: [
      {
        files: ['src/**/*.{ts,tsx}'],
        rules: {
          '@typescript-eslint/no-unused-vars': 'warn', // Warn on unused variables in TypeScript
        },
      },
    ],
  },
];
