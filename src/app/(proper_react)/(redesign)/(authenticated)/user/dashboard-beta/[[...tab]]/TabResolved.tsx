/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Session } from "next-auth";
import { EnvironmentConstants } from "../../../../../../functions/server/getEnvironmentConstants";
import { FeatureFlagName } from "../../../../../../../db/tables/featureFlags";
import { ExperimentData } from "../../../../../../../telemetry/generated/nimbus/experiments";
import { LatestOnerepScanData } from "../../../../../../../db/tables/onerep_scans";
import { SubscriberBreach } from "../../../../../../../utils/subscriberBreaches";

export type Props = {
  session: Session;
  envConstants: EnvironmentConstants;
  enabledFeatureFlags: FeatureFlagName[];
  experimentData: ExperimentData["Features"];
  scanResults: LatestOnerepScanData;
  userBreaches: SubscriberBreach[];
};

export const TabResolved = (props: Props) => {
  return <>Resolved</>;
};
