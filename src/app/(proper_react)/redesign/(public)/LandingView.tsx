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
import Image from "next/image";
import ProgressCardImage from "./value-prop-images/progress-card.svg";
import {
  LeakedPasswordExampleIllustration,
  ScanningForExposuresIllustration,
} from "./WalkthroughImages";
import { TelemetryLink } from "./TelemetryLink";

export type Props = {
  eligibleForPremium: boolean;
  l10n: ExtendedReactLocalization;
  countryCode: string;
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
            isHero
            eligibleForPremium={props.eligibleForPremium}
            signUpCallbackUrl={`${process.env.SERVER_URL}/redesign/user/dashboard/`}
            eventId={{
              cta: "clicked_get_scan_header",
              field: "entered_email_address_header",
            }}
          />
        </div>
        <div className={styles.heroImage}>
          <HeroImage {...props} />
        </div>
      </header>

      <div className={styles.quoteWrapper}>
        <div className={styles.quote}>
          <b>
            {props.eligibleForPremium
              ? props.l10n.getFragment("landing-premium-quote", {
                  elems: {
                    data_brokers: <em />,
                  },
                })
              : props.l10n.getFragment("landing-all-quote", {
                  elems: {
                    data_breaches: <em />,
                  },
                })}
          </b>
        </div>
      </div>

      <div className={styles.valuePropositionWrapper}>
        <div className={`${styles.item} ${styles.grayBg}`}>
          <span>
            <h2>
              {props.l10n.getString("landing-all-value-prop-fix-exposures")}
            </h2>
            <p>
              {props.eligibleForPremium
                ? props.l10n.getFragment(
                    "landing-premium-value-prop-fix-exposures-description",
                    {
                      elems: {
                        privacy_link: (
                          <TelemetryLink
                            eventData={{ button_id: "privacy_information" }}
                            href="https://www.mozilla.org/en-US/firefox/privacy/"
                            target="_blank"
                          />
                        ),
                      },
                    },
                  )
                : props.l10n.getFragment(
                    "landing-all-value-prop-fix-exposures-description",
                    {
                      elems: {
                        privacy_link: (
                          <TelemetryLink
                            eventData={{ button_id: "privacy_information" }}
                            href="https://www.mozilla.org/en-US/firefox/privacy/"
                            target="_blank"
                          />
                        ),
                      },
                    },
                  )}
            </p>
            <SignUpForm
              eligibleForPremium={props.eligibleForPremium}
              signUpCallbackUrl={`${process.env.SERVER_URL}/redesign/user/dashboard/`}
              eventId={{
                cta: "clicked_get_scan_second",
                field: "entered_email_address_second",
              }}
            />
          </span>
          {/* TODO: Update this illustration with the US version when design is unblocked */}
          <div className={styles.illustration}>
            {props.eligibleForPremium ? (
              <Image
                src={ProgressCardImage}
                alt={props.l10n.getString(
                  "landing-premium-value-prop-progress-card-illustration-alt",
                )}
                data-testid="progress-card-image"
              />
            ) : (
              <ScanningForExposuresIllustration {...props} />
            )}
          </div>
        </div>

        <div className={`${styles.item} ${styles.reverseRow}`}>
          <span>
            <h2>
              {props.l10n.getString("landing-all-value-prop-info-at-risk")}
            </h2>
            <p>
              {props.eligibleForPremium
                ? props.l10n.getFragment(
                    "landing-premium-value-prop-info-at-risk-description",
                    {
                      elems: {
                        exposure_type_list: (
                          <span className={styles.exposureTypeList} />
                        ),
                      },
                    },
                  )
                : props.l10n.getString(
                    "landing-all-value-prop-info-at-risk-description",
                  )}
            </p>
            <SignUpForm
              eligibleForPremium={props.eligibleForPremium}
              signUpCallbackUrl={`${process.env.SERVER_URL}/redesign/user/dashboard/`}
              eventId={{
                cta: "clicked_get_scan_third",
                field: "entered_email_address_third",
              }}
            />
          </span>
          <div className={styles.illustration}>
            <LeakedPasswordExampleIllustration {...props} />
          </div>
        </div>
      </div>

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
    <div className={styles.plans}>
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
    </div>
  );
};
