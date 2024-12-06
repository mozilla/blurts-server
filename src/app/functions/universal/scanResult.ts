/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// TODO: Move pure functions that operate on scan results to this file

export type RemovalStatus =
  | "new"
  | "optout_in_progress"
  | "waiting_for_verification"
  | "removed";
export const RemovalStatusMap = {
  New: "new",
  OptOutInProgress: "optout_in_progress",
  WaitingForVerification: "waiting_for_verification",
  Removed: "removed",
};
