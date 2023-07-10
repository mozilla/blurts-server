/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { Session } from "next-auth";
import styles from "./EnterInfo.module.scss";
import { useL10n } from "../../../../hooks/l10n";

export type Props = {
  onDataSaved: () => void;
  user: Session["user"];
};

export const EnterInfo = (_props: Props) => {
  const _l10n = useL10n();

  return (
    <div className={styles.wrapper}>
      Enter your info here. After it&apos;s sent to the backend, we&apos;ll call{" "}
      <code>props.onDataSaved</code>.
    </div>
  );
};
