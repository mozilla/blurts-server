# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

## Email headers

email-header-button-sign-in = Sign in

## Email footers

email-footer-support-heading = Questions about { -brand-mozilla-monitor }?
email-footer-support-content = Visit our <support-link>Support Center</support-link> for help
email-footer-trigger-transactional = You’re receiving this email as a subscriber of { -brand-mozilla-monitor }.
email-footer-reason-subscriber = You’re receiving this automated email as a subscriber of { -brand-mozilla-monitor }. If you received it in error, no action is required. For more information, please visit <support-link>{ -brand-mozilla } Support</support-link>.
email-footer-reason-subscriber-one-time = You’ve received this one-time automated email because you are subscribed to { -brand-monitor-plus }. You won’t receive any further emails like this. For more information, please visit <support-link>{ -brand-mozilla } Support</support-link>.
# Variables:
#    $support_link (string) - The URL the user can visit for support, e.g. "https://support.mozilla.org"
email-footer-support-content-plain =
    Visit our Support Center for help:
    { $support_link }
# Variables:
#   $hibp_link (string) - URL to Have I Been Pwned, e.g. "https://haveibeenpwned.com".
email-footer-source-hibp-plain = Breach data provided by { -brand-HIBP }: { $hibp_link }
email-footer-source-hibp = Breach data provided by <hibp-link>{ -brand-HIBP }</hibp-link>
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = Privacy

# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN

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

fxm-warns-you-no-breaches = { -product-name } warns you about data breaches involving your personal info.
  So far, no breaches were found. We’ll send you an alert if your email address appears in a new breach.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Breach data provided by <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Verification email

email-verify-heading = Safeguard your data, starting right now
email-verify-simply-click = Simply click the link below to finish verifying your account.

## Breach report

email-breach-summary = Here’s your data breach summary
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = Search results for your { $email-address } account have detected that your email may have been exposed. We recommend you act now to resolve this breach.
email-dashboard-cta = Go to Dashboard

## Breach alert email

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
