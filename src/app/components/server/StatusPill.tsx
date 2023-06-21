/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from "react";
import styles from "./StatusPill.module.scss";

export type StatusPillType = "needAction" | "progress" | "fixed";

export type Props = {
  type: StatusPillType;
};

export const StatusPill = (props: Props) => {
  const { type } = props;

  let stringContent = "";
  let className = "";

  if (type === "needAction") {
    stringContent = "Action Needed";
    className = "actionNeeded";
  } else if (type === "progress") {
    stringContent = "In Progress";
    className = "inProgress";
  } else if (type === "fixed") {
    stringContent = "Fixed";
    className = "isFixed";
  }

  const classes = [styles.pill, styles[className]].filter(Boolean).join(" ");

  return <div className={classes}>{stringContent}</div>;
};