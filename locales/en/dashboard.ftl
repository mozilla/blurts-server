# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Chart summarizing total exposures

# The number inside <nr> will be displayed in a large font,
# the label inside <label> will be shown underneath, in a smaller font.
# Variables:
#   $nr (number) - Number of unresolved exposures for the user
exposure-chart-heading = { $nr ->
  [one] <nr>{ $nr }</nr> <label>exposure</label>
  *[other] <nr>{ $nr }</nr> <label>exposures</label>
}
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <nr>{ $nr }</nr> <label>Fixed</label>
exposure-chart-legend-heading-type = Exposure
exposure-chart-legend-heading-nr = Number
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-caption = This chart shows how many times your info is actively exposed.
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = This chart shows the total exposures that are fixed ({ $total_fixed_exposures_num } out of { $total_exposures_num })
exposure-chart-returning-user-upgrade-prompt = Home address, family members and more are not yet included.
exposure-chart-returning-user-upgrade-prompt-cta = Start a free scan
exposure-chart-scan-in-progress-prompt = <b>Scan in progress:</b> address, family members, and more are not yet included.

modal-active-number-of-exposures-title = About your number of active exposures
# Variables:
#   $limit (number) - Number of email addresses included in the plan
modal-active-number-of-exposures-part-one-all =
  { $limit ->
    [one] This chart includes the total number of times we found each type of data exposed across all data breaches for the { $limit } email address that you are currently monitoring.
    *[other] This chart includes the total number of times we found each type of data exposed across all data breaches for up to { $limit } email addresses that you are currently monitoring.
  }
modal-active-number-of-exposures-part-two = For example, if you have 10 exposures of your phone number, that might mean one phone number is exposed across 10 different sites, or it could mean 2 different phone numbers were exposed across 5 different sites.
modal-active-number-of-exposures-part-three-all = Once they are resolved, they will be added to your total number of fixed exposures on the Fixed page.
modal-fixed-number-of-exposures-title = About your number of fixed exposures
modal-fixed-number-of-exposures-all = This chart includes the total number of data breaches that have been fixed for all email addresses you’re currently monitoring. Once exposures are marked as fixed, they’ll be added to the total here.

modal-cta-ok = OK
modal-cta-got-it = Got it
open-modal-alt = Open modal
close-modal-alt = Close modal

progress-card-heres-what-we-fixed-headline-all = Here’s what you fixed
progress-card-manually-fixed-headline = Manually fixed

dashboard-tab-label-action-needed = Action needed
dashboard-tab-label-fixed = Fixed
dashboard-exposures-all-fixed-label = All fixed here!


dashboard-exposures-area-headline = View all sites where your info is exposed
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 = {
  $exposures_unresolved_num ->
    [one] We found { $exposures_unresolved_num } exposure of your data.
    *[other] We found { $exposures_unresolved_num } exposures of your data.
}

# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 =  {
  $data_breach_unresolved_num ->
    [one] It appeared in { $data_breach_unresolved_num } data breach.
    *[other] It appeared across { $data_breach_unresolved_num } data breaches.
}
dashboard-fixed-area-headline-all = View all exposures that are fixed

# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Filter
dashboard-exposures-filter-company = Company
dashboard-exposures-filter-date-found = Date found
dashboard-exposures-filter-date-found-last-seven-days = Last 7 days
dashboard-exposures-filter-date-found-last-thirty-days = Last 30 days
dashboard-exposures-filter-date-found-last-year = Last year
dashboard-exposures-filter-status = Status
popover-open-filter-settings-alt = Select filters
dashboard-exposures-filter-show-all = Show all
dashboard-exposures-filter-show-results = Show results
dashboard-exposures-filter-reset = Reset

## Top banner on the dashboard

dashboard-top-banner-section-label = Dashboard summary

dashboard-top-banner-your-data-is-protected-title = Your data is protected
dashboard-top-banner-your-data-is-protected-cta = See what’s fixed


dashboard-top-banner-protect-your-data-title = Let’s protect your data
dashboard-top-banner-protect-your-data-cta = Let’s fix it

# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 = {
  $exposures_unresolved_num ->
    [one] We found { $exposures_unresolved_num } exposure of your data.
    *[other] We found { $exposures_unresolved_num } exposures of your data.
}
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 = {
  $data_breach_unresolved_num ->
    [one] It appeared in { $data_breach_unresolved_num } data breach. We’ll guide you step-by-step on how to fix it.
    *[other] It appeared across { $data_breach_unresolved_num } data breaches. We’ll guide you step-by-step on how to fix it.
}

dashboard-top-banner-no-exposures-found-title = No exposures found
dashboard-top-banner-non-us-no-exposures-found-description = Great news! We searched all known data breaches and found no exposures. We’ll keep monitoring your email address and will alert you if a new breach occurs.
dashboard-no-exposures-label = No exposures found

# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description =
  { $exposures_resolved_num ->
    [one] Great work, the exposure of your data is fixed! We’ll keep monitoring and will alert you of any new exposures.
    *[other] Great work, all { $exposures_resolved_num } exposures of your data are fixed! We’ll keep monitoring and will alert you of any new exposures.
  }

dashboard-top-banner-monitor-more-cta = Monitor more emails

# Exposure reduction chart

# The number inside <nr> will be displayed in a large font,
# Variables:
#   $nr (number) - % of exposures reduced for the user
exposure-reduction-chart-heading = <nr>{ $nr }</nr><percent>%</percent>
# the label inside <label_line_1> will be shown in a smaller font. First line of the label
# the label inside <label_line_2> will be shown in smaller font. Second line of the label
exposure-reduction-chart-explanation = <label_line_1>exposures may</label_line_1><label_line_2>be reduced</label_line_2>

# About Exposure Indicators Modal

modal-exposure-status-description-all = We search for exposures in all known data breaches.
  Your exposures will have one of the following statuses:
modal-exposure-indicator-title = Exposure statuses
modal-exposure-indicator-action-needed = Advanced or manual action is needed by you to complete an action.
modal-exposure-indicator-fixed = The exposure has been resolved and there’s no action for you to take.
