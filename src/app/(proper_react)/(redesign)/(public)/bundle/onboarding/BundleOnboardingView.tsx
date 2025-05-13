/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { FeatureFlagName } from "../../../../../../db/tables/featureFlags";
import { TelemetryButton } from "../../../../../components/client/TelemetryButton";
import { ExtendedReactLocalization } from "../../../../../functions/l10n";
import styles from "./BundleOnboardingView.module.scss";

export type Props = {
  l10n: ExtendedReactLocalization;
  enabledFeatureFlags: FeatureFlagName[];
};

export const BundleOnboardingView = (props: Props) => {
  const l10n = props.l10n;

  return (
    <main>
      <header className={styles.header}>
        <h1>{l10n.getString("bundle-onboarding-title")}</h1>
        <p>{l10n.getString("bundle-onboarding-subtitle")}</p>
      </header>

      <div className={styles.productsWrapper}>
        <article>
          <h3>{l10n.getString("bundle-mozilla-vpn-title")}</h3>
          <p>{l10n.getString("bundle-mozilla-vpn-description")}</p>
          <TelemetryButton
            event={{
              module: "upgradeIntent",
              name: "click",
              data: { button_id: "launch_vpn_download_page" },
            }}
            variant="primary"
          >
            {l10n.getString("bundle-mozilla-vpn-cta")}
          </TelemetryButton>
        </article>

        <article>
          <h3>{l10n.getString("bundle-monitor-plus-title")}</h3>
          <p>{l10n.getString("bundle-monitor-plus-description")}</p>
          <TelemetryButton
            event={{
              module: "upgradeIntent",
              name: "click",
              data: { button_id: "launch_monitor" },
            }}
            variant="primary"
          >
            {l10n.getString("bundle-monitor-plus-cta")}
          </TelemetryButton>
        </article>

        <article>
          <h3>{l10n.getString("bundle-relay-premium-title")}</h3>
          <p>{l10n.getString("bundle-relay-premium-description")}</p>
          <TelemetryButton
            event={{
              module: "upgradeIntent",
              name: "click",
              data: { button_id: "launch_relay" },
            }}
            variant="primary"
          >
            {l10n.getString("bundle-monitor-plus-cta")}
          </TelemetryButton>
        </article>
      </div>
    </main>
  );
};
