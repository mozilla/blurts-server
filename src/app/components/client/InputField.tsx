/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useRef } from "react";
import { AriaTextFieldProps, useTextField } from "react-aria";
import styles from "./InputField.module.scss";

export const InputField = (props: AriaTextFieldProps) => {
  const { isRequired, label, validationState, value } = props;
  const inputRef = useRef(null);
  const { errorMessageProps, validationErrors, inputProps, labelProps } =
    useTextField(props, inputRef);
  const isInvalid = validationState === "invalid";

  return (
    <div className={styles.input}>
      <label {...labelProps} className={styles.inputLabel}>
        {label}
        {
          // TODO: Add unit test when changing this code:
          /* c8 ignore next */
          isRequired ? <span aria-hidden="true">*</span> : ""
        }
      </label>
      <input
        {...inputProps}
        ref={inputRef}
        className={`${styles.inputField} ${!value ? styles.noValue : ""} ${
          isInvalid ? styles.hasError : ""
        }`}
      />
      {isInvalid && (
        <div {...errorMessageProps} className={styles.inputMessage}>
          {
            // We always pass in a string at the time of writing, so we can't
            // hit the "else" path with tests:
            /* c8 ignore next 3 */
            typeof props.errorMessage === "string"
              ? props.errorMessage
              : validationErrors.join(" ")
          }
        </div>
      )}
    </div>
  );
};
