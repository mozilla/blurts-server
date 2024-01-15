/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Session } from "next-auth";
import styles from "./View.module.scss";
import { Toolbar } from "../../../../../../components/client/toolbar/Toolbar";
import { ExtendedReactLocalization } from "../../../../../../hooks/l10n";
import { EmailRow } from "../../../../../../../db/tables/emailAddresses";
import { OpenInNew } from "../../../../../../components/server/Icons";
import { EmailListing } from "./EmailListing";
import { EmailAddressAdder } from "./EmailAddressAdder";
import { AlertAddressForm } from "./AlertAddressForm";
import { CONST_MAX_NUM_ADDRESSES } from "../../../../../../../constants";

export type Props = {
  l10n: ExtendedReactLocalization;
  user: Session["user"];
  monthlySubscriptionUrl: string;
  yearlySubscriptionUrl: string;
  fxaSettingsUrl: string;
  fxaSubscriptionsUrl: string;
  emailAddresses: EmailRow[];
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
                    email={emailAddress}
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
          <hr />
          <div className={styles.cancelSection}>
            <h3>{l10n.getString("settings-cancel-plus-title")}</h3>
            <p>{l10n.getString("settings-cancel-plus-details")}</p>
            <a
              href={props.fxaSubscriptionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {l10n.getString("settings-cancel-plus-link-label")}
              <OpenInNew
                alt={l10n.getString("open-in-new-tab-alt")}
                width="13"
                height="13"
              />
            </a>
          </div>
          <hr />
          <div className={styles.deactivateSection}>
            <h3>{l10n.getString("settings-deactivate-account-title")}</h3>
            <p>{l10n.getString("settings-deactivate-account-info-2")}</p>
            <a
              href={props.fxaSettingsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {l10n.getString("settings-fxa-link-label-3")}
              <OpenInNew
                alt={l10n.getString("open-in-new-tab-alt")}
                width="13"
                height="13"
              />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};
