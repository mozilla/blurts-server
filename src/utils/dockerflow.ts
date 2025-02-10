/* eslint-disable header/header */

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import fs from "fs";
import path from "path";
import packageJson from "../../package.json";

export type VersionData = {
  commit: string;
  version: string;
  source: string;
};

const versionJsonPath = path.join(__dirname, "../../version.json");

// If the version.json file already exists (e.g., created by circle + docker),
// don't need to generate it
if (!fs.existsSync(versionJsonPath)) {
  const versionJson = {
    source: packageJson.homepage,
    version: packageJson.version,
    NODE_ENV: process.env.NODE_ENV,
  };

  fs.writeFileSync(
    versionJsonPath,
    JSON.stringify(versionJson, null, 2) + "\n",
  );
}

export function vers(): VersionData {
  if (process.env.APP_ENV === "heroku") {
    return {
      commit: process.env.HEROKU_SLUG_COMMIT!,
      version: process.env.HEROKU_SLUG_COMMIT!,
      source: packageJson.homepage,
    };
  }
  return JSON.parse(fs.readFileSync(versionJsonPath, "utf8")) as VersionData;
}
