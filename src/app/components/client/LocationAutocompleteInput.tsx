/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ChangeEvent, useEffect, useDeferredValue, useState } from "react";
import {
  MatchingLocations,
  SearchLocationParams,
  SearchLocationResults,
} from "../../api/v1/location-autocomplete/route";

const getLocationSuggestions = async ({
  searchParams,
  abortController,
}: {
  searchParams: SearchLocationParams;
  abortController: AbortController;
}): Promise<SearchLocationResults | null> => {
  try {
    const { signal } = abortController;
    const response = await fetch("/api/v1/location-autocomplete", {
      method: "POST",
      body: JSON.stringify(searchParams),
      signal,
    });

    if (!response.ok) {
      return null;
    }

    const locationResults = await response.json();
    return locationResults;
  } catch (_) {
    return null;
  }
};

export const LocationAutocompleteInput = () => {
  const [locationSuggestions, setLocationSuggestions] =
    useState<MatchingLocations>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const deferredSearchQuery = useDeferredValue(searchQuery);

  useEffect(() => {
    const abortController = new AbortController();

    if (deferredSearchQuery) {
      const searchParams = {
        searchQuery: deferredSearchQuery,
        config: {
          minQueryLength: 1,
          maxResults: 5,
        },
      };

      getLocationSuggestions({
        searchParams,
        abortController: abortController,
      }).then((data) => {
        if (data) {
          setLocationSuggestions(data.results);
        }
      });
    } else {
      setLocationSuggestions([]);
    }

    return () => {
      abortController.abort();
    };
  }, [deferredSearchQuery]);

  const handleOnInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <input onInput={handleOnInput} placeholder="Enter city and state" />
      {locationSuggestions && locationSuggestions.length > 0 && (
        <ul>
          {locationSuggestions.map(({ id, name, stateCode, countryCode }) => (
            <li key={id}>
              {name}{" "}
              <small>
                {stateCode}, {countryCode} #{id}
              </small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
