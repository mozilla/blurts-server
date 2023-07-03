/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import uFuzzy from "@leeoniya/ufuzzy";

import { IRelevantLocation } from "../../../../scripts/createLocationAutocompleteData/types.d";
import locationData from "../../../../../locationAutocompleteData.json";

export type TMatchingLocations = Array<IRelevantLocation> | [];

export interface ISearchLocationParams {
  searchQuery: string;
  config: {
    minQueryLength: number;
    maxResults: number;
  };
}

export interface ISearchLocationResults {
  searchQuery: string;
  results: TMatchingLocations;
}

async function getLocationsByQuery(searchQuery: string) {
  const locationNames = locationData.map((location) => {
    const { name, stateCode, countryCode, alternateNames } = location;
    const alternateNamesJoined = alternateNames
      ? location.alternateNames.join(" ")
      : "";

    return `${name} ${stateCode} ${countryCode} ${alternateNamesJoined}`;
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
    (locationIndex) => locationData[locationIndex]
  );

  const resultsOrdered = order.map((orderIndex) => results[orderIndex]);
  // Split and only sort the first x percentage of results by population.
  const maxSortByPopulationThreshold = 0.75;
  const locationSplitIndex = Math.ceil(
    results.length * maxSortByPopulationThreshold
  );
  const resultsSortedByPopulation = [
    ...resultsOrdered
      .slice(0, locationSplitIndex)
      .sort((a, b) => Number(b.population) - Number(a.population)),
    ...resultsOrdered.slice(locationSplitIndex + 1),
  ];

  return resultsSortedByPopulation;
}

async function getLocationsResults({
  searchQuery,
  config = {
    minQueryLength: 1,
    maxResults: 5,
  },
}: ISearchLocationParams): Promise<ISearchLocationResults> {
  const { minQueryLength, maxResults } = config;

  const matchingLocations =
    searchQuery && searchQuery.length >= minQueryLength
      ? await getLocationsByQuery(searchQuery)
      : [];

  const locationsResults =
    maxResults > 0 ? matchingLocations.slice(0, maxResults) : matchingLocations;

  return {
    searchQuery,
    results: locationsResults as TMatchingLocations,
  };
}

export async function POST(request: NextRequest) {
  try {
    const body: ISearchLocationParams = await request.json();
    const { searchQuery, config } = body;

    const results = await getLocationsResults({
      searchQuery,
      config,
    });

    return NextResponse.json(results, { status: 200 });
  } catch (e) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
