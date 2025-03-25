/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Image from "next/image";
import { useButton, useOverlayTrigger } from "react-aria";
import { useL10n } from "../../../hooks/l10n";
import { useEffect, useRef, useState } from "react";
import { useOverlayTriggerState } from "react-stately";
import { Popover } from "../Popover";
import { AnnouncementsIcon } from "../../server/Icons";
import styles from "./AnnouncementDialog.module.scss";
import { UserAnnouncementWithDetails } from "../../../../../src/db/tables/user_announcements";
import { LocalizedAnnouncementString } from "../../../(proper_react)/(redesign)/(authenticated)/admin/announcements/AnnouncementsAdmin";
import { TelemetryLink } from "../TelemetryLink";

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
  const [announcementDetailsView, setAnnouncementDetailsView] = useState(false);
  const [activeTab, setActiveTab] = useState<"new" | "history">("new");

  const [relevantAnnouncement, setRelevantAnnouncement] =
    useState<UserAnnouncementWithDetails | null>(null);

  const [userAnnouncements, setUserAnnouncements] =
    useState<UserAnnouncementWithDetails[]>(announcements);

  useEffect(() => {
    if (triggerState.isOpen) {
      fetch("/api/v1/user/announcements")
        .then((res) => res.json())
        .then(setUserAnnouncements);
    }
  }, [triggerState.isOpen]);

  const sortedAnnouncements = [...userAnnouncements].sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });

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
          <div className={styles.announcementsWrapper}>
            <div className={styles.announcementsTabList} role="tablist">
              <button
                className={activeTab === "new" ? styles.active : ""}
                role="tab"
                onClick={() => setActiveTab("new")}
              >
                {l10n.getString("announcement-dialog-default-tab")}
              </button>
              <button
                className={activeTab === "history" ? styles.active : ""}
                role="tab"
                onClick={() => setActiveTab("history")}
              >
                {l10n.getString("announcement-dialog-history-tab")}
              </button>
            </div>
            <hr className={styles.horizontalLine} />
            <div className={styles.announcementsContainer}>
              {announcementDetailsView && relevantAnnouncement ? (
                <div>
                  <Image
                    className={styles.bigImg}
                    src={
                      !smallImageUnavailableMap[
                        relevantAnnouncement.announcement_id
                      ]
                        ? `/images/announcements/${relevantAnnouncement.announcement_id}/big.jpg`
                        : `/images/announcements/fallback/big.jpg`
                    }
                    alt=""
                    width={300}
                    height={100}
                    onError={() =>
                      setSmallImageUnavailableMap((prev) => ({
                        ...prev,
                        [relevantAnnouncement.announcement_id]: true,
                      }))
                    }
                  />
                  <div className={styles.announcementWrapperOpen}>
                    <dl className={styles.announcementItemOpen}>
                      <dt>
                        {" "}
                        <LocalizedAnnouncementString
                          notification={relevantAnnouncement}
                          type="title"
                        />
                      </dt>
                      <dd>
                        <LocalizedAnnouncementString
                          notification={relevantAnnouncement}
                          type="description"
                        />
                      </dd>
                    </dl>
                    {relevantAnnouncement.cta_link && (
                      <TelemetryLink
                        href={relevantAnnouncement.cta_link}
                        target="_blank"
                        className={styles.announcementCta}
                        eventData={{
                          link_id: `${relevantAnnouncement.announcement_id}-cta`,
                        }}
                      >
                        <LocalizedAnnouncementString
                          notification={relevantAnnouncement}
                          type="cta-label"
                        />
                      </TelemetryLink>
                    )}
                  </div>

                  <button
                    className={styles.backBtn}
                    onClick={() => setAnnouncementDetailsView(false)}
                  >
                    <span> {l10n.getString("announcement-dialog-back")}</span>
                  </button>
                </div>
              ) : (
                // List of announcements
                sortedAnnouncements.map((announcement) => (
                  <div
                    role="button"
                    className={styles.announcementItem}
                    key={announcement.id}
                    onClick={() => {
                      setRelevantAnnouncement(announcement);
                      setAnnouncementDetailsView(true);
                    }}
                  >
                    <Image
                      className={styles.smallImg}
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
                          truncatedDescription
                        />
                      </dd>
                    </dl>
                  </div>
                ))
              )}
            </div>
          </div>
        </Popover>
      )}
    </>
  );
};
