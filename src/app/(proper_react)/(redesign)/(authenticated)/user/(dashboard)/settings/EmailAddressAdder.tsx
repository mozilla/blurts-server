/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useFormState } from "react-dom";
import { useOverlayTriggerState } from "react-stately";
import { useOverlayTrigger } from "react-aria";
import Image from "next/image";
import styles from "./EmailAddressAdder.module.scss";
import Illustration from "./images/AddEmailDialogIllustration.svg";
import { Button } from "../../../../../../components/client/Button";
import { useL10n } from "../../../../../../hooks/l10n";
import { ModalOverlay } from "../../../../../../components/client/dialog/ModalOverlay";
import { Dialog } from "../../../../../../components/client/dialog/Dialog";
import { onAddEmail } from "./actions";
import { CONST_MAX_NUM_ADDRESSES } from "../../../../../../../constants";

export const EmailAddressAdder = () => {
  const l10n = useL10n();
  const dialogState = useOverlayTriggerState({ defaultOpen: false });
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
              <EmailAddressAddForm />
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
const EmailAddressAddForm = () => {
  const l10n = useL10n();
  const [formState, formAction] = useFormState(onAddEmail, {});

  return !formState.success ? (
    <>
      <p>
        {l10n.getString("add-email-your-account-includes", {
          total: CONST_MAX_NUM_ADDRESSES,
        })}
      </p>
      <form action={formAction} className={styles.newEmailAddressForm}>
        <label htmlFor="newEmailAddress">
          {l10n.getString("add-email-address-input-label")}
        </label>
        <input type="email" name="newEmailAddress" id="newEmailAddress" />
        <Button type="submit" variant="primary">
          {l10n.getString("add-email-send-verification-button")}
        </Button>
      </form>
    </>
  ) : (
    <p>
      {l10n.getFragment("add-email-verify-the-link-2", {
        vars: { email: formState.submittedAddress },
        elems: { b: <b /> },
      })}
    </p>
  );
};
/* c8 ignore stop */
