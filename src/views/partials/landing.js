import { getMessage } from '../../utils/fluent.js'

export const landing = data => `
<section class='hero'>
  <div>
    <h1>${getMessage('find-out-if-breached')}</h1>
    <p>${getMessage('stay-safe-with-tool')}</p>
    <a class='button primary' href='/user/breaches'>${getMessage('sign-up-free')}</a>
  </div>
  <figure>
    <img srcset='images/landing-hero.png 530w, images/landing-hero@2x.png 1059w' alt=''>
  </figure>
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
<section class='how-it-works'>
  <h2>${getMessage('how-it-works')}</h2>
  <ol>
    <li>
      <img srcset='images/landing-laptop.png 250w, images/landing-laptop@2x.png 500w' loading='lazy' alt=''>
      <h3>${getMessage('check-for-breaches')}</h3>
      <p>${getMessage('check-for-breaches-we-search')}</p>
    </li>
    <li>
      <img srcset='images/landing-lock.png 204w, images/landing-lock@2x.png 408w' loading='lazy' alt=''>
      <h3>${getMessage('take-action')}</h3>
      <p>${getMessage('take-action-clear-steps')}</p>
    </li>
    <li>
      <img srcset='images/landing-mail.png 170w, images/landing-mail@2x.png 340w' loading='lazy' alt=''>
      <h3>${getMessage('alerts-for-breaches')}</h3>
      <p>${getMessage('alerts-for-breaches-monitor-new')}</p>
    </li>
  </ol>
</section>
<section class='safe-with-us'>
  <div>
    <h2>${getMessage('safe-with-us')}</h2>
    <p>${getMessage('parent-company')}</p>
    <p>${getMessage('our-mission')}</p>
    <p><a href='https://www.mozilla.org/mission/' target='_blank'>${getMessage('learn-more-mission')}</a></p>
  </div>
  <figure>
    <img srcset='images/landing-nature-phone.png 539w, images/landing-nature-phone@2x.png 1078w' loading='lazy' alt=''>
  </figure>
</section>
`
