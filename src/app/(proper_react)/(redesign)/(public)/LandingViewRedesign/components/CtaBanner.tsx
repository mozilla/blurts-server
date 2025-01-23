/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { LandingPageProps } from "..";
import { ArrowIcon } from "../../../../../components/server/Icons";
import { FreeScanCta } from "../../FreeScanCta";
import { ScanLimit } from "../../ScanLimit";
import styles from "./CtaBanner.module.scss";

export const CtaBanner = (props: LandingPageProps) => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerHeader}>
        <h3>
          <b>
            {props.l10n.getFragment("landing-redesign-banner-cta-header", {
              elems: { b: <strong /> },
            })}
          </b>
        </h3>
        <p>{props.l10n.getString("landing-redesign-banner-cta-subheader")}</p>
      </div>
      {props.eligibleForPremium && props.scanLimitReached ? (
        <ScanLimit />
      ) : (
        <FreeScanCta
          scanLimitReached={props.scanLimitReached}
          eligibleForPremium={props.eligibleForPremium}
          signUpCallbackUrl={`${process.env.SERVER_URL}/user/dashboard`}
          eventId={{
            cta: "clicked_get_scan_cta_banner",
          }}
          experimentData={props.experimentData}
          ctaLabel={
            <>
              {props.l10n.getString("landing-redesign-banner-cta-button-label")}
              <ArrowIcon alt="" />
            </>
          }
          showCtaOnly
        />
      )}
    </div>
  );
};
