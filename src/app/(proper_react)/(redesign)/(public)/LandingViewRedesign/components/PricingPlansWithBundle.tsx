/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { useId } from "react";
import { PricingPlanListWithBundle } from "./PricingPlanListWithBundle";
import type { LandingPageProps } from "..";
import styles from "./PricingPlansWithBundle.module.scss";

export const PricingPlansWithBundle = (props: LandingPageProps) => {
  const headingId = useId();

  return (
    <div id="pricing" className={styles.content}>
      <div className={styles.header}>
        <h3 id={headingId}>
          <b>
            {props.l10n.getString(
              "landing-redesign-pricing-plans-section-title",
            )}
          </b>
        </h3>
        <p>
          {props.l10n.getString(
            "landing-redesign-pricing-plans-bundle-section-description",
          )}
        </p>
      </div>
      <PricingPlanListWithBundle
        aria-labelledby={headingId}
        premiumSubscriptionUrl={props.premiumSubscriptionUrl}
        subscriptionBillingAmount={props.subscriptionBillingAmount}
        scanLimitReached={props.scanLimitReached}
        experimentData={props.experimentData}
        eligibleForPremium={props.eligibleForPremium}
        enabledFeatureFlags={props.enabledFeatureFlags}
        productBundleUrl={props.bundleProductUrl}
      />
    </div>
  );
};
