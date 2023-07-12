/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Image from "next/image";
import { Session } from "next-auth";
import { FormEvent, useState } from "react";
import { useOverlayTriggerState } from "react-stately";
import { useOverlayTrigger } from "react-aria";
import whyWeNeedInfoHero from "./images/welcome-why-we-need-info.svg";
import { useL10n } from "../../../../hooks/l10n";
import { ModalOverlay } from "../../../../components/client/dialog/ModalOverlay";
import { Dialog } from "../../../../components/client/dialog/Dialog";
import { Button } from "../../../../components/server/Button";
import { InputField } from "../../../../components/client/InputField";

import enterInfoStyles from "./EnterInfo.module.scss";
import viewStyles from "./View.module.scss";

export type Props = {
  onDataSaved: () => void;
  onGoBack: () => void;
  user: Session["user"];
};

// TODO: Add more sophisticated validation for location data
const getIsValidInfo = (value: string) => value !== "";

export const EnterInfo = (props: Props) => {
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
        "onboarding-enter-details-input-error-message"
      ),
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
      errorMessage: l10n.getString(
        "onboarding-enter-details-input-error-message"
      ),
      onChange: setDateOfBirth,
    },
  ];

  const getInvalidFields = () =>
    userDetailsData
      .filter(({ value }) => !getIsValidInfo(value))
      .map(({ key }) => key);

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
      <div
        className={`${viewStyles.dialogContents} ${enterInfoStyles.dialogContents}`}
      >
        <p>{l10n.getString("onboarding-enter-details-dialog")}</p>
        <strong>
          {l10n.getString("onboarding-enter-details-diaglog-subheader")}
        </strong>

        <ol className={viewStyles.list}>
          <li>
            <h4>
              {l10n.getString("onboarding-enter-details-dialog-name-label")}
            </h4>
            <p>{l10n.getString("onboarding-enter-details-dialog-name-text")}</p>
          </li>
          <li>
            <h4>
              {l10n.getString("onboarding-enter-details-dialog-location-label")}
            </h4>
            <p>
              {l10n.getString("onboarding-enter-details-dialog-location-text")}
            </p>
          </li>
          <li>
            <h4>
              {l10n.getString("onboarding-enter-details-dialog-date-label")}
            </h4>
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

        <div className={viewStyles.confirmButtonWrapper}>
          <Button
            variant="primary"
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
    <Dialog
      title={l10n.getString("onboarding-enter-details-comfirm-dialog-title")}
      contentAlignment="left"
    >
      <p>{l10n.getString("onboarding-enter-details-comfirm-dialog-text")}</p>
      <div className={viewStyles.dialogContents}>
        <dl className={enterInfoStyles.infoList}>
          {userDetailsData.map(({ key, label, displayValue }) => (
            <span key={key} className={enterInfoStyles.infoItem}>
              <dt>{label}:</dt>
              <dd>
                <strong>{displayValue}</strong>
              </dd>
            </span>
          ))}
        </dl>
      </div>
      <div className={viewStyles.stepButtonWrapper}>
        <Button
          variant="secondary"
          onClick={() => confirmDialogState.close()}
          className={enterInfoStyles.startButton}
        >
          {l10n.getString(
            "onboarding-enter-details-comfirm-dialog-button-edit"
          )}
        </Button>
        <Button
          variant="primary"
          onClick={() => props.onDataSaved()}
          autoFocus={true}
          className={enterInfoStyles.startButton}
        >
          {l10n.getString(
            "onboarding-enter-details-comfirm-dialog-button-confirm"
          )}
        </Button>
      </div>
    </Dialog>
  );

  return (
    <div className={viewStyles.stepContent}>
      <h1>{l10n.getString("onboarding-enter-details-title")}</h1>
      <p>
        {l10n.getString("onboarding-enter-details-text")}
        <button
          {...explainerDialogTrigger.triggerProps}
          onClick={() => explainerDialogState.open()}
          className={viewStyles.explainerTrigger}
        >
          {l10n.getString("onboarding-enter-details-why-button-label")}
        </button>
      </p>

      <form onSubmit={handleOnSubmit}>
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
              <InputField
                key={key}
                errorMessage={errorMessage}
                label={label}
                isRequired={true}
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
            variant="secondary"
            onClick={() => props.onGoBack()}
            className={enterInfoStyles.startButton}
            type="button"
          >
            {l10n.getString("onboarding-steps-enter-info-back")}
          </Button>
          <Button
            {...confirmDialogTrigger.triggerProps}
            variant="primary"
            autoFocus={true}
            className={enterInfoStyles.startButton}
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
