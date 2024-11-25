/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { SubscriberRow } from "knex/types/tables";
import { SubscriberEmailPreferencesOutput } from "../../../../../../../../db/tables/subscriber_email_preferences";
import { Session } from "next-auth";
import { useL10n } from "../../../../../../../hooks/l10n";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { hasPremium } from "../../../../../../../functions/universal/user";
import { createContext, useContext, useRef, useState } from "react";
import {
  RadioGroupState,
  useRadioGroupState,
  useToggleState,
} from "react-stately";
import {
  EmailUpdateCommOptionRequest,
  EmailUpdateCommTypeOfOptions,
} from "../../../../../../../api/v1/user/update-comm-option/route";
import { useTelemetry } from "../../../../../../../hooks/useTelemetry";
import {
  AriaRadioProps,
  AriaSwitchProps,
  useFocusRing,
  useRadio,
  useRadioGroup,
  useSwitch,
} from "react-aria";
import { VisuallyHidden } from "../../../../../../../components/server/VisuallyHidden";
import { Button } from "../../../../../../../components/client/Button";
import styles from "./SettingsPanelNotifications.module.scss";

export type SettingsPanelNotificationsProps = {
  data: SubscriberEmailPreferencesOutput;
  subscriber: SubscriberRow;
  user: Session["user"];
};

export type NotificationSettingsProps = {
  user: Session["user"];
  subscriber: SubscriberRow;
  data: SubscriberEmailPreferencesOutput;
};

const AlertAddressContext = createContext<RadioGroupState | null>(null);

export const NotificationsSettings = (props: NotificationSettingsProps) => {
  const l10n = useL10n();
  const session = useSession();
  const router = useRouter();

  const breachAlertsEmailsAllowed = props.subscriber.all_emails_to_primary;

  // Extract monthly report preference from the right column
  const monitorReportAllowed = hasPremium(props.user)
    ? props.data.monthly_monitor_report
    : props.data.monthly_monitor_report_free;

  const defaultActivateAlertEmail =
    typeof breachAlertsEmailsAllowed === "boolean";
  const [activateAlertEmail, setActivateAlertEmail] = useState<boolean>(
    defaultActivateAlertEmail,
  );

  const [activateMonthlyMonitorReport, setActivateMonthlyMonitorReport] =
    useState(monitorReportAllowed);

  const commsValue = () => {
    switch (breachAlertsEmailsAllowed) {
      case true:
        return "primary";
      case false:
        return "affected";
      case null:
        return "null";
    }
  };

  const state = useRadioGroupState({
    defaultValue: commsValue(),
    onChange: (newValue) => {
      const chosenOption = newValue as EmailUpdateCommTypeOfOptions;
      const body: EmailUpdateCommOptionRequest = {
        instantBreachAlerts: chosenOption,
      };
      void fetch("/api/v1/user/update-comm-option", {
        method: "POST",
        body: JSON.stringify(body),
      }).then(() => {
        // Fetch a new token with up-to-date subscriber info - specifically,
        // with this setting updated.
        void session.update();
        router.refresh();
      });
    },
  });

  const recordTelemetry = useTelemetry();

  const handleMonthlyMonitorReportToggle = () => {
    const newValue = !activateMonthlyMonitorReport;
    setActivateMonthlyMonitorReport(newValue);
    recordTelemetry("button", "click", {
      button_id: newValue ? "monthly_report_opt_in" : "monthly_report_opt_out",
    });
    const body: EmailUpdateCommOptionRequest = {
      monthlyMonitorReport: newValue,
    };
    void fetch("/api/v1/user/update-comm-option", {
      method: "POST",
      body: JSON.stringify(body),
    }).then(() => {
      void session.update();
      router.refresh();
    });
  };

  const handleActivateToggle = () => {
    setActivateAlertEmail((prevActivateAlertEmail) => {
      const newValue = !prevActivateAlertEmail;
      if (newValue) {
        state.setSelectedValue("affected");
      } else {
        state.setSelectedValue("null");
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
      <VisuallyHidden>
        <h3 {...labelProps}>
          {l10n.getString("settings-alert-email-preferences-title")}
        </h3>
      </VisuallyHidden>
      <div className={styles.radioGroup}>
        <SwitchInput
          isSelected={activateAlertEmail}
          onChange={handleActivateToggle}
        >
          <div>
            <b>
              {l10n.getString(
                "settings-alert-preferences-allow-breach-alerts-title",
              )}
            </b>
            <p>
              {l10n.getString(
                "settings-alert-preferences-allow-breach-alerts-subtitle",
              )}
            </p>
          </div>
        </SwitchInput>
        <AlertAddressContext.Provider value={state}>
          {activateAlertEmail && (
            <>
              <RadioInput value="affected">
                {l10n.getString("settings-alert-preferences-option-one")}
              </RadioInput>
              <RadioInput value="primary">
                {l10n.getString("settings-alert-preferences-option-two")}
              </RadioInput>
            </>
          )}
        </AlertAddressContext.Provider>
        <hr />
        {hasPremium(props.user) ||
          (true && (
            <>
              <SwitchInput
                isSelected={activateMonthlyMonitorReport ?? false}
                onChange={handleMonthlyMonitorReportToggle}
              >
                <div>
                  <b>
                    {hasPremium(props.user)
                      ? l10n.getString(
                          "settings-alert-preferences-allow-monthly-monitor-plus-report-title",
                        )
                      : l10n.getString(
                          "settings-alert-preferences-allow-monthly-monitor-report-title",
                        )}
                  </b>
                  <p>
                    {l10n.getString(
                      "settings-alert-preferences-allow-monthly-monitor-report-subtitle",
                    )}
                  </p>
                </div>
              </SwitchInput>
            </>
          ))}
      </div>
      <hr />

      <div>
        <b>{l10n.getString("settings-tab-notifications-marketing-title")}</b>
        <p>{l10n.getString("settings-tab-notifications-marketing-text")}</p>
        <Button variant="link" href="/">
          {l10n.getString("settings-tab-notifications-marketing-link-label")}
        </Button>
      </div>
    </div>
  );
};

function SwitchInput(props: AriaSwitchProps) {
  const state = useToggleState(props);
  const ref = useRef(null);
  const { inputProps } = useSwitch(props, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <label className={styles.switchInputLabel}>
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      {props.children}
      <svg width={48} height={30} aria-hidden="true">
        <rect
          x={4}
          y={4}
          width={40}
          height={20}
          rx={10}
          fill={state.isSelected ? "#3FE1B0" : "gray"}
        />
        <circle cx={state.isSelected ? 34 : 14} cy={14} r={7} fill="white" />
        {isFocusVisible && (
          <rect
            x={1}
            y={1}
            width={46}
            height={26}
            rx={13}
            fill="none"
            stroke="#0060df"
            strokeWidth={2}
          />
        )}
      </svg>
    </label>
  );
}

const RadioInput = (
  props: AriaRadioProps & { value: EmailUpdateCommTypeOfOptions },
) => {
  const { children } = props;
  const state = useContext(AlertAddressContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const { inputProps, isSelected } = useRadio(props, state!, inputRef);
  const { isFocusVisible, focusProps } = useFocusRing();
  const strokeWidth = 2;

  return (
    <label>
      <VisuallyHidden>
        <input
          type="checkbox"
          {...inputProps}
          {...focusProps}
          ref={inputRef}
          aria-checked={isSelected}
        />
      </VisuallyHidden>
      {children}
      <svg width={24} height={24} aria-hidden="true">
        <circle
          cx={12}
          cy={12}
          r={8 - strokeWidth / 2}
          fill="none"
          className={`${styles.radioButton} ${
            !isSelected ? styles.isSelected : styles.isUnselected
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
    </label>
  );
};

function SettingsPanelNotifications(props: SettingsPanelNotificationsProps) {
  const l10n = useL10n();
  return (
    <>
      <div>
        <h3>{l10n.getString("settings-tab-label-notifications")}</h3>
        <p>{l10n.getString("settings-alert-email-preferences-subtitle")}</p>
      </div>
      <hr />
      <NotificationsSettings
        user={props.user}
        subscriber={props.subscriber}
        data={props.data}
      />
    </>
  );
}

export { SettingsPanelNotifications };
