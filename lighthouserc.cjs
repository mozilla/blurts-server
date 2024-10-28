/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const SERVER_URL = "http://localhost:3000";
const pages = ["/", "/breaches"];

const lighthouseConfig = {
  ci: {
    collect: {
      startServerCommand: "npm run start",
      url: pages.map((pathname) => `${SERVER_URL}${pathname}`),
    },
    upload: {
      target: "lhci",
    },
  },
};

module.exports = lighthouseConfig;
