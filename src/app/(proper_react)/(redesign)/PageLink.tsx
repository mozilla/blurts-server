/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, HTMLAttributes } from "react";
import { GleanMetricMap } from "../../../telemetry/generated/_map";
import { TelemetryLink } from "../../components/client/TelemetryLink";

export type Props = ComponentProps<typeof Link> & {
  activeClassName?: HTMLAttributes<HTMLAnchorElement>["className"];
  telemetry?: GleanMetricMap["link"]["click"];
};

export const PageLink = (props: Props) => {
  const { activeClassName, telemetry = {}, ...otherProps } = props;
  const pathName = usePathname();
  // TODO: Add unit test when changing this code:
  /* c8 ignore next */
  const activeClassSuffix = pathName === otherProps.href ? activeClassName : "";

  const className = `${otherProps.className ?? ""} ${
    // TODO: Add unit test when changing this code:
    /* c8 ignore next */
    activeClassSuffix ?? ""
  }`.trim();

  const pageLink = telemetry ? (
    <TelemetryLink
      {...otherProps}
      eventData={telemetry}
      className={className}
      href={otherProps.href as string}
    />
  ) : (
    <Link {...otherProps} className={className} />
  );

  return pageLink;
};
