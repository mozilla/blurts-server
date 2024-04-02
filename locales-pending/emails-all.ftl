# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Strings in this file are not yet final, and thus should not be localised yet.

email-header-logo-alt = { -brand-mozilla-monitor }
email-header-button-sign-in = Sign in

email-footer-support-heading = Questions about { -brand-mozilla-monitor }?
email-footer-support-content = Visit our <support-link>Support Center</support-link> for help
email-footer-reason-subscriber = You’re receiving this automated email as a subscriber of { -brand-mozilla-monitor }. If you received it in error, no action is required. For more information, please visit <support-link>{ -brand-Mozilla } Support</support-link>.
email-footer-source-hibp = Breach data provided by <hibp-link>{ -brand-HIBP }</hibp-link>
email-footer-logo-mozilla-alt = { -brand-mozilla }

## Monthly overview email

# TODO: Before submitting for localisation, rewrite to support possible
#       declension (e.g. "Your monthly Monitor report (April)").
#       See https://github.com/mozilla/blurts-server/pull/4374#discussion_r1546005612
# Variables:
#   $month (string) - Translated month this email is about, e.g. "April"
email-monthly-plus-manual-subject = Your { $month } { -brand-monitor } report
email-monthly-plus-manual-preview = See what was fixed this month and what needs your attention.
email-monthly-plus-manual-hero-heading = Your monthly { -brand-monitor } activity
email-monthly-plus-manual-hero-content = We’re always working to help keep your personal info safe. Here’s what’s happened over the past month.
email-monthly-plus-manual-intro-content = As a { -brand-monitor-plus } subscriber, you have our highest level of protection. Sign in to see what exposures need you to take action, and what’s already been fixed.
email-monthly-plus-manual-cta-label = View your dashboard
email-monthly-plus-manual-fixed-heading = What we fixed
email-monthly-plus-manual-fixed-lead = We auto-remove your personal info from data broker sites — no matter how many times they re-add you. And we guide you to resolve data breaches that require manual action.
# Accompanies a number that indicates how many data broker exposures the user fixed themselves
email-monthly-plus-manual-fixed-section-manual-heading = Manually fixed
# Accompanies a number that indicates how many data broker exposures we're still fixing
email-monthly-plus-manual-fixed-section-in-progress-heading = Removals in progress
# Accompanies a number that indicates how many data broker exposures we've already fixed
email-monthly-plus-manual-fixed-section-done-heading = Auto-removed

# TODO: Before submitting for localisation, rewrite to support possible
#       declension (e.g. "Your monthly Monitor report (April)").
#       See https://github.com/mozilla/blurts-server/pull/4374#discussion_r1546005612
# Variables:
#   $month (string) - Translated month this email is about, e.g. "April"
email-monthly-plus-auto-subject = Your { $month } { -brand-monitor } report
email-monthly-plus-auto-preview = See how we’ve protected your personal information.
email-monthly-plus-auto-hero-heading = Your { -brand-monitor-plus } protection
email-monthly-plus-auto-hero-content = We’re always working to help keep your personal info safe. Here’s how we’ve protected you.
email-monthly-plus-auto-intro-content = As a { -brand-monitor-plus } subscriber, you have our highest level of protection. We remove your personal info from data broker sites — no matter how many times they re-add you. We also help you resolve data breaches that require manual action. Here’s what we fixed:
email-monthly-plus-auto-cta-label = View all activity
# Accompanies a number that indicates how many data broker exposures the user fixed themselves
email-monthly-plus-auto-fixed-section-manual-heading = Manually fixed
# Accompanies a number that indicates how many data broker exposures we're still fixing
email-monthly-plus-auto-fixed-section-in-progress-heading = Removals in progress
# Accompanies a number that indicates how many data broker exposures we've already fixed
email-monthly-plus-auto-fixed-section-done-heading = Auto-removed

# TODO: Before submitting for localisation, rewrite to support possible
#       declension (e.g. "Your monthly Monitor report (April)").
#       See https://github.com/mozilla/blurts-server/pull/4374#discussion_r1546005612
# Variables:
#   $month (string) - Translated month this email is about, e.g. "April"
email-monthly-free-subject = Your { $month } { -brand-monitor } report
email-monthly-free-preview = See what was fixed this month and what needs your attention.
email-monthly-free-hero-heading = Your monthly { -brand-monitor } activity
email-monthly-free-hero-content = We work hard to keep your personal info safe. Find out what’s happened this month.
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
