/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useDeferredValue, useEffect, useRef, useState } from "react";
import {
  AriaListBoxProps,
  AriaTextFieldProps,
  mergeProps,
  useFocusRing,
  useListBox,
  useOption,
} from "react-aria";
import { Item, ListState, Selection, useListState } from "react-stately";
import {
  MatchingLocations,
  SearchLocationParams,
  SearchLocationResults,
} from "../../api/v1/location-autocomplete/route";
import { InputField } from "../../components/client/InputField";
import styles from "./LocationAutocompleteInput.module.scss";

function ListBox<T extends object>(props: AriaListBoxProps<T>) {
  const state = useListState(props);
  const ref = useRef(null);
  const { listBoxProps } = useListBox(props, state, ref);

  return (
    <ul
      {...listBoxProps}
      ref={ref}
      style={{
        border: "1px solid black",
        listStyle: "none",
        margin: 0,
        overflow: "auto",
        padding: 0,
      }}
    >
      {[...state.collection].map((item) => (
        <div key={item.key}>
          <Option key={item.key} item={item} state={state} />
        </div>
      ))}
    </ul>
  );
}

type OptionProps<T> = {
  // TODO: Figure out type of item
  item: any;
  state: ListState<T>;
};

function Option<T extends object>({ item, state }: OptionProps<T>) {
  const ref = useRef(null);
  const { optionProps, isSelected } = useOption({ key: item.key }, state, ref);
  const { focusProps } = useFocusRing();

  return (
    <li
      {...mergeProps(optionProps, focusProps)}
      ref={ref}
      style={{
        background: isSelected ? "lightgray" : "transparent",
      }}
    >
      {item.rendered}
    </li>
  );
}

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

  const [selectedIds, setSelectedIds] = useState<Selection>(new Set());
  const hasSelected = selectedIds instanceof Set && selectedIds.size;

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
    if (!hasSelected) {
      return;
    }

    const selectedLocation = locationSuggestions.find(({ id }) =>
      selectedIds.has(id)
    );
    if (selectedLocation) {
      const { name, stateCode, countryCode } = selectedLocation;
      const locationString = `${name}, ${stateCode}, ${countryCode}`;
      setSearchQuery(locationString);
    }
  }, [hasSelected, selectedIds, locationSuggestions]);

  const handleOnChange = (inputValue: string) => {
    if (hasSelected) {
      setSelectedIds(new Set());
    }

    setSearchQuery(inputValue);
    props.onChange?.(inputValue);
  };

  return (
    <div className={styles.locationInput}>
      <InputField {...props} onChange={handleOnChange} value={searchQuery} />

      {locationSuggestions && locationSuggestions.length > 0 && (
        <ListBox
          items={locationSuggestions}
          selectedKeys={selectedIds}
          selectionMode="single"
          onSelectionChange={setSelectedIds}
        >
          {({ id, name, stateCode, countryCode }) => (
            <Item key={id}>
              {name}{" "}
              <small>
                {" "}
                {stateCode}, {countryCode}
              </small>
            </Item>
          )}
        </ListBox>
      )}
    </div>
  );
};
