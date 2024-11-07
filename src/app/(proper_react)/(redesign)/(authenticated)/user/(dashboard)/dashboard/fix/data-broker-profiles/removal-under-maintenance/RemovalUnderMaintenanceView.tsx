/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { OnerepScanResultRow } from "knex/types/tables";
import {
  StepDeterminationData,
  getNextGuidedStep,
} from "../../../../../../../../../functions/server/getRelevantGuidedSteps";
import { FixView } from "../../FixView";
import { DataBrokerRemovalMaintenance } from "./DataBrokerRemovalMaintenance";

export type Props = {
  data: OnerepScanResultRow[];
  stepDeterminationData: StepDeterminationData;
  subscriberEmails: string[];
};

export const RemovalUnderMaintenanceView = (props: Props) => {
  if (props.data === null) {
    console.error("No scan data");
    return;
  }

  const testScanItem = props.data;
  return (
    <FixView
      subscriberEmails={props.subscriberEmails}
      nextStep={getNextGuidedStep(props.stepDeterminationData, "Scan")}
      currentSection="data-broker-profiles"
      data={props.stepDeterminationData}
    >
      <div>Test</div>
      <DataBrokerRemovalMaintenance
        scanResult={testScanItem[0]}
        locale={"en"}
        resolutionCta={undefined}
        isPremiumUser={true}
        isExpanded={true}
        onToggleExpanded={() => console.log("toggle")}
      />
    </FixView>
  );
};
