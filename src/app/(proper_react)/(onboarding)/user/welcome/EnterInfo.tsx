/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useOverlayTriggerState } from "react-stately";
import {
  useOverlayTrigger,
  AriaTextFieldProps,
  useTextField,
} from "react-aria";
import whyWeNeedInfoHero from "./images/welcome-why-we-need-info.svg";
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
      label: "First name *",
      key: "firstName",
      type: "text",
      placeholder: "Enter your first name",
      value: firstName,
      errorMessage: "Required to complete the scan",
      isValid: firstName !== "",
      onChange: setFirstName,
    },
    {
      label: "Last name *",
      key: "lastName",
      type: "text",
      placeholder: "Enter your last name",
      value: lastName,
      errorMessage: "Required to complete the scan",
      isValid: lastName !== "",
      onChange: setLastName,
    },
    {
      label: "City and state *",
      key: "location",
      type: "text",
      placeholder: "Enter your city and state",
      value: dateOfBirth,
      errorMessage: "Required to complete the scan",
      isValid: dateOfBirth !== "",
      onChange: setDateOfBirth,
    },
    {
      label: "Date of birth *",
      key: "dateOfBirth",
      type: "date",
      placeholder: "Enter your date of birth",
      value: location,
      errorMessage: "Required to complete the scan",
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
            <Dialog illustration={<Image src={whyWeNeedInfoHero} alt="" />}>
              <div
                className={`${viewStyles.dialogContents} ${enterInfoStyles.dialogContents}`}
              >
                <p>
                  There’s a $240 billion industry of data brokers that expose
                  and sell your personal information for a profit. They scrape
                  your data from publicly available sources to create profiles
                  that include your name(s), current and previous addresses,
                  family member names, criminal history, and much much more.
                </p>

                <strong>
                  To find your profiles on these sites, we use three key pieces
                  of information:
                </strong>

                <ol className={viewStyles.list}>
                  <li className={viewStyles.listItem}>
                    <h4>Name</h4>
                    <p>
                      Your full legal name will help us find profiles of you,
                      but your aliases or previous names may also appear in
                      search results.
                    </p>
                  </li>
                  <li className={viewStyles.listItem}>
                    <h4>Location</h4>
                    <p>
                      Your current city and state will help us narrow down the
                      results, but your past addresses may also appear in search
                      results.
                    </p>
                  </li>
                  <li className={viewStyles.listItem}>
                    <h4>Date of birth</h4>
                    <p>
                      This will reduce chances of finding profiles of people
                      with the same name as you.
                    </p>
                  </li>
                </ol>

                <p>
                  We fully encrypt data you share with us, and we are committed
                  to protecting it. Read our Privacy Policy, and learn more
                  about how we protect your privacy.
                </p>
                <div className={viewStyles.stepButtonWrapper}>
                  <Button
                    type="primary"
                    onClick={() => explainerDialogState.close()}
                    autoFocus={true}
                    className={viewStyles.startButton}
                  >
                    {l10n.getString(
                      "onboarding-get-started-how-it-works-dialog-confirm-label"
                    )}
                  </Button>
                </div>
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
