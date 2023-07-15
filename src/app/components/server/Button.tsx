/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, { ComponentProps, ReactNode } from "react";
import styles from "./button.module.scss";

export interface Props extends ComponentProps<"button"> {
  children: ReactNode;
  destructive?: boolean;
  small?: boolean;
  variant: "primary" | "secondary";
  onClick?: () => void;
}

export const Button = (props: Props) => {
  const { children, destructive, small, variant, ...otherProps } = props;

  const classes = [
    styles.button,
    styles[variant],
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
