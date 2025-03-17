/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Link from "next/link";
import Image from "next/image";
import styles from "./View.module.scss";
import monitorLogo from "../../../images/monitor-logo.svg";
import { ExtendedReactLocalization } from "../../../../functions/l10n";

export type Props = {
  l10n: ExtendedReactLocalization;
};

export const View = (props: Props) => {
  const l10n = props.l10n;

  return (
    <div className={styles.wrapper}>
      <Link href="/" className={styles.logo}>
        <Image
          src={monitorLogo}
          alt={l10n.getString("plus-expiration-header-logo-alt")}
        />
      </Link>
      <div className={styles.terms}>
        <hgroup>
          <h1>{l10n.getString("plus-expiration-terms-heading")}</h1>
          <p>{l10n.getString("plus-expiration-terms-subheading")}</p>
        </hgroup>
        <ul>
          <li>{l10n.getString("plus-expiration-terms-term1")}</li>
          <li>{l10n.getString("plus-expiration-terms-term2")}</li>
          <li>{l10n.getString("plus-expiration-terms-term3")}</li>
          <li>{l10n.getString("plus-expiration-terms-term4")}</li>
          <li>{l10n.getString("plus-expiration-terms-term5")}</li>
          <li>
            {l10n.getFragment("plus-expiration-terms-term6", {
              elems: { "monitor-link": <Link href="/#pricing" /> },
            })}
          </li>
        </ul>
      </div>
    </div>
  );
};
