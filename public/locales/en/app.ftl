-product-name = Firefox Monitor
-brand-name = Firefox
-brand-Quantum = Firefox Quantum
-brand-Mozilla = Mozilla
-brand-HIBP = HIBP

layout-Firefox = {-brand-name}
# noun
layout-support = Support
layout-feedback = Give Feedback
layout-terms = Terms and Privacy

error-not-subscribed = This email address is not subscribed to {-product-name}.
error-hibp-throttled = Too many connections to HIBP.
error-hibp-connect = Error connecting to HIBP.
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
pwt-section-blurb =  Your passwords protect more than your accounts, they protect every bit of personal information that resides in them. And hackers rely on bad habits, like using the same password everywhere or using common phrases (p@ssw0rd, anyone?), so that if they hack one account, they can hack many. Here are six ways to protect your accounts.

pwt-headline-1 = Use a Different Password<br />for Every Account
pwt-headline-2 = Create Strong<br />Passwords
pwt-headline-3 = Treat Security Questions<br>Like Extra Passwords
pwt-headline-4 = Use a Password<br>Manager
pwt-headline-5 = Use Two-Factor<br>Authentication
pwt-headline-6 = Sign Up for Alerts From<br>{-product-name}

pwt-summary-1 = You can't prevent a data breach, but you can limit your exposure by always using different passwords for different websites.
pwt-summary-2 = Hackers try to steal passwords by using lists of common passwords and by guessing. The longer and more random your password is, the harder it will be to steal.
pwt-summary-3 = Websites don’t check that your answers are accurate, just that they match every time. So create long, random answers and store them somewhere safe.
pwt-summary-4 = Password managers like 1Password, LastPass, or Dashlane can generate strong passwords for you, remember them for you, and fill them into websites so you don't have to type them in.
pwt-summary-5 = 2FA offers an extra layer of protection by requiring you to enter additional information (like a code sent via text) before you can access your accounts.
pwt-summary-6 = We'll let you know if your account information is compromised in a data breach or exposed to hackers in some other way.

landing-headline = Your right to be safe from hackers starts here.
landing-blurb = {-product-name} arms you with tools to keep your personal information safe. Find out what hackers already know about you and learn how to stay a step ahead of them.

scan-label = Try it out. Enter your email for a basic scan.
scan-placeholder = Enter Email address
scan-privacy = Your email will not be stored.
scan-submit = Scan
scan-another-email = Scan Another Email Address
scan-featuredbreach-label = Find out if your <span class="featured-breach-title"> --- </span> account was compromised.
scan-error = Must be a valid email.

signup-banner-headline = Stay safe with {-product-name} protection.
signup-banner-blurb = Sign up for {-product-name}. You’ll get a full report on your compromised accounts and notifications any time your accounts appear in new data breaches.
signup-button = Sign up

download-firefox-bar-blurb = {-product-name} is brought to you by the all-new {-brand-name}.
download-firefox-bar-link = Download {-brand-name} now

download-firefox-banner-blurb = Take control of your browser
download-firefox-banner-button = Download {-brand-name}

signup-modal-headline = Sign Up for {-product-name}
signup-modal-blurb = Sign up for your full report, alerts when new breaches happen, and safety tips from {-product-name}.
signup-modal-terms-and-privacy = Terms and Privacy
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

no-breaches-headline = So far, so good
no-breaches-blurb = Your account did not appear in our basic scan. That's good news, but data breaches can happen any time and there is still more you can do. Subscribe to {-product-name} for a full report, alerts when new breaches happen, and tips on protecting your passwords.

found-breaches-headline = This might be a problem.
found-breaches-singular-blurb = Your email address was compromised in the following breach.
found-breaches-plural-blurb = Your email address was compromised in the following breaches.

show-more-breaches = Show More

wtd-section-headline = What To Do
wtd-1 = Change your password on these sites and anywhere else you've used the same password.
wtd-2 = Make your answers to security questions just as strong as your passwords.
wtd-3 = Use password managers like 1Password, LastPass, or Dashlane to generate strong passwords, remember them, and fill them into websites so you don't have to.
wtd-4 = Subscribe to alerts from {-product-name} to learn sooner about your compromised accounts.


featured-breach-only = Your email address appears in the <span class="featured-breach-title"> --- </span> breach, but does not appear in any other known breaches.

featured-breach-results = Your email address appears in the { $featuredBreachTitle } breach, { $breachCount ->
  [1] one other breach.
  [2] two other breaches.
  [3] three other breaches.
  [4] four other breaches.
  [5] five other breaches.
  [6] six other breaches.
  [7] seven other breaches.
  [8] eight other breaches.
  [9] nine other breaches.
  [10] ten other breaches.
  [other] { $breachCount } other breaches.
}

featured-breach-other-breaches = Your email address did not appear in the <span class="featured-breach-title"> --- </span>, but did appear in other breaches.

# breach-date = the calendar date a particular data theft occurred. 
breach-date = Breach date

# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Compromised accounts

# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Compromised data 


confirmed = Confirmed!<br />You're Subscribed!
confirmed-blurb = {-product-name} will email you a full report shortly, and will send an email alert if your account appears in a new reported breach.
confirmed-social-blurb = If you've been breached, chances are your friends, family, or online connections have been too. Let them know about {-product-name}.

unsub-headline = Unsubscribe from {-product-name}
unsub-blurb = This will remove your email from the {-product-name} list and you will no longer receive alerts when new breaches are announced. 
unsub-button = Unsubscribe

unsub-survey-headline = You are no longer subscribed.
unsub-survey-blurb = Your email is unsubscribed from {-product-name}. Thank you for using this service. Will you take a moment to answer one question about your experience?
unsub-survey-form-label = Why are you unsubscribing from {-product-name} alerts?

unsub-reason-1 = I think that alerts don't make my data safer
unsub-reason-2 = I get too many emails from {-product-name}
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
copyright-info = Portions of this content are <span class='copyright-symbol'>&copy;</span> 1998-2018 by individual mozilla.org contributors. <br />Content available under a  <a href="https://www.mozilla.org/foundation/licensing/website-content/" target="_blank" rel="noopener">Creative Commons license</a>.


hibp-attribution = Breach data provided by


## Breach Data Classes

account-balances = Account balances
address-book-contacts = Address book contacts
age-groups = Age groups
ages = Ages
apps-installed-on-devices = Apps installed on devices
astrological-signs = Astrological signs
audio-recordings = Audio recordings
auth-tokens = Auth tokens
avatars = Avatars
bank-account-numbers = Bank account numbers
beauty-ratings = Beauty ratings
biometric-data = Biometric data
browser-user-agent-details = Browser user agent details
browsing-histories = Browsing histories
buying-preferences = Buying preferences
car-ownership-statuses = Car ownership statuses
career-levels = Career levels
cellular-network-names = Cellular network names
charitable-donations = Charitable donations
chat-logs = Chat logs
credit-card-cvv = Credit card CVV
credit-cards = Credit cards
credit-status-information = Credit status information
customer-feedback = Customer feedback
customer-interactions = Customer interactions
dates-of-birth = Dates of birth
deceased-date = Deceased date
deceased-statuses = Deceased statuses
device-information = Device information
device-usage-tracking-data = Device usage tracking data
drinking-habits = Drinking habits
drug-habits = Drug habits
eating-habits = Eating habits
education-levels = Education levels
email-addresses = Email addresses
email-messages = Email messages
employers = Employers
ethnicities = Ethnicities
family-members'-names = Family members' names
family-plans = Family plans
family-structure = Family structure
financial-investments = Financial investments
financial-transactions = Financial transactions
fitness-levels = Fitness levels
genders = Genders
geographic-locations = Geographic locations
government-issued-ids = Government issued IDs
health-insurance-information = Health insurance information
historical-passwords = Historical passwords
home-loan-information = Home loan information
home-ownership-statuses = Home ownership statuses
homepage-urls = Homepage URLs
imei-numbers = IMEI numbers
imsi-numbers = IMSI numbers
income-levels = Income levels
instant-messenger-identities = Instant messenger identities
ip-addresses = IP addresses
job-titles = Job titles
mac-addresses = MAC addresses
marital-statuses = Marital statuses
names = Names
nationalities = Nationalities
net-worths = Net worths
nicknames = Nicknames
occupations = Occupations
parenting-plans = Parenting plans
partial-credit-card-data = Partial credit card data
passport-numbers = Passport numbers
password-hints = Password hints
passwords = Passwords
payment-histories = Payment histories
payment-methods = Payment methods
personal-descriptions = Personal descriptions
personal-health-data = Personal health data
personal-interests = Personal interests
phone-numbers = Phone numbers
photos = Photos
physical-addresses = Physical addresses
physical-attributes = Physical attributes
pins = PINs
political-donations = Political donations
political-views = Political views
private-messages = Private messages
professional-skills = Professional skills
profile-photos = Profile photos
purchases = Purchases
purchasing-habits = Purchasing habits
races = Races
recovery-email-addresses = Recovery email addresses
relationship-statuses = Relationship statuses
religions = Religions
reward-program-balances = Reward program balances
salutations = Salutations
school-grades-(class-levels) = School grades (class levels)
security-questions-and-answers = Security questions and answers
sexual-fetishes = Sexual fetishes
sexual-orientations = Sexual orientations
smoking-habits = Smoking habits
sms-messages = SMS messages
social-connections = Social connections
social-media-profiles = Social media profiles
spoken-languages = Spoken languages
support-tickets = Support tickets
survey-results = Survey results
time-zones = Time zones
travel-habits = Travel habits
user-statuses = User statuses
user-website-urls = User website URLs
usernames = Usernames
utility-bills = Utility bills
vehicle-details = Vehicle details
website-activity = Website activity
work-habits = Work habits
years-of-birth = Years of birth
years-of-professional-experience = Years of professional experience
