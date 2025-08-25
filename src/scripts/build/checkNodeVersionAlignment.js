/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { readFile, readdir } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

/**
 * This script checks whether every place we set a Node version is set to the same version.
 *
 * I've opted to avoid adding e.g. TOML and YAML parsers, and just assume
 * specific line formatting, to write the simplest thing that works in the least
 * amount of time.
 *
 * It is run in `.github/workflows/lint.yaml`.
 */

const __dirname = dirname(fileURLToPath(import.meta.url));
/**
 * @param {string} path - File path
 * @returns {Promise<string>} File content
 */
const load = (path) => readFile(resolve(__dirname, "../../../", path), "utf-8");

const packageJson = JSON.parse(await load("package.json"));
const lockFile = JSON.parse(await load("package-lock.json"));
const dockerFileNodeVersion =
  (
    (await load("Dockerfile"))
      .split("\n")
      .find((line) => line.startsWith("FROM node:")) ?? ""
  )
    .split("FROM node:")[1]
    ?.split("-alpine")[0] ?? "default-value"; // Provide a safe fallback value

// Yes, we're assuming `netlify.toml` to contain a line in exactly this format:
//   environment = { NODE_VERSION = "20.12.0", NPM_VERSION = "10.2.4" }
const netlifyNodeVersion = (
  (await load("netlify.toml"))
    .split("\n")
    .find((line) => line.includes('NODE_VERSION = "')) ?? ""
)
  .split('NODE_VERSION = "')[1]
  .split('", NPM_VERSION')[0];

const esbuildVersion = (
  (await load("esbuild.cronjobs.js"))
    .split("\n")
    .find((line) => line.includes("target:")) ?? ""
)
  .split('"node')[1]
  .split('",')[0];

const ghaWorkflowPaths = await readdir(
  resolve(__dirname, "../../../.github/workflows"),
);
const ghaWorkflows = await Promise.all(
  ghaWorkflowPaths.map(async (workflowFileName) => [
    workflowFileName,
    await load(`.github/workflows/${workflowFileName}`),
  ]),
);
const ghaVersions = ghaWorkflows.flatMap(([filename, contents]) => {
  return contents
    .split("\n")
    .filter((line) => line.includes("node-version:"))
    .map((line) => [
      filename,
      line.split("node-version: ")[1].replaceAll("'", "").replaceAll('"', ""),
    ]);
});

/**
 * @param {string} version - The full version string
 * @returns {string} The minor version
 */
const getMinorOnly = (version) => {
  const versionParts = version.split(".");
  return `${versionParts[0]}.${versionParts[1]}`;
};

/**
 * @param {string} source - The file to check.
 * @param {string} version - The reference Node version.
 */
const checkVersion = (source, version) => {
  const voltaVersion = packageJson.volta.node;
  if (getMinorOnly(voltaVersion) !== getMinorOnly(version)) {
    console.error(
      `Error: version [${version}] in ${source} does not match the Volta version ([${voltaVersion}]).`,
    );
    process.exit(1);
  }
};

checkVersion("the package.json engines", packageJson.engines.node);
checkVersion(
  "the package-lock.json engines",
  lockFile.packages[""].engines.node,
);
checkVersion("the Dockerfile", dockerFileNodeVersion);
checkVersion("netlify.toml", netlifyNodeVersion);
checkVersion("esbuild.cronjobs.json", esbuildVersion);
ghaVersions.forEach(([workflow, version]) =>
  checkVersion(`.github/workflows/${workflow}`, version),
);
console.log(
  `Node version consistently set to [${getMinorOnly(packageJson.volta.node)}] everywhere!`,
);
