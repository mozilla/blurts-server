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

settings-email-verification-callout = Email verification required
settings-remove-email-button-label = Remove

settings-email-addresses-header = Email addresses
settings-email-addresses-description = { -brand-monitor } will alert you if these emails show up in known breaches.
settings-email-addresses-add-email-button = Add email address
# Variables:
#   $limit (number) - Number of emails that can be added for monitoring.
settings-email-addresses-add-email-indicator-limit = Add up to { $limit }
settings-email-addresses-add-email-resend-button-label = Resend verification link

input-error-alt = Error

## Email address dialog

settings-email-addresses-initial-dialog-header = Add an email address
settings-email-addresses-initial-dialog-description = We’ll send a verification link for you to confirm you’d like to include it in a future { -brand-monitor } scan.
settings-email-addresses-initial-dialog-add-email-input-label = Enter email address
settings-email-addresses-initial-dialog-add-email-button-label = Send verification link
# Variables:
#   $email (string) - Email address the confirmation has been sent to.
settings-email-addresses-confirmation-dialog-header = Verification link sent to <b>{ $email }</b>
settings-email-addresses-confirmation-dialog-description = Open the link to add it to this account for future { -brand-monitor } scans.
settings-email-addresses-confirmation-dialog-close-button = Close

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

## Settings page redesign

# Label for a navigation bar link to settings for updating the users scan profile info – “update” is used as a verb.
settings-tab-label-update-scan-info = Update scan info
settings-tab-label-edit-info = Edit your info
settings-tab-label-notifications = Set notifications
settings-tab-label-manage-account = Manage account

settings-tab-subtitle-manage-account = Manage your { -product-name } account.

settings-tab-notifications-marketing-title = Marketing communications
settings-tab-notifications-marketing-text = Periodic updates about { -brand-monitor }, { -brand-mozilla }, and our other security products.
settings-tab-notifications-marketing-link-label = Go to { -brand-mozilla } email settings
