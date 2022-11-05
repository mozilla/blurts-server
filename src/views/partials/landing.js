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
`
