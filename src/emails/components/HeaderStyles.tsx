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

      /*
       * Enforcing light mode does not seem to work on Gmail. Gmail force-inverts emails into its own dark mode and ignores
       * both \`prefers-color-scheme\` and our \`color-scheme: light only\` /
       * \`supported-color-schemes\`, so the "enforce light mode" approach
       * above has no effect there. 
       * 
       * The hack: Gmail leaves CSS gradient
       * backgrounds alone when it auto-inverts, while plain background-color
       * values get darkened. Setting these surfaces via \`linear-gradient\`
       * (with both stops the same color) preserves the intended color in
       * Gmail dark mode without changing how the email looks anywhere else,
       * so it stays safe across other clients. 
       */

      .hero-background-dm {
        background: linear-gradient(#F5EAFF,#F5EAFF) !important;
      }

      .footer-background-dm {
        background: linear-gradient(#F9F9FA,#F9F9FA) !important;
      }
      
      body {
        background-color: #ffffff !important;
      }

    `;

  return <mj-style>{enforceLightMode}</mj-style>;
};
