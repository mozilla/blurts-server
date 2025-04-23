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
}

// TODO: Add unit test when changing this code:
/* c8 ignore start */
function Popover({ children, offset, state, ...props }: PopoverProps) {
  const { popoverProps, underlayProps } = usePopover(
    { ...props, offset },
    state,
  );

  // The <DismissButton> components allow screen reader users
  // to dismiss the popover easily.
  return (
    <Overlay>
      <div {...underlayProps} className={styles.underlay} />
      <div
        {...popoverProps}
        ref={props.popoverRef as React.RefObject<HTMLDivElement | null>}
        className={`${styles.popover} ${state.isOpen ? styles.isVisible : ""}`}
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
/* c8 ignore stop */

export { Popover };
