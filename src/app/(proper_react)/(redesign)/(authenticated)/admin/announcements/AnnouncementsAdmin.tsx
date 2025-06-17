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
import Image from "next/image";
import { AnnouncementRow } from "knex/types/tables";
import AnnouncementsModal from "./AnnouncementsModal";
import { usePathname } from "next/navigation";
import { LocalizedAnnouncementString } from "../../../../../components/client/toolbar/AnnouncementDialog";
import { useL10n } from "../../../../../hooks/l10n";
import { GroupedFluentAnnouncements } from "./getFluentStrings";

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

  const sortedAnnouncements = [...announcements].sort((a, b) => {
    return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
  });
  const [activeTab, setActiveTab] = useState<
    "announcements" | "strings" | "docs"
  >("announcements");
  const [searchQuery, setSearchQuery] = useState("");
  const View = () => {
    switch (activeTab) {
      case "announcements": {
        return (
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
                          onLoadingComplete={() =>
                            setSmallImageIsLoading(false)
                          }
                        />
                      ) : (
                        <Image
                          alt="Small Image"
                          width={500}
                          height={300}
                          key={activeAnnouncement.id}
                          src={smallImagePath}
                          className={styles.smallImage}
                          onLoadingComplete={() =>
                            setSmallImageIsLoading(false)
                          }
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
        );
      }
      case "strings": {
        return (
          <>
            <div className={styles.stringsView}>
              <span className={styles.stringsViewHeader}>
                <h1>Fluent Strings</h1>
                <input
                  type="text"
                  className={styles.searchInput}
                  placeholder="Search strings..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    e.stopPropagation();
                  }}
                />
              </span>
              <ul>
                {Object.entries(props.fluentStrings)
                  .filter(([id, entry]) => {
                    const q = searchQuery.toLowerCase();
                    return (
                      id.toLowerCase().includes(q) ||
                      entry.title?.toLowerCase().includes(q) ||
                      entry.description?.toLowerCase().includes(q) ||
                      entry.ctaLabel?.toLowerCase().includes(q)
                    );
                  })
                  .map(([id, entry]) => {
                    const isUsed = props.announcements.some(
                      (ann) => ann.announcement_id === id,
                    );

                    return (
                      <li key={id} id={id} className={`${styles.stringCard}`}>
                        <h3 className={styles.stringId}>
                          {id}{" "}
                          {isUsed && (
                            <span className={styles.checkmark}>✅</span>
                          )}
                        </h3>
                        {entry.title && (
                          <p>
                            <strong>Title:</strong> {entry.title}
                          </p>
                        )}
                        {entry.description && (
                          <p>
                            <strong>Description:</strong> {entry.description}
                          </p>
                        )}
                        {entry.ctaLabel && (
                          <p>
                            <strong>CTA Label:</strong> {entry.ctaLabel}
                          </p>
                        )}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </>
        );
      }
      case "docs": {
        return (
          <>
            <div className={styles.documentation}>
              <section>
                <h1>Documentation</h1>
                <p>
                  This document explains how to manage announcements in the
                  system, including how to <strong>create</strong>,
                  <strong>update</strong>, and <strong>delete</strong>{" "}
                  announcements, as well as key considerations around
                  localization, images, and system behavior.
                </p>
              </section>

              <section>
                <h2>✏️ Adding a New Announcement</h2>
                <ol>
                  <li>
                    <strong>Set up localized strings</strong>
                    <p>
                      If they haven’t already been added to the{" "}
                      <code>announcements.ftl</code> file, include the Fluent
                      localization keys using this required format:
                    </p>

                    <small>
                      {" "}
                      <strong>⚠️ Note: </strong>The <code>announcement_id</code>{" "}
                      you decide on should be unique and will dictate your image
                      folder path and fluent IDs.
                    </small>

                    <ul>
                      <li>
                        <code>
                          announcement-<strong>{`<announcement_id>`}</strong>
                          -title
                        </code>
                      </li>
                      <li>
                        <code>
                          announcement-<strong>{`<announcement_id>`}</strong>
                          -description
                        </code>
                      </li>
                      <li>
                        <code>
                          announcement-<strong>{`<announcement_id>`}</strong>
                          -cta-label
                        </code>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Create the announcement</strong>
                    <p>
                      Add a new record to the <code>announcements</code> table
                      by adding it through the announcements admin page and
                      popup modal. There, fill in the fields as per outlined in
                      its respective MNTOR announcement ticket. Ensure the{" "}
                      <code>announcement_id</code> is the same as the one being
                      used for the announcement’s fluent strings, and is{" "}
                      <strong>unique</strong>.
                    </p>
                  </li>
                  <li>
                    <strong>Add announcement images</strong>
                    <ol>
                      <li>
                        Create a folder in{" "}
                        <code>/public/images/announcements/</code> with the{" "}
                        <code>announcement_id</code> as its name. Very important
                        this matches exactly or the images won’t load.
                      </li>
                      <li>
                        {" "}
                        Place two <strong>SVGs</strong> in:
                        <code>
                          /public/images/announcements/&lt;announcement_id&gt;/
                        </code>
                        named <code>small.svg</code> and <code>big.svg</code>.
                        Assets can be found in the MNTOR ticket for the
                        announcement in question.
                      </li>
                      <small>
                        {" "}
                        <strong>⚠️ Note:</strong> The image needs to be an SVG.
                        It will not load otherwise.
                      </small>
                    </ol>
                  </li>
                  <li>
                    <strong>Verify draft</strong>
                    <ol>
                      <li>
                        Verify that the preview on the right hand side looks and
                        functions like the expected announcement.
                      </li>
                      <li>Ensure fields are accurately filed out.</li>
                      <li>
                        Ensure there are no missing fluent IDs. It will warn you
                        on the announcements admin if the string doesn’t exist
                        with{" "}
                        <span className={styles.missingLabel}>
                          Missing fluent ID
                        </span>
                        .
                      </li>
                      <li>
                        If any of the above criteria is not met, leave the
                        announcement in <strong>draft</strong> mode.
                      </li>
                    </ol>
                  </li>
                </ol>
              </section>

              <section>
                <h2>🔄 Updating an Announcement</h2>
                <ul>
                  <li>
                    <strong>You can update:</strong> Fluent strings, publish
                    label.
                  </li>
                  <li>
                    <strong>You cannot update:</strong>{" "}
                    <code>announcement_id</code> or retroactive audience.
                    <ul>
                      <li>
                        Thus, if you need to change the{" "}
                        <code>announcement_id</code>, delete the old
                        announcement and create a new one. The images and fluent
                        strings correspond to the <code>announcement_id</code>{" "}
                        so you need to update that too.
                      </li>
                    </ul>
                  </li>
                </ul>
              </section>

              <section>
                <h2>🗑 Deleting an Announcement</h2>
                <p>
                  To remove an announcement: draft it in the DB or delete the
                  record, and optionally clean up Fluent strings and image
                  assets.
                </p>
              </section>

              <section>
                <h2>💥 Important Reminders</h2>
                <ul>
                  <li>
                    Each <code>announcement_id</code> must be globally unique.
                  </li>
                  <li>Ensure Fluent strings exist before deploying.</li>
                  <li>
                    Image paths must match the <code>announcement_id</code>.
                  </li>
                  <li>
                    Audience filters are only evaluated once on user init.
                  </li>
                  <li>
                    Before releasing an announcement, ensure it’s in a draft
                    state first, review all the fields before publishing. This
                    can only be done by an admin user.
                  </li>
                </ul>
              </section>

              <section>
                <h3>Example Workflow</h3>
                <pre className={styles.codeBlock}>
                  {`1. DB entry:
announcement_id: upgrade-to-premium
title: Upgrade to Monitor Premium
description: Save 50% this weekend.
label: published
audience: all_users

2. Fluent keys:
announcement-upgrade-to-premium-title = Upgrade to Monitor Premium
announcement-upgrade-to-premium-description = Save 50% this weekend.
announcement-upgrade-to-premium-cta-label = Upgrade Now

3. Images:
public/images/announcements/upgrade-to-premium/small.svg
public/images/announcements/upgrade-to-premium/big.svg`}
                </pre>
              </section>
            </div>
          </>
        );
      }
    }
  };
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
      <View />
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
