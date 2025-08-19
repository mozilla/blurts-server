/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styles from "./AnnouncementsAdmin.module.scss";

export const AnnouncementsDocsView = () => {
  return (
    <>
      <div className={styles.documentation}>
        <section>
          <h1>Documentation</h1>
          <p>
            This document explains how to manage announcements in the system,
            including how to <strong>create</strong>,<strong>update</strong>,
            and <strong>delete</strong> announcements, as well as key
            considerations around localization, images, and system behavior.
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
                <strong>⚠️ Note: </strong>The <code>announcement_id</code> you
                decide on should be unique and will dictate your image folder
                path and fluent IDs.
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
                Add a new record to the <code>announcements</code> table by
                adding it through the announcements admin page and popup modal.
                There, fill in the fields as per outlined in its respective
                MNTOR announcement ticket. Ensure the{" "}
                <code>announcement_id</code> is the same as the one being used
                for the announcement’s fluent strings, and is{" "}
                <strong>unique</strong>.
              </p>
            </li>
            <li>
              <strong>Add announcement images</strong>
              <ol>
                <li>
                  Create a folder in <code>/public/images/announcements/</code>{" "}
                  with the <code>announcement_id</code> as its name. Very
                  important this matches exactly or the images won’t load.
                </li>
                <li>
                  {" "}
                  Place two <strong>SVGs</strong> in:
                  <code>
                    /public/images/announcements/&lt;announcement_id&gt;/
                  </code>
                  named <code>small.svg</code> and <code>big.svg</code>. Assets
                  can be found in the MNTOR ticket for the announcement in
                  question.
                </li>
                <small>
                  {" "}
                  <strong>⚠️ Note:</strong> The image needs to be an SVG. It
                  will not load otherwise.
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
                  Ensure there are no missing fluent IDs. It will warn you on
                  the announcements admin if the string doesn’t exist with{" "}
                  <span className={styles.missingLabel}>Missing fluent ID</span>
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
              <strong>You can update:</strong> Fluent strings, publish label.
            </li>
            <li>
              <strong>You cannot update:</strong> <code>announcement_id</code>{" "}
              or retroactive audience.
              <ul>
                <li>
                  Thus, if you need to change the <code>announcement_id</code>,
                  delete the old announcement and create a new one. The images
                  and fluent strings correspond to the{" "}
                  <code>announcement_id</code> so you need to update that too.
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <h2>🗑 Deleting an Announcement</h2>
          <p>
            To remove an announcement: draft it in the DB or delete the record,
            and optionally clean up Fluent strings and image assets.
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
            <li>Audience filters are only evaluated once on user init.</li>
            <li>
              Before releasing an announcement, ensure it’s in a draft state
              first, review all the fields before publishing. This can only be
              done by an admin user.
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
};
