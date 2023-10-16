/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactElement, useRef } from "react";
import { AriaModalOverlayProps, Overlay, useModalOverlay } from "react-aria";
import { OverlayTriggerState } from "react-stately";
import styles from "./ModalOverlay.module.scss";
import { Props as DialogProps } from "./Dialog";

export type Props = {
  // Sort-of force passing a `<Dialog>` element
  children: ReactElement<DialogProps>;
  state: OverlayTriggerState;
} & AriaModalOverlayProps;

export const ModalOverlay = ({ state, children, ...otherProps }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { modalProps, underlayProps } = useModalOverlay(
    otherProps,
    state,
    modalRef,
  );

  return (
    <Overlay>
      <div className={styles.underlay} {...underlayProps}>
        <div {...modalProps} ref={modalRef} className={styles.childrenWrapper}>
          {children}
        </div>
      </div>
    </Overlay>
  );
};
