/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useEffect, useState } from "react";
import styles from "./NotificationAdmin.module.scss";
import Image from "next/image";
import { NotificationRow } from "knex/types/tables";
import NotificationModal from "./NotificationModal";

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

  const handleAddNotification = (newNotification: NotificationRow): void => {
    setNotifications([...notifications, newNotification]);
  };

  // Handle selecting a notification
  const handleClick = (notificationId: number) => {
    setActiveNotificationId(notificationId);
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
                  <p className={styles.title}>{notification.title}</p>
                  <p className={styles.description}>
                    {notification.description}
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
              <button>Edit</button>
              <button>Unpublish</button>
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
                src={`/images/${activeNotification.notification_id}/big.jpg`}
              />
              <dl>
                <dt>{activeNotification.title}</dt>
                <dd>{activeNotification.description}</dd>
              </dl>
              <a href={activeNotification.cta_link}>
                {activeNotification.cta_label}
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
