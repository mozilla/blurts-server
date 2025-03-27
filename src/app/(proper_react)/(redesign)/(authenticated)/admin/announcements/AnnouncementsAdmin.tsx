/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useEffect, useState } from "react";
import styles from "./AnnouncementsAdmin.module.scss";
import Image from "next/image";
import { AnnouncementRow } from "knex/types/tables";
import AnnouncementsModal from "./AnnouncementsModal";
import { useL10n } from "../../../../../hooks/l10n";
import { usePathname } from "next/navigation";

type Props = {
  announcements: AnnouncementRow[];
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

  const handleAddAnnouncement = async (newAnnouncement: AnnouncementRow) => {
    try {
      const response = await fetch(endpointBase, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newAnnouncement),
      });

      if (!response.ok) throw new Error("Failed to add notification");

      const savedAnnouncement: AnnouncementRow = await response.json();

      setAnnouncements((prev) => [...prev, savedAnnouncement]);
      setActiveAnnouncementId(savedAnnouncement.id);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding notification:", error);
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

      if (!response.ok) throw new Error("Failed to update notification");

      const updated = await response.json();

      setAnnouncements((prev) =>
        prev.map((a) => (a.id === updated.id ? updated : a)),
      );
      setActiveAnnouncementId(updated.id);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error updating notification:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // const handleAddAnnouncement = async (newAnnouncement: AnnouncementRow) => {
  //   try {
  //     const response = await fetch(endpointBase, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(newAnnouncement),
  //     });

  //     if (!response.ok) {
  //       console.error(
  //         "Failed to add notification:",
  //         response.status,
  //         response.statusText,
  //       );
  //       return;
  //     }

  //     const savedAnnouncement: AnnouncementRow = await response.json();

  //     setAnnouncements((prevAnnouncements) => [
  //       ...prevAnnouncements,
  //       savedAnnouncement,
  //     ]);

  //     if (!activeAnnouncementId) {
  //       setActiveAnnouncementId(savedAnnouncement.id);
  //     }
  //   } catch (error) {
  //     console.error("Error adding notification:", error);
  //   }
  // };

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
          "Failed to delete notification:",
          response.status,
          response.statusText,
        );
        return;
      }

      setAnnouncements((prevAnnouncements) =>
        prevAnnouncements.filter(
          (notification) => notification.announcement_id !== announcementId,
        ),
      );

      if (announcementId === activeAnnouncement?.announcement_id) {
        setActiveAnnouncementId(
          announcements.length > 1 ? announcements[0].id : null,
        );
      }
    } catch (error) {
      console.error("Error deleting notification:", error);
    }
  };

  // const handleUpdateAnnouncement = async (
  //   updatedAnnouncement: AnnouncementRow,
  // ) => {
  //   try {
  //     const response = await fetch(
  //       `/api/v1/admin/announcements/${updatedAnnouncement.announcement_id}`,
  //       {
  //         method: "PUT",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(updatedAnnouncement),
  //       },
  //     );

  //     if (!response.ok) {
  //       console.error(
  //         "Failed to update notification:",
  //         response.status,
  //         response.statusText,
  //       );
  //       return;
  //     }

  //     setAnnouncements((prevAnnouncements) =>
  //       prevAnnouncements.map((notification) =>
  //         notification.id === updatedAnnouncement.id
  //           ? updatedAnnouncement
  //           : notification,
  //       ),
  //     );
  //   } catch (error) {
  //     console.error("Error updating notification:", error);
  //   }
  // };

  const handleEditAnnouncement = (announcementId: string) => {
    const notificationToEdit = announcements.find(
      (n) => n.announcement_id === announcementId,
    );
    if (notificationToEdit) {
      setIsModalOpen(true);
      // Pass the notification data to the modal for editing
      setActiveAnnouncementToEdit(notificationToEdit);
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
  // States for each image
  const [smallImageIsLoading, setSmallImageIsLoading] = useState(true);
  const [bigImageIsLoading, setBigImageIsLoading] = useState(true);
  const [smallImageUnavailable, setSmallImageUnavailable] = useState(false);
  const [bigImageUnavailable, setBigImageUnavailable] = useState(false);

  const smallImagePath = `/images/announcements/${activeAnnouncement?.announcement_id.trim()}/small.svg`;
  const bigImagePath = `/images/announcements/${activeAnnouncement?.announcement_id.trim()}/big.svg`;

  useEffect(() => {
    setSmallImageIsLoading(true);
    setBigImageIsLoading(true);
    setSmallImageUnavailable(false);
    setBigImageUnavailable(false);
  }, [activeAnnouncementId]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* List of announcements */}
        <div className={styles.notificationsWrapper}>
          <h1>All Announcements</h1>
          <ul>
            {announcements.map((notification) => (
              <li
                key={notification.id}
                className={
                  activeAnnouncementId === notification.id ? styles.active : ""
                }
                onClick={() => handleClick(notification.id)}
              >
                <div>
                  <p className={styles.title}>
                    <LocalizedAnnouncementString
                      notification={notification}
                      type="title"
                    />
                  </p>
                  <p className={styles.description}>
                    <LocalizedAnnouncementString
                      notification={notification}
                      type="description"
                    />
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
            <button
              className={styles.addButton}
              onClick={() => setIsModalOpen(true)}
            >
              + Add new announcement
            </button>
          </ul>
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
                {" "}
                <LocalizedAnnouncementString
                  notification={activeAnnouncement}
                  type="title"
                />
              </dd>

              <dt>Description</dt>
              <dd>
                <LocalizedAnnouncementString
                  notification={activeAnnouncement}
                  type="description"
                />
              </dd>

              <dt>Small Image</dt>
              <dd>
                {smallImageIsLoading && !smallImageUnavailable && (
                  <div className={styles.loader}>Loading...</div>
                )}
                {smallImageUnavailable ? (
                  <Image
                    alt="Fallback image"
                    width={500}
                    height={300}
                    key={activeAnnouncement.id}
                    className={styles.smallImage}
                    src="/images/announcements/fallback/small.svg"
                    onLoadingComplete={() => setSmallImageIsLoading(false)}
                  />
                ) : (
                  <Image
                    alt="Small Image"
                    width={500}
                    height={300}
                    key={activeAnnouncement.id}
                    src={smallImagePath}
                    className={styles.smallImage}
                    onLoadingComplete={() => setSmallImageIsLoading(false)}
                    onError={() => setSmallImageUnavailable(true)}
                  />
                )}
              </dd>

              {/* Big Image */}
              <dt>Big Image</dt>
              <dd>
                {bigImageIsLoading && !bigImageUnavailable && (
                  <div className={styles.loader}>Loading...</div>
                )}
                {bigImageUnavailable ? (
                  <Image
                    alt="Fallback image"
                    width={500}
                    height={300}
                    key={activeAnnouncement.id}
                    className={styles.bigImage}
                    src="/images/announcements/fallback/big.svg"
                    onLoadingComplete={() => setBigImageIsLoading(false)}
                  />
                ) : (
                  <Image
                    alt="Announcement preview"
                    width={500}
                    height={300}
                    key={activeAnnouncement.id}
                    src={bigImagePath}
                    className={styles.bigImage}
                    onLoadingComplete={() => setBigImageIsLoading(false)}
                    onError={() => setBigImageUnavailable(true)}
                  />
                )}
              </dd>
              <dt>CTA Label</dt>
              <dd>
                <LocalizedAnnouncementString
                  notification={activeAnnouncement}
                  type="cta-label"
                />
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
              {bigImageIsLoading && (
                <div className={styles.loader}>Loading...</div>
              )}
              {bigImageUnavailable ? (
                <Image
                  alt="Fallback image"
                  width={500}
                  height={300}
                  key={activeAnnouncement.id}
                  src="/images/announcements/fallback/big.svg"
                  onLoadingComplete={() => setBigImageIsLoading(false)}
                />
              ) : (
                <Image
                  alt="Announcement preview"
                  width={500}
                  height={300}
                  key={activeAnnouncement.id}
                  src={bigImagePath}
                  onLoadingComplete={() => setBigImageIsLoading(false)}
                  onError={() => setBigImageUnavailable(true)}
                />
              )}
              <dl>
                <dt>
                  <LocalizedAnnouncementString
                    notification={activeAnnouncement}
                    type="title"
                  />
                </dt>
                <dd>
                  <LocalizedAnnouncementString
                    notification={activeAnnouncement}
                    type="description"
                  />
                </dd>
              </dl>
              <a href={activeAnnouncement.cta_link}>
                <LocalizedAnnouncementString
                  notification={activeAnnouncement}
                  type="cta-label"
                />
              </a>
            </div>
          </div>
        )}
      </div>

      <AnnouncementsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        notificationToEdit={activeAnnouncementToEdit}
        onAddAnnouncement={handleAddAnnouncement}
        onUpdateAnnouncement={handleUpdateAnnouncement}
        isSubmitting={isSubmitting}
        setIsSubmitting={setIsSubmitting}
      />
    </div>
  );
};

type LocalizedAnnouncementStringProps = {
  notification: AnnouncementRow;
  type: "title" | "description" | "cta-label";
  truncatedDescription?: boolean;
};

export const LocalizedAnnouncementString = (
  props: LocalizedAnnouncementStringProps,
) => {
  function truncateDescription(str: string): string {
    const MAX_CHARACTERS = 80;
    if (str.length <= MAX_CHARACTERS) return str;
    return str.slice(0, MAX_CHARACTERS) + "…";
  }

  const l10n = useL10n();

  // Build the key based on the type (fluent IDs are named in this format)
  const key = `announcement-${props.notification.announcement_id}-${props.type}`;

  // Get the localized string for the key
  const localizedString = l10n.getString(key);
  const pathname = usePathname();

  const missingLabel = pathname === "/admin/announcements" && (
    <span className={styles.missingLabel}>Missing fluent ID</span>
  );

  const shouldTruncate =
    props.type === "description" && props.truncatedDescription;

  // If the key is not translated, use the fallback values from the announcements table
  if (localizedString === key) {
    console.warn(`${props.notification.announcement_id} is not localized`);

    if (props.type === "title") {
      return (
        <div className={styles.missingLabelContainer}>
          {props.notification.title}
          {missingLabel}
        </div>
      );
    }
    if (props.type === "description") {
      return (
        <div className={styles.missingLabelContainer}>
          {props.notification.description}
          {missingLabel}
        </div>
      );
    }
    if (props.type === "cta-label") {
      return (
        <div className={styles.missingLabelContainer}>
          {props.notification.cta_label}
          {missingLabel}
        </div>
      );
    }
  }

  return (
    <>
      {shouldTruncate ? truncateDescription(localizedString) : localizedString}
    </>
  );
};
