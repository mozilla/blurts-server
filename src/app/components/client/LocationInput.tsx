/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ChangeEvent, useEffect, useDeferredValue, useState } from "react";
import { ISearchLocationParams } from "../../api/v1/location-autocomplete/route";

const getLocationSuggestions = async ({
  searchParams,
  abortController,
}: {
  searchParams: ISearchLocationParams;
  abortController: AbortController;
}) => {
  try {
    const { signal } = abortController;
    const response = await fetch("/api/v1/location-autocomplete", {
      method: "POST",
      body: JSON.stringify(searchParams),
      signal,
    });

    if (!response.ok) {
      // TODO: Handle error
    }

    const locationResults = await response.json();
    return locationResults;
  } catch (error) {
    console.error(error);
  }
};

export const LocationInput = () => {
  const [locationData, setLocationData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const deferredSearchQuery = useDeferredValue(searchQuery);
  const isStale = searchQuery !== deferredSearchQuery;

  useEffect(() => {
    const abortController = new AbortController();

    if (deferredSearchQuery) {
      const searchParams = {
        searchQuery: deferredSearchQuery,
        config: {
          minQueryLength: 2,
          maxResults: -1,
        },
      };

      getLocationSuggestions({
        searchParams,
        abortController: abortController,
      }).then((data) => {
        setLocationData(data);
      });
    }

    return () => {
      abortController.abort();
    };
  }, [deferredSearchQuery]);

  const handleOnInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div style={{ position: "relative" }}>
      <input
        onInput={handleOnInput}
        placeholder="Enter your location"
        required
      />
      <pre
        style={{
          fontSize: "12px",
          opacity: isStale ? 0.3 : 1,
        }}
      >
        {JSON.stringify(locationData, null, 2)}
      </pre>
    </div>
  );
};
