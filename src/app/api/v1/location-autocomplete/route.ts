/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse, NextRequest } from "next/server";
import uFuzzy from "@leeoniya/ufuzzy";

import { RelevantLocation } from "./types";
// The location autocomplete data will be created during the build step.
// @ts-ignore-next-line
// eslint-disable-next-line import/no-unresolved
import locationData from "../../../../../locationAutocompleteData.json";

export type MatchingLocations = Array<RelevantLocation> | [];

export interface SearchLocationParams {
  searchQuery: string;
  config: {
    minQueryLength: number;
    maxResults: number;
  };
}

export interface SearchLocationResults {
  searchQuery: string;
  results: MatchingLocations;
}

function getLocationsByQuery(searchQuery: string) {
  if (!locationData) {
    throw new Error(
      "No location data available: You may need to run `npm run create-location-data`.",
    );
  }

  const locationNames = locationData.data.map((location: RelevantLocation) => {
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
    (locationIndex: number) =>
      locationData.data[locationIndex] as RelevantLocation,
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
    ...resultsOrdered.slice(locationSplitIndex + 1),
  ];

  return resultsSortedByPopulation;
}

function getLocationsResults({
  searchQuery,
  config = {
    minQueryLength: 1,
    maxResults: 5,
  },
}: SearchLocationParams): SearchLocationResults {
  const { minQueryLength, maxResults } = config;

  const matchingLocations =
    searchQuery && searchQuery.length >= minQueryLength
      ? getLocationsByQuery(searchQuery)
      : [];

  const locationsResults =
    maxResults > 0 ? matchingLocations.slice(0, maxResults) : matchingLocations;

  return {
    searchQuery,
    results: locationsResults as MatchingLocations,
  };
}

export async function POST(request: NextRequest) {
  try {
    const body: SearchLocationParams = await request.json();
    const { searchQuery, config } = body;

    const results = getLocationsResults({
      searchQuery,
      config,
    });

    return NextResponse.json(results, { status: 200 });
  } catch (e) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
