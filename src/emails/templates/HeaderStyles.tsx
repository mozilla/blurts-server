/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Universal email header styles
export const HeaderStyles = () => {
  const hideBgImageOnDarkMode = `
       @media (prefers-color-scheme: dark) {
          .footer_hide_background {
            background-image: none;
            background: none;
          }
        }
    `;

  return <mj-style>{hideBgImageOnDarkMode}</mj-style>;
};
