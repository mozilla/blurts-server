/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactElement, useEffect, useRef } from "react";
import { useComboBox } from "react-aria";
import { useComboBoxState, ComboBoxStateOptions } from "react-stately";
import { ListBox } from "./ListBox";
import { Popover } from "./Popover";
import styles from "./ComboBox.module.scss";

interface ComboBoxProps extends ComboBoxStateOptions<object> {
  items: Array<object>;
  listPlaceholder?: ReactElement;
}

function ComboBox(props: ComboBoxProps) {
  const { errorMessage, isInvalid, isRequired, label, listPlaceholder } = props;
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
      state,
    );

  useEffect(() => {
    if (inputProps.value === "") {
      state.close();
    }
  }, [inputProps.value, state]);

  return (
    <>
      <div className={styles.comboBox}>
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
        {isInvalid && typeof errorMessage === "string" && (
          <div {...errorMessageProps} className={styles.inputMessage}>
            {errorMessage}
          </div>
        )}
      </div>
      {state.isOpen && (
        <Popover
          offset={8}
          popoverRef={popoverRef}
          state={state}
          triggerRef={inputRef}
        >
          <div className={styles.popoverList}>
            <ListBox
              {...listBoxProps}
              listBoxRef={listBoxRef}
              listPlaceholder={listPlaceholder}
              parentRef={inputRef}
              state={state}
            />
          </div>
        </Popover>
      )}
    </>
  );
}

export { ComboBox };
