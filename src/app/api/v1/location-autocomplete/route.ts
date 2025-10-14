/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse, NextRequest } from "next/server";

import { RelevantLocation } from "./types";
// The location autocomplete data will be created during the build step.
import locationDataJson from "../../../../../locationAutocompleteData.json";
import { getRelevantLocations } from "./getRelevantLocations";

type LocationDataFile = {
  data: RelevantLocation[];
};

const locationData = locationDataJson as LocationDataFile | undefined;

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
  if (!locationData?.data) {
    throw new Error(
      "No location data available: You may need to run `npm run create-location-data`.",
    );
  }

  const { minQueryLength, maxResults } = config;

  const normalizedSearchQuery =
    typeof searchQuery === "string" ? searchQuery.trim() : "";

  const { data: knownLocations } = locationData;

  const matchingLocations =
    normalizedSearchQuery.length >= minQueryLength
      ? getRelevantLocations(normalizedSearchQuery, knownLocations)
      : [];

  const locationsResults =
    maxResults > 0 ? matchingLocations.slice(0, maxResults) : matchingLocations;

  return {
    searchQuery: normalizedSearchQuery,
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
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
