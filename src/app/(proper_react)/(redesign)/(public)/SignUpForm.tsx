/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { FormEventHandler, useId, useState } from "react";
import { signIn } from "next-auth/react";
import { useL10n } from "../../../hooks/l10n";
import { Button } from "../../../components/client/Button";
import styles from "./SignUpForm.module.scss";
import { useTelemetry } from "../../../hooks/useTelemetry";
import { VisuallyHidden } from "../../../components/server/VisuallyHidden";
import { WaitlistCta } from "./ScanLimit";
import { useCookies } from "react-cookie";
import { ExperimentData } from "../../../../telemetry/generated/nimbus/experiments";
import { CONST_URL_MONITOR_LANDING_PAGE_ID } from "../../../../constants";
import { getFreeScanSearchParams } from "../../../functions/universal/getFreeScanSearchParams";

export type Props = {
  eligibleForPremium: boolean;
  signUpCallbackUrl: string;
  isHero?: boolean;
  eventId: {
    cta: string;
    field?: string;
  };
  scanLimitReached: boolean;
  experimentData?: ExperimentData;
  placeholder?: string;
};

export const SignUpForm = (props: Props) => {
  const emailInputId = useId();
  const l10n = useL10n();
  const [emailInput, setEmailInput] = useState("");
  const record = useTelemetry();
  const [cookies] = useCookies(["attributionsFirstTouch"]);

  const onSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    void signIn(
      "fxa",
      { callbackUrl: props.signUpCallbackUrl },
      getFreeScanSearchParams({
        cookies,
        emailInput: "",
        entrypoint: CONST_URL_MONITOR_LANDING_PAGE_ID,
      }),
    );
  };

  const labelContent = (
    <label htmlFor={emailInputId}>
      {l10n.getString(
        props.eligibleForPremium
          ? "landing-premium-hero-emailform-input-label"
          : "landing-all-hero-emailform-input-label",
      )}
    </label>
  );

  return props.scanLimitReached ? (
    <WaitlistCta />
  ) : (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        name={emailInputId}
        data-testid="signup-form-input"
        id={emailInputId}
        onChange={(e) => {
          setEmailInput(e.target.value);
        }}
        onFocus={() => {
          record("field", "focus", {
            field_id: props.eventId.field,
          });
        }}
        value={emailInput}
        type="email"
        placeholder={
          props.placeholder ??
          l10n.getString("landing-all-hero-emailform-input-placeholder")
        }
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
        {l10n.getString("landing-all-hero-emailform-submit-label")}
      </Button>
      {props.isHero ? (
        labelContent
      ) : (
        <VisuallyHidden>{labelContent}</VisuallyHidden>
      )}
    </form>
  );
};
