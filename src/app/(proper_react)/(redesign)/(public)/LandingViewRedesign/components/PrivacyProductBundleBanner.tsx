/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Image from "next/image";
import { TelemetryButton } from "../../../../../components/client/TelemetryButton";
import Illustration from "../images/shield-field-illustration.svg";
import styles from "./PrivacyProductBundleBanner.module.scss";

export const PrivacyProductBundleBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <strong className={styles.title}>
          Protect your online privacy for $8.25/month
        </strong>
        <div className={styles.description}>
          <div className={styles.subtitle}>
            <p>Get 3 tools for 1 unbeatable price</p>
            <div className={styles.tags}>
              <span className={styles.tag}>VPN</span>
              <span className={styles.tag}>Monitor</span>
              <span className={styles.tag}>Relay</span>
            </div>
          </div>
          <p>
            Plan includes VPN, data broker protection, and unlimited email masks
            to prevent spam.
          </p>
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
            Get year-round protection
          </TelemetryButton>
          <p className={styles.billingInfo}>
            $99/year, billed annually.
            <br />
            30-day, money-back guarantee.
          </p>
        </div>
      </div>
      <span className={styles.illustration}>
        <Image src={Illustration} alt="" />
      </span>
    </div>
  );
};
