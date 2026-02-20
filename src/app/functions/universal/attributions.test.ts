/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "vitest";
import {
  modifyAttributionsForUrl,
  containsExpectedSearchParams,
} from "./attributions";

it("adds attributions to an URL", () => {
  expect(
    modifyAttributionsForUrl(
      "http://url.test/",
      {
        one: "1",
        two: "2",
      },
      {
        three: "3",
      },
    ),
  ).toBe("http://url.test/?one=1&two=2&three=3");
});

it("modifies existing attributions of an URL", () => {
  expect(
    modifyAttributionsForUrl(
      "http://url.test/?one=1",
      {
        one: "2",
        two: "2",
      },
      {
        three: "3",
      },
    ),
  ).toBe("http://url.test/?one=2&two=2&three=3");
});

it("returns `true` when the actual search params are matching the expected params", () => {
  expect(
    containsExpectedSearchParams(
      {
        one: "1",
        two: "2",
      },
      new URLSearchParams({
        one: "1",
        two: "2",
      }),
    ),
  ).toBe(true);
});

it("returns `true` when the actual search params are a superset of the expected params", () => {
  expect(
    containsExpectedSearchParams(
      {
        one: "1",
        two: "2",
      },
      new URLSearchParams({
        one: "1",
        two: "2",
        three: "3",
      }),
    ),
  ).toBe(true);
});

it("returns `false` if any expected param is missing from the actual search params", () => {
  expect(
    containsExpectedSearchParams(
      {
        one: "1",
        two: "2",
      },
      new URLSearchParams({
        two: "2",
      }),
    ),
  ).toBe(false);
});

it("returns `false` if any of the actual search param keys are not matching the expected params", () => {
  expect(
    containsExpectedSearchParams(
      {
        one: "1",
        three: "2",
      },
      new URLSearchParams({
        two: "2",
      }),
    ),
  ).toBe(false);
});

it("returns `false` if any of the actual search param values are not matching the expected params", () => {
  expect(
    containsExpectedSearchParams(
      {
        one: "1",
        two: "3",
      },
      new URLSearchParams({
        two: "2",
      }),
    ),
  ).toBe(false);
});
