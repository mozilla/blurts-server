/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { AnnouncementRow } from "knex/types/tables";
import { GroupedFluentAnnouncements } from "./getFluentStrings";
import styles from "./AnnouncementsAdmin.module.scss";

type Props = {
  announcements: AnnouncementRow[];
  fluentStrings: GroupedFluentAnnouncements;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

export const FluentStringsView = ({
  announcements,
  fluentStrings,
  searchQuery,
  setSearchQuery,
}: Props) => {
  return (
    <div className={styles.stringsView}>
      <span className={styles.stringsViewHeader}>
        <h1>Fluent Strings</h1>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search strings..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </span>
      <ul className={styles.noList}>
        {Object.entries(fluentStrings)
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
            const isUsed = announcements.some(
              (ann) => ann.announcement_id === id,
            );

            return (
              <li key={id} id={id} className={styles.stringCard}>
                <h3 className={styles.stringId}>
                  {id} {isUsed && <span className={styles.checkmark}>✅</span>}
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
  );
};
