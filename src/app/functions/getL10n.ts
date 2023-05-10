/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { FluentBundle, FluentResource } from '@fluent/bundle'
import type { MarkupParser } from '@fluent/react'
import { ReactLocalization } from '@fluent/react/esm/localization'

// This function is the server equivalent of useL10n, where @fluent/react's context can't be used:
export function getL10nFromBundleSources (bundleSources: Array<{ locale: string, bundleSources: string[] }>) {
  const bundles: FluentBundle[] = []

  bundleSources.forEach(({ locale, bundleSources }) => {
    const bundle = new FluentBundle(locale)
    bundleSources.forEach(bundleSource => bundle.addResource(new FluentResource(bundleSource)))
    bundles.push(bundle)
  })

  // To enable server-side rendering, all tags are converted to plain text nodes.
  // They will be upgraded to regular HTML elements in the browser:
  const parseMarkup: MarkupParser | undefined =
    typeof document === 'undefined'
      ? (str: string) => [
          {
            nodeName: '#text',
            textContent: str.replace(/<(.*?)>/g, '')
          } as Node
        ]
      : undefined

  // The ReactLocalization instance stores and caches the sequence of generated
  // bundles. You can store it in your app's state.
  const l10n = new ReactLocalization(
    bundles,
    parseMarkup
  )

  return l10n
}
