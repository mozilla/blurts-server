/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactNode, useRef } from "react";
import { AriaTextFieldProps, useTextField } from "react-aria";
import styles from "./TextInputField.module.scss";

export type Props = {
  children: ReactNode;
};

export const TextInputField = (props: AriaTextFieldProps) => {
  const { errorMessage, isRequired, label, validationState, value } = props;
  const inputRef = useRef(null);
  const { errorMessageProps, inputProps, labelProps } = useTextField(
    props,
    inputRef
  );
  const showError = errorMessage && validationState === "invalid";

  return (
    <div className={styles.input}>
      <label {...labelProps} className={styles.inputLabel}>
        {label}
        {isRequired ? "*" : ""}
      </label>
      <input
        {...inputProps}
        ref={inputRef}
        className={`${styles.inputField} ${!value ? styles.noValue : ""} ${
          showError ? styles.hasError : ""
        }`}
      />
      {showError && (
        <div {...errorMessageProps} className={styles.inputMessage}>
          {errorMessage}
        </div>
      )}
    </div>
  );
};
