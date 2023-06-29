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
        setLocationData(data);
      });
    } else {
      setLocationData([]);
    }

    return () => {
      abortController.abort();
    };
  }, [deferredSearchQuery]);

  const handleOnInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div
      style={{
        left: "40%",
        position: "absolute",
        top: "25px",
        zIndex: 2,
      }}
    >
      <input
        onInput={handleOnInput}
        placeholder="Enter your location"
        required
        style={{
          padding: "0.3rem 0.5rem",
          fontSize: "1.25rem",
        }}
      />
      {locationData &&
        locationData.results &&
        locationData.results.length > 0 && (
          <ul
            style={{
              background: "white",
              borderRadius: "4px",
              boxShadow: "0 1px 3px 0 #ccc",
              display: "flex",
              fontSize: "1rem",
              flexDirection: "column",
              gap: "0.5rem",
              listStyle: "none",
              position: "relative",
              marginTop: "0.5rem",
              padding: "1rem 0.75rem",
            }}
          >
            {/* <pre
            style={{
              fontSize: "12px",
            }}
          >
            {JSON.stringify(locationData, null, 2)}
          </pre> */}
            {locationData.results.map(({ id, name, stateCode }) => (
              <li key={id}>
                {name} <small style={{ color: "gray" }}>{stateCode}, USA</small>
              </li>
            ))}
          </ul>
        )}
    </div>
  );
};
