/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Image from "next/image";
import { useOverlayTriggerState } from "react-stately";
import { useOverlayTrigger } from "react-aria";
import styles from "./ProgressCard.module.scss";
import { ModalOverlay } from "./dialog/ModalOverlay";
import { Dialog } from "./dialog/Dialog";
import { Button } from "../client/Button";
import { useL10n } from "../../hooks/l10n";
import ExploringLaptopPlus from "./assets/exploring-laptop-check.svg";
import ModalImage from "../client/assets/modal-default-img.svg";

export type Props = {
  resolvedByYou: number;
};

export const ProgressCard = (props: Props) => {
  const l10n = useL10n();
  const explainerDialogState = useOverlayTriggerState({});
  const explainerDialogTrigger = useOverlayTrigger(
    { type: "dialog" },
    explainerDialogState,
  );

  const modalContent = (
    <div className={styles.modalBodyContent}>
      <p>
        {l10n.getFragment("modal-heres-what-we-fixed-description-part-one", {
          elems: { b: <strong /> },
        })}
      </p>
      <p>
        {l10n.getFragment("modal-heres-what-we-fixed-description-part-two", {
          elems: { b: <strong /> },
        })}
      </p>
      <p>
        {l10n.getFragment("modal-heres-what-we-fixed-description-part-three", {
          elems: { b: <strong /> },
        })}
      </p>
      <div className={styles.confirmButtonWrapper}>
        <Button
          variant="primary"
          onPress={() => explainerDialogState.close()}
          autoFocus={true}
          className={styles.startButton}
        >
          {l10n.getString("modal-cta-ok")}
        </Button>
      </div>
    </div>
  );

  return (
    <div className={styles.progressCard}>
      <div className={styles.header}>
        {l10n.getString("progress-card-heres-what-we-fixed-headline-all")}
      </div>
      <div className={styles.progressStatsWrapper}>
        {/* Manually fixed */}
        <div className={styles.progressItem}>
          <div className={styles.progressStat}>
            <Image src={ExploringLaptopPlus} alt="" width="50" height="50" />
            <span>{props.resolvedByYou}</span>
          </div>
          <p>{l10n.getString("progress-card-manually-fixed-headline")}</p>
        </div>
      </div>
      {explainerDialogState.isOpen && (
        <ModalOverlay
          state={explainerDialogState}
          {...explainerDialogTrigger.overlayProps}
          isDismissable={true}
        >
          <Dialog
            title={l10n.getString("modal-heres-what-we-fixed-title")}
            illustration={<Image src={ModalImage} alt="" />}
            // TODO: Add unit test when changing this code:
            /* c8 ignore next */
            onDismiss={() => explainerDialogState.close()}
          >
            {modalContent}
          </Dialog>
        </ModalOverlay>
      )}
    </div>
  );
};
