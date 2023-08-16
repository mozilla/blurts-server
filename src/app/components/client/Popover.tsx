/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import {
  AriaPopoverProps,
  DismissButton,
  Overlay,
  usePopover,
} from "react-aria";
import { OverlayTriggerState } from "react-stately";
import styles from "./Popover.module.scss";

export interface PopoverProps extends AriaPopoverProps {
  children: React.ReactNode;
  state: OverlayTriggerState;
  isOpen: boolean;
}

function Popover({ children, offset, state, isOpen, ...props }: PopoverProps) {
  const { popoverProps } = usePopover({ ...props, offset }, state);

  // The <DismissButton> components allow screen reader users
  // to dismiss the popover easily.
  return (
    <Overlay>
      <div
        {...popoverProps}
        ref={props.popoverRef as React.RefObject<HTMLDivElement>}
        className={`${styles.popover} ${isOpen ? styles.isOpen : ""}`}
        style={{
          ...popoverProps.style,
        }}
      >
        <DismissButton onDismiss={() => state.close()} />
        {children}
        <DismissButton onDismiss={() => state.close()} />
      </div>
    </Overlay>
  );
}

export { Popover };
