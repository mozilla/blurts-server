/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import "../app/functions/server/notInClientComponent";
import mjml2html from "mjml";
import { ReactNode } from "react";

export async function renderEmail(emailTemplate: ReactNode): Promise<string> {
  // Importing react-dom/server dynamically here is a workaround for the following error:
  //
  //    Error: react-dom/server is not supported in React Server Components.
  //
  // https://github.com/vercel/next.js/issues/43810#issuecomment-2437931415
  const { renderToStaticMarkup } = await import("react-dom/server");
  return mjml2html(renderToStaticMarkup(emailTemplate), {
    validationLevel: "strict",
    beautify: false,
    minify: false,
    ignoreIncludes: true,
  }).html;
}
