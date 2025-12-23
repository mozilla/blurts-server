/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import {
  AriaPopoverProps,
  DismissButton,
  FocusScope,
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
      {/* FocusScope is a utility component that traps keyboard focus within its child elements.
      When used in a dialog, it ensures that focus never leaves the dialog until it’s closed. */}
      {/* We've disabled autoFocus so the popover doesn’t steal or re-trap focus
      For more details see MNTOR-4523 */}
      <FocusScope contain restoreFocus autoFocus={false}>
        <div {...underlayProps} className={styles.underlay} />
        <div
          {...popoverProps}
          // TODO The `react-hooks` ESLint rules didn't apply correctly
          // for a while, and apparently this line breaks it. To enable the
          // rule, I've suppressed the warning here for now, but we should
          // look into fixing it:
          // eslint-disable-next-line react-hooks/refs
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
      </FocusScope>
    </Overlay>
  );
}
/* c8 ignore stop */

export { Popover };
