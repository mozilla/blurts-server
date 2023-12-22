/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import {
  ReactElement,
  RefObject,
  cloneElement,
  forwardRef,
  useRef,
} from "react";
import Image from "next/image";
import { OverlayTriggerAria, useOverlayTrigger } from "react-aria";
import { OverlayTriggerState, useOverlayTriggerState } from "react-stately";
import { Button } from "./Button";
import { Dialog } from "./dialog/Dialog";
import { ModalOverlay } from "./dialog/ModalOverlay";
import ModalImage from "../client/assets/subscriber-waitlist-dialog-icon.svg";
import { useL10n } from "../../hooks/l10n";
import styles from "./SubscriberWaitlistDialog.module.scss";

function WaitlistDialog({
  dialogTriggerState,
  overlayTrigger,
}: {
  dialogTriggerState: OverlayTriggerState;
  overlayTrigger: OverlayTriggerAria;
}) {
  const l10n = useL10n();

  return (
    dialogTriggerState.isOpen && (
      <ModalOverlay
        {...overlayTrigger.overlayProps}
        state={dialogTriggerState}
        isDismissable={true}
      >
        <Dialog
          title={l10n.getString("subscriber-waitlist-dialog-title")}
          illustration={<Image src={ModalImage} alt="" />}
          onDismiss={() => dialogTriggerState.close()}
        >
          <div className={styles.dialogContent}>
            {l10n.getString("subscriber-waitlist-dialog-info-text")}
            <br />
            <br />
            {l10n.getString("subscriber-waitlist-dialog-instruction-text")}

            <div className={styles.buttonWrapper}>
              <Button
                variant="primary"
                href={process.env.NEXT_PUBLIC_WAITLIST_URL}
              >
                {l10n.getString("subscriber-waitlist-dialog-cta-button-label")}
              </Button>
              <Button
                variant="secondary"
                onPress={() => dialogTriggerState.close()}
              >
                {l10n.getString("subscriber-waitlist-dialog-skip-button-label")}
              </Button>
            </div>
          </div>
        </Dialog>
      </ModalOverlay>
    )
  );
}

type DialogProps = {
  children?: ReactElement;
  triggerRef?: RefObject<HTMLButtonElement | HTMLAnchorElement>;
  dialogTriggerState?: OverlayTriggerState;
  overlayTrigger?: OverlayTriggerAria;
};

const WaitlistDialogWithTrigger = (props: DialogProps) => {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const triggerState = useOverlayTriggerState({});
  const overlay = useOverlayTrigger({ type: "dialog" }, triggerState, ref);

  const triggerRef = props.triggerRef ?? ref;
  const dialogTriggerState = props.dialogTriggerState ?? triggerState;
  const overlayTrigger = props.overlayTrigger ?? overlay;

  return (
    <>
      {props.children &&
        cloneElement(props.children, {
          ...overlayTrigger.triggerProps,
          ref: triggerRef,
        })}
      <WaitlistDialog
        dialogTriggerState={dialogTriggerState}
        overlayTrigger={overlayTrigger}
      />
    </>
  );
};

export const SubscriberWaitlistDialog = forwardRef(WaitlistDialogWithTrigger);
