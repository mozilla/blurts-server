-product-name = Firefox Monitor
-brand-name = Firefox
-brand-Quantum = Firefox Quantum
-brand-Mozilla = Mozilla
-brand-HIBP = HIBP
-product-name-nowrap = <span class="nowrap">Firefox Monitor</span>

layout-Firefox = {-brand-name}
# noun
layout-support = Support
give-feedback = <span class="nowrap">Give Feedback</span>
terms-and-privacy = <span class="nowrap">Terms and Privacy</span>

error-not-subscribed = This email address is not subscribed to {-product-name}.
error-hibp-throttled = Too many connections to {-brand-HIBP}.
error-hibp-connect = Error connecting to {-brand-HIBP}.
error-hibp-load-breaches = Could not load breaches.

hibp-notify-email-subject = {-product-name} Alert : Your account was involved in a breach.

home-title = {-product-name}
home-not-found = Page not found.

oauth-invalid-session = Invalid session
oauth-confirmed-title = {-product-name} : Subscribed

scan-title = {-product-name} : Scan Results

user-add-invalid-email = Invalid Email
user-add-email-verify-subject = Verify your subscription to {-product-name}.
user-add-title = {-product-name} : Confirm Email

user-verify-token-error = Verification token is required.
user-verify-email-report-subject = Your {-product-name} report
user-verify-title = {-product-name} : Subscribed

user-unsubscribe-token-error = Unsubscribe requires a token.
user-unsubscribe-token-email-error = Unsubscribe requires a token and emailHash.
user-unsubscribe-title = {-product-name} : Unsubscribe
user-unsubscribe-survey-title = {-product-name} : Unsubscribe Survey
user-unsubscribed-title {-product-name} : Unsubscribed

## Password Tips

pwt-section-headline = Passwords = Protection
pwt-section-subhead = Your Private Information Is Only as Safe as Your Passwords
pwt-section-blurb =
  Your passwords protect more than your accounts, they protect every bit of personal information that resides in them. 
  And hackers rely on bad habits, like using the same password everywhere or using common phrases (p@ssw0rd, anyone?), 
  so that if they hack one account, they can hack many. Here are six ways to protect your accounts.

pwt-headline-1 = Use a Different Password for Every Account
pwt-headline-2 = Create Strong Passwords
pwt-headline-3 = Treat Security Questions Like Extra Passwords
pwt-headline-4 = Use a Password Manager
pwt-headline-5 = Use Two-Factor Authentication
pwt-headline-6 = Sign Up for Alerts From {-product-name-nowrap}

pwt-summary-1 = You can't prevent a data breach, but you can limit your exposure by always using different passwords for different websites.
pwt-summary-2 = Hackers try to steal passwords by using lists of common passwords and by guessing. The longer and more random your password is, the harder it will be to steal.
pwt-summary-3 = Websites don’t check that your answers are accurate, just that they match every time. So create long, random answers and store them somewhere safe.
pwt-summary-4 = Password managers like 1Password, LastPass, or Dashlane can generate strong passwords for you, remember them for you, and fill them into websites so you don't have to type them in.
pwt-summary-5 = 2FA offers an extra layer of protection by requiring you to enter additional information (like a code sent via text) before you can access your accounts.
pwt-summary-6 = We'll let you know if your account information is compromised in a data breach or exposed to hackers in some other way.

landing-headline = Your right to be safe from hackers starts here.
landing-blurb = {-product-name-nowrap} arms you with tools to keep your personal information safe. Find out what hackers already know about you and learn how to stay a step ahead of them.

scan-label = Try it out. Enter your email for a basic scan.
scan-placeholder = Enter Email Address
scan-privacy = Your email will not be stored.
scan-submit = Scan
scan-another-email = Scan Another Email Address
scan-featuredbreach-label = Find out if your <span class="bold"> { $featuredBreach } </span> account was compromised.
scan-error = Must be a valid email.

signup-banner-headline = Stay safe with {-product-name-nowrap} protection.
signup-banner-blurb = Sign up for {-product-name-nowrap}. You’ll get a full report on your compromised accounts and notifications any time your accounts appear in new data breaches.
signup-button = Sign up

download-firefox-bar-blurb = {-product-name-nowrap} is brought to you by the all-new {-brand-name}.
download-firefox-bar-link = Download {-brand-name} now

download-firefox-banner-blurb = Take control of your browser
download-firefox-banner-button = Download {-brand-name}

signup-modal-headline = Sign Up for {-product-name-nowrap}
signup-modal-blurb = Sign up for your full report, alerts when new breaches happen, and safety tips from {-product-name-nowrap}.
signup-modal-close = Close

signup-modal-verify-headline = Verify Your subscription
signup-modal-verify-blurb = We sent a verification link to <span id="submitted-email" class="medium"></span>.
signup-modal-verify-expiration = This link expires in 24 hours.
signup-modal-verify-resend = Not in inbox or spam folder? Resend.

signup-with-fxa - Sign Up with {-brand-name} Account

form-signup-placeholder = Enter email
form-signup-checkbox = Get the latest from {-brand-Mozilla} and {-brand-name}.
form-signup-submit = Sign up
form-signup-error = Must be a valid email.


found-breaches-headline = This could be a problem...
no-breaches-headline = So far, so good

found-breaches-plural = Your email address appears in the following { $breachCount } breaches.
found-breaches-singular = Your email address apppeared in the following breach.

no-breaches-blurb = 
  Your email address did not appear in our basic scan. 
  That's good news, but data breaches can happen any time and there is still more you can do. 
  Subscribe to Firefox Monitor for a full report, alerts when new breaches happen, and tips on protecting your passwords.

featured-breach-results = 
  Your email address appeared in the <span class="bold"> { $featuredBreach } </span> breach, as well as { $breachCount } other 
    { $breachCount ->
        [one] breach
       *[other] breaches
    }.

featured-breach-only = Your email address appears in the <span class="bold"> { $featuredBreach } </span> breach, but does not appear in any other known breaches.
featured-breach-other = Your email address did not appear in the <span class="bold"> { $featuredBreach } </span> breach, but did appear in one other breach.

show-more-breaches = Show More

wtd-section-headline = What To Do
wtd-1 = Change your password on these sites and anywhere else you've used the same password.
wtd-2 = Make your answers to security questions just as strong as your passwords.
wtd-3 = Use password managers like 1Password, LastPass, or Dashlane to generate strong passwords, remember them, and fill them into websites so you don't have to.
wtd-4 = Subscribe to alerts from {-product-name-nowrap} to learn sooner about your compromised accounts.

# breach-date = the calendar date a particular data theft occurred. 
breach-date = Breach date

# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Compromised accounts

# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Compromised data 


confirmed = Confirmed!<br />You're Subscribed!
confirmed-blurb = {-product-name-nowrap} will email you a full report shortly, and will send an email alert if your account appears in a new reported breach.
confirmed-social-blurb = If you've been breached, chances are your friends, family, or online connections have been too. Let them know about {-product-name-nowrap}.

unsub-headline = Unsubscribe from {-product-name-nowrap}
unsub-blurb = This will remove your email from the {-product-name-nowrap} list and you will no longer receive alerts when new breaches are announced. 
unsub-button = Unsubscribe

unsub-survey-headline = You are no longer subscribed.
unsub-survey-blurb = Your email is unsubscribed from {-product-name-nowrap}. Thank you for using this service. Will you take a moment to answer one question about your experience?
unsub-survey-form-label = Why are you unsubscribing from {-product-name-nowrap} alerts?

unsub-reason-1 = I think that alerts don't make my data safer
unsub-reason-2 = I get too many emails from {-product-name-nowrap}
unsub-reason-3 = I don't find the service valuable
unsub-reason-4 = I've already taken steps to protect my accounts
unsub-reason-5 = I am using another service to monitor my accounts
unsub-reason-6 = None of the above

unsub-survey-thankyou = Thank you for your feedback.
unsub-survey-error = Please select one.

# Link to share Firefox Monitor on Facebook. Positioned next to Facebook logo.
share = Share

# Link to share Firefox Monitor on Twitter. Positioned next to Twitter logo.
tweet = Tweet

download-firefox-quantum = Download {-brand-Quantum}
download-firefox-mobile = Download {-brand-name} Mobile

# Features here refers to Firefox browser features. 
features = Features

# beta-nightly-developer-edition refers to additional versions of Firefox Browser
beta-nightly-developer-edition = Beta, Nightly, Developer Edition

# copyright-info (without markup) = Portions of this content are 1998-2018 by individual mozilla.org contributors. Content available under a Creative Commons license.
copyright-info = 
  Portions of this content are <span class='copyright-symbol'>&copy;</span> 1998-2018 by individual mozilla.org contributors. <br />
  Content available under a  <a href="https://www.mozilla.org/foundation/licensing/website-content/" target="_blank" rel="noopener">Creative Commons license</a>.


hibp-attribution = Breach data provided by
