/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ExperimentData } from "../../../../telemetry/generated/nimbus/experiments";
import { ExtendedReactLocalization } from "../../../functions/l10n";
import { AccountDeletionNotification } from "./AccountDeletionNotification";
import styles from "./LandingViewRedesign.module.scss";
import { FreeScanCta } from "./FreeScanCta";
import {
  ClockIconBig,
  HeartIconBig,
  ShieldIconBig,
} from "../../../components/server/Icons";
import { ScanLimit } from "./ScanLimit";

export type Props = {
  countryCode: string;
  eligibleForPremium: boolean;
  experimentData: ExperimentData["Features"];
  l10n: ExtendedReactLocalization;
  scanLimitReached: boolean;
};

const HeroSection = (props: Props) => {
  return (
    <header className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroTitle}>
          <h1>
            Find where your personal info is exposed <b>— and take it back</b>
          </h1>
          <p>
            Monitor finds where your info has been exposed, such as your home
            address, phone number, or email, and helps you protect your privacy.
          </p>
        </div>
        <div className={styles.heroCta}>
          {props.eligibleForPremium && props.scanLimitReached ? (
            <ScanLimit />
          ) : (
            <FreeScanCta
              scanLimitReached={props.scanLimitReached}
              eligibleForPremium={props.eligibleForPremium}
              signUpCallbackUrl={`${process.env.SERVER_URL}/user/dashboard`}
              eventId={{
                cta: "clicked_get_scan_header",
                field: "entered_email_address_header",
              }}
              experimentData={props.experimentData}
              placeholder="Enter your email address to start your free account"
              buttonLabel="Get started"
            />
          )}
        </div>
        <div className={styles.heroBanner}>
          <dl className={styles.heroBannerContent}>
            <span className={styles.heroBannerItem}>
              <ShieldIconBig alt="" />
              <dt>Monitor works for you around the clock</dt>
              <dd>
                Get data breach monitoring, account protection guidance, and
                automatic removal from data broker sites.
              </dd>
            </span>
            <span className={styles.heroBannerItem}>
              <ClockIconBig alt="" />
              <dt>Saves you up to 50 hours annually</dt>
              <dd>
                Monitor simplifies the time-consuming task of removing your
                information from websites that sell or share it.
              </dd>
            </span>
            <span className={styles.heroBannerItem}>
              <HeartIconBig alt="" />
              <dt>Over 10 million users trust Monitor</dt>
              <dd>
                Join the Monitor community and start taking back control of your
                personal privacy online.
              </dd>
            </span>
          </dl>
        </div>
      </div>
      <svg
        className={styles.heroBackground}
        viewBox="0 0 1760 764"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="693"
          cy="681"
          r="361"
          fill="url(#paint0_linear_544_10042)"
        />
        <circle cx="-42.5" cy="59.5" r="241.5" fill="#511AAB" />
        <circle cx="1601.5" cy="7.5" r="293.5" fill="#8137E1" />
        <circle cx="1486" cy="915" r="234" fill="#7F37DD" />
        <defs>
          <linearGradient
            id="paint0_linear_544_10042"
            x1="1165.5"
            y1="587.017"
            x2="290.5"
            y2="585.017"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#702DCE" />
            <stop offset="1" stop-color="#4B14A6" />
          </linearGradient>
        </defs>
      </svg>
    </header>
  );
};

export const View = (props: Props) => {
  return (
    <>
      <AccountDeletionNotification />
      <main className={styles.wrapper}>
        <HeroSection {...props} />
      </main>
    </>
  );
};
