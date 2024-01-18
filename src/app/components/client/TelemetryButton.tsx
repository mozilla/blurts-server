/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { Button, ButtonProps } from "./Button";
import { useTelemetry } from "../../hooks/useTelemetry";
import { GleanMetricMap } from "../../../telemetry/generated/_map";

interface TelemetryProps {
  eventModule: keyof GleanMetricMap;
  eventName: keyof GleanMetricMap[];
  eventData: unknown;
}

export const TelemetryButton = (props: TelemetryProps & ButtonProps) => {
  const { eventModule, eventName, eventData, onPress } = props;
  const recordTelemetry = useTelemetry();

  return (
    <Button
      {...props}
      onPress={(event) => {
        if (onPress) {
          onPress(event);
        }
        recordTelemetry(eventModule, eventName, eventData);
      }}
    />
  );
};
