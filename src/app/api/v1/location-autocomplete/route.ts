/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

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

function getLocationByQuery(searchQuery: string) {
  return locationData
    .filter((location) => {
      const { name, alternateNames } = location;

      const matchesName = name.toLowerCase().includes(searchQuery);
      const matchesAlternateName =
        alternateNames &&
        alternateNames.some(({ name }) =>
          name.toLowerCase().includes(searchQuery)
        );

      return matchesName || matchesAlternateName;
    })
    .sort((locationA, locationB) => {
      const { name: nameA, population: populationA } = locationA;
      const { name: nameB, population: populationB } = locationB;

      // Move excact matches to front
      if (nameA.toLowerCase() === searchQuery) {
        return -1;
      }
      if (nameB.toLowerCase() === searchQuery) {
        return 1;
      }

      return populationB.length - populationA.length;
    });
}

function getMatchingLocations({
  searchQuery,
  config = {
    minQueryLength: 2,
    maxResults: 10,
  },
}: ISearchLocationParams): ISearchLocationResults {
  const { minQueryLength, maxResults } = config;

  const matchingLocations =
    searchQuery && searchQuery.length >= minQueryLength
      ? getLocationByQuery(searchQuery.toLowerCase())
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

    const results = getMatchingLocations({
      searchQuery,
      config,
    });

    return NextResponse.json(results, { status: 200 });
  } catch (e) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
