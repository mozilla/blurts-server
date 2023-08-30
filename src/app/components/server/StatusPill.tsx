/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from "react";
import styles from "./StatusPill.module.scss";
import { useL10n } from "../../hooks/l10n";

export type StatusPillType = "needAction" | "progress" | "fixed";

export type Props = {
  type: StatusPillType;
};

// This component just render HTML without business logic:
/* c8 ignore start */
export const StatusPill = (props: Props) => {
  const { type } = props;
  const l10n = useL10n();

  let stringContent = "";
  let className = "";

  if (type === "needAction") {
    stringContent = l10n.getString("status-pill-action-needed");
    className = "actionNeeded";
  } else if (type === "progress") {
    stringContent = l10n.getString("status-pill-progress");
    className = "inProgress";
  } else if (type === "fixed") {
    stringContent = l10n.getString("status-pill-fixed");
    className = "isFixed";
  }

  return (
    <div className={`${styles.pill} ${styles[className]}`}>{stringContent}</div>
  );
};
/* c8 ignore stop */
