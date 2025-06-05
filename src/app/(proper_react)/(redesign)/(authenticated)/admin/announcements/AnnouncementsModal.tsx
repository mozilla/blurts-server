/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* c8 ignore start */
/*
  This file is excluded from unit test coverage because it's an internal admin-only
  tool and not part of the user-facing experience. It contains minimal logic,
  is not critical to core app functionality, and is tested manually as needed.
*/

import React, { useEffect, useState } from "react";
import styles from "./AnnouncementsModal.module.scss";
import { AnnouncementRow, AudienceRow } from "knex/types/tables";
import { Button } from "../../../../../components/client/Button";

type AnnouncementsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAddAnnouncement: (announcement: AnnouncementRow) => void;
  onUpdateAnnouncement: (announcement: AnnouncementRow) => void;
  announcementToEdit: AnnouncementRow | null;
  isSubmitting: boolean;
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
};

interface FormData {
  announcement_id: string;
  title: string;
  description: string;
  small_image_path: string;
  big_image_path: string;
  cta_label: string;
  cta_link: string;
  audience: AudienceRow;
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

  // Pre-fill form if editing an existing announcement
  useEffect(() => {
    if (props.announcementToEdit) {
      setFormData({
        announcement_id: props.announcementToEdit.announcement_id,
        title: props.announcementToEdit.title,
        description: props.announcementToEdit.description,
        small_image_path: props.announcementToEdit.small_image_path,
        big_image_path: props.announcementToEdit.big_image_path,
        cta_label: props.announcementToEdit.cta_label ?? "",
        cta_link: props.announcementToEdit.cta_link ?? "",
        audience: props.announcementToEdit.audience,
        label: props.announcementToEdit.label,
      });
    }
  }, [props.announcementToEdit]);

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
    props.setIsSubmitting(true);

    const announcementData = {
      created_at: new Date(),
      updated_at: new Date(),
      ...formData,
    };

    try {
      let response;

      if (props.announcementToEdit) {
        response = await fetch(
          `/api/v1/admin/announcements/${props.announcementToEdit.announcement_id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(announcementData),
          },
        );
        const updatedAnnouncement = await response.json();
        props.onUpdateAnnouncement(updatedAnnouncement);
      } else {
        response = await fetch("/api/v1/admin/announcements/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(announcementData),
        });
        const addedAnnouncement = await response.json();
        props.onAddAnnouncement(addedAnnouncement);
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

      props.onClose();
    } catch (error) {
      console.error("Error saving announcement:", error);
    } finally {
      props.setIsSubmitting(false);
    }
  };

  if (!props.isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2>
            {props.announcementToEdit
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
              disabled={!!props.announcementToEdit} // Disable when editing
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
              <option value="free_users">Free Users: US</option>
              <option value="has_run_scan">Free Users: Has Run Scan US</option>
              <option value="has_not_run_scan">
                Free: Has Not Run Scan US
              </option>
              <option value="monthly_user">
                Premium Users: Monthly Subscriber US Only
              </option>
              <option value="yearly_user">
                Premium Users: Yearly Subscriber US Only
              </option>
              <option value="bundle_user">
                Premium Users: Bundle Subscriber US Only
              </option>
              <option value="premium_non_bundle">
                Premium Users: Monthly or Yearly US Only, Non-Bundle
              </option>
              <option value="premium_users">Premium Users: All Users</option>
              <option value="us_only">All US Users</option>
              <option value="non_us">Non-US Users</option>
              <option value="all_users">All Users</option>
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
            <Button
              isLoading={props.isSubmitting}
              variant="primary"
              type="submit"
              className={styles.submitButton}
            >
              {props.announcementToEdit
                ? "Update Announcement"
                : "Add Announcement"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AnnouncementsModal;
/* c8 ignore end */
