/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useSession } from "next-auth/react";
import styles from "./Removals.module.scss";
import { OnerepScanResultRow } from "knex/types/tables";
import Link from "next/link";

export const Removals = (props: {
  scanResults: OnerepScanResultRow[];
  brokers: Map<
    number,
    | "active"
    | "scan_under_maintenance"
    | "removal_under_maintenance"
    | "on_hold"
    | "ceased_operation"
  >;
  page: number;
  totalPages: number;
}) => {
  const session = useSession();

  return (
    <main className={styles.wrapper}>
      <header className={styles.header}>
        Logged in as <b>{session.data?.user.email}</b>.
      </header>
      <nav>
        <p>
          <Link href="/api/v1/admin/removals">Export as CSV</Link>
        </p>
        <br />
      </nav>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.col} scope="col">
              Scan Result ID
            </th>
            <th className={styles.col} scope="col">
              Removal Status
            </th>
            <th className={styles.col} scope="col">
              Created
            </th>
            <th className={styles.col} scope="col">
              Last Updated
            </th>
            <th className={styles.col} scope="col">
              Broker Name
            </th>
            <th className={styles.col} scope="col">
              Broker Status
            </th>
          </tr>
        </thead>
        <tbody>
          {props.scanResults.map((scanResult) => (
            <tr key={scanResult.id}>
              <td className={styles.col}>{scanResult.onerep_scan_result_id}</td>
              <td className={styles.col}>{scanResult.status}</td>
              <td className={styles.col}>
                {scanResult.created_at.toDateString()}
              </td>
              <td className={styles.col}>
                {scanResult.updated_at.toDateString()}
              </td>
              <td className={styles.col}>{scanResult.data_broker}</td>
              <td className={styles.col}>
                {props.brokers.get(scanResult.data_broker_id)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination page={props.page} totalPages={props.totalPages} />
    </main>
  );
};

export const Pagination = (props: { page: number; totalPages: number }) => {
  let nextPage = props.page;
  nextPage++;

  let prevPage = props.page;
  prevPage--;

  return (
    <p>
      {prevPage <= 0 ? " << " : <a href={"?page=" + prevPage}> &lt;&lt; </a>}
      Page {props.page} of {props.totalPages}
      {nextPage >= props.totalPages ? (
        " >> "
      ) : (
        <a href={"?page=" + nextPage}> &gt;&gt; </a>
      )}
    </p>
  );
};
