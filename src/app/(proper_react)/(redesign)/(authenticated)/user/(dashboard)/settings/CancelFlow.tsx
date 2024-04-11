/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useState } from "react";
import { useOverlayTriggerState } from "react-stately";
import { useOverlayTrigger } from "react-aria";
import Image from "next/image";
import styles from "./CancelFlow.module.scss";
import CancellationSurveyPlaneIllustration from "./images/CancellationSurveyPlaneIllustration.png";
import { useTelemetry } from "../../../../../../hooks/useTelemetry";
import { ModalOverlay } from "../../../../../../components/client/dialog/ModalOverlay";
import { Dialog } from "../../../../../../components/client/dialog/Dialog";
import { Button } from "../../../../../../components/client/Button";
import { useL10n } from "../../../../../../hooks/l10n";

export type Props = {
  fxaSubscriptionsUrl: string;
};

export const CancelFlow = (props: Props) => {
  const l10n = useL10n();
  const recordTelemetry = useTelemetry();
  const [step, setCurrentStep] = useState<"confirm" | "survey" | "redirecting">(
    "confirm",
  );

  const dialogState = useOverlayTriggerState({
    onOpenChange: (isOpen) => {
      recordTelemetry("popup", isOpen ? "view" : "exit", {
        popup_id: "settings-cancel-monitor-plus-dialog",
      });
    },
  });

  const dialogTrigger = useOverlayTrigger({ type: "dialog" }, dialogState);

  return (
    <>
      <Button
        variant="tertiary"
        onPress={() => dialogState.open()}
        className={styles.trigger}
      >
        {l10n.getString("settings-cancel-plus-survey-button-label")}
      </Button>
      {dialogState.isOpen && (
        <ModalOverlay
          state={dialogState}
          {...dialogTrigger.overlayProps}
          isDismissable={true}
        >
          <Dialog
            title={l10n.getString(
              step === "confirm"
                ? "settings-cancel-plus-step-confirm-heading"
                : step === "survey"
                  ? "settings-cancel-plus-step-survey-heading"
                  : "settings-unsubscribe-dialog-confirmation-redirect-title",
            )}
            illustration={
              <Image
                className={styles.cancellationIllustrationWrapper}
                src={CancellationSurveyPlaneIllustration}
                alt=""
              />
            }
            onDismiss={() => dialogState.close()}
          >
            <div className={styles.contentWrapper}>
              {step === "confirm" && (
                <>
                  <p>
                    {l10n.getString(
                      "settings-cancel-plus-step-confirm-content-pt1",
                    )}
                  </p>
                  <p>
                    {l10n.getString(
                      "settings-cancel-plus-step-confirm-content-pt2",
                    )}
                  </p>
                  <Button
                    variant="primary"
                    onPress={() => setCurrentStep("survey")}
                  >
                    {l10n.getString(
                      "settings-cancel-plus-step-confirm-cta-label",
                    )}
                  </Button>
                  <Button
                    variant="tertiary"
                    onPress={() => dialogState.close()}
                    className={styles.tertiaryCta}
                  >
                    {l10n.getString(
                      "settings-cancel-plus-step-confirm-cancel-label",
                    )}
                  </Button>
                </>
              )}
              {step === "survey" && (
                <>
                  <p>
                    {l10n.getString("settings-cancel-plus-step-survey-lead")}
                  </p>

                  <div className={styles.iframeWrapper}>
                    <iframe
                      scrolling={"no"}
                      frameBorder={0}
                      src="https://mozilla.formstack.com/forms/mozilla_monitor_plus_cancel"
                      width="800"
                      height="320"
                      aria-label={l10n.getString(
                        "settings-unsubscribe-dialog-cancellation-survey-form-placeholder",
                      )}
                    ></iframe>
                  </div>
                  <Button
                    className={styles.tertiaryCta}
                    variant="tertiary"
                    onPress={() => {
                      setCurrentStep("redirecting");
                      setTimeout(() => {
                        document.location = props.fxaSubscriptionsUrl;
                      }, 5000);
                    }}
                  >
                    {l10n.getString("settings-unsubscribe-dialog-continue")}
                  </Button>
                </>
              )}
              {step === "redirecting" && (
                <>
                  <p>
                    {l10n.getString(
                      "settings-unsubscribe-dialog-confirmation-redirect-description-pt1",
                    )}
                  </p>
                  <p>
                    {l10n.getFragment(
                      "settings-unsubscribe-dialog-confirmation-redirect-description-pt2",
                      {
                        elems: {
                          b: <b />,
                        },
                      },
                    )}
                  </p>
                </>
              )}
            </div>
          </Dialog>
        </ModalOverlay>
      )}
    </>
  );
};
