/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useEffect, useState } from "react";
import styles from "./NotificationAdmin.module.scss";
import Image from "next/image";
import { NotificationRow } from "knex/types/tables";
import NotificationModal from "./NotificationModal";
import { useL10n } from "../../../../../hooks/l10n";

type Props = {
  notifications: NotificationRow[];
};

export const NotificationAdmin = (props: Props) => {
  const [activeNotificationId, setActiveNotificationId] = useState<
    number | null
  >(props.notifications[0]?.id || null);
  const [activeNotificationToEdit, setActiveNotificationToEdit] =
    useState<NotificationRow | null>(null);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [notifications, setNotifications] = useState<NotificationRow[]>(
    props.notifications,
  );
  const endpointBase = `/api/v1/admin/notifications`;

  const handleAddNotification = async (newNotification: NotificationRow) => {
    try {
      const response = await fetch(endpointBase, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNotification),
      });

      if (!response.ok) {
        console.error(
          "Failed to add notification:",
          response.status,
          response.statusText,
        );
        return;
      }

      const savedNotification: NotificationRow = await response.json();

      setNotifications((prevNotifications) => [
        ...prevNotifications,
        savedNotification,
      ]);

      if (!activeNotificationId) {
        setActiveNotificationId(savedNotification.id);
      }
    } catch (error) {
      console.error("Error adding notification:", error);
    }
  };

  const handleDeleteNotification = async (notificationId: string) => {
    try {
      const response = await fetch(
        `/api/v1/admin/notifications/${notificationId}/`,
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

      setNotifications((prevNotifications) =>
        prevNotifications.filter(
          (notification) => notification.notification_id !== notificationId,
        ),
      );

      if (notificationId === activeNotification?.notification_id) {
        setActiveNotificationId(
          notifications.length > 1 ? notifications[0].id : null,
        );
      }
    } catch (error) {
      console.error("Error deleting notification:", error);
    }
  };

  const handleUpdateNotification = async (
    updatedNotification: NotificationRow,
  ) => {
    try {
      const response = await fetch(
        `/api/v1/admin/notifications/${updatedNotification.notification_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedNotification),
        },
      );

      if (!response.ok) {
        console.error(
          "Failed to update notification:",
          response.status,
          response.statusText,
        );
        return;
      }

      setNotifications((prevNotifications) =>
        prevNotifications.map((notification) =>
          notification.id === updatedNotification.id
            ? updatedNotification
            : notification,
        ),
      );
    } catch (error) {
      console.error("Error updating notification:", error);
    }
  };

  const handleEditNotification = (notificationId: string) => {
    const notificationToEdit = notifications.find(
      (n) => n.notification_id === notificationId,
    );
    if (notificationToEdit) {
      setIsModalOpen(true);
      // Pass the notification data to the modal for editing
      setActiveNotificationToEdit(notificationToEdit);
    }
  };

  // Handle selecting a notification
  const handleClick = (notificationId: number) => {
    const newActiveNotification = notifications.find(
      (n) => n.id === notificationId,
    );
    if (newActiveNotification) {
      setActiveNotificationId(notificationId);
    }
  };

  // Find the active notification from the list of notifications
  const activeNotification = notifications.find(
    (notification) => notification.id === activeNotificationId,
  );

  useEffect(() => {
    if (notifications.length > 0 && activeNotificationId === null) {
      setActiveNotificationId(notifications[0].id);
    }
  }, [notifications, activeNotificationId]);
  // States for each image
  const [smallImageIsLoading, setSmallImageIsLoading] = useState(true);
  const [bigImageIsLoading, setBigImageIsLoading] = useState(true);
  const [smallImageUnavailable, setSmallImageUnavailable] = useState(false);
  const [bigImageUnavailable, setBigImageUnavailable] = useState(false);

  const smallImagePath = `/images/notifications/${activeNotification?.notification_id.trim()}/small.jpg`;
  const bigImagePath = `/images/notifications/${activeNotification?.notification_id.trim()}/big.jpg`;

  useEffect(() => {
    setSmallImageIsLoading(true);
    setBigImageIsLoading(true);
    setSmallImageUnavailable(false);
    setBigImageUnavailable(false);
  }, [activeNotificationId]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* List of notifications */}
        <div className={styles.notificationsWrapper}>
          <h1>All Notifications</h1>
          <ul>
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className={
                  activeNotificationId === notification.id ? styles.active : ""
                }
                onClick={() => handleClick(notification.id)}
              >
                <div>
                  <p className={styles.title}>
                    <LocalizedNotificationString
                      notification={notification}
                      type="title"
                    />
                  </p>
                  <p className={styles.description}>
                    <LocalizedNotificationString
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
              Add new notification
            </button>
          </ul>
        </div>

        {/* Notification Details */}
        {activeNotification && (
          <div className={styles.notificationSettings}>
            <h2>Details</h2>
            <dl>
              <dt>Notification ID</dt>
              <dd>{activeNotification.notification_id}</dd>

              <dt>Title</dt>
              <dd>
                {" "}
                <LocalizedNotificationString
                  notification={activeNotification}
                  type="title"
                />
              </dd>

              <dt>Description</dt>
              <dd>
                <LocalizedNotificationString
                  notification={activeNotification}
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
                    key={activeNotification.id}
                    className={styles.smallImage}
                    src="/images/notifications/fallback/small.jpg"
                    onLoadingComplete={() => setSmallImageIsLoading(false)}
                  />
                ) : (
                  <Image
                    alt="Small Image"
                    width={500}
                    height={300}
                    key={activeNotification.id}
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
                    key={activeNotification.id}
                    className={styles.bigImage}
                    src="/images/notifications/fallback/big.jpg"
                    onLoadingComplete={() => setBigImageIsLoading(false)}
                  />
                ) : (
                  <Image
                    alt="Notification preview"
                    width={500}
                    height={300}
                    key={activeNotification.id}
                    src={bigImagePath}
                    className={styles.bigImage}
                    onLoadingComplete={() => setBigImageIsLoading(false)}
                    onError={() => setBigImageUnavailable(true)}
                  />
                )}
              </dd>
              <dt>CTA Label</dt>
              <dd>
                <LocalizedNotificationString
                  notification={activeNotification}
                  type="cta-label"
                />
              </dd>

              <dt>CTA Link</dt>
              <dd>{activeNotification.cta_link}</dd>

              <dt>Status</dt>
              <dd>{activeNotification.label}</dd>

              <dt>Audience</dt>
              <dd>{activeNotification.audience}</dd>

              <dt>Created At</dt>
              <dd>
                {new Date(activeNotification.created_at).toLocaleString()}
              </dd>

              <dt>Updated At</dt>
              <dd>
                {new Date(activeNotification.updated_at).toLocaleString()}
              </dd>
            </dl>

            <div className={styles.buttons}>
              <button
                onClick={() =>
                  void handleDeleteNotification(
                    activeNotification.notification_id,
                  )
                }
              >
                Delete
              </button>
              <button
                onClick={() =>
                  void handleEditNotification(
                    activeNotification.notification_id,
                  )
                }
              >
                Edit
              </button>
            </div>
          </div>
        )}
        {/* Preview Modal */}
        {activeNotification && (
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
                  key={activeNotification.id}
                  src="/images/notifications/fallback/big.jpg"
                  onLoadingComplete={() => setBigImageIsLoading(false)}
                />
              ) : (
                <Image
                  alt="Notification preview"
                  width={500}
                  height={300}
                  key={activeNotification.id}
                  src={bigImagePath}
                  onLoadingComplete={() => setBigImageIsLoading(false)}
                  onError={() => setBigImageUnavailable(true)}
                />
              )}
              <dl>
                <dt>
                  <LocalizedNotificationString
                    notification={activeNotification}
                    type="title"
                  />
                </dt>
                <dd>
                  <LocalizedNotificationString
                    notification={activeNotification}
                    type="description"
                  />
                </dd>
              </dl>
              <a href={activeNotification.cta_link}>
                <LocalizedNotificationString
                  notification={activeNotification}
                  type="cta-label"
                />
              </a>
            </div>
          </div>
        )}
      </div>

      <NotificationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        notificationToEdit={activeNotificationToEdit}
        onAddNotification={handleAddNotification}
        onUpdateNotification={handleUpdateNotification}
      />
    </div>
  );
};

type LocalizedNotificationStringProps = {
  notification: NotificationRow;
  type: "title" | "description" | "cta-label";
};

export const LocalizedNotificationString = (
  props: LocalizedNotificationStringProps,
) => {
  const l10n = useL10n();

  // Build the key based on the type (fluent IDs are named in this format)
  const key = `notif-${props.notification.notification_id}-${props.type}`;

  // Get the localized string for the key
  const localizedString = l10n.getString(key);

  const missingLabel = process.env.APP_ENV !== "production" && (
    <span className={styles.missingLabel}>Missing fluent ID</span>
  );

  // If the key is not translated, use the fallback values from the notifications table
  if (localizedString === key) {
    console.warn(`${props.notification.notification_id} is not localized`);

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

  return <>{localizedString}</>;
};
