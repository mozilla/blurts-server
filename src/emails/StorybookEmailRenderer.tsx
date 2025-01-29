/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// We use mjml-browser for Storybook; for real emails, regular mjml should work:
import mjml2html from "mjml-browser";
import { ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";

export type Props = {
  children: ReactNode;
  plainTextVersion: string | null;
  emulateDarkMode?: boolean;
};

// This isn't used in production, so not worth writing a test for:
/* c8 ignore start */
export const StorybookEmailRenderer = (props: Props) => {
  const rawMjml = renderToStaticMarkup(props.children);
  const renderResult = mjml2html(rawMjml);
  return (
    <div className="wrapper">
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

      .wrapper {
        display: flex;
        gap: 10px;
      }

      .badge {
        align-self: flex-start;
        display: inline-block;
        font-family: monospace;
        background-color: #eee;
        border-radius: 3px;
        text-transform: uppercase;
        padding: 3px 5px;
        color: #444;
      }

      .wrapper .styled {
        flex: 2 0 auto;
        width: 66%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 20px;
      }
      .wrapper .plaintext {
        flex: 1 0 auto;
        width: 33%;
        font-family: monospace;
        border-inline-start: 1px solid #eee;
        padding: 20px;
        padding-inline-start: calc(10px + 20px);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
      }

      .plaintext pre {
        white-space: pre-wrap;
      }
  `}</style>
      <section className="styled">
        <div className="badge">HTML</div>
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
          className={`body ${props.emulateDarkMode ? "dark-mode-enforced" : ""}`}
        />
      </section>
      <section className="plaintext">
        <div className="badge">Plaintext</div>
        <pre>{props.plainTextVersion ?? "Not set"}</pre>
      </section>
    </div>
  );
};
/* c8 ignore stop */
