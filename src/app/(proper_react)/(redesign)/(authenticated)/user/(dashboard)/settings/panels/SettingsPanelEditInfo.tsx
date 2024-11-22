/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { SubscriberRow } from "knex/types/tables";
import { CONST_MAX_NUM_ADDRESSES } from "../../../../../../../../constants";
import { SubscriberEmailPreferencesOutput } from "../../../../../../../../db/tables/subscriber_email_preferences";
import { useL10n } from "../../../../../../../hooks/l10n";
import { EmailAddressAdder } from "../EmailAddressAdder";
import { EmailListing } from "../EmailListing";
import { FeatureFlagName } from "../../../../../../../../db/tables/featureFlags";
import { Session } from "next-auth";
import { SanitizedEmailAddressRow } from "../../../../../../../functions/server/sanitize";

export type SettingsPanelEditInfoProps = {
  breachCountByEmailAddress: Record<string, number>;
  data: SubscriberEmailPreferencesOutput;
  emailAddresses: SanitizedEmailAddressRow[];
  enabledFeatureFlags: FeatureFlagName[];
  subscriber: SubscriberRow;
  user: Session["user"];
};

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
      <ul>
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
      {hasMaxEmailAddresses && <EmailAddressAdder />}
    </>
  );
}

export { SettingsPanelEditInfo };
