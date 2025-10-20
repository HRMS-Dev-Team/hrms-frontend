import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import antfu from '@antfu/eslint-config';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import playwright from 'eslint-plugin-playwright';
import tailwind from 'eslint-plugin-tailwindcss';

export default antfu(
  {
    react: true,
    nextjs: true,
    typescript: true,

    // Configuration preferences
    lessOpinionated: true,
    isInEditor: false,

    // Code style
    stylistic: {
      semi: true,
    },

    // Format settings
    formatters: {
      css: true,
    },

    // Ignored paths
    ignores: ['migrations/**/*'],
  },
  // --- Accessibility Rules ---
  jsxA11y.flatConfigs.recommended,
  // --- Tailwind CSS Rules ---
  ...tailwind.configs['flat/recommended'],
  {
    settings: {
      tailwindcss: {
        config: `${dirname(fileURLToPath(import.meta.url))}/src/styles/global.css`,
      },
    },
  },
  // --- E2E Testing Rules ---
  {
    files: ['**/*.spec.ts', '**/*.e2e.ts'],
    ...playwright.configs['flat/recommended'],
  },
  // --- Custom Rule Overrides ---
  {
    rules: {
      'antfu/no-top-level-await': 'off',
      'style/brace-style': ['error', '1tbs'],
      'ts/consistent-type-definitions': ['error', 'type'],
      'react/prefer-destructuring-assignment': 'off',
      'node/prefer-global/process': 'off',
      'test/padding-around-all': 'error',
      'react-hooks-extra/no-direct-set-state-in-use-effect': 'off',
      'style/arrow-parens': 'off',
      'style/multiline-ternary': 'off',
      'style/operator-linebreak': 'off',
      'style/jsx-one-expression-per-line': 'off',
      'test/prefer-lowercase-title': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'import/no-mutable-exports': 'off',
      'no-irregular-whitespace': 'off',
      'style/jsx-curly-newline': 'off',
      'style/quotes': 'off',
      'style/indent': 'off',
      'style/indent-binary-ops': 'off',
      'style/jsx-closing-tag-location': 'off',
      'antfu/consistent-list-newline': 'off',
      'style/quote-props': 'off',
      'yaml/quotes': 'off',
      'jsonc/sort-keys': 'off',
      'jsx-a11y/no-noninteractive-tabindex': 'off',
    },
  },
);
