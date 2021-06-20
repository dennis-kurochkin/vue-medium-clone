module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'airbnb-base/whitespace',
    'airbnb-base',
    'plugin:vue/essential',
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'import/no-webpack-loader-syntax': 0,
    'indent': [2, 2, { 'SwitchCase': 1 }],
    'quotes': [2, 'single'],
    'semi': [2, 'always'],
    'comma-dangle': [2, 'always-multiline'],
    'max-len': [2, {
      'code': 120,
      'ignoreComments': true,
      'ignoreUrls': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
      'ignorePattern': 'd=\'([\\s\\S]*)\''
    }],
    'arrow-parens': [2, 'as-needed'],
    'no-underscore-dangle': [2, {
      'allowAfterThis': true,
      'allowAfterSuper': true
    }],
    'no-debugger': 1,
    'no-new': 0,
    'class-methods-use-this': 0,
    'no-multi-assign': 0,
    'no-plusplus': 0,
    'default-case': 0,
    'no-use-before-define': 0,
    'consistent-return': 0,
    'no-restricted-syntax': 1,
    'no-prototype-builtins': 0,
    'no-param-reassign': [1, { 'props': false }],
    'import/prefer-default-export': 0,
    'curly': [1, 'all'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
