/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useState } from "react";
import Image from "next/image";
import { OnerepProfileRow, SubscriberRow } from "knex/types/tables";
import {
  CONST_MAX_NUM_ADDRESSES,
  CONST_MAX_NUM_ADDRESSES_PLUS,
  CONST_URL_SUMO_EDIT_INFO_PERSONAL_INFO,
} from "../../../../../../../../constants";
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
import { getLocale } from "../../../../../../../functions/universal/getLocale";
import { hasPremium } from "../../../../../../../functions/universal/user";
import { TelemetryButton } from "../../../../../../../components/client/TelemetryButton";
import { TelemetryLink } from "../../../../../../../components/client/TelemetryLink";
import InfoShield from "../images/InfoShield.svg";
import { onRemoveEmail } from "#settings/actions";

export type SettingsPanelEditInfoRedesignProps = {
  breachCountByEmailAddress: Record<string, number>;
  emailAddresses: SanitizedEmailAddressRow[];
  isEligibleForPremium: boolean;
  subscriber: SubscriberRow;
  user: Session["user"];
  data?: SubscriberEmailPreferencesOutput;
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
              <CheckIcon alt="" width={14} height={14} />
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
      dateStyle: "short",
      timeZone: "UTC",
    },
  );
  return (
    <section className={styles.section}>
      <div>
        <h4>{l10n.getString("settings-details-about-you-header")}</h4>
        <p>{l10n.getString("settings-details-about-you-description")}</p>
      </div>
      <ul className="noList">
        <li>
          <span>{l10n.getString("settings-details-about-you-name-label")}</span>
          {`${first_name} ${middle_name} ${last_name}`}
        </li>
        <li>
          <span>
            {l10n.getString("settings-details-about-you-date-of-birth-label")}
          </span>
          {dateOfBirthString}
        </li>
        <li>
          <span>
            {l10n.getString("settings-details-about-you-location-label")}
          </span>
          {`${city_name}, ${state_code}`}
        </li>
      </ul>
      <span className={styles.addButton}>
        <TelemetryButton
          className={styles.link}
          variant="secondary"
          href={"/user/settings/edit-profile"}
          event={{
            module: "link",
            name: "click",
            data: {
              link_id: "clicked_edit_info",
            },
          }}
        >
          {l10n.getString("settings-details-about-you-cta-label")}
        </TelemetryButton>
      </span>
    </section>
  );
}

function MonitoredEmailAddressesSection(
  props: SettingsPanelEditInfoRedesignProps,
) {
  const l10n = useL10n();
  const maxNumEmailAddresses = hasPremium(props.user)
    ? CONST_MAX_NUM_ADDRESSES_PLUS
    : CONST_MAX_NUM_ADDRESSES;
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
            <MonitoredEmail emailAddress={emailAddress} />
          </li>
        ))}
      </ul>
      <span className={styles.addButton}>
        {hasMaxEmailAddresses && (
          <EmailAddressAdderRedesign
            maxNumEmailAddresses={maxNumEmailAddresses}
          />
        )}
      </span>
    </section>
  );
}

function SettingsPanelEditInfoRedesign(
  props: SettingsPanelEditInfoRedesignProps,
) {
  const l10n = useL10n();
  return (
    <>
      <div className={styles.header}>
        <div>
          <h3>{l10n.getString("settings-tab-label-update-scan-info")}</h3>
          {props.profileData && (
            <p>
              {l10n.getFragment("settings-update-scan-info-description", {
                elems: {
                  a: (
                    <TelemetryLink
                      href={CONST_URL_SUMO_EDIT_INFO_PERSONAL_INFO}
                      target="_blank"
                      eventData={{
                        link_id: "settings_edit_info_sumo_pesonal_info",
                      }}
                      showIcon
                    />
                  ),
                },
              })}
            </p>
          )}
        </div>
        <Image src={InfoShield} alt="" />
      </div>
      {props.profileData && (
        <ProfileInfoSection profileData={props.profileData} />
      )}
      <MonitoredEmailAddressesSection {...props} />
      {props.isEligibleForPremium && (
        <div className={styles.upsellLinkContainer}>
          <TelemetryLink
            href="/user/dashboard/action-needed?dialog=subscriptions"
            target="_blank"
            eventData={{
              link_id: "settings_edit_info_upsell_cta",
            }}
          >
            {l10n.getString("settings-update-scan-info-upsell-cta-label")}
          </TelemetryLink>
        </div>
      )}
    </>
  );
}

export { SettingsPanelEditInfoRedesign };
