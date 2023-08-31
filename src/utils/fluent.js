/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { join, resolve } from 'node:path'
import { readdirSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { FluentBundle, FluentResource } from '@fluent/bundle'
import { negotiateLanguages } from '@fluent/langneg'
import AppConstants from '../appConstants.js'
import { localStorage } from './localStorage.js'
import { InternalServerError } from '../utils/error.js'

// This file will be removed once we've fully switched to React
/* c8 ignore start */

const supportedLocales = AppConstants.SUPPORTED_LOCALES?.split(',')
/** @type {Record<string, FluentBundle>} */
const fluentBundles = {}

/**
 * Create Fluent bundles for all supported locales.
 * Reads .ftl files in parallel for better server start performance.
 */
async function initFluentBundles () {
  const promises = supportedLocales.map(async locale => {
    const bundle = new FluentBundle(locale, { useIsolating: false })
    const dirname = resolve('./locales', locale)

    try {
      const filenames = readdirSync(dirname).filter(item => item.endsWith('.ftl'))

      await Promise.all(filenames.map(async filename => {
        const str = await readFile(join(dirname, filename), 'utf8')

        bundle.addResource(new FluentResource(str))
      }))
    } catch (/** @type {any} */ e) {
      console.error('Could not read Fluent file:', e)
      throw new InternalServerError(e)
    }

    fluentBundles[locale] = bundle
  })

  await Promise.allSettled(promises)
}

/**
 * Set the locale used for translations negotiated between requested and available
 *
 * @param {string[]} requestedLocales - Locales requested by client.
 */
function updateLocale (requestedLocales) {
  return negotiateLanguages(
    requestedLocales,
    supportedLocales,
    { strategy: 'lookup', defaultLocale: 'en' }
  )
}

/**
 * Return the locale negotiated between requested and supported locales.
 * Default 'en' if localStorage hasn't initialized (called without client request)
 */
function getLocale () {
  return localStorage.getStore()?.get('locale') || ['en']
}

/**
 * Translate a message and return the raw string
 * Defaults to en if message id not found in requested locale
 *
 * @param {string} id - The Fluent message id.
 */
function getRawMessage (id) {
  let bundle = fluentBundles[getLocale()]

  if (!bundle.hasMessage(id)) bundle = fluentBundles.en

  if (bundle.hasMessage(id)) return bundle.getMessage(id)?.value

  return id
}

/**
 * Translate and transform a message pattern with current locale
 * Defaults to en if message id not found in requested locale
 *
 * @param {string} id - The Fluent message id.
 * @param {Record<string, import('@fluent/bundle').FluentVariable>} [args] - key/value pairs corresponding to pattern in Fluent resource.
 * @example
 * // Given FluentResource("hello = Hello, {$name}!")
 * getMessage (hello, {name: "Jane"})
 * // Returns "Hello, Jane!"
 * @deprecated Use [[getL10n]]; to ease the transition, see [[getStringLookup]].
 * @todo Delete this function, and replace calls to it with calls to ReactLocalization.getString
 */
function getMessage (id, args) {
  return getMessageWithLocale(id, getLocale(), args)
}

/**
 * Get a function that localises a string
 *
 * This is a transition function to make it easy to port code that still uses
 * [[getMessage]] to the Next.js setup. If you're calling that code from a place
 * that has a FluentLocalization object (i.e. code reachable from a Next.js
 * requests, where its `headers` function is available and which can therefore
 * obtain it by calling [[getL10n]]), it will use that; otherwise it will fall
 * back to the existing `getMessage`.
 *
 * @param {import('@fluent/react').ReactLocalization | undefined} l10n A FluentLocalization object, if available.
 * @returns {typeof getMessage} A function equivalent to [[getMessage]], but it'll use the FluentLocalization object if given one.
 */
function getStringLookup(l10n) {
  if (l10n) {
    return (id, vars) => {
      return l10n.getString(id, vars)
    };
  }
  return getMessage;
}

/**
 * Translate and transform a message pattern
 * Can pass in any locale
 * Defaults to en if message id not found in requested locale
 *
 * @param {string} id - The Fluent message id.
 * @param {string[]} localePreferences
 * @param {Record<string, import('@fluent/bundle').FluentVariable>} [args] - key/value pairs corresponding to pattern in Fluent resource.
 * @returns {string}
 * @example
 * // Given FluentResource("hello = Hello, {$name}!")
 * getMessage (hello, {name: "Jane"})
 * // Returns "Hello, Jane!"
 */
function getMessageWithLocale (id, localePreferences, args) {
  let bundle = fluentBundles[localePreferences[0]]

  if (!bundle.hasMessage(id)) bundle = fluentBundles.en

  if (!bundle.hasMessage(id)) {
    return id
  }

  return bundle.formatPattern(bundle.getMessage(id)?.value ?? '', args)
}

export { initFluentBundles, updateLocale, getLocale, getMessage, getMessageWithLocale, getStringLookup, getRawMessage }
