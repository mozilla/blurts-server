/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { FeatureFlagName } from "../../../../db/tables/featureFlags";
import { TelemetryButton } from "../../../components/client/TelemetryButton";
import { ExtendedReactLocalization } from "../../../functions/l10n";
import styles from "./BundleOnboardingView.module.scss";
import MozillaVpnLogo from "./images/bundle-mozilla-vpn-logo.svg";
import RelayPremiumLogo from "./images/bundle-relay-premium-logo.svg";
import MonitorPlusLogo from "./images/bundle-monitor-plus-logo.svg";
import Image from "next/image";

export type Props = {
  l10n: ExtendedReactLocalization;
  enabledFeatureFlags: FeatureFlagName[];
};

export const BundleOnboardingView = (props: Props) => {
  const l10n = props.l10n;
  const queryParamsExternalProducts = new URLSearchParams({
    utm_medium: "referral",
    utm_source: "bundle-onboarding-page",
    utm_campaign: "evergreen",
  }).toString();

  const queryParamsMonitor = new URLSearchParams({
    utm_medium: "mozilla-websites",
    utm_source: "bundle",
    utm_campaign: "onboarding-page",
    utm_content: "launch-us",
  }).toString();

  const authParams = new URLSearchParams({ prompt: "none" }).toString();

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
            <h2>{l10n.getString("bundle-mozilla-vpn-title")}</h2>
            <p>{l10n.getString("bundle-mozilla-vpn-description")}</p>
            <TelemetryButton
              target="_blank"
              className={styles.ctaBtn}
              event={{
                module: "upgradeIntent",
                name: "click",
                data: { button_id: "launch_vpn_download_page" },
              }}
              variant="primary"
              href={`${process.env.MOZILLA_VPN_LANDING_URL}/download?${queryParamsExternalProducts}`}
            >
              {l10n.getString("bundle-mozilla-vpn-cta")}
            </TelemetryButton>
          </article>

          <article>
            <div className={styles.logoWrapper}>
              <Image src={MonitorPlusLogo} alt="" width="50" height="50" />
            </div>
            <h2>{l10n.getString("bundle-monitor-plus-title")}</h2>
            <p>{l10n.getString("bundle-monitor-plus-description")}</p>
            <TelemetryButton
              target="_blank"
              className={styles.ctaBtn}
              event={{
                module: "upgradeIntent",
                name: "click",
                data: { button_id: "launch_monitor" },
              }}
              variant="primary"
              href={`/user/dashboard?${queryParamsMonitor}`}
            >
              {l10n.getString("bundle-monitor-plus-cta")}
            </TelemetryButton>
          </article>

          <article>
            <div className={styles.logoWrapper}>
              <Image src={RelayPremiumLogo} alt="" width="50" height="50" />
            </div>
            <h2>{l10n.getString("bundle-relay-premium-title")}</h2>
            <p>{l10n.getString("bundle-relay-premium-description")}</p>
            <TelemetryButton
              target="_blank"
              className={styles.ctaBtn}
              event={{
                module: "upgradeIntent",
                name: "click",
                data: { button_id: "launch_relay" },
              }}
              variant="primary"
              // Relay's OAuth library accepts the url params in auth_params and passes them through to the FxA OAuth url
              href={`
                ${process.env.FIREFOX_RELAY_LANDING_URL}/accounts/fxa/login?process=login&${queryParamsExternalProducts}&auth_params=${encodeURIComponent(authParams)}
              `}
            >
              {l10n.getString("bundle-relay-premium-cta")}
            </TelemetryButton>
          </article>
        </div>
      </section>
    </main>
  );
};
