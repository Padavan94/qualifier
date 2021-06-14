module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:react-hooks/recommended', // Enforces the Rules of Hooks
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/prop-types': 'off',
    'prefer-template': 2,
    'react/no-deprecated': 0,
    'react/display-name': 0,
    'linebreak-style': 0,
    'global-require': 0,
    'no-mixed-operators': 0,
    'no-confusing-arrow': 0,
    'no-tabs': 0,
    'no-use-before-define': 0,
    indent: 0,
    'spaced-comment': 0,
    'object-curly-newline': 0,
    'react/react-in-jsx-scope': 0,
    camelcase: 0,
    'import/prefer-default-export': 0,
    'import/no-webpack-loader-syntax': 'off',
    curly: [2, 'all'],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
