/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { MarkupParser } from "@fluent/react";
import { JSDOM } from "jsdom";

let document: Document;
/**
 * When running in Node.js, Fluent doesn't have access to the DOM APIs to parse HTML in strings. Instead, it calls this function to parse them using JSDOM.
 *
 * See https://github.com/projectfluent/fluent.js/wiki/React-Overlays#custom-markup-parsers
 *
 * @param str Localised string that might include HTML.
 * @returns DOM nodes representing the parsed string.
 */
export const parseMarkup: MarkupParser = (str) => {
  // Initialising JSDOM for a string that doesn't contain HTML is overkill, so
  // exit early if the string doesn't even include angle brackets (`<` or `>`):
  if (!str.includes("<") && !str.includes(">")) {
    return [{ nodeName: "#text", textContent: str } as Node];
  }
  document ??= new JSDOM().window.document;
  const wrapper = document.createElement("span");
  wrapper.innerHTML = str;
  return Array.from(wrapper.childNodes);
};
