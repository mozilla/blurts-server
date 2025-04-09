# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

## Cancel Plus subscription

settings-cancel-plus-title = Cancel { -brand-monitor-plus } subscription
settings-cancel-plus-details = Your subscription will revert to a free account after the current billing cycle ends. Your data broker scan results will be permanently deleted, and you may be re-added to those sites.
settings-cancel-plus-link-label = Cancel from your { -brand-mozilla-account }

## Sidebar navigation

# Label for a navigation bar link to settings for updating the users scan profile info – “update” is used as a verb.
settings-tab-label-update-scan-info = Update scan info

## Cancel Plus subscription - flow with a cancellation survey

settings-cancel-plus-survey-button-label = Cancel your subscription
settings-cancel-plus-step-confirm-heading = Hey, before you go…
settings-cancel-plus-step-confirm-content = Data brokers continually re-add your personal info back into their databases. Leaving now means you’ll no longer be protected.
settings-cancel-plus-step-confirm-cta-label = Continue to cancellation
settings-cancel-plus-step-confirm-cancel-label = Never mind, take me back
settings-cancel-plus-step-survey-heading = We’re sorry to see you go. Will you tell us why you’re leaving?
settings-cancel-plus-step-survey-lead = Your experience is important to us. We read every response and take it into consideration.
settings-cancel-plus-step-survey-cta-label = Continue to cancellation
settings-unsubscribe-dialog-confirmation-redirect-title = Directing you to your { -brand-mozilla-account } to cancel
settings-unsubscribe-dialog-confirmation-redirect-description-pt1 = We’ll automatically redirect you to your { -brand-mozilla-account } where you can cancel your { -brand-monitor } subscription.
settings-unsubscribe-dialog-confirmation-redirect-description-pt2 = Please note, all of your { -brand-monitor-plus } services will be <b>permanently deleted</b> after your current billing cycle ends.
settings-unsubscribe-dialog-cancellation-survey-form-placeholder = What could have gone better?
# Variables:
# $discount_percentage_num is the amount discounted in percentage per month
# $discount_duration is the number of month(s) that users will pay the discounted price
settings-unsubscribe-dialog-promotion-cta = {
  $discount_duration ->
    [one] Stay and get { $discount_percentage_num } off next month
    *[other] Stay and get { $discount_percentage_num } off { $discount_duration } months
}
# Variables:
# $discount_percentage_num is the amount discounted in percentage per month
# $discount_duration is the number of month(s) that users will pay the discounted price
settings-unsubscribe-dialog-promotion-description = {
  $discount_duration ->
    [one] { -brand-monitor-plus } will continue protecting your personal data, and a { $discount_percentage_num } discount has been applied to your next month.
    *[other] { -brand-monitor-plus } will continue protecting your personal data, and a { $discount_percentage_num } discount has been applied to your next { $discount_duration } months.
}
settings-unsubscribe-dialog-promotion-cta-subtitle = Discount applied to your next month. Redeemable one time only.
settings-unsubscribe-dialog-promotion-unsuccessful = There was a problem applying your discount. <try_again_link>Please try again.</try_again_link>
settings-unsubscribe-dialog-promotion-complete = You’re all set!
settings-unsubscribe-dialog-promotion-back-to-dashboard-cta = Go to my Dashboard
settings-unsubscribe-dialog-promotion-limitations-apply = Limited time, restrictions apply

## Delete Monitor account

settings-delete-monitor-plus-account-title = Delete { -brand-monitor } account
settings-delete-monitor-plus-account-description-2 = This will delete your { -brand-monitor } account and immediately end your paid { -brand-monitor-plus } subscription.
settings-delete-monitor-plus-account-cta-label = Delete account
settings-delete-monitor-plus-account-dialog-title-2 = Your { -brand-monitor } account will be deleted
settings-delete-monitor-plus-account-dialog-lead-p1-2 = All of your { -brand-monitor } account information will be deleted and we’ll no longer monitor for new data breaches or data broker exposures. This will not delete your { -brand-mozilla-account }.
settings-delete-monitor-plus-account-dialog-lead-p2-2 = You’ll regain access to { -brand-monitor-plus } features if you sign back in during any remaining time of your paid subscription.
settings-delete-monitor-plus-account-dialog-cta-label = Delete account
settings-delete-monitor-plus-account-dialog-cancel-button-label = Never mind, take me back

## Monthly Monitor Report

settings-alert-preferences-allow-monthly-monitor-plus-report-title = Monthly { -brand-monitor-plus } report

## Update scan info

settings-update-scan-info-description = { -brand-monitor } is most effective at protecting your info when you add specific details. Add any of your name variations, emails, or locations. <a>Why should I add details for my scan?</a>
settings-update-scan-info-upsell-cta-label = Upgrade to { -brand-monitor-plus } to protect your personal info
settings-details-saved-notification-title = Details saved
settings-details-saved-notification-message = Thanks for helping Monitor protect you. We'll use this info in future scans.

## Details about you

settings-details-about-you-header = Details about you
settings-details-about-you-description = { -brand-monitor } will use this info for scans and data removal requests.
settings-details-about-you-name-label = Name
settings-details-about-you-date-of-birth-label = Date of birth
settings-details-about-you-phone-label = Phone number
settings-details-about-you-location-label = Location
settings-details-about-you-cta-label = Add details
# Variables:
#   $moreCount (number) - The additional number of details for this
settings-details-about-you-more-indicator = +{ $moreCount } more

## Email addresses

settings-email-addresses-header = Email addresses
settings-email-addresses-description = { -brand-monitor } will alert you if these emails show up in known breaches.
settings-email-addresses-add-email-cta = Add email address
# Variables:
#   $limit (number) - Number of emails that can be added for monitoring.
settings-email-addresses-add-email-indicator-limit = Add up to { $limit }
settings-email-addresses-add-email-resend-button-label = Resend verification link
settings-email-addresses-add-email-remove-button-label = Remove

## Email address dialog

settings-email-addresses-initial-dialog-header = Add an email address
settings-email-addresses-initial-dialog-description = We’ll send a verification link for you to confirm you’d like to include in a future { -brand-monitor } scan.
settings-email-addresses-initial-dialog-add-email-input-label = Enter email address
settings-email-addresses-initial-dialog-add-email-cta = Send verification link
# Variables:
#   $email (string) - Email address the confirmation has been sent to.
settings-email-addresses-confirmation-dialog-header = Verification link sent to <b>{ $email }</b>
settings-email-addresses-confirmation-dialog-description = We’ll send a verification link for you to confirm you’d like to include in a future { -brand-monitor } scan.
settings-email-addresses-confirmation-dialog-close-button = Close

## Edit profile info form

settings-edit-profile-info-form-fieldset-label-first-name = First name
settings-edit-profile-info-form-fieldset-label-middle-name = Middle name
settings-edit-profile-info-form-fieldset-label-last-name = Last name
settings-edit-profile-info-form-fieldset-label-date-of-birth = Date of birth
settings-edit-profile-info-form-fieldset-label-phone-numbers = Phone numbers
settings-edit-profile-info-form-fieldset-label-addresses = US locations

settings-edit-profile-info-form-fieldset-section-other-label-first-names = Other first names
settings-edit-profile-info-form-fieldset-section-limit-label-first-names = You’ve added the maximum number of first names.
settings-edit-profile-info-form-fieldset-section-other-label-middle-names = Other middle names
settings-edit-profile-info-form-fieldset-section-limit-label-middle-names = You’ve added the maximum number of middle names.
settings-edit-profile-info-form-fieldset-section-other-label-last-names = Other last names
settings-edit-profile-info-form-fieldset-section-limit-label-last-names = You’ve added the maximum number of last names.
settings-edit-profile-info-form-fieldset-section-other-label-phone-numbers = Other phone numbers
settings-edit-profile-info-form-fieldset-section-limit-label-phone-numbers = You’ve added the maximum number of phone numbers.
settings-edit-profile-info-form-fieldset-section-primary-label-addresses = Current location
settings-edit-profile-info-form-fieldset-section-other-label-addresses = Past locations
settings-edit-profile-info-form-fieldset-section-limit-label-addresses = You’ve added the maximum number of locations.

settings-edit-profile-info-form-input-label-primary-first-name = Legal first name
settings-edit-profile-info-form-input-label-other-first-name = Other first name
settings-edit-profile-info-form-input-label-primary-middle-name = Middle name
settings-edit-profile-info-form-input-label-other-middle-name = Other middle name
settings-edit-profile-info-form-input-label-primary-last-name = Legal last name
settings-edit-profile-info-form-input-label-other-last-name = Other last name
settings-edit-profile-info-form-input-label-primary-phone-number = Primary number
settings-edit-profile-info-form-input-label-other-phone-number = Other phone number
settings-edit-profile-info-form-input-label-primary-location = City and state
settings-edit-profile-info-form-input-label-other-location = Past location
settings-edit-profile-info-form-input-error-first-name = First name is required
settings-edit-profile-info-form-input-error-middle-name = First name is required
settings-edit-profile-info-form-input-error-last-name = Last name is required
settings-edit-profile-info-form-input-error-phone-number = Enter a valid phone number
settings-edit-profile-info-form-input-error-current-location = A current location is required

settings-edit-profile-info-form-date-of-birth-note = Date of birth cannot be changed for security reasons. <a>Why?</a>
settings-edit-profile-info-form-add-item-first-names-button-label = Add variations, aliases, deadnames you’ve gone by
settings-edit-profile-info-form-add-item-middle-names-button-label = Add variations or more middle names
settings-edit-profile-info-form-add-item-last-names-button-label = Add variations or last names you’ve had
settings-edit-profile-info-form-add-item-phone-numbers-button-label = Add more numbers
settings-edit-profile-info-form-add-item-addresses-button-label = Add past US locations
settings-edit-profile-info-form-remove-item-button-label = Remove item
settings-edit-profile-info-form-cancel-button-label = Cancel
settings-edit-profile-info-form-save-button-label = Save

settings-edit-profile-info-form-cancel-dialog-header = Save info?
settings-edit-profile-info-form-cancel-dialog-description = If you leave, your info won’t be saved and you’ll need to re-enter it.
settings-edit-profile-info-form-cancel-dialog-confimation-button-label = Leave without saving
