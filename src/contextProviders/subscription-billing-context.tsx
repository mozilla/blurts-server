/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import React, { createContext, useContext } from "react";
import type { BundleBillingAmount } from "../app/functions/server/getPremiumSubscriptionInfo";

export type SubscriptionBillingAmount = {
  monthly: number;
  bundle: BundleBillingAmount;
};
const SubscriptionBillingContext =
  createContext<SubscriptionBillingAmount | null>(null);

export function SubscriptionBillingProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: SubscriptionBillingAmount;
}) {
  return (
    <SubscriptionBillingContext.Provider value={value}>
      {children}
    </SubscriptionBillingContext.Provider>
  );
}

// Please validate that the right values are being used
// by checking the env vars here:  https://github.com/mozilla/webservices-infra/blob/main/monitor/k8s/monitor-www/values-prod.yaml
export function useSubscriptionBilling(): SubscriptionBillingAmount {
  const ctx = useContext(SubscriptionBillingContext);
  /* c8 ignore next 5 */
  if (!ctx) {
    throw new Error(
      "useSubscriptionBilling must be used inside SubscriptionBillingProvider",
    );
  }
  return ctx;
}
