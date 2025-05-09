/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { signIn } from "next-auth/react";
import { useCookies } from "react-cookie";
import { Props, SignUpForm } from "./SignUpForm";
import { TelemetryButton } from "../../../components/client/TelemetryButton";
import { ExperimentData } from "../../../../telemetry/generated/nimbus/experiments";
import { useL10n } from "../../../hooks/l10n";
import { WaitlistCta } from "./ScanLimit";
import { useContext, RefObject } from "react";
import { AccountsMetricsFlowContext } from "../../../../contextProviders/accounts-metrics-flow";
import { getFreeScanSearchParams } from "../../../functions/universal/getFreeScanSearchParams";
import { CONST_URL_MONITOR_LANDING_PAGE_ID } from "../../../../constants";
import { useViewTelemetry } from "../../../hooks/useViewTelemetry";
import { ButtonVariants } from "../../../components/client/Button";

export const FreeScanCta = (
  props: Props & {
    experimentData: ExperimentData["Features"];
    showCtaOnly?: boolean;
    ctaButtonVariant?: ButtonVariants;
  },
) => {
  const l10n = useL10n();
  const [cookies] = useCookies(["attributionsFirstTouch"]);
  const metricsFlowContext = useContext(AccountsMetricsFlowContext);

  const freeScanVariantId = props.experimentData["landing-page-free-scan-cta"]
    .enabled
    ? `-${props.experimentData["landing-page-free-scan-cta"].variant}`
    : "";
  const telemetryButtonId = `${props.eventId.cta}${freeScanVariantId}`;
  const refViewTelemetry = useViewTelemetry("ctaButton", {
    button_id: telemetryButtonId,
  });
  if (
    (!props.experimentData["landing-page-free-scan-cta"].enabled ||
      props.experimentData["landing-page-free-scan-cta"].variant ===
        "ctaWithEmail") &&
    !props.showCtaOnly
  ) {
    return (
      <SignUpForm
        scanLimitReached={props.scanLimitReached}
        isHero={props.isHero}
        eligibleForPremium={props.eligibleForPremium}
        signUpCallbackUrl={props.signUpCallbackUrl}
        eventId={props.eventId}
        experimentData={props.experimentData}
        placeholder={props.placeholder}
        label={props.label}
        ctaLabel={props.ctaLabel}
        labelPosition={props.labelPosition}
      />
    );
  }

  return props.scanLimitReached ? (
    <WaitlistCta />
  ) : (
    <div>
      <TelemetryButton
        buttonRef={refViewTelemetry as RefObject<HTMLButtonElement | null>}
        variant={props.ctaButtonVariant ?? "primary"}
        event={{
          module: "ctaButton",
          name: "click",
          data: {
            button_id: telemetryButtonId,
          },
        }}
        onPress={() => {
          void signIn(
            "fxa",
            { callbackUrl: props.signUpCallbackUrl },
            getFreeScanSearchParams({
              cookies,
              entrypoint: CONST_URL_MONITOR_LANDING_PAGE_ID,
              experimentData: props.experimentData,
              metricsFlowData: metricsFlowContext.data,
            }),
          );
        }}
      >
        {props.ctaLabel ??
          l10n.getString(
            props.experimentData["landing-page-free-scan-cta"].variant ===
              "ctaOnly"
              ? "landing-all-hero-emailform-submit-label"
              : "landing-all-hero-emailform-submit-sign-up-label",
          )}
      </TelemetryButton>
    </div>
  );
};
