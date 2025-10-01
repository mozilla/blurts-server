/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import { OnerepProfileRow, SubscriberRow } from "knex/types/tables";
import { EditProfileForm } from "./EditProfileForm";
import { SanitizedEmailAddressRow } from "../../../../../../../../functions/server/sanitize";
import { hasPremium } from "../../../../../../../../functions/universal/user";
import { useL10n } from "../../../../../../../../hooks/l10n";
import { SubscriberEmailPreferencesOutput } from "../../../../../../../../../db/tables/subscriber_email_preferences";
import { type onHandleUpdateProfileData } from "../../actions";

export type SettingsPanelEditProfileProps = {
  breachCountByEmailAddress: Record<string, number>;
  data?: SubscriberEmailPreferencesOutput;
  emailAddresses: SanitizedEmailAddressRow[];
  subscriber: SubscriberRow;
  user: Session["user"];
  profileData?: OnerepProfileRow;
  actions: {
    onHandleUpdateProfileData: typeof onHandleUpdateProfileData;
  };
};

function SettingsPanelEditProfile(props: SettingsPanelEditProfileProps) {
  const l10n = useL10n();
  const router = useRouter();
  if (!hasPremium(props.user) || typeof props.profileData === "undefined") {
    router.push("/user/settings/edit-info");
    return;
  }

  return (
    <>
      <h3>{l10n.getString("settings-details-about-you-header")}</h3>
      <section>
        <EditProfileForm
          profileData={props.profileData}
          actions={{
            onHandleUpdateProfileData: props.actions.onHandleUpdateProfileData,
          }}
        />
      </section>
    </>
  );
}

export { SettingsPanelEditProfile };
