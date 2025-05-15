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
  build?: string;
};

// Determine the correct path to version.json at the project root
// process.cwd() should be /app due to WORKDIR in Dockerfile
// Use path.resolve to ensure it's an absolute path based on CWD.
const versionJsonPath = path.resolve(process.cwd(), "version.json");

let versionData: VersionData | null = null;

// Try reading the version.json created by the build process
try {
  if (fs.existsSync(versionJsonPath)) {
    versionData = JSON.parse(
      fs.readFileSync(versionJsonPath, "utf8"),
    ) as VersionData;
    console.log(`Successfully loaded version data from ${versionJsonPath}`);
  } else {
    // This is the expected case if the build process didn't create/copy the file correctly.
    console.warn(
      `version.json not found at expected path: ${versionJsonPath}. This might indicate a build/copy issue.`,
    );
  }
} catch (error) {
  // Log error if parsing fails (e.g., malformed JSON)
  console.error(`Error reading or parsing ${versionJsonPath}:`, error);
}

// Fallback logic: Only if versionData couldn't be loaded from file
if (!versionData) {
  console.warn("Falling back to version data derived from package.json");
  versionData = {
    source: packageJson.homepage,
    version: "unknown",
    commit: "unknown",
    build: "unknown",
  };
}

export function vers(): VersionData {
  // Return the data loaded from version.json or the fallback data
  if (!versionData) {
    // This condition implies the initial loading and fallback both failed, which is highly unlikely.
    console.error(
      "versionData is unexpectedly null in vers(). Returning error state.",
    );
    return {
      commit: "error",
      version: "init_failed",
      source: "error",
      build: "unknown",
    };
  }
  return versionData;
}
