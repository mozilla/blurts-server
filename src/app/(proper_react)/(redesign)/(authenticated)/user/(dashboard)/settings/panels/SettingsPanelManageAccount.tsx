/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Session } from "next-auth";
import Image from "next/image";
import { FeatureFlagName } from "../../../../../../../../db/tables/featureFlags";
import { ExperimentData } from "../../../../../../../../telemetry/generated/nimbus/experiments";
import { hasPremium } from "../../../../../../../functions/universal/user";
import { useL10n } from "../../../../../../../hooks/l10n";
import { CancelFlow } from "../CancelFlow";
import { TelemetryLink } from "../../../../../../../components/client/TelemetryLink";
import { OpenInNew } from "../../../../../../../components/server/Icons";
import { SettingsConfirmationDialog } from "../SettingsConfirmationDialog";
import AddEmailDialogIllustration from "../images/DeleteAccountDialogIllustration.svg";
import { DeleteAccountButton } from "../DeleteAccountButton";
import {
  type onDeleteAccount,
  type onApplyCouponCode,
  type onCheckUserHasCurrentCouponSet,
} from "../actions";

export type SettingsPanelManageAccountProps = {
  enabledFeatureFlags: FeatureFlagName[];
  experimentData: ExperimentData["Features"];
  fxaSubscriptionsUrl: string;
  isMonthlySubscriber: boolean;
  user: Session["user"];
  actions: {
    onDeleteAccount: typeof onDeleteAccount;
    onApplyCouponCode: typeof onApplyCouponCode;
    onCheckUserHasCurrentCouponSet: typeof onCheckUserHasCurrentCouponSet;
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
      {hasPremium(props.user) && (
        <>
          <hr />
          <section>
            <h3>{l10n.getString("settings-cancel-plus-title")}</h3>
            <p>{l10n.getString("settings-cancel-plus-details")}</p>
            {props.enabledFeatureFlags.includes("CancellationFlow") ? (
              <CancelFlow
                enableDiscountCoupon={props.enabledFeatureFlags.includes(
                  "DiscountCouponNextThreeMonths",
                )}
                fxaSubscriptionsUrl={props.fxaSubscriptionsUrl}
                experimentData={props.experimentData}
                isMonthlySubscriber={props.isMonthlySubscriber}
                actions={props.actions}
              />
            ) : (
              <TelemetryLink
                href={props.fxaSubscriptionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                eventData={{
                  link_id: "cancel_plus",
                }}
              >
                {l10n.getString("settings-cancel-plus-link-label")}
                <OpenInNew
                  alt={l10n.getString("open-in-new-tab-alt")}
                  width="13"
                  height="13"
                />
              </TelemetryLink>
            )}
          </section>
        </>
      )}
      <hr />
      <section>
        {hasPremium(props.user) ? (
          <>
            <h4>
              {l10n.getString("settings-delete-monitor-plus-account-title")}
            </h4>
            <p>
              {l10n.getString(
                "settings-delete-monitor-plus-account-description-2",
              )}
            </p>
            <SettingsConfirmationDialog
              telemetryId="settings-delete-monitor-plus-dialog"
              triggerLabel={l10n.getString(
                "settings-delete-monitor-plus-account-cta-label",
              )}
              title={l10n.getString(
                "settings-delete-monitor-plus-account-dialog-title-2",
              )}
              illustration={<Image src={AddEmailDialogIllustration} alt="" />}
              dismissString={l10n.getString(
                "settings-delete-monitor-plus-account-dialog-cancel-button-label",
              )}
            >
              <div>
                <p>
                  {l10n.getString(
                    "settings-delete-monitor-plus-account-dialog-lead-p1-2",
                  )}
                </p>
                <p>
                  {l10n.getString(
                    "settings-delete-monitor-plus-account-dialog-lead-p2-2",
                  )}
                </p>
              </div>
              <DeleteAccountButton
                variant="primary"
                onDeleteAccount={props.actions.onDeleteAccount}
              >
                {l10n.getString(
                  "settings-delete-monitor-plus-account-dialog-cta-label",
                )}
              </DeleteAccountButton>
            </SettingsConfirmationDialog>
          </>
        ) : (
          <>
            <h4>
              {l10n.getString("settings-delete-monitor-free-account-title")}
            </h4>
            <p>
              {l10n.getString(
                "settings-delete-monitor-free-account-description",
              )}
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
        )}
      </section>
    </>
  );
}

export { SettingsPanelManageAccount };
