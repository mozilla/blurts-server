/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useState } from "react";
import { OnerepProfileRow, SubscriberRow } from "knex/types/tables";
import { CONST_MAX_NUM_ADDRESSES } from "../../../../../../../../constants";
import { SubscriberEmailPreferencesOutput } from "../../../../../../../../db/tables/subscriber_email_preferences";
import { useL10n } from "../../../../../../../hooks/l10n";
import { EmailAddressAdderRedesign } from "../EmailAddressAdderRedesign";
import { Session } from "next-auth";
import { SanitizedEmailAddressRow } from "../../../../../../../functions/server/sanitize";
import {
  CheckIcon,
  LinkIcon,
  MinusCircledIcon,
} from "../../../../../../../components/server/Icons";
import { useTelemetry } from "../../../../../../../hooks/useTelemetry";
import { Button } from "../../../../../../../components/client/Button";
import styles from "./SettingsPanelEditInfoRedesign.module.scss";
import { onRemoveEmail } from "../actions";
import { getLocale } from "../../../../../../../functions/universal/getLocale";

export type SettingsPanelEditInfoRedesignProps = {
  breachCountByEmailAddress: Record<string, number>;
  data?: SubscriberEmailPreferencesOutput;
  emailAddresses: SanitizedEmailAddressRow[];
  subscriber: SubscriberRow;
  user: Session["user"];
  profileData?: OnerepProfileRow;
};

function MonitoredEmail(props: { emailAddress: SanitizedEmailAddressRow }) {
  const l10n = useL10n();
  const recordTelemetry = useTelemetry();
  const [isVerificationEmailResent, setIsVerificationEmailResent] =
    useState(false);

  return (
    <div className={styles.emailWrapper}>
      <div className={styles.emailContent}>
        <div className={styles.emailAddress}>
          {props.emailAddress.email}
          <span className={styles.emailNote}>
            {l10n.getString("settings-email-verification-callout")}
          </span>
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
              <CheckIcon alt="" width={14} height={14} />
            ) : (
              <LinkIcon alt="" />
            )}
            {"Resend verification link"}
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
          void onRemoveEmail(props.emailAddress);
        }}
      >
        <MinusCircledIcon alt="" />
        {l10n.getString("settings-remove-email-button-label")}
      </Button>
    </div>
  );
}

function ProfileInfoSection({
  profileData,
}: {
  profileData: OnerepProfileRow;
}) {
  const l10n = useL10n();
  const {
    first_name,
    middle_name,
    last_name,
    date_of_birth,
    city_name,
    state_code,
  } = profileData;
  const dateOfBirthString = new Date(date_of_birth).toLocaleDateString(
    getLocale(l10n),
    {
      dateStyle: "medium",
      timeZone: "UTC",
    },
  );
  return (
    <section className={styles.section}>
      <div>
        <h4>{"Details about you"}</h4>
        <p>
          {"Monitor will use this info for scans and data removal requests."}
        </p>
      </div>
      <ul className="noList">
        <li>
          <span>{"Name"}</span>
          {`${first_name} ${middle_name} ${last_name}`}
        </li>
        <li>
          <span>{"Date of birth"}</span>
          {dateOfBirthString}
        </li>
        <li>
          <span>{"Location"}</span>
          {`${city_name}, ${state_code}`}
        </li>
      </ul>
    </section>
  );
}

function MonitoredEmailAddressesSection(
  props: SettingsPanelEditInfoRedesignProps,
) {
  const hasMaxEmailAddresses =
    props.emailAddresses.length < CONST_MAX_NUM_ADDRESSES - 1;

  return (
    <section className={styles.section}>
      <div>
        <h4>{"Email addresses"}</h4>
        <p>
          {"Monitor will alert you if these emails show up in known breaches."}
        </p>
      </div>
      <ul className="noList">
        <li key="primary">{props.user.email}</li>
        {props.emailAddresses.map((emailAddress) => (
          <li key={emailAddress.email}>
            <MonitoredEmail emailAddress={emailAddress} />
          </li>
        ))}
      </ul>
      <span className={styles.addButton}>
        {hasMaxEmailAddresses && <EmailAddressAdderRedesign />}
      </span>
    </section>
  );
}

function SettingsPanelEditInfoRedesign(
  props: SettingsPanelEditInfoRedesignProps,
) {
  return (
    <>
      <div>
        <h3>{"Update scan info"}</h3>
        <p>
          {
            "Monitor is most effective at protecting your info when you add specific details. Add any of your name variations, emails, or locations. Why should I add details for my scan?"
          }
        </p>
      </div>
      {props.profileData && (
        <ProfileInfoSection profileData={props.profileData} />
      )}
      <MonitoredEmailAddressesSection {...props} />
    </>
  );
}

export { SettingsPanelEditInfoRedesign };
