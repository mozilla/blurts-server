/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { convertKebabToCamelCase } from "./convertKebabToCamelCase";

it("returns a kebab-case string as CamelCase", () => {
  expect(convertKebabToCamelCase("camel-case")).toBe("CamelCase");
});

it("returns a snake_case string as snake_case", () => {
  expect(convertKebabToCamelCase("camel_case")).toBe("Camel_case");
});

it("returns an uppercase string without permutation", () => {
  expect(convertKebabToCamelCase("uppercase")).toBe("Uppercase");
});
