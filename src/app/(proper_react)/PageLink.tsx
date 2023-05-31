/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, HTMLAttributes } from "react";

export type Props = ComponentProps<typeof Link> & {
  activeClassName?: HTMLAttributes<HTMLAnchorElement>["className"];
};

export const PageLink = (props: Props) => {
  const pathName = usePathname();
  const activeClassSuffix =
    pathName === props.href ? props.activeClassName : "";

  const className = `${props.className ?? ""} ${activeClassSuffix}`.trim();

  return <Link {...props} className={className} />;
};
