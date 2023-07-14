/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { Key, ReactNode, RefObject, useRef } from "react";
import { AriaListBoxOptions, useListBox, useOption } from "react-aria";
import { ListState } from "react-stately";
import { useElementWidth } from "../../hooks/useElementWidth";

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

  let backgroundColor;
  let color = "black";

  if (isSelected) {
    backgroundColor = "blueviolet";
    color = "white";
  } else if (isFocused) {
    backgroundColor = "gray";
  } else if (isDisabled) {
    backgroundColor = "transparent";
    color = "gray";
  }

  return (
    <li
      {...optionProps}
      ref={ref}
      style={{
        background: backgroundColor,
        color: color,
        padding: "2px 5px",
        outline: "none",
        cursor: "pointer",
      }}
    >
      {item.rendered}
    </li>
  );
}

export interface ListBoxProps extends AriaListBoxOptions<unknown> {
  state: ListState<object>;
  listBoxRef: RefObject<HTMLUListElement>;
  inputRef: RefObject<HTMLInputElement>;
}

function ListBox(props: ListBoxProps) {
  const { listBoxRef, inputRef, state } = props;
  const { listBoxProps } = useListBox(props, state, listBoxRef);

  const inputWidth = useElementWidth(inputRef);

  return (
    <ul
      {...listBoxProps}
      ref={listBoxRef}
      style={{
        margin: 0,
        padding: 0,
        listStyle: "none",
        width: `${inputWidth}px`,
      }}
    >
      {[...state.collection].map((item) => (
        <Option key={item.key} item={item} state={state} />
      ))}
    </ul>
  );
}

export { ListBox };
