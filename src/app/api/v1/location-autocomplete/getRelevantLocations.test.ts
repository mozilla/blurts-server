/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
  getRelevantLocations,
  MAX_SEARCH_QUERY_LENGTH,
} from "./getRelevantLocations";
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

  it("ignores search terms that exceed the maximum supported length", () => {
    // Arrange:
    const availableLocations: RelevantLocation[] = [
      {
        id: "42",
        n: "Tulsa",
        s: "OK",
      },
    ];

    // Act:
    const results = getRelevantLocations(
      "a".repeat(MAX_SEARCH_QUERY_LENGTH + 1),
      availableLocations,
    );

    // Assert:
    expect(results).toStrictEqual([]);
  });

  it("sorts the 75% most relevant results by location", () => {
    // Arrange:
    const availableLocations: RelevantLocation[] = [
      {
        id: "2",
        n: "search term | best match",
        s: "OK",
        p: "42",
      },
      {
        id: "1337",
        n: "not a match",
        s: "AZ",
      },
      {
        id: "1",
        n: "other data then the search term | not the best match, but a higher population",
        s: "OK",
        p: "1337",
      },
      {
        id: "3",
        n: "more other data before the search term | third-best match, same pop as best match",
        s: "OK",
        p: "42",
      },
      {
        id: "4",
        n: "lots of other data and only then the search term | Fourth-best, so for this match the population doesn't matter",
        s: "OK",
        p: "9000",
      },
    ];

    // Act:
    const results = getRelevantLocations("search term", availableLocations);

    // Assert:
    expect(results).toStrictEqual([
      availableLocations[2],
      availableLocations[0],
      availableLocations[3],
      availableLocations[4],
    ]);
  });

  it("keeps result order as-is if no population is known", () => {
    // Arrange:
    const availableLocations: RelevantLocation[] = [
      {
        id: "2",
        n: "search term | best match",
        s: "OK",
      },
      {
        id: "1337",
        n: "not a match",
        s: "AZ",
      },
      {
        id: "1",
        n: "other data then the search term | second-best match",
        s: "OK",
      },
      {
        id: "3",
        n: "more other data before the search term | third-best match",
        s: "OK",
      },
      {
        id: "4",
        n: "lots of other data and only then the search term | Fourth-best",
        s: "OK",
        p: "9000",
      },
    ];

    // Act:
    const results = getRelevantLocations("search term", availableLocations);

    // Assert:
    expect(results).toStrictEqual([
      availableLocations[0],
      availableLocations[2],
      availableLocations[3],
      availableLocations[4],
    ]);
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

  it("matches alternate names even when the country is entered", () => {
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
    const results = getRelevantLocations(
      "Saint Louis, MO, USA",
      availableLocations,
    );

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

  it("does not match on combinations of regular and partial names", () => {
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
    const results = getRelevantLocations("USA Saint", availableLocations);

    // Assert:
    expect(results).toStrictEqual([]);
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
