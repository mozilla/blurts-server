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
  const enforceLightMode = `
      :root {
        color-scheme: light only;
        supported-color-schemes: light only;
      }
    `;

  return <mj-style>{enforceLightMode}</mj-style>;
};
