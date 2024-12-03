# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Settings page

settings-page-title = { -product-short-name } Settings

## Breach alert preferences

settings-alert-email-preferences-title = Email preferences
settings-alert-email-preferences-subtitle = Tell us which emails you’d like to receive.
settings-alert-preferences-allow-breach-alerts-title = Instant breach alerts
settings-alert-preferences-allow-breach-alerts-subtitle = These alerts are sent immediately once a data breach is detected
settings-alert-preferences-option-one = Send breach alerts to the affected email address
settings-alert-preferences-option-two = Send all breach alerts to the primary email address

## Monitored email addresses

# Variables:
#   $email (string) - Email address
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
settings-remove-email-button-label = Remove
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = Stop monitoring { $emailAddress }

# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info =
  {
    $breachCount ->
        [one] Appears in { $breachCount } known breach.
       *[other] Appears in { $breachCount } known breaches.
  }

## Delete Monitor account

settings-delete-monitor-free-account-title = Delete { -brand-monitor } account
settings-delete-monitor-free-account-description = This will permanently delete your { -brand-monitor } account and turn off all notifications.
settings-delete-monitor-free-account-cta-label = Delete account
settings-delete-monitor-free-account-dialog-title = Your { -brand-monitor } account will be permanently deleted
settings-delete-monitor-free-account-dialog-lead-v2 = All of your { -brand-monitor } account information will be deleted and we’ll no longer monitor for new data breaches. This will not delete your { -brand-mozilla-account }.
settings-delete-monitor-free-account-dialog-cta-label = Delete account
settings-delete-monitor-free-account-dialog-cancel-button-label = Never mind, take me back
settings-delete-monitor-account-confirmation-toast-label-2 = Your { -brand-monitor } account is now deleted.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Dismiss

## Monthly Monitor Report

settings-alert-preferences-allow-monthly-monitor-report-title = Monthly { -brand-monitor } report
settings-alert-preferences-allow-monthly-monitor-report-subtitle = A monthly update of new exposures, what’s been fixed, and what needs your attention.

## Settings page redesign

settings-tab-label-edit-info = Edit your info
settings-tab-label-notifications = Set notifications
settings-tab-label-manage-account = Manage account

settings-tab-subtitle-manage-account = Manage your { -product-name } account.

settings-tab-notifications-marketing-title = Marketing communications
settings-tab-notifications-marketing-text = Periodic updates about { -brand-monitor }, { -brand-mozilla }, and our other security products.
settings-tab-notifications-marketing-link-label = Go to { -brand-mozilla } email settings
