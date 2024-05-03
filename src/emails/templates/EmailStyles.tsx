/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from "react";

export const EmailStyles = () => {
  return (
    <mj-style>
      {`
        .dark-mode-only {
          display: none;
        }
        @media (prefers-color-scheme: dark) {
          .dark-mode-only {
            display: unset;
          }
          .light-mode-only {
            display: none;
          }
        }
      `}
    </mj-style>
  );
};
