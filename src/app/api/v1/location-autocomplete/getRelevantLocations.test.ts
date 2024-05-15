/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getRelevantLocations } from "./getRelevantLocations";
import { RelevantLocation } from "./types";

describe("getRelevantLocations", () => {
  it("filters out locations that don't match the search term", () => {
    // Arrange:
    const availableLocations: RelevantLocation[] = [
      {
        id: "42",
        n: "Tulsa",
        s: "OK",
      },
      {
        id: "1337",
        n: "Tucson",
        s: "AZ",
      },
    ];

    // Act:
    const results = getRelevantLocations("Tuls", availableLocations);

    // Assert:
    expect(results).toStrictEqual([{ id: "42", n: "Tulsa", s: "OK" }]);
  });

  it("returns an empty list if the search term is invalid", () => {
    // Arrange:
    const availableLocations: RelevantLocation[] = [
      {
        id: "42",
        n: "Tulsa",
        s: "OK",
      },
      {
        id: "1337",
        n: "Tucson",
        s: "AZ",
      },
    ];

    // Act:
    const results = getRelevantLocations("", availableLocations);

    // Assert:
    expect(results).toStrictEqual([]);
  });

  it("matches alternate names", () => {
    // Arrange:
    const availableLocations: RelevantLocation[] = [
      {
        id: "42",
        n: "St Louis",
        s: "MO",
        a: ["Saint Louis"],
      },
    ];

    // Act:
    const results = getRelevantLocations("Saint Louis", availableLocations);

    // Assert:
    expect(results).toStrictEqual([
      {
        id: "42",
        n: "St Louis",
        s: "MO",
        a: ["Saint Louis"],
      },
    ]);
  });

  it("only returns single instances of a location", () => {
    // Arrange:
    const availableLocations: RelevantLocation[] = [
      {
        id: "42",
        n: "St Louis",
        s: "MO",
        a: ["Saint Louis"],
      },
    ];

    // Act:
    const results = getRelevantLocations("Louis", availableLocations);

    // Assert:
    expect(results).toHaveLength(1);
  });
});
