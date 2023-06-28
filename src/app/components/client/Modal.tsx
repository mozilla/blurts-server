/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactElement, useRef } from "react";
import styles from "./Modal.module.scss";
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
import { Button } from "../server/Button";
import { StaticImageData } from "next/image";
import { metropolis } from "../../../../src/app/fonts/Metropolis/metropolis";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export type Props = {
  isOpen: boolean;
  onClose: () => void;
  image: StaticImageData;
  headline: string | ReactElement;
  body: string | ReactElement;
};

export const Modal = (props: Props) => {
  if (!props.isOpen) {
    return null;
  }

  return (
    <OverlayContainer>
      <DialogBox
        isOpen={props.isOpen}
        headline={props.headline}
        body={props.body}
        onClose={() => props.onClose()}
        isDismissable={true}
        image={props.image}
        exitBtn={true}
      ></DialogBox>
    </OverlayContainer>
  );
};

type DialogBox = {
  headline: string | ReactElement;
  body: string | ReactElement;
  isOpen: boolean;
  image: StaticImageData;
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
    <div className={styles.modalUnderlay} {...underlayProps}>
      <FocusScope contain restoreFocus autoFocus>
        <div
          {...overlayProps}
          {...dialogProps}
          {...modalProps}
          ref={wrapperRef}
          className={`${styles.modal} ${inter.variable} ${metropolis.variable}`}
        >
          {props.exitBtn ? (
            <button
              className={styles.dismissButton}
              {...cancelButton.buttonProps}
              ref={cancelButtonRef}
            >
              <CloseBtn alt="" width="14" height="14" />
            </button>
          ) : null}
          <img src={props.image.src} alt="" />
          <dl className={styles.modalContent}>
            <dt>{props.headline}</dt>
            <dd>{props.body}</dd>
          </dl>
          <Button type={"primary"} content={"OK"} />
        </div>
      </FocusScope>
    </div>
  );
};
