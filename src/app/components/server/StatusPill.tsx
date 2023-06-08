/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from "react";
import styles from "./StatusPill.module.scss";

export type Props = {
  type: string; // type
  content: string;
};

export const StatusPill = (props: Props) => {
  const { type, content } = props;

  const classes = [styles.pill, styles[type]].filter(Boolean).join(" ");

  return <div className={classes}>{content}</div>;
};
