/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useLocalization } from "@fluent/react";
import { Fragment, createElement } from "react";
import { ExtendedReactLocalization, GetFragment } from "../functions/l10n";
import { useHasRenderedClientSide } from "./useHasRenderedClientSide";

export const useL10n = (): ExtendedReactLocalization => {
  const hasRenderedClientSide = useHasRenderedClientSide();
  const { l10n } = useLocalization();

  const getFragment: GetFragment = (id, args, fallback) => {
    return hasRenderedClientSide
      ? l10n.getElement(createElement(Fragment, null, fallback ?? id), id, args)
      : null;
  };

  const extendedL10n: ExtendedReactLocalization =
    l10n as ExtendedReactLocalization;
  // "Modifying a value returned from a hook is not allowed.
  // Consider moving the modification into the hook where
  // the value is constructed."
  // Unfortunately we don't own that hook, and it's a class
  // so we can't just spread the properties on a new object.
  // Maybe we should look into if it's possible to extend the
  // class in the future:
  // eslint-disable-next-line react-hooks/immutability
  extendedL10n.getFragment = getFragment;

  return extendedL10n;
};
