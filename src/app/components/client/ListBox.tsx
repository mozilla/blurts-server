/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { Key, ReactNode, RefObject, useRef } from "react";
import { AriaListBoxOptions, useListBox, useOption } from "react-aria";
import { ListState } from "react-stately";
import { useElementWidth } from "../../hooks/useElementWidth";
import styles from "./ListBox.module.scss";

export interface OptionProps extends AriaListBoxOptions<unknown> {
  item: {
    key: Key;
    rendered: ReactNode;
  };
  state: ListState<object>;
}

function Option({ item, state }: OptionProps) {
  const ref = useRef(null);
  const { optionProps, isSelected, isFocused, isDisabled } = useOption(
    { key: item.key },
    state,
    ref
  );

  return (
    <li
      {...optionProps}
      ref={ref}
      className={`${styles.item} ${isSelected ? styles.isSelected : ""} ${
        isFocused ? styles.isFocused : ""
      }  ${isDisabled ? styles.isDisabled : ""}`}
    >
      {item.rendered}
    </li>
  );
}

export interface ListBoxProps extends AriaListBoxOptions<unknown> {
  state: ListState<object>;
  listBoxRef: RefObject<HTMLUListElement>;
  parentRef?: RefObject<HTMLInputElement>;
}

function ListBox(props: ListBoxProps) {
  const { listBoxRef, parentRef, state } = props;
  const { listBoxProps } = useListBox(props, state, listBoxRef);

  const parentWidth = useElementWidth(parentRef);

  return (
    <ul
      {...listBoxProps}
      ref={listBoxRef}
      className={styles.listBox}
      style={{
        ...listBoxProps.style,
        ...(parentWidth && { width: `${parentWidth}px` }),
      }}
    >
      {[...state.collection].map((item) => (
        <Option key={item.key} item={item} state={state} />
      ))}
    </ul>
  );
}

export { ListBox };
