/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getBreachIcons, getBreaches } from '../../../functions/getBreaches'
import { getBreachLogo } from '../../../../utils/breachLogo'
import Script from 'next/script'
import '../../../../client/css/partials/allBreaches.css'
import { getL10n, getLocale } from '../../../functions/server/l10n'

export default async function PublicScan () {
  const allBreaches = await getBreaches()
  const breachLogos = await Promise.all(allBreaches.map(async breach => getBreachLogo(breach, await getBreachIcons(allBreaches))))
  const l10n = getL10n()

  return (
    <div data-partial="allBreaches">
      <Script src="/nextjs_migration/client/js/allBreaches.js"/>
      <div id="breaches-loader" className="ab-bg breaches-loader"></div>
      <main>
        <div className="all-breaches-front-matter">
          <header className="all-breaches-header">
            <div>
              <h1>{l10n.getString('all-breaches-headline-2')}</h1>
              <p>{l10n.getString('all-breaches-lead')}</p>
            </div>
          </header>
          <form className="all-breaches-filter" autoComplete="off">
            <label htmlFor="breach-search">
              <svg
                role="img"
                aria-label={l10n.getString('search-breaches')}
                className="search-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <title>{l10n.getString('search-breaches')}</title>
                <path fill="#5b5b66" d="M15.707 14.293l-4.822-4.822a6.019 6.019 0 1 0-1.414 1.414l4.822 4.822a1 1 0 0 0 1.414-1.414zM6 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"></path>
              </svg>
            </label>
            <input id="breach-search" type="search" autoFocus></input>
          </form>
        </div>
        <section>
          <div>
            <div className="card-container">
              {allBreaches
                .filter(a => !a.IsSensitive)
                .sort((a, b) => new Date(a.AddedDate).getTime() < new Date(b.AddedDate).getTime() ? 1 : -1)
                .map(breach => <BreachCard key={breach.Name + breach.Domain} breach={breach} logos={breachLogos}/>)}
            </div>
          </div>
          <div className="row flx-col">
            {/* TODO span id="no-results-blurb" className="no-results-blurb">{l10n.getString('no-results-blurb')}</span> */}
          </div>
        </section>
      </main>
     </div>
  )
}

function BreachCard (props: {breach: any, logos: any}) {
  const l10n = getL10n()

  return (
    <a href={`/breach-details/${props.breach.Name}`} className="breach-card">
      <h3>
        {/* <span className="logo-wrapper">{getBreachLogo(props.breach, props.logos)}</span> */}
        <span>{props.breach.Title}</span>
      </h3>
      <div className="breach-main">
        <dl>
          <div>
            <dt>{l10n.getString('breach-added-label')}</dt>
            <dd>{new Date(props.breach.AddedDate).toLocaleString(getLocale(), { year: 'numeric', month: 'long', day: 'numeric' })}</dd>
          </div>
          <div>
            <dt>{l10n.getString('exposed-data')}</dt>
            <dd>
              {formatList(props.breach.DataClasses.map((a: string) => l10n.getString(a)))}
            </dd>
          </div>
        </dl>
        <span className="breach-detail-link">{l10n.getString('more-about-this-breach')}</span>
      </div>
    </a>
  )
}

function formatList (list: string[]) {
  if (typeof Intl.ListFormat === 'undefined') {
    return list.join(', ')
  }

  return (new Intl.ListFormat(getLocale(), { type: 'unit', style: 'short' })).format(list)
}
