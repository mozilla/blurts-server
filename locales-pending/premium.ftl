# Strings in this file are not yet final, and thus should not be localised yet.

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

toolbar-app-picker-trigger-title = { -brand-mozilla } apps and services
toolbar-app-picker-product-vpn = { -brand-mozilla-vpn }
toolbar-app-picker-product-relay = { -brand-relay }
toolbar-app-picker-product-pocket = { -brand-pocket }
toolbar-app-picker-product-fx-desktop = { -brand-fx-desktop }
toolbar-app-picker-product-fx-mobile = { -brand-fx-mobile }
toolbar-app-picker-by-mozilla = Made by { -brand-mozilla }

footer-external-link-faq-label = FAQs
footer-external-link-faq-tooltip = Frequently asked questions

# Chart summarising total exposures

# The number inside <nr> will be displayed in a large font,
# the label inside <label> will be shown underneath, in a smaller font.
# Variables:
#   $nr (number) - Total number of exposures found for the user
exposure-chart-heading = <nr>{ $nr }</nr> <label>exposures</label>
exposure-chart-legend-heading-type = Exposure
exposure-chart-legend-heading-nr = Number
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }x

# Here's What We Fixed Progress Card

progress-card-heres-what-we-fixed-headline = Here is what we fixed
progress-card-resolved-by-you-headline = Resolved by you
progress-card-auto-removed-headline = Auto-removed
# Variables:
# $percentage is the percentage value of exposures fixed, e.g. 70%.
progress-card-percentage-complete = { $percentage }% complete
# Variables:
# $percentage is the percentage value of exposures remaining, e.g. 70%.
progress-card-percentage-remaining = { $percentage }% in progress

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

status-pill-action-needed = Action Needed
status-pill-progress = In Progress
status-pill-fixed = Fixed

# Exposure Card

exposure-card-family-members = Family members
exposure-card-email = Email
exposure-card-phone-number = Phone number
exposure-card-address = Address
exposure-card-credit-card = Credit Card
exposure-card-password = Password
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
# $data_breach_company is the company assosciated with the data breach.
# $data_breach_date is the date of the data breach.
exposure-card-description-data-breach-part-one = Your information was exposed in the <data_breach_link>{ $data_breach_company } data breach on { $data_breach_date }.</data_breach_link>
exposure-card-description-data-breach-part-two = We’ll walk you through the steps to fix it.
exposure-card-your-exposed-info = Your exposed info
exposure-card-exposure-type-data-broker = Info for sale
exposure-card-exposure-type-data-breach = Data breach
exposure-card-cta = Let’s fix it
exposure-card-label-company-logo = Company logo
exposure-card-label-company = Company
exposure-card-label-exposure-type = Exposure type
exposure-card-label-date-found = Date found
# Status of the exposure card, could be In Progress, Fixed or Action Needed
exposure-card-label-status = Status

# Dashboard

dashboard-top-banner-protect-your-data-title = Let’s protect your data
# Variables:
# $data_breach_total_num is the total number of data breaches the user has.
# $data_broker_total_num is the total number of data brokers selling the user’s data.
dashboard-top-banner-protect-your-data-description = We found your data in { $data_breach_total_num } data breaches and { $data_broker_total_num } sites selling your personal info. We’ll guide you on how to fix it.
dashboard-top-banner-protect-your-data-cta = Let’s fix it

dashboard-top-banner-monitor-protects-your-even-more-title = Monitor now protects you even more
# Variables:
# $data_broker_sites_total_num is the total number of data broker sites available to scan.
dashboard-top-banner-monitor-protects-your-even-more-description = 
  { $data_broker_sites_total_num ->
      [one] We can now find exposures of your personal info on { $data_broker_sites_total_num } data broker site that publish and sell your personal info for a profit.
      *[other] We can now find exposures of your personal info on { $data_broker_sites_total_num } data broker sites that publish and sell your personal info for a profit.
  }
dashboard-top-banner-monitor-protects-your-even-more-cta = Get first scan free

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
    [one] You still have { $remaining_exposures_total_num} exposure left to fix. Keep going and protect yourself. We’ll guide you step by step.
    *[other] You still have { $remaining_exposures_total_num} exposures left to fix. Keep going and protect yourself. We’ll guide you step by step.
  }
dashboard-top-banner-lets-keep-protecting-cta = Let’s keep going

dashboard-top-banner-your-data-is-protected-title = Your data is protected
# Variables: 
# $starting_exposures_total_num is the number of exposures the user has resolved.
dashboard-top-banner-your-data-is-protected-description = 
  { $starting_exposures_total_num ->
    [one] Great work, the exposure of your data is fixed or in progress! We’ll keep monitoring and will alert you of any new exposures.
    *[other] Great work, all { $starting_exposure_total_num } exposures of your data are fixed or in progress! We’ll keep monitoring and will alert you of any new exposures.
  }
dashboard-top-banner-your-data-is-protected-cta = See what’s fixed

dashboard-exposures-area-headline = View all exposures that are fixed or in-progress
# Variables: 
# $exposures_total_num is the total number of exposures the user has.
# $data_breach_total_num is the total number of data breaches the user has.
# $data_broker_total_num is the total number of data brokers selling the user’s data.
dashboard-exposures-area-description = We found your information exposed { $exposures_total_num } times over { $data_breach_total_num } data breaches and { $data_broker_total_num } data broker sites that are selling your personal info.
