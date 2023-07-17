/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Session } from "next-auth";
import { useOverlayTriggerState } from "react-stately";
import { useOverlayTrigger } from "react-aria";
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
import { WelcomeScanBody } from "../../../../../api/v1/user/welcome-scan/create/route";
import { StateAbbr } from "../../../../../../utils/states";
import { ISO8601DateString } from "../../../../../../utils/parse.js";

import styles from "./EnterInfo.module.scss";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

export type UserInfo = {
  firstName: string;
  lastName: string;
  city: string;
  state: StateAbbr;
  dateOfBirth: ISO8601DateString;
};

const getAgeFromDateString = (dateOfBirth: ISO8601DateString): number => {
  const dateNow = new Date();
  const dateBirth = new Date(dateOfBirth);
  const dateDelta = new Date(dateNow.valueOf() - dateBirth.valueOf());
  const unixStartDate = new Date(0);

  return dateDelta.getUTCFullYear() - unixStartDate.getUTCFullYear();
};

const meetsAgeRequirement = (dateOfBirth: ISO8601DateString): boolean =>
  getAgeFromDateString(dateOfBirth) >= 13;

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
        "onboarding-enter-details-input-error-message"
      ),
      isValid: firstName !== "",
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
        "onboarding-enter-details-input-error-message"
      ),
      isValid: lastName !== "",
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
      // TODO: Localize string
      errorMessage: "Search and select your location",
      isValid: location !== "",
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
      }),
      // TODO: Localize string
      errorMessage: "You have to be at least 13 years old",
      isValid: meetsAgeRequirement(dateOfBirth),
      onChange: setDateOfBirth,
    },
  ];

  const getInvalidFields = () =>
    userDetailsData.filter(({ isValid }) => !isValid).map(({ key }) => key);

  const router = useRouter();
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
        router.push("/user/dashboard/");
      });
  };

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const invalidInputKeys = getInvalidFields();
    if (!invalidInputKeys?.length) {
      confirmDialogState.open();
    } else {
      setInvalidInputs(invalidInputKeys);
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
          onClick={() => confirmDialogState.close()}
          className={styles.startButton}
        >
          {l10n.getString(
            "onboarding-enter-details-comfirm-dialog-button-edit"
          )}
        </Button>
        <Button
          variant="primary"
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

  return (
    <div className={styles.stepContent}>
      <h1>{l10n.getString("onboarding-enter-details-title")}</h1>
      <p>
        {l10n.getString("onboarding-enter-details-text")}
        <button
          {...explainerDialogTrigger.triggerProps}
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
