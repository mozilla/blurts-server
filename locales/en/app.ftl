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
-brand-team-email = breach-alerts@mozilla.com

layout-Firefox = {-brand-name}
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = Support
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = About Firefox Alerts
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Give Feedback

error-scan-page-token = You tried to scan too many email addresses in a short time period. For security reasons, we’ve temporarily blocked you from new searches. You’ll be able to try again later.
error-could-not-add-email = Could not add email address to database.
error-not-subscribed = This email address is not subscribed to {-product-name}.
error-hibp-throttled = Too many connections to {-brand-HIBP}.
error-hibp-connect = Error connecting to {-brand-HIBP}.
error-hibp-load-breaches = Could not load breaches.

home-title = {-product-name}
home-not-found = Page not found.

oauth-invalid-session = Invalid session
oauth-confirmed-title = {-product-name} : Subscribed

scan-title = {-product-name} : Scan Results

user-add-invalid-email = Invalid Email
user-add-email-verify-subject = Verify your subscription to {-product-name}.

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

pwt-headline-1 = Use a different password for every account.
pwt-summary-1 = 
  Reusing the same password everywhere leaves the door wide open for identity theft. 
  Anyone with that password can log in to all your accounts. 

pwt-headline-2 = Create strong, hard-to-guess passwords.

pwt-headline-3 = Treat security questions like extra passwords.
pwt-summary-3 = 
  Websites don’t check that your answers are accurate, just that they match every time. 
  Create long, random answers, and store them somewhere safe.

pwt-headline-4 = Get help remembering your passwords.

pwt-headline-5 = Add extra security with two-factor authentication.
pwt-summary-5 =
  2FA requires an additional piece of information (like a one-time code sent via text message) to log in to your account. 
  Even if someone has your password, they can’t get in. 

pwt-headline-6 = Sign up for {-product-name-nowrap} alerts.

scan-placeholder = Enter Email Address
scan-featuredbreach-label = Find out if your <span class="bold"> { $featuredBreach } </span> account was compromised.
scan-error = Must be a valid email.

# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = Sent!

form-signup-checkbox = Get the latest from {-brand-Mozilla} and {-brand-name}.
sign-up = Sign Up

what-to-do-headline = What to do when your information is exposed in a data breach.

what-to-do-subhead-1 = Change your passwords, even for old accounts.
what-to-do-blurb-1 =
  If you can’t log in, contact the website to ask how you can recover or shut down the account. 
  See an account you don’t recognize? The site may have changed names or someone may have created an account for you.

what-to-do-blurb-2 =
  Hackers may try to reuse your exposed password to get into other accounts. 
  Create a different password for each website, especially for your bank account, 
  email and other websites where you save personal information.

what-to-do-subhead-3 = Take extra steps to secure your financial accounts.
what-to-do-blurb-3 = 
  Most breaches only expose emails and passwords, but some do include sensitive financial information. 
  If your bank account or credit card numbers were included in a breach, alert your bank to possible fraud, 
  and monitor statements for charges you don’t recognize.

what-to-do-subhead-4 = Get help creating good passwords and keeping them safe.
what-to-do-blurb-4 = 
  Password managers like 1Password, LastPass, Dashlane, and Bitwarden generate strong passwords, 
  store them securely, and fill them into websites for you.

# breach-date = the calendar date a particular data theft occurred. 
breach-date = Breach date:

# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Compromised accounts:

# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Compromised data:

# Breach data provided by Have I Been Pwned.
hibp-attribution = Breach data provided by { $hibp-link }

og-site-description = Find out if you’ve been part of a data breach with {-product-name}. Sign up for alerts about future breaches and get tips to keep your accounts safe. 

show-all = Show all

fxa-scan-another-email = Want to check another email?

sign-in = Sign in
sign-out = Sign Out

full-report-headline = Your {-product-name} Report

# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Manage {-brand-fxa}

user-fb-compromised-headline = { $userEmail } appeared in the { $breachName } data breach.
guest-fb-compromised-headline = This email appeared in the { $breachName } data breach.

user-zero-breaches-headline = { $userEmail } appeared in zero data breaches.
guest-zero-breaches-headline = This email appeared in zero data breaches.

user-scan-results-headline =
  { $breachCount ->
      [one] { $userEmail } appeared in 1 data breach.
     *[other] { $userEmail } appeared in { $breachCount } data breaches.
  }

guest-scan-results-headline =
  { $breachCount ->
      [one] This email appeared in 1 data breach.
     *[other] This email appeared in { $breachCount } data breaches.
  }

user-no-breaches-blurb = We’ll alert you if this email address appears in a new breach.

guest-no-breaches-blurb = 
  To see if this email appears in sensitive breaches, create a {-brand-fxa}. 
  We’ll also alert you if this address appears in new data breaches.

user-one-breach-blurb = This breach exposed the following personal info.

user-fb-compromised-blurb =
  { $breachCount ->
      [one] Your email also appeared in { $breachCount } other breach.
     *[other] Your email also appeared in { $breachCount } other breaches.
  }

user-generic-fb-compromised-blurb =
  { $breachCount ->
      [one] This email also appeared in { $breachCount } other breach. 
     *[other] This email also appeared in { $breachCount } other breaches.
  }

user-fb-compromised-single = 
  This breach exposed the following personal info. If you haven’t already, 
  change your passwords.
user-generic-fb-compromised-single = This breach exposed the following personal info.

have-an-account = Already have an account?

fxa-pwt-section-blurb =
  Passwords protect all the personal information in your online accounts. And 
  hackers rely on bad habits, like using the same password everywhere or using 
  common phrases (@p@ssw0rd, anyone?) so that if they hack one account, they 
  can hack many.

fxa-pwt-summary-2 =
  Short, single-word passwords are easy for hackers to guess. 
  Use at least two words and a combination of letters, digits, and special characters.

fxa-pwt-summary-4 =
  Password managers like 1Password, LastPass, Dashlane, and Bitwarden store your 
  passwords and fill them in to websites for you. They’ll even help you make strong passwords.

fxa-pwt-summary-6 =
  Data breaches are on the rise. If your personal info appears in a new data breach, 
  {-product-name} sends you an alert — so you can take action and protect your accounts. 

fxa-what-to-do-blurb-1 =
  If you can’t log in, contact the website to ask how to update it. 
  See an account you don’t recognize? Your data could have been sold 
  or redistributed. This could also be an account you forgot you 
  created or a company that changed names.

fxa-what-to-do-subhead-2 = Stop using the exposed password, and change it everywhere you’ve used it.
fxa-wtd-blurb-2 =
  Hackers may try to use that same password and your email to get in to other accounts.  
  Create a different and unique password for every account, especially for your bank account, 
  email, and other websites where you save personal information.

fxa-what-to-do-blurb-3 = 
  Most breaches only expose emails and passwords, but some do include sensitive financial information. 
  If your bank account or credit card numbers were exposed, alert your bank to possible fraud. 
  Monitor statements for charges you don’t recognize.

fxa-what-to-do-subhead-4 = Get help remembering all your passwords and keeping them safe.
fxa-what-to-do-blurb-4 =
  Password managers like 1Password, LastPass, Dashlane, and Bitwarden store your 
  passwords securely and fill them into websites for you. Use a password manager 
  on your phone and computer so you don’t have to remember them all.


# Alerts is a noun
sign-up-for-alerts = Sign up for Alerts

sign-up-for-fxa-alerts = Sign up for {-product-name} alerts.
create-free-account =
  Create a free {-brand-fxa} for your full report of past breaches, new breach 
  alerts, and info about other {-brand-Mozilla} services.

get-your-report-and-sign-up = Get your report and sign up for alerts.

# Link title
frequently-asked-questions = Frequently Asked Questions


faq = Frequently Asked Questions
about-firefox-monitor = About {-product-name}
mozilla-dot-org = Mozilla.org
terms-and-privacy-v2 = Terms & Privacy

preferences = Preferences

# Link title.
home = Home

# Link title
breaches = Breaches

# Link title
security-tips = Security Tips

fxa-account = {-brand-fxa}


# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = Open {-brand-fxa} navigation

# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach= LATEST BREACH ADDED

breach-added = Breach reported:
breach-discovered = Breach discovered:

# Link title
more-about-this-breach = More about this breach

take-control = Take back control of your personal data.
cant-stop-hackers = You can’t stop hackers from hacking. But you can avoid bad habits that make their work easy.
read-more-tips = Read More Security Tips

how-hackers-work = Understand how hackers work

monitor-your-online-accounts = Sign up for breach monitoring with a {-brand-fxa}
stay-alert = Stay alert to new breaches
if-your-info = If your information surfaces in a new data breach, we’ll send you an alert.
search-all-emails = Search all your email addresses for breaches and get alerts about new threats.
monitor-several-emails = Monitor several emails
take-action = Take action to protect your accounts
keep-your-data-safe = Find out what you need to do to keep your data safe from cyber criminals.

website-breach = Website Breach
sensitive-breach = Sensitive Website Breach
data-aggregator-breach = Data Aggregator Breach
unverified-breach = Unverified Breach
spam-list-breach = Spam List Breach

website-breach-plural = Website Breaches
sensitive-breach-plural = Sensitive Breaches
data-aggregator-breach-plural = Data Aggregator Breaches
unverified-breach-plural = Unverified Breaches
spam-list-breach-plural = Spam List Breaches

what-data = What data was compromised:


sensitive-sites = How does {-product-name} treat sensitive sites?
sensitive-sites-copy = {-product-name} only reveals accounts associated with these 
  types of breaches after an email address has been verified. This means you’re the 
  only person who can see if your information was in this breach (unless someone 
  else has access to your email account.)

delayed-reporting-headline = Why did it take so long to report this breach?
delayed-reporting-copy = It can sometimes take months or years for credentials exposed 
  in a data breach to appear on the dark web. Breaches get added to our database as 
  soon as they have been discovered and verified. 


about-fxm-headline = About {-product-name}
about-fxm-blurb = {-product-name} warns if your online accounts were involved in a 
  data breach. Find out if you’ve been in a data breach, get alerts about new breaches, 
  and take steps to protect your online accounts. {-product-name} is a service 
  is provided by {-brand-Mozilla}.

fxm-warns-you = {-product-name} warns you if your email address has been exposed 
  in an online data breach. See if your information has been exposed, learn how 
  to better protect your online accounts, and get alerted if your email address 
  appears in a new breach.


## How FXM Works
how-fxm-works = How {-product-name} works

how-fxm-1-headline = Conduct a basic search
how-fxm-1-blurb = Search for your email address in public data breaches going 
  back to 2007. This basic search will surface most data breaches, but not 
  ones that contain sensitive personal information.

how-fxm-2-headline = Sign up for breach monitoring
how-fxm-2-blurb = Create a {-brand-fxa} to monitor your email for ongoing breaches. 
  Once you’ve verified your email, you’ll also receive a full report of past breaches 
  including sensitive breaches. 

how-fxm-3-headline = Get notifications in your browser
how-fxm-3-blurb = If you use {-brand-name}, you’ll receive a notification if you visit a 
  site that’s been breached. Find out right away if you’ve been in the breach and 
  what you can do about it.


wtd-after-website = What to do after a website breach
wtd-after-data-agg = What to do after a data aggregator breach

what-is-data-agg = What is a data aggregator?
what-is-data-agg-blurb = Data aggregators, or data brokers, collect information from public 
  records and buy it from other companies. They compile this data to sell it to companies 
  for marketing purposes. Victims of these breaches are less likely to experience financial 
  fraud, but hackers could use this data to impersonate or profile them.

protect-your-privacy = Protect your online privacy
no-pw-to-change = Unlike a website breach, there’s no password to change.
link-steps-to-protect = Steps to take to protect your identity online

avoid-personal-info = Avoid using personal info in passwords
avoid-personal-info-blurb = It’s easy to find birthdays, addresses, and family member names online. Keep it out of your passwords.

## What to do after data breach tips

change-pw = Change your password
even-for-old = Even for old accounts, it’s important to update your password.

make-new-pw-unique = Make the new password different and unique
strength-of-your-pw = The strength of your passwords directly impacts your online security.
create-strong-passwords = How to create strong passwords

stop-reusing-pw = Stop reusing the same passwords
create-unique-pw = Create unique passwords and save them somewhere safe, like a password manager.
five-myths = 5 myths about password managers

show-all-breaches = Show All Breaches

create-a-fxa = Create a {-brand-fxa} for your full report of breaches and to get alerts.

feat-security-tips = Security tips to protect your accounts
feat-sensitive = Advanced search in sensitive breaches
feat-enroll-multiple = Enroll multiple emails in breach monitoring

sign-up-for-fxa = Sign up for a {-brand-fxa}


appears-in-x-breaches =
  { $breachCount ->
        [one] Appears in { $breachCount } known breach.
       *[other] appears in { $breachCount } known breaches.
  }


see-if-breached = See if you’ve been in an online data breach.
check-for-breaches = Check for breaches.
find-out-what-hackers-know = Find out what hackers already know about you. Learn how to stay a step ahead of them.
search-for-your-email = Search for your email address in public data breaches back to 2007.

back-to-top = Back to Top

comm-opt-0 = Email me if one of my email addreseses below appears in a data breach.
comm-opt-1 = Send all breach alerts to { $primaryEmail }.

stop-monitoring-this = Stop monitoring this email.
resend-verification = Resend verification email

add-new-email = Add a new email address
send-verification = Send Verification Link
global-communication = Global communication
breach-summary = Breach Summary

show-breaches-for-this-email = Show all breaches for this email.

link-change-primary = Change primary email address

remove-fxm = Remove {-product-name}
remove-fxm-blurb = Turn off {-product-name} alerts. Your {-brand-fxa} will remain active, and you may receive 
  other account-related communications.


manage-email-addresses = Manage Email Addresses

latest-breach-link = See if you were in this breach

welcome-back = Welcome back, { $userName }!
welcome-user = Welcome, { $userName }!


breach-alert-subject = {-product-name} found your email in a new data breach.

your-info-was-discovered-headline = Your information was discovered in a new data breach.

your-info-was-discovered-blurb = You’re signed up to receive {-product-name} alerts 
  when your email appears in a data breach. Here’s what we know about this breach.

what-to-do-after-breach = What to do after a data breach

ba-next-step-1 = Change your password to a strong, unique password.
ba-next-step-blurb-1 =
  A strong password uses a combination of upper and lowercase letters, 
  special characters, and numbers. It doesn’t contain personal info like 
  your address, birthday, or family names.

ba-next-step-2 = Stop using that exposed password entirely.
ba-next-step-blurb-2 =
  Cyber criminals could find your password on the dark web and use it 
  to log in to your other accounts. The best way to protect your accounts 
  is to use unique passwords for each one.


ba-next-step-3 = Get help creating better passwords and keeping them safe.
ba-next-step-blurb-3 =
  Use a password manager to create strong, unique passwords. Password managers securely store all your 
  logins so you can access them across all your devices.

faq1 = I don’t recognize this company or website. Why am I in this breach?
faq2 = Why did it take so long to notify me of this breach?
faq3 = How do I know this is a legitimate email from {-product-name}?


new-breaches-found =
  { $breachCount ->
     *[one] { $breachCount } NEW BREACH FOUND
      [other] { $breachCount } NEW BREACHES FOUND
  }

sign-up-headline-1 = Get ongoing alerts with a {-brand-fxa}.
sign-up-for-alerts = Sign up for Alerts
account-not-required = {-brand-name} browser not required for a {-brand-fxa}. You may receive info about {-brand-Mozilla} services.


get-alerted = Get alerted about new breaches.

was-your-info-exposed = Was your info exposed in the { $breachName } data breach?
find-out-if = Find out if your data was exposed in this breach.

fb-not-comp = This email did not appear in the { $breachName } breach.
fb-comp = This email appeared in { $breachCount } known data breaches, including { $breachName }. 
fb-comp-only = This email appeared in the { $breachCount } breach.

other-breaches-found = However, it did appear in 
  { $breachCount ->
    [one] { $breachCount } other breach.
   *[two] { $breachCount } other breaches. 
  }

fb-comp-and-others = This email appeared in { $breachCount } known data breaches, including { $breachName }.
no-other-breaches-found = No other breaches found from a basic search.

no-results-blurb = Sorry, that breach is not in our database.
all-breaches-headline = All breaches in {-product-name}
search-breaches = Search Breaches

# Tells the user which breach types are currently being displayed. In page, it would look like "Showing: All Breaches"
currently-showing = Showing:
all-breaches= All Breaches


## Updated error messages

error-bot-headline = Searches temporarily suspended
error-bot-blurb = We’re worried you might be a bot because you searched 
  several email addresses in a short time period. For now, you’re blocked 
  from new searches. You can try again later.

error-csrf-headline = Session timed out
error-csrf-blurb = Select your browser’s back button, reload the page, and try again.

error-invalid-unsub = How to unsubscribe from {-product-name} alerts
error-invalid-unsub-blurb = You’ll need to unsubscribe from one of the 
  emails {-product-name} sent you. Check your inbox for messages from 
  {-brand-team-email}. Select the unsubscribe link at the bottom of the email.


login-link-pre = Have an account?
login-link = Log in


# This string follows a large numeral that indicates the total number of email address a user has signed up for monitoring.
# For instance, "7 Email addresses being monitored"
email-addresses-being-monitored = 
  { $emails ->
   *[one] Email address being monitored
    [other] Email addresses being monitored
  }

# This string follows a large numeral that indicates the total number of a breaches that included the user's information.
# For instance, "1 Data breach has exposed your information"
data-breaches-exposed =
  { $breaches ->
    [one] Data breach has exposed your information
   *[other] Data breaches have exposed your information
  }


# This string appears after a large numeral indicating the user's total number of breached passwords.
# For instance, "9 Passwords exposed across all breaches"
passwords-exposed = 
  { $passwords ->
    [one] Password exposed across all breaches
   *[other] Passwords exposed across all breaches
  }


security-tips-headline = Security tips to protect yourself from hackers.
steps-to-take = Steps to take to protect your online identity
take-further-steps = Take further steps to protect your identity


see-additional-breaches = See Additional Breaches
