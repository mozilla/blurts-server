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

export const StorybookEmailRenderer = (props: Props) => {
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
          __html: mjml2html(renderToStaticMarkup(props.children)).html,
        }}
        // This isn't used in production, so not worth writing a test for:
        /* c8 ignore next */
        className={props.emulateDarkMode ? "dark-mode-enforced" : ""}
      />
    </>
  );
};
