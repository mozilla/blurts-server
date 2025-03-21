/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useButton, useOverlayTrigger } from "react-aria";
import { useL10n } from "../../../hooks/l10n";
import { useRef } from "react";
import { useOverlayTriggerState } from "react-stately";
import { Popover } from "../Popover";
import { AnnouncementsIcon } from "../../server/Icons";
import styles from "./AnnouncementDialog.module.scss";

export const AnnouncementDialog = ({ ...otherProps }) => {
  const l10n = useL10n();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const triggerState = useOverlayTriggerState(otherProps);
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    triggerState,
    triggerRef,
  );
  const { buttonProps } = useButton(triggerProps, triggerRef);
  const popoverRef = useRef(null);

  return (
    <>
      <button
        {...buttonProps}
        className={styles.announcementBtn}
        ref={triggerRef}
        aria-label={l10n.getString("open-tooltip-alt")}
        aria-describedby={l10n.getString(
          "landing-premium-plans-table-feature-callout-trigger",
        )}
      >
        <AnnouncementsIcon alt="" />
      </button>
      {triggerState.isOpen && (
        <Popover
          popoverRef={popoverRef}
          offset={4}
          triggerRef={triggerRef}
          state={triggerState}
          {...overlayProps}
        >
          HELLO THIS IS THE CONTENT
        </Popover>
      )}
    </>
  );
};
