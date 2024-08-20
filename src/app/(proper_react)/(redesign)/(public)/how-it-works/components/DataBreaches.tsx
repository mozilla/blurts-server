/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import { TelemetryButton } from "../../../../../components/client/TelemetryButton";
import { Resolve } from "../images";
import styles from "../HowItWorksView.module.scss";
import { useL10n } from "../../../../../hooks/l10n";

export const DataBreaches = () => {
  const l10n = useL10n();

  return (
    <section id="data-breach-section" className={styles.sectionWrapper}>
      <div className={styles.intro}>
        <span className={styles.introContent}>
          <h2>
            {l10n.getFragment("how-it-works-page-data-breaches-intro-title", {
              elems: {
                data_breaches: <span className={styles.breachesEmphasis} />,
              },
            })}
          </h2>
          <p>
            {l10n.getString("how-it-works-page-data-breaches-intro-text-1")}
          </p>
          <hr className={styles.horizontalRule} />
        </span>
        <div className={styles.introCTA}>
          <h3>
            {l10n.getString("how-it-works-page-data-breaches-intro-text-2")}
          </h3>
          <div className={styles.sectionCTAButton}>
            <TelemetryButton
              href="/user/dashboard"
              variant="primary"
              onPress={() => {
                void signIn("fxa");
              }}
              event={{
                module: "ctaButton",
                name: "click",
                data: {
                  button_id: "free_scan_first",
                },
              }}
            >
              {l10n.getString(
                "how-it-works-page-data-breaches-intro-cta-button",
              )}
            </TelemetryButton>
          </div>
        </div>
      </div>
      <div className={styles.step}>
        <ul className={styles.stepTextContainer}>
          {/* STEP 1 */}
          <li>
            <h3 className={`${styles.breachesEmphasis} ${styles.stepTitle}`}>
              {l10n.getString("how-it-works-page-data-breaches-step-1-title")}
            </h3>
            <h3 className={styles.stepSubtitle}>
              {l10n.getString(
                "how-it-works-page-data-breaches-step-1-subtitle",
              )}
            </h3>
            <p className={styles.stepBody}>
              {l10n.getString("how-it-works-page-data-breaches-step-1-text")}
            </p>
          </li>
          {/* STEP 2 */}
          <li className={styles.stepGroupTitleAfter1st}>
            <h3
              className={`${styles.breachesEmphasis} ${styles.stepTitle} ${styles.stepGroupTitleAfter1st}`}
            >
              {l10n.getString("how-it-works-page-data-breaches-step-2-title")}
            </h3>
            <h3 className={styles.stepSubtitle}>
              {l10n.getString(
                "how-it-works-page-data-breaches-step-2-subtitle",
              )}
            </h3>
            <p className={styles.stepBody}>
              {l10n.getString("how-it-works-page-data-breaches-step-2-text-1")}
            </p>
            <p className={styles.stepBody}>
              {l10n.getString("how-it-works-page-data-breaches-step-2-text-2")}
            </p>
          </li>
          {/* STEP 3 */}
          <li className={styles.stepGroupTitleAfter1st}>
            <h3 className={`${styles.breachesEmphasis} ${styles.stepTitle}`}>
              {l10n.getString("how-it-works-page-data-breaches-step-3-title")}
            </h3>
            <h3 className={styles.stepSubtitle}>
              {l10n.getString(
                "how-it-works-page-data-breaches-step-3-subtitle",
              )}
            </h3>
            <p className={styles.stepBody}>
              {l10n.getString("how-it-works-page-data-breaches-step-3-text")}
            </p>
          </li>
        </ul>
        <Image src={Resolve} alt="" />
      </div>
      <div className={`${styles.sectionCTAButton} ${styles.breachesCTAButton}`}>
        <TelemetryButton
          href="/user/dashboard"
          variant="primary"
          onPress={() => {
            void signIn("fxa");
          }}
          event={{
            module: "ctaButton",
            name: "click",
            data: {
              button_id: "free_scan_second",
            },
          }}
        >
          {l10n.getString("how-it-works-page-data-breaches-cta-button")}
        </TelemetryButton>
      </div>
    </section>
  );
};
