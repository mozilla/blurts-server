/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Image from "next/image";
import { Props } from "../HowItWorksView";
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

export const SectionOne = (props: Props) => {
  const { l10n } = props;

  return (
    <div
      id="data-brokers-section"
      className={`${styles.sectionWrapper} ${styles.grayBG}`}
    >
      <div className={styles.intro}>
        <span className={styles.introContent}>
          <h2>
            {l10n.getFragment("section-1-intro-title", {
              elems: {
                data_brokers: <span className={styles.brokersEmphasis} />,
              },
            })}
          </h2>
          <p>{l10n.getString("section-1-intro-text-1")}</p>
          <hr className={styles.horizontalRule} />
        </span>
        <div className={styles.introCTA}>
          <h3>{l10n.getString("section-1-intro-text-2")}</h3>
          <div className={styles.sectionCTAButton}>
            <TelemetryButton
              variant="primary"
              href="https://accounts.firefox.com/subscriptions/products/prod_OiV9RSaatywSRy?plan=price_1Nv4ODJNcmPzuWtRoYpoFHXd"
              event={{
                module: "ctaButton",
                name: "click",
                data: {
                  button_id: "intent_to_purchase_first",
                },
              }}
            >
              {l10n.getString("section-1-intro-cta-button")}
            </TelemetryButton>
          </div>
        </div>
      </div>
      {/* STEP 1 */}
      <div className={styles.step}>
        <div className={styles.stepTextContainer}>
          <h3 className={`${styles.brokersEmphasis} ${styles.stepTitle}`}>
            {l10n.getString("section-1-step-1-title")}
          </h3>
          <h3 className={styles.stepSubtitle}>
            {l10n.getString("section-1-step-1-subtitle")}
          </h3>
          <div className={styles.privateInfoRow}>
            <Image src={NameIcon} alt="name icon" />
            <p className={styles.privateInfoText}>
              {l10n.getFragment("section-1-step-1-name", {
                elems: {
                  name: <span className={styles.boldedText} />,
                },
              })}
            </p>
          </div>
          <div className={styles.privateInfoRow}>
            <Image src={LocationIcon} alt="location icon" />
            <p className={styles.privateInfoText}>
              {l10n.getFragment("section-1-step-1-location", {
                elems: {
                  location: <span className={styles.boldedText} />,
                },
              })}
            </p>
          </div>
          <div className={styles.privateInfoRow}>
            <Image src={DOBIcon} alt="dob icon" />
            <p className={styles.privateInfoText}>
              {l10n.getFragment("section-1-step-1-dob", {
                elems: {
                  dob: <span className={styles.boldedText} />,
                },
              })}
            </p>
          </div>
          <p className={styles.stepBody}>
            {l10n.getString("section-1-step-1-closing-text")}
          </p>
        </div>
        <Image src={RemoveStep1} alt="step 1 screenshot" />
      </div>
      {/* STEP 2 */}
      <div className={`${styles.step} ${styles.reversedStep}`}>
        <Image src={RemoveStep2} alt="step 2 screenshot" />
        <div className={styles.stepTextContainer}>
          <h3 className={`${styles.brokersEmphasis} ${styles.stepTitle}`}>
            {l10n.getString("section-1-step-2-title")}
          </h3>
          <h3 className={styles.stepSubtitle}>
            {l10n.getString("section-1-step-2-subtitle")}
          </h3>
          <p className={styles.stepBody}>
            {l10n.getString("section-1-step-2-text-1")}
          </p>
          <p className={styles.stepBody}>
            {l10n.getString("section-1-step-2-text-2")}
          </p>
        </div>
      </div>
      {/* STEP 3 */}
      <div className={styles.step}>
        <div className={styles.stepTextContainer}>
          <h3 className={`${styles.brokersEmphasis} ${styles.stepTitle}`}>
            {l10n.getString("section-1-step-3-title")}
          </h3>
          <h3 className={styles.stepSubtitle}>
            {l10n.getString("section-1-step-3-subtitle")}
          </h3>
          <p className={styles.stepBody}>
            {l10n.getString("section-1-step-3-text-1")}
          </p>
          <p className={styles.stepBody}>
            {l10n.getString("section-1-step-3-text-2")}
          </p>
        </div>
        <Image src={RemoveStep3} alt="step 3 screenshot" />
      </div>
      <div className={styles.sectionCTAButton}>
        <TelemetryButton
          variant="primary"
          href="https://accounts.firefox.com/subscriptions/products/prod_OiV9RSaatywSRy?plan=price_1Nv4ODJNcmPzuWtRoYpoFHXd"
          event={{
            module: "ctaButton",
            name: "click",
            data: {
              button_id: "intent_to_purchase_second",
            },
          }}
        >
          {l10n.getString("section-1-intro-cta-button")}
        </TelemetryButton>
      </div>
    </div>
  );
};
