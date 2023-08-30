/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { CSSProperties, useRef } from "react";
import Image from "next/image";
import { useOverlayTriggerState } from "react-stately";
import { useButton, useOverlayTrigger } from "react-aria";
import styles from "./ProgressCard.module.scss";
import { ModalOverlay } from "./dialog/ModalOverlay";
import { Dialog } from "./dialog/Dialog";
import { Button } from "../server/Button";
import { useL10n } from "../../hooks/l10n";
import ExploringLaptopPlus from "./assets/exploring-laptop-check.svg";
import ExploringLaptopMinus from "./assets/exploring-laptop-minus.svg";
import SparklingCheck from "./assets/sparkling-check.svg";
import { QuestionMarkCircle } from "../server/Icons";
import ModalImage from "../client/assets/modal-default-img.svg";

export type Props = {
  resolvedByYou: number;
  autoRemoved: number;
  totalNumExposures: number;
};

function PercentageComplete(props: Props) {
  const totalRemoved = props.autoRemoved + props.resolvedByYou;

  const percentageCompleteNum =
    totalRemoved > 0 && props.totalNumExposures > 0
      ? ((props.autoRemoved + props.resolvedByYou) / props.totalNumExposures) *
        100
      : 0; // Prevents the division of 0
  return percentageCompleteNum;
}

export const ProgressCard = (props: Props) => {
  const percentageCompleteNum = Math.round(PercentageComplete(props)); // Ensures a whole number
  const percentageRemainingNumber = 100 - percentageCompleteNum;

  const l10n = useL10n();
  const explainerDialogState = useOverlayTriggerState({});
  const explainerDialogTrigger = useOverlayTrigger(
    { type: "dialog" },
    explainerDialogState
  );

  const activeProgressBarStyle: CSSProperties = {
    width: `${percentageCompleteNum}%`,
  };

  const ProgressBar = () => {
    return (
      <div className={styles.progressBarContainer}>
        <div className={styles.fullProgressBar}>
          <div
            className={styles.activeProgressBar}
            style={activeProgressBarStyle}
          ></div>
          <div className={styles.percentageBreakdown}>
            <p>
              {l10n.getString("progress-card-percentage-complete", {
                percentage: `${percentageCompleteNum}`,
              })}
            </p>
            <p>
              {l10n.getString("progress-card-percentage-remaining", {
                percentage: `${percentageRemainingNumber}`,
              })}
            </p>
          </div>
        </div>
        <Image src={SparklingCheck} alt="" />
      </div>
    );
  };

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

  const explainerDialogTriggerRef = useRef<HTMLButtonElement>(null);
  const explainerDialogTriggerProps = useButton(
    explainerDialogTrigger.triggerProps,
    explainerDialogTriggerRef
  ).buttonProps;

  return (
    <div className={styles.progressCard}>
      <div className={styles.header}>
        {l10n.getString("progress-card-heres-what-we-fixed-headline")}
        <button
          aria-label={l10n.getString("modal-open-alt")}
          ref={explainerDialogTriggerRef}
          {...explainerDialogTriggerProps}
          onClick={() => explainerDialogState.open()}
        >
          <QuestionMarkCircle alt="" width="15" height="15" />
        </button>
      </div>
      <div className={styles.progressStatsWrapper}>
        <div className={styles.progressItem}>
          <div className={styles.progressStat}>
            <Image src={ExploringLaptopPlus} alt="" width="50" height="50" />
            <span>{props.resolvedByYou}</span>
          </div>
          <p>{l10n.getString("progress-card-resolved-by-you-headline")}</p>
        </div>
        <div className={styles.progressItem}>
          <div className={styles.progressStat}>
            <Image src={ExploringLaptopMinus} alt="" width="50" height="50" />
            <span>{props.autoRemoved}</span>
          </div>
          <p>{l10n.getString("progress-card-auto-removed-headline")}</p>
        </div>
      </div>
      <ProgressBar />
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
