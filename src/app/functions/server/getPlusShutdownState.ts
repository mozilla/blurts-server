/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { SubscriberRow } from "knex/types/tables";
import { hasPremium } from "../universal/user";

export type ShutdownState = {
  currentMoment: "ye-olden-days" | "runup" | "shutdown";
  hasPremium: boolean;
  ranScan: boolean;
};

const [shutdownYearString, shutdownMonthString, shutdownDayString] =
  process.env.BROKER_SCAN_SHUTDOWN_DATE!.split("-");
const shutdownTimestamp = Date.UTC(
  Number.parseInt(shutdownYearString, 10),
  Number.parseInt(shutdownMonthString, 10) - 1,
  Number.parseInt(shutdownDayString, 10),
);

/** Number of days before the shutdown in which the banner should be visible: */
const parsedDaysRunUp = Number.parseInt(
  process.env.BROKER_SCAN_SHUTDOWN_RUNUP_DAYS ?? "",
  10,
);
const daysRunUp = Number.isNaN(parsedDaysRunUp) ? 29 : parsedDaysRunUp;

const today = new Date(Date.now());
const todayTimestamp = Date.UTC(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
);
const daysOut = (shutdownTimestamp - todayTimestamp) / 1000 / 60 / 60 / 24;

const currentMoment =
  daysOut >= daysRunUp ? "ye-olden-days" : daysOut <= 0 ? "shutdown" : "runup";

export function getPlusShutdownState(user: SubscriberRow): ShutdownState {
  return {
    currentMoment: currentMoment,
    hasPremium: hasPremium(user),
    ranScan: typeof user.onerep_profile_id !== "undefined",
  };
}
