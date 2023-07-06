/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useRef, useState } from "react";
import { AriaTextFieldProps, useTextField } from "react-aria";
import { useL10n } from "../../../../hooks/l10n";

import styles from "./EnterInfo.module.scss";

export type Props = {
  onDataSaved: () => void;
};

function TextField(props: AriaTextFieldProps) {
  const inputRef = useRef(null);
  const { label, value } = props;
  const { errorMessageProps, inputProps, labelProps } = useTextField(
    props,
    inputRef
  );
  const { errorMessage } = props;

  return (
    <div className={styles.input}>
      <label {...labelProps} className={styles.inputLabel}>
        {label}
      </label>
      <input
        {...inputProps}
        ref={inputRef}
        className={`${styles.inputField} ${!value ? styles.noValue : ""}`}
      />
      {errorMessage && (
        <div {...errorMessageProps} className={styles.inputMessage}>
          {errorMessage}
        </div>
      )}
    </div>
  );
}

export const EnterInfo = (props: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [location, setLocation] = useState("");

  const l10n = useL10n();

  const userDetailsData = [
    {
      label: "First name",
      key: "firstName",
      type: "text",
      placeholder: "Enter first name",
      value: firstName,
      errorMessage: "Please enter your first name.",
      isValid: firstName !== "",
      onChange: setFirstName,
    },
    {
      label: "Last name",
      key: "lastName",
      type: "text",
      placeholder: "Enter last name",
      value: lastName,
      errorMessage: "Please enter your last name.",
      isValid: lastName !== "",
      onChange: setLastName,
    },
    {
      label: "City and state",
      key: "location",
      type: "text",
      placeholder: "Enter city and state",
      value: dateOfBirth,
      errorMessage: "Please enter your city and state.",
      isValid: dateOfBirth !== "",
      onChange: setDateOfBirth,
    },
    {
      label: "Date of birth",
      key: "dateOfBirth",
      type: "date",
      placeholder: "Enter your date of birth",
      value: location,
      errorMessage: "Please enter your date of birth.",
      isValid: location !== "",
      onChange: setLocation,
    },
  ];

  return (
    <div className={styles.wrapper}>
      Enter your info here. After it&apos;s sent to the backend, we&apos;ll call{" "}
      <code>props.onDataSaved</code>.
      <h2>Enter the details you want to protect</h2>
      <p>
        We’ll use this to find exposures of your personal information, and then
        guide you step-by-step on how to fix it.{" "}
        <a href="">Why do we need this info?</a>
      </p>
      <div className={styles.inputContainer}>
        {userDetailsData.map(
          ({
            key,
            errorMessage,
            label,
            onChange,
            placeholder,
            type,
            isValid,
            value,
          }) => (
            <TextField
              key={key}
              errorMessage={!isValid ? errorMessage : ""}
              label={label}
              onChange={onChange}
              placeholder={placeholder}
              type={type}
              validationState={!isValid ? "invalid" : "valid"}
              value={value}
            />
          )
        )}
      </div>
      <button onClick={() => alert("find exposures")}>Find exposures</button>
      <pre>{JSON.stringify(userDetailsData, null, 2)}</pre>
    </div>
  );
};
