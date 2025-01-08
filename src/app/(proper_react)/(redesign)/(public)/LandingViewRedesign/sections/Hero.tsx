/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { LandingPageProps } from "..";
import { FreeScanCta } from "../../FreeScanCta";
import { ScanLimit } from "../../ScanLimit";
import {
  ClockIconBig,
  HeartIconBig,
  ShieldIconBig,
} from "../../../../../components/server/Icons";
import styles from "./Hero.module.scss";

export const Hero = (props: LandingPageProps) => {
  return (
    <header className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroTitle}>
          <h1>
            {props.l10n.getFragment("landing-redesign-hero-title", {
              elems: { b: <b /> },
            })}
          </h1>
          <p>{props.l10n.getString("landing-redesign-hero-lead")}</p>
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
              placeholder={props.l10n.getString(
                "landing-redesign-hero-cta-placeholder",
              )}
              buttonLabel={props.l10n.getString(
                "landing-redesign-hero-cta-button-label",
              )}
              hasFloatingLabel
            />
          )}
        </div>
        <div className={styles.heroBanner}>
          <dl className={styles.heroBannerContent}>
            <span className={styles.heroBannerItem}>
              <ShieldIconBig alt="" />
              <dt>
                {props.l10n.getString(
                  "landing-redesign-hero-list-item-title-one",
                )}
              </dt>
              <dd>
                {props.l10n.getString(
                  "landing-redesign-hero-list-item-description-one",
                )}
              </dd>
            </span>
            <span className={styles.heroBannerItem}>
              <ClockIconBig alt="" />
              <dt>
                {props.l10n.getString(
                  "landing-redesign-hero-list-item-title-two",
                )}
              </dt>
              <dd>
                {props.l10n.getString(
                  "landing-redesign-hero-list-item-description-two",
                )}
              </dd>
            </span>
            <span className={styles.heroBannerItem}>
              <HeartIconBig alt="" />
              <dt>
                {props.l10n.getString(
                  "landing-redesign-hero-list-item-title-three",
                )}
              </dt>
              <dd>
                {props.l10n.getString(
                  "landing-redesign-hero-list-item-description-three",
                )}
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
            <stop stopColor="#702DCE" />
            <stop offset="1" stopColor="#4B14A6" />
          </linearGradient>
        </defs>
      </svg>
    </header>
  );
};
