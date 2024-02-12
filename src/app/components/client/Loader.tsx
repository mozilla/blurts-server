/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* This animation was adapted from https://loading.io/css/ */

import { useL10n } from "../../hooks/l10n";
import { VisuallyHidden } from "../server/VisuallyHidden";
import styles from "./Loader.module.scss";
/* c8 ignore start */
export const Loader = () => {
  const l10n = useL10n();

  return (
    <div className={styles.ldsRing}>
      <VisuallyHidden>
        {l10n.getString("loading-sr-announcement")}
      </VisuallyHidden>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
/* c8 ignore stop */
