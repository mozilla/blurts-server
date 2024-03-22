# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

plus-indicator-label-active = Automatic data removal: On
plus-indicator-label-inactive = Automatic data removal: Off

user-menu-contact-label = Contact us
user-menu-contact-tooltip = Contact { -brand-monitor-plus } support

# Variables:
#   $limit (number) - Number of email addresses included in the plan
modal-active-number-of-exposures-part-one-premium =
  { $limit ->
    [one] This chart includes the total number of times we found each type of data exposed across all data broker profiles and all data breaches for the { $limit } email address that you are currently monitoring.
    *[other] This chart includes the total number of times we found each type of data exposed across all data broker profiles and all data breaches for up to { $limit } email addresses that you are currently monitoring.
  }
modal-active-number-of-exposures-part-three-premium = This chart does not include any exposures that are in progress of being auto-removed. Once your exposures are fixed, they will be added to your total number of fixed exposures on the Fixed page.
modal-fixed-number-of-exposures-part-one = This chart includes the total number of exposures that have been fixed across all data broker profiles and data breaches.
modal-fixed-number-of-exposures-part-two = It does not include any exposures that are in progress of being auto-removed. Once they are fully removed, they’ll be added to the total here.

progress-card-auto-removed-headline = Auto-removed
progress-card-in-progress-headline = In progress
progress-card-locked-alt = Only available with { -brand-monitor-plus }

progress-card-heres-what-we-fixed-headline-premium = Here’s what we fixed

# Here’s What We Fixed Modal

modal-heres-what-we-fixed-title = About what we fixed
modal-heres-what-we-fixed-description-part-one = <b>Manually fixed</b> includes anything you’ve fixed yourself. All data breaches that require access to your accounts need
  to be fixed manually, even if you’ve subscribed to { -brand-monitor-plus }.
modal-heres-what-we-fixed-description-part-two = <b>Auto-removed</b> includes any exposures from data broker profiles that we’ve removed for you. This is available only for
  { -brand-monitor-plus } subscribers.
modal-heres-what-we-fixed-description-part-three = <b>In Progress</b> includes anything that we are currently
  working on fixing. Removals typically take 7–14 days but the most
  difficult sites could take longer. You may also start to see removals
  happening within the same day.

dashboard-exposures-filter-exposure-type = Exposure type
dashboard-exposures-filter-exposure-type-info-for-sale = Your info for sale
dashboard-exposures-filter-exposure-type-data-breach = Data breach

# About Exposure Types Modal

modal-exposure-type-title = About exposure types
# Variables:
# $data_broker_sites_total_num is the total number of data broker sites available to scan. It will always be more than 1.
modal-exposure-type-description = {
  $data_broker_sites_total_num ->
    *[other] We search for you in all known data breaches and { $data_broker_sites_total_num } data broker sites that sell your personal info. Here are the two types of exposures we find:
}
modal-exposure-type-data-breach = <b>Data breach</b> means your information has been compromised in a breach and could be in the wrong hands.
  Resolving these typically requires accessing your accounts, so you’ll need to take manual steps to resolve each breach even if you’ve subscribed to { -brand-monitor-plus }.
modal-exposure-type-data-broker-part-one = <b>Info for sale</b> means a data broker site is publicly publishing and selling your personal info.
  You’ll need to manually request removal from each site.
modal-exposure-type-data-broker-part-two = For { -brand-monitor-plus } subscribers, we auto-remove these profiles on your behalf and make sure they don’t re-add you.
  In both cases, removals typically take 7–14 days. Some can take longer, while others can happen within the hour.

# About Exposure Statuses Modal

# Variables:
# $data_broker_sites_total_num is the total number of data broker sites available to scan. It will always be plural.
modal-exposure-status-description-premium = {
  $data_broker_sites_total_num ->
    *[other] We search for exposures in all known data breaches and { $data_broker_sites_total_num } data broker sites that sell your personal info. Your exposures will have one of the following statuses:
}
modal-exposure-status-in-progress = <b>In progress</b> means we are actively working on fixing the exposure for you. This is a { -brand-monitor-plus } feature.

# Variables:
# $exposures_unresolved_num is the unresolved number of exposures the user has.
# $data_breach_unresolved_num is the unresolved number of data breaches the user has.
# $data_broker_unresolved_num is the unresolved number of data brokers selling the user’s data.
dashboard-exposures-area-description-premium = We found your information exposed { $exposures_unresolved_num } times over { $data_breach_unresolved_num } data breaches and { $data_broker_unresolved_num } data broker sites that are selling your personal info.

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

dashboard-fixed-area-headline-premium = View all exposures that are fixed or in progress

# Variables:
# $data_broker_total_num is the total number of data brokers selling the user’s data.
dashboard-exposures-all-fixed-free-scan = {
    $data_broker_total_num ->
      [one] Next <a>start your free scan</a> of { $data_broker_total_num } site that may be selling your personal info.
     *[other] Next <a>start your free scan</a> of { $data_broker_total_num } sites that may be selling your personal info.
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

premium-upsell-dialog-title = Turn on automatic data removal with { -brand-monitor-plus }

## Top banner on the dashboard

# Variables:
# $unresolved_exposures is the total number of unresolved exposures the user has.
dashboard-top-banner-scan-in-progress-unresolved-description =
  { $unresolved_exposures ->
      [one] We found { $unresolved_exposures } exposure so far, but we’re still scanning sites that sell your personal info. This should be done within a few minutes.
      *[other] We found { $unresolved_exposures } exposures so far, but we’re still scanning sites that sell your personal info. This should be done within a few minutes.
  }
dashboard-top-banner-scan-in-progress-no-results-info = In the meantime, you can check more email addresses for data breaches.
dashboard-top-banner-scan-in-progress-no-results-cta = Check more email addresses

dashboard-top-banner-scan-in-progress-fix-now-hint = You can come back later, or start fixing your data breaches now.
dashboard-top-banner-scan-in-progress-results-found-cta = See what’s ready now

# Variables:
# $data_breach_unresolved_num is the unresolved number of data breaches the user has.
# $data_broker_unresolved_num is the unresolved number of data brokers selling the user’s data.
dashboard-top-banner-protect-your-data-description = We found your data in { $data_breach_unresolved_num } data breaches and { $data_broker_unresolved_num } sites selling your personal info. We’ll guide you step-by-step on how to fix it.

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

# Variables:
# $data_broker_sites_total_num is the total number of data broker sites available to scan. This will always be plural.
dashboard-top-banner-no-exposures-found-description = Great news! We searched all known data breaches and { $data_broker_sites_total_num } data broker sites that sell personal info and found no exposures.
dashboard-top-banner-no-exposures-found-upsell-info = Subscribe to { -brand-monitor-plus } and we’ll scan for new exposures every month.
dashboard-top-banner-no-exposures-found-cta = Get continuous protection

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
    [one] Great work, { $starting_exposure_total_num } exposure of your data is fixed! Subscribe to { -brand-monitor-plus } and we’ll scan for new exposures every month. Plus, we’ll automatically remove your info from any sites that are selling it.
    *[other] Great work, all { $starting_exposure_total_num } exposures of your data are fixed! Subscribe to { -brand-monitor-plus } and we’ll and we’ll scan for new exposures every month. Plus, we’ll automatically remove your info from any sites that are selling it.
  }

# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-your-data-scan-in-progress-all-fixed-description =
  { $exposures_resolved_num ->
    [one] Great work fixing { $exposures_resolved_num } exposure so far! We’re still scanning sites that sell your personal info. This should be done within a few minutes.
    *[other] Great work fixing { $exposures_resolved_num } exposures so far! We’re still scanning sites that sell your personal info. This should be done within a few minutes.
  }

exposure-card-description-info-for-sale-action-needed-manual-fix-page = This site is selling <data_broker_profile>these details about you</data_broker_profile>. Contact the site for removal, or <upsell_link>subscribe to { -brand-monitor-plus }</upsell_link> and we’ll do it for you.
exposure-card-description-info-for-sale-action-needed-dashboard = This site is publicly publishing and selling <data_broker_profile>these details about you</data_broker_profile>. Remove this profile to protect your privacy.
exposure-card-description-info-for-sale-in-progress = We’ve started our auto-removal process of <data_broker_profile>this profile</data_broker_profile> to protect your information. <removal_info>Removals typically take 7-14 days</removal_info>.
exposure-card-description-info-for-sale-fixed = As a { -brand-monitor-plus } member, we’ve <data_broker_profile>removed this profile</data_broker_profile> for you and will continually monitor to make sure they don’t add you back.
exposure-card-description-info-for-sale-fixed-manually-fixed =  You marked this profile as fixed. Be sure you’ve followed all instructions on <data_broker_profile>the site</data_broker_profile> to ensure they remove your personal info.
