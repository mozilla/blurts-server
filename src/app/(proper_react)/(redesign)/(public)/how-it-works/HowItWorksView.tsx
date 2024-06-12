/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getL10n } from "../../../../functions/l10n/serverComponents";
import { Button } from "../../../../components/client/Button";

import styles from "./HowItWorksView.module.scss";

export const HowItWorksView = () => {
  const l10n = getL10n();

  return (
    <main>
      <header className="styles.title">
        <h1>{l10n.getString("how-it-works-banner-title")}</h1>
        <p>
          {l10n.getFragment("how-it-works-banner-text", {
            elems: {
              data_brokers_link: <a href="/data-brokers">data brokers</a>,
              data_breaches_link: <a href="/data-breach">data breaches</a>,
            },
          })}
        </p>
      </header>

      {/* SECTION: WE REMOVE YOUR INFO FROM DATA BROKERS */}
      <div className={styles.removeFromDataBrokersWrapper}>
        <div className={styles.header}>
          <h2>
            {l10n.getFragment("section-1-intro-title", {
              elems: {
                data_brokers: <span className={styles.emphasis} />,
              },
            })}
          </h2>
          <p>{l10n.getString("section-1-intro-text-1")}</p>
          <hr className={styles.horizontalRule} />
          <p>{l10n.getString("section-1-intro-text-2")}</p>
          <Button variant="primary">
            {l10n.getString("section-1-intro-cta-button")}
          </Button>
        </div>
        {/* STEP 1 */}
        <div className={styles.step}>
          <h3>{l10n.getString("section-1-step-1-title")}</h3>
          <h3>{l10n.getString("section-1-step-1-subtitle")}</h3>
          <p>
            {l10n.getFragment("section-1-step-1-name", {
              elems: {
                name: <span className={styles.bolded} />,
              },
            })}
          </p>
          <p>
            {l10n.getFragment("section-1-step-1-location", {
              elems: {
                location: <span className={styles.bolded} />,
              },
            })}
          </p>
          <p>
            {l10n.getFragment("section-1-step-1-dob", {
              elems: {
                dob: <span className={styles.bolded} />,
              },
            })}
          </p>
          <p>{l10n.getString("section-1-step-1-closing-text")}</p>
        </div>
        {/* STEP 2 */}
        <div className={styles.step}>
          <h3>{l10n.getString("section-1-step-2-title")}</h3>
          <h3>{l10n.getString("section-1-step-2-subtitle")}</h3>
          <p>{l10n.getString("section-1-step-2-text-1")}</p>
          <p>{l10n.getString("section-1-step-2-text-2")}</p>
          <p>{l10n.getString("section-1-step-2-text-3")}</p>
        </div>
        {/* STEP 3 */}
        <div className={styles.step}>
          <h3>{l10n.getString("section-1-step-3-title")}</h3>
          <h3>{l10n.getString("section-1-step-3-subtitle")}</h3>
          <p>{l10n.getString("section-1-step-3-text-1")}</p>
          <p>{l10n.getString("section-1-step-3-text-2")}</p>
        </div>
      </div>

      {/* SECTION: WE PROVIDE STEPS TO HELP RESOLVE DATA BREACHES */}
      <div className={styles.removeFromDataBrokersWrapper}>
        <div className={styles.header}>
          <h2>
            {l10n.getFragment("section-2-intro-title", {
              elems: {
                data_breaches: <span className={styles.emphasis} />,
              },
            })}
          </h2>
          <p>{l10n.getString("section-2-intro-text-1")}</p>
          <hr className={styles.horizontalRule} />
          <p>{l10n.getString("section-2-intro-text-2")}</p>
          <Button variant="primary">
            {l10n.getString("section-2-intro-cta-button")}
          </Button>
        </div>
        {/* STEP 1 */}
        <div className={styles.step}>
          <h3>{l10n.getString("section-2-step-1-title")}</h3>
          <h3>{l10n.getString("section-2-step-1-subtitle")}</h3>
          <p>{l10n.getString("section-2-step-1-text")}</p>
        </div>
        {/* STEP 2 */}
        <div className={styles.step}>
          <h3>{l10n.getString("section-2-step-2-title")}</h3>
          <h3>{l10n.getString("section-2-step-2-subtitle")}</h3>
          <p>{l10n.getString("section-2-step-2-text-1")}</p>
          <p>{l10n.getString("section-2-step-2-text-2")}</p>
        </div>
        {/* STEP 3 */}
        <div className={styles.step}>
          <h3>{l10n.getString("section-2-step-3-title")}</h3>
          <h3>{l10n.getString("section-2-step-3-subtitle")}</h3>
          <p>{l10n.getString("section-2-step-3-text")}</p>
        </div>

        <Button variant="primary">
          {l10n.getString("section-2-cta-button")}
        </Button>
      </div>

      {/* FOOTER */}
      <footer>
        <h2>{l10n.getString("footer-title")}</h2>
        <input
          placeholder={l10n.getString("footer-input-placeholder")}
          type="email"
          name="email"
          id="email"
        />
        <Button variant="primary">{l10n.getString("footer-cta-button")}</Button>
        <p>{l10n.getString("footer-have-i-been-pwned")}</p>
      </footer>
    </main>
  );
};
