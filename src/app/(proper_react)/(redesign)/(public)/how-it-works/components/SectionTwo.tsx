/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Image from "next/image";
import { Props } from "../HowItWorksView";
import { Button } from "../../../../../components/client/Button";
import { Resolve } from "../images";
import styles from "../HowItWorksView.module.scss";

export const SectionTwo = (props: Props) => {
  const { l10n } = props;

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.intro}>
        <span className={styles.introContent}>
          <h2>
            {l10n.getFragment("section-2-intro-title", {
              elems: {
                data_breaches: <span className={styles.breachesEmphasis} />,
              },
            })}
          </h2>
          <p>{l10n.getString("section-2-intro-text-1")}</p>
          <hr className={styles.horizontalRule} />
        </span>
        <div className={styles.introCTA}>
          <h3>{l10n.getString("section-2-intro-text-2")}</h3>
          <Button variant="primary">
            {l10n.getString("section-2-intro-cta-button")}
          </Button>
        </div>
      </div>
      <div className={`${styles.step} ${styles.mobileColumns}`}>
        <div className={styles.stepTextContainer}>
          {/* STEP 1 */}
          <h3 className={`${styles.breachesEmphasis} ${styles.stepTitle}`}>
            {l10n.getString("section-2-step-1-title")}
          </h3>
          <h3 className={styles.stepSubtitle}>
            {l10n.getString("section-2-step-1-subtitle")}
          </h3>
          <p className={styles.stepBody}>
            {l10n.getString("section-2-step-1-text")}
          </p>
          {/* STEP 2 */}
          <div className={styles.stepGroupTitleAfter1st}>
            <h3
              className={`${styles.breachesEmphasis} ${styles.stepTitle} ${styles.stepGroupTitleAfter1st}`}
            >
              {l10n.getString("section-2-step-2-title")}
            </h3>
            <h3 className={styles.stepSubtitle}>
              {l10n.getString("section-2-step-2-subtitle")}
            </h3>
            <p className={styles.stepBody}>
              {l10n.getString("section-2-step-2-text-1")}
            </p>
            <p className={styles.stepBody}>
              {l10n.getString("section-2-step-2-text-2")}
            </p>
          </div>
          {/* STEP 3 */}
          <div className={styles.stepGroupTitleAfter1st}>
            <h3 className={`${styles.breachesEmphasis} ${styles.stepTitle}`}>
              {l10n.getString("section-2-step-3-title")}
            </h3>
            <h3 className={styles.stepSubtitle}>
              {l10n.getString("section-2-step-3-subtitle")}
            </h3>
            <p className={styles.stepBody}>
              {l10n.getString("section-2-step-3-text")}
            </p>
          </div>
        </div>
        <Image src={Resolve} alt="resolve data breaches screenshot" />
      </div>
      <span className={styles.sectionCTAButton}>
        <Button variant="primary">
          {l10n.getString("section-2-cta-button")}
        </Button>
      </span>
    </div>
  );
};
