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
