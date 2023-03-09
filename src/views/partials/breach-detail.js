/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export const breachDetailsPartial = data => `
  <style>
    li {
      padding: 12px;
    }
  </style>
  <main id="breach-detail">
    <div style="text-align: center">
      <div style="display: block; margin-left: auto; margin-right: auto; width: 10%">
        <img class="breach-detail-logo breach-logo" alt="${data.breach.Name} logo" src="https://monitor.cdn.mozilla.net/img/logos/${data.breach.LogoPath}" />
      </div>
      <h2 class="headline breach-detail-headline txt-cntr">${data.breach.Title}</h2>
      <a class="blue-link send-ga-ping" href="https://www.${data.breach.Domain}" rel="nofollow noopener noreferrer" data-event-label="${data.breach.Domain}" data-event-action="Engage" data-event-category="Breach Detail: Website URL Link" target="_blank">www.${data.breach.Domain}</a>
      <br>
      <a class="breach-type demi" href="#what-is-this-breach">TODO</a>
    </div>
  </main>

  <!-- Overview -->
  <section style="padding: 120px">
    <h2>Overview</h2>
    On ${data.breach.BreachDate}, ${data.breach.Name} was breached.
    Once the breach was discovered and verified, it was added to our database on ${data.breach.AddedDate}.
  </section>

  <!--Exposed Data Classes -->
  <section style="padding: 120px">
    <h2>What data was compromised:</h2>
    <ul>
      ${data.breach.DataClasses.map(a => `<li>${a}</li>`).join('')}
    </ul>
    <br>
    <div>
      Breach data provided by Have I Been Pwned
    </div>
  </section>

  <!-- What to do tips -->
  <section id="what-to-do-next" style="padding: 120px">
    <h2>What to do to protect your personal info</h2>
    ${data.breach.DataClasses.includes('passwords') ? 'We recommend you take these steps to keep your personal info safe and protect your digital identity.' : 'Though passwords weren\'t exposed in this breach, there are still steps you can take to better protect your personal info.'}
    <ul style="padding: 20px">
      <li>
        <h3>Change your password</h3>
        <div>Make this password unique and different from any others you use. A good strategy to follow is to combine two or more unrelated words to create an entire passphrase.</div>
      </li>
      <li>
        <h3>Update other logins using the same password</h3>
        <div>Reusing passwords turns a single data breach into many. Now that this password is out there, hackers could use it to get in to other accounts.</div>
      <li>
        <h3>Use a service that masks your IP address</h3>
        <div>Your Internet Protocol address (IP address) can reveal your location and internet service provider. A service like Mozilla VPN hides your IP address and location for your entire device.</div>
        <a href="">Try Mozilla VPN</a>
      </li>
      <li>
        <h3>Avoid sharing your phone number</h3>
        Try to avoid giving out your phone number when signing up for new accounts or services. If a phone number isn't required, don't enter it.
      </li>
      <li>
        <h3>Use an email mask</h3>
        <div>Giving out your real email address makes it easier for hackers or trackers to find your passwords or target you online. A service like Firefox Relay hides your real email address while forwarding emails to your real inbox.</div>
        <a href="">Try Firefox Relay</a>
      </li>
      <li>
        <h3>Use unique, strong passwords for every account</h3>
        <div>Password reuse puts all your accounts at risk. This means that if one password gets exposed, hackers have the keys to many accounts.</div>
        <a href="">How to create strong passwords</a>
      </li>
  </section>

  <!-- Sign Up Banner -->
  <section style="padding: 120px">
    <div>
      <h2>Product Promo</h2>
    </div>
  </section>

  <!-- What is this breach? / Why did it take you so long to report it?-->
  <section style="padding: 120px">
    <div id="what-is-this-breach">
      <h2>What is a website breach?</h2>
      A website data breach happens when cyber criminals steal, copy,
      or expose personal information from online accounts. It's usually a result of hackers
      finding a weak spot in the website's security. Breaches can also happen when account
      information gets leaked by accident.
    </div>
  </section>
  ${JSON.stringify(data.breach)}
`
