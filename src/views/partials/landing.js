import { getMessage } from '../../utils/fluent.js'

export const landing = data => `
<section class='hero'>
  <div>
    <h1>${getMessage('find-out-if-breached')}</h1>
    <p>${getMessage('stay-safe-with-tool')}</p>
    <a class='button primary' href='/breaches'>${getMessage('sign-up-free')}</a>
  </div>
  <div>
    <img srcset="images/landing-hero.png 530w, images/landing-hero@2x.png 1059w" alt=''>
  </div>
</section>
<section class='why-use-monitor'>
  <h2>${getMessage('why-use-monitor')}</h2>
  <p>${getMessage('identifying-breaches')}</p>
  <ul>
    <li>
      <h3>${getMessage('protect-account')}</h3>
      <p>${getMessage('protect-account-prevent-hackers')}</p>
    </li>
    <li>
      <h3>${getMessage('prevent-fraud')}</h3>
      <p>${getMessage('prevent-fraud-keep-info')}</p>
    </li>
    <li>
      <h3>${getMessage('get-alerts')}</h3>
      <p>${getMessage('get-alerts-find-out')}</p>
    </li>
</ul>
</section>
`
