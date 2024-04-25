/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styles from "./LandingView.module.scss";
import { HeroImageAll, HeroImagePremium } from "./HeroImage";
import { SignUpForm } from "./SignUpForm";
import { ExtendedReactLocalization } from "../../../hooks/l10n";
import { PlansTable } from "./PlansTable";
import { useId } from "react";
import {
  getSubscriptionBillingAmount,
  getPremiumSubscriptionUrl,
} from "../../../functions/server/getPremiumSubscriptionInfo";
import Image from "next/image";
import ProgressCardImage from "./value-prop-images/progress-card.png";
import {
  LeakedPasswordExampleIllustration,
  ScanningForExposuresIllustration,
} from "./WalkthroughImages";
import CNETLogo from "./social-proof-images/cnet.svg";
import ForbesLogo from "./social-proof-images/forbes.svg";
import GoogleLogo from "./social-proof-images/google.svg";
import PCMagLogo from "./social-proof-images/pcmag.svg";
import TechCruchLogo from "./social-proof-images/techcrunch.svg";
import { TelemetryLink } from "../../../components/client/TelemetryLink";
import { HeresHowWeHelp } from "./HeresHowWeHelp";
import { ScanLimit } from "./ScanLimit";
import { FaqSection } from "./Faq";
import { RebrandAnnouncement } from "./RebrandAnnouncement";
import { FeatureFlagName } from "../../../../db/tables/featureFlags";
import { AccountDeletionNotification } from "./AccountDeletionNotification";

export type Props = {
  eligibleForPremium: boolean;
  l10n: ExtendedReactLocalization;
  countryCode: string;
  scanLimitReached: boolean;
  enabledFlags: FeatureFlagName[];
};

export const View = (props: Props) => {
  return (
    <>
      <AccountDeletionNotification />
      <main className={styles.wrapper}>
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
            {props.eligibleForPremium && props.scanLimitReached ? (
              <ScanLimit />
            ) : (
              <SignUpForm
                scanLimitReached={props.scanLimitReached}
                isHero
                eligibleForPremium={props.eligibleForPremium}
                signUpCallbackUrl={`${process.env.SERVER_URL}/user/dashboard`}
                eventId={{
                  cta: "clicked_get_scan_header",
                  field: "entered_email_address_header",
                }}
              />
            )}
          </div>
          <div className={styles.heroImage}>
            <HeroImage {...props} />
          </div>
        </header>

        <div className={styles.quoteWrapper}>
          <div className={styles.quote}>
            <h2>
              {props.eligibleForPremium
                ? props.l10n.getFragment("landing-premium-quote", {
                    elems: {
                      data_brokers: <span className={styles.emphasis} />,
                    },
                  })
                : props.l10n.getFragment("landing-all-quote", {
                    elems: {
                      data_breaches: <span className={styles.emphasis} />,
                    },
                  })}
            </h2>
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
                              eventData={{ link_id: "privacy_information" }}
                              href="https://www.mozilla.org/firefox/privacy/"
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
                              eventData={{ link_id: "privacy_information" }}
                              href="https://www.mozilla.org/firefox/privacy/"
                              target="_blank"
                            />
                          ),
                        },
                      },
                    )}
              </p>
              <SignUpForm
                scanLimitReached={props.scanLimitReached}
                eligibleForPremium={props.eligibleForPremium}
                signUpCallbackUrl={`${process.env.SERVER_URL}/user/dashboard`}
                eventId={{
                  cta: "clicked_get_scan_second",
                  field: "entered_email_address_second",
                }}
              />
            </span>
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
                scanLimitReached={props.scanLimitReached}
                eligibleForPremium={props.eligibleForPremium}
                signUpCallbackUrl={`${process.env.SERVER_URL}/user/dashboard`}
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

        <div className={styles.signUpEncouragementWrapper}>
          <p className={styles.title}>
            {props.l10n.getString("landing-all-get-started")}
          </p>
          <SignUpForm
            eligibleForPremium={props.eligibleForPremium}
            signUpCallbackUrl={`${process.env.SERVER_URL}/user/dashboard`}
            eventId={{
              cta: "clicked_get_scan_fourth",
              field: "entered_email_address_fourth",
            }}
            scanLimitReached={props.scanLimitReached}
          />
        </div>

        <div className={styles.socialProofWrapper}>
          <h2>
            {props.l10n.getString("landing-all-social-proof-title", {
              num_users: 10,
            })}
          </h2>
          <p className={styles.socialProofDescription}>
            {props.l10n.getString("landing-all-social-proof-description", {
              num_countries: 237,
            })}
          </p>
          <div className={styles.pressLogos}>
            <p className={styles.label}>
              {props.l10n.getString("landing-all-social-proof-press")}
            </p>
            <Image src={ForbesLogo} alt="" />
            <Image src={TechCruchLogo} alt="" />
            <Image src={PCMagLogo} alt="" />
            <Image src={CNETLogo} alt="" />
            <Image src={GoogleLogo} alt="" />
          </div>
        </div>

        {!props.eligibleForPremium && <HeresHowWeHelp />}
        <Plans {...props} />

        <FaqSection isEligibleForPremium={props.eligibleForPremium} />

        <div className={styles.signUpEncouragementWrapper}>
          <p className={styles.title}>
            {props.l10n.getString("landing-all-take-back-data")}
          </p>
          <SignUpForm
            eligibleForPremium={props.eligibleForPremium}
            signUpCallbackUrl={`${process.env.SERVER_URL}/user/dashboard`}
            eventId={{
              cta: "clicked_get_scan_last",
              field: "entered_email_address_last",
            }}
            scanLimitReached={props.scanLimitReached}
          />
        </div>
        {props.enabledFlags.includes("RebrandAnnouncement") && (
          <RebrandAnnouncement />
        )}
      </main>
    </>
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

      {props.eligibleForPremium && props.scanLimitReached && (
        <div className={styles.waitlistSection}>
          <b className={styles.waitlistTitle}>
            {props.l10n.getString("landing-premium-waitlist-section-pt-1")}
            <br />
            {props.l10n.getString("landing-premium-waitlist-section-pt-2")}
          </b>
          <SignUpForm
            eligibleForPremium={props.eligibleForPremium}
            signUpCallbackUrl={`${process.env.SERVER_URL}/user/dashboard`}
            eventId={{
              cta: "intent_to_join_waitlist_third",
            }}
            scanLimitReached={props.scanLimitReached}
          />
        </div>
      )}

      <PlansTable
        aria-labelledby={headingId}
        premiumSubscriptionUrl={{
          monthly: getPremiumSubscriptionUrl({ type: "monthly" }),
          yearly: getPremiumSubscriptionUrl({ type: "yearly" }),
        }}
        subscriptionBillingAmount={getSubscriptionBillingAmount()}
        scanLimitReached={props.scanLimitReached}
      />
    </div>
  );
};
