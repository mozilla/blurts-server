/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useState } from "react";
import Image from "next/image";
import { SubscriberRow } from "knex/types/tables";
import { SettingsDetailsSavedNotification } from "./SettingsDetailsSavedNotification";
import { CONST_MAX_NUM_ADDRESSES } from "../../../../../../../../constants";
import { SubscriberEmailPreferencesOutput } from "../../../../../../../../db/tables/subscriber_email_preferences";
import { useL10n } from "../../../../../../../hooks/l10n";
import { EmailAddressAdder } from "../EmailAddressAdder";
import { Session } from "next-auth";
import { SanitizedEmailAddressRow } from "../../../../../../../functions/server/sanitize";
import {
  CheckIcon,
  LinkIcon,
  MinusCircledIcon,
} from "../../../../../../../components/server/Icons";
import { useTelemetry } from "../../../../../../../hooks/useTelemetry";
import { Button } from "../../../../../../../components/client/Button";
import styles from "./SettingsPanelEditInfo.module.scss";
import InfoShield from "../images/InfoShield.svg";
import { type onAddEmail, type onRemoveEmail } from "../actions";
import { FeatureFlagName } from "../../../../../../../../db/tables/featureFlags";

export type SettingsPanelEditInfoProps = {
  breachCountByEmailAddress: Record<string, number>;
  emailAddresses: SanitizedEmailAddressRow[];
  subscriber: SubscriberRow;
  enabledFeatureFlags: FeatureFlagName[];
  user: Session["user"];
  data?: SubscriberEmailPreferencesOutput;
  actions: {
    onAddEmail: typeof onAddEmail;
    onRemoveEmail: typeof onRemoveEmail;
  };
};

function MonitoredEmail(props: {
  actions: {
    onRemoveEmail: typeof onRemoveEmail;
  };
  emailAddress: SanitizedEmailAddressRow;
}) {
  const l10n = useL10n();
  const recordTelemetry = useTelemetry();
  const [isVerificationEmailResent, setIsVerificationEmailResent] =
    useState(false);

  return (
    <div className={styles.emailWrapper}>
      <div className={styles.emailContent}>
        <div className={styles.emailAddress}>
          {props.emailAddress.email}
          {!props.emailAddress.verified && (
            <span className={styles.emailNote}>
              {l10n.getString("settings-email-verification-callout")}
            </span>
          )}
        </div>
        {!props.emailAddress.verified && (
          <Button
            className={styles.button}
            variant="link"
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
              }).then((response) => {
                if (response.ok) {
                  setIsVerificationEmailResent(true);
                }
              });
            }}
          >
            {isVerificationEmailResent ? (
              <CheckIcon alt="" width={24} height={24} />
            ) : (
              <LinkIcon alt="" />
            )}
            {l10n.getString(
              "settings-email-addresses-add-email-resend-button-label",
            )}
          </Button>
        )}
      </div>
      <Button
        className={`${styles.button} ${styles.removeButton}`}
        variant="link"
        onPress={() => {
          recordTelemetry("button", "click", {
            button_id: "removed_email_address",
          });
          void props.actions.onRemoveEmail(props.emailAddress);
        }}
      >
        <MinusCircledIcon alt="" />
        {l10n.getString("settings-remove-email-button-label")}
      </Button>
    </div>
  );
}

function MonitoredEmailAddressesSection(props: SettingsPanelEditInfoProps) {
  const l10n = useL10n();
  const maxNumEmailAddresses = CONST_MAX_NUM_ADDRESSES;
  const hasMaxEmailAddresses =
    props.emailAddresses.length < maxNumEmailAddresses - 1;

  return (
    <section className={styles.section}>
      <div>
        <h4>{l10n.getString("settings-email-addresses-header")}</h4>
        <p>{l10n.getString("settings-email-addresses-description")}</p>
      </div>
      <ul className="noList">
        <li key="primary">{props.user.email}</li>
        {props.emailAddresses.map((emailAddress) => (
          <li key={emailAddress.email}>
            <MonitoredEmail
              emailAddress={emailAddress}
              actions={props.actions}
            />
          </li>
        ))}
      </ul>
      <span className={styles.addButton}>
        {hasMaxEmailAddresses && (
          <EmailAddressAdder
            maxNumEmailAddresses={maxNumEmailAddresses}
            onAddEmail={props.actions.onAddEmail}
          />
        )}
      </span>
    </section>
  );
}

function SettingsPanelEditInfo(props: SettingsPanelEditInfoProps) {
  const l10n = useL10n();
  return (
    <>
      <SettingsDetailsSavedNotification />
      <div className={styles.header}>
        <div>
          <h3>{l10n.getString("settings-tab-label-update-scan-info")}</h3>
        </div>
        <Image src={InfoShield} alt="" />
      </div>
      <MonitoredEmailAddressesSection {...props} />
    </>
  );
}

export { SettingsPanelEditInfo };
