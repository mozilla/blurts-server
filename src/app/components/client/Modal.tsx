/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactElement } from "react";
import styles from "./Modal.module.scss";
import { CloseBtn } from "../server/Icons";

export type Props = {
  isOpen: boolean;
  onClose: () => void;
  content: ReactElement;
};

export const Modal = (props: Props) => {
  if (!props.isOpen) {
    return null; // Render nothing if the modal is closed
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Modal"
      className={styles.modalOverlay}
    >
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          {props.content}
          <button
            aria-label="Close modal"
            className={styles.closeButton}
            onClick={props.onClose}
          >
            <CloseBtn alt="" width="14" height="14" />
          </button>
        </div>
      </div>
    </div>
  );
};
