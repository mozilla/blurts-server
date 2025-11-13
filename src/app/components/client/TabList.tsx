/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Key, ReactNode, useRef } from "react";
import {
  AriaTabListOptions,
  useTab,
  useTabList,
  useTabPanel,
} from "react-aria";
import { Item, useTabListState } from "react-stately";
import styles from "./TabList.module.scss";
import { TabListState, TabListStateOptions } from "@react-stately/tabs";

export type TabsProps = (
  | TabListStateOptions<object>
  | AriaTabListOptions<object>
) & {};

export type TabListProps = TabsProps & {
  tabs: Array<{
    key: Key;
    name: string | ReactNode;
    content?: ReactNode;
  }>;
};

export interface TabParams {
  item: {
    key: Parameters<typeof useTab>[0]["key"];
    rendered: ReactNode;
  };
  state: TabListState<object>;
}

function Tab({ item, state }: TabParams) {
  const { key, rendered } = item;
  const ref = useRef(null);
  const { tabProps } = useTab({ key }, state, ref);

  return (
    <div {...tabProps} ref={ref} className={styles.tab}>
      {rendered}
    </div>
  );
}

function Tabs(props: TabsProps) {
  const state = useTabListState(props);
  const ref = useRef(null);
  const { tabListProps } = useTabList(props, state, ref);
  const { collection, selectedItem } = state;

  return (
    <div className={`${styles.container}`} data-test="test">
      <div {...tabListProps} ref={ref} className={styles.tabs}>
        {[...collection].map((item) => (
          <Tab key={item.key} item={item} state={state} />
        ))}
      </div>
      <TabPanel key={selectedItem?.key} state={state} />
    </div>
  );
}

function TabPanel({ state, ...props }: { state: TabListState<object> }) {
  const ref = useRef(null);
  const { tabPanelProps } = useTabPanel(props, state, ref);
  const { selectedItem } = state;

  return (
    <div {...tabPanelProps} ref={ref} className={styles.tabPanel}>
      {selectedItem?.props.children}
    </div>
  );
}

export const TabList = ({ tabs, ...props }: TabListProps) => {
  return (
    <Tabs {...props}>
      {tabs.map((tab) => (
        <Item key={tab.key} title={tab.name}>
          {tab.content}
        </Item>
      ))}
    </Tabs>
  );
};
