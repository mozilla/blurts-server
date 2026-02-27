/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect, vi } from "vitest";
import { createRandomBreach } from "../../../../../../../apiMocks/mockData";
import { filterExposures } from "./filterExposures";
import { CONST_DAY_MILLISECONDS } from "../../../../../../../constants";
vi.mock("../../../../../../hooks/useTelemetry");

const getDateDaysAgo = (daysAgo: number) =>
  new Date(Date.now() - daysAgo * CONST_DAY_MILLISECONDS);
const breachThisWeek = createRandomBreach({
  fakerSeed: 1234,
  addedDate: getDateDaysAgo(2),
});
const breachThisMonth = createRandomBreach({
  fakerSeed: 1234,
  addedDate: getDateDaysAgo(10),
});
const breachThisYear = createRandomBreach({
  fakerSeed: 1234,
  addedDate: getDateDaysAgo(100),
});
const breachOld = createRandomBreach({
  fakerSeed: 1234,
  addedDate: getDateDaysAgo(1000),
});

it("doesn't filter out anything by default", () => {
  const exposures = [
    breachThisWeek,
    breachThisMonth,
    breachThisYear,
    breachOld,
  ];

  expect(
    filterExposures(exposures, {
      dateFound: "show-all-date-found",
    }),
  ).toStrictEqual(exposures);
});

it("can filter out exposures older than a year", () => {
  const exposures = [
    breachThisWeek,
    breachThisMonth,
    breachThisYear,
    breachOld,
  ];

  expect(
    filterExposures(exposures, {
      dateFound: "last-year",
    }),
  ).toStrictEqual([breachThisWeek, breachThisMonth, breachThisYear]);
});

it("can filter out exposures older than a month", () => {
  const exposures = [
    breachThisWeek,
    breachThisMonth,
    breachThisYear,
    breachOld,
  ];

  expect(
    filterExposures(exposures, {
      dateFound: "thirty-days",
    }),
  ).toStrictEqual([breachThisWeek, breachThisMonth]);
});

it("can filter out exposures older than a week", () => {
  const exposures = [
    breachThisWeek,
    breachThisMonth,
    breachThisYear,
    breachOld,
  ];

  expect(
    filterExposures(exposures, {
      dateFound: "seven-days",
    }),
  ).toStrictEqual([breachThisWeek]);
});

it("filters out anything that doesn't match *all* filters", () => {
  const exposures = [
    breachThisWeek,
    breachThisMonth,
    breachThisYear,
    breachOld,
  ];

  expect(
    filterExposures(exposures, {
      dateFound: "last-year",
    }),
  ).toStrictEqual([breachThisWeek, breachThisMonth, breachThisYear]);
});
