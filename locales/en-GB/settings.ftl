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
    { $limit ->
        [one] Your account includes monitoring of up to { $limit } email.
       *[other] Your account includes monitoring of up to { $limit } emails.
    }
settings-email-verification-callout = Email verification required
settings-resend-email-verification-link = Resend verification email
settings-add-email-button = Add email address
# Deprecated
settings-delete-email-button = Delete email address
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

settings-cancel-premium-subscription-title = Cancel { -brand-premium } subscription
settings-cancel-premium-subscription-info = Your subscription will revert to a free account after the current billing cycle ends. Your privacy protection scan results will be permanently deleted, and you’ll only have data breach monitoring for 1 email address.

## Deactivate account

settings-deactivate-account-title = Deactivate account
settings-deactivate-account-info-2 = You can deactivate { -product-short-name } by deleting your { -brand-mozilla-account }.
settings-fxa-link-label-3 = Go to { -brand-mozilla-account } settings

## Delete Monitor account

settings-delete-monitor-free-account-title = Delete { -brand-monitor } account
settings-delete-monitor-free-account-description = This will permanently delete your { -brand-monitor } account and turn off all notifications.
settings-delete-monitor-free-account-cta-label = Delete account
settings-delete-monitor-free-account-dialog-title = Your { -brand-monitor } account will be permanently deleted
settings-delete-monitor-free-account-dialog-lead = All of your { -brand-monitor } account information will be deleted and we’ll no longer monitor for new data breaches. This will not delete your { -brand-mozilla } account.
settings-delete-monitor-free-account-dialog-cta-label = Delete account
settings-delete-monitor-free-account-dialog-cancel-button-label = Never mind, take me back
settings-delete-monitor-plus-account-title = Delete { -brand-monitor } account
settings-delete-monitor-plus-account-description = This will permanently delete your { -brand-monitor } account and immediately end your paid { -brand-monitor-plus } subscription.
settings-delete-monitor-plus-account-cta-label = Delete account
settings-delete-monitor-plus-account-dialog-title = Your { -brand-monitor } account will be permanently deleted
settings-delete-monitor-plus-account-dialog-lead-p1 = All of your { -brand-monitor } account information will be deleted and we’ll no longer monitor for new data breaches or data broker exposures. This will not delete your { -brand-mozilla } account.
settings-delete-monitor-plus-account-dialog-lead-p2 = Your paid subscription will end today and you won’t be prorated for the remainder of your subscription.
settings-delete-monitor-plus-account-dialog-cta-label = Delete account
settings-delete-monitor-plus-account-dialog-cancel-button-label = Never mind, take me back
settings-delete-monitor-account-confirmation-toast-label = Your { -brand-monitor } account is now permanently deleted.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Dismiss

## Add email dialog

settings-email-dialog-title = Add another email address
settings-add-email-text = Add a new email address to see if it’s been involved in a breach.
settings-email-input-label = Email address
settings-send-email-verification-button = Send verification link

## Unsubscribe Dialog Survey

settings-unsubscribe-dialog-title = We’re sorry to see you go. <br /> Will you tell us why you’re leaving?
settings-unsubscribe-dialog-info = Your experience is important to us. We read every response and take it into consideration.
settings-unsubscribe-dialog-message-placeholder = What could have gone better?
# $faq_href is the URL for the faq page. HTML tags should not be translated, e.g. `<a>`
settings-unsubscribe-dialog-confirmation = Please note, all of your { -brand-monitor-premium } services will be <a { $faq_href }>permanently deleted</a> after your current billing cycle ends.
settings-unsubscribe-dialog-continue = Continue to cancellation
settings-unsubscribe-dialog-cancel = Never mind, take me back
