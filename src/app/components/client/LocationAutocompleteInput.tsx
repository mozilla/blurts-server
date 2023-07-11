/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useEffect, useDeferredValue, useState } from "react";
import { AriaTextFieldProps } from "react-aria";
import {
  MatchingLocations,
  SearchLocationParams,
  SearchLocationResults,
} from "../../api/v1/location-autocomplete/route";
import { InputField } from "../../components/client/InputField";
import styles from "./LocationAutocompleteInput.module.scss";

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
    return locationResults as SearchLocationResults;
  } catch (_) {
    return null;
  }
};

export const LocationAutocompleteInput = (props: AriaTextFieldProps) => {
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
      })
        .then((data) => {
          if (data) {
            setLocationSuggestions(data.results);
          }
        })
        .catch((error) => console.error(error));
    } else {
      setLocationSuggestions([]);
    }

    return () => {
      abortController.abort();
    };
  }, [deferredSearchQuery]);

  const handleOnChange = (inputValue: string) => {
    setSearchQuery(inputValue);
    props.onChange?.(inputValue);
  };

  return (
    <div className={styles.locationInput}>
      <InputField {...props} onChange={handleOnChange} value={searchQuery} />
      {locationSuggestions && locationSuggestions.length > 0 && (
        <ul className={styles.list}>
          {locationSuggestions.map(({ id, name, stateCode, countryCode }) => (
            <li key={id} className={styles.item}>
              {name}{" "}
              <small>
                {stateCode}, {countryCode}
              </small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
