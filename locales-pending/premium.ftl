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

user-menu-trigger-label = Open user menu
user-menu-trigger-tooltip = Profile
user-menu-manage-fxa-label = Manage your { -brand-fx-account }
user-menu-settings-label = Settings
user-menu-settings-tooltip = Configure { -brand-fx-monitor }
user-menu-help-label = Help and support
user-menu-help-tooltip = Get help using { -brand-fx-monitor }
user-menu-signout-label = Sign out
user-menu-signout-tooltip = Sign out of { -brand-fx-monitor }

footer-external-link-faq-label = FAQs
footer-external-link-faq-tooltip = Frequently asked questions

premium-badge-label = { -brand-premium }
premium-cta-label = Upgrade to { -brand-premium }

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
modal-active-number-of-exposures-part-one = 
  { $limit -> 
    [one] This chart includes the total number of times we found each type of data exposed across all data broker profiles and all data breaches for the { $limit } email address that you are currently monitoring.
    *[other] This chart includes the total number of times we found each type of data exposed across all data broker profiles and all data breaches for up to { $limit } email addresses that you are currently monitoring.
  }
modal-active-number-of-exposures-part-two = For example, if you have 10 exposures of your phone number, that might mean one phone number is exposed across 10 different sites, or it could mean 2 different phone numbers were exposed across 5 different sites.
modal-active-number-of-exposures-part-three = This chart does not include any exposures that are in-progress of being auto-removed. Once your exposures are fixed, they will be added to your total number of fixed exposures on the Fixed page.

# Here’s What We Fixed Progress Card

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

# Here’s What We Fixed Modal

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
modal-open-alt = Open
modal-close-alt = Close

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
# Variables:
# $category_label is the data breach exposure type that was leaked. Eg. Email, IP Address.
# $count is the number of times that the data type was leaked.
exposure-card-label-and-count = { $category_label }: { $count }

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


dashboard-top-banner-scan-in-progress-title = Your scan is still in progress
# Variables:
# $unresolved_exposures is the total number of unresolved exposures the user has.
dashboard-top-banner-scan-in-progress-description =
  { $unresolved_exposures ->
      [one] We found { $unresolved_exposures } exposure so far, but we’re still scanning sites that sell your personal info. This should be done within 3 minutes.
      *[other] We found { $unresolved_exposures } exposures so far, but we’re still scanning sites that sell your personal info. This should be done within 3 minutes.
  }
dashboard-top-banner-scan-in-progress-fix-now-hint = You can refresh this page then, or start fixing your data breaches now.
dashboard-top-banner-scan-in-progress-fix-later-hint = You can refresh this page then, or come back later.
dashboard-top-banner-scan-in-progress-cta = See what’s ready now

dashboard-top-banner-protect-your-data-title = Let’s protect your data
# Variables:
# $data_breach_unresolved_num is the unresolved number of data breaches the user has.
# $data_broker_unresolved_num is the unresolved number of data brokers selling the user’s data.
dashboard-top-banner-protect-your-data-description = We found your data in { $data_breach_unresolved_num } data breaches and { $data_broker_unresolved_num } sites selling your personal info. We’ll guide you step-by-step on how to fix it.
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
dashboard-top-banner-no-exposures-found-description = Great news! We searched all known data breaches and { $data_broker_sites_total_num } data broker sites that sell personal info and found no exposures.
dashboard-top-banner-no-exposures-found-upsell-info = Upgrade to { -brand-premium } and we’ll monitor for any new exposures.
dashboard-top-banner-no-exposures-found-cta = Get continuous protection
dashboard-no-exposures-label = No exposures found

dashboard-top-banner-lets-keep-protecting-title = Let’s keep protecting your data
# Variables:
# $exposures_unresolved_num is the remaining number of exposures the user has to resolve.
dashboard-top-banner-lets-keep-protecting-description = 
  { $exposures_unresolved_num -> 
    [one] You still have { $exposures_unresolved_num } exposure left to fix. Keep going and protect yourself. We’ll guide you step-by-step.
    *[other] You still have { $exposures_unresolved_num } exposures left to fix. Keep going and protect yourself. We’ll guide you step-by-step.
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

# Variables:
# $starting_exposure_total_num is the number of exposures the user has resolved.
dashboard-top-banner-your-data-is-protected-all-fixed-description = 
  { $starting_exposure_total_num ->
    [one] Great work, { $starting_exposure_total_num } exposure of your data is fixed! Upgrade to { -brand-premium } and we’ll continue to monitor for new exposures. Plus, we’ll automatically remove your info from any sites that are selling it.
    *[other] Great work, all { $starting_exposure_total_num } exposures of your data are fixed! Upgrade to { -brand-premium } and we’ll continue to monitor for new exposures. Plus, we’ll automatically remove your info from any sites that are selling it.
  }
dashboard-top-banner-your-data-is-protected-all-fixed-cta = Get continuous protection
dashboard-top-banner-non-us-no-exposures-found-description = Great news! We searched all known data breaches and found no exposures. We’ll keep monitoring your email address and will alert you if a new breach occurs.

# Variables:
# $exposures_unresolved_num is the total number of exposures the user has.
# $data_breach_unresolved_num is the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description = {
  $exposures_unresolved_num ->
    [one] {
      $data_breach_unresolved_num ->
        [one] We found your data exposed <b>{ $exposures_unresolved_num }</b> time in <b>{ $data_breach_unresolved_num }</b> data breach. We’ll guide you step-by-step on how to fix it.
        *[other] We found your data exposed <b>{ $exposures_unresolved_num }</b> time in <b>{ $data_breach_unresolved_num }</b> data breaches. We’ll guide you step-by-step on how to fix it.
    }
    *[other] {
      $data_breach_unresolved_num ->
        [one] We found your data exposed <b>{ $exposures_unresolved_num }</b> times in <b>{ $data_breach_unresolved_num }</b> data breach. We’ll guide you step-by-step on how to fix it.
        *[other] We found your data exposed <b>{ $exposures_unresolved_num }</b> times in <b>{ $data_breach_unresolved_num }</b> data breaches. We’ll guide you step-by-step on how to fix it.
    }
}

# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description =
  { $exposures_resolved_num ->
    [one] Great work, the exposure of your data is fixed! We’ll keep monitoring and will alert you of any new exposures.
    *[other] Great work, all { $exposures_resolved_num } exposures of your data are fixed! We’ll keep monitoring and will alert you of any new exposures.
  }

dashboard-top-banner-monitor-more-cta = Monitor more emails

# Variables:
# $exposures_unresolved_num is the unresolved number of exposures the user has.
# $data_breach_unresolved_num is the unresolved number of data breaches the user has.
# $data_broker_unresolved_num is the unresolved number of data brokers selling the user’s data.
dashboard-exposures-area-description = We found your information exposed { $exposures_unresolved_num } times over { $data_breach_unresolved_num } data breaches and { $data_broker_unresolved_num } data broker sites that are selling your personal info.
dashboard-exposures-all-fixed-label = All fixed here!


dashboard-exposures-area-headline = View all sites where your info is exposed
dashboard-fixed-area-headline = View all exposures that are fixed or in-progress

# Variables:
# $exposures_unresolved_num is the unresolved number of exposures the user has.
# $data_breach_unresolved_num is the unresolved number of data breaches the user has.
dashboard-exposures-breaches-scan-progress-description = {
  $exposures_unresolved_num ->
    [one] {
      $data_breach_unresolved_num ->
        [one] We found your information exposed { $exposures_unresolved_num } time in { $data_breach_unresolved_num } data breach. We’re still scanning sites that may be selling your personal info.
        *[other] We found your information exposed { $exposures_unresolved_num } time in { $data_breach_unresolved_num } data breaches. We’re still scanning sites that may be selling your personal info.
    }
    *[other] {
      $data_breach_unresolved_num ->
        [one] We found your information exposed { $exposures_unresolved_num } times in { $data_breach_unresolved_num } data breach. We’re still scanning sites that may be selling your personal info.
        *[other] We found your information exposed { $exposures_unresolved_num } times in { $data_breach_unresolved_num } data breaches. We’re still scanning sites that may be selling your personal info.
    }
}
dashboard-exposures-no-breaches-scan-progress-description = We didn’t find any data breaches, but we’re still scanning sites that may be selling your personal info.
dashboard-exposures-scan-progress-label = Scan in progress

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
false-door-test-phase-2-content-part-one = Did you know there are sites selling your private info?
false-door-test-phase-2-content-part-two = Automatically remove data from sketchy sites.
false-door-test-phase-2-content-part-two-dashboard = Automatically remove data from broker sites. 
false-door-test-phase-3-content-part-one = Did you know there are sites selling your private info?
false-door-test-phase-3-content-part-two = Automatically remove data from sketchy sites with { -product-short-name }.
false-door-test-phase-3-content-part-two-dashboard = Automatically remove data from broker sites with { -product-short-name }.

# Premium upsell dialog

premium-upsell-dialog-title = Choose the level of protection that’s right for you

# Guided Resolution Flow

guided-resolution-flow-exit = Return to dashboard
guided-resolution-flow-back-arrow = Go to previous step
guided-resolution-flow-next-arrow = Go to next step
guided-resolution-flow-step-navigation-label = Guided steps
# Variables
# $estimated_time is the amount of time it would take for a user to manually resolve a leaked password breach. It will always be a number greater than 1.
# "Est." is shortform for "Estimated".
# "mins" is shortform for "minutes".
data-broker-profiles-estimated-time = Est. time to complete: { $estimated_time } mins
# Variables
# $exposure_reduction is the percentage of exposures that are data brokers.
data-broker-profiles-exposure-reduction = Exposure reduction: { $exposure_reduction }%

# Welcome to Premium Data Broker Profiles

# Exposure reduction chart
# The number inside <nr> will be displayed in a large font,
# the label inside <label_line_1> will be shown in a smaller font. First line of the label
# the label inside <label_line_2>  will be shown in smaller font. Second line of the label
# Variables:
#   $nr (number) - % of exposures reduced for the user
exposure-reduction-chart-heading = <nr>{ $nr }</nr><percent>%</percent>
exposure-reduction-chart-explanation = <label_line_1>exposures will</label_line_1><label_line_2>be reduced</label_line_2>

welcome-to-premium-data-broker-profiles-title-part-one = Welcome to { -brand-premium }.
welcome-to-premium-data-broker-profiles-title-part-two = We’ll remove those profiles ASAP.
# Variables:
# $profile_total_num is the number of exposures came back from user data broker scans.
# $exposure_reduction_percentage is the percent by which exposures are reduced
welcome-to-premium-data-broker-profiles-description-part-one =  
  { $profile_total_num ->
    [one] We’ve already started our auto-removal process of 1 profile — which will reduce your exposures by { $exposure_reduction_percentage }%.
    *[other] We’ve already started our auto-removal process of { $profile_total_num } profiles — which will reduce your exposures by { $exposure_reduction_percentage }%.
  }
welcome-to-premium-data-broker-profiles-description-part-two = Removals typically take 7-14 days, but some may happen within the hour. No matter how long it takes, we’ll keep working on it.
welcome-to-premium-data-broker-profiles-description-part-three = Next we’ll guide you through high risk data breaches that require manual steps.
welcome-to-premium-data-broker-profiles-cta-label = Let’s keep going

# High Risk Data Breaches

high-risk-breach-heading = Here’s what to do
high-risk-breach-subheading = This requires access to your sensitive info, so you’ll need to manually fix it.
# Variables
# $num_breaches is the number of breaches where the high risk data was found.
high-risk-breach-summary = { $num_breaches ->
  [one] It appeared in { $num_breaches } data breach:
  *[other] It appeared in { $num_breaches } data breaches:
}
# Variables
# $breach_name is the name of the breach where the high risk data was found.
# $breach_date is the date when the breach occurred. 
# An example of this string is Twitter on 13/09/18.
high-risk-breach-name-and-date = { $breach_name } <breach_date>on { $breach_date }</breach_date>
high-risk-breach-mark-as-fixed = Mark as fixed
high-risk-breach-skip = Skip for now
# Variables:
# $estimated_time is the estimated time it would take for a user to complete breach resolution steps. It not be singular, and the + is meant as "or more".
# An example of this string is Your estimated time: 15+ minutes.
high-risk-breach-estimated-time = Your estimated time: { $estimated_time }+ minutes

# Credit Card Breaches

high-risk-breach-credit-card-title = Your credit card number was exposed
high-risk-breach-credit-card-description = Anyone who gets it can make unauthorized purchases that you may be liable for. Act now to prevent financial harm.
high-risk-breach-credit-card-step-one = If you still have this card, contact the issuer to report it stolen.
high-risk-breach-credit-card-step-two = Request a new card with a new number.
high-risk-breach-credit-card-step-three = Check your accounts for unauthorized charges.

# Bank Account Breaches

high-risk-breach-bank-account-title = Your bank account was exposed
high-risk-breach-bank-account-description = Taking action ASAP could give you more legal protections to help you recover any losses.
high-risk-breach-bank-account-step-one = Notify your bank immediately that your account number has been compromised.
high-risk-breach-bank-account-step-two = Change your account number.
high-risk-breach-bank-account-step-three = Check your accounts for unauthorized charges.

# Social Security Number Breaches

high-risk-breach-social-security-title = Your social security number was exposed
high-risk-breach-social-security-description = Scammers can open up new loans or credit cards with your social security number. Act fast to prevent financial harm.
high-risk-breach-social-security-step-one = Protect yourself by <link_to_info>setting up a fraud alert or freezing your credit.</link_to_info>
high-risk-breach-social-security-step-two = <link_to_info>Check your credit report</link_to_info> for unrecognized accounts.

# Social Security Number Modal

ssn-modal-title = About fraud alerts and credit freezes
ssn-modal-description-fraud-part-one = <b>A fraud alert</b> requires businesses to verify your identity before it issues new credit in your name. It’s free, lasts one year, and won’t negatively affect your credit score. 
ssn-modal-description-fraud-part-two = To set one up, contact any one of the three credit bureaus. You don’t have to contact all three.
ssn-modal-description-freeze-credit-part-one = <b>Freezing your credit</b> prevents anyone from opening a new account in your name. It’s free and won’t negatively affect your credit score, but you’ll need to unfreeze it before opening any new accounts. 
ssn-modal-description-freeze-credit-part-two = To freeze your credit, contact each of the three credit bureaus — <equifax_link>Equifax</equifax_link>, <experian_link>Experian</experian_link>, and <transunion_link>TransUnion</transunion_link>.
ssn-modal-learn-more = Learn more about fraud alerts and credit freezes
ssn-modal-ok = OK

# PIN Breaches 

high-risk-breach-pin-title = Your PIN was exposed
high-risk-breach-pin-description = Taking action ASAP could give you more legal protections to help you recover any losses.
high-risk-breach-pin-step-one = Notify your bank immediately that your PIN has been compromised.
high-risk-breach-pin-step-two = Change your PIN anywhere you’ve used the same one.
high-risk-breach-pin-step-three = Check your accounts for unauthorized charges.

# No high risk breaches found

high-risk-breach-none-title = Great news, we didn’t find any high risk data breaches
# Variables
# $email_list is list of emails that the user is monitoring for breaches. E.g. john@yahoo.com, ali@gmail.com, sam@hotmail.com 
high-risk-breach-none-description = We detect data breaches based on your email address, and we didn’t find any high risk data breaches for { $email_list }.
high-risk-breach-none-sub-description-part-one = High risk data breaches include:
high-risk-breach-none-sub-description-ssn = Social security number
high-risk-breach-none-sub-description-bank-account = Bank account info
high-risk-breach-none-sub-description-cc-number = Credit card numbers
high-risk-breach-none-sub-description-pin = PINs
high-risk-breach-none-continue = Continue

# Security recommendations

security-recommendation-steps-label = Security recommendations
security-recommendation-steps-title = Here’s our advice:
security-recommendation-steps-cta-label = Got it!

# Phone security recommendation

security-recommendation-phone-title = Protect your phone number
# $num_breaches is the number of breaches where the phone number was found.
security-recommendation-phone-summary = { $num_breaches ->
  [one] Your phone number was exposed in { $num_breaches } data breach:
  *[other] Your phone number was exposed in { $num_breaches } data breaches:
}
security-recommendation-phone-description = Unfortunately you can’t take it back. But there are steps you can take to make sure you stay safe.
security-recommendation-phone-step-one = Block spam numbers to prevent more junk calls
security-recommendation-phone-step-two = Don’t click on links in texts from unknown senders; if it appears to be from a trusted source, call directly to confirm
security-recommendation-phone-step-three = Use a <link_to_info>{ -brand-relay } phone mask</link_to_info> to protect your phone in the future

# Email security recommendation

security-recommendation-email-title = Protect your email address
# $num_breaches is the number of breaches where the email address was found.
security-recommendation-email-summary = { $num_breaches ->
  [one] Your email address was exposed in { $num_breaches } data breach:
  *[other] Your email address was exposed in { $num_breaches } data breaches:
}
security-recommendation-email-description = Unfortunately you can’t fix this. But there are steps you can take to protect yourself.
security-recommendation-email-step-one = Don’t click on links in emails from unknown senders; If it appears to be from trusted source, call directly to confirm
security-recommendation-email-step-two = Be aware of <link_to_info>phishing scams</link_to_info>
security-recommendation-email-step-three = Mark suspicious emails as spam and block the sender
security-recommendation-email-step-four = Use <link_to_info>{ -brand-relay } email masks</link_to_info> to protect your email in the future

# IP security recommendation

security-recommendation-ip-title = Use a VPN for added privacy
# $num_breaches is the number of breaches where the IP address was found.
security-recommendation-ip-summary = { $num_breaches ->
  [one] Your IP address was exposed in { $num_breaches } data breach:
  *[other] Your IP address was exposed in { $num_breaches } data breaches:
}
security-recommendation-ip-description = Your IP address pinpoints your location and internet service provider. Hackers could use this information to find your location or try to connect to your devices.
security-recommendation-ip-step-one = Use a VPN (such as <link_to_info>{ -brand-mozilla-vpn }</link_to_info>) to hide your real IP address and use the internet privately.

# Leaked Passwords

# Variables
# $breach_name is the name of the breach where the leaked password was found.
leaked-passwords-title = Your { $breach_name } password was exposed.
# Variables
# $breach_date is the date when the breach occurred. 
leaked-passwords-summary = It appeared in a data breach on { $breach_date }.
leaked-passwords-description = Scammers can access your account and will likely try to use it on other accounts to see if you’ve used the same password. Change it anywhere you’ve used it to protect yourself.
leaked-passwords-steps-title = Here’s what to do
leaked-passwords-steps-subtitle = This requires access to your account, so you’ll need to manually fix it.
# Variables
# $breach_name is the name of the breach where the leaked password was found.
leaked-passwords-step-one = Change your password on <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-passwords-step-two = Change it anywhere else you’ve used it.
leaked-passwords-mark-as-fixed = Mark as fixed
leaked-passwords-skip = Skip for now
# Variables
# $estimated_time is the amount of time it would take for a user to manually resolve a leaked password breach. It will always be a number greater than 1.
# "Est." is shortform for "Estimated".
# "mins" is shortform for "minutes".
leaked-passwords-estimated-time = Est. time to complete: { $estimated_time } mins per site

# Leaked Security Questions

leaked-security-questions-title = Your security questions were exposed
# Variables
# $breach_name is the name of the breach where the leaked security questions were found.
# $breach_date is the date when the breach occurred. 
# An example of this string is Twitter on 13/09/18.
leaked-security-questions-summary = They appeared in a data breach on { $breach_name } on { $breach_date }.
leaked-security-questions-description = Scammers can use these to access your accounts, and any other site where you’ve used the same security questions. Update them now to protect your accounts.
leaked-security-questions-steps-title = Here’s what to do
leaked-security-questions-steps-subtitle = This requires access to your account, so you’ll need to manually fix it.
# Variables
# $breach_name is the name of the breach where the security questions were found.
leaked-security-questions-step-one = Update your security questions on <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-security-questions-step-two = Update them on any other site where you used the same security questions. Be sure to use different security questions for every account.

# Subscription
subscription-check-loading = Loading, please wait…
