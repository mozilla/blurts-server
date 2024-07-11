/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { CloseBtn } from "../server/Icons";
import { useL10n } from "../../hooks/l10n";
import { useLocalDismissal } from "../../hooks/useLocalDismissal";
import { useHasRenderedClientSide } from "../../hooks/useHasRenderedClientSide";
import styles from "./PetitionBanner.module.scss";
import { CONST_URL_DATA_PRIVACY_PETITION_BANNER } from "../../../constants";
import { TelemetryButton } from "./TelemetryButton";
import { useTelemetry } from "../../hooks/useTelemetry";

export const usePetitionBannerDismissal = () =>
  useLocalDismissal("data_privacy_petition_banner");

export const PetitionBanner = () => {
  const l10n = useL10n();

  const hasRenderedClientSide = useHasRenderedClientSide();
  const localDismissal = usePetitionBannerDismissal();
  const recordTelemetry = useTelemetry();

  if (!hasRenderedClientSide || localDismissal.isDismissed) {
    return null;
  }

  const { dismiss } = localDismissal;
  return (
    <div className={styles.banner}>
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
