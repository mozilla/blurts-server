'use strict'

const AppConstants = require('./../app-constants')
const { getSortedDataClasses } = require('./breach-detail')
const { prettyDate, localeString, localizedBreachDataClasses } = require('./hbs-helpers')
const { LocaleUtils } = require('./../locale-utils')
const { filterBreaches } = require('./../hibp')

function getLocalizedBreachCardStrings (locales) {
  return {
    BreachAdded: LocaleUtils.fluentFormat(locales, 'breach-added-label'),
    CompromisedAccounts: LocaleUtils.fluentFormat(locales, 'compromised-accounts'),
    CompromisedData: LocaleUtils.fluentFormat(locales, 'compromised-data'),
    LatestBreachLink: LocaleUtils.fluentFormat(locales, 'latest-breach-link'),
    MoreInfoLink: LocaleUtils.fluentFormat(locales, 'more-about-this-breach'),
    ResolveThisBreachLink: LocaleUtils.fluentFormat(locales, 'resolve-this-breach-link')
  }
}

function dataClassesforCards (breach, locales) {
  const topTwoClasses = []
  const dataClasses = getSortedDataClasses(locales, breach)

  dataClasses.priority.forEach(dataType => {
    topTwoClasses.push(dataType.dataType)
  })

  if (topTwoClasses.length >= 2) {
    return localizedBreachDataClasses(topTwoClasses.slice(0, 2), locales)
  }

  topTwoClasses.concat(dataClasses.lowerPriority)
  return localizedBreachDataClasses(topTwoClasses.slice(0, 2), locales)
}

function sortBreaches (breaches) {
  breaches = breaches.sort((a, b) => {
    const oldestBreach = new Date(a.AddedDate)
    const newestBreach = new Date(b.AddedDate)
    return newestBreach - oldestBreach
  })
  return breaches
}

function makeBreachCards (breaches, locales) {
  const formattedBreaches = []
  const breachCardStrings = getLocalizedBreachCardStrings(locales)
  breaches = JSON.parse(JSON.stringify(breaches))

  for (const breachCard of breaches) {
    getLocalizedBreachValues(locales, breachCard)
    breachCard.LocalizedBreachCardStrings = breachCardStrings // "Compromised Data: , Compromised Accounts: ..."
    breachCard.LogoUrl = `${AppConstants.LOGOS_ORIGIN}/img/logos/${breachCard.LogoPath}`
    formattedBreaches.push(breachCard)
  }
  return formattedBreaches
}

function lastAddedBreach (options) {
  const locales = options.data.root.req.supportedLocales
  let latestBreach = [options.data.root.latestBreach]
  latestBreach = makeBreachCards(latestBreach, locales)
  return latestBreach
}

function getFoundBreaches (args) {
  const locales = args.data.root.req.supportedLocales
  let userBreaches = args.data.root.foundBreaches
  userBreaches = makeBreachCards(userBreaches, locales)
  userBreaches.cardType = 'two-up drop-shadow'
  return userBreaches
}

function getLocalizedBreachValues (locales, breach) {
  breach.AddedDate = prettyDate(breach.AddedDate, locales)
  breach.PwnCount = localeString(breach.PwnCount, locales)
  breach.DataClasses = dataClassesforCards(breach, locales)
  return breach
}

function getBreachArray (args) {
  const locales = args.data.root.req.supportedLocales

  let breaches = args.data.root.req.app.locals.breaches
  breaches = JSON.parse(JSON.stringify(breaches))
  // should we consider filtering the breaches when the app loads
  // since we aren't ever showing them now anyway?
  breaches = filterBreaches(breaches)
  breaches = sortBreaches(breaches)
  breaches = breaches.filter(breach => !breach.IsSensitive)
  breaches.forEach(breach => {
    getLocalizedBreachValues(locales, breach)
    delete (breach.Description)
    delete (breach.IsVerified)
    delete (breach.ModifiedDate)
    delete (breach.IsFabricated)
    delete (breach.Domain)
    delete (breach.IsRetired)
    delete (breach.IsSensitive)
    delete (breach.IsSpamList)
    delete (breach.BreachDate)
  })

  const allBreaches = {
    LocalizedBreachCardStrings: getLocalizedBreachCardStrings(locales),
    breaches
  }
  return JSON.stringify(allBreaches)
}

function getBreachCardCta (breach, args) {
  const BREACH_RESOLUTION_ENABLED = (AppConstants.BREACH_RESOLUTION_ENABLED === '1')
  const templateData = args.data.root

  if (breach.latestBreach) {
    return args.fn({
      ctaTitle: breach.LocalizedBreachCardStrings.LatestBreachLink,
      ctaAnalyticsLabel: 'Latest Breach: See if you were in this breach'
    })
  }

  if (BREACH_RESOLUTION_ENABLED && templateData.whichPartial === 'dashboards/breaches-dash' && !breach.IsResolved) {
    return args.fn({
      ctaTitle: breach.LocalizedBreachCardStrings.ResolveThisBreachLink,
      ctaAnalyticsLabel: 'Breach Card: Resolve this breach'
    })
  }

  return args.fn({
    ctaTitle: breach.LocalizedBreachCardStrings.MoreInfoLink,
    ctaAnalyticsLabel: 'Breach Card: More about this breach'
  })
}

module.exports = {
  lastAddedBreach,
  getFoundBreaches,
  makeBreachCards,
  getBreachArray,
  getBreachCardCta
}
