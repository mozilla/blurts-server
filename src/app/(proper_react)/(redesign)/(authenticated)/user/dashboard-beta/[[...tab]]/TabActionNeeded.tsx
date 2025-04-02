/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Session } from "next-auth";
import { EnvironmentConstants } from "../../../../../../functions/server/getEnvironmentConstants";
import { FeatureFlagName } from "../../../../../../../db/tables/featureFlags";
import { ExperimentData } from "../../../../../../../telemetry/generated/nimbus/experiments";
import { LatestOnerepScanData } from "../../../../../../../db/tables/onerep_scans";
import { SubscriberBreach } from "../../../../../../../utils/subscriberBreaches";
import { ExposureList } from "./ExposureList";
import { DataBrokerRemovalTime } from "../../../../../../functions/server/getDataBrokerRemovalTimeEstimates";
import { getExposureStatus } from "../../../../../../components/server/StatusPill";
import { isDataBrokerUnderMaintenance } from "../../(dashboard)/dashboard/View";

export type Props = {
  session: Session;
  envConstants: EnvironmentConstants;
  enabledFeatureFlags: FeatureFlagName[];
  experimentData: ExperimentData["Features"];
  scanData: LatestOnerepScanData;
  userBreaches: SubscriberBreach[];
  countryCode: string;
  removalTimeEstimates: DataBrokerRemovalTime[];
};

export const TabActionNeeded = (props: Props) => {
  const userBreachesActionNeeded = props.userBreaches.filter(
    breach => !breach.isResolved,
  );
  const scanResultsActionsNeeded = props.scanData.results.filter(scanResult => {
    const exposureStatus = getExposureStatus(
      scanResult,
      isDataBrokerUnderMaintenance(scanResult),
      props.enabledFeatureFlags,
    );
    return exposureStatus === "actionNeeded";
  });

  return (
    <>
      <ExposureList
        envConstants={props.envConstants}
        enabledFeatureFlags={props.enabledFeatureFlags}
        experimentData={props.experimentData}
        session={props.session}
        countryCode={props.countryCode}
        userBreaches={userBreachesActionNeeded}
        scanData={{
          scan: props.scanData.scan,
          results: scanResultsActionsNeeded,
        }}
        removalTimeEstimates={props.removalTimeEstimates}
      />
    </>
  );
  };
