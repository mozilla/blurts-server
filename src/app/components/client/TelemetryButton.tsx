/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { Button, ButtonProps } from "./Button";
import { useTelemetry } from "../../hooks/useTelemetry";
import { GleanMetricMap } from "../../../telemetry/generated/_map";

type EventModule = keyof GleanMetricMap;
type EventName = keyof GleanMetricMap[EventModule];
type TelemetryButtonProps = ButtonProps & {
  eventModule: EventModule;
  event: EventName;
  data: GleanMetricMap[EventModule][EventName];
};

export const TelemetryButton = (props: TelemetryButtonProps) => {
  const { eventModule, event, data, onPress } = props;
  const recordTelemetry = useTelemetry();

  return (
    <Button
      {...props}
      onPress={(e) => {
        if (onPress) {
          onPress(e);
        }
        recordTelemetry(eventModule, event, data);
      }}
    />
  );
};
