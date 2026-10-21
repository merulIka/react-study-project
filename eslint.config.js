import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import { reactRefresh } from 'eslint-plugin-react-refresh'

export default defineConfig([
  // не проверяем собранные и служебные файлы
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  // глобальные настройки для js/jsx файлов
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    ...js.configs.recommended,
  },
  // правила для хуков React
  reactHooks.configs.flat.recommended,
  // правила для fast refresh (Vite)
  reactRefresh.configs.vite(),
])
