/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useRef } from "react";
import { useComboBox } from "react-aria";
import { useComboBoxState, ComboBoxStateOptions } from "react-stately";
import { ListBox } from "./ListBox";
import { Popover } from "./Popover";
import styles from "./ComboBox.module.scss";

interface ComboBoxProps extends ComboBoxStateOptions<object> {
  items: Array<object>;
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
      <div className={styles.comboBox}>
        <label {...labelProps} className={styles.inputLabel}>
          {label}
          {isRequired ? (
            <span aria-hidden="true">*</span>
          ) : (
            // TODO: Add unit test when changing this code:
            /* c8 ignore next */
            ""
          )}
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
      {
        // TODO: Add unit test when changing this code:
        /* c8 ignore next */
        state.isOpen && props.items?.length > 0 && (
          <Popover
            offset={4}
            popoverRef={popoverRef}
            state={state}
            triggerRef={inputRef}
          >
            <ListBox
              {...listBoxProps}
              listBoxRef={listBoxRef}
              parentRef={inputRef}
              state={state}
            />
          </Popover>
        )
      }
    </>
  );
}

export { ComboBox };
