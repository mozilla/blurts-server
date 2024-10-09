# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Strings in this file are not yet final, and thus should not be localised yet.

email-footer-reason-subscriber = You’re receiving this automated email as a subscriber of { -brand-mozilla-monitor }. If you received it in error, no action is required. For more information, please visit <support-link>{ -brand-mozilla } Support</support-link>.
email-footer-reason-subscriber-one-time = You’ve received this one-time automated email because you are subscribed to { -brand-monitor-plus }. You won’t receive any further emails like this. For more information, please visit <support-link>{ -brand-mozilla } Support</support-link>.

## Monthly overview email

email-monthly-plus-auto-subject = Your monthly { -brand-monitor } report
email-monthly-plus-auto-preview = See how we’ve protected your personal information.
email-monthly-plus-auto-intro-content = As a { -brand-monitor-plus } subscriber, you have our highest level of protection. We remove your personal info from data broker sites — no matter how many times they re-add you. We also help you resolve data breaches that require manual action. Here’s what we fixed:
email-monthly-plus-auto-cta-label = View all activity
# Accompanies a number that indicates how many data broker exposures the user fixed themselves
email-monthly-plus-auto-fixed-section-manual-heading = Manually fixed
# Accompanies a number that indicates how many data broker exposures we're still fixing
email-monthly-plus-auto-fixed-section-in-progress-heading = Removals in progress
# Accompanies a number that indicates how many data broker exposures we've already fixed
email-monthly-plus-auto-fixed-section-done-heading = Auto-removed

email-monthly-free-subject = Your monthly { -brand-monitor } report
email-monthly-free-preview = See what was fixed this month and what needs your attention.
email-monthly-free-intro-content = We constantly monitor for new exposures of your personal info. Sign in to see what exposures need you to take action, and what’s already been fixed.
email-monthly-free-cta-label = View your dashboard
email-monthly-free-fixed-heading = What we fixed
email-monthly-free-fixed-lead =  We guide you to resolve data breaches that require manual action. For { -brand-monitor-plus } subscribers, we auto-remove your personal info from data broker sites that are selling it.
# Accompanies a number that indicates how many data broker exposures the user fixed themselves
email-monthly-free-fixed-section-manual-heading = Manually fixed
# Accompanies a number that indicates how many data broker exposures we're still fixing (always 0 for free users)
email-monthly-free-fixed-section-in-progress-heading = Removals in progress
# Accompanies a number that indicates how many data broker exposures we've already fixed (always 0 for free users)
email-monthly-free-fixed-section-done-heading = Auto-removed
email-monthly-free-banner-plus-heading = Upgrade for extra protection
email-monthly-free-banner-plus-content = Get auto-removal of your profiles for sale plus continuous monitoring for new exposures.
email-monthly-free-banner-plus-cta-label = Get { -brand-monitor-plus }

## First data broker removal fixed email

email-first-broker-removal-fixed-subject = Your first auto-removal is complete!
# Variables:
#   $data_broker_name (string) - The name of the data broker result that has been removed
email-first-broker-removal-fixed-preview = Your private information has been removed from { $data_broker_name }
email-first-broker-removal-fixed-heading = Your first auto-removal is complete
email-first-broker-removal-fixed-subheading = Your personal information is now more private.
# Variables:
#   $data_broker_name (string) - The name of the data broker result that has been removed
#   $data_broker_removal_date (string) - The date on which the data broker result has been removed
email-first-broker-removal-fixed-content-one = We’re excited to share that we successfully removed your info from <data-broker-link>{ $data_broker_name }</data-broker-link> on { $data_broker_removal_date }.
exposure-card-description-info-for-sale-fixed = As a { -brand-monitor-plus } member, we’ve <data_broker_profile>removed this profile</data_broker_profile> for you and will continually monitor to make sure they don’t add you back.
email-first-broker-removal-fixed-content-two = We’ll keep working on any remaining data broker exposures to help protect your privacy. You can sign in to your dashboard any time to see your progress.
email-first-broker-removal-fixed-cta-label = View dashboard

## Redesigned breach alert email

email-breach-alert-plus-scan-banner-heading = { -brand-monitor } now protects you even more
email-breach-alert-plus-scan-banner-content = We can find your personal info on data broker sites that sell it for a profit.
email-breach-alert-plus-scan-banner-cta-label = Get first scan free
email-breach-alert-plus-upgrade-banner-heading = Upgrade for extra protection
email-breach-alert-plus-upgrade-banner-content = { -brand-monitor-plus } can find and remove your phone number, home address, and other personal info from online databases.
email-breach-alert-plus-upgrade-banner-cta-label = Get { -brand-monitor-plus }
email-breach-alert-plus-scan-results-heading = Current exposures
# Variables:
#   $data_point_count (number) - The number of data exposures that were exposed
email-breach-alert-plus-scan-results-data-points-label =
   {$data_point_count ->
        [one] Data exposure
       *[other] Data exposures
    }
email-breach-alert-plus-scan-results-cta-label = Take action to resolve these exposures
email-breach-alert-plus-scan-results-trailer = We’ll guide you step-by-step through the process

# Monthly Report Free User

email-monthly-report-hero-free-heading = Your monthly { -brand-mozilla-monitor } report
email-monthly-report-hero-free-body = A summary of what needs your attention, and what’s been resolved over the past month.

## This string is displayed under a large numeral that indicates the total
## number of data breaches that have exposed the user’s information.
## Don’t add $data_point_count to your localization, because it would
## result in the number showing twice.
##
## Variables:
##   $data_point_count (number) - The number of data breaches that were exposed

email-monthly-report-no-scan-results-data-points-label =
    { $data_point_count ->
        [one] Data breach
       *[other] Data breaches
    }
email-monthly-report-free-summary-auto-removed =
  { $data_point_count ->
        [one] Auto-removed exposure
       *[other] Auto-removed exposures
    }
email-monthly-report-free-summary-resolved-breaches =
  { $data_point_count ->
        [one] Manually resolved data breach
       *[other] Manually resolved data breaches
    }
email-monthly-report-free-summary-manually-resolved-exposures =
  { $data_point_count ->
        [one] Manually resolved exposure
       *[other] Manually resolved exposures
    }

##

email-monthly-report-free-results-heading = Current exposures
email-monthly-report-free-summary-heading = What’s happened in the last month
email-monthly-report-free-upgrade-cta = Unlock with { -brand-monitor-plus }
email-monthly-report-free-banner-heading = { -brand-monitor } now protects you even more
email-monthly-report-free-banner-body = We can find your personal info on data broker sites that sell it for a profit.
email-monthly-report-free-banner-cta-free-scan = Get first scan free
email-monthly-report-free-banner-cta-upgrade = Get { -brand-monitor-plus }
email-monthly-report-hero-free-no-breaches-heading = Great news!
email-monthly-report-hero-free-no-breaches-body = You currently have no data breaches that need action.
email-monthly-report-hero-free-no-breaches-cta = View your Dashboard
email-unsubscribe-link = <link_to_unsub>Unsubscribe from this email</link_to_unsub> anytime.
