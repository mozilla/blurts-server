/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, { useEffect, useState } from "react";
import styles from "./NotificationModal.module.scss";
import { NotificationRow } from "knex/types/tables";

type NotificationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAddNotification: (notification: NotificationRow) => void;
  onUpdateNotification: (notification: NotificationRow) => void; // Callback for updating
  notificationToEdit: NotificationRow | null; // Receive notification to edit if available
};

interface FormData {
  notification_id: string;
  title: string;
  description: string;
  small_image_path: string;
  big_image_path: string;
  cta_label: string;
  cta_link: string;
  audience: string;
  label: string;
}

const NotificationModal = (props: NotificationModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    notification_id: "",
    title: "",
    description: "",
    small_image_path: "",
    big_image_path: "",
    cta_label: "",
    cta_link: "",
    audience: "all_users",
    label: "draft",
  });

  // Pre-fill form if editing an existing notification
  useEffect(() => {
    if (props.notificationToEdit) {
      setFormData({
        notification_id: props.notificationToEdit.notification_id,
        title: props.notificationToEdit.title,
        description: props.notificationToEdit.description,
        small_image_path: props.notificationToEdit.small_image_path,
        big_image_path: props.notificationToEdit.big_image_path,
        cta_label: props.notificationToEdit.cta_label ?? "",
        cta_link: props.notificationToEdit.cta_link ?? "",
        audience: props.notificationToEdit.audience,
        label: props.notificationToEdit.label,
      });
    }
  }, [props.notificationToEdit]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const notificationData = {
      created_at: new Date(),
      updated_at: new Date(),
      ...formData, // Ensure no 'id' field is included here
    };

    try {
      let response;

      if (props.notificationToEdit) {
        console.log(
          "this is the notif to edit ",
          props.notificationToEdit.notification_id,
        );
        // If editing an existing notification, update it
        response = await fetch(
          `/api/v1/admin/notifications/${props.notificationToEdit.notification_id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(notificationData),
          },
        );
        const updatedNotification = await response.json();
        props.onUpdateNotification(updatedNotification); // Update in parent
      } else {
        // If adding a new notification
        response = await fetch("/api/v1/admin/notifications/", {
          method: "POST", // Create method
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(notificationData),
        });

        const addedNotification = await response.json();
        props.onAddNotification(addedNotification); // Update parent
      }
      setFormData({
        notification_id: "",
        title: "",
        description: "",
        small_image_path: "",
        big_image_path: "",
        cta_label: "",
        cta_link: "",
        audience: "all_users",
        label: "draft",
      });
      props.onClose(); // Close the modal after submission
    } catch (error) {
      console.error("Error saving notification:", error);
    }
  };

  if (!props.isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2>
            {props.notificationToEdit
              ? "Edit Notification"
              : "Add New Notification"}
          </h2>
          <button className={styles.closeButton} onClick={props.onClose}>
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="notification_id">Notification ID *</label>
            <input
              type="text"
              id="notification_id"
              name="notification_id"
              value={formData.notification_id}
              onChange={handleChange}
              required
              className={styles.input}
              disabled={!!props.notificationToEdit} // Disable when editing
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="title">Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className={styles.textarea}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="small_image_path">Small Image Path *</label>
            <input
              type="text"
              id="small_image_path"
              name="small_image_path"
              value={formData.small_image_path}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="/images/small/example.png"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="big_image_path">Big Image Path *</label>
            <input
              type="text"
              id="big_image_path"
              name="big_image_path"
              value={formData.big_image_path}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="/images/large/example.png"
            />
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="cta_label">CTA Label</label>
              <input
                type="text"
                id="cta_label"
                name="cta_label"
                value={formData.cta_label}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="cta_link">CTA Link</label>
              <input
                type="text"
                id="cta_link"
                name="cta_link"
                value={formData.cta_link}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="audience">Audience *</label>
            <select
              id="audience"
              name="audience"
              value={formData.audience}
              onChange={handleChange}
              required
              className={styles.select}
            >
              <option value="all_users">All Users</option>
              <option value="premium_users">Premium Users</option>
              <option value="free_users">Free Users</option>
              <option value="new_users">New Users</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="label">Label *</label>
            <select
              id="label"
              name="label"
              value={formData.label}
              onChange={handleChange}
              required
              className={styles.select}
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>

          <div className={styles.formActions}>
            <button
              type="button"
              onClick={props.onClose}
              className={styles.cancelButton}
            >
              Cancel
            </button>
            <button type="submit" className={styles.submitButton}>
              {props.notificationToEdit
                ? "Update Notification"
                : "Add Notification"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NotificationModal;
