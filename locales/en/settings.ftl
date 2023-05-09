# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Settings page

settings-meta-title = { -brand-fx-monitor } - Settings
settings-page-title = { -product-short-name } Settings

## Breach alert preferences

settings-alert-preferences-title = Breach alert preferences
settings-alert-preferences-option-one = Send breach alerts to the affected email address
settings-alert-preferences-option-two = Send all breach alerts to the primary email address

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-label-primary = { $email } (primary)
settings-email-list-title = Monitored email addresses
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
  {
    $limit ->
        [one] Your account includes monitoring of up to { $limit } email.
       *[other] Your account includes monitoring of up to { $limit } emails.
  }
settings-email-verification-callout = Email verification required
settings-resend-email-verification-link = Resend verification email
settings-add-email-button = Add email address

# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (numer) - Number of breaches
settings-email-number-of-breaches-info =
  {
    $breachCount ->
        [one] Appears in { $breachCount } known breach.
       *[other] Appears in { $breachCount } known breaches.
  }

## Deactivate account

settings-deactivate-account-title = Deactivate account
settings-deactivate-account-info = You can deactivate { -product-short-name } by deleting your { -brand-fx-account }.
settings-fxa-link-label = Go to { -brand-firefox } Settings

## Add email dialog

settings-email-dialog-title = Add another email address
settings-add-email-text = Add a new email address to see if it’s been involved in a breach.
settings-email-input-label = Email address
settings-send-email-verification-button = Send verification link
