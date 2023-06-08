/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from "react";
import styles from "./button.module.scss";

export type Props = {
  type: string; // primary | secondary | tertiary
  content: string;
  destructive?: boolean;
  small?: boolean;
  onClick?: () => void;
};

export const Button = (props: Props) => {
  const { type, content, destructive, small, onClick } = props;

  const classes = [
    styles.button,
    styles[type],
    destructive && styles.destructive,
    small && styles.small,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} onClick={onClick}>
      {content}
    </button>
  );
};
