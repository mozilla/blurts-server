/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Link from "next/link";
import styles from "./FindExposures.module.scss";
import { useL10n } from "../../../../hooks/l10n";

export const FindExposures = () => {
  const l10n = useL10n();

  return (
    <div className={styles.wrapper}>
      Here&apos;s a progress bar until we think the dashboard has filled up
      enough, from which point we&apos;ll show a{" "}
      <Link href="/user/dashboard">link to the dashboard</Link>.
    </div>
  );
};
