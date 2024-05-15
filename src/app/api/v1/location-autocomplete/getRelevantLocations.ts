/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import uFuzzy from "@leeoniya/ufuzzy";
import { RelevantLocation } from "./types";

export function getRelevantLocations(
  searchQuery: string,
  knownLocations: RelevantLocation[],
): RelevantLocation[] {
  const locationNames = knownLocations.map((location: RelevantLocation) => {
    const { n, s, a } = location;
    const alternateNamesJoined = a ? a.join(" ") : "";
    const countryCode = "USA";

    return `${n} ${s} ${countryCode} ${alternateNamesJoined}`;
  });

  // For search options see: https://github.com/leeoniya/uFuzzy#options
  const fuzzySearch = new uFuzzy({
    intraMode: 1,
    intraIns: 1,
    interIns: 3,
    intraSub: 1,
    intraTrn: 1,
    intraDel: 1,
    // matches lowercase letters, whitespace or apostrophe
    intraChars: "[a-z\\s\\d']",
    interLft: 2,
    interRgt: 0,
  });

  const locationIndexes = fuzzySearch.filter(locationNames, searchQuery);
  if (!locationIndexes) {
    return [];
  }

  const info = fuzzySearch.info(locationIndexes, locationNames, searchQuery);
  const order = fuzzySearch.sort(info, locationNames, searchQuery);
  const results = locationIndexes.map(
    (locationIndex: number) => knownLocations[locationIndex],
  );

  const resultsOrdered = order.map((orderIndex: number) => results[orderIndex]);
  // Split and only sort the first x percentage of results by population.
  // The motivation behind this is to improve the score for matches but not all
  // of them in order to not move up weak ones.
  const maxSortByPopulationThreshold = 0.75;
  const locationSplitIndex = Math.ceil(
    results.length * maxSortByPopulationThreshold,
  );
  const resultsSortedByPopulation = [
    ...resultsOrdered
      .slice(0, locationSplitIndex)
      .sort(
        (a: RelevantLocation, b: RelevantLocation) =>
          Number(b.p ?? 0) - Number(a.p ?? 0),
      ),
    ...resultsOrdered.slice(locationSplitIndex),
  ];

  return resultsSortedByPopulation;
}
