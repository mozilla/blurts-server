/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Image from "next/image";
import { useOverlayTriggerState } from "react-stately";
import { useOverlayTrigger } from "react-aria";
import { useL10n } from "../../../../../../../../hooks/l10n";
import { TelemetryButton } from "../../../../../../../../components/client/TelemetryButton";
import { useTelemetry } from "../../../../../../../../hooks/useTelemetry";
import { ModalOverlay } from "../../../../../../../../components/client/dialog/ModalOverlay";
import { Dialog } from "../../../../../../../../components/client/dialog/Dialog";
import CancelDialogIllustration from "../../../../../../../images/monitor-logo-minimal.svg";
import styles from "./EditProfileCancelDialog.module.scss";

function EditProfileCancelDialog(props: { onSave: () => void }) {
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
          button_id: "settings_edit_profile_form_cancel_dialog_open",
        });
      } else {
        recordTelemetry("button", "click", {
          button_id: "settings_edit_profile_form_cancel_dialog_close",
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
      <TelemetryButton
        {...triggerProps}
        variant="secondary"
        event={{
          module: "button",
          name: "click",
          data: {
            button_id: "settings_edit_profile_form_cancel",
          },
        }}
      >
        {l10n.getString("settings-edit-profile-info-form-cancel-button-label")}
      </TelemetryButton>
      {dialogState.isOpen && (
        <ModalOverlay state={dialogState} {...overlayProps} isDismissable>
          <Dialog
            title={l10n.getString(
              "settings-edit-profile-info-form-cancel-dialog-header",
            )}
            illustration={<Image src={CancelDialogIllustration} alt="" />}
            // Unfortunately we're currently running into a bug testing code
            // that hits `useFormState`. See the comment for the test "calls the
            // 'add' action when adding another email address":
            /* c8 ignore next */
            onDismiss={() => dialogState.close()}
            fitContent
          >
            <div className={styles.cancelDialogContents}>
              <p>
                {l10n.getString(
                  "settings-edit-profile-info-form-cancel-dialog-description",
                )}
              </p>
              <div className={styles.cancelDialogButtons}>
                <TelemetryButton
                  event={{
                    module: "link",
                    name: "click",
                    data: {
                      link_id: "settings_edit_profile_form_cancel_dialog_save",
                    },
                  }}
                  onPress={props.onSave}
                  variant="primary"
                >
                  {l10n.getString(
                    "settings-edit-profile-info-form-save-button-label",
                  )}
                </TelemetryButton>
                <TelemetryButton
                  event={{
                    module: "link",
                    name: "click",
                    data: {
                      link_id:
                        "settings_edit_profile_form_cancel_dialog_confirm",
                    },
                  }}
                  variant="secondary"
                  href="/user/settings/edit-info"
                >
                  {l10n.getString(
                    "settings-edit-profile-info-form-cancel-dialog-confimation-button-label",
                  )}
                </TelemetryButton>
              </div>
            </div>
          </Dialog>
        </ModalOverlay>
      )}
    </>
  );
}

export { EditProfileCancelDialog };
