module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'semi': 'off',
    'quotes': 'off',
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',
    'unicorn/prefer-includes': 'off'
  }
}
