/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactNode, RefObject, useRef } from "react";
import Link from "next/link";
import styles from "./Button.module.scss";
import { useButton } from "react-aria";

export interface Props {
  variant: "primary" | "secondary" | "ternary";
  children?: ReactNode;
  className?: string;
  destructive?: boolean;
  disabled?: boolean;
  href?: string;
  isLoading?: boolean;
  small?: boolean;
  wide?: boolean;
  buttonRef?: RefObject<HTMLButtonElement | HTMLAnchorElement>;
}

export const Button = (
  props: Props & Parameters<typeof useButton>[0], // AriaButtonOptions
) => {
  const {
    children,
    variant,
    className,
    destructive,
    disabled,
    href,
    isLoading,
    small,
    wide,
    ...otherProps
  } = props;

  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const { buttonProps } = useButton(otherProps, ref);
  const buttonRef = props.buttonRef ?? ref;

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
    wide && styles.wide,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return typeof href === "string" ? (
    <Link
      {...buttonProps}
      ref={buttonRef as RefObject<HTMLAnchorElement>}
      href={href}
      className={classes}
    >
      {children}
    </Link>
  ) : (
    <button
      {...buttonProps}
      ref={buttonRef as RefObject<HTMLButtonElement>}
      className={classes}
    >
      {children}
    </button>
  );
};
