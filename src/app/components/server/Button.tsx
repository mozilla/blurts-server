/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, { ComponentProps, HTMLAttributes, ReactNode } from "react";
import styles from "./button.module.scss";

export interface Props extends ComponentProps<"button"> {
  children: ReactNode;
  destructive?: boolean;
  isLoading?: boolean;
  small?: boolean;
  variant: "primary" | "secondary";
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = (props: Props & HTMLAttributes<HTMLButtonElement>) => {
  const {
    type,
    children,
    destructive,
    disabled,
    variant,
    isLoading,
    small,
    ...otherProps
  } = props;

  const classes = [
    styles.button,
    styles[variant],
    destructive && styles.destructive,
    small && styles.small,
    isLoading && styles.isLoading,
    disabled && styles.disabled,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button {...otherProps} className={classes}>
      {children}
    </button>
  );
};
