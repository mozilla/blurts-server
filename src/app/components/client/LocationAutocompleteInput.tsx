/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import {
  Key,
  ReactNode,
  RefObject,
  useDeferredValue,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  AriaListBoxOptions,
  AriaPopoverProps,
  AriaTextFieldProps,
  DismissButton,
  Overlay,
  useComboBox,
  useListBox,
  useOption,
  usePopover,
} from "react-aria";
import {
  Item,
  OverlayTriggerState,
  useComboBoxState,
  ListState,
  ComboBoxStateOptions,
} from "react-stately";
import {
  MatchingLocations,
  SearchLocationParams,
  SearchLocationResults,
} from "../../api/v1/location-autocomplete/route";
import { RelevantLocation } from "../../../scripts/build/createLocationAutocompleteData/types";

import styles from "./LocationAutocompleteInput.module.scss";

const useInputWidth = (ref: RefObject<HTMLInputElement>) => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWidth(ref?.current?.clientWidth || 0);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [ref]);

  return width;
};

interface PopoverProps extends AriaPopoverProps {
  children: React.ReactNode;
  state: OverlayTriggerState;
  isVisible: boolean;
}

function Popover({ children, state, isVisible, ...props }: PopoverProps) {
  const { popoverProps } = usePopover(props, state);

  // The <DismissButton> components allow screen reader users
  // to dismiss the popover easily.
  return (
    <Overlay>
      <div
        {...popoverProps}
        ref={props.popoverRef as React.RefObject<HTMLDivElement>}
        style={{
          ...popoverProps.style,
          background: "lightgray",
          border: isVisible ? "1px solid green" : "none",
        }}
      >
        <DismissButton onDismiss={() => state.close()} />
        {children}
        <DismissButton onDismiss={() => state.close()} />
      </div>
    </Overlay>
  );
}

interface ListBoxProps extends AriaListBoxOptions<unknown> {
  state: ListState<object>;
  listBoxRef: RefObject<HTMLUListElement>;
  inputRef: RefObject<HTMLInputElement>;
}

function ListBox(props: ListBoxProps) {
  const { listBoxRef, inputRef, state } = props;
  const { listBoxProps } = useListBox(props, state, listBoxRef);

  const inputWidth = useInputWidth(inputRef);

  return (
    <ul
      {...listBoxProps}
      ref={listBoxRef}
      style={{
        margin: 0,
        padding: 0,
        listStyle: "none",
        width: `${inputWidth}px`,
      }}
    >
      {[...state.collection].map((item) => (
        <Option key={item.key} item={item} state={state} />
      ))}
    </ul>
  );
}

interface OptionProps extends AriaListBoxOptions<unknown> {
  item: {
    key: Key;
    rendered: ReactNode;
  };
  state: ListState<object>;
}

function Option({ item, state }: OptionProps) {
  const ref = useRef(null);
  const { optionProps, isSelected, isFocused, isDisabled } = useOption(
    { key: item.key },
    state,
    ref
  );

  let backgroundColor;
  let color = "black";

  if (isSelected) {
    backgroundColor = "blueviolet";
    color = "white";
  } else if (isFocused) {
    backgroundColor = "gray";
  } else if (isDisabled) {
    backgroundColor = "transparent";
    color = "gray";
  }

  return (
    <li
      {...optionProps}
      ref={ref}
      style={{
        background: backgroundColor,
        color: color,
        padding: "2px 5px",
        outline: "none",
        cursor: "pointer",
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

interface ComboBoxProps extends ComboBoxStateOptions<object> {
  items: Array<RelevantLocation>;
}

function ComboBox(props: ComboBoxProps) {
  const { errorMessage, label, isRequired, validationState } = props;
  const inputRef = useRef(null);
  const listBoxRef = useRef(null);
  const popoverRef = useRef(null);
  const state = useComboBoxState({ ...props });
  const { inputProps, listBoxProps, labelProps, errorMessageProps } =
    useComboBox(
      {
        ...props,
        inputRef,
        listBoxRef,
        popoverRef,
      },
      state
    );
  const isInvalid = validationState === "invalid";
  const showError = errorMessage && isInvalid;

  return (
    <>
      <div className={styles.locationInput}>
        <label {...labelProps} className={styles.inputLabel}>
          {label}
          {isRequired ? <span aria-hidden="true">*</span> : ""}
        </label>
        <input
          {...inputProps}
          ref={inputRef}
          className={`${styles.inputField} ${
            !inputProps.value ? styles.noValue : ""
          } ${isInvalid ? styles.hasError : ""}`}
        />
        {showError && (
          <div {...errorMessageProps} className={styles.inputMessage}>
            {errorMessage}
          </div>
        )}
      </div>
      {state.isOpen && (
        <Popover
          isVisible={props.items?.length > 0}
          popoverRef={popoverRef}
          state={state}
          triggerRef={inputRef}
        >
          <ListBox
            {...listBoxProps}
            listBoxRef={listBoxRef}
            inputRef={inputRef}
            state={state}
          />
        </Popover>
      )}
    </>
  );
}

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
        return (
          <Item key={relevantLocation.id} textValue={textValue}>
            {textValue}
          </Item>
        );
      }}
    </ComboBox>
  );
};
