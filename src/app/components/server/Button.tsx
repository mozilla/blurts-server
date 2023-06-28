/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, { HTMLAttributes, ReactNode } from "react";
import styles from "./button.module.scss";

export type Props = {
  type: "primary" | "secondary";
  children: ReactNode;
  destructive?: boolean;
  small?: boolean;
  onClick?: () => void;
};

export const Button = (props: Props & HTMLAttributes<HTMLButtonElement>) => {
  const { type, children, destructive, small, ...otherProps } = props;

  const classes = [
    styles.button,
    styles[type],
    destructive && styles.destructive,
    small && styles.small,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button {...otherProps} className={classes}>
      {children}
    </button>
  );
};
