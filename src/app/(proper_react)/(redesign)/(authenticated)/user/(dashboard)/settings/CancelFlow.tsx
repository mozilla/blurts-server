/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useState } from "react";
import { useOverlayTriggerState } from "react-stately";
import { useOverlayTrigger } from "react-aria";
import Image from "next/image";
import styles from "./CancelFlow.module.scss";
import CancellationFlowStaticImage from "./images/CancellationFlowIllustration.svg";
import { useTelemetry } from "../../../../../../hooks/useTelemetry";
import { ModalOverlay } from "../../../../../../components/client/dialog/ModalOverlay";
import { Dialog } from "../../../../../../components/client/dialog/Dialog";
import { Button } from "../../../../../../components/client/Button";
import { useL10n } from "../../../../../../hooks/l10n";
import { TelemetryButton } from "../../../../../../components/client/TelemetryButton";
import { ExperimentData } from "../../../../../../../telemetry/generated/nimbus/experiments";

export type Props = {
  fxaSubscriptionsUrl: string;
  experimentData?: ExperimentData["Features"];
};

type Step = "confirm" | "survey" | "redirecting";

export const CancelFlow = (props: Props) => {
  const l10n = useL10n();
  const recordTelemetry = useTelemetry();
  const [step, setCurrentStep] = useState<Step>("confirm");

  const dialogState = useOverlayTriggerState({
    onOpenChange: (isOpen) => {
      if (isOpen) {
        recordTelemetry("popup", "view", {
          popup_id: "settings-cancel-monitor-plus-dialog",
        });
        setCurrentStep("confirm");
      }
    },
  });

  const dialogTrigger = useOverlayTrigger({ type: "dialog" }, dialogState);

  const dialogTitle = () => {
    switch (step) {
      case "confirm":
        return "settings-cancel-plus-step-confirm-heading";
      case "redirecting":
        return "settings-unsubscribe-dialog-confirmation-redirect-title";
      case "survey":
        return "settings-cancel-plus-step-survey-heading";
    }
  };

  return (
    <>
      <Button
        variant="link"
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
            title={l10n.getString(dialogTitle())}
            illustration={<Animation />}
            onDismiss={() => {
              recordTelemetry("popup", "exit", {
                popup_id: "exited_cancel_flow",
              });
              dialogState.close();
            }}
          >
            <div className={styles.contentWrapper}>
              {step === "confirm" && (
                <>
                  <p>
                    {l10n.getString(
                      "settings-cancel-plus-step-confirm-content",
                    )}
                  </p>
                  <TelemetryButton
                    event={{
                      module: "popup",
                      name: "exit",
                      data: {
                        popup_id: "never_mind_take_me_back",
                      },
                    }}
                    variant="primary"
                    onPress={() => dialogState.close()}
                    className={styles.primaryCta}
                  >
                    {l10n.getString(
                      "settings-cancel-plus-step-confirm-cancel-label",
                    )}
                  </TelemetryButton>
                  <TelemetryButton
                    event={{
                      module: "button",
                      name: "click",
                      data: {
                        button_id: "continue_to_cancellation",
                      },
                    }}
                    variant="link"
                    onPress={() => setCurrentStep("survey")}
                    className={styles.tertiaryCta}
                  >
                    {l10n.getString(
                      "settings-cancel-plus-step-confirm-cta-label",
                    )}
                  </TelemetryButton>
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
                  <TelemetryButton
                    event={{
                      module: "button",
                      name: "click",
                      data: {
                        button_id: "continue_to_cancellation",
                      },
                    }}
                    className={styles.tertiaryCta}
                    variant="link"
                    onPress={() => {
                      setCurrentStep("redirecting");
                      setTimeout(() => {
                        /* c8 ignore next */
                        document.location = props.fxaSubscriptionsUrl;
                      }, 5000);
                    }}
                  >
                    {l10n.getString(
                      "settings-cancel-plus-step-survey-cta-label",
                    )}
                  </TelemetryButton>
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

const Animation = () => {
  return (
    <>
      <video
        aria-hidden={true}
        autoPlay={true}
        loop={true}
        muted={true}
        className={styles.cancellationAnimation}
        playsInline
      >
        <source
          // Unfortunately video files cannot currently be imported, so make
          // sure these files are present in /public. See
          // https://github.com/vercel/next.js/issues/35248
          type="video/mp4"
          src="/animations/CancellationFlowAnimation.mp4"
        />
        <source
          type="video/webm"
          src="/animations/CancellationFlowAnimation.webm"
        />
        {/* Fall back to the image if the video formats are not supported: */}
        <Image
          className={styles.cancellationIllustrationWrapper}
          src={CancellationFlowStaticImage}
          alt=""
        />
      </video>
      {/* Fall back to the image if the video formats are not supported: */}
      {/* The .staticAlternative class ensures that this image will only be shown if the user has prefers-reduced-motion on */}
      <Image
        className={`
${styles.cancellationIllustrationWrapper}
${styles.staticAlternative}
`}
        src={CancellationFlowStaticImage}
        alt=""
      />
    </>
  );
};
