/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { useAsyncList } from "react-stately";
import { RelevantLocation } from "../api/v1/location-autocomplete/types";
import { SearchLocationResults } from "../api/v1/location-autocomplete/route";

export function useLocationSuggestions(initialFilterText: string) {
  const locationSuggestions = useAsyncList<RelevantLocation>({
    initialFilterText,
    async load({ signal, filterText }) {
      const searchParams = {
        searchQuery: filterText,
        config: {
          minQueryLength: 1,
          maxResults: 5,
        },
      };
      const response = await fetch("/api/v1/location-autocomplete", {
        method: "POST",
        body: JSON.stringify(searchParams),
        signal,
      });

      if (!response.ok) {
        throw new Error("No locations found");
      }

      const locationResults = (await response.json()) as SearchLocationResults;
      return {
        items: locationResults.results,
      };
    },
  });

  return locationSuggestions;
}
