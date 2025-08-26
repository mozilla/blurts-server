# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Strings in this file are not yet final, and thus should not be localised yet.

fix-flow-nav-data-broker-profiles = Data broker profiles
fix-flow-data-broker-profiles-start-free-scan-headline = Find out which sites are selling your personal info
# Variables:
# $data_broker_count is the number of data brokers scanned monthly
fix-flow-data-broker-profiles-start-free-scan-content-p1 =
  { $data_broker_count ->
    [one] Before you review your data breaches, would you like us to search for you on { $data_broker_count } data broker site that may be selling your personal information?
    *[other] Before you review your data breaches, would you like us to search for you on { $data_broker_count } data broker sites that may be selling your personal information?
  }
fix-flow-data-broker-profiles-start-free-scan-content-p1-masked = Before you review your data breaches, would you like us to search for you on data broker sites that may be selling your personal information?
fix-flow-data-broker-profiles-start-free-scan-content-p2 = Your first scan is free and only takes a few minutes.
fix-flow-data-broker-profiles-start-free-scan-link-learn-more = Learn more
fix-flow-data-broker-profiles-start-free-scan-button-start-scan = Start free scan
fix-flow-data-broker-profiles-start-free-scan-button-skip = Skip for now
# Variables:
# $data_broker_sites_results_num is the number of data broker sites that have your data
fix-flow-data-broker-profiles-view-data-broker-profiles-headline =
  { $data_broker_sites_results_num ->
    [one] { $data_broker_sites_results_num } site is selling your personal information
    *[other] { $data_broker_sites_results_num } sites are selling your personal information
  }
fix-flow-data-broker-profiles-view-data-broker-profiles-content = Data brokers make up a $240 billion industry of gathering your personal info and selling it to anyone searching for you. Remove these now to protect your privacy.
fix-flow-data-broker-profiles-view-data-broker-profiles-button-remove-for-me = Remove them for me
fix-flow-data-broker-profiles-view-data-broker-profiles-button-remove-manually = I’ll remove them manually
fix-flow-data-broker-profiles-view-data-broker-profiles-view-info-on-sites = View your info on these sites
fix-flow-data-broker-profiles-view-data-broker-profiles-more-dialog-trigger-label = More info
fix-flow-data-broker-profiles-view-data-broker-profiles-more-dialog-title = About these profiles
fix-flow-data-broker-profiles-view-data-broker-profiles-more-dialog-paragraph1 = Data brokers make up a $240 billion industry of gathering your personal info and selling it to anyone searching for you. They scrape your data from publicly available sources to create profiles that include your name(s), current and previous addresses, family member names, criminal history, and much more.
# Variables:
# $data_broker_sites_total_num is the total number of data broker sites available to scan.
fix-flow-data-broker-profiles-view-data-broker-profiles-more-dialog-paragraph2 =
  { $data_broker_sites_total_num ->
    [one] We found these profiles by searching { $data_broker_sites_total_num } data broker site for the name, location, and date of birth you provided. These profiles are currently live and available to anyone searching for you. { -brand-mozilla } is not associated with these data broker sites.
    *[other] We found these profiles by searching { $data_broker_sites_total_num } data broker sites for the name, location, and date of birth you provided. These profiles are currently live and available to anyone searching for you. { -brand-mozilla } is not associated with these data broker sites.
  }
fix-flow-data-broker-profiles-view-data-broker-profiles-more-dialog-paragraph2-masked = We found these profiles by searching data broker sites for the name, location, and date of birth you provided. These profiles are currently live and available to anyone searching for you. { -brand-mozilla } is not associated with these data broker sites.
fix-flow-data-broker-profiles-view-data-broker-profiles-more-dialog-confirm = OK
fix-flow-data-broker-profiles-view-data-broker-profiles-view-profile = View your profile
fix-flow-data-broker-profiles-view-data-broker-profiles-button-view-more = View more
fix-flow-data-broker-profiles-view-data-broker-profiles-button-view-less = View less
fix-flow-data-broker-profiles-manual-remove-how-to-remove-headline = Here’s how to remove these profiles
fix-flow-data-broker-profiles-manual-remove-how-to-remove-step-1-title = Visit each site and find removal instructions
fix-flow-data-broker-profiles-manual-remove-how-to-remove-step-1-content = They may be called data suppression, delete my data, do not show my data, or opt-out instructions.
fix-flow-data-broker-profiles-manual-remove-how-to-remove-step-2-title = Follow the steps outlined on the site
fix-flow-data-broker-profiles-manual-remove-how-to-remove-step-2-content = Some sites may allow you to fill out an opt-out form online, while others may require you to mail a letter.
fix-flow-data-broker-profiles-manual-remove-how-to-remove-step-3-title = Mark as fixed on this page
fix-flow-data-broker-profiles-manual-remove-how-to-remove-step-3-content = This will help you keep track of which exposures still need your attention, and make your overall exposures go down.
fix-flow-data-broker-profiles-manual-remove-how-to-remove-step-4-title = Watch for re-exposures
fix-flow-data-broker-profiles-manual-remove-how-to-remove-step-4-content = This process does not remove your information from public records, so even after your information is removed, sites often add you back. If you’d like us to handle this for you and automatically remove any new exposures, <subscribe_link>subscribe to { -brand-monitor-plus }</subscribe_link>.
fix-flow-data-broker-profiles-manual-remove-review-profiles-headline = Review & remove your profiles
fix-flow-data-broker-profiles-manual-remove-button-mark-fixed = Mark as fixed
fix-flow-data-broker-profiles-manual-remove-button-remove-for-me = Remove them for me
fix-flow-data-broker-profiles-manual-remove-button-skip = Skip for now
fix-flow-data-broker-profiles-automatic-remove-headline = We’ll auto-remove these and guide you through exposures that need manual fixes
# Variables:
# $data_broker_count is the number of data brokers scanned monthly
fix-flow-data-broker-profiles-automatic-remove-subheadline = {
    $data_broker_count ->
      [one] Removing these stops the sale of your personal info on { $data_broker_count } site. Subscribe to { -brand-monitor-plus } and you’ll get:
      *[other] Removing these stops the sale of your personal info on { $data_broker_count } sites. Subscribe to { -brand-monitor-plus } and you’ll get:
}
# Variables:
# $percent is the percentage you can save subscribing to an annual/yearly plan
fix-flow-data-broker-profiles-automatic-remove-save-percent = Save { $percent }% with yearly plan 🎉
fix-flow-data-broker-profiles-automatic-remove-features-select-plan-headline = { -brand-monitor-plus }
fix-flow-data-broker-profiles-automatic-remove-features-select-plan-toggle-yearly = Yearly
fix-flow-data-broker-profiles-automatic-remove-features-select-plan-toggle-monthly = Monthly
fix-flow-data-broker-profiles-automatic-remove-features-select-plan-monthly-frequency = Billed monthly
fix-flow-data-broker-profiles-automatic-remove-features-select-plan-monthly-button = Select monthly plan
fix-flow-data-broker-profiles-automatic-remove-features-select-plan-yearly-frequency = Billed yearly
fix-flow-data-broker-profiles-automatic-remove-features-select-plan-yearly-button = Select yearly plan
fix-flow-data-broker-profiles-automatic-remove-features-headline = Features:
fix-flow-data-broker-profiles-automatic-remove-features-remove-personal-info = Automatic data removal from sites that are selling your personal info
fix-flow-data-broker-profiles-automatic-remove-features-guided-experience = Guided experience through high risk data breaches that require manual steps
fix-flow-data-broker-profiles-automatic-remove-features-continuous-monitoring = Continuous monitoring for new exposures
fix-flow-data-broker-profiles-automatic-remove-features-breach-alerts = Alerts when your data has been breached
# Variables:
# $data_broker_count is the number of data brokers scanned monthly
fix-flow-data-broker-profiles-automatic-remove-features-monthly-scan =
  { $data_broker_count ->
    [one] Monthly scan of { $data_broker_count } data broker site that may be selling your personal info
    *[other] Monthly scan of { $data_broker_count } data broker sites that may be selling your personal info
  }
# Variables:
# $price is the price of a monthly plan. "/mo" is short for "monthly"
fix-flow-data-broker-profiles-automatic-remove-features-price = ${ $price }/mo

# Variables
# $estimated_time is the amount of time it would take for a user to manually resolve a leaked password breach. It will always be a number greater than 1.
# "Est." is shortform for "Estimated".
# "mins" is shortform for "minutes".
data-broker-profiles-estimated-time = { $estimated_time ->
   *[other] Est. time to complete: { $estimated_time } mins
}

# Variables
# $exposure_reduction is the percentage of exposures that are data brokers.
data-broker-profiles-exposure-reduction = Exposure reduction: { $exposure_reduction }%

# Welcome to Premium Data Broker Profiles

# Exposure reduction chart
# The number inside <nr> will be displayed in a large font,
# the label inside <label_line_1> will be shown in a smaller font. First line of the label
# the label inside <label_line_2> will be shown in smaller font. Second line of the label
# Variables:
#   $nr (number) - % of exposures reduced for the user
exposure-reduction-chart-heading = <nr>{ $nr }</nr><percent>%</percent>
exposure-reduction-chart-explanation = <label_line_1>exposures may</label_line_1><label_line_2>be reduced</label_line_2>

welcome-to-premium-data-broker-profiles-title-part-one = Welcome to { -brand-monitor-plus }.
welcome-to-premium-data-broker-profiles-title-part-two = We’ll remove those profiles ASAP.
# Variables:
# $profile_total_num is the number of exposures came back from user data broker scans.
# $exposure_reduction_percentage is the percent by which exposures are reduced
welcome-to-premium-data-broker-profiles-description-part-one =
  { $profile_total_num ->
    [one] We’ve already started our auto-removal process of 1 profile — which may <b>reduce your exposures up to { $exposure_reduction_percentage }%</b>.
    *[other] We’ve already started our auto-removal process of { $profile_total_num } profiles — which may <b>reduce your exposures up to { $exposure_reduction_percentage }%</b>.
  }
# There used to be a "part two", but we removed that
welcome-to-premium-data-broker-profiles-description-part-three = Next we’ll guide you through high risk data breaches that require manual steps.
# Variables:
# $data_broker_count is the number of data brokers scanned monthly
welcome-to-premium-data-broker-profiles-zero-state-description-part-one =
  { $data_broker_count ->
    [one] Great news! We scanned { $data_broker_count } data broker site and didn’t find any sites selling your personal information. We’ll run a scan every month to make sure it stays that way.
    *[other] Great news! We scanned { $data_broker_count } data broker sites and didn’t find any sites selling your personal information. We’ll run a scan every month to make sure it stays that way.
  }
welcome-to-premium-data-broker-profiles-zero-state-description-part-one-masked = Great news! We scanned a number of data broker sites and didn’t find any sites selling your personal information. We’ll run a scan every month to make sure it stays that way.
welcome-to-premium-data-broker-profiles-zero-state-description-part-two = Data brokers are constantly adding new details to their sites. If we find yours, we’ll immediately start our auto-removal process to help keep you safe.
welcome-to-premium-data-broker-profiles-zero-state-description-part-three = Next we’ll guide you through high risk data breaches that require manual steps.
welcome-to-premium-data-broker-profiles-cta-label = Let’s keep going

security-recommendation-phone-step-three = Use a <link_to_info>{ -brand-relay } phone mask</link_to_info> to protect your phone in the future
