/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import styles from "./Loader.module.scss";
import { useL10n } from "../../hooks/l10n";
import { VisuallyHidden } from "../server/VisuallyHidden";

/* This animation was adapted from https://loading.io/css/ */
/* c8 ignore start */
type Props = {
  button?: boolean;
};

export const Loader = (props: Props) => {
  const l10n = useL10n();

  return (
    <div
      className={`${styles.ldsRing} ${props.button ? styles.button : styles.loader}`}
    >
      <VisuallyHidden>{l10n.getString("loading-accessibility")}</VisuallyHidden>
      {[...Array(4)].map((_, index) => (
        <div key={index}></div>
      ))}
    </div>
  );
};
/* c8 ignore stop */
