/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import styles from "./ChurnAdmin.module.scss";
import { SubscriberChurnRow } from "knex/types/tables";
import { getAllChurns, upsertAllChurns, clearAllChurns } from "./actions";

export const ChurnAdmin = () => {
  const session = useSession();
  const [subscriberData, setSubscriberData] = useState<
    SubscriberChurnRow[] | null
  >(null);
  const [parsedData, setParsedData] = useState<SubscriberChurnRow[] | null>(
    null,
  );

  // Load data on component mount
  useEffect(() => {
    const loadSubscriberData = async () => {
      const data = await getAllChurns();
      setSubscriberData(data);
    };

    void loadSubscriberData();
  }, []);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      const rows = text.split("\n");

      // Validate minimum number of rows
      if (rows.length < 2) {
        alert("CSV file appears to be empty or missing headers");
        return;
      }

      // Expected headers and validation
      const expectedHeaders = [
        "userid",
        "customer",
        "created",
        "nickname",
        "intervl",
        "plan_id",
        "product_id",
        "current_period_end",
      ];
      const headers = rows[0]
        .toLowerCase()
        .split(",")
        .map((header) => header.trim());

      console.log("Expected headers:", expectedHeaders);
      console.log("Actual headers:", headers);
      console.log(
        "Validation result:",
        expectedHeaders.every((expectedHeader) =>
          headers.includes(expectedHeader),
        ),
      );

      if (
        !expectedHeaders.every((expectedHeader) =>
          headers.includes(expectedHeader),
        )
      ) {
        alert(
          `Invalid CSV format: Headers don't match expected format\n${expectedHeaders.toString()}\n${headers.toString()}`,
        );
        return;
      }

      try {
        const parsedData: SubscriberChurnRow[] = rows
          .slice(1)
          .filter((row) => row.trim()) // Skip empty rows
          .map((row) => {
            const values = row.split(",");

            return {
              userid: values[0],
              customer: values[1],
              created: values[2],
              nickname: values[3],
              intervl: values[4],
              plan_id: values[6],
              product_id: values[7],
              current_period_end: new Date(values[8]).toISOString(),
            };
          });

        setParsedData(parsedData);
      } catch (error) {
        alert(`Error parsing CSV: ${(error as Error).message}`);
        setParsedData(null);
      }
    };
    reader.readAsText(file);
  };

  return (
    <main className={styles.wrapper}>
      <header className={styles.header}>Churn Admin Dashboard</header>
      <p>
        Logged in as <b>{session.data?.user.email}</b>.
      </p>

      <div className={styles.uploadSection}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!parsedData) return;
            void upsertAllChurns(parsedData);
          }}
        >
          <input
            onChange={handleFileUpload}
            className={styles.fileInput}
            type="file"
          />
          <button type="submit" disabled={!parsedData}>
            Upload Data
          </button>
        </form>
      </div>

      <button
        className={styles.dangerButton}
        onClick={() => {
          if (
            window.confirm(
              "Are you sure you want to delete all churn data? This cannot be undone.",
            )
          ) {
            void clearAllChurns();
          }
        }}
      >
        Clear All Data
      </button>

      {subscriberData ? (
        <div>
          <p>
            Total rows: <b>{subscriberData.length}</b> | Yearly:{" "}
            <b>{subscriberData.filter((s) => s.intervl === "year").length}</b>
          </p>
          <div className={styles.tableWrapper}>
            <table>
              <thead>
                <tr>
                  <th>FxA UID</th>
                  <th>nickname</th>
                  <th>Interval</th>
                  <th>Plan ID</th>
                  <th>Product ID</th>
                  <th>Churn Date</th>
                </tr>
              </thead>
              <tbody>
                {subscriberData.map((row) => (
                  <tr key={row.userid}>
                    <td>{row.userid}</td>
                    <td>{row.nickname}</td>
                    <td>{row.intervl}</td>
                    <td>{row.plan_id}</td>
                    <td>{row.product_id}</td>
                    <td>
                      {new Date(row.current_period_end).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p>Loading subscriber data...</p>
      )}
    </main>
  );
};
