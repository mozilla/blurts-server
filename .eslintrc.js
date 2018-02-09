module.exports = {
  env: {
    es6: true,
    node: true,
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
    "comma-dangle": ["error", {arrays: "only-multiline", objects: "only-multiline"}],
    "eqeqeq": "warn",
    "no-console": "warn",
    "no-process-env": "error",
    "no-unused-vars": ["error", {vars: "all", args: "none", ignoreRestSiblings: false}],
    "no-var": "error",
    "no-warning-comments": "warn",
    "prefer-const": "off",
    "quotes": ["error", "double"],
    "require-jsdoc": "off",
    "semi": ["error", "always"],
    "strict": ["error", "safe"],
    "valid-jsdoc": "warn",
  }
};
