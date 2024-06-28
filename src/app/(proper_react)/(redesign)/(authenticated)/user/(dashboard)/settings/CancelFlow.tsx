/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useEffect, useState } from "react";
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
import { onApplyCouponCode, onCheckUserHasCurrentCouponSet } from "./actions";
import { TelemetryLink } from "../../../../../../components/client/TelemetryLink";
import { OpenInNew } from "../../../../../../components/server/Icons";

export type Props = {
  fxaSubscriptionsUrl: string;
  enableDiscountCoupon: boolean;
  experimentData?: ExperimentData;
};

type DiscountData = {
  headline: string;
  successDescription: string;
  subtitle: string;
};

export const CancelFlow = (props: Props) => {
  const l10n = useL10n();
  const recordTelemetry = useTelemetry();
  const [step, setCurrentStep] = useState<
    "confirm" | "survey" | "all-set" | "redirecting"
  >("confirm");

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

  const [couponSuccess, setCouponSuccess] = useState<boolean | null>(null);
  const [alreadyHasCouponSet, setAlreadyHasCouponSet] =
    useState<boolean>(false);

  const discountedNext3Months: DiscountData = {
    headline: l10n.getString("settings-unsubscribe-dialog-promotion-cta", {
      discount_percentage_num: "30%",
      discount_duration: 3,
    }),
    successDescription: l10n.getString(
      "settings-unsubscribe-dialog-promotion-description",
      {
        discount_percentage_num: "30%",
        discount_duration: 3,
      },
    ),
    subtitle: l10n.getString(
      "settings-unsubscribe-dialog-promotion-limitations-apply",
    ),
  };

  // Unless we mock out these functions, we can't test them at the moment
  /* c8 ignore start */
  const handleApplyCouponCode = async () => {
    const result = await onApplyCouponCode();
    if (result?.success) {
      setCouponSuccess(true);
    } else {
      setCouponSuccess(false);
    }
  };

  const checkCouponCode = async () => {
    const result = await onCheckUserHasCurrentCouponSet();
    if (typeof result.success === "boolean") {
      setAlreadyHasCouponSet(result.success);
    } else {
      setAlreadyHasCouponSet(false);
    }
  };

  useEffect(() => {
    void checkCouponCode();
    // Only called once upon initial render to check if a user had a coupon code previously set
  }, []);

  useEffect(() => {
    if (couponSuccess) {
      setCurrentStep("all-set");
    }
  }, [couponSuccess]);
  /* c8 ignore stop */

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
            src={
              step === "all-set"
                ? /* c8 ignore next */
                  "/animations/CancellationFlowDiscountAppliedAnimation.mp4"
                : "/animations/CancellationFlowAnimation.mp4"
            }
          />
          <source
            type="video/webm"
            src={
              step === "all-set"
                ? /* c8 ignore next */
                  "/animations/CancellationFlowDiscountAppliedAnimation.webm"
                : "/animations/CancellationFlowAnimation.webm"
            }
          />
          {/* Fall back to the image if the video formats are not supported: */}
          <Image
            className={styles.cancellationIllustrationWrapper}
            src={
              /* c8 ignore next */
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
          src={
            step === "all-set"
              ? CancellationFlowDiscountAppliedStaticImage
              : CancellationFlowStaticImage
          }
          alt=""
        />
      </>
    );
  };

  const errorApplyingCoupon = (
    <p className={styles.errorApplyingCoupon}>
      {l10n.getFragment("settings-unsubscribe-dialog-promotion-unsuccessful", {
        elems: {
          try_again_link: (
            <Button
              variant="tertiary"
              onPress={() => void handleApplyCouponCode()}
            />
          ),
        },
      })}
    </p>
  );

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
            illustration={<Animation />}
            onDismiss={() => {
              recordTelemetry("popup", "exit", {
                popup_id:
                  step === "all-set"
                    ? "exited_youre_all_set"
                    : "exited_cancel_flow",
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
                  {props.enableDiscountCoupon && !alreadyHasCouponSet ? (
                    <>
                      <TelemetryButton
                        event={{
                          module: "ctaButton",
                          name: "click",
                          data: {
                            button_id: "stay_get_30_off",
                          },
                        }}
                        variant="primary"
                        onPress={() => void handleApplyCouponCode()}
                        className={`${couponSuccess === false && styles.hidden} ${styles.discountCta} ${styles.primaryCta}`}
                      >
                        {discountedNext3Months.headline}
                      </TelemetryButton>
                      <TelemetryLink
                        eventData={{
                          link_id: "limitations_apply",
                        }}
                        href="/limitations-apply"
                        target="_blank"
                        className={`${couponSuccess === false && styles.hidden} ${styles.limitationsApplyLink}`}
                      >
                        <small className={styles.limitationsApplyText}>
                          {discountedNext3Months.subtitle}
                          <OpenInNew alt="" />
                        </small>
                      </TelemetryLink>
                      {couponSuccess === false && errorApplyingCoupon}
                    </>
                  ) : (
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
                  )}

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
                  <TelemetryLink
                    href="/user/dashboard"
                    eventData={{
                      link_id: "go_to_dashboard",
                    }}
                    className={styles.goToDashboardCta}
                  >
                    {l10n.getString(
                      "settings-unsubscribe-dialog-promotion-back-to-dashboard-cta",
                    )}
                  </TelemetryLink>
                </>
              )}
            </div>
          </Dialog>
        </ModalOverlay>
      )}
    </>
  );
};
