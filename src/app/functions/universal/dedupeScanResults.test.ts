/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { dedupeScanResults } from "./dedupeScanResults";
import { createRandomMoscaryScanResult } from "../../../apiMocks/mockData";

it("sorts Moscary results before OneRep results", () => {
  const scanResultsToDedupe = [
    createRandomMoscaryScanResult({
      source: "monitor",
      data_broker: "broker-to-dedupe",
      updated_at: new Date(2022, 8, 23),
    }),
    createRandomMoscaryScanResult({
      source: "onerep",
      data_broker: "broker-to-dedupe",
      updated_at: new Date(2022, 8, 22),
    }),
  ];

  expect(dedupeScanResults(scanResultsToDedupe)).toStrictEqual([
    scanResultsToDedupe[0],
    scanResultsToDedupe[1],
  ]);
});

it("preserves OneRep results if no Moscary result for the same broker is available", () => {
  const scanResultsToDedupe = [
    createRandomMoscaryScanResult({
      source: "onerep",
      data_broker: "broker-to-preserve",
    }),
    createRandomMoscaryScanResult({
      source: "monitor",
      data_broker: "other-data-broker",
    }),
  ];

  expect(dedupeScanResults(scanResultsToDedupe)).toStrictEqual([
    scanResultsToDedupe[0],
    // Theoretically the order of scan results from different brokers
    // is not guaranteed, but in practice, it should maintain the
    // order from above (famous last words):
    scanResultsToDedupe[1],
  ]);
});

it("sorts by updated_at date", () => {
  const scanResultsToDedupe = [
    createRandomMoscaryScanResult({
      source: "monitor",
      data_broker: "broker-to-dedupe",
      updated_at: new Date(2022, 8, 23),
    }),
    createRandomMoscaryScanResult({
      source: "monitor",
      data_broker: "broker-to-dedupe",
      updated_at: new Date(2022, 8, 24),
    }),
  ];

  expect(dedupeScanResults(scanResultsToDedupe)).toStrictEqual([
    scanResultsToDedupe[1],
    scanResultsToDedupe[0],
  ]);
});

it("only preserves the latest scan result for a single result URL", () => {
  const scanResultsToDedupe = [
    createRandomMoscaryScanResult({
      source: "monitor",
      data_broker: "broker-to-dedupe",
      updated_at: new Date(2022, 8, 23),
      url: "https://example.com",
    }),
    createRandomMoscaryScanResult({
      source: "monitor",
      data_broker: "broker-to-dedupe",
      updated_at: new Date(2022, 8, 24),
      url: "https://example.com",
    }),
  ];

  expect(dedupeScanResults(scanResultsToDedupe)).toStrictEqual([
    scanResultsToDedupe[1],
  ]);
});

it("only preserves the 3 latest scan results per broker", () => {
  const scanResultsToDedupe = [
    createRandomMoscaryScanResult({
      source: "monitor",
      data_broker: "broker-to-dedupe",
      updated_at: new Date(2022, 8, 23),
    }),
    createRandomMoscaryScanResult({
      source: "monitor",
      data_broker: "broker-to-dedupe",
      updated_at: new Date(2022, 8, 24),
    }),
    createRandomMoscaryScanResult({
      source: "monitor",
      data_broker: "broker-to-dedupe",
      updated_at: new Date(2022, 8, 25),
    }),
    createRandomMoscaryScanResult({
      source: "monitor",
      data_broker: "broker-to-dedupe",
      updated_at: new Date(2022, 8, 26),
    }),
    createRandomMoscaryScanResult({
      source: "monitor",
      data_broker: "another-broker",
      updated_at: new Date(2022, 8, 27),
    }),
  ];

  expect(dedupeScanResults(scanResultsToDedupe)).toStrictEqual([
    scanResultsToDedupe[3],
    scanResultsToDedupe[2],
    scanResultsToDedupe[1],
    // Theoretically the order of scan results from different brokers
    // is not guaranteed, but in practice, it should maintain the
    // order from above (famous last words):
    scanResultsToDedupe[4],
  ]);
});

it("handles an empty list of scan results", () => {
  expect(dedupeScanResults([])).toStrictEqual([]);
});

it("handles a list with a single scan result", () => {
  const singleScanResult = createRandomMoscaryScanResult();
  expect(dedupeScanResults([singleScanResult])).toStrictEqual([
    singleScanResult,
  ]);
});

it("prioritizes Moscary over OneRep even when OneRep is newer", () => {
  const scanResultsToDedupe = [
    createRandomMoscaryScanResult({
      source: "onerep",
      data_broker: "broker-to-dedupe",
      updated_at: new Date(2022, 8, 25), // Newer
    }),
    createRandomMoscaryScanResult({
      source: "monitor",
      data_broker: "broker-to-dedupe",
      updated_at: new Date(2022, 8, 23), // Older
    }),
  ];

  expect(dedupeScanResults(scanResultsToDedupe)).toStrictEqual([
    // Moscary result should come first despite being older
    scanResultsToDedupe[1],
    scanResultsToDedupe[0],
  ]);
});

it("keeps the most relevant result when URLs match after sorting", () => {
  const scanResultsToDedupe = [
    createRandomMoscaryScanResult({
      source: "onerep",
      data_broker: "broker-to-dedupe",
      // Newer but OneRep:
      updated_at: new Date(2022, 8, 25),
      url: "https://example.com",
    }),
    createRandomMoscaryScanResult({
      source: "monitor",
      data_broker: "broker-to-dedupe",
      // Older but Moscary:
      updated_at: new Date(2022, 8, 23),
      url: "https://example.com",
    }),
  ];

  expect(dedupeScanResults(scanResultsToDedupe)).toStrictEqual([
    scanResultsToDedupe[1],
  ]);
});

it("handles exactly 3 results per broker", () => {
  const scanResultsToDedupe = [
    createRandomMoscaryScanResult({
      source: "monitor",
      data_broker: "broker-to-dedupe",
      updated_at: new Date(2022, 8, 23),
    }),
    createRandomMoscaryScanResult({
      source: "monitor",
      data_broker: "broker-to-dedupe",
      updated_at: new Date(2022, 8, 24),
    }),
    createRandomMoscaryScanResult({
      source: "monitor",
      data_broker: "broker-to-dedupe",
      updated_at: new Date(2022, 8, 25),
    }),
  ];

  const result = dedupeScanResults(scanResultsToDedupe);

  expect(result).toHaveLength(3);
});
