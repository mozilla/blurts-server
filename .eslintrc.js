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
    "no-process-env": "error",
    "no-unused-vars": ["error", {vars: "all", args: "none", ignoreRestSiblings: false}],
    "no-var": "error",
    "no-warning-comments": "warn",
    "prefer-const": "off",
    "require-jsdoc": "off",
    "semi": ["error", "always"],
    "valid-jsdoc": "warn",
  }
};
