# Strings in this file are not yet final, and thus should not be localized yet.

-brand-fx-desktop = { -brand-firefox } for Desktop
-brand-fx-mobile = { -brand-firefox } for Mobile

main-nav-button-collapse-label = Collapse menu
main-nav-button-collapse-tooltip = Collapse menu
main-nav-button-expand-label = Expand menu
main-nav-button-expand-tooltip = Expand menu
main-nav-label = Navigation
main-nav-link-home-label = Home
main-nav-link-dashboard-label = Dashboard
main-nav-link-faq-label = FAQs
main-nav-link-faq-tooltip = Frequently asked questions

mobile-menu-label = Main menu

toolbar-app-picker-trigger-title = { -brand-mozilla } apps and services
toolbar-app-picker-product-vpn = { -brand-mozilla-vpn }
toolbar-app-picker-product-relay = { -brand-relay }
toolbar-app-picker-product-pocket = { -brand-pocket }
toolbar-app-picker-product-fx-desktop = { -brand-fx-desktop }
toolbar-app-picker-product-fx-mobile = { -brand-fx-mobile }
toolbar-app-picker-by-mozilla = Made by { -brand-mozilla }

footer-external-link-faq-label = FAQs
footer-external-link-faq-tooltip = Frequently asked questions

premium-badge-label = { -brand-premium }

# Chart summarizing total exposures

# The number inside <nr> will be displayed in a large font,
# the label inside <label> will be shown underneath, in a smaller font.
# Variables:
#   $nr (number) - Total number of exposures found for the user
exposure-chart-heading = { $nr ->
  [one] <nr>{ $nr }</nr> <label>exposure</label>
  *[other] <nr>{ $nr }</nr> <label>exposures</label>
}
exposure-chart-legend-heading-type = Exposure
exposure-chart-legend-heading-nr = Number
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-caption = This chart shows how many times your info is actively exposed.
exposure-chart-returning-user-upgrade-prompt = Home address, family members and more are not yet included.
exposure-chart-returning-user-upgrade-prompt-cta = Start a free scan

modal-active-number-of-exposures-title = About your number of active exposures
# Variables:
#   $limit (number) - Number of email addresses included in the plan
modal-active-number-of-exposures-part-one = 
  { $limit -> 
    [one] This chart includes the total number of times we found each type of data exposed across all data broker profiles and all data breaches for the { $limit } email address that you are currently monitoring.
    *[other] This chart includes the total number of times we found each type of data exposed across all data broker profiles and all data breaches for up to { $limit } email addresses that you are currently monitoring.
  }
modal-active-number-of-exposures-part-two = For example, if you have 10 exposures of your phone number, that might mean one phone number is exposed across 10 different sites, or it could mean 2 different phone numbers were exposed across 5 different sites.
modal-active-number-of-exposures-part-three = This chart does not include any exposures that are in-progress of being auto-removed. Once your exposures are fixed, they will be added to your total number of fixed exposures on the Fixed page.

# Here's What We Fixed Progress Card

exposure-card-company-logo = Company logo
exposure-card-company = Company domain
exposure-card-exposure-type = Exposure type
exposure-card-date-found = Date of the exposure

progress-card-heres-what-we-fixed-headline = Here is what we fixed
progress-card-resolved-by-you-headline = Resolved by you
progress-card-auto-removed-headline = Auto-removed
# Variables:
# $percentage is the percentage value of exposures fixed, e.g. 70%.
progress-card-percentage-complete = { $percentage }% complete
# Variables:
# $percentage is the percentage value of exposures remaining, e.g. 70%.
progress-card-percentage-remaining = { $percentage }% in progress
full-name = Full name

# Here's What We Fixed Modal

modal-heres-what-we-fixed-title = About what we fixed
modal-heres-what-we-fixed-description-part-one = <b>Resolved by you</b> includes anything you have manually fixed. 
  All data breaches that require access to your accounts need to be fixed manually, 
  even if you have upgraded to { -brand-premium }.
modal-heres-what-we-fixed-description-part-two = <b>Auto-removed</b> includes any exposures from data broker
  profiles that we have removed for you. This is available only for
  { -brand-premium } subscribers. Complete includes anything resolved by you or
  auto-removed by us.
modal-heres-what-we-fixed-description-part-three = <b>In Progress</b> includes anything that we are currently
  working on fixing. Removals typically take 7-14 days but the most
  difficult sites could take longer. You may also start to see removals
  happening within the same day.
modal-cta-ok = OK
modal-open-alt = Open modal
modal-close-alt = Close modal

# Icon alts / aria-labels
chevron-down-alt = Expand
chevron-up-alt = Collapse
open-in-new-tab-alt = Open link in a new tab

# Status Pill

status-pill-action-needed = Action needed
status-pill-progress = In progress
status-pill-fixed = Fixed

# Exposure Card

exposure-card-family-members = Family members
exposure-card-email = Email
exposure-card-phone-number = Phone number
exposure-card-address = Address
exposure-card-credit-card = Credit Card
exposure-card-password = Password
exposure-card-ip-address = IP Address
exposure-card-other = Other
# Variables:
# $exposure_num is the number of exposures found for a particular type, e.g. 3 found 
exposure-card-num-found = 
  { $exposure_num ->
     *[other] { $exposure_num } found
  }
exposure-card-description-info-for-sale-part-one = This site is selling and publishing <data_broker_link>details about you.</data_broker_link>
exposure-card-description-info-for-sale-part-two = Remove this profile to protect your privacy.
# Variables:
# $data_breach_company is the company associated with the data breach.
# $data_breach_date is the date of the data breach.
exposure-card-description-data-breach-part-one = Your information was exposed in the <data_breach_link>{ $data_breach_company } data breach on { $data_breach_date }.</data_breach_link>
exposure-card-description-data-breach-part-two = We’ll walk you through the steps to fix it.
exposure-card-your-exposed-info = Your exposed info:
exposure-card-exposure-type-data-broker = Info for sale
exposure-card-exposure-type-data-breach = Data breach
exposure-card-cta = Let’s fix it
exposure-card-label-company-logo = Company logo
exposure-card-label-company = Company
exposure-card-label-exposure-type = Exposure type
exposure-card-label-date-found = Date found
# Status of the exposure card, could be In Progress, Fixed or Action Needed
exposure-card-label-status = Status

# About Exposure Types Modal

modal-exposure-type-title = About exposure types
# Variables:
# $data_broker_sites_total_num is the total number of data broker sites available to scan. It will always be more than 1.
modal-exposure-type-description = We search for you in all known data breaches and { $data_broker_sites_total_num } data broker sites that sell your personal info. Here are the two types of exposures we find:
modal-exposure-type-data-breach = <b>Data breach</b> means your information has been compromised in a breach and could be in the wrong hands. 
  Resolving these typically requires accessing your accounts, so you’ll need to take manual steps to resolve each breach even if you’ve upgraded to { -brand-premium }.
modal-exposure-type-data-broker-part-one = <b>Info for sale</b> means a data broker site is publicly publishing and selling your personal info. 
  You’ll need to manually request removal from each site. 
modal-exposure-type-data-broker-part-two = If you’re a { -brand-premium } user, we automatically remove all profiles for you. 
  In both cases, removals typically take 7-14 days. Some can take longer, while others can happen within the hour.

# About Exposure Statuses Modal

modal-exposure-status-title = About exposure statuses
# Variables:
# $data_broker_sites_total_num is the total number of data broker sites available to scan. It will always be plural.
modal-exposure-status-description = We search for exposures in all known data breaches and { $data_broker_sites_total_num } data broker sites that sell your personal info.
  Your exposures will have one of the following statuses: 
modal-exposure-status-action-needed = <b>Action needed</b> means it is currently active and you need to take steps to fix it.
modal-exposure-status-in-progress = <b>In progress</b> means we are actively working on fixing the exposure for you. This is a { -brand-premium } feature.
modal-exposure-status-fixed = <b>Fixed</b> means the exposure has been resolved and theres no action for you to take.

# Dashboard

dashboard-tab-label-action-needed = Action needed
dashboard-tab-label-fixed = Fixed

dashboard-exposures-filter = Filter
dashboard-exposures-filter-company = Company
dashboard-exposures-filter-exposure-type = Exposure type
dashboard-exposures-filter-exposure-type-info-for-sale = Your info for sale
dashboard-exposures-filter-exposure-type-data-breach = Data breach
dashboard-exposures-filter-date-found = Date found
dashboard-exposures-filter-date-found-last-seven-days = Last 7 days
dashboard-exposures-filter-date-found-last-thirty-days = Last 30 days
dashboard-exposures-filter-date-found-last-year = Last year
dashboard-exposures-filter-status = Status
dashboard-exposures-filter-status-action-needed = Action Needed
dashboard-exposures-filter-status-in-progress = In Progress
dashboard-exposures-filter-status-fixed = Fixed
popover-open-filter-settings-alt = Select filters
dashboard-exposures-filter-show-all = Show all
dashboard-exposures-filter-show-results = Show results
dashboard-exposures-filter-reset = Reset


dashboard-top-banner-protect-your-data-title = Let’s protect your data
# Variables:
# $data_breach_total_num is the total number of data breaches the user has.
# $data_broker_total_num is the total number of data brokers selling the user’s data.
dashboard-top-banner-protect-your-data-description = We found your data in { $data_breach_total_num } data breaches and { $data_broker_total_num } sites selling your personal info. We’ll guide you on how to fix it.
dashboard-top-banner-protect-your-data-cta = Let’s fix it

dashboard-top-banner-monitor-protects-your-even-more-title = { -product-short-name } now protects you even more
# Variables:
# $data_broker_sites_total_num is the total number of data broker sites available to scan.
dashboard-top-banner-monitor-protects-your-even-more-description = 
  { $data_broker_sites_total_num ->
      [one] We can now find exposures of your personal info on { $data_broker_sites_total_num } data broker site that publish and sell your personal info for a profit.
      *[other] We can now find exposures of your personal info on { $data_broker_sites_total_num } data broker sites that publish and sell your personal info for a profit.
  }
dashboard-top-banner-monitor-protects-your-even-more-cta = Get first scan free
dashboard-top-banner-monitor-protects-your-even-more-learn-more = Learn more

dashboard-top-banner-no-exposures-found-title = No exposures found
# Variables:
# $data_broker_sites_total_num is the total number of data broker sites available to scan. This will always be plural.
dashboard-top-banner-no-exposures-found-description = Great news! We searched all known data breaches and { $data_broker_sites_total_num } data broker sites that sell personal info and found no exposures. Upgrade to premium and we’ll monitor for any new exposures.
dashboard-top-banner-no-exposures-found-cta = Get continuous protection

dashboard-top-banner-lets-keep-protecting-title = Let’s keep protecting your data
# Variables: 
# $remaining_exposures_total_num is the remaining number of exposures the user has to resolve.
dashboard-top-banner-lets-keep-protecting-description = 
  { $remaining_exposures_total_num -> 
    [one] You still have { $remaining_exposures_total_num } exposure left to fix. Keep going and protect yourself. We’ll guide you step by step.
    *[other] You still have { $remaining_exposures_total_num } exposures left to fix. Keep going and protect yourself. We’ll guide you step by step.
  }
dashboard-top-banner-lets-keep-protecting-cta = Let’s keep going

dashboard-top-banner-your-data-is-protected-title = Your data is protected
# Variables: 
# $starting_exposure_total_num is the number of exposures the user has resolved.
dashboard-top-banner-your-data-is-protected-description = 
  { $starting_exposure_total_num ->
    [one] Great work, the exposure of your data is fixed or in progress! We’ll keep monitoring and will alert you of any new exposures.
    *[other] Great work, all { $starting_exposure_total_num } exposures of your data are fixed or in progress! We’ll keep monitoring and will alert you of any new exposures.
  }
dashboard-top-banner-your-data-is-protected-cta = See what’s fixed

dashboard-exposures-area-headline = View all sites where your info is exposed
dashboard-fixed-area-headline = View all exposures that are fixed or in-progress

# Variables: 
# $exposures_total_num is the total number of exposures the user has.
# $data_breach_total_num is the total number of data breaches the user has.
# $data_broker_total_num is the total number of data brokers selling the user’s data.
dashboard-exposures-area-description = We found your information exposed { $exposures_total_num } times over { $data_breach_total_num } data breaches and { $data_broker_total_num } data broker sites that are selling your personal info.
dashboard-exposures-all-fixed-label = All fixed here!

# Variables: 
# $data_broker_total_num is the total number of data brokers selling the user’s data.
dashboard-exposures-all-fixed-free-scan = {
    $data_broker_total_num ->
      [one] Next <link>start your free scan</link> of { $data_broker_total_num } site that may be selling your personal info.
     *[other] Next <link>start your free scan</link> of { $data_broker_total_num } sites that may be selling your personal info.
  }

## False door test

# Strings used in a banner (false door test) to observe engagement with Monitor premium and gauge user interest.

false-door-test-content-part-one = No one should be able to buy your personal information.
false-door-test-content-part-two = Automatically remove data from sites trying to sell it.
false-door-test-content-part-two-dashboard = Auto-delete data from sites trying to sell it.
false-door-test-cta = Count me in
false-door-test-popup-close = Close
