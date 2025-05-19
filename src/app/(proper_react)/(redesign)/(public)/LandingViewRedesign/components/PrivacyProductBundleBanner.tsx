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

type Props = {
  l10n: ExtendedReactLocalization;
  premiumSubscriptionUrlBundle: string;
  subscriptionBillingAmountBundle: BundleBillingAmount;
};

export const PrivacyProductBundleBanner = (props: Props) => {
  const priceFormatter = new Intl.NumberFormat(getLocale(props.l10n), {
    style: "currency",
    currency: "USD",
    currencyDisplay: "narrowSymbol",
  });

  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <strong className={styles.title}>
          {props.l10n.getString("landing-redesign-bundle-banner-title", {
            monthlyPrice: priceFormatter.format(
              props.subscriptionBillingAmountBundle.monthly,
            ),
          })}
        </strong>
        <div className={styles.description}>
          <div className={styles.subtitle}>
            <p>
              {props.l10n.getString("landing-redesign-bundle-banner-subtitle")}
            </p>
            <div className={styles.tags}>
              <span className={styles.tag}>
                <VpnIcon alt="" />
                {props.l10n.getString(
                  "landing-redesign-bundle-banner-label-vpn",
                )}
              </span>
              <span className={styles.tag}>
                <MonitorIcon alt="" />
                {props.l10n.getString(
                  "landing-redesign-bundle-banner-label-monitor",
                )}
              </span>
              <span className={styles.tag}>
                <RelayIcon alt="" />
                {props.l10n.getString(
                  "landing-redesign-bundle-banner-label-relay",
                )}
              </span>
            </div>
          </div>
          <p>
            {props.l10n.getString("landing-redesign-bundle-banner-description")}
          </p>
        </div>
        <div className={styles.footer}>
          <TelemetryButton
            variant="primary"
            href={props.premiumSubscriptionUrlBundle}
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
        </div>
      </div>
      <span className={styles.illustration}>
        <Image src={Illustration} alt="" />
      </span>
    </div>
  );
};
