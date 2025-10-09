/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import {
  ChangeEvent,
  useEffect,
  useRef,
  useState,
  useActionState,
} from "react";
import { useOverlayTriggerState } from "react-stately";
import { useOverlayTrigger } from "react-aria";
import Image from "next/image";
import styles from "./EmailAddressAdder.module.scss";
import Illustration from "./images/AddEmailDialogIllustration.svg";
import { Button } from "../../../../../../components/client/Button";
import { useL10n } from "../../../../../../hooks/l10n";
import { ModalOverlay } from "../../../../../../components/client/dialog/ModalOverlay";
import { Dialog } from "../../../../../../components/client/dialog/Dialog";
import { type onAddEmail } from "./actions";
import {
  CONST_MAX_NUM_ADDRESSES,
  CONST_MAX_NUM_ADDRESSES_PLUS,
} from "../../../../../../../constants";
import { useTelemetry } from "../../../../../../hooks/useTelemetry";
import { FeatureFlagName } from "../../../../../../../db/tables/featureFlags";

export type Props = {
  onAddEmail: typeof onAddEmail;
  enabledFeatureFlags: FeatureFlagName[];
};

export const EmailAddressAdder = (props: Props) => {
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

  return (
    <>
      <Button {...triggerProps} variant="primary">
        {l10n.getString("settings-add-email-button")}
      </Button>
      {dialogState.isOpen && (
        <ModalOverlay
          state={dialogState}
          {...overlayProps}
          isDismissable={true}
        >
          <Dialog
            title={l10n.getString("add-email-add-another-heading")}
            illustration={<Image src={Illustration} alt="" />}
            // Unfortunately we're currently running into a bug testing code
            // that hits `useFormState`. See the comment for the test "calls the
            // 'add' action when adding another email address":
            /* c8 ignore next */
            onDismiss={() => dialogState.close()}
          >
            <div className={styles.dialogContents}>
              <EmailAddressAddForm {...props} />
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
const EmailAddressAddForm = (props: Props) => {
  const l10n = useL10n();
  const recordTelemetry = useTelemetry();
  const formRef = useRef<HTMLFormElement>(null);
  const [onAddEmailState, onAddEmailAction] = useActionState(
    props.onAddEmail,
    {},
  );
  const [hasPressedButton, setHasPressedButton] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  useEffect(() => {
    setIsEmailValid(
      email.length > 0 && (formRef.current?.reportValidity() ?? false),
    );
  }, [email]);

  useEffect(() => {
    if (typeof onAddEmailState.success !== "undefined") {
      recordTelemetry("ctaButton", "click", {
        button_id: "add_email_verification",
      });
    }
  }, [onAddEmailState, recordTelemetry]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return !onAddEmailState.success ? (
    <>
      <p>
        {l10n.getString("add-email-your-account-includes", {
          total: props.enabledFeatureFlags.includes(
            "IncreasedFreeMaxBreachEmails",
          )
            ? CONST_MAX_NUM_ADDRESSES_PLUS
            : CONST_MAX_NUM_ADDRESSES,
        })}
      </p>
      <form
        action={onAddEmailAction}
        ref={formRef}
        className={styles.newEmailAddressForm}
      >
        <label htmlFor="newEmailAddress">
          {l10n.getString("add-email-address-input-label")}
        </label>
        <input
          type="email"
          name="newEmailAddress"
          id="newEmailAddress"
          onChange={handleInputChange}
        />
        <Button
          type="submit"
          variant="primary"
          className={styles.btn}
          disabled={!isEmailValid}
          onPress={() => {
            if (isEmailValid) {
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
    <p className={styles.description}>
      {l10n.getFragment("add-email-verify-the-link-2", {
        vars: { email: onAddEmailState.submittedAddress },
        elems: { b: <b /> },
      })}
    </p>
  );
};
/* c8 ignore stop */
