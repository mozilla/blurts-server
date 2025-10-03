/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Image from "next/image";
import {
  RemoveStep1,
  RemoveStep2,
  RemoveStep3,
  NameIcon,
  LocationIcon,
  DOBIcon,
} from "../images";
import styles from "../HowItWorksView.module.scss";
import { TelemetryButton } from "../../../../../components/client/TelemetryButton";
import { useL10n } from "../../../../../hooks/l10n";

export const DataBrokers = ({
  monthlySubscriptionUrl,
}: {
  monthlySubscriptionUrl: string;
}) => {
  const l10n = useL10n();

  return (
    <section
      id="data-brokers-section"
      className={`${styles.sectionWrapper} ${styles.grayBG}`}
    >
      <div className={styles.intro}>
        <span className={styles.introContent}>
          <h2>
            {l10n.getFragment("how-it-works-page-data-brokers-intro-title", {
              elems: {
                data_brokers: <span className={styles.brokersEmphasis} />,
              },
            })}
          </h2>
          <p>{l10n.getString("how-it-works-page-data-brokers-intro-text-1")}</p>
          <hr className={styles.horizontalRule} />
        </span>
        <div className={styles.introCTA}>
          <h3>
            {l10n.getString("how-it-works-page-data-brokers-intro-text-2")}
          </h3>
          <div className={styles.sectionCTAButton}>
            <TelemetryButton
              variant="primary"
              href={monthlySubscriptionUrl}
              event={{
                module: "ctaButton",
                name: "click",
                data: {
                  button_id: "intent_to_purchase_first",
                },
              }}
            >
              {l10n.getString(
                "how-it-works-page-data-brokers-intro-cta-button",
              )}
            </TelemetryButton>
          </div>
        </div>
      </div>
      <ul>
        {/* STEP 1 */}
        <li className={styles.step}>
          <div className={styles.stepTextContainer}>
            <h3 className={`${styles.brokersEmphasis} ${styles.stepTitle}`}>
              {l10n.getString("how-it-works-page-data-brokers-step-1-title")}
            </h3>
            <h3 className={styles.stepSubtitle}>
              {l10n.getString("how-it-works-page-data-brokers-step-1-subtitle")}
            </h3>
            <div className={styles.privateInfoRow}>
              <Image src={NameIcon} alt="" />
              <p className={styles.privateInfoText}>
                {l10n.getFragment(
                  "how-it-works-page-data-brokers-step-1-name",
                  {
                    elems: {
                      name: <span className={styles.boldedText} />,
                    },
                  },
                )}
              </p>
            </div>
            <div className={styles.privateInfoRow}>
              <Image src={LocationIcon} alt="" />
              <p className={styles.privateInfoText}>
                {l10n.getFragment(
                  "how-it-works-page-data-brokers-step-1-location",
                  {
                    elems: {
                      location: <span className={styles.boldedText} />,
                    },
                  },
                )}
              </p>
            </div>
            <div className={styles.privateInfoRow}>
              <Image src={DOBIcon} alt="" />
              <p className={styles.privateInfoText}>
                {l10n.getFragment("how-it-works-page-data-brokers-step-1-dob", {
                  elems: {
                    dob: <span className={styles.boldedText} />,
                  },
                })}
              </p>
            </div>
            <p className={styles.stepBody}>
              {l10n.getString(
                "how-it-works-page-data-brokers-step-1-closing-text",
              )}
            </p>
          </div>
          <Image src={RemoveStep1} alt="step 1 screenshot" />
        </li>
        {/* STEP 2 */}
        <li className={`${styles.step} ${styles.reversedStep}`}>
          <Image src={RemoveStep2} alt="" />
          <div className={styles.stepTextContainer}>
            <h3 className={`${styles.brokersEmphasis} ${styles.stepTitle}`}>
              {l10n.getString("how-it-works-page-data-brokers-step-2-title")}
            </h3>
            <h3 className={styles.stepSubtitle}>
              {l10n.getString("how-it-works-page-data-brokers-step-2-subtitle")}
            </h3>
            <p className={styles.stepBody}>
              {l10n.getString("how-it-works-page-data-brokers-step-2-text-1")}
            </p>
            <p className={styles.stepBody}>
              {l10n.getString("how-it-works-page-data-brokers-step-2-text-2")}
            </p>
          </div>
        </li>
        {/* STEP 3 */}
        <li className={styles.step}>
          <div className={styles.stepTextContainer}>
            <h3 className={`${styles.brokersEmphasis} ${styles.stepTitle}`}>
              {l10n.getString("how-it-works-page-data-brokers-step-3-title")}
            </h3>
            <h3 className={styles.stepSubtitle}>
              {l10n.getString("how-it-works-page-data-brokers-step-3-subtitle")}
            </h3>
            <p className={styles.stepBody}>
              {l10n.getString("how-it-works-page-data-brokers-step-3-text-1")}
            </p>
            <p className={styles.stepBody}>
              {l10n.getString("how-it-works-page-data-brokers-step-3-text-2")}
            </p>
          </div>
          <Image src={RemoveStep3} alt="" />
        </li>
      </ul>
      <div className={styles.sectionCTAButton}>
        <TelemetryButton
          variant="primary"
          href={monthlySubscriptionUrl}
          event={{
            module: "ctaButton",
            name: "click",
            data: {
              button_id: "intent_to_purchase_second",
            },
          }}
        >
          {l10n.getString("how-it-works-page-data-brokers-intro-cta-button")}
        </TelemetryButton>
      </div>
    </section>
  );
};
