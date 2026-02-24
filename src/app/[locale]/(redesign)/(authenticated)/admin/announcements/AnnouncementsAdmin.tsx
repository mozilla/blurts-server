/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* c8 ignore start */
/*
  This file is excluded from unit test coverage because it’s an internal admin-only
  tool and not part of the user-facing experience. It contains minimal logic,
  is not critical to core app functionality, and is tested manually as needed.
*/

"use client";

import { useEffect, useState } from "react";
import styles from "./AnnouncementsAdmin.module.scss";
import { AnnouncementRow } from "knex/types/tables";
import AnnouncementsModal from "./AnnouncementsModal";
import { usePathname } from "next/navigation";
import { LocalizedAnnouncementString } from "../../../../../components/client/toolbar/AnnouncementDialog";
import { useL10n } from "../../../../../hooks/l10n";
import { GroupedFluentAnnouncements } from "./getFluentStrings";
import { ImageWithFallback } from "./ImageWithFallback";
import { FluentStringsView } from "./FluentStringsView";
import { AnnouncementsDocsView } from "./DocsView";

type Props = {
  announcements: AnnouncementRow[];
  fluentStrings: GroupedFluentAnnouncements;
};

export const AnnouncementsAdmin = (props: Props) => {
  const [activeAnnouncementId, setActiveAnnouncementId] = useState<
    number | null
  >(props.announcements[0]?.id || null);
  const [activeAnnouncementToEdit, setActiveAnnouncementToEdit] =
    useState<AnnouncementRow | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [announcements, setAnnouncements] = useState<AnnouncementRow[]>(
    props.announcements,
  );
  const endpointBase = `/api/v1/admin/announcements`;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const l10n = useL10n();

  const handleAddAnnouncement = async (newAnnouncement: AnnouncementRow) => {
    try {
      const response = await fetch(endpointBase, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newAnnouncement),
      });

      if (!response.ok) throw new Error("Failed to add announcement");

      const savedAnnouncement: AnnouncementRow = await response.json();

      setAnnouncements((prev) => [...prev, savedAnnouncement]);
      setActiveAnnouncementId(savedAnnouncement.id);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding announcement:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUpdateAnnouncement = async (
    updatedAnnouncement: AnnouncementRow,
  ) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(
        `/api/v1/admin/announcements/${updatedAnnouncement.announcement_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedAnnouncement),
        },
      );

      if (!response.ok) throw new Error("Failed to update announcement");

      const updated = await response.json();

      setAnnouncements((prev) =>
        prev.map((a) => (a.id === updated.id ? updated : a)),
      );
      setActiveAnnouncementId(updated.id);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error updating announcement:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteAnnouncement = async (announcementId: string) => {
    try {
      const response = await fetch(
        `/api/v1/admin/announcements/${announcementId}/`,
        {
          method: "DELETE",
        },
      );

      if (!response.ok) {
        console.error(
          "Failed to delete announcement:",
          response.status,
          response.statusText,
        );
        return;
      }

      setAnnouncements((prevAnnouncements) =>
        prevAnnouncements.filter(
          (announcement) => announcement.announcement_id !== announcementId,
        ),
      );

      if (announcementId === activeAnnouncement?.announcement_id) {
        setActiveAnnouncementId(
          announcements.length > 1 ? announcements[0].id : null,
        );
      }
    } catch (error) {
      console.error("Error deleting announcement:", error);
    }
  };

  const handleEditAnnouncement = (announcementId: string) => {
    const announcementToEdit = announcements.find(
      (n) => n.announcement_id === announcementId,
    );
    if (announcementToEdit) {
      setIsModalOpen(true);
      // Pass the notification data to the modal for editing
      setActiveAnnouncementToEdit(announcementToEdit);
    }
  };

  // Handle selecting a notification
  const handleClick = (announcementId: number) => {
    const newActiveAnnouncement = announcements.find(
      (n) => n.id === announcementId,
    );
    if (newActiveAnnouncement) {
      setActiveAnnouncementId(announcementId);
    }
  };

  // Find the active notification from the list of announcements
  const activeAnnouncement = announcements.find(
    (notification) => notification.id === activeAnnouncementId,
  );

  useEffect(() => {
    if (announcements.length > 0 && activeAnnouncementId === null) {
      setActiveAnnouncementId(announcements[0].id);
    }
  }, [announcements, activeAnnouncementId]);

  const smallImagePath = `/images/announcements/${activeAnnouncement?.announcement_id.trim()}/small.svg`;
  const bigImagePath = `/images/announcements/${activeAnnouncement?.announcement_id.trim()}/big.svg`;

  const sortedAnnouncements = [...announcements].sort((a, b) => {
    return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
  });
  const [activeTab, setActiveTab] = useState<
    "announcements" | "strings" | "docs"
  >("announcements");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.tabBar}>
        <button
          className={`${styles.tabButton} ${
            activeTab === "announcements" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("announcements")}
        >
          Announcements
        </button>
        <button
          className={`${styles.tabButton} ${
            activeTab === "strings" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("strings")}
        >
          Fluent Strings
        </button>
        <button
          className={`${styles.tabButton} ${
            activeTab === "docs" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("docs")}
        >
          Docs
        </button>
      </div>
      {/* <View /> */}
      {activeTab === "announcements" && (
        <>
          {/* Announcements Block */}
          <div className={styles.wrapper}>
            {/* List of announcements */}
            <div className={styles.notificationsWrapper}>
              <h1>All Announcements</h1>
              <ul>
                {sortedAnnouncements.map((notification) => (
                  <li
                    key={notification.id}
                    className={
                      activeAnnouncementId === notification.id
                        ? styles.active
                        : ""
                    }
                    onClick={() => handleClick(notification.id)}
                  >
                    <div>
                      <p className={styles.title}>
                        <span className={styles.missingLabelContainer}>
                          <LocalizedAnnouncementString
                            announcement={notification}
                            type="title"
                          />
                          <MissingFluentId
                            announcement={notification}
                            type="title"
                          />
                        </span>
                      </p>
                      <p className={styles.description}>
                        <span className={styles.missingLabelContainer}>
                          <LocalizedAnnouncementString
                            announcement={notification}
                            type="description"
                          />
                          <MissingFluentId
                            announcement={notification}
                            type="description"
                          />
                        </span>
                      </p>
                    </div>
                    <div className={styles.pills}>
                      <div
                        className={`${styles.statusPill} ${styles[notification.label]}`}
                      >
                        {notification.label}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <button
                className={styles.addButton}
                onClick={() => setIsModalOpen(true)}
              >
                + Add new announcement
              </button>
            </div>

            {/* Announcement Details */}
            {activeAnnouncement && (
              <div className={styles.notificationSettings}>
                <h2>Details</h2>
                <dl>
                  <dt>Announcement ID</dt>
                  <dd>{activeAnnouncement.announcement_id}</dd>

                  <dt>Title</dt>
                  <dd>
                    <span className={styles.missingLabelContainer}>
                      <LocalizedAnnouncementString
                        announcement={activeAnnouncement}
                        type="title"
                      />
                      <MissingFluentId
                        announcement={activeAnnouncement}
                        type="title"
                      />
                    </span>
                  </dd>

                  <dt>Description</dt>
                  <dd>
                    <span className={styles.missingLabelContainer}>
                      <LocalizedAnnouncementString
                        announcement={activeAnnouncement}
                        type="description"
                      />
                      <MissingFluentId
                        announcement={activeAnnouncement}
                        type="description"
                      />
                    </span>
                  </dd>

                  <dt>Small Image</dt>
                  <dd>
                    <ImageWithFallback
                      src={smallImagePath}
                      fallbackSrc={`/images/announcements/fallback/small.svg`}
                      alt="Small Image"
                      width={500}
                      height={300}
                      className={styles.smallImage}
                    />
                  </dd>

                  {/* Big Image */}
                  <dt>Big Image</dt>
                  <dd>
                    <ImageWithFallback
                      src={bigImagePath}
                      fallbackSrc={`/images/announcements/fallback/big.svg`}
                      alt="Big Image"
                      width={500}
                      height={300}
                      className={styles.bigImage}
                    />
                  </dd>
                  <dt>CTA Label</dt>
                  <dd>
                    <span className={styles.missingLabelContainer}>
                      <LocalizedAnnouncementString
                        announcement={activeAnnouncement}
                        type="cta-label"
                      />
                      <MissingFluentId
                        announcement={activeAnnouncement}
                        type="cta-label"
                      />
                    </span>
                  </dd>

                  <dt>CTA Link</dt>
                  <dd>{activeAnnouncement.cta_link}</dd>

                  <dt>Status</dt>
                  <dd>{activeAnnouncement.label}</dd>

                  <dt>Audience</dt>
                  <dd>{activeAnnouncement.audience}</dd>

                  <dt>Created At</dt>
                  <dd>
                    {new Date(activeAnnouncement.created_at).toLocaleString()}
                  </dd>

                  <dt>Updated At</dt>
                  <dd>
                    {new Date(activeAnnouncement.updated_at).toLocaleString()}
                  </dd>
                </dl>

                <div className={styles.buttons}>
                  <button
                    className={styles.deleteBtn}
                    onClick={() =>
                      void handleDeleteAnnouncement(
                        activeAnnouncement.announcement_id,
                      )
                    }
                  >
                    Delete
                  </button>
                  <button
                    onClick={() =>
                      void handleEditAnnouncement(
                        activeAnnouncement.announcement_id,
                      )
                    }
                  >
                    Edit
                  </button>
                </div>
              </div>
            )}
            {/* Preview Modal */}
            {activeAnnouncement && (
              <div className={styles.previewModalWrapper}>
                <div className={styles.previewModal}>
                  <ImageWithFallback
                    src={bigImagePath}
                    fallbackSrc={`/images/announcements/fallback/big.svg`}
                    alt="Big Image"
                    width={500}
                    height={300}
                    className={styles.bigImage}
                  />
                  <dl>
                    <dt>
                      <span className={styles.missingLabelContainer}>
                        <LocalizedAnnouncementString
                          announcement={activeAnnouncement}
                          type="title"
                        />
                        <MissingFluentId
                          announcement={activeAnnouncement}
                          type="title"
                        />
                      </span>
                    </dt>
                    <dd>
                      <span className={styles.missingLabelContainer}>
                        <LocalizedAnnouncementString
                          announcement={activeAnnouncement}
                          type="description"
                        />
                        <MissingFluentId
                          announcement={activeAnnouncement}
                          type="title"
                        />
                      </span>
                    </dd>
                  </dl>
                  <a href={activeAnnouncement.cta_link}>
                    <span className={styles.missingLabelContainer}>
                      <LocalizedAnnouncementString
                        announcement={activeAnnouncement}
                        type="cta-label"
                      />
                      <MissingFluentId
                        announcement={activeAnnouncement}
                        type="cta-label"
                      />
                    </span>
                  </a>
                </div>
              </div>
            )}
          </div>
          <AnnouncementsModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            announcementToEdit={activeAnnouncementToEdit}
            onAddAnnouncement={handleAddAnnouncement}
            onUpdateAnnouncement={handleUpdateAnnouncement}
            isSubmitting={isSubmitting}
            setIsSubmitting={setIsSubmitting}
          />
        </>
      )}
      {activeTab === "strings" && (
        <FluentStringsView
          announcements={announcements}
          fluentStrings={props.fluentStrings}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      )}
      {activeTab === "docs" && <AnnouncementsDocsView />}
    </div>
  );
};

type LocalizedAnnouncementStringProps = {
  announcement: AnnouncementRow;
  type: "title" | "description" | "cta-label";
};

export const MissingFluentId = (props: LocalizedAnnouncementStringProps) => {
  const key = `announcement-${props.announcement.announcement_id}-${props.type}`;
  const l10n = useL10n();
  const pathname = usePathname();

  if (key === l10n.getString(key) && pathname === "/admin/announcements") {
    return <span className={styles.missingLabel}>Missing fluent ID</span>;
  }
};
