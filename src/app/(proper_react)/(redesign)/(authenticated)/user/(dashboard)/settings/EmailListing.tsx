/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useButton } from "react-aria";
import { useRef, useState } from "react";
import styles from "./EmailListing.module.scss";
import { useL10n } from "../../../../../../hooks/l10n";
import { onRemoveEmail } from "./actions";
import {
  CheckIcon,
  DeleteIcon,
  ErrorIcon,
} from "../../../../../../components/server/Icons";
import { useTelemetry } from "../../../../../../hooks/useTelemetry";
import { SanitizedEmailAddressRow } from "../../../../../../functions/server/sanitizeEmailRow";

export const EmailListing = (props: {
  email: SanitizedEmailAddressRow | string;
  breachCount: number;
}) => {
  const l10n = useL10n();
  const recordTelemetry = useTelemetry();
  const email = props.email;
  const emailAddress = isSecondaryEmail(email) ? email.email : email;
  const [isVerificationEmailResent, setIsVerificationEmailResent] =
    useState(false);
  const reverifyButtonRef = useRef<HTMLButtonElement>(null);
  const reverifyButtonProps = useButton(
    {
      isDisabled: isVerificationEmailResent,
      onPress: () => {
        // This should never get called in practice, since the button with this
        // event handler is only shown for secondary email addresses:
        /* c8 ignore next 3 */
        if (!isSecondaryEmail(email)) {
          return;
        }

        void fetch("/api/v1/user/resend-email", {
          headers: {
            "Content-Type": "application/json",
            Accept: "text/html", // set to request localized HTML email
          },
          mode: "same-origin",
          method: "POST",
          body: JSON.stringify({ emailId: email.id }),
        }).then((response) => {
          if (response.ok) {
            setIsVerificationEmailResent(true);
          }
        });
      },
    },
    reverifyButtonRef,
  ).buttonProps;

  return (
    <div className={styles.emailListing}>
      <div>
        <b>{emailAddress}</b>
        {isSecondaryEmail(email) && !email.verified ? (
          <>
            <span className={styles.verificationCallout}>
              <ErrorIcon alt="" />
              {l10n.getString("settings-email-verification-callout")}
            </span>
            <button
              {...reverifyButtonProps}
              ref={reverifyButtonRef}
              className={styles.reverifyButton}
            >
              {isVerificationEmailResent && <CheckIcon alt="" />}
              {l10n.getString("settings-resend-email-verification-link")}
            </button>
          </>
        ) : (
          <small>
            {l10n.getString("settings-email-number-of-breaches-info", {
              breachCount: props.breachCount,
            })}
          </small>
        )}
      </div>
      {isSecondaryEmail(email) && (
        <button
          title={l10n.getString("settings-remove-email-button-tooltip", {
            emailAddress: emailAddress,
          })}
          onClick={() => {
            recordTelemetry("button", "click", {
              button_id: "removed_email_address",
            });
            void onRemoveEmail(email);
          }}
        >
          <DeleteIcon
            alt={l10n.getString("settings-remove-email-button-label")}
          />
        </button>
      )}
    </div>
  );
};

function isSecondaryEmail(
  email: string | SanitizedEmailAddressRow,
): email is SanitizedEmailAddressRow {
  return typeof email !== "string";
}
