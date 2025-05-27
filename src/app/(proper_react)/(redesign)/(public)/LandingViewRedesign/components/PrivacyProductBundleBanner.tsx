/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Image from "next/image";
import { TelemetryButton } from "../../../../../components/client/TelemetryButton";
import { ExtendedReactLocalization } from "../../../../../functions/l10n";
import { getLocale } from "../../../../../functions/universal/getLocale";
import Illustration from "../images/shield-field-illustration.svg";
import styles from "./PrivacyProductBundleBanner.module.scss";
import {
  MonitorIcon,
  RelayIcon,
  VpnIcon,
} from "../../../../../components/server/Icons";
import { BundleBillingAmount } from "../../../../../functions/server/getPremiumSubscriptionInfo";
import { FeatureFlagName } from "../../../../../../db/tables/featureFlags";

type Props = {
  l10n: ExtendedReactLocalization;
  premiumSubscriptionUrlBundle: string;
  subscriptionBillingAmountBundle: BundleBillingAmount;
  enabledFeatureFlags: FeatureFlagName[];
};

export const PrivacyProductBundleBanner = (props: Props) => {
  const priceFormatter = new Intl.NumberFormat(getLocale(props.l10n), {
    style: "currency",
    currency: "USD",
    currencyDisplay: "narrowSymbol",
  });
  const searchParams = new URLSearchParams({
    utm_medium: "monitor",
    utm_source: "monitor-product",
    utm_campaign: "landing-page-banner",
    utm_content: "banner-us",
  });
  // SubPlat2 subscription links already have the UTM parameter `?plan` appended.
  const additionalSubplatParamsString = `${props.enabledFeatureFlags.includes("SubPlat3") ? "?" : "&"}${searchParams.toString()}`;

  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <h3 className={styles.title}>
          {props.l10n.getString("landing-redesign-bundle-banner-title", {
            monthlyPrice: priceFormatter.format(
              props.subscriptionBillingAmountBundle.monthly,
            ),
          })}
        </h3>
        <div className={styles.description}>
          <div className={styles.subtitle}>
            <p>
              {props.l10n.getString("landing-redesign-bundle-banner-subtitle")}
            </p>
            <ol className={`noList ${styles.tags}`}>
              <li className={styles.tag}>
                <VpnIcon alt="" />
                {props.l10n.getString(
                  "landing-redesign-bundle-banner-label-vpn",
                )}
              </li>
              <li className={styles.tag}>
                <MonitorIcon alt="" />
                {props.l10n.getString(
                  "landing-redesign-bundle-banner-label-monitor",
                )}
              </li>
              <li className={styles.tag}>
                <RelayIcon alt="" />
                {props.l10n.getString(
                  "landing-redesign-bundle-banner-label-relay",
                )}
              </li>
            </ol>
          </div>
          <p>
            {props.l10n.getString("landing-redesign-bundle-banner-description")}
          </p>
        </div>
        <footer className={styles.footer}>
          <TelemetryButton
            variant="primary"
            theme="blue"
            href={`${props.premiumSubscriptionUrlBundle}${additionalSubplatParamsString}`}
            event={{
              module: "upgradeIntent",
              name: "click",
              data: {
                button_id: "purchase_bundle_banner_landing_page",
              },
            }}
          >
            {props.l10n.getString(
              "landing-redesign-bundle-banner-button-label",
            )}
          </TelemetryButton>
          <p className={styles.billingInfo}>
            {props.l10n.getString(
              "landing-redesign-bundle-banner-pricing-plan-billing-info",
              {
                yearlyPrice: priceFormatter.format(
                  props.subscriptionBillingAmountBundle.monthly * 12,
                ),
              },
            )}
            <br />
            {props.l10n.getString(
              "landing-redesign-bundle-banner-pricing-plan-billing-terms",
            )}
          </p>
        </footer>
      </div>
      <span className={styles.illustration}>
        <Image src={Illustration} alt="" />
      </span>
    </section>
  );
};
