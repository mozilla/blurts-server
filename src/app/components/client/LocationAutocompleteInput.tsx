/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ComboBoxStateOptions, Item } from "react-stately";
import { ComboBox } from "./ComboBox";
import { RelevantLocation } from "../../api/v1/location-autocomplete/types";
import styles from "./LocationAutocomplete.module.scss";
import { useLocationSuggestions } from "../../hooks/locationSuggestions";
import { useL10n } from "../../hooks/l10n";

// TODO: Add unit test when changing this code:
/* c8 ignore next 6 */
export function getDetailsFromLocationString(locationString: string) {
  const [city, state, countryCode] = locationString
    .split(",")
    .map((item) => item.trim());
  return { city, state, countryCode };
}

function getLocationString(location: RelevantLocation) {
  const { n: name, s: stateCode } = location;
  return `${name}, ${stateCode}, USA`;
}

function getLocationStringByKey(
  locations: Array<RelevantLocation>,
  key: ComboBoxStateOptions<object>["selectedKey"],
) {
  const location = locations.find(({ id }) => id === key);
  // We're mocking `useLocationSuggestions` in tests to always return matches;
  // it's probably not worth the extra effort to simulate no matches for this:
  /* c8 ignore next */
  return location ? getLocationString(location) : "";
}

export const LocationAutocompleteInput = ({
  onChange,
  ...props
}: Exclude<
  ComboBoxStateOptions<object>,
  "onInputChange" | "onSelectionChange"
> & {
  onChange: (_location: string) => void;
  infoText?: string;
  hasFloatingLabel?: boolean;
}) => {
  const l10n = useL10n();
  const locationSuggestions = useLocationSuggestions(
    props.defaultInputValue ?? "",
  );

  const handleOnSelectionChange = (
    key: ComboBoxStateOptions<object>["selectedKey"],
  ) => {
    const locationString = getLocationStringByKey(
      locationSuggestions.items,
      key,
    );
    onChange(locationString);
  };

  return (
    <div className={styles.locationAutocomplete}>
      <ComboBox
        {...props}
        allowsCustomValue={true}
        allowsEmptyCollection={true}
        items={locationSuggestions.items}
        inputValue={locationSuggestions.filterText}
        onInputChange={(value) => locationSuggestions.setFilterText(value)}
        onSelectionChange={handleOnSelectionChange}
        shouldCloseOnBlur={true}
        listPlaceholder={
          <div className={styles.locationItem}>
            <strong>
              {l10n.getString(
                "onboarding-enter-details-placeholder-location-results",
              )}
            </strong>
          </div>
        }
      >
        {(location) => {
          const relevantLocation = location as RelevantLocation;
          const textValue = getLocationString(relevantLocation);
          const { city, state, countryCode } =
            getDetailsFromLocationString(textValue);
          return (
            <Item key={relevantLocation.id} textValue={textValue}>
              <div className={styles.locationItem}>
                <strong>{city}</strong>&nbsp;
                <span>{`${state}, ${countryCode}`}</span>
              </div>
            </Item>
          );
        }}
      </ComboBox>
      {props.infoText && <p className={styles.infoText}>{props.infoText}</p>}
    </div>
  );
};
