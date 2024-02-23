# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Strings for the main app


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
-brand-name = Firefox
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
-brand-fxa = Firefox Account
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-send = Firefox Send
-brand-fpn = Firefox Private Network

##

GitHub-link-title = GitHub
error-scan-page-token = You tried to scan too many email addresses in a short time period. For security reasons, we’ve temporarily blocked you from new searches. You’ll be able to try again later.
error-could-not-add-email = Could not add email address to database.
error-not-subscribed = This email address is not subscribed to { -product-name }.
error-hibp-throttled = Too many connections to { -brand-HIBP }.
error-hibp-connect = Error connecting to { -brand-HIBP }.
error-hibp-load-breaches = Could not load breaches.
error-must-be-signed-in = You must be signed in to your { -brand-fxa }.
error-to-finish-verifying = To finish verifying this email for { -product-name }, you must be signed in under your primary account email.
home-title = { -product-name }
home-not-found = Page not found.
oauth-invalid-session = Invalid session
scan-title = { -product-name } : Scan Results
user-add-invalid-email = Invalid Email
user-add-too-many-emails = You are monitoring the maximum number of email addresses.
user-add-email-verify-subject = Verify your subscription to { -product-name }.
user-add-duplicate-email = This email has already been added to { -product-name }.
# Variables:
#   $preferencesLink (String) - Link to preferences
#   $userEmail (String) - User email address
user-add-duplicate-email-part-2 = Visit your { $preferencesLink } to check the status of { $userEmail }.
user-add-verification-email-just-sent = Another verification email can’t be sent this quickly. Please try again later.
user-add-unknown-error = Something went wrong adding another email address. Please try again later.
user-delete-unknown-error = Something went wrong removing an email address. Please try again later.
error-headline = Error
user-verify-token-error = Verification token is required.
user-verify-email-report-subject = Your { -product-name } report
user-unsubscribe-token-error = Unsubscribing requires a token.
user-unsubscribe-token-email-error = Unsubscribing requires a token and emailHash.
user-unsubscribe-title = { -product-name } : Unsubscribe
pwt-section-headline = Stronger Passwords = Better Protection
landing-headline = Your right to be safe from hackers starts here.
scan-placeholder = Enter Email Address
scan-submit = Search Your Email
scan-error = Must be a valid email.
download-firefox-banner-button = Download { -brand-name }
# Appears after Firefox Monitor has sent a verification email to a new user.
signup-modal-sent = Sent!
sign-up = Sign Up
form-signup-error = Must be a valid email
# breach-date = the calendar date a particular data theft occurred.
breach-date = Breach date:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Compromised accounts:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Compromised data:
unsub-headline = Unsubscribe from { -product-name-nowrap }
unsub-blurb = This will remove your email from the { -product-name-nowrap } list and you will no longer receive alerts when new breaches are announced.
unsub-button = Unsubscribe
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Breach data provided by { $hibp-link }
share-twitter = Most people have about 100 online accounts. Have any of yours been exposed in a data breach? Find out.
share-facebook-headline = Find out if you’ve been part of a data breach
share-facebook-blurb = Have your online accounts been exposed in a data breach?
og-site-description = Find out if you’ve been part of a data breach with { -product-name }. Sign up for alerts about future breaches and get tips to keep your accounts safe.
show-all = Show all
fxa-scan-another-email = Want to check another email?
sign-out = Sign Out
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Manage { -brand-fxa }
have-an-account = Already have an account?
fxa-pwt-summary-2 =
    Short, single-word passwords are easy for hackers to guess. 
    Use at least two words and a combination of letters, digits, and special characters.
fxa-pwt-summary-4 =
    Password managers like 1Password, LastPass, Dashlane, and Bitwarden store your 
    passwords and fill them in to websites for you. They’ll even help you make strong passwords.
fxa-pwt-summary-6 =
    Data breaches are on the rise. If your personal info appears in a new data breach, 
    { -product-name } sends you an alert — so you can take action and protect your accounts.
fxa-what-to-do-blurb-1 =
    If you can’t log in, contact the web site to ask how to update it. 
    See an account you don’t recognise? Your data could have been sold 
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
    Monitor statements for charges you don’t recognise.
fxa-what-to-do-subhead-4 = Get help remembering all your passwords and keeping them safe.
fxa-what-to-do-blurb-4 =
    Password managers like 1Password, LastPass, Dashlane, and Bitwarden store your 
    passwords securely and fill them into web sites for you. Use a password manager 
    on your phone and computer so you don’t have to remember them all.
# Alerts is a noun
sign-up-for-alerts = Sign up for Alerts
# Link title
frequently-asked-questions = Frequently Asked Questions
about-firefox-monitor = About { -product-name }
# Link title
preferences = Preferences
# Link title
home = Home
# Link title
security-tips = Security Tips
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = Open { -brand-fxa } navigation
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = LATEST BREACH ADDED
# Link title
more-about-this-breach = More about this breach
take-control = Take back control of your personal data.
cant-stop-hackers = You can’t stop hackers from hacking. But you can avoid bad habits that make their work easy.
read-more-tips = Read More Security Tips
how-hackers-work = Understand how hackers work
monitor-your-online-accounts = Sign up for breach monitoring with a { -brand-fxa }.
stay-alert = Stay alert to new breaches
if-your-info = If your information surfaces in a new data breach, we’ll send you an alert.
search-all-emails = Search all your email addresses for breaches and get alerts about new threats.
monitor-several-emails = Monitor several emails
take-action = Take action to protect your accounts
keep-your-data-safe = Find out what you need to do to keep your data safe from cyber criminals.
website-breach = Web Site Breach
sensitive-breach = Sensitive Web Site Breach
data-aggregator-breach = Data Aggregator Breach
unverified-breach = Unverified Breach
spam-list-breach = Spam List Breach
website-breach-plural = Web Site Breaches
sensitive-breach-plural = Sensitive Breaches
data-aggregator-breach-plural = Data Aggregator Breaches
unverified-breach-plural = Unverified Breaches
spam-list-breach-plural = Spam List Breaches
what-data = What data was compromised:
sensitive-sites = How does { -product-name } treat sensitive sites?
sensitive-sites-copy =
    { -product-name } only reveals accounts associated with these 
    types of breaches after an email address has been verified. This means you’re the 
    only person who can see if your information was in this breach (unless someone 
    else has access to your email account).
delayed-reporting-headline = Why did it take so long to report this breach?
delayed-reporting-copy =
    It can sometimes take months or years for credentials exposed 
    in a data breach to appear on the dark web. Breaches get added to our database as 
    soon as they have been discovered and verified.
about-fxm-headline = About { -product-name }
about-fxm-blurb =
    { -product-name } warns if your online accounts were involved in a 
    data breach. Find out if you’ve been in a data breach, get alerts about new breaches, 
    and take steps to protect your online accounts. { -product-name } is provided 
    by { -brand-Mozilla }.
fxm-warns-you =
    { -product-name } warns you if your email address has been exposed 
    in an online data breach. See if your information has been exposed, learn how 
    to better protect your online accounts, and get alerted if your email address 
    appears in a new breach.
# How Firefox Monitor works
how-fxm-works = How { -product-name } works
how-fxm-1-headline = Conduct a basic search
how-fxm-1-blurb =
    Search for your email address in public data breaches going 
    back to 2007. This basic search will surface most data breaches, but not 
    ones that contain sensitive personal information.
how-fxm-2-headline = Sign up for breach monitoring
how-fxm-2-blurb =
    Create a { -brand-fxa } to monitor your email for ongoing breaches. 
    Once you’ve verified your email, you’ll also receive a full report of past breaches, 
    including sensitive breaches.
how-fxm-3-headline = Get notifications in your browser
how-fxm-3-blurb =
    If you use { -brand-name }, you’ll receive a notification if you visit a 
    site that’s been breached. Find out right away if you were part of that breach 
    and what you can do about it.
wtd-after-website = What to do after a web site breach:
wtd-after-data-agg = What to do after a data aggregator breach:
what-is-data-agg = What is a data aggregator?
what-is-data-agg-blurb =
    Data aggregators, or data brokers, collect information from public 
    records and buy it from other companies. They compile this data to sell it to companies 
    for marketing purposes. Victims of these breaches are less likely to experience financial 
    fraud, but hackers could use this data to impersonate or profile them.
protect-your-privacy = Protect your online privacy
no-pw-to-change = Unlike a web site breach, there’s no password to change.
avoid-personal-info = Avoid using personal info in passwords
avoid-personal-info-blurb = It’s easy to find birthdays, addresses, and family member names online. Keep these words out of your passwords.

## What to do after data breach tips

change-pw = Change your password
change-pw-site = Change password for this site
even-for-old = Even for old accounts, it’s important to update your password.
make-new-pw-unique = Make the new password different and unique
strength-of-your-pw = The strength of your passwords directly impacts your online security.
create-strong-passwords = How to create strong passwords
stop-reusing-pw = Stop reusing the same passwords
create-unique-pw = Create unique passwords and save them somewhere safe, like a password manager.
five-myths = 5 myths about password managers
create-a-fxa = Create a { -brand-fxa } for your full report of breaches and to get alerts.
feat-security-tips = Security tips to protect your accounts
feat-sensitive = Advanced search in sensitive breaches
feat-enroll-multiple = Enroll multiple emails in breach monitoring
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (Integer) - Number of breaches
appears-in-x-breaches =
    { $breachCount ->
        [one] Appears in { $breachCount } known breach.
       *[other] Appears in { $breachCount } known breaches.
    }
check-for-breaches = Check for Breaches
find-out-what-hackers-know = Find out what hackers already know about you. Learn how to stay a step ahead of them.
get-email-alerts = Stay safe: Get email alerts when your information appears in a known breach
search-for-your-email = Search for your email address in public data breaches going back to 2007.
back-to-top = Back to Top
comm-opt-0 = Email me if one of my email addresses below appears in a data breach.
# Variables:
#   $primaryEmail (String) - User primary email address
comm-opt-1 = Send all breach alerts to { $primaryEmail }.
stop-monitoring-this = Stop monitoring this email.
resend-verification = Resend verification email
add-new-email = Add a new email address
send-verification = Send Verification Link
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = Breach Summary
show-breaches-for-this-email = Show all breaches for this email.
link-change-primary = Change Primary Email Address
remove-fxm = Remove { -product-name }
remove-fxm-blurb =
    Turn off { -product-name } alerts. Your { -brand-fxa } will remain active, and you may receive 
    other account-related communications.
# Button title
manage-email-addresses = Manage Email Addresses
# Link title
latest-breach-link = See if you were in this breach

## Variables:
##   $userName (String) - Username

welcome-back = Welcome back, { $userName }!
welcome-user = Welcome, { $userName }!

##

breach-alert-subject = { -product-name } found your email in a new data breach.
your-info-was-discovered-headline = Your information was discovered in a new data breach.
your-info-was-discovered-blurb =
    You’re signed up to receive { -product-name } alerts 
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
faq1 = I don’t recognise this company or web site. Why am I in this breach?
faq2 = Why did it take so long to notify me of this breach?
faq3 = How do I know this is a legitimate email from { -product-name }?
# Variables:
#   $breachCount (Integer) - Number of breaches
new-breaches-found =
    { $breachCount ->
        [one] { $breachCount } NEW BREACH FOUND
       *[other] { $breachCount } NEW BREACHES FOUND
    }
sign-up-headline-1 = Get ongoing alerts with a { -brand-fxa }.
account-not-required = { -brand-name } browser not required for a { -brand-fxa }. You may receive info about { -brand-Mozilla } services.

## Variables:
##   $breachName (String) - Number of the breach

was-your-info-exposed = Was your info exposed in the { $breachName } data breach?
fb-not-comp = This email did not appear in the { $breachName } breach.
# Variables:
#   $breachCount (Integer) - Number of breaches
other-breaches-found =
    { $breachCount ->
        [one] However, it did appear in { $breachCount } other breach.
       *[other] However, it did appear in { $breachCount } other breaches.
    }
fb-comp-only = This email appeared in the { $breachName } breach.
# Variables:
#   $breachCount (Integer) - Number of breaches
fb-comp-and-others =
    { $breachCount ->
        [one] This email appeared in { $breachCount } known data breach, including { $breachName }.
       *[other] This email appeared in { $breachCount } known data breaches, including { $breachName }.
    }

##

no-other-breaches-found = No other breaches found from a basic search.
no-results-blurb = Sorry, that breach is not in our database.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-note =
    <span>Your email doesn’t appear in this leak,
    but your phone number may still be vulnerable.</span> Some of the accounts
    compromised in the Facebook leak included phone numbers and other
    personal information but not email addresses. If you have ever signed up
    for a Facebook account — even if you don’t use it now — we recommend you
    take these steps to protect yourself
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-1-headline = <span>Set your information to “Only me” or other non-public setting in <a>your Facebook profile</a>.</span>
facebook-breach-what-to-do-1-copy =
    During this leak, hackers took profile 
    information that was set as “open to the public” or “shared with friends.”
    This information can be combined with other data to access even more of
    your personal information and accounts.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-2-headline =
    <span>Change the password, PIN, or other security credentials on your <a>mobile
    phone carrier accounts</a> to prevent SIM-swapping</span>.
facebook-breach-what-to-do-2-copy =
    SIM swapping, which is also called SIM-jacking,
    is when a hacker uses phone numbers, date of birth and other data to take over
    a person’s mobile phone number and then hack into their email, social media and even financial accounts.
facebook-breach-what-to-do-3 = See all of the recommendations on our Facebook leak page
# "Appears in-page as: Showing: All Breaches"
currently-showing = Showing:

## Updated error messages

error-bot-headline = Searches temporarily suspended
error-bot-blurb =
    We’re worried you might be a bot because you searched 
    several email addresses in a short time period. For now, you’re blocked 
    from new searches. You can try again later.
error-csrf-headline = Session timed out
error-csrf-blurb = Select your browser’s back button, reload the page, and try again.
error-invalid-unsub = How to unsubscribe from { -product-name } alerts
error-invalid-unsub-blurb =
    You’ll need to unsubscribe from one of the 
    emails { -product-name } sent you. Check your inbox for messages from 
    { -brand-team-email }. Select the unsubscribe link at the bottom of the email.
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
        [one] Email address being monitored
       *[other] Email addresses being monitored
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] Password exposed across all breaches
       *[other] Passwords exposed across all breaches
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] Known data breach has exposed your info
       *[other] Known data breaches have exposed your info
    }
# Button
see-additional-breaches = See Additional Breaches
# Variables:
#   $breachCount (Integer) - Number of breaches
scan-results-known-breaches =
    { $breachCount ->
        [one] This email appeared in 1 known data breach.
       *[other] This email appeared in { $breachCount } known data breaches.
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
# Variables:
#   $userEmail (String) - User email address
results-for = Results for: { $userEmail }
other-monitored-emails = Other Monitored Emails
email-verification-required = Email Verification Required
fxa-primary-email = { -brand-fxa } Email - Primary
what-is-a-website-breach = What is a web site breach?
website-breach-blurb = A web site data breach happens when cyber criminals steal, copy, or expose personal information from online accounts. It’s usually a result of hackers finding a weak spot in the web site’s security. Breaches can also happen when account information gets leaked by accident.
security-tips-headline = Security tips to protect yourself from hackers
steps-to-protect = Steps to take to protect your online identity
take-further-steps = Take further steps to protect your identity
alert-about-new-breaches = Alert me about new breaches
see-if-youve-been-part = See if you’ve been part of an online data breach.
get-ongoing-breach-monitoring = Get ongoing breach monitoring for multiple email addresses.
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = Find Out
new-unsub-error = You’ll need to unsubscribe from one of the emails { -product-name } sent.
# Variables:
#   $breachCount (Integer) - Number of breaches
other-known-breaches-found =
    { $breachCount ->
        [one] However, it did appear in { $breachCount } other known breach.
       *[other] However, it did appear in { $breachCount } other known breaches.
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = Additional information, including:
# Title
email-addresses-title = Email Addresses
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Overview
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = On { $breachDate }, { $breachTitle } was breached. Once the breach was discovered and verified, it was added to our database on { $addedDate }.
# Title appearing on the Preferences dashboard.
monitor-preferences = { -product-short-name } Preferences
# When a user is signed in, this appears in the drop down menu
# and is followed by the user's primary Firefox Account email.
# Variables:
#   $userEmail (String) - User email address
signed-in-as = Signed in as: { $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = Filter by Category:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Menu
to-affected-email = Send breach alerts to the affected email address
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = There is a way to protect your privacy. Join { -brand-name }.
# Link title
learn-more-link = Learn more.
email-sent = Email Sent!
# Form title
want-to-add = Want to add another email?
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Verify the link sent to { $userEmail } to add it to { -product-name }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

email-verified = Email Successfully Verified!
# Variables:
#   $email (String) - User email address
email-added-to-subscription = We’ll alert you if { $email } appears in a data breach.
# This message is displayed after the user has verified their email address.
# { $nestedSignInLink } is replaced by a link, using sign-in-nested as text ("sign in" for English).
email-verified-view-dashboard = To see and manage all emails you’ve signed up for breach monitoring, { $nestedSignInLink }.
# This message is used as a text for the subscribe link in email-verified-view-dashboard
sign-in-nested = sign in

##

# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
# Variables:
#   $preferencesLink (String) - Link to preferences
manage-all-emails = Manage all email addresses in { $preferencesLink }.
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-alert-notifications = Breach Alert Notifications
# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Breach added:
how-hackers-work-desc = Protect your passwords from cyber criminals, since that’s what they care about most.
what-to-do-after-breach-desc = Lock down your accounts to keep your information out of the wrong hands.
create-strong-passwords-desc = Make your passwords strong, secure, and hard to guess.
steps-to-protect-desc = Understand the most common threats and know what to look out for.
five-myths-desc = Learn how to avoid bad password habits that make a hacker’s work easy.
take-further-steps-desc = Find out how to mitigate the risks of identity theft to prevent financial loss.
# This message appears after a user has successfully updated their communication settings.
changes-saved = Changes saved!
# Section headline
rec-section-headline = What to do for this breach
rec-section-subhead = We recommend you take these steps to keep your personal info safe and protect your digital identity.
# Section headline
rec-section-headline-no-pw = What to do to protect your personal info
rec-section-subhead-no-pw = Though passwords weren’t exposed in this breach, there are still steps you can take to better protect your personal info.
# Button
see-additional-recs = See Additional Recommendations

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".

# Variables:
#   $affectedEmail (String) - User email address
resolve-top-notification = { $affectedEmail } appeared in this breach. <a>What to do next</a>
# Variables:
#   $numAffectedEmails (Integer) - Number of affected email address
resolve-top-notification-plural =
    { $numAffectedEmails ->
       *[other] { $numAffectedEmails } of your email addresses appeared in this breach. <a>What to do next</a>
    }

##

marking-this-subhead = Marking this breach as resolved
# This string contains nested markup that is later used to style the text inside of it.
# Please do not modify or remove "<span>" and "</span>".
marking-this-body =
    <span>Once you’ve taken the steps you can to address this breach</span>,
    you can mark it as resolved. You can still access details about the breach 
    from your dashboard at any time.
mark-as-resolve-button = Mark as Resolved
marked-as-resolved-label = Marked as Resolved
undo-button = Undo
confirmation-1-subhead = Nice! You’ve just resolved your first breach.
confirmation-1-body = Keep up the momentum. Check your dashboard to see if there’s more to do.
confirmation-2-subhead = Take that, hackers!
confirmation-2-body = You’re taking important steps towards protecting your online accounts.
confirmation-3-subhead = Another one down. Nice work!
# This string contains nested markup that becomes a link later in the code.
# Please do not modify or remove "<a>" and "</a>".
confirmation-3-body = Is your new password unique, strong, and hard to guess? <a>Find out</a>
generic-confirmation-subhead = This breach has been marked as resolved
# Variables:
#   $numUnresolvedBreaches (Integer) - Number of resolved breaches
generic-confirmation-message =
    { $numUnresolvedBreaches ->
        [one] To see the remaining breach, go to your dashboard.
       *[other] To see all remaining breaches, go to your dashboard.
    }
return-to-breach-details-link = Return to breach details
go-to-dashboard-link = Go to Dashboard
# This string appears above a breach resolution progress bar and indicates
# the percentage of breaches a user has resolved. For instance, "27% complete".
# Variables:
#   $percentComplete (String) - Completion percentage
progress-percent-complete = { $percentComplete }% complete
# This string appears in the purple callouts at the top of the user dashboard and shows
# the total number of breaches a user has resolved. For instance, "5 Resolved".
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
num-resolved =
    { $numResolvedBreaches ->
       *[other] { $numResolvedBreaches } Resolved
    }
progress-intro-subhead = New in { -product-name }: Mark breaches as resolved
progress-intro-message =
    After reviewing the details about a breach and taking steps to protect 
    your personal info, you can mark breaches as resolved.
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
#   $numTotalBreaches (Integer) - Total number of breaches
progress-status =
    { $numTotalBreaches ->
       *[other] { $numResolvedBreaches } out of { $numTotalBreaches } breaches marked as resolved
    }
progress-complete = All known breaches have been marked as resolved

## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".

progress-message-1 =
    <span>You’re off to a great start!</span> Check out the remaining breaches to learn 
    what steps to take.
progress-message-2 =
    <span>Keep it up!</span> Small changes like updating passwords have a big impact on 
    keeping your personal info safe.
progress-message-3 = <span>Nice work resolving those breaches!</span> Keep it up. You’ve got a few more to go.
progress-message-4 = <span>Almost done!</span> You’re close to the finish line.
progress-complete-message =
    <span>Feels good, right?</span> If you want to keep going, this is a good time to 
    update other logins with stronger passwords.

##

resolve-this-breach-link = Resolve this breach
# This string appears in resolved breach cards and is followed by
# the date the user marked the breach as resolved.
marked-resolved = Marked resolved:
hide-resolved-button = Hide Resolved
show-resolved-button = Show Resolved
# Variables:
#   $numPasswords (Integer) - Number of exposed passwords
unresolved-passwords-exposed =
    { $numPasswords ->
        [one] Password exposed in unresolved breaches
       *[other] Passwords exposed in unresolved breaches
    }
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
known-data-breaches-resolved =
    { $numResolvedBreaches ->
        [one] Known data breach marked as resolved
       *[other] Known data breaches marked as resolved
    }
# A status indicator that appears in the top right corner of new breach cards
new-breach = New
mobile-promo-headline = Bring { -brand-name } to your phone and tablet
mobile-promo-body = Fast, private, and safe browsing everywhere you go. Find { -brand-name } in the Google Play and App Store.
mobile-promo-cta = Get { -brand-name } on Android and iOS
promo-lockwise-headline = Take your passwords everywhere
lockwise-promo-body = Keep track of your logins across all devices. Access them securely from your computer, phone, or tablet.
promo-lockwise-cta = Get { -brand-lockwise }
fpn-promo-headline = Mask your location from web sites and trackers
promo-fpn-body = { -brand-fpn } throws off the web sites and data collectors that profile you with ads by masking your real IP address.
promo-fpn-cta = Get { -brand-fpn }
monitor-promo-headline = Find out about new data breaches
monitor-promo-body = Get notified the next time your personal info gets exposed in a known breach.
ecosystem-promo-headline = Protect your life online with privacy-first products
ecosystem-promo-body = All { -brand-name } products honour our Personal Data Promise: Take less. Keep it safe. No secrets.
promo-ecosystem-cta = See All Products
steps-to-resolve-headline = Steps to resolve this breach
vpn-promo-headline = Now’s the time to boost your safety online.
vpn-promo-copy = { -brand-Mozilla }’s Virtual Private Network helps shield your internet connection from hackers and spies.
vpn-promo-cta = Get { -brand-mozilla-vpn }
vpn-promo-headline-new = Save 50% with a full year subscription
vpn-promo-copy-new = Protect your online data—and choose a VPN subscription plan that works for you.

## VPN promotional banner.  HTML tags should not be translated, e.g. `<em>`

# Variables:
#   $ip-location (String) - User's IP location is determined dynamically by 3rd-party,
#                           eg: "Your location: Los Angeles, CA".  The 3rd-party service
#                           provides its own localization.
vpn-banner-location = Your location: { $ip-location }
vpn-banner-protect-yourself-with-vpn = <em>Protect yourself</em> with { -brand-mozilla-vpn }.
vpn-banner-protected-with-vpn = <em>Protected</em> with { -brand-mozilla-vpn }.
vpn-banner-title-1 = You’re protected — thanks for using { -brand-mozilla-vpn }.
vpn-banner-title-2 = Your location can be tracked if you don’t use a VPN.
vpn-banner-subtitle-2 = Protect your location and browse securely in 3 steps
vpn-banner-status-protected = Current status: <em>Protected ✓</em>
vpn-banner-status-not-protected = Current status: <em>Not protected ⚠</em>
# Variables:
#   $ip-address (String) - User's IP address is determined dynamically, eg: "IP address: 192.168.1.1"
vpn-banner-ip-address = IP address: { $ip-address }
vpn-banner-step-1 = Subscribe to { -brand-mozilla-vpn }
vpn-banner-step-2 = Select a VPN location
vpn-banner-step-3 = Activate VPN and browse securely
vpn-banner-cta = Get { -brand-mozilla-vpn }
# button to expand panel
vpn-banner-cta-expand = Expand
# button to close panel
vpn-banner-cta-close = Close

## Relay and VPN educational/ad units

ad-unit-relay-cta = Learn more about { -brand-relay }
ad-unit-vpn-cta = Learn more about { -brand-mozilla-vpn }
# ad 1 heading
ad-unit-1-how-do-you-keep = How do you keep your email address a secret?
# ad 2 heading
ad-unit-2-do-you-worry = Do you worry about safety on public Wi-Fi?
# ad 3 heading
ad-unit-3-stay-in-the-game = Stay in the game!
ad-unit-3-lets-you-keep = { -brand-mozilla-vpn } lets you keep a stable connection safe and secure while you play games or stream movies.
# ad 3 list item 1
ad-unit-3-prevent-throttling = Prevent throttling
# ad 3 list item 2
ad-unit-3-be-anywhere = Be anywhere in the world
# ad 3 list item 3
ad-unit-3-access-more = Access more
# ad 4 heading
ad-unit-4-shopping-with = Shopping with Email Masks
ad-unit-4-want-to-buy = Want to buy something online and don’t know or fully trust the shop?
ad-unit-4-shop-online = Use an email mask whenever you shop online. Get the confirmation sent to your real email and then easily turn the mask off anytime later.
# ad 5 heading
ad-unit-5-on-the-go = On the Go with { -brand-relay }
ad-unit-5-instantly-make = Instantly make a custom email mask anywhere and everywhere you go!
# ad 5 subheading 1
ad-unit-5-connect-on-the-go = Connect on the go
ad-unit-5-privately-sign-in = Use your email mask when you want to privately sign in to your favourite coffee shop or public Wi-Fi
# ad 5 subheading 2
ad-unit-5-email-receipts = Get email receipts
ad-unit-5-share-custom-email = Share a custom email mask for in-store shopping receipts without sharing your real email
# ad 5 subheading 3
ad-unit-5-use-on-phone = Use on your phone
ad-unit-5-no-matter-where = No matter where you are, create a custom email mask in seconds for anything you want to do
# ad 6 heading
ad-unit-6-worry-free = Worry-Free Signups
ad-unit-6-want-to-start = Want to start a new subscription, respond to an invitation, or get a bargain promo code without having spam flooding your inbox?
ad-unit-6-before-you-complete = Before you complete that next signup, use an email mask instead of your real one to protect your info and keep control over your inbox

# Monitor V2


## The following messages are brands and should be kept entirely in English

-brand-firefox = Firefox
-brand-monitor = Monitor
-brand-fx-monitor = Mozilla Monitor
-brand-mozilla = Mozilla
-brand-premium = Premium
-brand-monitor-premium = Monitor Premium
-brand-mozilla-foundation = Mozilla Foundation
-brand-github = GitHub
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay
-brand-mozilla-monitor = Mozilla Monitor
-brand-monitor-plus = Monitor Plus

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Mozilla account
open-in-new-tab-alt = Open link in a new tab

## Search Engine Optimization

meta-desc-2 = Find out if you’ve been part of a data breach with { -brand-fx-monitor }. We’ll help you understand what to do next and continuously monitor for any new breaches.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Sign In
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

site-nav-breaches-link = Resolve Data Breaches
site-nav-settings-link = Settings
site-nav-help-link = Help and Support
# This call-out is above 2 image links for Firefox Relay and Mozilla VPN
site-nav-ad-callout = Try our other security tools:
brand-relay = { -brand-relay }
brand-mozilla-vpn = { -brand-mozilla-vpn }
mobile-menu-label = Main menu
main-nav-button-collapse-label = Collapse menu
main-nav-button-collapse-tooltip = Collapse menu
main-nav-button-expand-label = Expand menu
main-nav-button-expand-tooltip = Expand menu
main-nav-label = Navigation
main-nav-link-home-label = Home
main-nav-link-dashboard-label = Dashboard
main-nav-link-settings-label = Settings
main-nav-link-faq-label = FAQs
main-nav-link-faq-tooltip = Frequently asked questions

## User menu

# Obsolete
menu-button-title = User menu
# Obsolete
menu-button-alt = Open user menu
# Obsolete
menu-list-accessible-label = Account menu
# Obsolete
menu-item-fxa-2 = Manage your { -brand-mozilla-account }
# Obsolete
menu-item-settings = Settings
# Obsolete
menu-item-help = Help and support
# Obsolete
menu-item-logout = Sign out
user-menu-trigger-label = Open user menu
user-menu-trigger-tooltip = Profile
user-menu-manage-fxa-label = Manage your { -brand-mozilla-account }
user-menu-settings-label = Settings
user-menu-settings-tooltip = Configure { -brand-mozilla-monitor }
user-menu-help-label = Help and support
user-menu-help-tooltip = Get help using { -brand-mozilla-monitor }
user-menu-signout-label = Sign out
user-menu-signout-tooltip = Sign out of { -brand-mozilla-monitor }

## Footer

mozilla = { -brand-Mozilla }
terms-of-service = Terms of Service
privacy-notice = Privacy Notice
github = { -brand-github }
footer-nav-all-breaches = All Breaches
footer-external-link-faq-label = FAQs
footer-external-link-faq-tooltip = Frequently asked questions

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Page not found
error-page-error-404-copy = We’re sorry, the page you’re looking for no longer exists.
error-page-error-404-cta-button = Go back
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } Something went wrong
error-page-error-other-copy = Please try again or come back later

## Breach overview page

all-breaches-headline-2 = All breaches detected by { -brand-fx-monitor }
all-breaches-lead = We monitor all known data breaches to find out if your personal information was compromised. Here’s a complete list of all of the breaches that have been reported since 2007.
search-breaches = Search Breaches
# the kind of user data exposed to hackers in data breach.
exposed-data = Exposed data:

## Public breach detail page

find-out-if-2 = Find out if you were involved in this breach
find-out-if-description = We’ll help you quickly see if your email address was exposed in this breach, and understand what to do next.
breach-detail-cta-signup = Check for breaches

## Floating banner

floating-banner-text = Boost your online security with news, tips, and updates from { -brand-Mozilla }.
floating-banner-link-label = Sign up
floating-banner-dismiss-button-label = No thanks

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: New name, look and even more ways to <b>reclaim your privacy</b>.
banner-monitor-rebrand-dismiss-button-label = OK
banner-monitor-rebrand-dismiss-button-tooltip = Dismiss
loading-accessibility = Loading
