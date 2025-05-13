/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import {
  useRef,
  useState,
  useActionState,
  startTransition,
  useEffect,
} from "react";
import { useOverlayTriggerState } from "react-stately";
import { useOverlayTrigger } from "react-aria";
import Image from "next/image";
import styles from "./EmailAddressAdderRedesign.module.scss";
import IllustrationInitial from "./images/AddEmailIllustration.svg";
import IllustrationConfirmation from "./images/AddEmailIllustrationConfirmation.svg";
import { Button } from "../../../../../../components/client/Button";
import { useL10n } from "../../../../../../hooks/l10n";
import { ModalOverlay } from "../../../../../../components/client/dialog/ModalOverlay";
import { Dialog } from "../../../../../../components/client/dialog/Dialog";
import { useTelemetry } from "../../../../../../hooks/useTelemetry";
import { InputField } from "../../../../../../components/client/InputField";
import { type AddEmailFormState, type onAddEmail } from "./actions";

type Props = {
  maxNumEmailAddresses: number;
  onAddEmail: typeof onAddEmail;
};

export const EmailAddressAdderRedesign = (props: Props) => {
  const l10n = useL10n();
  const recordTelemetry = useTelemetry();
  const dialogState = useOverlayTriggerState({
    defaultOpen: false,
    // Unfortunately we're currently running into a bug testing code that hits
    // `useFormState`, which would happen when the dialog is opened.
    // See the comment for the test "counts how often people click the 'Add
    // email address' button":
    /* c8 ignore start */
    onOpenChange(isOpen) {
      if (isOpen) {
        recordTelemetry("ctaButton", "click", {
          button_id: "add_email_address",
        });
      } else {
        recordTelemetry("button", "click", {
          button_id: "close_add_email_modal",
        });
      }
    },
    /* c8 ignore stop */
  });
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    dialogState,
  );
  const [onAddEmailState, onAddEmailAction] = useActionState(
    props.onAddEmail,
    {},
  );

  const handleOnDismiss = () => {
    const form = new FormData();
    // Set a marker on the form that we can check in `onAddEmail` server action
    // to reset the `onAddEmailAction` state.
    form.set("_reset", "true");
    startTransition(() => {
      onAddEmailAction(form);
    });

    dialogState.close();
  };

  return (
    <>
      <Button {...triggerProps} variant="secondary">
        {l10n.getString("settings-email-addresses-add-email-button")}
      </Button>
      <p>
        {l10n.getString("settings-email-addresses-add-email-indicator-limit", {
          limit: props.maxNumEmailAddresses,
        })}
      </p>
      {dialogState.isOpen && (
        <ModalOverlay
          state={dialogState}
          {...overlayProps}
          isDismissable={true}
        >
          <Dialog
            title={
              !onAddEmailState.success
                ? l10n.getString(
                    "settings-email-addresses-initial-dialog-header",
                  )
                : l10n.getFragment(
                    "settings-email-addresses-confirmation-dialog-header",
                    {
                      elems: {
                        b: <b />,
                      },
                      vars: {
                        email: onAddEmailState.submittedAddress,
                      },
                    },
                  )
            }
            illustration={
              !onAddEmailState.success ? (
                <Image src={IllustrationInitial} alt="" />
              ) : (
                <Image src={IllustrationConfirmation} alt="" />
              )
            }
            // Unfortunately we're currently running into a bug testing code
            // that hits `useFormState`. See the comment for the test "calls the
            // 'add' action when adding another email address":
            /* c8 ignore next */
            onDismiss={handleOnDismiss}
            fitContent
          >
            <div className={styles.dialogContent}>
              <EmailAddressAddForm
                onDismiss={handleOnDismiss}
                onAddEmailState={onAddEmailState}
                onAddEmailAction={onAddEmailAction}
              />
            </div>
          </Dialog>
        </ModalOverlay>
      )}
    </>
  );
};

// Unfortunately we're currently running into a bug testing code that hits
// `useFormState`. See the comment for the test
// "calls the 'add' action when adding another email address":
/* c8 ignore start */
const EmailAddressAddForm = (props: {
  onDismiss: () => void;
  onAddEmailState: AddEmailFormState;
  onAddEmailAction: (payload: FormData) => void;
}) => {
  const l10n = useL10n();
  const recordTelemetry = useTelemetry();
  const formRef = useRef<HTMLFormElement>(null);
  const [hasPressedButton, setHasPressedButton] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  useEffect(() => {
    setIsEmailValid(
      email.length > 0 && (formRef.current?.reportValidity() ?? false),
    );
  }, [email]);

  return !props.onAddEmailState.success ? (
    <>
      <p>
        {l10n.getString("settings-email-addresses-initial-dialog-description")}
      </p>
      <form
        action={props.onAddEmailAction}
        ref={formRef}
        className={styles.newEmailAddressForm}
      >
        <InputField
          id="newEmailAddress"
          name="newEmailAddress"
          label={l10n.getString(
            "settings-email-addresses-initial-dialog-add-email-input-label",
          )}
          onChange={(value: string) => setEmail(value)}
          type="email"
          value={email}
          hasFloatingLabel
        />
        <Button
          type="submit"
          variant="primary"
          disabled={!isEmailValid}
          onPress={() => {
            recordTelemetry("ctaButton", "click", {
              button_id: "add_email_verification",
            });
            if (isEmailValid) {
              setHasPressedButton(true);
            }
          }}
          isLoading={hasPressedButton}
        >
          {l10n.getString(
            "settings-email-addresses-initial-dialog-add-email-button-label",
          )}
        </Button>
      </form>
    </>
  ) : (
    <>
      <p>
        {l10n.getString(
          "settings-email-addresses-confirmation-dialog-description",
        )}
      </p>
      <Button variant="primary" onPress={props.onDismiss}>
        {l10n.getString(
          "settings-email-addresses-confirmation-dialog-close-button",
        )}
      </Button>
    </>
  );
};
/* c8 ignore stop */
