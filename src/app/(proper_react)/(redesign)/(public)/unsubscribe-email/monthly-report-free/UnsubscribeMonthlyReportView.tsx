/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useState } from "react";
import styles from "./UnsubscribeMonthlyReport.module.scss";
import UnsubscriptionImage from "./images/confirm-unsubscribe.svg";
import Image from "next/image";
import { useL10n } from "../../../../../hooks/l10n";
import { toast, ToastOptions } from "react-toastify";
import { TelemetryButton } from "../../../../../components/client/TelemetryButton";
import { useTelemetry } from "../../../../../hooks/useTelemetry";
import { signIn } from "next-auth/react";

export const UnsubscribeMonthlyReportView = ({ token }: { token: string }) => {
  const recordTelemetry = useTelemetry();
  const l10n = useL10n();
  const [unsubscribeSuccess, setUnsubscribeSuccess] = useState(false);
  const toastOptions: ToastOptions = {
    autoClose: 15000,
  };

  const copy = {
    confirmation: {
      header: l10n.getString("unsubscribe-from-monthly-report-header"),
      body: l10n.getString("unsubscribe-from-monthly-report-body"),
      cta: l10n.getString("unsubscribe-cta"),
    },
    success: {
      header: l10n.getString("unsubscribe-success-from-monthly-report-header"),
      body: l10n.getString("unsubscribe-success-from-monthly-report-body"),
      cta: l10n.getString("unsubscribe-success-cta"),
    },
  };

  const { header, body, cta } = unsubscribeSuccess
    ? copy.success
    : copy.confirmation;

  const handleUnsubscription = async () => {
    try {
      const response = await fetch(
        `/api/v1/user/unsubscribe-email?token=${token}`,
        {
          method: "GET",
        },
      );

      if (!response.ok) {
        toast.error(
          l10n.getFragment("unsubscription-failed", {
            elems: {
              try_again_link: (
                <button
                  className={styles.tryAgain}
                  onClick={() => {
                    recordTelemetry("button", "click", {
                      button_id:
                        "unsuccessful_unsubscribe_from_monthly_report_try_again",
                    });
                    void handleUnsubscription();
                  }}
                />
              ),
            },
          }),
          toastOptions,
        );
      } else {
        setUnsubscribeSuccess(true);
      }
    } catch (error) {
      toast.error(
        l10n.getFragment("unsubscription-failed", {
          elems: {
            try_again_link: (
              <button
                className={styles.tryAgain}
                onClick={() => void handleUnsubscription()}
              />
            ),
          },
        }),
        toastOptions,
      );
      console.error("Error unsubscribing from Monthly monitor report", error);
    }
  };

  return (
    <main className={styles.unSubscribeMonthlyReportContainer}>
      <Image src={UnsubscriptionImage} alt="" />
      <h1>{header}</h1>
      <p>{body}</p>
      <TelemetryButton
        event={
          !unsubscribeSuccess
            ? {
                module: "ctaButton",
                name: "click",
                data: {
                  button_id: "unsubscribe_from_monthly_report",
                },
              }
            : {
                module: "ctaButton",
                name: "click",
                data: {
                  button_id: "unsubscribe_from_monthly_report_sign_in",
                },
              }
        }
        className={styles.cta}
        variant="primary"
        onPress={() => {
          if (!unsubscribeSuccess) {
            void handleUnsubscription();
          } else {
            void signIn("fxa", { callbackUrl: "/user/dashboard" });
          }
        }}
      >
        {cta}
      </TelemetryButton>
    </main>
  );
};
