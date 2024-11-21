/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { SettingsPanelEditInfo } from "./SettingsPanelEditInfo";
import { SettingsPanelNotifications } from "./SettingsPanelNotifications";
import { SettingsPanelManageAccount } from "./SettingsPanelManageAccount";
import styles from "./Panel.module.scss";

function Panel(props: { type: string }) {
  switch (props.type) {
    case "edit-info":
      return <SettingsPanelEditInfo />;
    case "notifications":
      return <SettingsPanelNotifications />;
    case "manage-account":
      return <SettingsPanelManageAccount />;
  }
}

function SettingsPanel(props: { type: string }) {
  return (
    <div className={styles.panel}>
      <Panel type={props.type} />
    </div>
  );
}

export { SettingsPanel };
