/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import {
  createRandomBreach,
  createRandomOnerepScanResult,
} from "../../../../../../../apiMocks/mockData";
import { filterExposures } from "./filterExposures";
import { CONST_DAY_MILLISECONDS } from "../../../../../../../constants";
jest.mock("../../../../../../hooks/useTelemetry");

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

const scanResultThisWeek = createRandomOnerepScanResult({
  fakerSeed: 1234,
  createdDate: getDateDaysAgo(2),
});
const scanResultThisMonth = createRandomOnerepScanResult({
  fakerSeed: 1234,
  createdDate: getDateDaysAgo(10),
});
const scanResultThisYear = createRandomOnerepScanResult({
  fakerSeed: 1234,
  createdDate: getDateDaysAgo(100),
});
const scanResultOld = createRandomOnerepScanResult({
  fakerSeed: 1234,
  createdDate: getDateDaysAgo(1000),
});

it("doesn't filter out anything by default", () => {
  const exposures = [
    breachThisWeek,
    scanResultThisWeek,
    breachThisMonth,
    scanResultThisMonth,
    breachThisYear,
    scanResultThisYear,
    breachOld,
    scanResultOld,
  ];

  expect(
    filterExposures(exposures, {
      dateFound: "show-all-date-found",
      exposureType: "show-all-exposure-type",
    }),
  ).toStrictEqual(exposures);
});

it("can filter out breaches", () => {
  const exposures = [
    breachThisWeek,
    scanResultThisWeek,
    breachThisMonth,
    scanResultThisMonth,
    breachThisYear,
    scanResultThisYear,
    breachOld,
    scanResultOld,
  ];

  expect(
    filterExposures(exposures, {
      dateFound: "show-all-date-found",
      exposureType: "data-broker",
    }),
  ).toStrictEqual([
    scanResultThisWeek,
    scanResultThisMonth,
    scanResultThisYear,
    scanResultOld,
  ]);
});

it("can filter out data brokers", () => {
  const exposures = [
    breachThisWeek,
    scanResultThisWeek,
    breachThisMonth,
    scanResultThisMonth,
    breachThisYear,
    scanResultThisYear,
    breachOld,
    scanResultOld,
  ];

  expect(
    filterExposures(exposures, {
      dateFound: "show-all-date-found",
      exposureType: "data-breach",
    }),
  ).toStrictEqual([breachThisWeek, breachThisMonth, breachThisYear, breachOld]);
});

it("can filter out exposures older than a year", () => {
  const exposures = [
    breachThisWeek,
    scanResultThisWeek,
    breachThisMonth,
    scanResultThisMonth,
    breachThisYear,
    scanResultThisYear,
    breachOld,
    scanResultOld,
  ];

  expect(
    filterExposures(exposures, {
      dateFound: "last-year",
      exposureType: "show-all-exposure-type",
    }),
  ).toStrictEqual([
    breachThisWeek,
    scanResultThisWeek,
    breachThisMonth,
    scanResultThisMonth,
    breachThisYear,
    scanResultThisYear,
  ]);
});

it("can filter out exposures older than a month", () => {
  const exposures = [
    breachThisWeek,
    scanResultThisWeek,
    breachThisMonth,
    scanResultThisMonth,
    breachThisYear,
    scanResultThisYear,
    breachOld,
    scanResultOld,
  ];

  expect(
    filterExposures(exposures, {
      dateFound: "thirty-days",
      exposureType: "show-all-exposure-type",
    }),
  ).toStrictEqual([
    breachThisWeek,
    scanResultThisWeek,
    breachThisMonth,
    scanResultThisMonth,
  ]);
});

it("can filter out exposures older than a week", () => {
  const exposures = [
    breachThisWeek,
    scanResultThisWeek,
    breachThisMonth,
    scanResultThisMonth,
    breachThisYear,
    scanResultThisYear,
    breachOld,
    scanResultOld,
  ];

  expect(
    filterExposures(exposures, {
      dateFound: "seven-days",
      exposureType: "show-all-exposure-type",
    }),
  ).toStrictEqual([breachThisWeek, scanResultThisWeek]);
});

it("filters out anything that doesn't match *all* filters", () => {
  const exposures = [
    breachThisWeek,
    scanResultThisWeek,
    breachThisMonth,
    scanResultThisMonth,
    breachThisYear,
    scanResultThisYear,
    breachOld,
    scanResultOld,
  ];

  expect(
    filterExposures(exposures, {
      dateFound: "last-year",
      exposureType: "data-breach",
    }),
  ).toStrictEqual([breachThisWeek, breachThisMonth, breachThisYear]);
});
