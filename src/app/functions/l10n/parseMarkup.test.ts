/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { parseMarkup } from "./parseMarkup";

describe("parseMarkup", () => {
  it("exits early if no brackets and returns text node", () => {
    expect(parseMarkup("some text")).toStrictEqual([
      { nodeName: "#text", textContent: "some text" },
    ]);
  });
});
