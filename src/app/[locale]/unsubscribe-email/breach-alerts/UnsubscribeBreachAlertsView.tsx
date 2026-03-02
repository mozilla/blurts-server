/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useState } from "react";
import styles from "./UnsubscribeBreachAlerts.module.scss";
import UnsubscriptionImage from "./images/confirm-unsubscribe.svg";
import Image from "next/image";
import { useL10n } from "../../../hooks/l10n";
import { toast, ToastOptions } from "react-toastify";
import { TelemetryButton } from "../../../components/client/TelemetryButton";
import { signIn } from "next-auth/react";

export const UnsubscribeBreachAlertsView = ({ token }: { token: string }) => {
  const l10n = useL10n();
  const [unsubscribeSuccess, setUnsubscribeSuccess] = useState(false);
  const toastOptions: ToastOptions = {
    autoClose: 15000,
  };

  const copy = {
    confirmation: {
      header: l10n.getString("unsubscribe-from-breach-alerts-header"),
      body: l10n.getString("unsubscribe-from-breach-alerts-body"),
      cta: l10n.getString("unsubscribe-cta"),
    },
    success: {
      header: l10n.getString("unsubscribe-success-from-breach-alerts-header"),
      body: l10n.getString("unsubscribe-success-from-breach-alerts-body"),
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
        toast.error(l10n.getString("unsubscription-failed-2"), toastOptions);
      } else {
        setUnsubscribeSuccess(true);
      }
    } catch (error) {
      toast.error(l10n.getString("unsubscription-failed-2"), toastOptions);
      console.error("Error unsubscribing from breach alerts", error);
    }
  };

  return (
    <main className={styles.unsubscribeBreachAlertsContainer}>
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
                  button_id: "unsubscribe_from_breach_alerts",
                },
              }
            : {
                module: "ctaButton",
                name: "click",
                data: {
                  button_id: "unsubscribe_from_breach_alerts_sign_in",
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
