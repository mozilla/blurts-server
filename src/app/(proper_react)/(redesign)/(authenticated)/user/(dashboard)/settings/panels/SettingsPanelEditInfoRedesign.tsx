/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useState } from "react";
import Image from "next/image";
import { OnerepProfileRow, SubscriberRow } from "knex/types/tables";
import { SettingsDetailsSavedNotification } from "./SettingsDetailsSavedNotification";
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
import { type onAddEmail, type onRemoveEmail } from "../actions";
import { formatPhone } from "../../../../../../../functions/universal/formatPhone";
import { FeatureFlagName } from "../../../../../../../../db/tables/featureFlags";
import { UpsellLinkButton } from "../../../../../../../components/client/toolbar/UpsellBadge";

export type SettingsPanelEditInfoRedesignProps = {
  breachCountByEmailAddress: Record<string, number>;
  emailAddresses: SanitizedEmailAddressRow[];
  isEligibleForPremium: boolean;
  subscriber: SubscriberRow;
  enabledFeatureFlags: FeatureFlagName[];
  user: Session["user"];
  data?: SubscriberEmailPreferencesOutput;
  profileData?: OnerepProfileRow;
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
    first_names,
    middle_names,
    last_names,
    date_of_birth,
    phone_numbers,
    addresses,
  } = profileData;
  const dateOfBirthString = date_of_birth.toLocaleDateString(getLocale(l10n), {
    dateStyle: "short",
    timeZone: "UTC",
  });
  const additionalNamesCount =
    first_names.length + middle_names.length + last_names.length;
  const { city, state } = addresses[0];
  return (
    <section className={styles.section}>
      <div>
        <h4>{l10n.getString("settings-details-about-you-header")}</h4>
        <p>{l10n.getString("settings-details-about-you-description")}</p>
      </div>
      <ul className="noList">
        <li>
          <div className={styles.detailLabel}>
            {l10n.getString("settings-details-about-you-name-label")}
          </div>
          <div className={styles.detailContent}>
            {`${first_name}${middle_name ? ` ${middle_name} ` : " "}${last_name}`}
            {additionalNamesCount > 0 && (
              <span className={styles.detailMore}>
                {l10n.getString("settings-details-about-you-more-indicator", {
                  moreCount: additionalNamesCount,
                })}
              </span>
            )}
          </div>
        </li>
        <li>
          <div className={styles.detailLabel}>
            {l10n.getString("settings-details-about-you-date-of-birth-label")}
          </div>
          <div className={styles.detailContent}>{dateOfBirthString}</div>
        </li>
        {phone_numbers.length > 0 && (
          <li>
            <div className={styles.detailLabel}>
              {l10n.getString("settings-details-about-you-phone-label")}
            </div>
            <div className={styles.detailContent}>
              {formatPhone(phone_numbers[0])}
              {phone_numbers.length > 1 && (
                <span className={styles.detailMore}>
                  {l10n.getString("settings-details-about-you-more-indicator", {
                    moreCount: phone_numbers.length - 1,
                  })}
                </span>
              )}
            </div>
          </li>
        )}
        <li>
          <div className={styles.detailLabel}>
            {l10n.getString("settings-details-about-you-location-label")}
          </div>
          <div className={styles.detailContent}>
            {`${city}, ${state}`}
            {addresses.length > 1 && (
              <span className={styles.detailMore}>
                {l10n.getString("settings-details-about-you-more-indicator", {
                  moreCount: addresses.length - 1,
                })}
              </span>
            )}
          </div>
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
              link_id: "settings_edit_info_add_details",
            },
          }}
        >
          {l10n.getString("settings-details-about-you-button-label")}
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
            <MonitoredEmail
              emailAddress={emailAddress}
              actions={props.actions}
            />
          </li>
        ))}
      </ul>
      <span className={styles.addButton}>
        {hasMaxEmailAddresses && (
          <EmailAddressAdderRedesign
            maxNumEmailAddresses={maxNumEmailAddresses}
            onAddEmail={props.actions.onAddEmail}
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
      <SettingsDetailsSavedNotification />
      <div className={styles.header}>
        <div>
          <h3>{l10n.getString("settings-tab-label-update-scan-info")}</h3>
          {hasPremium(props.user) && (
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
      {hasPremium(props.user) && props.profileData && (
        <ProfileInfoSection profileData={props.profileData} />
      )}
      <MonitoredEmailAddressesSection {...props} />
      {props.isEligibleForPremium && !hasPremium(props.user) && (
        <div className={styles.upsellLinkContainer}>
          <UpsellLinkButton
            variant="primary"
            small
            enabledFeatureFlags={props.enabledFeatureFlags}
            eventData={{
              button_id: "settings_edit_info_upsell_cta",
            }}
          >
            {l10n.getString("settings-update-scan-info-upsell-button-label")}
          </UpsellLinkButton>
        </div>
      )}
    </>
  );
}

export { SettingsPanelEditInfoRedesign };
