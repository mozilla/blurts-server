/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { HTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import styles from "./button.module.scss";

export interface Props {
  children: ReactNode;
  variant: "primary" | "secondary";
  buttonType?: "button" | "link";
  destructive?: boolean;
  disabled?: boolean;
  href?: string;
  isLoading?: boolean;
  onClick?: () => void;
  small?: boolean;
}

export const Button = (
  props: Props & HTMLAttributes<HTMLButtonElement | HTMLLinkElement>
) => {
  const {
    buttonType,
    children,
    destructive,
    disabled,
    href,
    isLoading,
    onClick,
    small,
    variant,
    ...otherProps
  } = props;

  const classes = [
    styles.button,
    styles[variant],
    // Ignored for test coverage; not used in tested pages yet:
    /* c8 ignore next */
    destructive && styles.destructive,
    small && styles.small,
    // Ignored for test coverage; not used in tested pages yet:
    /* c8 ignore next */
    isLoading && styles.isLoading,
    // Ignored for test coverage; not used in tested pages yet:
    /* c8 ignore next */
    disabled && styles.disabled,
  ]
    .filter(Boolean)
    .join(" ");

  return buttonType === "link" && href ? (
    <Link href={href} className={classes}>
      {children}
    </Link>
  ) : (
    <button {...otherProps} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};
