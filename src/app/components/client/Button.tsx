/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactNode, RefObject, useRef } from "react";
import Link from "next/link";
import styles from "./Button.module.scss";
import { useButton } from "react-aria";
import { useL10n } from "../../hooks/l10n";
import { VisuallyHidden } from "../server/VisuallyHidden";

export interface Props {
  variant: "primary" | "secondary" | "tertiary";
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

export type ButtonProps = Props & Parameters<typeof useButton>[0]; // AriaButtonOptions

export const Button = (props: ButtonProps) => {
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
      {isLoading ? <Loader /> : children}
    </button>
  );
};

/* This animation was adapted from https://loading.io/css/ */
/* c8 ignore start */
export const Loader = () => {
  const l10n = useL10n();

  return (
    <div className={styles.ldsRing}>
      <VisuallyHidden>
        {l10n.getString("loading-sr-announcement")}
      </VisuallyHidden>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
/* c8 ignore stop */
