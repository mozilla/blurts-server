/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useTelemetry } from "../../hooks/useTelemetry";
import { GleanMetricMap } from "../../../telemetry/generated/_map";
import { HTMLAttributes } from "react";
import Link from "next/link";

// Telemetry link is shown in a fluent getFragment (which does not get rendered in tests)
/* c8 ignore start */
export const TelemetryLink = ({
  eventData,
  target,
  upsell,
  ...props
}: {
  eventData: GleanMetricMap["link"]["click"];
  href: string;
  target?: string;
  upsell?: boolean;
} & HTMLAttributes<HTMLAnchorElement>) => {
  const record = useTelemetry();

  return target ? (
    <a
      {...props}
      onClick={(event) => {
        record("link", "click", eventData);
        props.onClick?.(event);
      }}
    />
  ) : (
    // For internal links
    <Link
      {...props}
      onClick={(event) => {
        record(upsell ? "upgradeIntent" : "link", "click", eventData);
        props.onClick?.(event);
      }}
    />
  );
};
/* c8 ignore stop */
