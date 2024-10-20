import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], // Obsługiwane pliki
    ignores: ['dist'], // Ignorowanie folderu 'dist'
    languageOptions: {
      ecmaVersion: 2020, // ECMAScript 2020
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      'react-hooks': reactHooks, // Plugin dla React Hooks
      'react-refresh': reactRefresh, // Plugin do react-refresh
      prettier, // Plugin Prettiera
    },
    rules: {
      ...reactHooks.configs.recommended.rules, // Reguły React Hooks
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier': 'error', // Traktowanie problemów Prettiera jako błędów
    },
  },
  pluginJs.configs.recommended, // Bazowe reguły ESLint dla JS
  ...tseslint.configs.recommended, // Bazowe reguły ESLint dla TS
  pluginReact.configs.flat.recommended, // Bazowe reguły ESLint dla Reacta
  prettierConfig, // Wyłącza reguły kolidujące z Prettierem
];
