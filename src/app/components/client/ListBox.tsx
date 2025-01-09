/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactElement, ReactNode, RefObject, useRef } from "react";
import { AriaListBoxOptions, useListBox, useOption } from "react-aria";
import { ListState } from "react-stately";
import { useElementWidth } from "../../hooks/useElementWidth";
import styles from "./ListBox.module.scss";

export interface OptionProps extends AriaListBoxOptions<unknown> {
  item: {
    key: Parameters<typeof useOption>[0]["key"];
    rendered: ReactNode;
  };
  state: ListState<object>;
}

// TODO: Add unit test when changing this code:
/* c8 ignore start */
function Option({ item, state }: OptionProps) {
  const ref = useRef(null);
  const { optionProps, isSelected, isFocused, isDisabled } = useOption(
    { key: item.key },
    state,
    ref,
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
/* c8 ignore stop */

export interface ListBoxProps extends AriaListBoxOptions<unknown> {
  state: ListState<object>;
  listBoxRef: RefObject<HTMLUListElement | null>;
  parentRef?: RefObject<HTMLInputElement | null>;
  listPlaceholder?: ReactElement;
}

// TODO: Add unit test when changing this code:
/* c8 ignore start */
function ListBox(props: ListBoxProps) {
  const { listBoxRef, parentRef, state, listPlaceholder } = props;
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
      {state.collection.size === 0 && listPlaceholder && (
        <li className={styles.item}>{listPlaceholder}</li>
      )}
    </ul>
  );
}
/* c8 ignore stop */

export { ListBox };
