/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode, useRef } from "react";
import { AriaDialogProps, useDialog } from "react-aria";
import styles from "./Dialog.module.scss";

export type Props = {
  children: ReactNode;
  title?: ReactNode;
  illustration?: ReactNode;
} & AriaDialogProps;

export const Dialog = ({
  children,
  title,
  illustration,
  ...otherProps
}: Props) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const { dialogProps, titleProps } = useDialog(otherProps, dialogRef);

  return (
    <div {...dialogProps} ref={dialogRef} className={styles.dialog}>
      {illustration && (
        <div className={styles.illustrationWrapper}>{illustration}</div>
      )}
      {title && (
        <h3 {...titleProps} className={styles.title}>
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};
