/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "vitest";
import { convertCamelToSnakeCase } from "./convertCamelToSnakeCase";

it("returns a camelCase string as snake_case", () => {
  expect(convertCamelToSnakeCase("camelCase")).toBe("camel_case");
});

it("returns a snake_case string as snake_case", () => {
  expect(convertCamelToSnakeCase("camel_case")).toBe("camel_case");
});

it("returns a lowercase string without permutation", () => {
  expect(convertCamelToSnakeCase("lowercase")).toBe("lowercase");
});
