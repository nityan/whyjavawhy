module.exports = {
  root: true,
  env: { node: true },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'no-console': ['error', { allow: [`warn`, `error`] }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-var': 'error',
    semi: ['error', 'never'],
    'vue/multi-word-component-names': 'off'
  },
  parserOptions: { parser: '@babel/eslint-parser' }
}