/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Image from "next/image";
import { useOverlayTriggerState } from "react-stately";
import { useButton, useOverlayTrigger } from "react-aria";
import howItWorksHero from "./images/welcome-how-it-works.svg";
import { useL10n } from "../../../../../hooks/l10n";
import { ModalOverlay } from "../../../../../components/client/dialog/ModalOverlay";
import { Dialog } from "../../../../../components/client/dialog/Dialog";
import { Button } from "../../../../../components/client/Button";

import styles from "./GetStarted.module.scss";
import { useRef } from "react";
import { useTelemetry } from "../../../../../hooks/useTelemetry";
import { FeatureFlagName } from "../../../../../../db/tables/featureFlags";

export type Props = {
  dataBrokerCount: number;
  onStart: () => void;
  enabledFeatureFlags: FeatureFlagName[];
};

export const GetStarted = (props: Props) => {
  const l10n = useL10n();
  const recordTelemetry = useTelemetry();
  const explainerDialogState = useOverlayTriggerState({});
  const explainerDialogTrigger = useOverlayTrigger(
    { type: "dialog" },
    explainerDialogState,
  );

  const triggerRef = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(
    explainerDialogTrigger.triggerProps,
    triggerRef,
  );

  return (
    <div className={styles.stepContent}>
      <h1>{l10n.getString("onboarding-get-started-heading")}</h1>
      <p>{l10n.getString("onboarding-get-started-content-data")}</p>
      <p>{l10n.getString("onboarding-get-started-content-price")}</p>
      <p>
        <button
          {...buttonProps}
          ref={triggerRef}
          onClick={() => {
            recordTelemetry("button", "click", {
              button_id: "welcome_data_protection",
            });
            explainerDialogState.open();
          }}
          className={styles.explainerTrigger}
        >
          {l10n.getString("onboarding-get-started-content-explainer")}
        </button>
        {explainerDialogState.isOpen && (
          <ModalOverlay
            state={explainerDialogState}
            {...explainerDialogTrigger.overlayProps}
            isDismissable={true}
          >
            <Dialog
              title={
                <>
                  {l10n.getString(
                    "onboarding-get-started-how-it-works-dialog-heading-line1",
                  )}
                  <br />
                  {l10n.getString(
                    "onboarding-get-started-how-it-works-dialog-heading-line2",
                  )}
                </>
              }
              illustration={<Image src={howItWorksHero} alt="" />}
            >
              <div className={styles.dialogContents}>
                <ol className={styles.list}>
                  <li>
                    <strong>
                      {l10n.getString(
                        "onboarding-get-started-how-it-works-dialog-step1-heading",
                      )}
                    </strong>
                    <p>
                      {props.enabledFeatureFlags.includes("MaskDataBrokerCount")
                        ? l10n.getString(
                            "onboarding-get-started-how-it-works-dialog-step1-content",
                          )
                        : l10n.getString(
                            "onboarding-get-started-how-it-works-dialog-step1-content",
                            { dataBrokerTotalCount: props.dataBrokerCount },
                          )}
                    </p>
                  </li>
                  <li>
                    <strong>
                      {l10n.getString(
                        "onboarding-get-started-how-it-works-dialog-step2-heading",
                      )}
                    </strong>
                    <p>
                      {l10n.getString(
                        "onboarding-get-started-how-it-works-dialog-step2-content",
                      )}
                    </p>
                  </li>
                  <li>
                    <strong>
                      {l10n.getString(
                        "onboarding-get-started-how-it-works-dialog-step3-heading",
                      )}
                    </strong>
                    <p>
                      {l10n.getString(
                        "onboarding-get-started-how-it-works-dialog-step3-content",
                      )}
                    </p>
                  </li>
                </ol>
                <div className={styles.confirmButtonWrapper}>
                  <Button
                    variant="primary"
                    onPress={() => explainerDialogState.close()}
                    autoFocus={true}
                    className={styles.startButton}
                  >
                    {l10n.getString(
                      "onboarding-get-started-how-it-works-dialog-confirm-label",
                    )}
                  </Button>
                </div>
              </div>
            </Dialog>
          </ModalOverlay>
        )}
      </p>
      <div className={styles.stepButtonWrapper}>
        <Button variant="primary" onPress={() => props.onStart()}>
          {l10n.getString("onboarding-get-started-cta-label")}
        </Button>
      </div>
    </div>
  );
};
