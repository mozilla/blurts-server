module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
  ],
  root: true,
  rules: {
    "comma-dangle": "off",
    "eqeqeq": "warn",
    "no-console": "warn",
    "no-unused-vars": ["error", {vars: "all", args: "none", ignoreRestSiblings: false}],
    "no-var": "error",
    "prefer-const": "error",
    "require-jsdoc": "off",
    "semi": ["error", "always"],
    "valid-jsdoc": "warn",
  }
};
