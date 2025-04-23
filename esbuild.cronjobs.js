/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { build } from "esbuild";

// Theoretically, since the cron jobs run in Node, we don't need a bundler,
// since there are no HTTP requests we're trying to optimise. However, plain
// Node.js can't resolve module imports without file extensions (e.g.
// `"../db/tables/subscribers"`), so all import specifiers in *any* module that
// gets loaded by the cron jobs would need to use file extensions, which should
// also match those of the generated files (i.e. .js rather than .ts). Some of
// those modules are also used in our website, where this is bound to cause its
// own issues in Next.js. Thus, esbuild is a compromise that can resolve these
// import specifiers for us.
build({
  entryPoints: [
    "./src/scripts/cronjobs/**/*.tsx",
    "./src/scripts/cronjobs/**/*.ts",
  ],
  tsconfig: "tsconfig.cronjobs.json",
  bundle: true,
  platform: "node",
  format: "esm",
  outdir: "dist/scripts/cronjobs/",
  sourcemap: true,
  target: "node20.19",
  packages: "external",
  external: ["next/headers"],
});
