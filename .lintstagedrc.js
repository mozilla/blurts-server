import * as path from 'path';

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;
 
export default {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  "*.{ts,tsx,jsx,scss,css,md}": "prettier --write",
  // While we're migrating to Next.js, regular .js and .css files are still
  // likely to be the non-Next.js app. Thus, we scope those to /src/app:
  "src/app/**/*.{ts,tsx,js,jsx,scss,css}": "prettier --write"
};
