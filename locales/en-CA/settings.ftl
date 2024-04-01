# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = { -product-short-name } Settings

## Breach alert preferences

settings-alert-preferences-title = Breach alert preferences
settings-alert-preferences-option-one = Send breach alerts to the affected email address
settings-alert-preferences-option-two = Send all breach alerts to the primary email address

## Monitored email addresses

settings-email-list-title = Monitored email addresses
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Your account includes monitoring of up to { $limit } email.
       *[other] Your account includes monitoring of up to { $limit } emails.
    }
settings-email-verification-callout = Email verification required
settings-resend-email-verification-link = Resend verification email
settings-add-email-button = Add email address
settings-remove-email-button-label = Remove
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = Stop monitoring { $emailAddress }

# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Appears in { $breachCount } known breach.
       *[other] Appears in { $breachCount } known breaches.
    }

## Cancel Premium subscription

## Deactivate account

settings-deactivate-account-title = Deactivate account
settings-deactivate-account-info-2 = You can deactivate { -product-short-name } by deleting your { -brand-mozilla-account }.
settings-fxa-link-label-3 = Go to { -brand-mozilla-account } settings

## Add email dialog

## Unsubscribe Dialog Survey

## Delete Monitor account

