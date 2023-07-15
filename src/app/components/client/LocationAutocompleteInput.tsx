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
import { RelevantLocation } from "../../../scripts/build/createLocationAutocompleteData/types";
import styles from "./LocationAutocomplete.module.scss";

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

function getLocationString(location: RelevantLocation) {
  const { name, stateCode, countryCode } = location;
  return `${name}, ${stateCode}, ${countryCode}`;
}

function getLocationStringByKey(locations: Array<RelevantLocation>, key: Key) {
  const location = locations.find(({ id }) => id === key);
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

  const handleOnChange = (inputValue: string) => {
    const locationString = getLocationStringByKey(
      locationSuggestions,
      selectedKey
    );
    // Clear current selection if the input value changes
    if (locationString && locationString !== inputValue) {
      setSelectedKey("");
    }

    setSearchQuery(inputValue);
    props.onChange?.(inputValue);
  };

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
        {(location) => {
          const relevantLocation = location as RelevantLocation;
          const textValue = getLocationString(relevantLocation);
          const [city, state, countryCode] = textValue
            .split(",")
            .map((item) => item.trim());
          return (
            <Item key={relevantLocation.id} textValue={textValue}>
              <div className={styles.locationItem}>
                <strong>{city}</strong>
                <span>{`${state}, ${countryCode}`}</span>
              </div>
            </Item>
          );
        }}
      </ComboBox>
    </div>
  );
};
