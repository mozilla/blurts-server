/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// We use mjml-browser for Storybook; for real emails, regular mjml should work:
import mjml2html from "mjml-browser";
import { ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";

export type Props = {
  children: ReactNode;
  emulateDarkMode?: boolean;
};

// This isn't used in production, so not worth writing a test for:
/* c8 ignore start */
export const StorybookEmailRenderer = (props: Props) => {
  const rawMjml = renderToStaticMarkup(props.children);
  const renderResult = mjml2html(rawMjml);
  return (
    <>
      <style>{`
      @media (prefers-color-scheme: dark) {
        * {
          background-color: #1e293b !important;
          color: white !important;
        }
      }

      .dark-mode-enforced * {
        background-color: #1e293b !important;
        color: white !important;
      }
  `}</style>
      <div
        dangerouslySetInnerHTML={{
          __html:
            renderResult.errors.length > 0
              ? `
                <h1>MJML rendering errors:</h1>
                <ul style="font-family: monospace;">${renderResult.errors.map((error) => `<li>${error.message}</li>`).join("\n")}</ul>
                <hr/>
                ${renderResult.html}
                `
              : renderResult.html,
        }}
        className={props.emulateDarkMode ? "dark-mode-enforced" : ""}
      />
    </>
  );
};
/* c8 ignore stop */
