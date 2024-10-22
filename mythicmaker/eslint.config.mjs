import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

// Wyciągamy reguły bezpośrednio z pluginu
const tsRules = {
  '@typescript-eslint/no-unused-vars': 'warn',
  '@typescript-eslint/explicit-function-return-type': 'off',
  // Dodaj więcej reguł w zależności od potrzeb
};

export default [
  {
    // Ustawienia dla plików, które mają być analizowane
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ignores: ['dist', 'node_modules', '**/*.spec.js', '**/*.test.js'],
    languageOptions: {
      ecmaVersion: 2020, // Użycie ECMAScript 2020
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      // Pluginy do użycia
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier,
      '@typescript-eslint': tseslint,
    },
    settings: {
      react: {
        version: 'detect', // Umożliwia wykrycie wersji React
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier': 'error',
      ...tsRules, // Użyj reguł TypeScript
      'react/react-in-jsx-scope': 'off', // Wyłącz wymóg importowania React
      'react/prop-types': 'off', // Wyłącz wymóg użycia prop-types (jeśli używasz TypeScript)
    },
  },
  pluginJs.configs.recommended, // Podstawowe reguły ESLint dla JavaScript
  pluginReact.configs.flat.recommended, // Podstawowe reguły ESLint dla Reacta
  prettierConfig, // Wyłącza reguły kolidujące z Prettierem
];
