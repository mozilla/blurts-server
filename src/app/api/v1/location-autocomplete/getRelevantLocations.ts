/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import uFuzzy from "@leeoniya/ufuzzy";
import { RelevantLocation } from "./types";
import { logger } from "../../../functions/server/logging";

// Guard against pathological inputs that would make ufuzzy's regex generation hang.
export const MAX_SEARCH_QUERY_LENGTH = 128;

export function getRelevantLocations(
  searchQuery: string,
  knownLocations: RelevantLocation[],
): RelevantLocation[] {
  if (typeof searchQuery !== "string") {
    return [];
  }

  const normalizedSearchQuery = searchQuery.trim();

  if (
    normalizedSearchQuery.length === 0 ||
    normalizedSearchQuery.length > MAX_SEARCH_QUERY_LENGTH
  ) {
    logger.warn("location autocomplete query over max length", {
      length: normalizedSearchQuery.length,
      maxLength: MAX_SEARCH_QUERY_LENGTH,
    });
    return [];
  }

  /**
   * Fully spelled-out names of locations in the US
   *
   * This array includes a string containing the name, state, and country of
   * locations in the US, e.g. `St Louis, MO, USA`.
   *
   * Some places also have alternate names. Those *also* get added to this
   * array. For example, `Saint Louis, MO, USA`.
   */
  const locationNamesAndAlternateNames: string[] = [];
  /**
   * Track the original location data for `locationNamesAndAlternateNames`
   */
  const nameIndexToLocationMap = new Map<number, RelevantLocation>();
  knownLocations.forEach((location: RelevantLocation) => {
    const { n, s, a } = location;
    const countryCode = "USA";
    nameIndexToLocationMap.set(locationNamesAndAlternateNames.length, location);
    locationNamesAndAlternateNames.push(`${n} ${s} ${countryCode}`);
    a?.forEach((alternateName) => {
      nameIndexToLocationMap.set(
        locationNamesAndAlternateNames.length,
        location,
      );
      locationNamesAndAlternateNames.push(
        `${alternateName} ${s} ${countryCode}`,
      );
    });
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

  const nameIndexes = fuzzySearch.filter(
    locationNamesAndAlternateNames,
    normalizedSearchQuery,
  );
  if (!nameIndexes) {
    return [];
  }

  const info = fuzzySearch.info(
    nameIndexes,
    locationNamesAndAlternateNames,
    normalizedSearchQuery,
  );
  const order = fuzzySearch.sort(
    info,
    locationNamesAndAlternateNames,
    normalizedSearchQuery,
  );
  // Since `order` contains a ranked array of indexes to the indexes of the most
  // closely matching names, we can retrieve the associated location data from
  // the `nameIndexToLocationMap` in that order to get `resultsOrdered` :
  const resultsOrdered = order.map(
    (orderIndex: number) =>
      nameIndexToLocationMap.get(nameIndexes[orderIndex])!,
  );
  // Since some locations might have matched multiple times (via their alternate
  // names), we only keep the first instance of every location:
  const uniqueResultsOrdered = resultsOrdered.filter(
    (resultIndex, matchIndex) =>
      resultsOrdered.indexOf(resultIndex) === matchIndex,
  );
  // Split and only sort the first x percentage of results by population.
  // The motivation behind this is to improve the score for matches but not all
  // of them in order to not move up weak ones.
  const maxSortByPopulationThreshold = 0.75;
  const locationSplitIndex = Math.ceil(
    uniqueResultsOrdered.length * maxSortByPopulationThreshold,
  );
  const resultsSortedByPopulation = [
    ...uniqueResultsOrdered
      .slice(0, locationSplitIndex)
      .sort(
        (a: RelevantLocation, b: RelevantLocation) =>
          Number(b.p ?? 0) - Number(a.p ?? 0),
      ),
    ...uniqueResultsOrdered.slice(locationSplitIndex),
  ];

  return resultsSortedByPopulation;
}
