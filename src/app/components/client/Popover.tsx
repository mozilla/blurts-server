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

export interface PopoverProps extends AriaPopoverProps {
  children: React.ReactNode;
  state: OverlayTriggerState;
  isVisible: boolean;
}

function Popover({ children, state, isVisible, ...props }: PopoverProps) {
  const { popoverProps } = usePopover(props, state);

  // The <DismissButton> components allow screen reader users
  // to dismiss the popover easily.
  return (
    <Overlay>
      <div
        {...popoverProps}
        ref={props.popoverRef as React.RefObject<HTMLDivElement>}
        style={{
          ...popoverProps.style,
          background: "lightgray",
          border: isVisible ? "1px solid green" : "none",
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
