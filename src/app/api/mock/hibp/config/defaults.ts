/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import mockBreaches from "../mockData/mockBreaches.json";
import { hashToEmailKeyMap } from "../../../utils/mockUtils";

export interface BreachMap {
  [key: string]: string[];
}

export const getBreachesForHash = (hash: string) => {
  const key = hashToEmailKeyMap[hash] || "default";
  return (mockBreaches as BreachMap)[key] || [];
};
