/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import {
  FormEventHandler,
  ReactNode,
  RefObject,
  useContext,
  useState,
} from "react";
import { signIn } from "next-auth/react";
import { useL10n } from "../../../hooks/l10n";
import { Button } from "../../../components/client/Button";
import styles from "./SignUpForm.module.scss";
import { useTelemetry } from "../../../hooks/useTelemetry";
import { useViewTelemetry } from "../../../hooks/useViewTelemetry";
import { useCookies } from "react-cookie";
import { CONST_URL_MONITOR_LANDING_PAGE_ID } from "../../../../constants";
import { getFreeScanSearchParams } from "../../../functions/universal/getFreeScanSearchParams";
import { AccountsMetricsFlowContext } from "../../../../contextProviders/accounts-metrics-flow";
import { ExperimentData } from "../../../../telemetry/generated/nimbus/experiments";
import { InputField } from "../../../components/client/InputField";

export type Props = {
  eventId: {
    cta: string;
    field?: string;
  };
  signUpCallbackUrl: string;
  label?: string;
  experimentData?: ExperimentData["Features"];
  isHero?: boolean;
  placeholder?: string;
  ctaLabel?: string | ReactNode;
  hasFloatingLabel?: boolean;
  labelPosition?: "top" | "bottom" | "floating";
};

export const SignUpForm = (props: Props) => {
  const l10n = useL10n();
  const [emailInput, setEmailInput] = useState("");
  const record = useTelemetry();
  const refViewTelemetry = useViewTelemetry("ctaButton", {
    button_id: props.eventId.cta,
  });
  const [cookies] = useCookies(["attributionsFirstTouch"]);
  const metricsFlowContext = useContext(AccountsMetricsFlowContext);

  const onSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    void signIn(
      "fxa",
      { callbackUrl: props.signUpCallbackUrl },
      getFreeScanSearchParams({
        cookies,
        emailInput: emailInput,
        entrypoint: CONST_URL_MONITOR_LANDING_PAGE_ID,
        experimentData: props.experimentData,
        metricsFlowData: metricsFlowContext.data,
      }),
    );
  };

  const label =
    props.label ?? l10n.getString("landing-all-hero-emailform-input-label");

  return (
    <form
      ref={refViewTelemetry as RefObject<HTMLFormElement | null>}
      className={`${styles.form} ${props.labelPosition ? styles[props.labelPosition] : ""}`}
      onSubmit={onSubmit}
    >
      <InputField
        type="email"
        data-testid="signup-form-input"
        value={emailInput}
        onChange={(value) => {
          setEmailInput(value);
        }}
        placeholder={
          props.placeholder ??
          l10n.getString("landing-all-hero-emailform-input-placeholder")
        }
        label={label}
        onFocus={() => {
          record("field", "focus", {
            field_id: props.eventId.field,
          });
        }}
        hasFloatingLabel={props.labelPosition === "floating"}
      />
      <Button
        type="submit"
        variant="primary"
        wide
        onPress={() => {
          record("ctaButton", "click", {
            button_id: props.eventId.cta,
          });
        }}
      >
        {props.ctaLabel ??
          l10n.getString("landing-all-hero-emailform-submit-label")}
      </Button>
    </form>
  );
};
