/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Image from "next/image";
import { Session } from "next-auth";
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
  const { errorMessage, validationState } = props;
  const showError = errorMessage && validationState === "invalid";

  return (
    <div className={enterInfoStyles.input}>
      <label {...labelProps} className={enterInfoStyles.inputLabel}>
        {label}*
      </label>
      <input
        {...inputProps}
        ref={inputRef}
        className={`${enterInfoStyles.inputField} ${
          !value ? enterInfoStyles.noValue : ""
        } ${showError ? enterInfoStyles.hasError : ""}`}
      />
      {showError && (
        <div {...errorMessageProps} className={enterInfoStyles.inputMessage}>
          {errorMessage}
        </div>
      )}
    </div>
  );
}

const getIsValidInfo = (value: string) => value !== "";

export const EnterInfo = (props: Props) => {
  const hasMounted = useRef(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

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

  const welcome_enter_info_title = "Enter the details you want to protect";
  const welcome_enter_info_text = (
    <>
      We’ll use this to find exposures of your personal information, and then
      guide you step-by-step on how to fix it.{" "}
      <button
        {...explainerDialogTrigger.triggerProps}
        onClick={() => explainerDialogState.open()}
        className={viewStyles.explainerTrigger}
      >
        Why do we need this info?
      </button>
    </>
  );
  const welcome_navigation_button_back = "Go back";
  const welcome_enter_info_dialog =
    "There’s a $240 billion industry of data brokers that expose and sell your personal information for a profit. They scrape your data from publicly available sources to create profiles that include your name(s), current and previous addresses, family member names, criminal history, and much much more.";
  const welcome_enter_info_diaglog_subheader =
    "To find your profiles on these sites, we use three key pieces of information:";
  const welcome_enter_info_dialog_name_label = "Name";
  const welcome_enter_info_dialog_name_text =
    "Your full legal name will help us find profiles of you, but your aliases or previous names may also appear in search results.";
  const welcome_enter_info_dialog_location_label = "Location";
  const welcome_enter_info_dialog_location_text =
    "Your current city and state will help us narrow down the results, but your past addresses may also appear in search results.";
  const welcome_enter_info_dialog_date_label = "Date of birth";
  const welcome_enter_info_dialog_date_text =
    "This will reduce chances of finding profiles of people with the same name as you.";
  const welcome_enter_info_dialog_data_protection_text = (
    <>
      We fully encrypt data you share with us, and we are committed to
      protecting it. Read our{" "}
      <a href="https://www.mozilla.org/privacy/firefox-monitor" target="_blank">
        Privacy Policy
      </a>
      , and{" "}
      <a href="https://www.mozilla.org/firefox/privacy" target="_blank">
        learn more about how we protect your privacy
      </a>
      .
    </>
  );
  const welcome_enter_info_comfirm_dialog_title = "Is this correct?";
  const welcome_enter_info_comfirm_dialog_text =
    "To ensure accurate results, please confirm this is your correct information. You won’t be able to update this later.";
  const welcome_enter_info_comfirm_dialog_button_edit = "Edit";
  const welcome_enter_info_comfirm_dialog_button_confirm = "Confirm";
  const welcome_enter_info_label_first_name = "First name";
  const welcome_enter_info_placeholder_first_name = "Enter your first name";
  const welcome_enter_info_label_last_name = "Last name";
  const welcome_enter_info_placeholder_last_name = "Enter your last name";
  const welcome_enter_info_label_location = "City and state";
  const welcome_enter_info_placeholder_location = "Enter your city and state";
  const welcome_enter_info_label_date_of_birth = "Date of birth";
  const welcome_enter_info_input_error_message =
    "Required to complete the scan";

  const userDetailsData = [
    {
      label: welcome_enter_info_label_first_name,
      key: "firstName",
      type: "text",
      placeholder: welcome_enter_info_placeholder_first_name,
      value: firstName,
      displayValue: firstName,
      errorMessage: welcome_enter_info_input_error_message,
      onChange: setFirstName,
    },
    {
      label: welcome_enter_info_label_last_name,
      key: "lastName",
      type: "text",
      placeholder: welcome_enter_info_placeholder_last_name,
      value: lastName,
      displayValue: lastName,
      errorMessage: welcome_enter_info_input_error_message,
      onChange: setLastName,
    },
    {
      label: welcome_enter_info_label_location,
      key: "location",
      type: "text",
      placeholder: welcome_enter_info_placeholder_location,
      value: location,
      displayValue: location,
      errorMessage: welcome_enter_info_input_error_message,
      onChange: setLocation,
    },
    {
      label: welcome_enter_info_label_date_of_birth,
      key: "dateOfBirth",
      type: "date",
      placeholder: "",
      value: dateOfBirth,
      displayValue: new Date(dateOfBirth).toLocaleDateString("en-US"),
      errorMessage: welcome_enter_info_input_error_message,
      onChange: setDateOfBirth,
    },
  ];

  const validateEnteredInfo = () => {
    const invalidInputKeys = userDetailsData
      .filter(({ value }) => !getIsValidInfo(value))
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

  const WhyDoWeNeedInfoDialog = () => (
    <Dialog illustration={<Image src={whyWeNeedInfoHero} alt="" />}>
      <div
        className={`${viewStyles.dialogContents} ${enterInfoStyles.dialogContents}`}
      >
        <p>{welcome_enter_info_dialog}</p>
        <strong>{welcome_enter_info_diaglog_subheader}</strong>

        <ol className={viewStyles.list}>
          <li className={viewStyles.listItem}>
            <h4>{welcome_enter_info_dialog_name_label}</h4>
            <p>{welcome_enter_info_dialog_name_text}</p>
          </li>
          <li className={viewStyles.listItem}>
            <h4>{welcome_enter_info_dialog_location_label}</h4>
            <p>{welcome_enter_info_dialog_location_text}</p>
          </li>
          <li className={viewStyles.listItem}>
            <h4>{welcome_enter_info_dialog_date_label}</h4>
            <p>{welcome_enter_info_dialog_date_text}</p>
          </li>
        </ol>

        <p>{welcome_enter_info_dialog_data_protection_text}</p>

        <div className={viewStyles.confirmButtonWrapper}>
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
  );

  const ConfirmInfoDialog = () => (
    <Dialog title={welcome_enter_info_comfirm_dialog_title}>
      <p>{welcome_enter_info_comfirm_dialog_text}</p>
      <div className={viewStyles.dialogContents}>
        <ul className={enterInfoStyles.infoList}>
          {userDetailsData.map(({ key, label, displayValue }) => (
            <li key={key} className={enterInfoStyles.infoItem}>
              {label}: <strong>{displayValue}</strong>
            </li>
          ))}
        </ul>
      </div>
      <div className={viewStyles.stepButtonWrapper}>
        <Button
          type="secondary"
          onClick={() => confirmDialogState.close()}
          className={enterInfoStyles.startButton}
        >
          {welcome_enter_info_comfirm_dialog_button_edit}
        </Button>
        <Button
          type="primary"
          onClick={() => props.onDataSaved()}
          autoFocus={true}
          className={enterInfoStyles.startButton}
        >
          {welcome_enter_info_comfirm_dialog_button_confirm}
        </Button>
      </div>
    </Dialog>
  );

  return (
    <div className={viewStyles.stepContent}>
      <h1>{welcome_enter_info_title}</h1>
      <p>{welcome_enter_info_text}</p>
      <div className={enterInfoStyles.inputContainer}>
        {userDetailsData.map(
          ({
            key,
            errorMessage,
            label,
            onChange,
            placeholder,
            type,
            value,
          }) => (
            <TextField
              key={key}
              errorMessage={errorMessage}
              label={label}
              onChange={onChange}
              placeholder={placeholder}
              type={type}
              validationState={
                !getIsValidInfo(value) && invalidInputs.includes(key)
                  ? "invalid"
                  : "valid"
              }
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
          {welcome_navigation_button_back}
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

      {explainerDialogState.isOpen && (
        <ModalOverlay
          state={explainerDialogState}
          {...explainerDialogTrigger.overlayProps}
          isDismissable={true}
        >
          <WhyDoWeNeedInfoDialog />
        </ModalOverlay>
      )}

      {confirmDialogState.isOpen && (
        <ModalOverlay
          state={confirmDialogState}
          {...explainerDialogTrigger.overlayProps}
          isDismissable={true}
        >
          <ConfirmInfoDialog />
        </ModalOverlay>
      )}
    </div>
  );
};
