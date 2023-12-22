/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useTelemetry } from "../../../hooks/useTelemetry";
import { GleanMetricMap } from "../../../../telemetry/generated/_map";
import { HTMLAttributes } from "react";

export const TelemetryLink = ({
  eventData,
  ...props
}: {
  eventData: GleanMetricMap["button"]["click"];
  href: string;
  target: string;
} & HTMLAttributes<HTMLAnchorElement>) => {
  const record = useTelemetry();

  return (
    <a
      {...props}
      onClick={(event) => {
        record("button", "click", eventData);

        props.onClick?.(event);
      }}
    />
  );
};
