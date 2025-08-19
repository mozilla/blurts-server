/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useTelemetry } from "../../hooks/useTelemetry";
import { GleanMetricMap } from "../../../telemetry/generated/_map";
import { HTMLAttributes } from "react";
import Link from "next/link";
import styles from "./TelemetryLink.module.scss";
import { useL10n } from "../../hooks/l10n";
import { OpenInNew } from "../server/Icons";

// Telemetry link is shown in a fluent getFragment (which does not get rendered in tests)
/* c8 ignore start */
export const TelemetryLink = ({
  eventData,
  target,
  showIcon,
  ...props
}: {
  eventData: GleanMetricMap["link"]["click"];
  href: string;
  showIcon?: boolean;
  target?: string;
} & HTMLAttributes<HTMLAnchorElement>) => {
  const record = useTelemetry();
  const l10n = useL10n();

  return target ? (
    <a
      {...props}
      className={`${styles.link} ${props.className ? props.className : ""}`}
      target={target}
      onClick={(event) => {
        record("link", "click", eventData);
        props.onClick?.(event);
      }}
    >
      {props.children}
      {showIcon && (
        <OpenInNew
          alt={l10n.getString("open-in-new-tab-alt")}
          width="13"
          height="13"
        />
      )}
    </a>
  ) : (
    // For internal links
    <Link
      {...props}
      onClick={(event) => {
        record("link", "click", eventData);
        props.onClick?.(event);
      }}
    />
  );
};
/* c8 ignore stop */
