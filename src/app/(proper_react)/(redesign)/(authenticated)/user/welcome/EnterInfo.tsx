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
import { Button } from "../../../../../components/client/Button";
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
import { getLocale } from "../../../../../functions/universal/getLocale";
import { useTelemetry } from "../../../../../hooks/useTelemetry";
import { CONST_URL_PRIVACY_POLICY } from "../../../../../../constants";

import styles from "./EnterInfo.module.scss";
import { TelemetryButton } from "../../../../../components/client/TelemetryButton";
import { redirect } from "next/navigation";
import * as Sentry from "@sentry/nextjs";
import { ExperimentData } from "../../../../../../telemetry/generated/nimbus/experiments";

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
const createProfileAndStartScan = async (
  userInfo: UserInfo,
): Promise<WelcomeScanBody> => {
  const response = await fetch("/api/v1/user/welcome-scan/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });

  const result: WelcomeScanBody = await response.json();
  if (!result?.success) {
    Sentry.captureException(new Error("Could not start scan"));
    return redirect("/");
  }

  return result;
};
/* c8 ignore stop */

export type Props = {
  onScanStarted: () => void;
  onGoBack: () => void;
  user: Session["user"];
  skipInitialStep: boolean;
  previousRoute: string | null;
  experimentData: ExperimentData["Features"];
};

export const EnterInfo = ({
  onScanStarted,
  onGoBack,
  skipInitialStep,
  previousRoute,
  experimentData,
}: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [nameSuffix, setNameSuffix] = useState("");

  const [invalidInputs, setInvalidInputs] = useState<Array<string>>([]);
  const [requestingScan, setRequestingScan] = useState(false);

  const recordTelemetry = useTelemetry();
  const explainerDialogState = useOverlayTriggerState({});
  const explainerDialogTrigger = useOverlayTrigger(
    { type: "dialog" },
    explainerDialogState,
  );

  const confirmDialogState = useOverlayTriggerState({
    onOpenChange: (isOpen) => {
      if (getInvalidFields().length > 0) {
        return;
      }

      if (isOpen) {
        recordTelemetry("popup", "view", {
          popup_id: "enter_scan_info_confirmation_modal",
        });
      } else {
        recordTelemetry("button", "click", {
          button_id: "edit_free_scan",
        });
      }
    },
  });

  const confirmDialogTrigger = useOverlayTrigger(
    { type: "dialog" },
    confirmDialogState,
  );

  const l10n = useL10n();
  const userDetailsData = [
    {
      label: l10n.getString("onboarding-enter-details-label-first-name"),
      key: "first_name",
      type: "text",
      placeholder: l10n.getString(
        "onboarding-enter-details-placeholder-first-name",
      ),
      value: firstName,
      displayValue: firstName,
      isValid: firstName.trim() !== "",
      isRequired: true,
      onChange: setFirstName,
    },
    {
      label: l10n.getString("onboarding-enter-details-label-middle-name"),
      key: "middle_name",
      type: "text",
      placeholder: l10n.getString(
        "onboarding-enter-details-placeholder-middle-name",
      ),
      value: middleName,
      displayValue: middleName,
      isValid: true,
      isRequired: false,
      onChange: setMiddleName,
    },
    {
      label: l10n.getString("onboarding-enter-details-label-last-name"),
      key: "last_name",
      type: "text",
      placeholder: l10n.getString(
        "onboarding-enter-details-placeholder-last-name",
      ),
      value: lastName,
      displayValue: lastName,
      isValid: lastName.trim() !== "",
      isRequired: true,
      onChange: setLastName,
    },
    {
      label: l10n.getString("onboarding-enter-details-label-name-suffix"),
      key: "name_suffix",
      type: "text",
      placeholder: l10n.getString(
        "onboarding-enter-details-placeholder-name-suffix",
      ),
      value: nameSuffix,
      displayValue: nameSuffix,
      isValid: true,
      isRequired: false,
      onChange: setNameSuffix,
    },
    {
      label: l10n.getString("onboarding-enter-details-label-date-of-birth"),
      key: "date_of_birth",
      type: "date",
      placeholder: "",
      value: dateOfBirth,
      displayValue: new Date(dateOfBirth).toLocaleDateString(getLocale(l10n), {
        dateStyle: "medium",
        timeZone: "UTC",
      }),
      isValid: meetsAgeRequirement(dateOfBirth),
      isRequired: true,
      onChange: setDateOfBirth,
    },
    {
      label: l10n.getString("onboarding-enter-details-label-location"),
      key: "location",
      type: "text",
      placeholder: l10n.getString(
        "onboarding-enter-details-placeholder-location",
      ),
      value: location,
      displayValue: location,
      isValid: location.trim() !== "",
      isRequired: true,
      onChange: setLocation,
    },
  ].filter((userDetail) => {
    if (userDetail.isRequired) {
      return true;
    }

    const optionalInfoExperimentData =
      experimentData["welcome-scan-optional-info"];
    if (optionalInfoExperimentData.enabled) {
      if (userDetail.key === "middle_name") {
        return (
          optionalInfoExperimentData.variant === "middleName" ||
          optionalInfoExperimentData.variant === "suffixAndMiddleName"
        );
      }
      if (userDetail.key === "name_suffix") {
        return (
          optionalInfoExperimentData.variant === "suffix" ||
          optionalInfoExperimentData.variant === "suffixAndMiddleName"
        );
      }
    }
  });

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
    const userInfo: UserInfo = {
      firstName: firstName.trim(),
      middleName: middleName.trim(),
      lastName: lastName.trim(),
      nameSuffix: nameSuffix.trim(),
      city,
      state: state as UserInfo["state"],
      dateOfBirth,
    };

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

    recordTelemetry("ctaButton", "click", {
      button_id: "started_free_scan",
    });

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
                  <a href={CONST_URL_PRIVACY_POLICY} target="_blank" />
                ),
                "privacy-protection-link": (
                  <a
                    href="https://www.mozilla.org/firefox/privacy"
                    target="_blank"
                  />
                ),
              },
            },
          )}
        </p>

        <div className={styles.confirmButtonWrapper}>
          <Button
            variant="primary"
            onPress={() => explainerDialogState.close()}
            className={styles.startButton}
          >
            {l10n.getString(
              "onboarding-get-started-how-it-works-dialog-confirm-label",
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
          {userDetailsData.map(({ key, label, displayValue }) => {
            const isNameRelatedField = key.includes("name");
            return (
              displayValue && (
                <span
                  key={key}
                  className={`${styles.infoItem} ${isNameRelatedField ? styles.isNameRelatedField : ""}`.trim()}
                >
                  <dt>{label}:</dt>
                  <dd>
                    <strong>{displayValue}</strong>
                  </dd>
                </span>
              )
            );
          })}
        </dl>
      </div>
      <div className={styles.stepButtonWrapper}>
        <Button
          variant="secondary"
          onPress={() => confirmDialogState.close()}
          className={styles.startButton}
        >
          {l10n.getString(
            "onboarding-enter-details-comfirm-dialog-button-edit",
          )}
        </Button>
        <TelemetryButton
          variant="primary"
          // TODO: Figure out how to intercept the fetch request in a test:
          /* c8 ignore next */
          className={styles.startButton}
          isLoading={requestingScan}
          onPress={() => handleRequestScan()}
          event={{
            module: "ctaButton",
            name: "click",
            data: {
              button_id: "confirmed_free_scan",
            },
          }}
        >
          {l10n.getString(
            "onboarding-enter-details-comfirm-dialog-button-confirm",
          )}
        </TelemetryButton>
      </div>
    </Dialog>
  );

  const triggerRef = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(
    explainerDialogTrigger.triggerProps,
    triggerRef,
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
          onClick={() => {
            recordTelemetry("button", "click", {
              button_id: "why_do_we_need_this_info",
            });
            explainerDialogState.open();
          }}
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
              label,
              onChange,
              placeholder,
              isValid,
              isRequired,
              type,
              value,
            }) => {
              const isInvalid = !isValid && invalidInputs.includes(key);
              return key === "location" ? (
                <LocationAutocompleteInput
                  key={key}
                  errorMessage={l10n.getString(
                    "onboarding-enter-details-input-error-message-location",
                  )}
                  label={label}
                  isRequired={isRequired}
                  onChange={onChange}
                  placeholder={placeholder}
                  infoText={l10n.getString(
                    "onboarding-enter-details-input-info-text-location",
                  )}
                  isInvalid={isInvalid}
                  inputValue={value}
                  onFocus={() => {
                    recordTelemetry("field", "focus", {
                      field_id: key,
                    });
                  }}
                  onFocusChange={(isFocussed) => {
                    if (!isFocussed && !value) {
                      setInvalidInputs([...invalidInputs, key]);
                    }
                  }}
                />
              ) : (
                <InputField
                  key={key}
                  id={key}
                  errorMessage={l10n.getString(
                    "onboarding-enter-details-input-error-message-generic",
                  )}
                  label={label}
                  isRequired={isRequired}
                  onChange={onChange}
                  placeholder={placeholder}
                  type={type}
                  isInvalid={isInvalid}
                  value={value}
                  onFocusChange={(isFocussed) => {
                    if (!isFocussed && !value) {
                      setInvalidInputs([...invalidInputs, key]);
                    }
                  }}
                  onFocus={() => {
                    recordTelemetry("field", "focus", {
                      field_id: key,
                    });
                  }}
                />
              );
            },
          )}
        </div>
        <div className={styles.stepButtonWrapper}>
          {(!skipInitialStep || (skipInitialStep && previousRoute)) && (
            <Button
              variant="secondary"
              onPress={() => onGoBack()}
              className={styles.startButton}
              type="button"
            >
              {l10n.getString("onboarding-steps-enter-info-back")}
            </Button>
          )}
          <Button
            {...confirmDialogTrigger.triggerProps}
            // react-aria sets `aria-expanded`, which causes this to be
            // announced as "collapsed", rather than opening a dialog. By
            // setting aria-haspopup, this interaction is clearer. See also:
            // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup
            aria-haspopup="dialog"
            aria-expanded={undefined}
            variant="primary"
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
