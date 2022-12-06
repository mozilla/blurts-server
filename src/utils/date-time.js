import { getLocale } from './fluent.js'

/**
* Format date according to app locale
* @param {string} str - The ISO date string.
* @param {object} [args] - Format options. Defaults to medium-size UTC date without time.
*
* See {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options MDN Intl.DateTimeFormat} for available options
*/
function formatDate (str, args) {
  const date = new Date(str)
  const options = args || { year: 'numeric', month: 'short', day: '2-digit', timeZone: 'UTC' }

  return date.toLocaleString(getLocale(), options)
}

export { formatDate }
