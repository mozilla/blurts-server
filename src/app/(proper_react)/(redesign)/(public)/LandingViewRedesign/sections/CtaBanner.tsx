/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { LandingPageProps } from "..";
import { TelemetryButton } from "../../../../../components/client/TelemetryButton";
import styles from "./CtaBanner.module.scss";

export const CtaBanner = (props: LandingPageProps) => {
  return (
    <section>
      <div className={styles.banner}>
        <div className={styles.bannerHeader}>
          <h2>
            {props.l10n.getFragment(
              "landing-redesign-premium-banner-cta-header",
              {
                elems: { strong: <strong /> },
              },
            )}
          </h2>
          <p>
            {props.l10n.getString(
              "landing-redesign-premium-banner-cta-subheader",
            )}
          </p>
        </div>
        <TelemetryButton
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
          {props.l10n.getString(
            "landing-redesign-premium-banner-cta-button-label",
          )}
        </TelemetryButton>
      </div>
    </section>
  );
};
