/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, { useState } from "react";
import styles from "./NotificationModal.module.scss";
import { NotificationRow } from "knex/types/tables";

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddNotification: (notification: NotificationRow) => void;
}

interface FormData {
  title: string;
  description: string;
  small_image_path: string;
  big_image_path: string;
  cta_label: string;
  cta_link: string;
  audience: string;
  label: string;
}

const NotificationModal: React.FC<NotificationModalProps> = ({
  isOpen,
  onClose,
  onAddNotification,
}) => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    small_image_path: "",
    big_image_path: "",
    cta_label: "",
    cta_link: "",
    audience: "all_users",
    label: "draft",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create new notification with generated id and timestamps
    const newNotification: NotificationRow = {
      ...formData,
      id: Date.now(),
      notification_id: `notif_${Date.now()}`,
      created_at: new Date(),
      updated_at: new Date(),
    };

    onAddNotification(newNotification);
    setFormData({
      title: "",
      description: "",
      small_image_path: "",
      big_image_path: "",
      cta_label: "",
      cta_link: "",
      audience: "all_users",
      label: "draft",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2>Add New Notification</h2>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
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
              <option value="info">Info</option>
              <option value="warning">Warning</option>
              <option value="error">Error</option>
              <option value="success">Success</option>
              <option value="update">Update</option>
            </select>
          </div>

          <div className={styles.formActions}>
            <button
              type="button"
              onClick={onClose}
              className={styles.cancelButton}
            >
              Cancel
            </button>
            <button type="submit" className={styles.submitButton}>
              Add Notification
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NotificationModal;
