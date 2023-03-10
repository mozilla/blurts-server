# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

## Breaches header

# Data classes pie chart title
breach-chart-title = Breached data

# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = Data breaches for { $email-select }

# $count is the number of emails a user has added out of $total allowed
emails-monitored = 
  {
    $total ->
      [one] { $count } of { $total } email monitored
     *[other] { $count } of { $total } emails monitored
  }

# link to Settings page where user can add/remove emails and set message preferences
manage-emails-link = Manage emails

## Breaches resolved filter

filter-label-unresolved = Unresolved breaches
filter-label-resolved = Resolved breaches

## Breaches table

column-company = COMPANY
column-breached-data = BREACHED DATA
column-detected = DETECTED

# “Resolved” is shown next to a breach if all recommended actions in response to the breach have been taken.
column-status-badge-resolved = Resolved
# “Active” is shown next to a breach if the user still has at least one recommended action to perform in response to the breach.
column-status-badge-active = Active

breaches-resolve-heading = Resolve this breach:

breaches-none-headline = No breaches found
# Variables:
#   $email (String) - An email address that we did not find breaches for, e.g. `someone@example.com`
breaches-none-copy = Good news! No known breaches were reported for { $email }. We’ll keep monitoring this email and will let you know if any new breaches occur.
breaches-none-cta-blurb = Would you like to monitor another email?
breaches-none-cta-button = Add email address

breaches-all-resolved-headline = All breaches resolved
# Variables:
#   $email (String) - An email address for which all breaches have been resolved, e.g. `someone@example.com`
breaches-all-resolved-copy = Nicely done! You’ve resolved all breaches for { $email }. We’ll keep monitoring this email and will let you know if any new breaches occur.
breaches-all-resolved-cta-blurb = Would you like to monitor another email?
breaches-all-resolved-cta-button = Add email address

# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
breach-description = On { $breachDate }, { $companyName } was breached. Once the breach was discovered and verified, it was added to our database on { $addedDate }. This breach included: { $dataClasses }

## Prompts the user for changes when there is a breach detected of password

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-pw-header = Go to <a>{$breachedCompanyUrl}</a> to change your password and enable two-factor authentication (2FA). 
breach-checklist-pw-body = Make sure your password is unique and hard to guess. If this password is used on any other accounts, be sure to change it there too. <a>{-brand-firefox} Password Manager</a> can help you securely keep track of all of your passwords.

## Prompts the user for changes when there is a breach detected of email

breach-checklist-email-header = Protect your email with an email masking service like <a>{-brand-relay}</a>.
breach-checklist-email-body = This can hide your true email address while forwarding emails to your real inbox.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information. 
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Monitor your credit report for accounts, loans, or credit cards you don’t recognize.
# A security freeze prevents prospective creditors from accessing your credit file. 
# Creditors typically won't offer you credit if they can't access your credit reporting file, 
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
breach-checklist-ssn-body = You can also consider freezing your credit on <a>Equifax</a>, <a>Experian</a> and <a>TransUnion</a> to stop scammers from opening new accounts in your name. It’s free and won’t affect your credit score.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Report this breach to your credit card issuer and request a new card with a new number.
breach-checklist-cc-body = You should also review your credit card statements for unrecognized charges.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Notify your bank immediately that your account number has been compromised.
breach-checklist-bank-body = Doing so faster could give you more legal protections to help you recover any losses. You’ll also want to check your accounts for any unrecognized charges.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Notify your card issuer and change your PIN immediately.
breach-checklist-pin-body = Make sure your new PIN, or any other PIN, doesn’t include easily guessed numbers such as your birth date or address.

## Prompts the user for changes when there is a breach detected of IP address

breach-checklist-ip-header = Use the internet privately with a VPN, such as <a>{-brand-mozilla-vpn}</a>.
breach-checklist-ip-body = Your IP address (Internet Protocol address) pinpoints your location and internet service provider. A VPN can hide your real IP address so you can use the internet privately.   

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Change any passwords or PINs that include any part of your address.   
breach-checklist-address-body = Addresses are easy to find in public records and can make those passwords and PINs easy to guess.   

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Change any passwords or PINs that include your date of birth.  
breach-checklist-dob-body = Birth dates are easy to find in public records, and people who find it could easily guess your PIN.

## Prompts the user for changes when there is a breach detected of phone number

breach-checklist-phone-header = Protect your phone number with a masking service like <a>{-brand-relay}</a>, which hides your true phone number. 

## Prompts the user for changes when there is a breach detected of security questions

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-sq-header = Update your security questions on <a>{$breachedCompanyUrl}</a>. 
breach-checklist-sq-body = Use long, random answers, and store them somewhere safe. Do this anywhere else you’ve used the same security questions.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Create unique, strong passwords for any account where you’ve re-used passwords.
breach-checklist-hp-body = A password manager like <a>{-brand-firefox} Password Manager</a> (which is free and built-in to the {-brand-firefox} browser) can help you keep track of all your passwords and access them securely from all your devices. 

## Prompts the user for changes when there is a breach detected of other types

# NOTE: { $companyName } is a placeholder for the name of the company where the breach occurred 
breach-checklist-general-header = Reach out to {$companyName} to inform them about this breach and ask for specific steps you can take.
