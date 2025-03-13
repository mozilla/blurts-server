/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, { useEffect, useState } from "react";
import styles from "./AnnouncementsModal.module.scss";
import { AnnouncementRow } from "knex/types/tables";

type AnnouncementsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAddAnnouncement: (notification: AnnouncementRow) => void;
  onUpdateAnnouncement: (notification: AnnouncementRow) => void; // Callback for updating
  notificationToEdit: AnnouncementRow | null; // Receive notification to edit if available
};

interface FormData {
  announcement_id: string;
  title: string;
  description: string;
  small_image_path: string;
  big_image_path: string;
  cta_label: string;
  cta_link: string;
  audience: string;
  label: string;
}

const AnnouncementsModal = (props: AnnouncementsModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    announcement_id: "",
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
        announcement_id: props.notificationToEdit.announcement_id,
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
        // If editing an existing notification, update it
        response = await fetch(
          `/api/v1/admin/announcements/${props.notificationToEdit.announcement_id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(notificationData),
          },
        );
        const updatedAnnouncement = await response.json();
        props.onUpdateAnnouncement(updatedAnnouncement); // Update in parent
      } else {
        // If adding a new notification

        response = await fetch("/api/v1/admin/announcements/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(notificationData),
        });

        const addedAnnouncement = await response.json();
        props.onAddAnnouncement(addedAnnouncement); // Update parent
      }
      setFormData({
        announcement_id: "",
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
              ? "Edit Announcement"
              : "Add New Announcement"}
          </h2>
          <button className={styles.closeButton} onClick={props.onClose}>
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="announcement_id">Announcement ID *</label>
            <input
              type="text"
              id="announcement_id"
              name="announcement_id"
              value={formData.announcement_id}
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
                ? "Update Announcement"
                : "Add Announcement"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AnnouncementsModal;
