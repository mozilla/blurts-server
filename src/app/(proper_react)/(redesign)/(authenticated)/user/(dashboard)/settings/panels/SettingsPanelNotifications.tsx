/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { SubscriberRow } from "knex/types/tables";
import { FeatureFlagName } from "../../../../../../../../db/tables/featureFlags";
import { SubscriberEmailPreferencesOutput } from "../../../../../../../../db/tables/subscriber_email_preferences";
import { AlertAddressForm } from "../AlertAddressForm";
import { Session } from "next-auth";

export type SettingsPanelNotificationsProps = {
  enabledFeatureFlags: FeatureFlagName[];
  data: SubscriberEmailPreferencesOutput;
  subscriber: SubscriberRow;
  user: Session["user"];
};

function SettingsPanelNotifications(props: SettingsPanelNotificationsProps) {
  return (
    <AlertAddressForm
      user={props.user}
      subscriber={props.subscriber}
      data={props.data}
      enabledFeatureFlags={props.enabledFeatureFlags}
    />
  );
}

export { SettingsPanelNotifications };
