/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Image from "next/image";
import { FormEvent, useRef, useState } from "react";
import { Session } from "next-auth";
import { useOverlayTriggerState } from "react-stately";
import { useButton, useOverlayTrigger } from "react-aria";
import whyWeNeedInfoHero from "./images/welcome-why-we-need-info.svg";
import { useL10n } from "../../../../../hooks/l10n";
import { ModalOverlay } from "../../../../../components/client/dialog/ModalOverlay";
import { Dialog } from "../../../../../components/client/dialog/Dialog";
import { Button } from "../../../../../components/server/Button";
import { InputField } from "../../../../../components/client/InputField";
import {
  LocationAutocompleteInput,
  getDetailsFromLocationString,
} from "../../../../../components/client/LocationAutocompleteInput";
import {
  UserInfo,
  WelcomeScanBody,
} from "../../../../../api/v1/user/welcome-scan/create/route";
import { meetsAgeRequirement } from "../../../../../functions/universal/user";

import styles from "./EnterInfo.module.scss";

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
const createProfileAndStartScan = async (
  userInfo: UserInfo
): Promise<WelcomeScanBody> => {
  const response = await fetch("/api/v1/user/welcome-scan/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });

  const result = await response.json();
  if (!result?.success) {
    throw new Error("Could not start scan");
  }

  return result as WelcomeScanBody;
};
/* c8 ignore stop */

export type Props = {
  onScanStarted: () => void;
  onGoBack: () => void;
  user: Session["user"];
};

export const EnterInfo = ({ onScanStarted, onGoBack }: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [invalidInputs, setInvalidInputs] = useState<Array<string>>([]);
  const [requestingScan, setRequestingScan] = useState(false);

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
      label: l10n.getString("onboarding-enter-details-label-first-name"),
      key: "firstName",
      type: "text",
      placeholder: l10n.getString(
        "onboarding-enter-details-placeholder-first-name"
      ),
      value: firstName,
      displayValue: firstName,
      errorMessage: l10n.getString(
        "onboarding-enter-details-input-error-message-generic"
      ),
      isValid: firstName.trim() !== "",
      onChange: setFirstName,
    },
    {
      label: l10n.getString("onboarding-enter-details-label-last-name"),
      key: "lastName",
      type: "text",
      placeholder: l10n.getString(
        "onboarding-enter-details-placeholder-last-name"
      ),
      value: lastName,
      displayValue: lastName,
      errorMessage: l10n.getString(
        "onboarding-enter-details-input-error-message-generic"
      ),
      isValid: lastName.trim() !== "",
      onChange: setLastName,
    },
    {
      label: l10n.getString("onboarding-enter-details-label-location"),
      key: "location",
      type: "text",
      placeholder: l10n.getString(
        "onboarding-enter-details-placeholder-location"
      ),
      value: location,
      displayValue: location,
      errorMessage: l10n.getString(
        "onboarding-enter-details-input-error-message-location"
      ),
      isValid: location.trim() !== "",
      onChange: setLocation,
    },
    {
      label: l10n.getString("onboarding-enter-details-label-date-of-birth"),
      key: "dateOfBirth",
      type: "date",
      placeholder: "",
      value: dateOfBirth,
      displayValue: new Date(dateOfBirth).toLocaleDateString("en-US", {
        dateStyle: "medium",
        timeZone: "UTC",
      }),
      errorMessage: l10n.getString(
        "onboarding-enter-details-input-error-message-generic"
      ),
      isValid: meetsAgeRequirement(dateOfBirth),
      onChange: setDateOfBirth,
    },
  ];

  const getInvalidFields = () =>
    userDetailsData.filter(({ isValid }) => !isValid).map(({ key }) => key);

  // TODO: Add unit test when changing this code:
  /* c8 ignore start */
  const handleRequestScan = () => {
    if (requestingScan) {
      return;
    }
    setRequestingScan(true);

    const { city, state } = getDetailsFromLocationString(location);
    const userInfo = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      city,
      state,
      dateOfBirth,
    } as UserInfo;

    void createProfileAndStartScan(userInfo)
      .then(() => {
        onScanStarted();
      })
      .catch((error) => {
        console.error("Could not request scan:", error);
      });
  };
  /* c8 ignore stop */

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const invalidInputKeys = getInvalidFields();
    if (invalidInputKeys?.length > 0) {
      setInvalidInputs(invalidInputKeys);
      confirmDialogState.close();
    }
  };

  const WhyDoWeNeedInfoDialog = () => (
    <Dialog illustration={<Image src={whyWeNeedInfoHero} alt="" />}>
      <div className={styles.dialogContents}>
        <p>{l10n.getString("onboarding-enter-details-dialog")}</p>
        <strong>
          {l10n.getString("onboarding-enter-details-diaglog-subheader")}
        </strong>

        <ol className={styles.list}>
          <li>
            <strong>
              {l10n.getString("onboarding-enter-details-dialog-name-label")}
            </strong>
            <p>{l10n.getString("onboarding-enter-details-dialog-name-text")}</p>
          </li>
          <li>
            <strong>
              {l10n.getString("onboarding-enter-details-dialog-location-label")}
            </strong>
            <p>
              {l10n.getString("onboarding-enter-details-dialog-location-text")}
            </p>
          </li>
          <li>
            <strong>
              {l10n.getString("onboarding-enter-details-dialog-date-label")}
            </strong>
            <p>{l10n.getString("onboarding-enter-details-dialog-date-text")}</p>
          </li>
        </ol>

        <p>
          {l10n.getFragment(
            "onboarding-enter-details-dialog-data-protection-text",
            {
              elems: {
                "privacy-policy-link": (
                  <a
                    href="https://www.mozilla.org/privacy/firefox-monitor"
                    target="_blank"
                  />
                ),
                "privacy-protection-link": (
                  <a
                    href="https://www.mozilla.org/firefox/privacy"
                    target="_blank"
                  />
                ),
              },
            }
          )}
        </p>

        <div className={styles.confirmButtonWrapper}>
          <Button
            variant="primary"
            // TODO: Add unit test when changing this code:
            /* c8 ignore next */
            onClick={() => explainerDialogState.close()}
            autoFocus={true}
            className={styles.startButton}
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
    <Dialog
      title={l10n.getString("onboarding-enter-details-comfirm-dialog-title")}
    >
      <p>{l10n.getString("onboarding-enter-details-comfirm-dialog-text")}</p>
      <div className={styles.dialogContents}>
        <dl className={styles.infoList}>
          {userDetailsData.map(({ key, label, displayValue }) => (
            <span key={key} className={styles.infoItem}>
              <dt>{label}:</dt>
              <dd>
                <strong>{displayValue}</strong>
              </dd>
            </span>
          ))}
        </dl>
      </div>
      <div className={styles.stepButtonWrapper}>
        <Button
          variant="secondary"
          // TODO: Add unit test when changing this code:
          /* c8 ignore next */
          onClick={() => confirmDialogState.close()}
          className={styles.startButton}
        >
          {l10n.getString(
            "onboarding-enter-details-comfirm-dialog-button-edit"
          )}
        </Button>
        <Button
          variant="primary"
          // TODO: Add unit test when changing this code:
          /* c8 ignore next */
          onClick={() => handleRequestScan()}
          autoFocus={true}
          className={styles.startButton}
          isLoading={requestingScan}
        >
          {l10n.getString(
            "onboarding-enter-details-comfirm-dialog-button-confirm"
          )}
        </Button>
      </div>
    </Dialog>
  );

  const triggerRef = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(
    explainerDialogTrigger.triggerProps,
    triggerRef
  );

  return (
    <div className={styles.stepContent}>
      <h1>{l10n.getString("onboarding-enter-details-title")}</h1>
      <p>
        {l10n.getString("onboarding-enter-details-text")}
        <button
          {...buttonProps}
          ref={triggerRef}
          // TODO: Add unit test when changing this code:
          /* c8 ignore next */
          onClick={() => explainerDialogState.open()}
          className={styles.explainerTrigger}
        >
          {l10n.getString("onboarding-enter-details-why-button-label")}
        </button>
      </p>

      <form onSubmit={handleOnSubmit}>
        <div className={styles.inputContainer}>
          {userDetailsData.map(
            ({
              key,
              errorMessage,
              label,
              onChange,
              placeholder,
              isValid,
              type,
              value,
            }) => {
              const validationState =
                !isValid && invalidInputs.includes(key) ? "invalid" : "valid";
              return key === "location" ? (
                <LocationAutocompleteInput
                  key={key}
                  errorMessage={errorMessage}
                  label={label}
                  isRequired={true}
                  onChange={onChange}
                  placeholder={placeholder}
                  type={type}
                  validationState={validationState}
                  value={value}
                />
              ) : (
                <InputField
                  key={key}
                  errorMessage={errorMessage}
                  label={label}
                  isRequired={true}
                  onChange={onChange}
                  placeholder={placeholder}
                  type={type}
                  validationState={validationState}
                  value={value}
                />
              );
            }
          )}
        </div>
        <div className={styles.stepButtonWrapper}>
          <Button
            variant="secondary"
            // TODO: Add unit test when changing this code:
            /* c8 ignore next */
            onClick={() => onGoBack()}
            className={styles.startButton}
            type="button"
          >
            {l10n.getString("onboarding-steps-enter-info-back")}
          </Button>
          <Button
            {...confirmDialogTrigger.triggerProps}
            variant="primary"
            autoFocus={true}
            type="submit"
            className={styles.startButton}
          >
            {l10n.getString("onboarding-steps-find-exposures-label")}
          </Button>
        </div>
      </form>

      {explainerDialogState.isOpen && (
        <ModalOverlay
          state={explainerDialogState}
          {...explainerDialogTrigger.overlayProps}
          isDismissable={true}
        >
          <WhyDoWeNeedInfoDialog />
        </ModalOverlay>
      )}

      {confirmDialogState.isOpen && getInvalidFields().length === 0 && (
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
