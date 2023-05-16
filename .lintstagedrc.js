const path = require('path');
 
const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;
 
module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  "*.{scss,css}": "stylelint --fix",
  "*.{ts,tsx,jsx,scss}": "prettier --write",
  // While we're migrating to Next.js, regular .js and .css files are still
  // likely to be the non-Next.js app. Thus, we scope those to /src/app:
  "src/app/**/*.{ts,tsx,js,jsx,scss,css}": "prettier --write",
  "*.md": "prettier --write",
};
