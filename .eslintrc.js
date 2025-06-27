module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:@tanstack/query/recommended'],
  plugins: ['prefer-arrow-functions'],
  rules: {
    'react/no-unstable-nested-components': 'off',
    // 'prettier/prettier': ['warn'],
    '@typescript-eslint/no-unused-vars': ['warn'],
    'no-unused-vars': 'off',
    'prefer-arrow-functions/prefer-arrow-functions': [
      'warn',
      {
        allowedNames: [],
        allowNamedFunctions: false,
        allowObjectProperties: false,
        classPropertiesAllowed: false,
        disallowPrototype: false,
        returnStyle: 'unchanged',
        singleReturnOnly: false,
      },
    ],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ExportDefaultDeclaration',
        message: 'Prefer named exports',
      },
    ],
  },
};
