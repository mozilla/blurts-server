/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import {
  AriaCheckboxProps,
  AriaRadioProps,
  mergeProps,
  useCheckbox,
  useFocusRing,
  useRadio,
  useRadioGroup,
} from "react-aria";
import {
  RadioGroupState,
  useRadioGroupState,
  useToggleState,
} from "react-stately";
import styles from "./AlertAddressForm.module.scss";
import { useL10n } from "../../../../../../hooks/l10n";
import { createContext, useContext, useRef, useState } from "react";
import type {
  EmailUpdateCommOptionRequest,
  EmailUpdateCommTypeOfOptions,
} from "../../../../../../api/v1/user/update-comm-option/route";
import { VisuallyHidden } from "../../../../../../components/server/VisuallyHidden";
import { useSession } from "next-auth/react";
import { FeatureFlagName } from "../../../../../../../db/tables/featureFlags";

export type Props = {
  defaultSelected?: EmailUpdateCommTypeOfOptions;
  breachAlertsEmailsAllowed: boolean;
  enabledFeatureFlags: FeatureFlagName[];
};

const AlertAddressContext = createContext<RadioGroupState | null>(null);

export const AlertAddressForm = (props: Props) => {
  const l10n = useL10n();
  const session = useSession();
  const [activateAlertEmail, setActivateAlertEmail] = useState<boolean>(
    props.breachAlertsEmailsAllowed,
  );
  const [activateMonthlyMonitorReport, setActivateMonthlyMonitorReport] =
    useState(true);

  // If a user previously had all breach alerts sent to their primary email, we want to carry that value forward
  const defaultValue = props.breachAlertsEmailsAllowed ? "primary" : "affected";

  const state = useRadioGroupState({
    defaultValue: defaultValue,
    onChange: (newValue) => {
      const chosenOption = newValue as EmailUpdateCommTypeOfOptions;
      const body: EmailUpdateCommOptionRequest = {
        instantBreachAlerts: chosenOption,
        monthlyMonitorReport: activateMonthlyMonitorReport,
      };
      void fetch("/api/v1/user/update-comm-option", {
        method: "POST",
        body: JSON.stringify(body),
      }).then(() => {
        // Fetch a new token with up-to-date subscriber info - specifically,
        // with this setting updated.
        void session.update();
      });
    },
  });

  const handleActivateToggle = () => {
    setActivateAlertEmail((prevActivateAlertEmail) => {
      const newValue = !prevActivateAlertEmail;
      if (!newValue) {
        state.setSelectedValue("null");
      } else {
        state.setSelectedValue(defaultValue);
      }
      return newValue;
    });
  };

  const { radioGroupProps, labelProps } = useRadioGroup(
    { label: l10n.getString("settings-alert-email-preferences-title") },
    state,
  );

  return (
    <div {...radioGroupProps} className={styles.wrapper}>
      <div className={styles.sectionTitle}>
        <h3 {...labelProps}>
          {l10n.getString("settings-alert-email-preferences-title")}
        </h3>
        <p>{l10n.getString("settings-alert-email-preferences-subtitle")}</p>
      </div>
      <div className={styles.radioGroup}>
        {props.enabledFeatureFlags.includes("UpdatedEmailPreferencesOption") ? (
          <>
            <ActivateEmailsCheckbox
              isSelected={activateAlertEmail}
              onChange={handleActivateToggle}
            >
              <dl>
                <dt>
                  {l10n.getString(
                    "settings-alert-preferences-allow-breach-alerts-title",
                  )}
                </dt>
                <dd>
                  {l10n.getString(
                    "settings-alert-preferences-allow-breach-alerts-subtitle",
                  )}
                </dd>
              </dl>
            </ActivateEmailsCheckbox>

            <AlertAddressContext.Provider value={state}>
              <div
                className={`${styles.emailAlertsOptions} ${!activateAlertEmail && styles.disabled}`}
              >
                <AlertAddressRadio value="affected">
                  {l10n.getString("settings-alert-preferences-option-one")}
                </AlertAddressRadio>
                <AlertAddressRadio value="primary">
                  {l10n.getString("settings-alert-preferences-option-two")}
                </AlertAddressRadio>
                {/* Since at least one radio option should be selected,
                there is a hidden radio to capture the option of
                opting out of breach alerts entirely */}
                <VisuallyHidden>
                  <AlertAddressRadio value="null"></AlertAddressRadio>
                </VisuallyHidden>
              </div>
            </AlertAddressContext.Provider>
          </>
        ) : (
          <AlertAddressContext.Provider value={state}>
            <AlertAddressRadio value="affected">
              {l10n.getString("settings-alert-preferences-option-one")}
            </AlertAddressRadio>
            <AlertAddressRadio value="primary">
              {l10n.getString("settings-alert-preferences-option-two")}
            </AlertAddressRadio>
          </AlertAddressContext.Provider>
        )}

        {props.enabledFeatureFlags.includes("MonthlyMonitorReport") && (
          <ActivateEmailsCheckbox
            isSelected={activateMonthlyMonitorReport}
            onChange={setActivateMonthlyMonitorReport}
          >
            <dl>
              <dt>
                {l10n.getString(
                  "settings-alert-preferences-allow-monthly-monitor-report-title",
                )}
              </dt>
              <dd>
                {l10n.getString(
                  "settings-alert-preferences-allow-monthly-monitor-report-subtitle",
                )}
              </dd>
            </dl>
          </ActivateEmailsCheckbox>
        )}
      </div>
    </div>
  );
};

const ActivateEmailsCheckbox = (props: AriaCheckboxProps) => {
  const { children } = props;
  const state = useToggleState(props);
  const ref = useRef<HTMLInputElement>(null);
  const { inputProps } = useCheckbox(props, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();
  const isSelected = state.isSelected && !props.isIndeterminate;

  return (
    <label>
      <VisuallyHidden>
        <input {...mergeProps(inputProps, focusProps)} ref={ref} />
      </VisuallyHidden>
      <svg width={24} height={24} aria-hidden="true" style={{ marginRight: 4 }}>
        <rect
          x={5}
          y={5}
          width={14}
          height={14}
          fill={"none"}
          stroke={"gray"}
          strokeWidth={2}
        />
        {isSelected && (
          <path
            transform="translate(7 7)"
            d={`M3.788 9A.999.999 0 0 1 3 8.615l-2.288-3a1 1 0 1 1
            1.576-1.23l1.5 1.991 3.924-4.991a1 1 0 1 1 1.576 1.23l-4.712
            6A.999.999 0 0 1 3.788 9z`}
          />
        )}
        {props.isIndeterminate && (
          <rect x={7} y={11} width={10} height={2} fill="gray" />
        )}
        {isFocusVisible && (
          <rect
            x={1}
            y={1}
            width={22}
            height={22}
            fill="none"
            stroke="orange"
            strokeWidth={2}
          />
        )}
      </svg>
      {children}
    </label>
  );
};

const AlertAddressRadio = (props: AriaRadioProps & { value: AlertAddress }) => {
  const { children } = props;
  const state = useContext(AlertAddressContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const { inputProps, isSelected } = useRadio(props, state!, inputRef);
  const { isFocusVisible, focusProps } = useFocusRing();
  const strokeWidth = 2;

  return (
    <label>
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={inputRef} />
      </VisuallyHidden>
      <svg width={24} height={24} aria-hidden="true" style={{ marginRight: 4 }}>
        <circle
          cx={12}
          cy={12}
          r={8 - strokeWidth / 2}
          fill="none"
          className={`${styles.radioButton} ${
            isSelected ? styles.isSelected : styles.isUnselected
          }`}
          strokeWidth={strokeWidth}
        />
        {isSelected && (
          <circle
            cx={12}
            cy={12}
            r={4}
            className={styles.selectedFill}
            strokeWidth={2}
          />
        )}
        {isFocusVisible && (
          <circle
            cx={12}
            cy={12}
            r={11}
            fill="none"
            className={styles.focusRing}
            strokeWidth={2}
          />
        )}
      </svg>
      {children}
    </label>
  );
};
