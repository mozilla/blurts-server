/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { Key, useDeferredValue, useEffect, useState } from "react";
import { AriaTextFieldProps } from "react-aria";
import { Item } from "react-stately";
import { ComboBox } from "./ComboBox";
import {
  MatchingLocations,
  SearchLocationParams,
  SearchLocationResults,
} from "../../api/v1/location-autocomplete/route";
import { RelevantLocation } from "../../api/v1/location-autocomplete/types";
import styles from "./LocationAutocomplete.module.scss";

// TODO: Add unit test when changing this code:
/* c8 ignore next 6 */
export function getDetailsFromLocationString(locationString: string) {
  const [city, state, countryCode] = locationString
    .split(",")
    .map((item) => item.trim());
  return { city, state, countryCode };
}

// TODO: Add unit test when changing this code:
/* c8 ignore start */
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
/* c8 ignore stop */

// TODO: Add unit test when changing this code:
/* c8 ignore next 4 */
function getLocationString(location: RelevantLocation) {
  const { name, stateCode, countryCode } = location;
  return `${name}, ${stateCode}, ${countryCode}`;
}

function getLocationStringByKey(locations: Array<RelevantLocation>, key: Key) {
  const location = locations.find(({ id }) => id === key);
  // TODO: Add unit test when changing this code:
  /* c8 ignore next */
  return location ? getLocationString(location) : "";
}

export const LocationAutocompleteInput = (props: AriaTextFieldProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const deferredSearchQuery = useDeferredValue(searchQuery);

  const [locationSuggestions, setLocationSuggestions] =
    useState<MatchingLocations>([]);
  const [selectedKey, setSelectedKey] = useState<Key>("");

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
          // TODO: Add unit test when changing this code:
          /* c8 ignore next 3 */
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

  // TODO: Add unit test when changing this code:
  /* c8 ignore start */
  useEffect(() => {
    if (!selectedKey) {
      return;
    }

    const locationString = getLocationStringByKey(
      locationSuggestions,
      selectedKey
    );
    setSearchQuery(locationString);
  }, [selectedKey, locationSuggestions]);
  /* c8 ignore stop */

  const handleOnChange = (inputValue: string) => {
    const locationString = getLocationStringByKey(
      locationSuggestions,
      selectedKey
    );
    // Clear current selection if the input value changes
    // TODO: Add unit test when changing this code:
    /* c8 ignore next 3 */
    if (locationString && locationString !== inputValue) {
      setSelectedKey("");
    }

    setSearchQuery(inputValue);
    props.onChange?.(inputValue);
  };

  // TODO: Add unit test when changing this code:
  /* c8 ignore next 3 */
  const handleOnSelectionChange = (key: Key) => {
    setSelectedKey(key);
  };

  return (
    <div className={styles.locationAutocomplete}>
      <ComboBox
        {...props}
        allowsCustomValue={false}
        allowsEmptyCollection={true}
        items={locationSuggestions}
        onInputChange={handleOnChange}
        onSelectionChange={handleOnSelectionChange}
        selectedKey={selectedKey}
        shouldCloseOnBlur={true}
      >
        {
          // TODO: Add unit test when changing this code:
          /* c8 ignore next 15 */
          (location) => {
            const relevantLocation = location as RelevantLocation;
            const textValue = getLocationString(relevantLocation);
            const { city, state, countryCode } =
              getDetailsFromLocationString(textValue);
            return (
              <Item key={relevantLocation.id} textValue={textValue}>
                <div className={styles.locationItem}>
                  <strong>{city}</strong>
                  <span>{`${state}, ${countryCode}`}</span>
                </div>
              </Item>
            );
          }
        }
      </ComboBox>
    </div>
  );
};
