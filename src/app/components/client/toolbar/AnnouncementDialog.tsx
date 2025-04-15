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
import { AnnouncementsIcon, CloseBtn } from "../../server/Icons";
import styles from "./AnnouncementDialog.module.scss";
import { UserAnnouncementWithDetails } from "../../../../../src/db/tables/user_announcements";
import { TelemetryLink } from "../TelemetryLink";
import { useTelemetry } from "../../../hooks/useTelemetry";
import { AnnouncementRow } from "knex/types/tables";
import { truncateDescription } from "../../../../utils/truncate";

type AnnouncementDialogProps = {
  announcements: UserAnnouncementWithDetails[];
};

export const AnnouncementDialog = ({
  announcements,
}: AnnouncementDialogProps) => {
  const l10n = useL10n();
  const recordTelemetry = useTelemetry();
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const triggerState = useOverlayTriggerState({
    onOpenChange: (isOpen) => {
      if (isOpen) {
        recordTelemetry("button", "click", {
          button_id: "opened_announcements",
        });
      } else {
        recordTelemetry("button", "click", {
          button_id: "closed_announcements",
        });
        setAnnouncementDetailsView(false);
        setActiveTab("new");
      }
    },
  });
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    triggerState,
    triggerRef,
  );
  const { buttonProps } = useButton(triggerProps, triggerRef);
  const dismissButtonRef = useRef<HTMLButtonElement>(null);
  const dismissButtonProps = useButton(
    {
      /* c8 ignore next 3 */
      onPress: () => {
        triggerState.close();
      },
    },
    dismissButtonRef,
  ).buttonProps;

  const popoverRef = useRef(null);
  const [smallImageUnavailableMap, setSmallImageUnavailableMap] = useState<
    Record<string, boolean>
  >({});
  const [bigImageUnavailableMap, setBigImageUnavailableMap] = useState<
    Record<string, boolean>
  >({});
  const [announcementDetailsView, setAnnouncementDetailsView] = useState(false);
  const [activeTab, setActiveTab] = useState<"new" | "all">("new");

  const [relevantAnnouncement, setRelevantAnnouncement] =
    useState<UserAnnouncementWithDetails | null>(null);

  const [userAnnouncements, setUserAnnouncements] =
    useState<UserAnnouncementWithDetails[]>(announcements);

  const sortedAnnouncements = [...userAnnouncements].sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });

  const numNewAnnouncements = userAnnouncements.filter(
    (a) => a.status === "new",
  ).length;

  const filteredAnnouncements = sortedAnnouncements.filter((a) =>
    activeTab === "new"
      ? a.status === "new"
      : a.status === "seen" || a.status === "cleared",
  );

  const handleMarkAsSeen = async (
    announcement: UserAnnouncementWithDetails,
  ) => {
    // Optimistically handle state change
    setUserAnnouncements((prev) =>
      prev.map((a) =>
        a.announcement_id === announcement.announcement_id
          ? {
              ...a,
              status: "seen",
              clicked_at: new Date(),
              seen_at: new Date(),
            }
          : a,
      ),
    );

    try {
      await fetch(
        `/api/v1/user/announcements/${announcement.announcement_id}/seen`,
        {
          method: "PUT",
        },
      );

      recordTelemetry("expand", "click", {
        button_id: `${announcement.announcement_id}_marked_as_seen`,
      });
      // The mock implementation throws an error by design,
      // so this state is difficult to reach in tests.
      /* c8 ignore start */
    } catch (err) {
      console.error("Failed to clear all announcements:", err);
    }
    /* c8 ignore end */
  };

  const handleClearAll = async () => {
    const newAnnouncements = userAnnouncements.filter(
      (a) => a.status === "new",
    );

    setUserAnnouncements((prev) =>
      prev.map((a) =>
        a.status === "new"
          ? {
              ...a,
              status: "cleared",
              cleared_at: new Date(),
            }
          : a,
      ),
    );

    try {
      await Promise.all(
        newAnnouncements.map((a) =>
          fetch(`/api/v1/user/announcements/${a.announcement_id}/cleared`, {
            method: "PUT",
          }),
        ),
      );

      recordTelemetry("button", "click", {
        button_id: "cleared_all_announcements",
      });
      // The mock implementation throws an error by design,
      // so this state is difficult to reach in tests.
      /* c8 ignore start */
    } catch (err) {
      console.error("Failed to clear all announcements:", err);
    }
    /* c8 ignore end */
  };

  return (
    <>
      <button
        {...buttonProps}
        className={styles.announcementBtn}
        ref={triggerRef}
        aria-haspopup={true}
        aria-label={l10n.getString("announcement-dialog-trigger-alt")}
      >
        <AnnouncementsIcon alt="" />
        {numNewAnnouncements > 0 && (
          <span className={styles.badge}>
            {/* c8 ignore next */}
            {numNewAnnouncements > 9 ? "9+" : numNewAnnouncements}
          </span>
        )}
      </button>

      {triggerState.isOpen && (
        <Popover
          popoverRef={popoverRef}
          offset={20}
          triggerRef={triggerRef}
          state={triggerState}
          {...overlayProps}
        >
          <div
            className={styles.announcementsWrapper}
            role="dialog"
            aria-label={l10n.getString("announcement-dialog-alt")}
          >
            <div className={styles.announcementsTabList} role="tablist">
              <button
                className={activeTab === "new" ? styles.active : ""}
                role="tab"
                aria-selected={activeTab === "new"}
                onClick={() => {
                  setActiveTab("new");
                  setAnnouncementDetailsView(false);
                  recordTelemetry("button", "click", {
                    button_id: `view_new_announcements`,
                  });
                }}
              >
                {l10n.getString("announcement-dialog-default-tab")}
              </button>
              <button
                className={activeTab === "all" ? styles.active : ""}
                role="tab"
                aria-selected={activeTab === "all"}
                onClick={() => {
                  setActiveTab("all");
                  setAnnouncementDetailsView(false);
                  recordTelemetry("button", "click", {
                    button_id: `view_all_announcements`,
                  });
                }}
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
                    // The image rendering logic is skipped in coverage reports because
                    // it relies on static imports of SVGs that are difficult to mock/test
                    /* c8 ignore start */
                    src={
                      !bigImageUnavailableMap[
                        relevantAnnouncement.announcement_id
                      ]
                        ? `/images/announcements/${relevantAnnouncement.announcement_id}/big.svg`
                        : `/images/announcements/fallback/big.svg`
                    }
                    /* c8 ignore end */
                    alt={l10n.getString("announcement-big-img-alt")}
                    width={300}
                    height={100}
                    // The image rendering logic is skipped in coverage reports because
                    // it relies on static imports of SVGs that are difficult to mock/test accurately in JSDOM
                    /* c8 ignore start */
                    onError={() =>
                      setBigImageUnavailableMap((prev) => ({
                        ...prev,
                        [relevantAnnouncement.announcement_id]: true,
                      }))
                    }
                    /* c8 ignore end */
                  />
                  <div className={styles.announcementWrapperOpen}>
                    <dl className={styles.announcementItemOpen}>
                      <dt>
                        <LocalizedAnnouncementString
                          announcement={relevantAnnouncement}
                          type="title"
                        />
                      </dt>
                      <dd>
                        <LocalizedAnnouncementString
                          announcement={relevantAnnouncement}
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
                          announcement={relevantAnnouncement}
                          type="cta-label"
                        />
                      </TelemetryLink>
                    )}
                  </div>
                  <button
                    className={styles.backBtn}
                    onClick={() => setAnnouncementDetailsView(false)}
                  >
                    <span>{l10n.getString("announcement-dialog-back")}</span>
                  </button>
                </div>
              ) : (
                <div>
                  {filteredAnnouncements.length === 0 ? (
                    // Empty state
                    <div className={styles.emptyState}>
                      <Image
                        width={300}
                        height={100}
                        alt=""
                        src="/images/announcements/announcement-empty-come-back.svg"
                      />
                      <dl>
                        <dt>
                          {l10n.getString(
                            "announcement-dialog-empty-state-title",
                          )}
                        </dt>
                        <dd>
                          {l10n.getString(
                            "announcement-dialog-empty-state-description",
                          )}
                        </dd>
                      </dl>
                    </div>
                  ) : (
                    // List of announcements

                    filteredAnnouncements.map((announcement) => (
                      <button
                        className={styles.announcementItem}
                        key={announcement.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          setRelevantAnnouncement(announcement);
                          setAnnouncementDetailsView(true);
                          handleMarkAsSeen(announcement);
                        }}
                      >
                        <Image
                          className={styles.smallImg}
                          // The image rendering logic is skipped in coverage reports because
                          // it relies on static imports of SVGs that are difficult to mock/test
                          /* c8 ignore start */
                          src={
                            !smallImageUnavailableMap[
                              announcement.announcement_id
                            ]
                              ? `/images/announcements/${announcement.announcement_id}/small.svg`
                              : `/images/announcements/fallback/small.svg`
                          }
                          /* c8 ignore end */
                          alt={l10n.getString("announcement-small-img-alt")}
                          width={48}
                          height={48}
                          // The image rendering logic is skipped in coverage reports because
                          // it relies on static imports of SVGs that are difficult to mock/test accurately in JSDOM
                          /* c8 ignore start */
                          onError={() =>
                            setSmallImageUnavailableMap((prev) => ({
                              ...prev,
                              [announcement.announcement_id]: true,
                            }))
                          }
                          /* c8 ignore end */
                        />
                        <dl role="group">
                          <dt>
                            <LocalizedAnnouncementString
                              announcement={announcement}
                              type="title"
                            />
                          </dt>
                          <dd>
                            <LocalizedAnnouncementString
                              announcement={announcement}
                              type="description"
                              truncatedDescription
                            />
                          </dd>
                        </dl>
                      </button>
                    ))
                  )}
                  {activeTab === "new" &&
                    filteredAnnouncements.length !== 0 && (
                      <button
                        className={styles.clearAllBtn}
                        onClick={handleClearAll}
                      >
                        <span>
                          {l10n.getString("announcement-dialog-clear-all")}
                        </span>
                      </button>
                    )}
                </div>
              )}
            </div>
            <button
              {...dismissButtonProps}
              ref={dismissButtonRef}
              type="button"
              className={styles.dismissButton}
            >
              <CloseBtn
                alt={l10n.getString("close-modal-alt")}
                width="14"
                height="14"
              />
            </button>
          </div>
        </Popover>
      )}
    </>
  );
};

type LocalizedAnnouncementStringProps = {
  announcement: AnnouncementRow;
  type: "title" | "description" | "cta-label";
  truncatedDescription?: boolean;
};

export const LocalizedAnnouncementString = (
  props: LocalizedAnnouncementStringProps,
) => {
  const l10n = useL10n();

  // Build the key based on the type (fluent IDs are named in this format)
  const key = `announcement-${props.announcement.announcement_id}-${props.type}`;

  const localizedString = l10n.getString(key);

  // If the key is not translated, use the fallback values from the announcements table
  if (localizedString === key) {
    console.warn(`${props.announcement.announcement_id} is not localized`);

    if (props.type === "title") {
      return props.announcement.title;
    }
    if (props.type === "description") {
      return props.announcement.description;
    }
    if (props.type === "cta-label") {
      return props.announcement.cta_label;
    }
  }

  return (
    <>
      {props.truncatedDescription
        ? truncateDescription(localizedString)
        : localizedString}
    </>
  );
};
/* c8 ignore end */
