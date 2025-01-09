/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { LandingPageProps } from "..";
import { TelemetryButton } from "../../../../../components/client/TelemetryButton";
import { ArrowIcon } from "../../../../../components/server/Icons";
import styles from "./CtaBanner.module.scss";

export const CtaBanner = (props: LandingPageProps) => {
  return (
    <section>
      <div className={styles.banner}>
        <div className={styles.bannerHeader}>
          <h2>
            <b>
              {props.l10n.getFragment("landing-redesign-banner-cta-header", {
                elems: { b: <strong /> },
              })}
            </b>
          </h2>
          <p>{props.l10n.getString("landing-redesign-banner-cta-subheader")}</p>
        </div>
        <TelemetryButton
          className={styles.ctaButton}
          variant="primary"
          // TODO: Add href and telementry
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          event={{
            module: "link",
            name: "click",
            data: {
              link_id: "",
            },
          }}
        >
          {props.l10n.getString("landing-redesign-banner-cta-button-label")}
          <ArrowIcon alt="" />
        </TelemetryButton>
      </div>
    </section>
  );
};
