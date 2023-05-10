/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

'use client'

import { ReactLocalization, useLocalization } from '@fluent/react'
import { createElement, Fragment, useEffect, useState } from 'react'

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
type GetFragment = (
  id: Parameters<ReactLocalization['getString']>[0],
  args?: Parameters<ReactLocalization['getElement']>[2],
  fallback?: Parameters<ReactLocalization['getString']>[2]
) => ReturnType<ReactLocalization['getElement']>;

type ExtendedReactLocalization = ReactLocalization & {
  getFragment: GetFragment;
};

export const useL10n = (): ExtendedReactLocalization => {
  const { l10n } = useLocalization()

  const getFragment: GetFragment = (id, args, fallback) =>
    l10n.getElement(createElement(Fragment, null, fallback ?? id), id, args)

  const extendedL10n: ExtendedReactLocalization =
    l10n as ExtendedReactLocalization
  extendedL10n.getFragment = getFragment

  return extendedL10n
}
