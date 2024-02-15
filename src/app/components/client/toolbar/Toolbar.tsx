/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactNode } from "react";
import styles from "./Toolbar.module.scss";
import { UserMenu } from "./UserMenu";
import { Session } from "next-auth";
import { AppPicker } from "./AppPicker";
import { UpsellBadge } from "../../client/UpsellBadge";

export type Props = {
  user: Session["user"];
  monthlySubscriptionUrl: string;
  yearlySubscriptionUrl: string;
  subscriptionBillingAmount: {
    yearly: number;
    monthly: number;
  };
  fxaSettingsUrl: string;
  children?: ReactNode;
};

export const Toolbar = (props: Props) => {
  return (
    <nav className={styles.toolbar}>
      <div className={styles.start}>{props.children}</div>
      <div className={styles.end}>
        <UpsellBadge
          monthlySubscriptionUrl={props.monthlySubscriptionUrl}
          yearlySubscriptionUrl={props.yearlySubscriptionUrl}
          subscriptionBillingAmount={props.subscriptionBillingAmount}
        />
        <AppPicker />
        {props.user && (
          <UserMenu user={props.user} fxaSettingsUrl={props.fxaSettingsUrl} />
        )}
      </div>
    </nav>
  );
};
