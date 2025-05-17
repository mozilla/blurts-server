/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Image from "next/image";
import NewMonitorIcon from "./images/new-mozilla-icon.svg";
import styles from "./BundleLayout.module.scss";
import {
  CONST_URL_PRIVACY_POLICY,
  CONST_URL_TERMS,
} from "../../../../constants";
import { ExtendedReactLocalization } from "../../../functions/l10n";

export const BundleFooter = ({ l10n }: { l10n: ExtendedReactLocalization }) => {
  return (
    <footer className={styles.footer}>
      <Image src={NewMonitorIcon} alt="" width="30" />
      <ul>
        <li>
          <a href={CONST_URL_PRIVACY_POLICY} target="_blank">
            {l10n.getString("bundle-onboarding-footer-privacy-notice")}
          </a>
        </li>
        <li>
          <a href={CONST_URL_TERMS} target="_blank">
            {l10n.getString("bundle-onboarding-footer-terms-of-service")}
          </a>
        </li>
      </ul>
    </footer>
  );
};
