/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useL10n } from "../../../../../../hooks/l10n";
import { TabList } from "../../../../../../components/client/TabList";
import styles from "./SettingsContent.module.scss";
import { SettingsPanel, SettingsProps } from "./panels";
import { TabType } from "./View";
import {
  EmailOutlineIcon,
  MailboxOutlineIcon,
  ContactsOutlineIcon,
} from "../../../../../../components/server/Icons";

type TabData = {
  name: ReactNode;
  key: TabType;
};

function SettingsContent(props: SettingsProps) {
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
  const [activeTab, setActiveTab] = useState<TabType>(
    props.activeTab ?? tabsData[0].key,
  );

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
      {props.enabledFeatureFlags.includes("SidebarNavigationRedesign") && (
        <header className={styles.header}>
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
      )}
      <div className={styles.content}>
        <SettingsPanel
          activeTab={activeTab}
          breachCountByEmailAddress={props.breachCountByEmailAddress}
          data={props.data}
          emailAddresses={props.emailAddresses}
          enabledFeatureFlags={props.enabledFeatureFlags}
          experimentData={props.experimentData}
          fxaSubscriptionsUrl={props.fxaSubscriptionsUrl}
          isMonthlySubscriber={props.isMonthlySubscriber}
          subscriber={props.subscriber}
          user={props.user}
        />
      </div>
    </main>
  );
}

export { SettingsContent };
