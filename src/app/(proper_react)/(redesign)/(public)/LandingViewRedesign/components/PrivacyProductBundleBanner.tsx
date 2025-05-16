/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Image from "next/image";
import { TelemetryButton } from "../../../../../components/client/TelemetryButton";
import { ExtendedReactLocalization } from "../../../../../functions/l10n";
import { getLocale } from "../../../../../functions/universal/getLocale";
import Illustration from "../images/shield-field-illustration.svg";
import styles from "./PrivacyProductBundleBanner.module.scss";

export const PrivacyProductBundleBanner = ({
  l10n,
}: {
  l10n: ExtendedReactLocalization;
}) => {
  const priceFormatter = new Intl.NumberFormat(getLocale(l10n), {
    style: "currency",
    currency: "USD",
    currencyDisplay: "narrowSymbol",
  });

  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <strong className={styles.title}>
          {l10n.getString("landing-redesign-bundle-banner-title", {
            monthlyPrice: priceFormatter.format(8.25),
          })}
        </strong>
        <div className={styles.description}>
          <div className={styles.subtitle}>
            <p>{l10n.getString("landing-redesign-bundle-banner-subtitle")}</p>
            <div className={styles.tags}>
              <span className={styles.tag}>VPN</span>
              <span className={styles.tag}>Monitor</span>
              <span className={styles.tag}>Relay</span>
            </div>
          </div>
          <p>{l10n.getString("landing-redesign-bundle-banner-description")}</p>
        </div>
        <div className={styles.footer}>
          <TelemetryButton
            variant="primary"
            href=""
            event={{
              module: "upgradeIntent",
              name: "click",
              data: {
                button_id: "purchase_bundle_banner_landing_page",
              },
            }}
          >
            {l10n.getString("landing-redesign-bundle-banner-button-label")}
          </TelemetryButton>
          <p className={styles.billingInfo}>
            {l10n.getString(
              "landing-redesign-bundle-banner-pricing-plan-billing-info",
              {
                yearlyPrice: priceFormatter.format(99),
              },
            )}
            <br />
            {l10n.getString(
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
