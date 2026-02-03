/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as path from "path";

const buildEslintCommand = (filenames) =>
  `eslint --fix ${filenames
    .map((f) => `"${path.relative(process.cwd(), f)}"`)
    .join(" ")}`;

/**
 * @type {import("lint-staged").Configuration}
 */
const config = {
  "*.{js,cjs,mjs,jsx,ts,tsx}": [buildEslintCommand],
  "*.{scss,css}": "stylelint --allow-empty-input --fix",
  "*.{js,ts,tsx,jsx,cjs,mjs,scss,css,md,html}": "prettier --write",
};

export default config;
