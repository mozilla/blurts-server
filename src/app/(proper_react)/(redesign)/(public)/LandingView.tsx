/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styles from "./LandingView.module.scss";
import { HeroImageAll } from "./HeroImage";
import { ExtendedReactLocalization } from "../../../functions/l10n";
import Image from "next/image";
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
import { FaqSection } from "./Faq";
import { ExperimentData } from "../../../../telemetry/generated/nimbus/experiments";
import { AccountDeletionNotification } from "./AccountDeletionNotification";
import { FeatureFlagName } from "../../../../db/tables/featureFlags";
import { SignUpForm } from "./SignUpForm";

export type Props = {
  l10n: ExtendedReactLocalization;
  countryCode: string;
  experimentData: ExperimentData["Features"];
  enabledFeatureFlags: FeatureFlagName[];
};

export const View = (props: Props) => {
  return (
    <>
      <AccountDeletionNotification />
      <main className={styles.wrapper}>
        <header className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>{props.l10n.getString("landing-all-hero-title")}</h1>
            <p>{props.l10n.getString("landing-all-hero-lead")}</p>

            <SignUpForm
              isHero
              signUpCallbackUrl={`${process.env.SERVER_URL}/user/dashboard`}
              eventId={{
                cta: "clicked_get_scan_header",
                field: "entered_email_address_header",
              }}
              experimentData={props.experimentData}
              labelPosition="bottom"
            />
          </div>
          <div className={styles.heroImage}>
            <HeroImage {...props} />
          </div>
        </header>

        <div className={styles.quoteWrapper}>
          <div className={styles.quote}>
            <h2>
              {props.l10n.getFragment("landing-all-quote", {
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
                {props.l10n.getFragment(
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
                signUpCallbackUrl={`${process.env.SERVER_URL}/user/dashboard`}
                eventId={{
                  cta: "clicked_get_scan_second",
                  field: "entered_email_address_second",
                }}
                experimentData={props.experimentData}
                labelPosition="bottom"
              />
            </span>
            <div className={styles.illustration}>
              <ScanningForExposuresIllustration {...props} />
            </div>
          </div>

          <div className={`${styles.item} ${styles.reverseRow}`}>
            <span>
              <h2>
                {props.l10n.getString("landing-all-value-prop-info-at-risk")}
              </h2>
              <p>
                {props.l10n.getString(
                  "landing-all-value-prop-info-at-risk-description",
                )}
              </p>
              <SignUpForm
                signUpCallbackUrl={`${process.env.SERVER_URL}/user/dashboard`}
                eventId={{
                  cta: "clicked_get_scan_third",
                  field: "entered_email_address_third",
                }}
                experimentData={props.experimentData}
                labelPosition="bottom"
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
            signUpCallbackUrl={`${process.env.SERVER_URL}/user/dashboard`}
            eventId={{
              cta: "clicked_get_scan_fourth",
              field: "entered_email_address_fourth",
            }}
            experimentData={props.experimentData}
            labelPosition="bottom"
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
            <Image src={ForbesLogo} alt="Forbes" />
            <Image src={TechCruchLogo} alt="Tech Crunch" />
            <Image src={PCMagLogo} alt="PC Magazine" />
            <Image src={CNETLogo} alt="CNET" />
            <Image src={GoogleLogo} alt="Google" />
          </div>
        </div>

        <HeresHowWeHelp />

        <FaqSection enabledFeatureFlags={props.enabledFeatureFlags} />

        <div className={styles.signUpEncouragementWrapper}>
          <p className={styles.title}>
            {props.l10n.getString("landing-all-take-back-data")}
          </p>
          <SignUpForm
            signUpCallbackUrl={`${process.env.SERVER_URL}/user/dashboard`}
            eventId={{
              cta: "clicked_get_scan_last",
              field: "entered_email_address_last",
            }}
            experimentData={props.experimentData}
            labelPosition="bottom"
          />
        </div>
      </main>
    </>
  );
};

const HeroImage = (props: Props) => {
  return (
    <HeroImageAll
      className={styles.heroImage}
      l10n={props.l10n}
      aria-hidden={true}
    />
  );
};
