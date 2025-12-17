/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ComponentProps, useState } from "react";
import { signOut } from "next-auth/react";
import { Button } from "../../../../../../components/client/Button";
import { type onDeleteAccount } from "./actions";
import { useTelemetry } from "../../../../../../hooks/useTelemetry";
import { useL10n } from "../../../../../../hooks/l10n";

/**
 * Since <Button> is a client component, the `onDeleteAccount` handler can only
 * be passed in from another client component
 *
 * @param props
 */
export const DeleteAccountButton = (
  props: ComponentProps<typeof Button> & {
    onDeleteAccount: typeof onDeleteAccount;
  },
) => {
  const l10n = useL10n();
  const recordTelemetry = useTelemetry();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  return (
    <>
      <Button
        {...props}
        isLoading={isSubmitting}
        isDisabled={isSubmitting}
        onPress={() => {
          recordTelemetry("ctaButton", "click", {
            button_id: "confirm_delete_account",
          });
          setIsSubmitting(true);
          setErrorMessage(null);
          // It's currently unclear if and how we should mock our server action:
          /* c8 ignore next 13 */
          void props
            .onDeleteAccount()
            .then((result) => {
              if (result && typeof result === "object" && "success" in result) {
                if (result.success === false) {
                  setIsSubmitting(false);
                  setErrorMessage(
                    result.errorMessage ??
                      l10n.getString("settings-delete-account-error-generic"),
                  );
                  return;
                }
              }
              void signOut({ callbackUrl: "/" });
            })
            .catch(() => {
              setIsSubmitting(false);
              setErrorMessage(
                l10n.getString("settings-delete-account-error-generic"),
              );
            });
        }}
      />
      {errorMessage && (
        <p
          role="status"
          style={{
            marginTop: "0.5rem",
          }}
        >
          {errorMessage}
        </p>
      )}
    </>
  );
};
