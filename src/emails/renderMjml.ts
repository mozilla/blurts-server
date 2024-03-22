/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactElement } from "react";
import { renderToString } from "react-dom/server";
import mjml2html from "mjml-browser";

export function renderMjml(
  mjml: string,
  strings: Record<string, string | ReactElement | null>,
): string {
  let mjmlWithVars = mjml;
  Object.entries(strings).forEach(([key, value]) => {
    const stringValue =
      typeof value === "string" ? value : renderToString(value);
    mjmlWithVars = mjmlWithVars.replaceAll(key, stringValue);
  });
  return mjml2html(mjmlWithVars).html;
}
