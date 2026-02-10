/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Key, ReactNode, useRef } from "react";
import {
  AriaTabListOptions,
  AriaTabPanelProps,
  useTab,
  useTabList,
  useTabPanel,
} from "react-aria";
import { Item, Node } from "react-stately";
import styles from "./TabList.module.scss";
import { TabListState, TabListStateOptions } from "@react-stately/tabs";

export type TabsProps = (
  | TabListStateOptions<object>
  | AriaTabListOptions<object>
) & {
  variant?: "primary" | "secondary";
  state: TabListState<object>;
};

export type TabListProps = TabsProps & {
  tabs: Array<{
    key: Key;
    name: string | ReactNode;
    content?: ReactNode;
  }>;
};

export interface TabParams {
  item: Node<object>;
  state: TabListState<object>;
}

function Tab({ item, state }: TabParams) {
  const ref = useRef(null);
  const { key } = item;
  const { tabProps } = useTab({ key }, state, ref);

  return (
    <div {...tabProps} ref={ref} className={styles.tab}>
      {item.rendered}
    </div>
  );
}

function Tabs(props: TabsProps) {
  const ref = useRef(null);
  const { tabListProps } = useTabList(props, props.state, ref);
  const { collection } = props.state;

  return (
    <div
      className={`${styles.container} ${props.variant ? styles[props.variant] : ""}`}
      data-test="test"
    >
      <div {...tabListProps} ref={ref} className={styles.tabs}>
        {[...collection].map((item) => (
          <Tab key={item.key} item={item} state={props.state} />
        ))}
      </div>
    </div>
  );
}

export const TabList = ({ tabs, ...props }: TabListProps) => {
  return (
    <Tabs id="tablist" {...props}>
      {tabs.map((tab) => (
        <Item key={tab.key} title={tab.name}>
          {tab.content}
        </Item>
      ))}
    </Tabs>
  );
};
export interface TabPanelProps extends AriaTabPanelProps {
  state: TabListState<object>;
  className?: string; // etc
  children: ReactNode;
}

export function TabPanel({ state, ...props }: TabPanelProps) {
  const ref = useRef(null);
  const { tabPanelProps } = useTabPanel(props, state, ref);
  return (
    <div {...tabPanelProps} ref={ref} className={props.className}>
      {props.children}
    </div>
  );
}
