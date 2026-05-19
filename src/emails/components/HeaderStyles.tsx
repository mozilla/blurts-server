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

// Dark mode email technique reference:
// https://www.emailonacid.com/blog/article/email-development/advanced-mjml-coding/
export const HeaderStyles = () => {
  const styles = `
      :root {
        color-scheme: light dark;
        supported-color-schemes: light dark;
      }

      .dm-img-dark { display: none; }

      @media (prefers-color-scheme: dark) {
        .dm-img-light {
          display: none !important;
        }
        .dm-img-dark {
          display: block !important;
          max-height: none !important;
          overflow: visible !important;
        }
      }
    `;

  return <mj-style>{styles}</mj-style>;
};
