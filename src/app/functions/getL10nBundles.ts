/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { negotiateLanguages } from '@fluent/langneg'

export function getL10nBundleSources (languages = typeof navigator !== 'undefined' ? navigator.languages : []) {
  // Store all translations as a simple object which is available
  // synchronously and bundled with the rest of the code.
  // Also, `require` isn't usually valid JS, so skip type checking for that:
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const translationsContext = (require as any).context(
    '../../../locales',
    true,
    /\.ftl$/
  )
  const bundleSources: Record<string, string[]> = {}

  for (const fileName of translationsContext.keys()) {
    // Filenames are formatted as `./<locale>/<module>.ftl`.
    // Example: ./en/bundle.ftl
    const locale = fileName.split('/')[1]

    if (locale) {
      bundleSources[locale] ??= []
      bundleSources[locale].push(translationsContext(fileName))
    }
  }

  const currentLocales = negotiateLanguages(
    languages,
    Object.keys(bundleSources),
    { defaultLocale: 'en' }
  )

  const relevantBundleSources = currentLocales.map(relevantLocale => ({
    locale: relevantLocale,
    bundleSources: bundleSources[relevantLocale]
  }))

  return relevantBundleSources
}
