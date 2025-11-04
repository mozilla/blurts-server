/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactNode } from "react";
import styles from "./Toolbar.module.scss";
import { UserMenu } from "./UserMenu";
import { Session } from "next-auth";
import { AppPicker } from "./AppPicker";
import { UpsellBadge } from "./UpsellBadge";
import { ExperimentData } from "../../../../telemetry/generated/nimbus/experiments";
import { FeatureFlagName } from "../../../../db/tables/featureFlags";
import { AnnouncementDialog } from "./AnnouncementDialog";
import { UserAnnouncementWithDetails } from "../../../../db/tables/user_announcements";

export type Props = {
  user: Session["user"];
  monthlySubscriptionUrl: string;
  subscriptionBillingAmount: {
    monthly: number;
  };
  fxaSettingsUrl: string;
  lastScanDate: Date | null;
  experimentData: ExperimentData["Features"];
  enabledFeatureFlags: FeatureFlagName[];
  children?: ReactNode;
  announcements: UserAnnouncementWithDetails[] | null;
};

export const Toolbar = (props: Props) => {
  return (
    <nav className={`${styles.toolbar} ${styles.hasBackground}`}>
      <div className={styles.start}>{props.children}</div>
      <div className={styles.end}>
        <UpsellBadge
          lastScanDate={props.lastScanDate}
          experimentData={props.experimentData}
          enabledFeatureFlags={props.enabledFeatureFlags}
        />
        {/* c8 ignore next 3 */}
        {props.announcements && (
          <AnnouncementDialog announcements={props.announcements} />
        )}
        <AppPicker />
        {props.user && (
          <UserMenu user={props.user} fxaSettingsUrl={props.fxaSettingsUrl} />
        )}
      </div>
    </nav>
  );
};
