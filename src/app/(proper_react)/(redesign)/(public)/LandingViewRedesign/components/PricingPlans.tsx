/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { PricingPlanList } from "./PricingPlanList";
import type { LandingPageProps } from "..";
import styles from "./PricingPlans.module.scss";

export const PricingPlans = (
  props: LandingPageProps & {
    hideFreeCard?: boolean;
  },
) => (
  <div id="pricing" className={styles.content}>
    <div className={styles.header}>
      {props.l10n.getString(
        "landing-redesign-pricing-plans-bundle-section-description",
      )}
    </div>
    <PricingPlanList
      premiumSubscriptionUrl={props.premiumSubscriptionUrl}
      subscriptionBillingAmount={props.subscriptionBillingAmount}
      scanLimitReached={props.scanLimitReached}
      experimentData={props.experimentData}
      eligibleForPremium={props.eligibleForPremium}
      enabledFeatureFlags={props.enabledFeatureFlags}
      hideFreeCard={props.hideFreeCard}
    />
  </div>
);
