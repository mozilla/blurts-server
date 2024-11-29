/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useL10n } from "../../../../../../hooks/l10n";
import { TabList } from "../../../../../../components/client/TabList";
import styles from "./SettingsContent.module.scss";
import { SettingsPanel } from "./panels";
import { TabType } from "./View";
import {
  EmailOutlineIcon,
  MailboxOutlineIcon,
  ContactsOutlineIcon,
} from "../../../../../../components/server/Icons";

type SettingContentProps = {
  activeTab: TabType;
};

type TabData = {
  name: ReactNode;
  key: TabType;
};

function SettingsContent(props: SettingContentProps) {
  const l10n = useL10n();
  const pathname = usePathname();
  const tabsData: TabData[] = [
    {
      name: (
        <>
          <EmailOutlineIcon alt="" width={24} height={24} />
          {l10n.getString("settings-tab-label-edit-info")}
        </>
      ),
      key: "edit-info",
    },
    {
      name: (
        <>
          <MailboxOutlineIcon alt="" width={24} height={24} />
          {l10n.getString("settings-tab-label-notifications")}
        </>
      ),
      key: "notifications",
    },
    {
      name: (
        <>
          <ContactsOutlineIcon alt="" width={24} height={24} />
          {l10n.getString("settings-tab-label-manage-account")}
        </>
      ),
      key: "manage-account",
    },
  ];
  const [activeTab, setActiveTab] = useState<TabType>(props.activeTab);

  // Update the URL pathname when navigating through the panels
  // without causing the page to reload.
  useEffect(() => {
    const nextPathname = `/user/settings/${activeTab}`;
    if (pathname !== nextPathname) {
      // Directly interacting with the history API is recommended by Next.js to
      // avoid re-rendering on the server:
      // See https://github.com/vercel/next.js/discussions/48110#discussioncomment-7563979.
      window.history.replaceState(null, "", nextPathname);
    }
  }, [pathname, activeTab]);

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
          variant="secondary"
        />
      </header>
      <div className={styles.content}>
        <SettingsPanel type={activeTab} />
      </div>
    </main>
  );
}

export { SettingsContent };
