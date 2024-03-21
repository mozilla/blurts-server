/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useEffect, useState } from "react";
import { useOverlayTriggerState } from "react-stately";
import { useOverlayTrigger } from "react-aria";
import Image from "next/image";
import styles from "./CancelFlow.module.scss";
import CancelConfirmDialogIllustration from "./images/CancelConfirmDialogIllustration.svg";
import CancelSurveyDialogIllustration from "./images/CancelSurveyDialogIllustration.svg";
import CancelRedirectDialogIllustration from "./images/CancelRedirectDialogIllustration.svg";
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

  useEffect(() => {
    const messageListener = (message: MessageEvent) => {
      if (message.origin !== "https://survey.alchemer.com") {
        return;
      }
      if (message.data === "survey-complete") {
        setCurrentStep("redirecting");
        setTimeout(() => {
          document.location = props.fxaSubscriptionsUrl;
        }, 5000);
      }
    };

    window.addEventListener("message", messageListener);

    return () => {
      window.removeEventListener("message", messageListener);
    };
  }, [props.fxaSubscriptionsUrl]);

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
                  : "settings-cancel-plus-step-redirecting-heading",
            )}
            illustration={
              <Image
                src={
                  step === "confirm"
                    ? CancelConfirmDialogIllustration
                    : step === "survey"
                      ? CancelSurveyDialogIllustration
                      : CancelRedirectDialogIllustration
                }
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
                    className={styles.dismissLink}
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
                  <iframe
                    src="https://survey.alchemer.com/s3/7768897/SPIKE-CSAT-Monitor"
                    frameBorder={0}
                    className={styles.surveyIframe}
                  ></iframe>
                  <p>
                    {l10n.getFragment("settings-cancel-plus-step-survey-note", {
                      elems: { b: <b /> },
                    })}
                  </p>
                  {/*
                  // Replaced by listening to survey-complete events:
                  <Button
                    variant="primary"
                    onPress={() => {
                      setCurrentStep("redirecting");
                      setTimeout(() => {
                        document.location = props.fxaSubscriptionsUrl;
                      }, 5000);
                    }}
                  >
                    {l10n.getString(
                      "settings-cancel-plus-step-survey-cta-label",
                    )}
                  </Button>
                  */}
                  <Button
                    variant="tertiary"
                    onPress={() => dialogState.close()}
                    className={styles.dismissLink}
                  >
                    {l10n.getString(
                      "settings-cancel-plus-step-survey-cancel-label",
                    )}
                  </Button>
                </>
              )}
              {step === "redirecting" && (
                <>
                  <p>
                    {l10n.getString(
                      "settings-cancel-plus-step-redirecting-lead",
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
