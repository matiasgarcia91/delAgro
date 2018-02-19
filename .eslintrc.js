module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:jest/recommended',
  ],
  plugins: [
    'import',
    'jest',
    'jsx-a11y',
    'react',
  ],
  env: {
    browser: true,
    'jest/globals': true,
  },
  rules: {
    'no-underscore-dangle': ['off'],
    'class-methods-use-this': ['off'],
    'jsx-quotes': ['off'],
    'react/prefer-stateless-function': [0],
    'jsx-a11y/no-autofocus': ['off'],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: false,
      optionalDependencies: false,
    }],
  },
};
