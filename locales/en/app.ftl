# String IDs beginning with "-product" and "-brand" should remain in English.
# They should not be:
# - Declined to adapt to grammatical case.
# - Transliterated.
# - Translated.
-product-name = Firefox Monitor
-product-name-nowrap = <span class="nowrap">{-product-name}</span>
-brand-name = Firefox
-brand-Quantum = Firefox Quantum
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
-brand-fxa = Firefox Account
-brand-Chrome = Chrome

layout-Firefox = {-brand-name}
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = Support
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = About Firefox Alerts
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Give Feedback
terms-and-privacy = Terms and Privacy

error-could-not-add-email = Could not add email address to database.
error-not-subscribed = This email address is not subscribed to {-product-name}.
error-hibp-throttled = Too many connections to {-brand-HIBP}.
error-hibp-connect = Error connecting to {-brand-HIBP}.
error-hibp-load-breaches = Could not load breaches.

hibp-notify-email-subject = {-product-name} Alert: Your account was involved in a breach.

home-title = {-product-name}
home-not-found = Page not found.

oauth-invalid-session = Invalid session
oauth-confirmed-title = {-product-name} : Subscribed

scan-title = {-product-name} : Scan Results

user-add-invalid-email = Invalid Email
user-add-email-verify-subject = Verify your subscription to {-product-name}.
user-add-title = {-product-name} : Confirm Email

error-headline = Error
user-verify-token-error = Verification token is required.
user-verify-email-report-subject = Your {-product-name} report
user-verify-title = {-product-name} : Subscribed

user-unsubscribe-token-error = Unsubscribing requires a token.
user-unsubscribe-token-email-error = Unsubscribing requires a token and emailHash.
user-unsubscribe-title = {-product-name} : Unsubscribe
user-unsubscribe-survey-title = {-product-name} : Unsubscribe Survey
user-unsubscribed-title = {-product-name} : Unsubscribed

## Password Tips

pwt-section-headline = Stronger Passwords = Better Protection
pwt-section-subhead = Your private information is only as safe as your passwords.
pwt-section-blurb =
  Passwords protect all the personal information in your online accounts. 
  And hackers rely on bad habits, like using the same password everywhere or using common phrases (@p@ssw0rd, anyone?) so that if they hack one account, they can hack many.

pwt-headline-1 = Use a different password for every account
pwt-summary-1 = 
  Reusing the same password everywhere leaves the door wide open for identity theft. 
  Anyone with that password can log in to all your accounts. 

pwt-headline-2 = Create strong, hard-to-guess passwords
pwt-summary-2 = 
  Short, single-word passwords are easy for hackers to guess. 
  Use at least two words and a combination of letters, digits, and special characters.

pwt-headline-3 = Treat security questions like extra passwords
pwt-summary-3 = 
  Websites don’t check that your answers are accurate, just that they match every time. 
  Create long, random answers, and store them somewhere safe.

pwt-headline-4 = Get help remembering your passwords
pwt-summary-4 =
  Password managers like 1Password, LastPass, Dashlane, and Bitwarden store your passwords and fill them in to websites for you. 
  They’ll even help you make strong passwords.

pwt-headline-5 = Add extra security with two-factor authentication
pwt-summary-5 =
  2FA requires an additional piece of information (like a one-time code sent via text message) to log in to your account. 
  Even if someone has your password, they can’t get in. 

pwt-headline-6 = Sign up for {-product-name-nowrap} alerts
pwt-summary-6 = 
  Data breaches are on the rise. If your personal info appears in a new data breach, 
  {-product-name} sends you an alert — so you can take action and protect your accounts. 

landing-headline = Your right to be safe from hackers starts here.
landing-blurb = 
  {-product-name-nowrap} arms you with tools to keep your personal information safe. 
  Find out what hackers already know about you, and learn how to stay a step ahead of them.

scan-label = See if you’ve been involved in a data breach.
scan-placeholder = Enter Email Address
scan-privacy = Your email will not be stored.
scan-submit = Search Your Email
scan-another-email = Scan Another Email Address
scan-featuredbreach-label = Find out if your <span class="bold"> { $featuredBreach } </span> account was compromised.
sensitive-breach-email-required = Breach contains sensitive information. Email verification required.
scan-error = Must be a valid email.

signup-banner-headline = {-product-name-nowrap} detects threats against your online accounts.
signup-banner-blurb = 
  Your detailed {-product-name-nowrap} report shows if information from your online accounts has been leaked or stolen. 
  We’ll also alert you if your accounts appear in new website breaches.

download-firefox-bar-blurb = {-product-name-nowrap} is brought to you by the <span class="nowrap">all-new {-brand-name}</span>.
download-firefox-bar-link = Download {-brand-name} now

download-firefox-banner-blurb = Take control of your browser
download-firefox-banner-button = Download {-brand-name}

signup-modal-headline = Sign Up for {-product-name-nowrap}
signup-modal-blurb = Sign up for your full report, alerts when new breaches happen, and safety tips from {-product-name-nowrap}.
signup-modal-close = Close

get-your-report = Get Your Report

signup-modal-verify-headline = Verify Your Subscription
signup-modal-verify-blurb = We sent a verification link to <span id="submitted-email" class="medium"></span>.
signup-modal-verify-expiration = This link expires in 24 hours.
signup-modal-verify-resend = Not in inbox or spam folder? Resend.

# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = Sent!

signup-with-fxa = Sign Up with {-brand-name} Account

form-signup-placeholder = Enter email
form-signup-checkbox = Get the latest from {-brand-Mozilla} and {-brand-name}.
sign-up = Sign Up
form-signup-error = Must be a valid email

no-breaches-headline = So far, so good.
found-breaches-headline = Your information was part of a data breach.

no-breaches = 
  Your email address did not appear in our basic scan.
  That’s good news, but data breaches can happen any time and there is still more you can do. 
  Subscribe to {-product-name-nowrap} for a full report, alerts when new breaches happen, and tips on protecting your passwords.

featured-breach-results =  
  { $breachCount ->
      [0] Your account appears in the <span class="bold">{ $featuredBreach }</span> breach, but does not appear in any other known data breaches.
      [one] Your account appeared in the <span class="bold"> { $featuredBreach } </span> breach, as well as one other breach.
     *[other] Your account appeared in the <span class="bold"> { $featuredBreach } </span> breach, as well as { $breachCount } other breaches.
  }

featured-breach-not-compromised = 
  { $breachCount ->
      [0] { no-breaches }
      [one] Your account did not appear in the <span class="bold">{ $featuredBreach }</span> breach, but did appear in one other breach.
     *[other] Your account did not appear in the <span class="bold">{ $featuredBreach }</span> breach, but did appear in { $breachCount } other breaches.
  }

scan-results = 
  { $breachCount ->
      [0] { no-breaches }
      [one] Your account appeared in { $breachCount } breach.
     *[other] Accounts associated with your email address appeared in the following { $breachCount } breaches.
  }

show-more-breaches = Show More

what-to-do-headline = What To Do When Your Information is Exposed in a Data Breach

what-to-do-subhead-1 = Change your passwords, even for old accounts
what-to-do-blurb-1 =
  If you can’t log in, contact the website to ask how to update it. 
  See an account you don’t recognize? Your data could have been sold or redistributed. This could also be an account you forgot you created or a company that changed names.

what-to-do-subhead-2 = Stop using the exposed password, and change it everywhere you’ve used it
what-to-do-blurb-2 =
  Hackers may try to that same password and your email to get into other accounts. 
  Create a different and unique password for every account, especially for your bank account, email, and other websites where you save personal information.

what-to-do-subhead-3 = Take extra steps to secure your financial accounts
what-to-do-blurb-3 = 
  Most breaches only expose emails and passwords, but some do include sensitive financial information. 
  If your bank account or credit card numbers were exposed, alert your bank to possible fraud. 
  Monitor statements for charges you don’t recognize.

what-to-do-subhead-4 = Get help remembering all your passwords and keeping them safe
what-to-do-blurb-4 = 
  Password managers like 1Password, LastPass, Dashlane, and Bitwarden store your passwords securely and fill them into websites for you. 
  Use a password manager on your phone and computer so you don’t have to remember them all.

# breach-date = the calendar date a particular data theft occurred. 
breach-date = Breach date:

# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Compromised accounts:

# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Compromised data:

confirmed = Confirmed!<br />You’re Subscribed!
confirmed-blurb = {-product-name-nowrap} will email you a full report shortly, and will send an email alert if your account appears in a new reported breach.
confirmed-social-blurb = If you’ve been breached, chances are your friends, family, or online connections have been too. Let them know about {-product-name-nowrap}.

unsub-headline = Unsubscribe from {-product-name-nowrap}
unsub-blurb = This will remove your email from the {-product-name-nowrap} list and you will no longer receive alerts when new breaches are announced. 
unsub-button = Unsubscribe

unsub-survey-headline = You are no longer subscribed.
unsub-survey-blurb = 
  Your email is unsubscribed from {-product-name-nowrap}. Thank you for using this service. 
  Will you take a moment to answer one question about your experience?

unsub-survey-form-label = Why are you unsubscribing from {-product-name-nowrap} alerts?

unsub-reason-1 = I think that alerts don’t make my data safer
unsub-reason-2 = I get too many emails from {-product-name-nowrap}
unsub-reason-3 = I don’t find the service valuable
unsub-reason-4 = I’ve already taken steps to protect my accounts
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

# The following string contains HTML markup which should not be translated. 
# Without HTML markup: copyright-info = Portions of this content are 1998-2018 by individual mozilla.org contributors. Content available under a Creative Commons license.
copyright-info = 
  Portions of this content are &#x24B8; 1998-2018 by individual mozilla.org contributors. <br />
  Content available under a  <a href="https://www.mozilla.org/foundation/licensing/website-content/" target="_blank" rel="noopener">Creative Commons license</a>.

# Breach data provided by Have I Been Pwned.
hibp-attribution = Breach data provided by { $hibp-link }

site-description = Have your accounts been leaked or stolen in a data breach? Find out at {-product-name}. Search our database and sign up for alerts.

confirmation-headline = Your {-product-name} report is on its way.
confirmation-blurb = Data breaches can affect anyone. Spread the word so your friends and family can check to see if their online accounts are safe.
share-email = Email
# Appears at the end of a list of email-clients and refers to any other unlisted email-client.
share-other = Other
share-twitter = Most people have about 100 online accounts. Have any of yours been exposed in a data breach? Find out. 
share-facebook-headline = Find out if you’ve been part of a data breach
share-facebook-blurb = Have your online accounts been exposed in a data breach?
og-site-description = Find out if you’ve been part of a data breach with {-product-name}. Sign up for alerts about future breaches and get tips to keep your accounts safe. 


mozilla-security-blog = {-brand-Mozilla} Security Blog
layout-social = Social
show-all = Show all

fxa-signup-banner-headline = Monitor threats to your online accounts.
fxa-signup-banner-blurb = Sign up for a {-brand-fxa} to get your detailed report and alerts about new data breaches that expose your info.
fxa-landing-blurb = 
  Find out what hackers already know about you,
  and learn how to stay a step ahead of them.


fxa-scan-label = See if you’ve appeared in a data breach.
fxa-welcome-headline = Welcome to {-product-name}.
fxa-welcome-blurb = You’re all set to get alerts if { $userEmail } appears in a data breach.

fxa-scan-another-email = Want to Check Another Email?
fxa-scan-submit = Search {-product-name}

sign-up-to-check = Sign Up to Check
sign-in = Sign In

# All letters should be capitalized.
full-report-headline = Your {-product-name} Report

# All letters should be capitalized.
see-full-report = See Full Report

#Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Manage {-brand-fxa}

sign-out = Sign Out

fxa-download-firefox-bar-blurb = Brought to you by {-brand-name}. 2x faster. Uses 30% less memory than {-brand-Chrome}.
fxa-download-firefox-bar-link = Download now
fxa-download-firefox-banner-blurb = Better, faster page loading that uses less computer memory.

guest-fb-other-breach-found = You were not in the { $breachName } breach, but we found that email address in another. {-sign-up-with-fxa}
user-fb-other-breach-found = You were not in the { $breachName } breach, but we found that email address in another.

user-fb-compromised = Take action to protect your account.
guest-fb-compromised = {-sign-up-with-fxa}

user-compromised-headline = Your account appeared in the { $breachName } data breach.
user-fb-other-breaches-found = You were not in the { $breachName} breach, but we found that email address in others. Take action to protect your accounts.
guest-fb-other-breaches-found = You were not in the { $breachName } breach, but we found that email address in others. {-sign-up-with-fxa}

user-fb-compromised-other-breaches = Your email address also appeared in { $breachCount } other breaches. Take action to protect your accounts.
guest-fb-compromised-other-breaches = Your email address also appeared in { $breachCount } other breaches. {-sign-up-with-fxa}

sign-up-with-fxa = Sign up for a {-brand-fxa} to get your full report and alerts about new breaches.

no-breaches-found-headline = No breaches found from a basic search.
authenticated-no-breaches-blurb = No breaches found. We’ll send you an email if your info appears in new breaches.
user-no-breaches-blurb = No breaches found.
guest-no-breaches-blurb = For a more in-depth search of this email address in sensitive breaches, create a {-brand-fxa}. You’ll also get alerts if you appear in new data breaches.

found-breach-headline = Your account appeared in one data breach.
guest-found-breach-blurb = This breach exposed your personal info. Sign up for a {-brand-fxa} to get your full report and alerts about new breaches.
user-found-breach-blurb = This breach exposed your personal info. Take action to protect your account.

many-found-breaches-headline = Your accounts appeared in { $breachCount } data breaches.
user-many-found-breaches-blurb = These breaches exposed your personal info. Take action to protect your accounts.
guest-many-found-breaches-blurb = These breaches exposed your personal info. Sign up for a {-brand-fxa} to get your full report and alerts about new breaches. 

have-an-account = Already have an account?

