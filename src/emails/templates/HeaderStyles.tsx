/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Universal email header styles
export const MetaTags = () => {
  return (
    <mj-raw>
      <meta name="color-scheme" content="light dark" />
      <meta name="supported-color-schemes" content="light dark" />
    </mj-raw>
  );
};

export const HeaderStyles = () => {
  const hideBgImageOnDarkMode = `
      :root {
      color-scheme: light dark;
      supported-color-schemes: light dark;
      }

       @media (prefers-color-scheme: dark) {
          .footer_hide_background {
            background-image: none !important;
            background: none !important;
          }
        }
    `;
  return <mj-style>{hideBgImageOnDarkMode}</mj-style>;
};
