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
        background-image: url(${process.env.SERVER_URL}/images/email/footer-bg-shapes.png);
        background-position: center bottom;
        background-repeat: no-repeat;
        color: #000000 !important;
      }

      .hero_background {
        background-image: url(${process.env.SERVER_URL}/images/email/hero-bg-gradient.png);
        background-repeat: repeat;
        background-position-x: 0;
        color: #000000 !important;
      }
    `;

  return <mj-style>{hideBgImageOnDarkMode}</mj-style>;
};
