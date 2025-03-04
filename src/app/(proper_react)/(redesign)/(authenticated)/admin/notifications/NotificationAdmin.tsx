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
      const savedNotification: NotificationRow = await response.json(); // Ensure we get the ID from the backend

      if (response.ok) {
        setNotifications((prevNotifications) => [
          ...prevNotifications,
          savedNotification,
        ]);
      }

      // If no notification is active, set the newly added one as active
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

      setNotifications((prevNotifications) =>
        prevNotifications.filter(
          (notification) => notification.notification_id !== notificationId,
        ),
      );
      // If the deleted notification was active, reset activeNotificationId
      if (notificationId === activeNotification?.notification_id) {
        setActiveNotificationId(
          notifications.length > 1 ? notifications[0].id : null,
        );
      } else {
        console.error(
          "Failed to delete notification:",
          response.status,
          response.statusText,
        );
      }
    } catch (error) {
      console.error("Error deleting notification:", error);
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

  const [imageVersion, setImageVersion] = useState(Date.now());
  useEffect(() => {
    setImageVersion(Date.now()); // Forces re-render
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
                <div
                  className={`${styles.statusPill} ${styles[notification.label]}`}
                >
                  {notification.label}
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
              <dd>{activeNotification.title}</dd>

              <dt>Description</dt>
              <dd>{activeNotification.description}</dd>

              <dt>Small Image Path</dt>
              <dd>{activeNotification.small_image_path}</dd>

              <dt>Big Image Path</dt>
              <dd>{activeNotification.big_image_path}</dd>

              <dt>CTA Label</dt>
              <dd>{activeNotification.cta_label}</dd>

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
            </div>
          </div>
        )}

        {/* Preview Modal */}
        {activeNotification && (
          <div className={styles.previewModalWrapper}>
            <div className={styles.previewModal}>
              <Image
                alt="Notification preview"
                width="500"
                height="300"
                key={activeNotification?.notification_id}
                src={`/images/notifications/${activeNotification.notification_id}/big.jpg?v=${imageVersion}`}
              />
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
        onAddNotification={handleAddNotification}
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

  // If the key is not translated, use the fallback values from the notifications table
  if (localizedString === key) {
    console.warn(`${props.notification.notification_id} is not localized`);

    if (props.type === "title") {
      return <>{props.notification.title}</>;
    }
    if (props.type === "description") {
      return <>{props.notification.description}</>;
    }
    if (props.type === "cta-label") {
      return <>{props.notification.cta_label}</>;
    }
  }

  return <>{localizedString}</>;
};
