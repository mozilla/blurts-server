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
exposure-card-description-data-breach-part-two = We'll walk you through the steps to fix it.
exposure-card-your-exposed-info = Your exposed info
exposure-card-chevron-down-alt = Drop down button

# Dashboard

dashboard-exposures-area-headline = View all exposures that are fixed or in-progress
# Variables: 
# $exposures_total_num is the total number of exposures the user has.
# $data_breach_total_num is the total number of data breaches the user has.
# $data_broker_total_num is the total number of data brokers selling the user's data.
dashboard-exposures-area-description = We found your information exposed { $exposures_total_num } times over { $data_breach_total_num } data breaches and { $data_broker_total_num } data broker sites that are selling your personal info.