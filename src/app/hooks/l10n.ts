/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useLocalization } from "@fluent/react";
import { Fragment, createElement, useEffect, useState } from "react";
import { ExtendedReactLocalization, GetFragment } from "../functions/l10n";

export const useL10n = (): ExtendedReactLocalization => {
  const [isMounted, setIsMounted] = useState(false);
  const { l10n } = useLocalization();

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  const getFragment: GetFragment = (id, args, fallback) => {
    return isMounted
      ? l10n.getElement(createElement(Fragment, null, fallback ?? id), id, args)
      : null;
  };

  const extendedL10n: ExtendedReactLocalization =
    l10n as ExtendedReactLocalization;
  extendedL10n.getFragment = getFragment;

  return extendedL10n;
};
