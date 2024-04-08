# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

breach-all-meta-title = { -brand-fx-monitor } - All Data Breaches
breach-all-meta-social-title = All Breaches Detected by { -brand-fx-monitor }
breach-all-meta-social-description = Browse the complete list of known breaches detected by { -brand-fx-monitor }, then find out if your information was exposed.

# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-social-title = Were you affected by the { $company } Data Breach?
breach-detail-meta-social-description = Use { -brand-fx-monitor } to find out if your personal information was exposed in this breach, and understand what to do next.

## Breaches header

## Breaches resolved filter

## Breaches table

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = { -brand-firefox } Password Manager
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }

## Prompts the user for changes when there is a breach detected of password

breach-checklist-pw-header-text = Update your passwords and enable two-factor authentication (2FA).

# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-pw-body-text = In most cases, we’d recommend that you change your password on the company’s web site. But <b>their web site may be down or contain malicious content</b>, so use caution if you <breached-company-link>visit the site</breached-company-link>. For added protection, make sure you’re using unique passwords for all accounts, so that any leaked passwords can’t be used to access other accounts. { $passwordManagerLink } can help you securely keep track of all of your passwords.

## Prompts the user for changes when there is a breach detected of email

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-email-header-2 = Protect your email with an email masking service like { $firefoxRelayLink }.
breach-checklist-email-body = This can hide your true email address while forwarding emails to your real inbox.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information.
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Monitor your credit report for accounts, loans, or credit cards you don’t recognise.
# A security freeze prevents prospective creditors from accessing your credit file.
# Creditors typically won't offer you credit if they can't access your credit reporting file,
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
# This will only be shown to users in the US.
# Variables:
#   $equifaxLink (string) - a link to the Equifax website
#   $experianLink (string) - a link to the Experian website
#   $transUnionLink (string) - a link to the TransUnion website
breach-checklist-ssn-body-2 = You can also consider freezing your credit on { $equifaxLink }, { $experianLink } and { $transUnionLink } to stop scammers from opening new accounts in your name. It’s free and won’t affect your credit score.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Report this breach to your credit card issuer and request a new card with a new number.
breach-checklist-cc-body = You should also review your credit card statements for unrecognised charges.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Notify your bank immediately that your account number has been compromised.
breach-checklist-bank-body = Doing so faster could give you more legal protections to help you recover any losses. You’ll also want to check your accounts for any unrecognised charges.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Notify your card issuer and change your PIN immediately.
breach-checklist-pin-body = Make sure your new PIN, or any other PIN, doesn’t include easily guessed numbers such as your birth date or address.

## Prompts the user for changes when there is a breach detected of IP address

# Variables:
#   $mozillaVpnLink (string) - a link to the Mozilla VPN website, with { -breach-checklist-link-mozilla-vpn } as the label
breach-checklist-ip-header-2 = Use the internet privately with a VPN, such as { $mozillaVpnLink }.
breach-checklist-ip-body = Your IP address (Internet Protocol address) pinpoints your location and internet service provider. A VPN can hide your real IP address so you can use the internet privately.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Change any passwords or PINs that include any part of your address.
breach-checklist-address-body = Addresses are easy to find in public records and can make those passwords and PINs easy to guess.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Change any passwords or PINs that include your date of birth.
breach-checklist-dob-body = Birth dates are easy to find in public records, and people who find it could easily guess your PIN.

## Prompts the user for changes when there is a breach detected of phone number

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-phone-header-2 = Protect your phone number with a masking service like { $firefoxRelayLink }, which hides your true phone number.

## Prompts the user for changes when there is a breach detected of security questions

breach-checklist-sq-header-text = Update your security questions.

# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
breach-checklist-sq-body-text = In most cases, we’d recommend that you update your security questions on the company’s web site. But <b>their web site may be down or contain malicious content</b>, so use caution if you <breached-company-link>visit the site</breached-company-link>. For added protection, update these security questions on any important accounts where you’ve used them, and create unique passwords for all accounts.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Create unique, strong passwords for any account where you’ve re-used passwords.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-hp-body-2 = A password manager like { $passwordManagerLink } (which is free and built-in to the { -brand-firefox } browser) can help you keep track of all your passwords and access them securely from all your devices.

## Prompts the user for changes when there is a breach detected of other types

# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-checklist-general-header = Reach out to { $companyName } to inform them about this breach and ask for specific steps you can take.
