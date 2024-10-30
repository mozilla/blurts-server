/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Universal email header styles
export const MetaTags = () => {
  return (
    <mj-raw>
      <meta name="color-scheme" content="light only" />
      <meta name="supported-color-schemes" content="light only" />
    </mj-raw>
  );
};

export const HeaderStyles = () => {
  const hideBgImageOnDarkMode = `
      :root {
        color-scheme: light only;
        supported-color-schemes: light only;
      }

      .footer_background {
        background: #F9F9FA;
      }

      .hero_background {
        background: #E7DFFF;
      }
    `;

  return <mj-style>{hideBgImageOnDarkMode}</mj-style>;
};
