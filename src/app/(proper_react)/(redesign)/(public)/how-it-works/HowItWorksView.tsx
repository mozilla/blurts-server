/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getL10n } from "../../../../functions/l10n/serverComponents";
import { Button } from "../../../../components/client/Button";
import {
  RemoveStep1,
  RemoveStep2,
  RemoveStep3,
  Resolve,
  NameIcon,
  LocationIcon,
  DOBIcon,
} from "./images";

import styles from "./HowItWorksView.module.scss";
import Image from "next/image";

export const HowItWorksView = () => {
  const l10n = getL10n();

  return (
    <main>
      <header className={styles.header}>
        <span>
          <h1 className={styles.title}>
            {l10n.getString("how-it-works-banner-title")}
          </h1>
          <p>
            {l10n.getFragment("how-it-works-banner-text", {
              elems: {
                data_brokers_link: (
                  <a href="/data-brokers" className={styles.brokersEmphasis}>
                    data brokers
                  </a>
                ),
                data_breaches_link: (
                  <a href="/data-breach" className={styles.breachesEmphasis}>
                    data breaches
                  </a>
                ),
              },
            })}
          </p>
        </span>
      </header>

      {/* SECTION: WE REMOVE YOUR INFO FROM DATA BROKERS */}
      <div className={`${styles.sectionWrapper} ${styles.grayBG}`}>
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
            <Button variant="primary">
              {l10n.getString("section-1-intro-cta-button")}
            </Button>
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
        <div className={styles.step}>
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
            <p className={styles.stepBody}>
              {l10n.getString("section-1-step-2-text-3")}
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
        <span className={styles.sectionCTAButton}>
          <Button variant="primary">
            {l10n.getString("section-1-cta-button")}
          </Button>
        </span>
      </div>

      {/* SECTION: WE PROVIDE STEPS TO HELP RESOLVE DATA BREACHES */}
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
        <div className={styles.step}>
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

      {/* FOOTER */}
      <footer className={styles.footer}>
        <h2 className={styles.footerCTA}>{l10n.getString("footer-title")}</h2>
        <div>
          <input
            placeholder={l10n.getString("footer-input-placeholder")}
            type="email"
            name="email"
            id="email"
          />
          <Button variant="primary">
            {l10n.getString("footer-cta-button")}
          </Button>
          <p className={styles.note}>
            {l10n.getString("footer-have-i-been-pwned")}
          </p>
        </div>
      </footer>
    </main>
  );
};
