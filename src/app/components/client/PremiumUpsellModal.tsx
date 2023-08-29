/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactNode } from "react";
import type { OverlayTriggerProps, OverlayTriggerState } from "react-stately";
import { Dialog } from "./dialog/Dialog";
import { ModalOverlay } from "./dialog/ModalOverlay";
import styles from "./PremiumUpsellModal.module.scss";

export interface PremiumUpsellModalProps {
  children: ReactNode;
  state: OverlayTriggerState;
}

function PremiumUpsellModal({
  children,
  state,
  ...otherProps
}: PremiumUpsellModalProps & OverlayTriggerProps) {
  return (
    <div className={styles.modal}>
      {children}
      {state.isOpen && (
        <ModalOverlay state={state} {...otherProps} isDismissable={true}>
          <Dialog title="Title" onDismiss={() => void state.close()}>
            <div>Dialog</div>
          </Dialog>
        </ModalOverlay>
      )}
    </div>
  );
}

export { PremiumUpsellModal };
