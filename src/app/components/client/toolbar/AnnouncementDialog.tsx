/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Image from "next/image";
import { useButton, useOverlayTrigger } from "react-aria";
import { useL10n } from "../../../hooks/l10n";
import { useRef, useState } from "react";
import { useOverlayTriggerState } from "react-stately";
import { Popover } from "../Popover";
import { AnnouncementsIcon } from "../../server/Icons";
import styles from "./AnnouncementDialog.module.scss";
import { UserAnnouncementWithDetails } from "../../../../../src/db/tables/user_announcements";
import { LocalizedAnnouncementString } from "../../../(proper_react)/(redesign)/(authenticated)/admin/announcements/AnnouncementsAdmin";

type AnnouncementDialogProps = {
  announcements: UserAnnouncementWithDetails[];
};

export const AnnouncementDialog = ({
  announcements,
  ...otherProps
}: AnnouncementDialogProps) => {
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
  // const [bigImageIsLoading, setBigImageIsLoading] = useState(true);
  // const [bigImageUnavailable, setBigImageUnavailable] = useState(false);
  const [smallImageUnavailableMap, setSmallImageUnavailableMap] = useState<
    Record<string, boolean>
  >({});

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
          <div className={styles.announcementsContainer}>
            {announcements.map((announcement) => (
              <div className={styles.announcementItem} key={announcement.id}>
                <Image
                  src={
                    !smallImageUnavailableMap[announcement.announcement_id]
                      ? `/images/announcements/${announcement.announcement_id}/small.jpg`
                      : `/images/announcements/fallback/small.jpg`
                  }
                  alt=""
                  width={48}
                  height={48}
                  onError={() =>
                    setSmallImageUnavailableMap((prev) => ({
                      ...prev,
                      [announcement.announcement_id]: true,
                    }))
                  }
                />
                <dl>
                  <dt>
                    <LocalizedAnnouncementString
                      notification={announcement}
                      type="title"
                    />
                  </dt>
                  <dd>
                    <LocalizedAnnouncementString
                      notification={announcement}
                      type="description"
                    />
                  </dd>
                </dl>
              </div>
            ))}
          </div>
        </Popover>
      )}
    </>
  );
};
