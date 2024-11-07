/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const pages = [
  "/",
  "/breaches",
  "/breach-details/LinkedInScrape2023",
  "/how-it-works",
];

const getArgVariable = (argKey) => {
  const argKeyIndex = process.argv.findIndex((arg) => arg === argKey);
  if (argKeyIndex >= 0 && argKeyIndex < process.argv.length) {
    const argValue = process.argv[argKeyIndex + 1];
    if (!(argValue && argValue.startsWith("--"))) {
      return process.argv[argKeyIndex + 1];
    }
  }

  console.info(`No value provided for arg ${argKey}`);
};
const collectBaseUrl =
  getArgVariable("--collectUrl") ?? "http://localhost:3000";
const target = getArgVariable("--uploadTarget") ?? "filesystem";

const lighthouseConfig = {
  ci: {
    collect: {
      startServerCommand: "npm run start",
      url: pages.map((pathname) => `${collectBaseUrl}${pathname}`),
    },
    upload: {
      target,
      outputDir: ".lighthouseci",
    },
  },
};

module.exports = lighthouseConfig;
