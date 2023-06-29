# Strings in this file are not yet final, and thus should not be localised yet.

main-nav-button-collapse-label = Collapse menu
main-nav-button-collapse-tooltip = Collapse menu
main-nav-button-expand-label = Expand menu
main-nav-button-expand-tooltip = Expand menu
main-nav-link-home-label = Home
main-nav-link-dashboard-label = Dashboard
main-nav-link-faq-label = FAQs
main-nav-link-faq-tooltip = Frequently asked questions

footer-external-link-faq-label = FAQs
footer-external-link-faq-tooltip = Frequently asked questions

# Icon alts / aria-labels
chevron-down-alt = Drop down button
open-in-new-tab-aria-label = Open link in a new tab
open-in-new-tab-alt = Open button

# Status Pill

status-pill-action-needed = Action Needed
status-pill-progress = In Progress
status-pill-fixed = Fixed

# Exposure Card

exposure-card-family-members = Family members
exposure-card-email = Email
exposure-card-phone-number = Phone number
exposure-card-address = Address
# Variables:
# $exposure_num is the number of exposures found for a particular type, e.g. 3 found 
exposure-card-num-found = 
  { $exposure_num ->
     *[other] { $exposure_num } found
  }
exposure-card-description-info-for-sale-part-one = This site is selling and publishing <data_broker_link>details about you</data_broker_link>
exposure-card-description-info-for-sale-part-two = Remove this profile to protect your privacy.
# Variables:
# $data_breach_company is the company assosciated with the data breach.
# $data_breach_date is the date of the data breach.
exposure-card-description-data-breach-part-one = Your information was exposed in the <data_breach_link>{ $data_breach_company } data breach on { $data_breach_date }</data_breach_link>
exposure-card-description-data-breach-part-two = We’ll walk you through the steps to fix it.
exposure-card-your-exposed-info = Your exposed info
exposure-card-exposure-type-data-broker = Info for sale
exposure-card-exposure-type-data-breach = Data breach
exposure-card-cta = Let’s fix it

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
dashboard-top-banner-lets-keep-protecting-description = {
  $remaining_exposures_total_num -> 
    [one] You still have { $remaining_exposures_total_num} exposure left to fix. Keep going and protect yourself. We’ll guide you step by step.
    *[other] You still have { $remaining_exposures_total_num} exposures left to fix. Keep going and protect yourself. We’ll guide you step by step.
  }
dashboard-top-banner-lets-keep-protecting-cta = Let’s keep going

dashboard-top-banner-your-data-is-protected-title = Your data is protected
# Variables: 
# $starting_exposures_total_num is the number of exposures the user has resolved.
dashboard-top-banner-your-data-is-protected-description = {
  $starting_exposures_total_num ->
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
