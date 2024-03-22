/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Fragment, ReactElement, ReactNode, createElement } from "react";
import { renderToString } from "react-dom/server";
import mjml2html from "mjml-browser";

export function renderMjml(
  mjml: string,
  strings: Record<string, string | ReactElement | null>,
): string {
  let mjmlWithVars = mjml;
  Object.entries(strings).forEach(([key, value]) => {
    mjmlWithVars = mjmlWithVars.replaceAll(key, sanitize(value));
  });
  return mjml2html(mjmlWithVars).html;
}

function sanitize(input: ReactNode): string {
  return renderToString(createElement(Fragment, undefined, input));
}
