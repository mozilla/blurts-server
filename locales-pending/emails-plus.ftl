# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Strings in this file are not yet final, and thus should not be localised yet.

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

## Upcoming expiration email

email-plus-expiration-subject = Your { -brand-monitor-plus } subscription is expiring
email-plus-expiration-preview = Renew to continue your access to data breach and broker alerts
email-plus-expiration-heading = Your subscription expires soon
# Variables:
#    $end_date (string) - The localised date the subscription will expire, e.g. "April 2, 1337".
email-plus-expiration-body-part1 = Your { -brand-monitor-plus } subscription ends on { $end_date }. After that, you won’t be able to use { -brand-monitor-plus } for data breach and broker alerts that keep your information safe.
# Variables:
#    $end_date (string) - The localised date the subscription will expire, e.g. "April 2, 1337".
email-plus-expiration-body-part2-styled = To keep your access, sign in and <renewal-link>renew your subscription</renewal-link> before <b>{ $end_date }</b>. If you need help, <support-link>contact our Support team</support-link>.
# Variables:
#    $end_date (string) - The localised date the subscription will expire, e.g. "April 2, 1337".
#    $renewal_link (string) - The URL the user can visit to renew their subscription, e.g. "https://monitor.mozilla.com/user/plus-expiration/"
email-plus-expiration-body-part2-plain = To keep your access, sign in and renew your subscription before { $end_date }: { $renewal_link }.
# Variables:
#    $support_link (string) - The URL the user can visit to contact support, e.g. "https://support.mozilla.org/questions/new/monitor/form"
email-plus-expiration-body-part3-plain = If you need help, contact our Support team: { $support_link }.

# Variables:
#    $end_date (string) - The localised date the subscription will expire, e.g. "April 2, 1337".
#    $support_link (string) - URL of the support site, e.g. "https://support.mozilla.org".
email-plus-expiration-body-plain = Your subscription to { -brand-mozilla-monitor-plus } will end on { $end_date }. After this date, you will lose access to { -brand-monitor-plus }. If you’d like to continue enjoying { -brand-monitor-plus }, you can reactivate your subscription anytime in your Account Settings before { $end_date }. If you need assistance, our support team is here for you anytime at https://support.mozilla.org.
email-plus-expiration-signoff = Thanks for being a part of { -brand-monitor },
email-plus-expiration-sender = The { -brand-mozilla } team
email-plus-expiration-trailer-button = Renew and save 10%
email-plus-expiration-trailer-terms = Limited terms and restrictions apply
