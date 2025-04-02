/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { Node, useTabListState, TabListState, Item } from "react-stately";
import { TabListStateOptions } from "@react-stately/tabs";
import {
  AriaTabListOptions,
  AriaTabPanelProps,
  AriaTabProps,
  useTab,
  useTabList,
  useTabPanel,
} from "react-aria";
import { useRef } from "react";
import { Session } from "next-auth";
import { usePathname } from "next/navigation";
import styles from  "./DashboardTabs.module.scss";
import { useL10n } from "../../../../../../hooks/l10n";
import { EnvironmentConstants } from "../../../../../../functions/server/getEnvironmentConstants";
import { FeatureFlagName } from "../../../../../../../db/tables/featureFlags";
import { ExperimentData } from "../../../../../../../telemetry/generated/nimbus/experiments";
import { LatestOnerepScanData } from "../../../../../../../db/tables/onerep_scans";
import { SubscriberBreach } from "../../../../../../../utils/subscriberBreaches";
import { TabActionNeeded } from "./TabActionNeeded";
import { TabResolved } from "./TabResolved";
import { DataBrokerRemovalTime } from "../../../../../../functions/server/getDataBrokerRemovalTimeEstimates";

export type Props = {
  session: Session;
  envConstants: EnvironmentConstants;
  enabledFeatureFlags: FeatureFlagName[];
  experimentData: ExperimentData["Features"];
  scanData: LatestOnerepScanData;
  userBreaches: SubscriberBreach[];
  countryCode: string;
  removalTimeEstimates: DataBrokerRemovalTime[];
};

export const DashboardTabs = (props: Props) => {
  const l10n = useL10n();
  const pathname = usePathname();

  const tabs = {
    "action-needed": {
      content: <TabActionNeeded
        session={props.session}
        envConstants={props.envConstants}
        enabledFeatureFlags={props.enabledFeatureFlags}
        experimentData={props.experimentData}
        scanData={props.scanData}
        userBreaches={props.userBreaches}
        countryCode={props.countryCode}
        removalTimeEstimates={props.removalTimeEstimates}
      />,
      title: l10n.getString("dashboard-tab-label-action-needed"),
    },
    fixed: {
      content: <TabResolved
        session={props.session}
        envConstants={props.envConstants}
        enabledFeatureFlags={props.enabledFeatureFlags}
        experimentData={props.experimentData}
        scanResults={props.scanData}
        userBreaches={props.userBreaches}
      />,
      title: l10n.getString("dashboard-tab-label-resolved"),
    },
  };
  const defaultTab =
    Object.keys(tabs).find(
      (tab) => getPathForTabname(tab) === pathname,
    ) ?? "action-needed";

  return (
    <TabList
      aria-label={l10n.getString("dashboard-tabs-label")}
      defaultSelectedKey={defaultTab}
      onSelectionChange={(newTab) =>
        // Keep the URL aligned with the current tab:
        // https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#using-the-native-history-api
        window.history.pushState(null, "", getPathForTabname(newTab as string))
      }
      orientation="horizontal"
    >
      {Object.entries(tabs).map(([key, tabData]) => (
        <Item key={key} title={tabData.title}>{tabData.content}</Item>
      ))}
    </TabList>
  );
};

const TabList = (
  props: TabListStateOptions<AriaTabProps> & AriaTabListOptions<AriaTabProps>,
) => {
  const state = useTabListState(props);
  const tabListRef = useRef(null);
  const { tabListProps } = useTabList(props, state, tabListRef);

  return (
    <div className={styles.wrapper}>
      <div {...tabListProps} ref={tabListRef} className={styles.tabList}>
        {[...state.collection].map((item) => (
          <Tab key={item.key} item={item} state={state} />
        ))}
      </div>
      <TabPanel key={state.selectedItem?.key} state={state} />
    </div>
  );
};

const Tab = (props: {
  item: Node<AriaTabProps>;
  state: TabListState<AriaTabProps>;
}) => {
  const tabRef = useRef(null);
  const { tabProps } = useTab({ key: props.item.key }, props.state, tabRef);

  return (
    <div {...tabProps} ref={tabRef} className={styles.tab}>
      <a
        href={getPathForTabname(props.item.key as string)}
        onClick={(e) => {
          if (e.ctrlKey) {
            // If the user holds Ctrl, they're opening the link in a new tab
            return;
          }
          // The `href` is to ensure users can open a tab in a new browser tab,
          // or copy the link via the context menu, but the <TabList> handles
          // actual client-side navigation, so prevent the browser from following the link.
          e.preventDefault();
        }} className={styles.label}
      >
        {props.item.rendered}
      </a>
    </div>
  );
};

const TabPanel = ({
  state,
  ...otherProps
}: AriaTabPanelProps & { state: TabListState<AriaTabProps> }) => {
  const tabPanelRef = useRef(null);
  const { tabPanelProps } = useTabPanel(otherProps, state, tabPanelRef);

  return (
    <div {...tabPanelProps} ref={tabPanelRef}>
      {state.selectedItem?.props.children}
    </div>
  );
};

const getPathForTabname = (tab: string) => `/user/dashboard-beta/${tab}`;
