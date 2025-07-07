/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import fs from "fs";
import { execSync } from "child_process";

const args = process.argv.slice(2);
const argMap = Object.fromEntries(
  args.map((arg) => {
    const argStr = arg.startsWith("--") ? arg.slice(2) : arg;
    const [key, value] = argStr.split("=");
    return [key, value ?? true];
  }),
);

const PORT = parseInt(argMap.port ?? "6060", 10);
const BUILD_DIR = "../.next";

if (argMap.forceRebuild || !fs.existsSync(BUILD_DIR)) {
  console.info(`Build directory [${BUILD_DIR}] not found`);
  execSync("npm run build", { stdio: "inherit" });
} else {
  console.info(`Build exists in [${BUILD_DIR}]: Skipping`);
}

console.info(`Starting server on port [${PORT}]`);
execSync("npm run start", { stdio: "inherit" });
