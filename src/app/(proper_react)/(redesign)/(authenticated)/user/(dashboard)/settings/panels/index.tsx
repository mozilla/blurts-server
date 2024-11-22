/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { SettingsPanelEditInfo } from "./SettingsPanelEditInfo";
import { SettingsPanelNotifications } from "./SettingsPanelNotifications";
import { SettingsPanelManageAccount } from "./SettingsPanelManageAccount";
import styles from "./Panel.module.scss";
import { SettingContentProps } from "../SettingsContent";

function Panel(props: SettingContentProps) {
  switch (props.activeTab) {
    case "edit-info":
      return <SettingsPanelEditInfo {...props} />;
    case "notifications":
      return <SettingsPanelNotifications />;
    case "manage-account":
      return <SettingsPanelManageAccount />;
  }
}

function SettingsPanel(props: SettingContentProps) {
  return (
    <div className={styles.panel}>
      <Panel {...props} />
    </div>
  );
}

export { SettingsPanel };
