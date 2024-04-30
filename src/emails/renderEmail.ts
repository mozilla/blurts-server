/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import "../app/functions/server/notInClientComponent";
import mjml2html from "mjml";
import { ReactNode } from "react";
// The `.node` works around the following error:
//
//    Error:
//     × You're importing a component that imports react-dom/server. To fix it, render or return the content directly as a Server Component instead for perf and security.
//     │ Learn more: https://nextjs.org/docs/getting-started/react-essentials
//
// See https://github.com/vercel/next.js/issues/43810#issuecomment-1687002502
import { renderToStaticMarkup } from "react-dom/server.node";

export function renderEmail(emailTemplate: ReactNode): string {
  return mjml2html(renderToStaticMarkup(emailTemplate), {
    validationLevel: "strict",
    beautify: false,
    minify: false,
    ignoreIncludes: true,
  }).html;
}
