/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useHasRenderedClientSide } from "../../hooks/useHasRenderedClientSide";

export type Props = {
  children: ReactNode;
};

export const BackButton = (props: Props) => {
  const router = useRouter();
  const hasRenderedClientSide = useHasRenderedClientSide();
  const hasHistory = hasRenderedClientSide && window.history.length > 0;

  if (!hasHistory) {
    return <Link href={"/"}>{props.children}</Link>;
  }

  const onClick = () => {
    window.history.back();
    // TODO: GA event

    // The call to `window.history.back()` might do nothing; for example, if the
    // user has clicked Back to get to the 404 page: while there might not be
    // another page to go back to, window.history.length will still be > 1
    // because of the page the user can go forward to.
    // Unfortunately there's no way to check whether it's possible to go back,
    // or to check whether `.back()` succeeded, so we just use the fallback
    // after half a second as passed:
    setTimeout(() => {
      if (router) {
        router.push("/");
      }
    }, 500);
  };

  return <button onClick={onClick}>{props.children}</button>;
};
