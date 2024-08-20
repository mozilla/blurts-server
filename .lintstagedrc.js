import * as path from "path";

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

export default {
  "*.{js,cjs,mjs,jsx,ts,tsx}": [buildEslintCommand],
  "*.{scss,css}": "stylelint --allow-empty-input --fix",
  "*.{ts,tsx,jsx,cjs,mjs,scss,css,md,html}": "prettier --write",
};
