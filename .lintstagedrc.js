import * as path from 'path';

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;
 
export default {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
  "*.{scss,css}": "stylelint --allow-empty-input --fix",
  "*.{ts,tsx,jsx,scss,css,md}": "prettier --write",
  // TODO NEXT.JS MIGRATION: While we're migrating to Next.js, regular .js files files
  // are still likely to be the non-Next.js app. Thus, we scope those to /src/app:
  "src/app/**/*.{js}": "prettier --write",
};
