/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import React, { createContext, useContext } from "react";
import { SubscriptionBillingAmount } from "../app/(proper_react)/(redesign)/(public)/LandingViewRedesign/components/PricingPlanListWithBundle";

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

export function useSubscriptionBilling(): SubscriptionBillingAmount {
  const ctx = useContext(SubscriptionBillingContext);
  if (!ctx) {
    throw new Error(
      "useSubscriptionBilling must be used inside SubscriptionBillingProvider",
    );
  }
  return ctx;
}
