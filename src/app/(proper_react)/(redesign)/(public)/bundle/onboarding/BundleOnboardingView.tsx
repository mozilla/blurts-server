/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { FeatureFlagName } from "../../../../../../db/tables/featureFlags";
import { TelemetryButton } from "../../../../../components/client/TelemetryButton";
import { ExtendedReactLocalization } from "../../../../../functions/l10n";
import styles from "./BundleOnboardingView.module.scss";
import MozillaVpnLogo from "./images/bundle-mozilla-vpn-logo.svg";
import RelayPremiumLogo from "./images/bundle-relay-premium-logo.svg";
import MonitorPlusLogo from "./images/bundle-monitor-plus-logo.svg";
import Image from "next/image";
import {
  CONST_URL_BUNDLE_ONBOARDING_MOZILLA_MONITOR,
  CONST_URL_BUNDLE_ONBOARDING_MOZILLA_VPN,
  CONST_URL_BUNDLE_ONBOARDING_RELAY_PREMIUM,
} from "../../../../../../constants";

export type Props = {
  l10n: ExtendedReactLocalization;
  enabledFeatureFlags: FeatureFlagName[];
};

export const BundleOnboardingView = (props: Props) => {
  const l10n = props.l10n;

  return (
    <main>
      <header className={styles.header}>
        <h1>
          {l10n.getFragment("bundle-onboarding-title", {
            elems: {
              gradient: <span className={styles.gradientTextFill} />,
            },
          })}
        </h1>
        <p>{l10n.getString("bundle-onboarding-subtitle")}</p>
      </header>

      <section className={styles.productsContainer}>
        <div className={styles.productsWrapper}>
          <article>
            <div className={styles.logoWrapper}>
              <Image src={MozillaVpnLogo} alt="" width="50" height="50" />
            </div>
            <h3>{l10n.getString("bundle-mozilla-vpn-title")}</h3>
            <p>{l10n.getString("bundle-mozilla-vpn-description")}</p>
            <TelemetryButton
              className={styles.ctaBtn}
              event={{
                module: "upgradeIntent",
                name: "click",
                data: { button_id: "launch_vpn_download_page" },
              }}
              variant="primary"
              href={CONST_URL_BUNDLE_ONBOARDING_MOZILLA_VPN}
            >
              {l10n.getString("bundle-mozilla-vpn-cta")}
            </TelemetryButton>
          </article>

          <article>
            <div className={styles.logoWrapper}>
              <Image src={MonitorPlusLogo} alt="" width="50" height="50" />
            </div>
            <h3>{l10n.getString("bundle-monitor-plus-title")}</h3>
            <p>{l10n.getString("bundle-monitor-plus-description")}</p>
            <TelemetryButton
              className={styles.ctaBtn}
              event={{
                module: "upgradeIntent",
                name: "click",
                data: { button_id: "launch_monitor" },
              }}
              variant="primary"
              href={CONST_URL_BUNDLE_ONBOARDING_MOZILLA_MONITOR}
            >
              {l10n.getString("bundle-monitor-plus-cta")}
            </TelemetryButton>
          </article>

          <article>
            <div className={styles.logoWrapper}>
              <Image src={RelayPremiumLogo} alt="" width="50" height="50" />
            </div>
            <h3>{l10n.getString("bundle-relay-premium-title")}</h3>
            <p>{l10n.getString("bundle-relay-premium-description")}</p>
            <TelemetryButton
              className={styles.ctaBtn}
              event={{
                module: "upgradeIntent",
                name: "click",
                data: { button_id: "launch_relay" },
              }}
              variant="primary"
              href={CONST_URL_BUNDLE_ONBOARDING_RELAY_PREMIUM}
            >
              {l10n.getString("bundle-monitor-plus-cta")}
            </TelemetryButton>
          </article>
        </div>
      </section>
    </main>
  );
};
