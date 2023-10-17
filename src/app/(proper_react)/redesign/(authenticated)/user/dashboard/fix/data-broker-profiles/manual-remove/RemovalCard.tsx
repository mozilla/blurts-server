/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { OnerepScanResultRow } from "knex/types/tables";
import { Button } from "../../../../../../../../components/server/Button";
import { useL10n } from "../../../../../../../../hooks/l10n";
import { useState } from "react";
import { ExposureCard } from "../../../../../../../../components/client/ExposureCard";
import { getLocale } from "../../../../../../../../functions/universal/getLocale";

export type Props = {
  scanResult: OnerepScanResultRow;
  isPremiumUser: boolean;
  isExpanded?: boolean;
};

export const RemovalCard = (props: Props) => {
  const l10n = useL10n();
  const [isResolved, setIsResolved] = useState(
    props.scanResult.manually_resolved,
  );

  async function resolve() {
    setIsResolved(true);
    const response = await fetch(
      `/api/v1/user/scan-result/${props.scanResult.onerep_scan_result_id}/resolution/`,
      {
        method: "POST",
        credentials: "same-origin",
      },
    );
    if (!response.ok) {
      setIsResolved(false);
    }
  }

  return (
    <ExposureCard
      exposureData={{
        ...props.scanResult,
        manually_resolved: isResolved,
      }}
      isPremiumBrokerRemovalEnabled={true}
      isPremiumUser={props.isPremiumUser}
      locale={getLocale(l10n)}
      resolutionCta={
        !isResolved ? (
          <Button variant="primary" small onPress={() => void resolve()}>
            {l10n.getString(
              "fix-flow-data-broker-profiles-manual-remove-button-mark-fixed",
            )}
          </Button>
        ) : null
      }
      isExpanded={props.isExpanded}
    />
  );
};
