module.exports = {
  env: {
    es6: true,
    node: true,
    jquery: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:node/recommended",
  ],
  plugins: [
    "node",
  ],
  root: true,
  rules: {
    "comma-dangle": ["error", {arrays: "always-multiline", objects: "always-multiline"}],
    "eqeqeq": "warn",
    "no-console": "warn",
    "no-process-env": "error",
    "no-unused-vars": ["error", {vars: "all", args: "none", ignoreRestSiblings: false}],
    "no-var": "error",
    "no-warning-comments": "warn",
    "prefer-const": "error",
    "quotes": ["error", "double"],
    "require-jsdoc": "off",
    "semi": ["error", "always"],
    "strict": ["error", "safe"],
    "valid-jsdoc": "warn",
  }
};
