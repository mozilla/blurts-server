/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Image from "next/image";
import { AriaModalOverlayProps } from "react-aria";
import { OverlayTriggerState } from "react-stately";
import { Button } from "./Button";
import { Dialog } from "./dialog/Dialog";
import { ModalOverlay } from "./dialog/ModalOverlay";
import ModalImage from "../client/assets/subscriber-waitlist-dialog-icon.svg";
import { useL10n } from "../../hooks/l10n";
import styles from "./SubscriberWaitlistDialog.module.scss";
import { CONST_URL_WAITLIST } from "../../../constants";

export function WaitlistDialog({
  dialogTriggerState,
  ...overlayProps
}: {
  dialogTriggerState: OverlayTriggerState;
} & AriaModalOverlayProps) {
  const l10n = useL10n();

  return (
    dialogTriggerState.isOpen && (
      <ModalOverlay
        {...overlayProps}
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
              <Button variant="primary" href={CONST_URL_WAITLIST}>
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
