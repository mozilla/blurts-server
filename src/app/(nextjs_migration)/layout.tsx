/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { headers } from 'next/headers'
import { LocalizationProvider } from '../../contextProviders/localization'
import { acceptedLanguages } from '@fluent/langneg'
import { getL10nBundleSources } from '../functions/getL10nBundles'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout ({
  children
}: {
  children: ReactNode,
}) {
  const headersList = headers()
  const acceptLangHeader = headersList.get('Accept-Language')
  const l10nBundleSources = getL10nBundleSources(acceptLangHeader ? acceptedLanguages(acceptLangHeader) : undefined)

  return (
    <html lang={l10nBundleSources[0]?.locale ?? 'en'}>
      <Script src="/nextjs_migration/client/js/resizeObserver.js"/>
      <body className={inter.className}>
        <LocalizationProvider bundleSources={l10nBundleSources}>
          {children}
        </LocalizationProvider>
      </body>
    </html>
  )
}
