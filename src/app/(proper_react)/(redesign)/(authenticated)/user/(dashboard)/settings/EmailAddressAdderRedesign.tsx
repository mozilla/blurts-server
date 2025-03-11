/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useEffect, useRef, useState, useActionState } from "react";
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
import { AddEmailFormState, onAddEmail } from "./actions";
import { CONST_MAX_NUM_ADDRESSES } from "../../../../../../../constants";
import { useTelemetry } from "../../../../../../hooks/useTelemetry";
import { InputField } from "../../../../../../components/client/InputField";

export const EmailAddressAdderRedesign = () => {
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
  const [onAddEmailState, onAddEmailAction] = useActionState(onAddEmail, {});

  const handleOnDismiss = () => {
    onAddEmailAction(new FormData());
    dialogState.close();
  };

  return (
    <>
      <Button {...triggerProps} variant="secondary">
        {l10n.getString("settings-add-email-button")}
      </Button>
      <p>Add up to {CONST_MAX_NUM_ADDRESSES}</p>
      {dialogState.isOpen && (
        <ModalOverlay
          state={dialogState}
          {...overlayProps}
          isDismissable={true}
        >
          <Dialog
            title={
              !onAddEmailState.success
                ? "Add an email address"
                : `Verification link sent to ${onAddEmailState.submittedAddress}`
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

  useEffect(() => {
    if (typeof props.onAddEmailState.success !== "undefined") {
      recordTelemetry("ctaButton", "click", {
        button_id: "add_email_verification",
      });
    }
  }, [props.onAddEmailState, recordTelemetry]);

  const handleInputChangeRedesign = (value: string) => {
    setEmail(value);
  };

  const isEmailValid = () => {
    return email.length > 0 && (formRef.current?.reportValidity() ?? false);
  };

  return !props.onAddEmailState.success ? (
    <>
      <p>
        {
          "We’ll send a verification link for you to confirm you’d like to include in a future Monitor scan."
        }
      </p>
      <form
        action={props.onAddEmailAction}
        ref={formRef}
        className={styles.newEmailAddressForm}
      >
        <InputField
          id="newEmailAddress"
          name="newEmailAddress"
          label={"Enter email address"}
          onChange={handleInputChangeRedesign}
          type="email"
          value={email}
          hasFloatingLabel
        />
        <Button
          type="submit"
          variant="primary"
          disabled={!isEmailValid()}
          onPress={() => {
            if (isEmailValid()) {
              setHasPressedButton(true);
            }
          }}
          isLoading={hasPressedButton}
        >
          {l10n.getString("add-email-send-verification-button")}
        </Button>
      </form>
    </>
  ) : (
    <>
      <p>
        {"Open the link to add it to this account for future Monitor scans."}
      </p>
      <Button variant="primary" onPress={props.onDismiss}>
        {"Done"}
      </Button>
    </>
  );
};
/* c8 ignore stop */
