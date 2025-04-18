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
import { createContext, useState } from "react";
import { RadioGroupState, useRadioGroupState } from "react-stately";
import { EmailUpdateCommOptionRequest } from "../../../../../../../api/v1/user/update-comm-option/route";
import { useTelemetry } from "../../../../../../../hooks/useTelemetry";
import { useRadioGroup } from "react-aria";
import { VisuallyHidden } from "../../../../../../../components/server/VisuallyHidden";
import { TelemetryButton } from "../../../../../../../components/client/TelemetryButton";
import styles from "./SettingsPanelNotifications.module.scss";
import { SwitchInput } from "../../../../../../../components/client/SwitchInput";
import { RadioInput } from "../../../../../../../components/client/RadioInput";
import { CONST_URL_MOZILLA_BASKET } from "../../../../../../../../constants";

export type SettingsPanelNotificationsProps = {
  data?: SubscriberEmailPreferencesOutput;
  subscriber: SubscriberRow;
  user: Session["user"];
};

export type NotificationSettingsProps = {
  user: Session["user"];
  subscriber: SubscriberRow;
  data?: SubscriberEmailPreferencesOutput;
};

const EmailCommOption = {
  Primary: "primary",
  Affected: "affected",
  None: "null",
} as const;

type EmailUpdateCommTypeOfOptions =
  (typeof EmailCommOption)[keyof typeof EmailCommOption];

const AlertAddressContext = createContext<RadioGroupState | null>(null);

export const NotificationsSettings = (props: NotificationSettingsProps) => {
  const l10n = useL10n();
  const session = useSession();
  const router = useRouter();

  const breachAlertsEmailsAllowed = props.subscriber.all_emails_to_primary;

  // Extract monthly report preference from the right column
  const monitorReportAllowed =
    (hasPremium(props.user)
      ? props.data?.monthly_monitor_report
      : props.data?.monthly_monitor_report_free) ?? true;

  const defaultActivateAlertEmail =
    typeof breachAlertsEmailsAllowed === "boolean";
  const [activateAlertEmail, setActivateAlertEmail] = useState<boolean>(
    defaultActivateAlertEmail,
  );

  const [activateMonthlyMonitorReport, setActivateMonthlyMonitorReport] =
    useState(monitorReportAllowed);

  const commsValue = (): EmailUpdateCommTypeOfOptions => {
    switch (breachAlertsEmailsAllowed) {
      case true:
        return EmailCommOption.Primary;
      case false:
        return EmailCommOption.Affected;
      case null:
        return EmailCommOption.None;
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
    <section className={styles.wrapper}>
      <VisuallyHidden>
        <h3 {...labelProps}>
          {l10n.getString("settings-alert-email-preferences-title")}
        </h3>
      </VisuallyHidden>
      <div {...radioGroupProps} className={styles.radioGroup}>
        <SwitchInput
          className={styles.switchInput}
          isSelected={activateAlertEmail}
          onChange={handleActivateToggle}
        >
          <div>
            <h4>
              {l10n.getString(
                "settings-alert-preferences-allow-breach-alerts-title",
              )}
            </h4>
            <p>
              {l10n.getString(
                "settings-alert-preferences-allow-breach-alerts-subtitle",
              )}
            </p>
          </div>
        </SwitchInput>
        <AlertAddressContext.Provider value={state}>
          {activateAlertEmail && (
            <span className={styles.radioInputs}>
              <RadioInput value="affected" radioContext={AlertAddressContext}>
                <b>{l10n.getString("settings-alert-preferences-option-one")}</b>
              </RadioInput>
              <RadioInput value="primary" radioContext={AlertAddressContext}>
                <b>{l10n.getString("settings-alert-preferences-option-two")}</b>
              </RadioInput>
            </span>
          )}
          <hr />
        </AlertAddressContext.Provider>
        <SwitchInput
          className={styles.switchInput}
          isSelected={activateMonthlyMonitorReport}
          onChange={handleMonthlyMonitorReportToggle}
        >
          <div>
            <h4>
              {hasPremium(props.user)
                ? l10n.getString(
                    "settings-alert-preferences-allow-monthly-monitor-plus-report-title",
                  )
                : l10n.getString(
                    "settings-alert-preferences-allow-monthly-monitor-report-title",
                  )}
            </h4>
            <p>
              {l10n.getString(
                "settings-alert-preferences-allow-monthly-monitor-report-subtitle",
              )}
            </p>
          </div>
        </SwitchInput>
      </div>
    </section>
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
      <hr />
      <section>
        <h4>{l10n.getString("settings-tab-notifications-marketing-title")}</h4>
        <p>{l10n.getString("settings-tab-notifications-marketing-text")}</p>
        <TelemetryButton
          className={styles.link}
          variant="link"
          href={`${CONST_URL_MOZILLA_BASKET}/fxa/?email=${props.subscriber.primary_email}`}
          target="_blank"
          event={{
            module: "link",
            name: "click",
            data: {
              link_id: "clicked_marketing_email_settings",
            },
          }}
        >
          {l10n.getString("settings-tab-notifications-marketing-link-label")}
        </TelemetryButton>
      </section>
    </>
  );
}

export { SettingsPanelNotifications };
