/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useEffect } from "react";

export default function StripeScript() {
  useEffect(() => {
    // Load stripe.js for fraud resistance.
    // https://stripe.com/guides/radar-rules-101#importance-of-using-stripejs
    import("@stripe/stripe-js");
  }, []);

  return <></>;
}
