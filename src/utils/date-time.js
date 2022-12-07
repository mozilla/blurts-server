import { getLocale } from './fluent.js'

/**
* Format date according to app locale
* @param {string} str - The ISO date string.
* @param {object} [args] - Format options. Defaults to short UTC date without time. e.g. 12/05/2021 (en)
*
* See {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options MDN Intl.DateTimeFormat} for available options
*/
function formatDate (str, args) {
  const date = new Date(str)
  const options = { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'UTC', ...args }

  return date.toLocaleString(getLocale(), options)
}

export { formatDate }
