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

// Dark mode email technique references:
//   - https://www.emailonacid.com/blog/article/email-development/advanced-mjml-coding/
//   - https://www.litmus.com/blog/the-ultimate-guide-to-dark-mode-for-email-marketers
//
// Two targeting mechanisms are used:
//   1. `@media (prefers-color-scheme: dark)` — honored by Apple Mail, iOS Mail,
//      Proton, and some Outlook variants.
//   2. `[data-ogsc]` (color scheme) and `[data-ogsb]` (background scheme)
//      attributes — injected by Outlook on Android / iOS on an ancestor
//      element, used as descendant selectors here.
//
// All overrides are opt-in via CSS classes so individual templates can choose
// which surfaces participate (`dm-body`, `dm-section-hero`, `dm-section-card`,
// `dm-section-footer`, `dm-img-light` / `dm-img-dark`).
export const HeaderStyles = () => {
  const bodyBg = "#1c1b22";
  const heroBg = "#2b2438";
  const cardBg = "#2b2a33";
  const textColor = "#fbfbfe";

  const darkModeRules = (scope: string) => `
        ${scope} .dm-img-light { display: none !important; }
        ${scope} .dm-img-dark {
          display: block !important;
          max-height: none !important;
          overflow: visible !important;
        }

        ${scope} .dm-body,
        ${scope} .dm-body > div,
        ${scope} .dm-body > table {
          background-color: ${bodyBg} !important;
        }

        ${scope} .dm-body p,
        ${scope} .dm-body h1,
        ${scope} .dm-body h2,
        ${scope} .dm-body h3,
        ${scope} .dm-body span,
        ${scope} .dm-body strong {
          color: ${textColor} !important;
        }

        ${scope} .dm-section-hero,
        ${scope} .dm-section-hero > table,
        ${scope} .dm-section-hero > table > tbody > tr > td {
          background-color: ${heroBg} !important;
        }

        ${scope} .dm-section-card,
        ${scope} .dm-section-card > table,
        ${scope} .dm-section-card > table > tbody > tr > td {
          background-color: ${cardBg} !important;
        }

        ${scope} .dm-section-footer,
        ${scope} .dm-section-footer > table,
        ${scope} .dm-section-footer > table > tbody > tr > td {
          background-color: ${cardBg} !important;
        }
      `;

  const styles = `
      :root {
        color-scheme: light dark;
        supported-color-schemes: light dark;
      }

      .dm-img-dark { display: none; }

      @media (prefers-color-scheme: dark) {
        ${darkModeRules("")}
      }

      ${darkModeRules("[data-ogsc]")}

      ${darkModeRules("[data-ogsb]")}
    `;

  return <mj-style>{styles}</mj-style>;
};
