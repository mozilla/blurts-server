/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styles from "./LandingView.module.scss";
import { HeroImageAll, HeroImagePremium } from "./HeroImage";
import { SignUpForm } from "./SignUpForm";
import { ExtendedReactLocalization } from "../../../hooks/l10n";
import { PlansTable } from "./PlansTable";
import { useId } from "react";
import getPremiumSubscriptionUrl from "../../../functions/server/getPremiumSubscriptionUrl";

export type Props = {
  eligibleForPremium: boolean;
  l10n: ExtendedReactLocalization;
};

export const View = (props: Props) => {
  return (
    <main className={styles.wrapper}>
      <nav className={styles.nav}>
        <h1>{props.l10n.getString("public-nav-name")}</h1>
      </nav>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>{props.l10n.getString("landing-all-hero-title")}</h1>
          <p>
            {props.l10n.getString(
              props.eligibleForPremium
                ? "landing-premium-hero-lead"
                : "landing-all-hero-lead",
            )}
          </p>
          <SignUpForm
            eligibleForPremium={props.eligibleForPremium}
            signUpCallbackUrl={`${process.env.SERVER_URL}/redesign/user/dashboard/`}
          />
        </div>
        <div className={styles.heroImage}>
          <HeroImage {...props} />
        </div>
      </header>
      <Plans {...props} />
    </main>
  );
};

const HeroImage = (props: Props) => {
  if (!props.eligibleForPremium) {
    return (
      <HeroImageAll
        className={styles.heroImage}
        l10n={props.l10n}
        aria-hidden={true}
      />
    );
  }

  return (
    <>
      <HeroImagePremium
        className={styles.heroImage}
        l10n={props.l10n}
        aria-hidden={true}
      />
      <div role="img" aria-hidden={true} className={styles.heroImageBadge}>
        <b className={styles.nr}>46</b>
        <span className={styles.description}>
          {props.l10n.getString(
            "landing-premium-hero-image-removal-badge-label",
          )}
        </span>
      </div>
    </>
  );
};

const Plans = (props: Props) => {
  const headingId = useId();

  if (!props.eligibleForPremium) {
    return null;
  }

  return (
    <section className={styles.plans}>
      <h2 id={headingId} className={styles.planName}>
        {props.l10n.getString("landing-premium-plans-heading")}
      </h2>
      <p className={styles.lead}>
        {props.l10n.getString("landing-premium-plans-lead")}
      </p>
      <PlansTable
        aria-labelledby={headingId}
        premiumSubscriptionUrl={{
          monthly: getPremiumSubscriptionUrl({ type: "monthly" }),
          yearly: getPremiumSubscriptionUrl({ type: "yearly" }),
        }}
      />
    </section>
  );
};
