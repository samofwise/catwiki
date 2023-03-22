// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'airbnb',
    'airbnb-typescript',
  ],
  plugins: [
    '@typescript-eslint',
    'prettier',
    'unused-imports',
  ],
  parserOptions: {
    // ecmaVersion: 'latest',
    // sourceType: 'module',
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.json', '.code-workspace'],
  },
  ignorePatterns: ['node_modules', 'build'],
  rules: {
    '@typescript-eslint/no-use-before-define': 'off',
    curly: ['error', 'multi'],
    'object-curly-newline': ['error', {
      ObjectPattern: { multiline: true },
      ObjectExpression: { multiline: true },
      ImportDeclaration: { multiline: true },
      ExportDeclaration: { multiline: true },
    }],
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
};
