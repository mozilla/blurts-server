/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export type DataBrokerRemovalStatus =
  | "active"
  | "on_hold"
  | "ceased_operation"
  | "scan_under_maintenance"
  | "removal_under_maintenance";
export const DataBrokerRemovalStatusMap = {
  Active: "active",
  OnHold: "on_hold",
  CeasedOperation: "ceased_operation",
  ScanUnderMaintenance: "scan_under_maintenance",
  RemovalUnderMaintenance: "removal_under_maintenance",
};
