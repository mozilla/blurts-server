/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// See https://nextjs.org/docs/getting-started/react-essentials#rendering-third-party-context-providers-in-server-components
'use client'

import { FluentBundle, FluentResource } from '@fluent/bundle'
import { LocalizationProvider as OriginalLocalizationProvider, ReactLocalization, MarkupParser } from '@fluent/react'
import { ReactNode } from 'react'

export const LocalizationProvider = (props: { bundleSources: Array<{ locale: string, bundleSources: string[] }>, children: ReactNode }) => {
  const l10n = getL10nFromBundleSources(props.bundleSources)
  return <OriginalLocalizationProvider l10n={l10n}>{props.children}</OriginalLocalizationProvider>
}
function getL10nFromBundleSources (bundleSources: Array<{ locale: string, bundleSources: string[] }>) {
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
