/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Session } from "next-auth";
import { EmailAddressRow } from "knex/types/tables";
import styles from "./View.module.scss";
import { Toolbar } from "../../../../../../components/client/toolbar/Toolbar";
import { ExtendedReactLocalization } from "../../../../../../hooks/l10n";
import { OpenInNew } from "../../../../../../components/server/Icons";
import { EmailListing } from "./EmailListing";
import { EmailAddressAdder } from "./EmailAddressAdder";
import { AlertAddressForm } from "./AlertAddressForm";
import { CONST_MAX_NUM_ADDRESSES } from "../../../../../../../constants";
import { TelemetryLink } from "../../../../../../components/client/TelemetryLink";
import { hasPremium } from "../../../../../../functions/universal/user";
import { sanitizeEmailRow } from "../../../../../../functions/server/sanitizeEmailRow";

export type Props = {
  l10n: ExtendedReactLocalization;
  user: Session["user"];
  monthlySubscriptionUrl: string;
  yearlySubscriptionUrl: string;
  subscriptionBillingAmount: {
    yearly: number;
    monthly: number;
  };
  fxaSettingsUrl: string;
  fxaSubscriptionsUrl: string;
  emailAddresses: EmailAddressRow[];
  breachCountByEmailAddress: Record<string, number>;
};

export const SettingsView = (props: Props) => {
  const l10n = props.l10n;

  return (
    <div className={styles.wrapper}>
      <Toolbar
        user={props.user}
        monthlySubscriptionUrl={props.monthlySubscriptionUrl}
        yearlySubscriptionUrl={props.yearlySubscriptionUrl}
        subscriptionBillingAmount={props.subscriptionBillingAmount}
        fxaSettingsUrl={props.fxaSettingsUrl}
      />
      <main>
        <header className={styles.title}>
          <h2>{l10n.getString("settings-page-title")}</h2>
        </header>
        <div className={styles.content}>
          <div>
            <h3>{l10n.getString("settings-email-list-title")}</h3>
            <p className={styles.description}>
              {l10n.getString("settings-email-limit-info", {
                limit: CONST_MAX_NUM_ADDRESSES,
              })}
            </p>
          </div>
          <ul className={styles.emailList}>
            <li key="primary">
              <EmailListing
                email={props.user.email}
                breachCount={props.breachCountByEmailAddress[props.user.email]}
              />
            </li>
            {props.emailAddresses.map((emailAddress) => {
              return (
                <li key={emailAddress.email}>
                  <EmailListing
                    email={sanitizeEmailRow(emailAddress)}
                    breachCount={
                      props.breachCountByEmailAddress[emailAddress.email]
                    }
                  />
                </li>
              );
            })}
          </ul>
          <EmailAddressAdder />
          <hr />
          <AlertAddressForm
            defaultSelected={
              props.user.subscriber?.all_emails_to_primary
                ? "primary"
                : "affected"
            }
          />
          {hasPremium(props.user) && (
            <>
              <hr />
              <div className={styles.cancelSection}>
                <h3>{l10n.getString("settings-cancel-plus-title")}</h3>
                <p>{l10n.getString("settings-cancel-plus-details")}</p>
                <TelemetryLink
                  href={props.fxaSubscriptionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  eventData={{
                    link_id: "cancel_plus",
                  }}
                >
                  {l10n.getString("settings-cancel-plus-link-label")}
                  <OpenInNew
                    alt={l10n.getString("open-in-new-tab-alt")}
                    width="13"
                    height="13"
                  />
                </TelemetryLink>
              </div>
            </>
          )}
          <hr />
          <div className={styles.deactivateSection}>
            <h3>{l10n.getString("settings-deactivate-account-title")}</h3>
            <p>{l10n.getString("settings-deactivate-account-info-2")}</p>
            <TelemetryLink
              href={props.fxaSettingsUrl}
              target="_blank"
              rel="noopener noreferrer"
              eventData={{
                link_id: "deactivate_account",
              }}
            >
              {l10n.getString("settings-fxa-link-label-3")}
              <OpenInNew
                alt={l10n.getString("open-in-new-tab-alt")}
                width="13"
                height="13"
              />
            </TelemetryLink>
          </div>
        </div>
      </main>
    </div>
  );
};
