/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useState } from "react";
import { useL10n } from "../../../../../../hooks/l10n";
import { TabType } from "../dashboard/View";
import { TabList } from "../../../../../../components/client/TabList";
import styles from "./SettingsContent.module.scss";
import { SettingsPanel } from "./panels";

function SettingsContent() {
  const l10n = useL10n();
  const tabsData = [
    {
      name: l10n.getString("settings-tab-label-edit-info"),
      key: "edit-info",
    },
    {
      name: l10n.getString("settings-tab-label-notifications"),
      key: "label-notification",
    },
    {
      name: l10n.getString("settings-tab-label-manage-account"),
      key: "manage-account",
    },
  ];
  const [activeTab, setActiveTab] = useState<(typeof tabsData)[number]["key"]>(
    tabsData[0].key,
  );

  return (
    <main className={styles.main}>
      <header className={styles.title}>
        <h2>{l10n.getString("settings-page-title")}</h2>
        <TabList
          selectedKey={activeTab}
          tabs={tabsData}
          orientation="vertical"
          onSelectionChange={(selectedKey) => {
            setActiveTab(selectedKey as TabType);
          }}
        />
      </header>
      <div className={styles.content}>
        <SettingsPanel type={activeTab} />
      </div>
    </main>
  );
}

export { SettingsContent };
