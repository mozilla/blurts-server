/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import localFont from "next/font/local";

export const metropolis = localFont({
  src: [
    {
      path: "./Metropolis-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Metropolis-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Metropolis-Medium.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-metropolis",
});
