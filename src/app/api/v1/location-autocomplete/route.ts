/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import uFuzzy from "@leeoniya/ufuzzy";

import { IRelevantLocation } from "../../../../scripts/createLocationAutocompleteData/types.d";
import locationData from "../../../../../locationAutocompleteData.json";

type TMatchingLocations = Array<IRelevantLocation> | [];

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
  const locationNames = locationData.map((location) => location.name);

  // For search options see: https://github.com/leeoniya/uFuzzy#options
  const fuzzySearch = new uFuzzy({
    intraMode: 1,
    intraIns: 0,
    interIns: 3,
    intraSub: 1,
    intraTrn: 1,
    intraDel: 1,
    // matches lowercase letters, whitespace or apostrophe
    intraChars: "[a-z\\s']",
    interLft: 2,
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

  return order
    .map((orderIndex) => results[orderIndex])
    .sort((a, b) => Number(b.population) - Number(a.population));
}

async function getMatchingLocations({
  searchQuery,
  config = {
    minQueryLength: 2,
    maxResults: 5,
  },
}: ISearchLocationParams): Promise<ISearchLocationResults> {
  const { minQueryLength, maxResults } = config;

  const matchingLocations =
    searchQuery && searchQuery.length >= minQueryLength
      ? await getLocationsByQuery(searchQuery)
      : [];

  const locations =
    maxResults > 0 ? matchingLocations.slice(0, maxResults) : matchingLocations;

  return {
    searchQuery,
    results: locations as TMatchingLocations,
  };
}

export async function POST(request: NextRequest) {
  try {
    const body: ISearchLocationParams = await request.json();
    const { searchQuery, config } = body;

    const results = await getMatchingLocations({
      searchQuery,
      config,
    });

    return NextResponse.json(results, { status: 200 });
  } catch (e) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
