import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import css from '@eslint/css'
import { defineConfig } from 'eslint/config'
import gitignore from 'eslint-config-flat-gitignore'
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig([
  gitignore(),
  stylistic.configs.recommended,
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/function-call-argument-newline': ['error', 'always'],
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: ['js/recommended'] },
  { files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  { files: ['**/*.css'],
    plugins: { css },
    language: 'css/css',
    extends: ['css/recommended'] },
])
