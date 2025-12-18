/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Session } from "next-auth";
import Image from "next/image";
import { FeatureFlagName } from "../../../../../../../../db/tables/featureFlags";
import { ExperimentData } from "../../../../../../../../telemetry/generated/nimbus/experiments";
import { useL10n } from "../../../../../../../hooks/l10n";
import { SettingsConfirmationDialog } from "../SettingsConfirmationDialog";
import AddEmailDialogIllustration from "../images/DeleteAccountDialogIllustration.svg";
import { DeleteAccountButton } from "../DeleteAccountButton";
import { onDeleteAccount } from "../actions";

export type SettingsPanelManageAccountProps = {
  enabledFeatureFlags: FeatureFlagName[];
  experimentData: ExperimentData["Features"];
  user: Session["user"];
  actions: {
    onDeleteAccount: typeof onDeleteAccount;
  };
};

function SettingsPanelManageAccount(props: SettingsPanelManageAccountProps) {
  const l10n = useL10n();
  return (
    <>
      <div>
        <h3>{l10n.getString("settings-tab-label-manage-account")}</h3>
        <p>{l10n.getString("settings-tab-subtitle-manage-account")}</p>
      </div>
      <hr />
      <section>
        <>
          <h4>
            {l10n.getString("settings-delete-monitor-free-account-title")}
          </h4>
          <p>
            {l10n.getString("settings-delete-monitor-free-account-description")}
          </p>
          <SettingsConfirmationDialog
            telemetryId="settings-delete-monitor-free-dialog"
            triggerLabel={l10n.getString(
              "settings-delete-monitor-free-account-cta-label",
            )}
            title={l10n.getString(
              "settings-delete-monitor-free-account-dialog-title",
            )}
            illustration={<Image src={AddEmailDialogIllustration} alt="" />}
            dismissString={l10n.getString(
              "settings-delete-monitor-free-account-dialog-cancel-button-label",
            )}
          >
            <div>
              <p>
                {l10n.getString(
                  "settings-delete-monitor-free-account-dialog-lead-v2",
                )}
              </p>
            </div>
            <DeleteAccountButton
              variant="primary"
              onDeleteAccount={props.actions.onDeleteAccount}
            >
              {l10n.getString(
                "settings-delete-monitor-free-account-dialog-cta-label",
              )}
            </DeleteAccountButton>
          </SettingsConfirmationDialog>
        </>
      </section>
    </>
  );
}

export { SettingsPanelManageAccount };
