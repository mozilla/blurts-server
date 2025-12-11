/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactNode, useEffect, useRef } from "react";
import { AriaDialogProps, useButton, useDialog } from "react-aria";
import styles from "./Dialog.module.scss";
import { CloseBtn } from "../../server/Icons";
import { useL10n } from "../../../hooks/l10n";

export type Props = {
  children: ReactNode;
  onDismiss?: () => void;
  title?: ReactNode;
  illustration?: ReactNode;
  fitContent?: boolean;
} & AriaDialogProps;

export const Dialog = ({
  children,
  onDismiss,
  title,
  illustration,
  fitContent,
  ...otherProps
}: Props) => {
  const l10n = useL10n();
  const dialogRef = useRef<HTMLDivElement>(null);
  const dialogTitleRef = useRef<HTMLDivElement>(null);
  const { dialogProps, titleProps } = useDialog(otherProps, dialogRef);
  const dismissButtonRef = useRef<HTMLButtonElement>(null);
  const dismissButtonProps = useButton(
    { onPress: onDismiss },
    dismissButtonRef,
  ).buttonProps;

  useEffect(() => {
    dialogTitleRef.current?.focus();
  }, []);

  const dismissButton =
    typeof onDismiss === "function" ? (
      <button
        {...dismissButtonProps}
        ref={dismissButtonRef}
        className={styles.dismissButton}
        /* c8 ignore start */
        onClick={() => {
          onDismiss();
        }}
        /* c8 ignore stop */
      >
        <CloseBtn
          alt={l10n.getString("close-modal-alt")}
          width="14"
          height="14"
        />
      </button>
    ) : null;

  return (
    <div
      {...dialogProps}
      ref={dialogRef}
      className={`${styles.dialog} ${fitContent ? styles.fitContent : ""}`}
    >
      {dismissButton}
      <div tabIndex={-1} ref={dialogTitleRef} className={styles.header}>
        {illustration && (
          <div className={styles.illustrationWrapper}>{illustration}</div>
        )}
        {title && (
          <div {...titleProps} className={styles.title}>
            {title}
          </div>
        )}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
