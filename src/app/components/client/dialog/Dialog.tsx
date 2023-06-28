/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode, useRef } from "react";
import { AriaDialogProps, useDialog } from "react-aria";
import styles from "./Dialog.module.scss";

export type Props = {
  children: ReactNode;
  title?: ReactNode;
} & AriaDialogProps;

export const Dialog = ({ children, title, ...otherProps }: Props) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const { dialogProps, titleProps } = useDialog(otherProps, dialogRef);

  return (
    <div {...dialogProps} ref={dialogRef} className={styles.dialog}>
      {title && <h3 {...titleProps}>{title}</h3>}
      {children}
    </div>
  );
};
