/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactNode, createContext, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { MetricFlowData } from "../app/functions/universal/getFreeScanSearchParams";

interface SessionProviderProps {
  children: ReactNode;
  enabled: boolean;
  metricsFlowParams: {
    entrypoint: string;
    entrypoint_experiment: string;
    entrypoint_variation: string;
    form_type: string;
    service: string;
  };
}

type ContextValues = {
  data: MetricFlowData | null;
  loading: boolean;
};

export const AccountsMetricsFlowContext = createContext<ContextValues>({
  data: null,
  loading: false,
});

export const AccountsMetricsFlowProvider = ({
  children,
  enabled,
  metricsFlowParams,
}: SessionProviderProps) => {
  const [data, setData] = useState<ContextValues["data"]>(null);
  const [loading, setLoading] = useState<boolean>(enabled);
  const searchParams = useSearchParams();

  useEffect(() => {
    async function fetchMetricsFlowData() {
      const updatedSearchParams = new URLSearchParams(searchParams.toString());
      for (const key in metricsFlowParams) {
        const value = metricsFlowParams[key as keyof typeof metricsFlowParams];
        if (value) {
          updatedSearchParams.set(key, value);
        }
      }
      const response = await fetch(
        `/api/v1/accounts-metrics-flow?${updatedSearchParams.toString()}`,
      );
      const data: {
        success: boolean;
        flowData?: MetricFlowData;
      } = await response.json();

      setData(data.flowData ?? null);
      setLoading(false);
    }

    if (enabled) {
      void fetchMetricsFlowData();
    }
  }, [enabled, metricsFlowParams, searchParams]);

  return (
    <AccountsMetricsFlowContext.Provider value={{ data, loading }}>
      {children}
    </AccountsMetricsFlowContext.Provider>
  );
};
