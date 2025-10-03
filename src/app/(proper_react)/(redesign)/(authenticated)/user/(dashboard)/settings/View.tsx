/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Session } from "next-auth";
import {
  EmailAddressRow,
  OnerepProfileRow,
  SubscriberRow,
} from "knex/types/tables";
import styles from "./View.module.scss";
import { Toolbar } from "../../../../../../components/client/toolbar/Toolbar";
import { ExtendedReactLocalization } from "../../../../../../functions/l10n";
import { CONST_SETTINGS_TAB_SLUGS } from "../../../../../../../constants";
import { sanitizeEmailRow } from "../../../../../../functions/server/sanitize";
import { FeatureFlagName } from "../../../../../../../db/tables/featureFlags";
import { ExperimentData } from "../../../../../../../telemetry/generated/nimbus/experiments";
import { SubscriberEmailPreferencesOutput } from "../../../../../../../db/tables/subscriber_email_preferences";
import { SettingsContent } from "./SettingsContent";
import {
  type onRemoveEmail,
  type onAddEmail,
  type onDeleteAccount,
  onHandleUpdateProfileData,
} from "./actions";
import { UserAnnouncementWithDetails } from "../../../../../../../db/tables/user_announcements";

export type TabType = (typeof CONST_SETTINGS_TAB_SLUGS)[number];

export type Props = {
  l10n: ExtendedReactLocalization;
  user: Session["user"];
  subscriber: SubscriberRow;
  monthlySubscriptionUrl: string;
  subscriptionBillingAmount: {
    monthly: number;
  };
  fxaSettingsUrl: string;
  fxaSubscriptionsUrl: string;
  emailAddresses: EmailAddressRow[];
  breachCountByEmailAddress: Record<string, number>;
  enabledFeatureFlags: FeatureFlagName[];
  experimentData: ExperimentData["Features"];
  isEligibleForPremium: boolean;
  actions: {
    onAddEmail: typeof onAddEmail;
    onRemoveEmail: typeof onRemoveEmail;
    onDeleteAccount: typeof onDeleteAccount;
    onHandleUpdateProfileData: typeof onHandleUpdateProfileData;
  };
  userAnnouncements: UserAnnouncementWithDetails[];
  isMonthlySubscriber: boolean;
  data?: SubscriberEmailPreferencesOutput;
  profileData?: OnerepProfileRow;
  lastScanDate?: Date;
  activeTab?: TabType;
};

export const SettingsView = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <Toolbar
        user={props.user}
        monthlySubscriptionUrl={props.monthlySubscriptionUrl}
        subscriptionBillingAmount={props.subscriptionBillingAmount}
        fxaSettingsUrl={props.fxaSettingsUrl}
        lastScanDate={props.lastScanDate ?? null}
        experimentData={props.experimentData}
        enabledFeatureFlags={props.enabledFeatureFlags}
        announcements={props.userAnnouncements}
      />
      <SettingsContent
        activeTab={props.activeTab}
        breachCountByEmailAddress={props.breachCountByEmailAddress}
        data={props.data}
        emailAddresses={props.emailAddresses.map(sanitizeEmailRow)}
        enabledFeatureFlags={props.enabledFeatureFlags}
        experimentData={props.experimentData}
        fxaSubscriptionsUrl={props.fxaSubscriptionsUrl}
        isMonthlySubscriber={props.isMonthlySubscriber}
        subscriber={props.subscriber}
        user={props.user}
        profileData={props.profileData}
        isEligibleForPremium={props.isEligibleForPremium}
        actions={props.actions}
      />
    </div>
  );
};
