/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { RefObject } from "react";
import { Session } from "next-auth";
import { CloseBtn } from "../server/Icons";
import { useL10n } from "../../hooks/l10n";
import { useHasRenderedClientSide } from "../../hooks/useHasRenderedClientSide";
import styles from "./PetitionBanner.module.scss";
import { CONST_URL_DATA_PRIVACY_PETITION_BANNER } from "../../../constants";
import { TelemetryButton } from "./TelemetryButton";
import { useTelemetry } from "../../hooks/useTelemetry";
import { useViewTelemetry } from "../../hooks/useViewTelemetry";
import { DismissalData } from "../../hooks/useLocalDismissal";

export const PetitionBanner = (props: {
  user: Session["user"];
  localDismissal: DismissalData;
}) => {
  const l10n = useL10n();

  const hasRenderedClientSide = useHasRenderedClientSide();
  const recordTelemetry = useTelemetry();
  const refViewTelemetry = useViewTelemetry("banner", {
    banner_id: "petition",
  });

  if (!hasRenderedClientSide || props.localDismissal.isDismissed) {
    return null;
  }

  const { dismiss } = props.localDismissal;
  return (
    <div
      ref={refViewTelemetry as RefObject<HTMLDivElement>}
      className={styles.banner}
    >
      <div className={styles.content}>
        <h2>{l10n.getString("petition-banner-data-privacy-title")}</h2>
        <p>
          {l10n.getFragment("petition-banner-data-privacy-text", {
            elems: {
              b: <b />,
            },
          })}
        </p>
        <div className={styles.buttons}>
          <TelemetryButton
            variant="primary"
            className={styles.signButton}
            onPress={() => {
              // In order to prevent the banner from being hidden before
              // the click on the link button is getting registered: Delay the
              // dismissal until the next event loop execution.
              // A timeout value of `0` should be enough, but unfortunately
              // this does not seem to work on iOS — even a value lower than
              // `100` should be plenty, but since this is now an arbitrary
              // value let’s make extra sure.
              setTimeout(() => {
                dismiss();
              }, 100);
            }}
            href={CONST_URL_DATA_PRIVACY_PETITION_BANNER}
            target="_blank"
            event={{
              module: "ctaButton",
              name: "click",
              data: {
                button_id: "sign_petition",
              },
            }}
          >
            {l10n.getString("petition-banner-data-privacy-button-sign")}
          </TelemetryButton>
          <TelemetryButton
            variant="tertiary"
            className={styles.dismissButton}
            onPress={() => dismiss()}
            event={{
              module: "button",
              name: "click",
              data: {
                button_id: "petition_no_thank_you",
              },
            }}
          >
            {l10n.getString("petition-banner-data-privacy-button-dismiss")}
          </TelemetryButton>
        </div>
      </div>
      <button
        className={styles.closeButton}
        onClick={() => {
          dismiss();
          recordTelemetry("button", "click", {
            button_id: "petition_dismiss",
          });
        }}
      >
        <CloseBtn
          alt={l10n.getString("survey-csat-survey-dismiss-label")}
          width="14"
          height="14"
        />
      </button>
    </div>
  );
};
