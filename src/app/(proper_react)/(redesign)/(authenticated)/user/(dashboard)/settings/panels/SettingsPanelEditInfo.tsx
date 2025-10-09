/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { useState } from "react";
import { captureException } from "@sentry/nextjs";
import { OnerepProfileRow, SubscriberRow } from "knex/types/tables";
import { CONST_MAX_NUM_ADDRESSES } from "../../../../../../../../constants";
import { SubscriberEmailPreferencesOutput } from "../../../../../../../../db/tables/subscriber_email_preferences";
import { useL10n } from "../../../../../../../hooks/l10n";
import { EmailAddressAdder } from "../EmailAddressAdder";
import { Session } from "next-auth";
import { SanitizedEmailAddressRow } from "../../../../../../../functions/server/sanitize";
import { InputField } from "../../../../../../../components/client/InputField";
import {
  CheckIcon,
  DeleteIcon,
} from "../../../../../../../components/server/Icons";
import { useTelemetry } from "../../../../../../../hooks/useTelemetry";
import { Button } from "../../../../../../../components/client/Button";
import styles from "./SettingsPanelEditInfo.module.scss";
import { type onRemoveEmail, type onAddEmail } from "../actions";
import { FeatureFlagName } from "../../../../../../../../db/tables/featureFlags";

export type SettingsPanelEditInfoProps = {
  breachCountByEmailAddress: Record<string, number>;
  data?: SubscriberEmailPreferencesOutput;
  emailAddresses: SanitizedEmailAddressRow[];
  subscriber: SubscriberRow;
  user: Session["user"];
  profileData?: OnerepProfileRow;
  actions: {
    onAddEmail: typeof onAddEmail;
    onRemoveEmail: typeof onRemoveEmail;
  };
  enabledFeatureFlags: FeatureFlagName[];
};

function MonitoredEmail(props: {
  emailAddress: SanitizedEmailAddressRow;
  breachCount: number;
  onRemoveEmail: typeof onRemoveEmail;
}) {
  const l10n = useL10n();
  const recordTelemetry = useTelemetry();
  const [isVerificationEmailResent, setIsVerificationEmailResent] =
    useState(false);
  const isInvalid = !props.emailAddress.verified;

  return (
    <>
      <InputField
        aria-label={props.emailAddress.email}
        type="email"
        defaultValue={props.emailAddress.email}
        isDisabled
        iconButton={
          <Button
            onPress={() => {
              recordTelemetry("button", "click", {
                button_id: "removed_email_address",
              });
              void props.onRemoveEmail(props.emailAddress);
            }}
            variant="icon"
            small
          >
            <DeleteIcon
              alt={l10n.getString("settings-remove-email-button-label")}
            />
          </Button>
        }
        isInvalid={isInvalid}
        errorMessage={l10n.getString("settings-email-verification-callout")}
        description={l10n.getString("settings-email-number-of-breaches-info", {
          breachCount: props.breachCount,
        })}
      />
      {!props.emailAddress.verified && (
        <div className={styles.resendButtonWrapper}>
          <Button
            variant="link"
            className={styles.resendButton}
            isDisabled={isVerificationEmailResent}
            onPress={() => {
              void fetch("/api/v1/user/resend-email", {
                headers: {
                  "Content-Type": "application/json",
                  Accept: "text/html", // set to request localized HTML email
                },
                mode: "same-origin",
                method: "POST",
                body: JSON.stringify({ emailId: props.emailAddress.id }),
              })
                .then((response) => {
                  if (response.ok) {
                    setIsVerificationEmailResent(true);
                  }
                })
                // This catch block is only reporting an error to Sentry.
                /* c8 ignore next 3 */
                .catch((error) => {
                  captureException(error);
                });
            }}
          >
            {l10n.getString("settings-resend-email-verification-link")}
            {isVerificationEmailResent && (
              <CheckIcon alt="" width={24} height={24} />
            )}
          </Button>
        </div>
      )}
    </>
  );
}

function SettingsPanelEditInfo(props: SettingsPanelEditInfoProps) {
  const l10n = useL10n();
  const hasMaxEmailAddresses =
    props.emailAddresses.length < CONST_MAX_NUM_ADDRESSES - 1;

  return (
    <>
      <div>
        <h3>{l10n.getString("settings-email-list-title")}</h3>
        <p>
          {l10n.getString("settings-email-limit-info", {
            limit: CONST_MAX_NUM_ADDRESSES,
          })}
        </p>
      </div>
      <hr />
      <ul className={`noList ${styles.emailList}`}>
        <li key="primary">
          <InputField
            aria-label={props.user.email}
            type="email"
            defaultValue={props.user.email}
            isDisabled
            description={l10n.getString(
              "settings-email-number-of-breaches-info",
              {
                breachCount: props.breachCountByEmailAddress[props.user.email],
              },
            )}
          />
        </li>
        {props.emailAddresses.map((emailAddress) => (
          <li key={emailAddress.email}>
            <MonitoredEmail
              emailAddress={emailAddress}
              breachCount={props.breachCountByEmailAddress[emailAddress.email]}
              onRemoveEmail={props.actions.onRemoveEmail}
            />
          </li>
        ))}
      </ul>
      <span className={styles.addEmailButton}>
        {hasMaxEmailAddresses && (
          <EmailAddressAdder
            onAddEmail={props.actions.onAddEmail}
            enabledFeatureFlags={props.enabledFeatureFlags}
          />
        )}
      </span>
    </>
  );
}

export { SettingsPanelEditInfo };
