/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ComponentProps, ReactNode, useRef } from "react";
import Link from "next/link";
import styles from "./button.module.scss";
import { useButton } from "react-aria";

export interface Props extends ComponentProps<"button"> {
  children: ReactNode;
  variant: "primary" | "secondary";
  buttonType?: "button" | "link";
  destructive?: boolean;
  disabled?: boolean;
  href?: string;
  isLoading?: boolean;
  small?: boolean;
}

export const Button = (
  props: Props & Parameters<typeof useButton>[0] // AriaButtonOptions
) => {
  const {
    buttonType,
    children,
    destructive,
    disabled,
    href,
    isLoading,
    small,
    variant,
    ...otherProps
  } = props;

  const buttonRef = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(otherProps, buttonRef);

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
    <button {...buttonProps} ref={buttonRef} className={classes}>
      {children}
    </button>
  );
};
