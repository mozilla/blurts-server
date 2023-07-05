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
import { getL10n } from "../../functions/server/l10n";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export type ModalProps = {
  image: StaticImageData;
  headline: string | ReactElement;
  body: string | ReactElement;
  cta?: {
    content: string;
    link: () => void;
  };
};

export const Modal = (props: ModalProps & AriaOverlayProps) => {
  return (
    <OverlayContainer>
      <DialogBox
        isOpen={props.isOpen}
        onClose={props.onClose}
        headline={props.headline}
        body={props.body}
        isDismissable={true}
        image={props.image}
        cta={props.cta}
      />
    </OverlayContainer>
  );
};

const DialogBox = (props: AriaOverlayProps & ModalProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { overlayProps, underlayProps } = useOverlay(props, wrapperRef);
  usePreventScroll();
  const { modalProps } = useModal();
  const { dialogProps } = useDialog({}, wrapperRef);
  const cancelButtonRef = useRef<HTMLButtonElement>(null);
  const cancelButton = useButton({ onPress: props.onClose }, cancelButtonRef);
  const l10n = getL10n();

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
          <button
            className={styles.dismissButton}
            {...cancelButton.buttonProps}
            ref={cancelButtonRef}
          >
            <CloseBtn
              alt={l10n.getString("modal-close-alt")}
              width="14"
              height="14"
            />
          </button>
          <img src={props.image.src} alt="" />
          <dl className={styles.modalContent}>
            <dt>{props.headline}</dt>
            <dd>{props.body}</dd>
          </dl>
          {props.cta && (
            <Button
              type="primary"
              content={props.cta.content}
              onClick={props.cta.link}
            />
          )}
        </div>
      </FocusScope>
    </div>
  );
};
