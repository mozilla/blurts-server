/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useState } from "react";
import { Button } from "../../../../../components/client/Button";
import styles from "./UnsubscribeMonthlyReport.module.scss";
import UnsubscriptionImage from "./images/confirm-unsubscribe.svg";
import Image from "next/image";
import { useL10n } from "../../../../../hooks/l10n";
import { toast } from "react-toastify";

export const UnsubscribeMonthlyReportView = ({ token }: { token: string }) => {
  const [unsubscribeSuccess, setUnsubscribeSuccess] = useState(false);

  const l10n = useL10n();
  const copy = {
    confirmation: {
      header: l10n.getString("unsubscribe-from-monthly-report-header"),
      body: l10n.getString("unsubscribe-from-monthly-report-body"),
    },
    success: {
      header: l10n.getString("unsubscribe-success-from-monthly-report-header"),
      body: l10n.getString("unsubscribe-success-from-monthly-report-body"),
    },
  };

  const { header, body } = unsubscribeSuccess
    ? copy.success
    : copy.confirmation;

  const handleUnsubscription = async () => {
    try {
      const response = await fetch(`/api/unsubscribe-email?token=${token}`, {
        method: "GET",
      });

      if (!response.ok) {
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
      );
      console.error("Error unsubscribing from Monthly monitor report", error);
    }
  };

  return (
    <main className={styles.unSubscribeMonthlyReportContainer}>
      <Image src={UnsubscriptionImage} alt="" />
      <h1>{header}</h1>
      <p>{body}</p>
      <Button
        className={styles.cta}
        variant="primary"
        onPress={() => void handleUnsubscription()}
      >
        {l10n.getString("unsubscribe-cta")}
      </Button>
    </main>
  );
};
