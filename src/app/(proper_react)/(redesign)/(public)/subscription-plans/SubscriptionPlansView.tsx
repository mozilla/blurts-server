/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { PricingPlansWithBundle } from "../LandingViewRedesign/components/PricingPlansWithBundle";
import { LandingPageProps } from "../LandingViewRedesign";
import styles from "./SubscriptionPlansView.module.scss";

export const SubscriptionPlansView = (props: LandingPageProps) => {
  return (
    <main className={styles.main}>
      <PricingPlansWithBundle {...props} hideFreeCard />
    </main>
  );
};
