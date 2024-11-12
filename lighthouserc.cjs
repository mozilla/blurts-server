/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const pages = ["/", "/breaches", "/breach-details/InternetArchive"];

const collectBaseUrl =
  process.env.LIGHTHOUSE_COLLECT_URL ?? "http://localhost:3000";
const isLocalhost = new URL(collectBaseUrl).hostname === "localhost";

const lighthouseConfig = {
  ci: {
    collect: {
      startServerCommand: isLocalhost && "npm run start",
      url: pages.map((pathname) => `${collectBaseUrl}${pathname}`),
      numberOfRuns: 3,
    },
    upload: {
      target: "filesystem",
      outputDir: ".lighthouseci",
    },
  },
};

module.exports = lighthouseConfig;
