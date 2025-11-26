/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useRef } from "react";
import Image from "next/image";
import { useOverlayTriggerState } from "react-stately";
import { useButton, useOverlayTrigger } from "react-aria";
import styles from "./ProgressCard.module.scss";
import { ModalOverlay } from "./dialog/ModalOverlay";
import { Dialog } from "./dialog/Dialog";
import { Button } from "../client/Button";
import { useL10n } from "../../hooks/l10n";
import ExploringLaptopPlus from "./assets/exploring-laptop-check.svg";
import ExploringLaptopMinus from "./assets/exploring-laptop-minus.svg";
import ExploringLaptopInProgress from "./assets/exploring-laptop-in-progress.svg";
import { LockIcon, QuestionMarkCircle } from "../server/Icons";
import ModalImage from "../client/assets/modal-default-img.svg";
import { VisuallyHidden } from "../server/VisuallyHidden";

export type Props = {
  resolvedByYou: number;
  isPremiumUser: boolean;
  isEligibleForPremium: boolean;
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

  const explainerDialogTriggerRef = useRef<HTMLButtonElement>(null);
  const explainerDialogTriggerProps = useButton(
    explainerDialogTrigger.triggerProps,
    explainerDialogTriggerRef,
  ).buttonProps;

  return (
    <div className={styles.progressCard}>
      <div className={styles.header}>
        {l10n.getString(
          props.isPremiumUser
            ? "progress-card-heres-what-we-fixed-headline-premium"
            : "progress-card-heres-what-we-fixed-headline-all",
        )}
        {props.isEligibleForPremium && (
          <button
            ref={explainerDialogTriggerRef}
            {...explainerDialogTriggerProps}
            onClick={() => explainerDialogState.open()}
            aria-label={l10n.getString("open-modal-alt")}
            aria-describedby="whatWeFixedInfo"
          >
            <VisuallyHidden id="whatWeFixedInfo">
              {l10n.getString(
                props.isPremiumUser
                  ? "progress-card-heres-what-we-fixed-headline-premium"
                  : "progress-card-heres-what-we-fixed-headline-all",
              )}
            </VisuallyHidden>
            <QuestionMarkCircle alt="" width="15" height="15" />
          </button>
        )}
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

        {/* Auto-removed */}
        {(props.isEligibleForPremium || props.isPremiumUser) && (
          <div
            className={`${styles.progressItem} ${
              !props.isPremiumUser && styles.greyedOut
            }`}
          >
            <div className={styles.progressStat}>
              <Image src={ExploringLaptopMinus} alt="" width="50" height="50" />
            </div>
            <p>
              {!props.isPremiumUser && (
                <LockIcon
                  alt={l10n.getString("progress-card-locked-alt")}
                  width="10"
                  height="10"
                />
              )}
              {l10n.getString("progress-card-auto-removed-headline")}
            </p>
          </div>
        )}

        {/* In Progress */}
        {props.isPremiumUser && (
          <div className={styles.progressItem}>
            <div className={styles.progressStat}>
              <Image
                src={ExploringLaptopInProgress}
                alt=""
                width="50"
                height="50"
              />
            </div>
            <p>{l10n.getString("progress-card-in-progress-headline")}</p>
          </div>
        )}
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
