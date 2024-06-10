/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactElement, useEffect, useState } from "react";
import { useOverlayTriggerState } from "react-stately";
import { useOverlayTrigger } from "react-aria";
import Image from "next/image";
import styles from "./CancelFlow.module.scss";
import CancellationFlowStaticImage from "./images/CancellationFlowIllustration.svg";
import CancellationFlowDiscountAppliedStaticImage from "./images/CancellationFlowDiscountAppliedStaticImage.svg";
import { useTelemetry } from "../../../../../../hooks/useTelemetry";
import { ModalOverlay } from "../../../../../../components/client/dialog/ModalOverlay";
import { Dialog } from "../../../../../../components/client/dialog/Dialog";
import { Button } from "../../../../../../components/client/Button";
import { useL10n } from "../../../../../../hooks/l10n";
import { TelemetryButton } from "../../../../../../components/client/TelemetryButton";
import { ExperimentData } from "../../../../../../../telemetry/generated/nimbus/experiments";
import { onApplyCouponCode } from "./actions";

export type Props = {
  fxaSubscriptionsUrl: string;
  confirmationFlagEnabled: boolean;
  experimentData?: ExperimentData;
};

type DiscountData = {
  headline: string;
  successDescription: string;
  subtitle: string;
  active: { enabled: boolean } | undefined;
};

export const CancelFlow = (props: Props) => {
  const l10n = useL10n();
  const recordTelemetry = useTelemetry();
  const currentStep = props.confirmationFlagEnabled ? "confirm" : "survey";
  const [step, setCurrentStep] = useState<
    "confirm" | "survey" | "all-set" | "redirecting"
  >(currentStep);

  const dialogState = useOverlayTriggerState({
    onOpenChange: (isOpen) => {
      recordTelemetry("popup", isOpen ? "view" : "exit", {
        popup_id: "settings-cancel-monitor-plus-dialog",
      });
    },
  });

  const [primaryCta, setPrimaryCta] = useState<ReactElement>();
  const [ctaSubtitle, setCtaSubtitle] = useState<ReactElement>();

  const discountedNextMonth: DiscountData = {
    headline: l10n.getString("settings-unsubscribe-dialog-promotion-cta", {
      discount_percentage_num: "20%",
      discount_duration: 1,
    }),
    successDescription: l10n.getString(
      "settings-unsubscribe-dialog-promotion-description",
      {
        discount_percentage_num: "20%",
        discount_duration: 1,
      },
    ),
    subtitle: l10n.getString(
      "settings-unsubscribe-dialog-promotion-cta-subtitle",
    ),
    active: props.experimentData?.["next-month-discount"],
  };

  const discountedNext3Months: DiscountData = {
    headline: l10n.getString("settings-unsubscribe-dialog-promotion-cta", {
      discount_percentage_num: "30%",
      discount_duration: 3,
    }),
    successDescription: l10n.getString(
      "settings-unsubscribe-dialog-promotion-description",
      {
        discount_percentage_num: "20%",
        discount_duration: 3,
      },
    ),
    subtitle: l10n.getString(
      "settings-unsubscribe-dialog-promotion-limitations-apply",
    ),
    active: props.experimentData?.["next-three-months-discount"],
  };

  useEffect(() => {
    // Current experiment
    if (props.experimentData?.["next-three-months-discount"].enabled) {
      setPrimaryCta(
        <TelemetryButton
          event={{
            module: "ctaButton",
            name: "click",
            data: {
              button_id: "stay_get_30_off",
            },
          }}
          variant="primary"
          onPress={() =>
            // setCurrentStep("all-set")
            void onApplyCouponCode()
          }
          className={`${styles.discountCta} ${styles.primaryCta}`}
        >
          {discountedNext3Months.headline}
        </TelemetryButton>,
      );
      setCtaSubtitle(<>{discountedNext3Months.subtitle}</>);
    }
    // TODO: Future experiment, make sure to update the telemetry events
    else if (props.experimentData?.["next-month-discount"].enabled) {
      setPrimaryCta(
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
          className={`${styles.discountCta} ${styles.primaryCta}`}
        >
          {discountedNextMonth.headline}
        </TelemetryButton>,
      );
      setCtaSubtitle(<>{discountedNextMonth.subtitle}</>);
    } else {
      // Reset primaryCta if no condition matches
      setPrimaryCta(
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
          {l10n.getString("settings-cancel-plus-step-confirm-cancel-label")}
        </TelemetryButton>,
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dialogTrigger = useOverlayTrigger({ type: "dialog" }, dialogState);

  const dialogTitle = () => {
    switch (step) {
      case "confirm":
        return "settings-cancel-plus-step-confirm-heading";
      case "all-set":
        return "settings-unsubscribe-dialog-promotion-complete";
      case "redirecting":
        return "settings-unsubscribe-dialog-confirmation-redirect-title";
      case "survey":
        return "settings-cancel-plus-step-survey-heading";
    }
  };

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
            title={l10n.getString(dialogTitle())}
            illustration={
              <>
                <video
                  aria-hidden={true}
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  className={styles.cancellationAnimation}
                >
                  <source
                    // Unfortunately video files cannot currently be imported, so make
                    // sure these files are present in /public. See
                    // https://github.com/vercel/next.js/issues/35248
                    type="video/mp4"
                    src={
                      step === "all-set"
                        ? "/animations/CancellationFlowDiscountAppliedAnimation.mp4"
                        : "/animations/CancellationFlowAnimation.mp4"
                    }
                  />
                  <source
                    type="video/webm"
                    src={
                      step === "all-set"
                        ? "/animations/CancellationFlowDiscountAppliedAnimation.webm"
                        : "/animations/CancellationFlowAnimation.webm"
                    }
                  />
                  {/* Fall back to the image if the video formats are not supported: */}
                  <Image
                    className={styles.cancellationIllustrationWrapper}
                    src={
                      step === "all-set"
                        ? CancellationFlowDiscountAppliedStaticImage
                        : CancellationFlowStaticImage
                    }
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
            }
            onDismiss={() => dialogState.close()}
          >
            <div className={styles.contentWrapper}>
              {step === "confirm" && (
                <>
                  <p>
                    {l10n.getString(
                      "settings-cancel-plus-step-confirm-content",
                    )}
                  </p>
                  {primaryCta}
                  <small>{ctaSubtitle}</small>
                  <TelemetryButton
                    event={{
                      module: "button",
                      name: "click",
                      data: {
                        button_id: "continue_to_cancellation",
                      },
                    }}
                    variant="tertiary"
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
                    variant="tertiary"
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
              {step === "all-set" && (
                <>
                  <p>
                    {l10n.getString(
                      "settings-unsubscribe-dialog-promotion-description",
                      {
                        discount_duration: 3,
                        discount_percentage_num: "30%",
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
