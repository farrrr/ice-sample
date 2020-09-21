module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:eslint-comments/recommended',
    'prettier',
    'prettier/react',
    'prettier/unicorn',
    'prettier/@typescript-eslint',
  ],
  plugins: ['eslint-comments', 'react-hooks'],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    'import/no-unresolved': [
      2,
      {
        ignore: ['^@/', '^ice$', '^ice/'],
        caseSensitive: true,
        commonjs: true,
      },
    ],
    'react/jsx-props-no-spreading': [0],
    // 禁止不規則使用 a 標簽：取消
    'jsx-a11y/anchor-is-valid': 0,
    // 必須宣告 propTypes：取消
    'react/prop-types': 0,
  },
  settings: {},
};
