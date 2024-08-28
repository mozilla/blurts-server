/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Image from "next/image";
import ClappingIllustration from "./images/limitations-apply-illustration.svg";
import styles from "./LimitationsApply.module.scss";
import { ExtendedReactLocalization } from "../../../../functions/l10n";

export const LimitationsApplyView = ({
  l10n,
}: {
  l10n: ExtendedReactLocalization;
}) => {
  return (
    <main className={styles.limitationsApplyContainer}>
      <div className={styles.limitationsApplyWrapper}>
        <Image src={ClappingIllustration} alt="" />
        <div className={styles.limitationsApplyDescription}>
          <aside>{l10n.getString("limitations-pill")}</aside>
          <h1>
            {l10n.getString("limitations-apply-title", {
              discount_percentage_num: "30%",
              discount_duration: 3,
            })}
          </h1>
          <ul>
            <li>{l10n.getString("limitations-apply-description-one")}</li>
            <li>{l10n.getString("limitations-apply-description-two")}</li>
            <li>
              {l10n.getString("limitations-apply-description-three", {
                discount_percentage_num: "30%",
                discount_duration: 3,
              })}
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};
