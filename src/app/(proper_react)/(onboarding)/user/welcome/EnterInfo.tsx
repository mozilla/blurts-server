/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useOverlayTriggerState } from "react-stately";
import {
  useOverlayTrigger,
  AriaTextFieldProps,
  useTextField,
} from "react-aria";
import howItWorksHero from "./images/welcome-how-it-works.svg";
import { useL10n } from "../../../../hooks/l10n";
import { ModalOverlay } from "../../../../components/client/dialog/ModalOverlay";
import { Dialog } from "../../../../components/client/dialog/Dialog";
import { Button } from "../../../../components/server/Button";

import { Session } from "next-auth";

import enterInfoStyles from "./EnterInfo.module.scss";
import viewStyles from "./View.module.scss";

export type Props = {
  onDataSaved: () => void;
  onGoBack: () => void;
  user: Session["user"];
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
    <div className={enterInfoStyles.input}>
      <label {...labelProps} className={enterInfoStyles.inputLabel}>
        {label}
      </label>
      <input
        {...inputProps}
        ref={inputRef}
        className={`${enterInfoStyles.inputField} ${
          !value ? enterInfoStyles.noValue : ""
        } ${errorMessage ? enterInfoStyles.hasError : ""}`}
      />
      {errorMessage && (
        <div {...errorMessageProps} className={enterInfoStyles.inputMessage}>
          {errorMessage}
        </div>
      )}
    </div>
  );
}

export const EnterInfo = (props: Props) => {
  const hasMounted = useRef(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [location, setLocation] = useState("");

  const [invalidInputs, setInvalidInputs] = useState<Array<string>>([]);

  const explainerDialogState = useOverlayTriggerState({});
  const explainerDialogTrigger = useOverlayTrigger(
    { type: "dialog" },
    explainerDialogState
  );

  const confirmDialogState = useOverlayTriggerState({});
  const confirmDialogTrigger = useOverlayTrigger(
    { type: "dialog" },
    confirmDialogState
  );

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

  const validateEnteredInfo = () => {
    const invalidInputKeys = userDetailsData
      .filter(({ isValid }) => !isValid)
      .map(({ key }) => key);

    setInvalidInputs(invalidInputKeys);
  };

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    if (!invalidInputs?.length) {
      confirmDialogState.open();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [invalidInputs]);

  return (
    <div className={viewStyles.stepContent}>
      <h1>Enter the details you want to protect</h1>
      <p>
        We’ll use this to find exposures of your personal information, and then
        guide you step-by-step on how to fix it.{" "}
        <button
          {...explainerDialogTrigger.triggerProps}
          onClick={() => explainerDialogState.open()}
          className={viewStyles.explainerTrigger}
        >
          Why do we need this info?
        </button>
        {explainerDialogState.isOpen && (
          <ModalOverlay
            state={explainerDialogState}
            {...explainerDialogTrigger.overlayProps}
            isDismissable={true}
          >
            <Dialog title="Why do we need this?">
              <div className={viewStyles.dialogContents}>Dialog content</div>
              <div className={viewStyles.confirmButtonWrapper}>
                <Button
                  type="primary"
                  onClick={() => explainerDialogState.close()}
                  autoFocus={true}
                  className={enterInfoStyles.startButton}
                >
                  {l10n.getString(
                    "onboarding-get-started-how-it-works-dialog-confirm-label"
                  )}
                </Button>
              </div>
            </Dialog>
          </ModalOverlay>
        )}
        {confirmDialogState.isOpen && (
          <ModalOverlay
            state={confirmDialogState}
            {...explainerDialogTrigger.overlayProps}
            isDismissable={true}
          >
            <Dialog title="Is this correct?">
              <p>
                To ensure accurate results, please confirm this is your correct
                information. You won’t be able to update this later.
              </p>
              <ul className={viewStyles.dialogContents}>
                {userDetailsData.map(({ key, label, value }) => (
                  <li key={key}>
                    {label} <strong>{value}</strong>
                  </li>
                ))}
              </ul>
              <div className={viewStyles.stepButtonWrapper}>
                <Button
                  type="secondary"
                  onClick={() => confirmDialogState.close()}
                  className={enterInfoStyles.startButton}
                >
                  Edit
                </Button>
                <Button
                  type="primary"
                  onClick={() => props.onDataSaved()}
                  autoFocus={true}
                  className={enterInfoStyles.startButton}
                >
                  Confirm
                </Button>
              </div>
            </Dialog>
          </ModalOverlay>
        )}
      </p>

      <div className={enterInfoStyles.inputContainer}>
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
              errorMessage={
                !isValid && invalidInputs.includes(key) ? errorMessage : ""
              }
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

      <div className={viewStyles.stepButtonWrapper}>
        <Button
          type="secondary"
          onClick={() => props.onGoBack()}
          className={enterInfoStyles.startButton}
        >
          Go back
        </Button>

        <Button
          {...confirmDialogTrigger.triggerProps}
          type="primary"
          onClick={validateEnteredInfo}
          autoFocus={true}
          className={enterInfoStyles.startButton}
        >
          {l10n.getString("onboarding-steps-find-exposures-label")}
        </Button>
      </div>
    </div>
  );
};
