/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getMessage } from '../../utils/fluent.js'

function makeBreachCard (breach) {
  return `
  <a href="/breach-details/${breach.Name}" class="breach-card">
  <div>
    <div style="text-align: right; background-color: #F9F9FA">
      <img style="width: 32px" alt="${breach.Name} logo" src="https://monitor.cdn.mozilla.net/img/logos/${breach.LogoPath}" />
      <span>${breach.Title}</span>
    </div>
    <div>${getMessage('breach-added-label')}</div>
    <div style="font-weight: bold">${new Date(breach.AddedDate).toLocaleString('default', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
    <br>
    <div>${getMessage('compromised-data')}</div>
    <div>
      ${breach.DataClasses.map(a => `<span style="font-weight: bold">${getMessage(a)}</span>`).join(', ')}
    </div>
    <br>
    <div>${getMessage('more-about-this-breach')}</div>
  </div>
  </a>
  `
}

export const allBreachesPartial = data => `
<style>
  .card-container {
    align-items: start;
    display: grid;
    grid-gap: 12px;
    grid-template-columns: repeat(auto-fit, 340px);
  }
  .breach-card {
    text-decoration: none;
    border: solid;
    border-color: grey;
    padding: 8px;
    height: 320px;
  }
  
</style>
<div id="breaches-loader" class="ab-bg breaches-loader"></div>
<main>
  <div style="text-align: center">
    <div>
      <h1>${getMessage('all-breaches-headline')}</h1>
    </div>
  </div>
  <section>
    <div>
      <h2 style="text-align: center">
        <form autocomplete="off">
          <button><svg class="search-icon " xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#5b5b66" d="M15.707 14.293l-4.822-4.822a6.019 6.019 0 1 0-1.414 1.414l4.822 4.822a1 1 0 0 0 1.414-1.414zM6 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"></path></svg></button>
          <input id="search" type="text" style="font-size: 16px; min-height: 50px" placeholder="Search breaches"></input>
          <button><svg xmlns="http://www.w3.org/2000/svg" class="x-close" width="16" height="16" viewBox="0 0 16 16"><path fill="context-fill" d="M9.061 8l3.47-3.47a.75.75 0 0 0-1.061-1.06L8 6.939 4.53 3.47a.75.75 0 1 0-1.06 1.06L6.939 8 3.47 11.47a.75.75 0 1 0 1.06 1.06L8 9.061l3.47 3.47a.75.75 0 0 0 1.06-1.061z"></path></svg></button>
        </form>
      </h2>
      <section class="card-container">
        ${data.breaches
          .filter(a => !a.IsSensitive)
          .sort((a, b) => new Date(a.AddedDate).getTime() < new Date(b.AddedDate).getTime() ? 1 : -1)
          .map(breach => makeBreachCard(breach))
          .join('')}
      </section>
    </div>
    <div class="row flx-col">
      <!-- TODO span id="no-results-blurb" class="no-results-blurb">${getMessage('no-results-blurb')}</span -->
    </div>
  </section>
</main>
`
