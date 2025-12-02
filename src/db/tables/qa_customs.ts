/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import createDbConnection from "../connect";
import { HibpLikeDbBreach } from "../../utils/hibp";

const knex = createDbConnection();

interface QaBreachData {
  emailHashPrefix: string;
  Id: number;
  Name: string;
  Title: string;
  Domain: string;
  BreachDate: Date | string;
  AddedDate: Date | string;
  ModifiedDate: Date | string;
  PwnCount: number;
  Description: string;
  LogoPath: string;
  DataClasses: Array<string>;
  IsVerified: boolean;
  IsFabricated: boolean;
  IsSensitive: boolean;
  IsRetired: boolean;
  IsSpamList: boolean;
  IsMalware: boolean;
  FaviconUrl?: string | null;
}

interface QaToggleRow {
  email_hash: string;
  show_real_breaches: boolean;
  show_custom_breaches: boolean;
}

enum AllowedToggleColumns {
  ShowRealBreaches = "show_real_breaches",
  ShowCustomBreaches = "show_custom_breaches",
}

async function getAllQaCustomBreaches(emailHashPrefix: string) {
  const res = (
    await knex("qa_custom_breaches")
      .select("*")
      .where("emailHashPrefix", emailHashPrefix.toLowerCase())
  ).map((b) => {
    b.Id = Number(b.Id);
    b.Id = Number(b.Id);
    return formatQaBreach(b) as QaBreachData;
  });
  return res;
}

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
function formatQaBreach(breach: QaBreachData) {
  const { emailHashPrefix: _, ...rest } = breach;
  return rest as HibpLikeDbBreach;
}
/* c8 ignore stop */

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function addQaCustomBreach(breach: QaBreachData): Promise<void> {
  await knex("qa_custom_breaches").insert({
    ...breach,
  });
}
/* c8 ignore stop */

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function deleteQaCustomBreach(
  emailHashPrefix: string,
  Id: number,
): Promise<void> {
  await knex("qa_custom_breaches").where({ emailHashPrefix, Id }).del();
}
/* c8 ignore stop */

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function getQaToggleRow(emailHash: string | null) {
  if (emailHash === null || process.env.APP_ENV === "production") {
    return null;
  } else if (typeof emailHash === "string") {
    return (await knex("qa_custom_toggles")
      .select("*")
      .where("email_hash", emailHash)
      .first()) as QaToggleRow;
  }
  return null;
}
/* c8 ignore stop */

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function setQaToggle(
  columnName: string,
  isShown: boolean,
  emailHash: string,
): Promise<void> {
  // List of allowed columns to toggle
  const allowedColumns = ["show_real_breaches", "show_custom_breaches"];

  if (!allowedColumns.includes(columnName)) {
    throw new Error(`Invalid column name: ${columnName}`);
  }

  // Get the current value of the specified column
  const record = await knex("qa_custom_toggles")
    .select(columnName)
    .where("email_hash", emailHash)
    .first();

  if (!record) {
    throw new Error(`No record found with given email_hash`);
  }

  await knex("qa_custom_toggles")
    .update({
      [columnName]: isShown,
    })
    .where("email_hash", emailHash);
}
/* c8 ignore stop */

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function createQaTogglesRow(emailHash: string): Promise<QaToggleRow> {
  const row = {
    email_hash: emailHash,
    show_real_breaches: true,
    show_custom_breaches: true,
  };

  // Try to insert the row
  const [insertedRow] = await knex("qa_custom_toggles")
    .insert(row)
    .onConflict("email_hash")
    .ignore()
    .returning("*");

  if (insertedRow) {
    return insertedRow as QaToggleRow;
  } else {
    // If insert was ignored due to conflict, fetch the existing row based on email_hash
    const existingRow = await knex("qa_custom_toggles")
      .where({ email_hash: emailHash })
      .first();

    return existingRow as QaToggleRow;
  }
}
/* c8 ignore stop */

export {
  getAllQaCustomBreaches,
  addQaCustomBreach,
  deleteQaCustomBreach,
  getQaToggleRow,
  setQaToggle,
  createQaTogglesRow,
  formatQaBreach,
  AllowedToggleColumns,
};
export type { QaBreachData, QaToggleRow };
