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
    mjmlWithVars = mjmlWithVars.replaceAll(
      // Regular expression (with double escaping due to being defined a string):
      //
      //   \<%=   Starts with the characters `<%=`,
      //
      //   (\s*)  followed by zero or more (`*`) whitespace characters (`\s`)…
      //
      //   key    followed by the literal value of `key`
      //
      //   (\s*)  followed by, again, zero or more whitespace characters…
      //
      //   %\>    …and ends with the characters `%>`.
      //
      // All that combines to a string like "<%= variable-id-here %>".
      new RegExp(`\\<%=(\\s*)${key}(\\s*)%\\>`, "g"),
      stringValue,
    );
  });
  return mjml2html(mjmlWithVars).html;
}
