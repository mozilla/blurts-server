/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactLocalization, useLocalization } from "@fluent/react";
import { Fragment, createElement, useEffect, useState } from "react";

/**
 * Equivalent to ReactLocalization.getString, but returns a React Fragment.
 *
 * This is useful because it allows you to replace tags in localised strings
 * with HTML elements, without needing to reach out to <Localized>.
 *
 * (This method got booted out of @fluent/react proper because it's so simple,
 * but it's pretty useful:
 * https://github.com/projectfluent/fluent.js/pull/595#discussion_r967011632)
 */
export type GetFragment = (
  id: Parameters<ReactLocalization["getString"]>[0],
  args?: Parameters<ReactLocalization["getElement"]>[2],
  fallback?: Parameters<ReactLocalization["getString"]>[2],
) => ReturnType<ReactLocalization["getElement"]> | null;

export type ExtendedReactLocalization = ReactLocalization & {
  getFragment: GetFragment;
};

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
