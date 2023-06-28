/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactElement, useRef } from "react";
import styles from "./Modal.module.scss"
import { CloseBtn } from "../server/Icons";
import {
  OverlayContainer,
  FocusScope,
  useDialog,
  useModal,
  useOverlay,
  usePreventScroll,
  AriaOverlayProps,
  useButton,
} from "react-aria";

export type Props = {
  isOpen: boolean,
  onClose: () => void,
  content: ReactElement,
}

// export const Modal = (props: Props) => {
//   if (!props.isOpen) {
//     return null; // Render nothing if the modal is closed
//   }

//     return (
//       <div role="dialog" aria-modal="true" aria-label="Modal" className={styles.modalOverlay}>
//         <div className={styles.modal}>
//           <div className={styles.modalContent}>
//             {props.content}
//             <button aria-label="Close modal" className={styles.closeButton} onClick={props.onClose}><CloseBtn alt="" width="14" height="14"/></button>
//           </div>
//         </div>
//       </div>
//     );

// };

export const Modal = (props: Props) => {

  if (!props.isOpen) {
    return null; 
  }

  return (
    <OverlayContainer>
      <DialogBox
        isOpen={props.isOpen}
        headline={"Title goes here"}
        body={"Body text goes here"}
        onClose={() => props.onClose()}
        isDismissable={true}
        exitBtn={true}
      ></DialogBox>
    </OverlayContainer>
  )

};

type DialogBox = {
  headline: string | ReactElement;
  body: string | ReactElement;
  isOpen: boolean;
  onClose: () => void;
  exitBtn: boolean;
};

const DialogBox = (props: DialogBox & AriaOverlayProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { overlayProps, underlayProps } = useOverlay(props, wrapperRef);
  usePreventScroll();
  const { modalProps } = useModal();
  const { dialogProps } = useDialog({}, wrapperRef);
  const cancelButtonRef = useRef<HTMLButtonElement>(null);
  const cancelButton = useButton(
    { onPress: () => props.onClose() },
    cancelButtonRef
  );

  return (
    <div className={styles.underlay} {...underlayProps}>
      <FocusScope contain restoreFocus autoFocus>
        <div
          {...overlayProps}
          {...dialogProps}
          {...modalProps}
          ref={wrapperRef}
        >
          {props.exitBtn ? (
            <button
              {...cancelButton.buttonProps}
              ref={cancelButtonRef}
              className={styles["dismiss-button"]}
            >
              <CloseBtn alt="" width="14" height="14"/>
            </button>
          ) : null}
          <div>
            <div className={styles.hero}>
              <h3 className={styles.headline}>{props.headline}</h3>
            </div>
            <div>{props.body}</div>
          </div>
        </div>
      </FocusScope>
    </div>
  );
};
