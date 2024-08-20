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
  extendedL10n.getFragment = getFragment;

  return extendedL10n;
};
