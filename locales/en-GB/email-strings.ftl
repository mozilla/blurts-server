# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-logo-alt = { -brand-mozilla-monitor }
email-header-button-sign-in = Sign in

## Email footers

email-footer-support-heading = Questions about { -brand-mozilla-monitor }?
email-footer-support-content = Visit our <support-link>Support Center</support-link> for help
email-footer-trigger-transactional = You’re receiving this email as a subscriber of { -brand-mozilla-monitor }.
email-footer-source-hibp = Breach data provided by <hibp-link>{ -brand-HIBP }</hibp-link>
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = Privacy
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# A link to legal information about mozilla products.
legal = Legal
# Button text
verify-email-cta = Verify Email
# Headline of verification email
email-link-expires = This link expires in 24 hours

##

# Subject line of email
email-subject-found-breaches = { -product-name } found your info in these breaches
# Subject line of email
email-subject-no-breaches = { -product-name } found no known breaches
# Subject line of email
email-subject-verify = Verify your email for { -product-name }
fxm-warns-you-no-breaches =
    { -product-name } warns you about data breaches involving your personal info. 
    So far, no breaches were found. We’ll send you an alert if your email address appears in a new breach.
email-breach-alert-blurb =
    { -product-name } warns you about data breaches involving your personal info. 
    We just received details about another company’s data breach.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Breach data provided by <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Verification email

email-verify-heading = Safeguard your data, starting right now
email-verify-subhead = Verify your email to start protecting your data after a breach.
email-verify-simply-click = Simply click the link below to finish verifying your account.

## Breach report

email-breach-summary = Here’s your data breach summary
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = Search results for your { $email-address } account have detected that your email may have been exposed. We recommend you act now to resolve this breach.
# Deprecated after the redesigned breach alert email is launched
# Variables:
#   $email-address (string) - Email address
email-breach-detected-2 = Search results for your <b>{ $email-address }</b> account have detected that your email may have been exposed. We recommend you act now to resolve this breach.
email-dashboard-cta = Go to Dashboard

## Breach alert

# Deprecated after the redesigned breach alert email is launched
email-spotted-new-breach = We’ve spotted a new data breach

## Redesigned breach alert email

email-breach-alert-all-subject = New data breach detected
email-breach-alert-all-preview = We’ll guide you through the steps to resolve it.
email-breach-alert-all-hero-heading = You’ve been in a new data breach
email-breach-alert-all-hero-subheading = Don’t worry, we can help you resolve this exposure
email-breach-alert-all-lead = { -brand-mozilla-monitor } discovered the following data breach that includes your personal information:
email-breach-alert-all-source-title = Breach source:
email-breach-alert-all-data-points-title = Your exposed data:
email-breach-alert-all-next-steps-lead = We’ll guide you step-by-step on how to resolve this data breach.
email-breach-alert-all-next-steps-cta-label = Let’s get started
email-breach-alert-all-next-steps-button-dashboard = Go to Dashboard
