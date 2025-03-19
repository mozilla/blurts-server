/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
  SettingsPanelEditInfo,
  SettingsPanelEditInfoProps,
} from "./SettingsPanelEditInfo";
import {
  SettingsPanelEditInfoRedesign,
  SettingsPanelEditInfoRedesignProps,
} from "./SettingsPanelEditInfoRedesign";
import {
  SettingsPanelNotifications,
  SettingsPanelNotificationsProps,
} from "./SettingsPanelNotifications";
import {
  SettingsPanelManageAccount,
  SettingsPanelManageAccountProps,
} from "./SettingsPanelManageAccount";
import {
  SettingsPanelEditProfile,
  SettingsPanelEditProfileProps,
} from "./SettingsPanelEditProfile/SettingsPanelEditProfile";
import styles from "./Panel.module.scss";
import { TabType } from "../View";

export type SettingsProps = (
  | SettingsPanelEditInfoProps
  | SettingsPanelEditInfoRedesignProps
) &
  SettingsPanelNotificationsProps &
  SettingsPanelManageAccountProps & {
    activeTab?: TabType;
  } & SettingsPanelEditProfileProps;

function Panel(props: SettingsProps) {
  switch (props.activeTab) {
    case "edit-info":
      return props.enabledFeatureFlags.includes("EditScanProfileDetails") ? (
        <SettingsPanelEditInfoRedesign {...props} />
      ) : (
        <SettingsPanelEditInfo {...props} />
      );
    case "notifications":
      return <SettingsPanelNotifications {...props} />;
    case "manage-account":
      return <SettingsPanelManageAccount {...props} />;
    case "edit-profile":
      if (props.enabledFeatureFlags.includes("EditScanProfileDetails")) {
        return <SettingsPanelEditProfile {...props} />;
      }
    default:
      return <SettingsPanelEditInfo {...props} />;
  }
}

function SettingsPanel(props: SettingsProps) {
  return (
    <div className={styles.panel}>
      <Panel {...props} />
    </div>
  );
}

export { SettingsPanel };
