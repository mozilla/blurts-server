/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse, NextRequest } from "next/server";

import { RelevantLocation } from "./types";
// The location autocomplete data will be created during the build step.
// @ts-ignore-next-line
// eslint-disable-next-line import/no-unresolved
import locationData from "../../../../../locationAutocompleteData.json";
import { getRelevantLocations } from "./getRelevantLocations";

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

function getLocationsResults({
  searchQuery,
  config = {
    minQueryLength: 1,
    maxResults: 5,
  },
}: SearchLocationParams): SearchLocationResults {
  if (!locationData) {
    throw new Error(
      "No location data available: You may need to run `npm run create-location-data`.",
    );
  }

  const { minQueryLength, maxResults } = config;

  const matchingLocations =
    searchQuery && searchQuery.length >= minQueryLength
      ? getRelevantLocations(searchQuery, locationData.data)
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
