/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { Button, ButtonProps } from "./Button";
import { useTelemetry } from "../../hooks/useTelemetry";
import { GleanMetricMap } from "../../../telemetry/generated/_map";

export const TelemetryButton = <
  EventModule extends keyof GleanMetricMap,
  EventName extends keyof GleanMetricMap[EventModule],
>(
  props: {
    event: {
      module: EventModule;
      name: keyof GleanMetricMap[EventModule];
      data: GleanMetricMap[EventModule][EventName];
    };
  } & ButtonProps,
) => {
  const { event, onPress } = props;
  const { module, name, data } = event;
  const recordTelemetry = useTelemetry();

  return (
    <Button
      {...props}
      onPress={(e) => {
        // Consumers of this component do not currently have tests that actually click the button
        /* c8 ignore next 3 */
        if (onPress) {
          onPress(e);
        }
        recordTelemetry(module, name, data);
      }}
    />
  );
};
