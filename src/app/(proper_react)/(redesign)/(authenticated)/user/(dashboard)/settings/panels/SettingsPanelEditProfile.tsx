/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import { OnerepProfileRow, SubscriberRow } from "knex/types/tables";
import { SubscriberEmailPreferencesOutput } from "../../../../../../../../db/tables/subscriber_email_preferences";
import { SanitizedEmailAddressRow } from "../../../../../../../functions/server/sanitize";
import styles from "./SettingsPanelEditProfile.module.scss";

export type SettingsPanelEditProfileProps = {
  breachCountByEmailAddress: Record<string, number>;
  data?: SubscriberEmailPreferencesOutput;
  emailAddresses: SanitizedEmailAddressRow[];
  subscriber: SubscriberRow;
  user: Session["user"];
  profileData?: OnerepProfileRow;
};

function SettingsPanelEditProfile(props: SettingsPanelEditProfileProps) {
  const router = useRouter();
  if (!props.profileData) {
    router.push("/user/settings/edit-info");
  }

  return (
    <div className={styles.panelContent}>
      <h3>{"Details about you"}</h3>
      <details>
        <summary>props</summary>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </details>
    </div>
  );
}

export { SettingsPanelEditProfile };
