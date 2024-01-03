/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { Children, ReactElement, RefObject, cloneElement, useRef } from "react";
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
            <p>{l10n.getString("subscriber-waitlist-dialog-info-text")}</p>
            <p>
              {l10n.getString("subscriber-waitlist-dialog-instruction-text")}
            </p>
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

export const SubscriberWaitlistDialog = (props: DialogProps) => {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const triggerState = useOverlayTriggerState({});
  const overlay = useOverlayTrigger({ type: "dialog" }, triggerState, ref);

  const triggerRef = props.triggerRef ?? ref;
  const dialogTriggerState = props.dialogTriggerState ?? triggerState;
  const overlayTrigger = props.overlayTrigger ?? overlay;

  const child = props.children && Children.only(props.children);
  return (
    <>
      {child &&
        cloneElement(child, {
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
