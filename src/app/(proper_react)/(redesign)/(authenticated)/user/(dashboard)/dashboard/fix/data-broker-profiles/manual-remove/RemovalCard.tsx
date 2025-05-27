/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useRouter } from "next/navigation";
import { OnerepScanResultDataBrokerRow } from "knex/types/tables";
import { Button } from "../../../../../../../../../components/client/Button";
import { useL10n } from "../../../../../../../../../hooks/l10n";
import { useState } from "react";
import { getLocale } from "../../../../../../../../../functions/universal/getLocale";
import { useTelemetry } from "../../../../../../../../../hooks/useTelemetry";
import { ScanResultCard } from "../../../../../../../../../components/client/exposure_card/ScanResultCard";
import { FeatureFlagName } from "../../../../../../../../../../db/tables/featureFlags";

export type Props = {
  // TODO MOSCARY: Implement manual resolution for Moscary
  scanResult: OnerepScanResultDataBrokerRow;
  isPremiumUser: boolean;
  isEligibleForPremium: boolean;
  isExpanded: boolean;
  enabledFeatureFlags: FeatureFlagName[];
  setExpanded: () => void;
};

export const RemovalCard = (props: Props) => {
  const l10n = useL10n();
  const router = useRouter();
  const recordTelemetry = useTelemetry();
  const [isResolved, setIsResolved] = useState(
    props.scanResult.manually_resolved,
  );

  async function resolve() {
    setIsResolved(true);
    const response = await fetch(
      `/api/v1/user/scan-result/${props.scanResult.onerep_scan_result_id}/resolution`,
      {
        method: "POST",
        credentials: "same-origin",
      },
    );
    // Ensure previously-visited pages that still have this scan result marked
    // as unfixed are removed from the cache. See
    // https://nextjs.org/docs/app/building-your-application/caching#invalidation-1
    router.refresh();
    if (!response.ok) {
      setIsResolved(false);
    }
  }

  return (
    <ScanResultCard
      scanResult={{
        ...props.scanResult,
        manually_resolved: isResolved,
      }}
      isOnManualRemovePage={true}
      isPremiumUser={props.isPremiumUser}
      locale={getLocale(l10n)}
      resolutionCta={
        !isResolved ? (
          <Button
            variant="primary"
            small
            onPress={() => {
              void resolve();
              recordTelemetry("ctaButton", "click", {
                button_id: "manually_resolve_data_broker",
              });
            }}
          >
            {l10n.getString("exposure-card-resolve-exposures-cta")}
          </Button>
        ) : null
      }
      isExpanded={props.isExpanded}
      onToggleExpanded={props.setExpanded}
      enabledFeatureFlags={props.enabledFeatureFlags}
    />
  );
};
