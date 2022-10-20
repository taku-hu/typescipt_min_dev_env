/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: ['standard', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    jest: true,
    node: true
  },
  rules: {
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'type'],
        pathGroups: [
          {
            pattern: '~/**',
            group: 'internal'
          },
          {
            pattern: '@/**',
            group: 'internal'
          },
          {
            pattern: '@/types/**',
            group: 'type'
          }
        ],
        alphabetize: {
          order: 'asc'
        },
        'newlines-between': 'always'
      }
    ]
  }
}
