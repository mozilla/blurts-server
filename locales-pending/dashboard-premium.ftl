# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

plus-indicator-label-active = Automatic data removal: On
plus-indicator-label-inactive = Automatic data removal: Off
plus-indicator-scan-date-label = Last scan:

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
modal-heres-what-we-fixed-description-part-three = <b>In Progress</b> includes anything that we are currently working on fixing.

dashboard-exposures-filter-exposure-type = Exposure type
dashboard-exposures-filter-exposure-type-info-for-sale = Your info for sale
dashboard-exposures-filter-exposure-type-data-breach = Data breach
dashboard-exposures-filter-exposure-removal-time-title = Removal time
dashboard-exposures-filter-exposure-removal-time-label-7 = Up to 7 days
dashboard-exposures-filter-exposure-removal-time-label-13 = 8–13 days
dashboard-exposures-filter-exposure-removal-time-label-60 = 14–60 days
dashboard-exposures-filter-exposure-removal-time-label-90 = 61–90 days
dashboard-exposures-filter-exposure-removal-time-label-180 = 91-180 days
dashboard-exposures-filter-exposure-removal-time-label-other = 181+ days
dashboard-exposures-filter-exposure-removal-time-label-unknown = Unknown
# “Not applicable” – abbreviated because there’s not much room for this string.
dashboard-exposures-filter-exposure-removal-time-label-na = N/A

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
modal-exposure-type-data-broker-part-one = <b>Your info for sale</b> means a data broker site is publicly publishing and selling your personal info.
  You’ll need to manually request removal from each site.
modal-exposure-type-data-broker-part-two = But if you’re a { -brand-monitor-plus } subscriber, we auto-remove the profiles for you.

# About Exposure Statuses Modal

# Variables:
# $data_broker_sites_total_num is the total number of data broker sites available to scan. It will always be plural.
modal-exposure-status-description-premium = {
  $data_broker_sites_total_num ->
    *[other] We search for exposures in all known data breaches and { $data_broker_sites_total_num } data broker sites that sell your personal info. Your exposures will have one of the following statuses:
}
modal-exposure-indicator-requested-removal = We’ve sent an official removal request to the data broker. We’ll keep you updated if we need to re-send the request.
modal-exposure-indicator-in-progress = We’re actively working to confirm data broker removal compliance.
modal-exposure-indicator-removed = We’ve successfully removed your data from the data broker site!

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

# About Removal Time Indicators Modal

modal-exposure-removal-time-title = A note about removal times
modal-exposure-removal-time-text = { -product-short-name } provides estimated time frames for how long data brokers usually take to remove your profile after we request it. We may periodically update these estimates for accuracy.
modal-exposure-removal-time-button-label = Got it

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
    *[other] Great work, all { $starting_exposure_total_num } exposures of your data are fixed! Subscribe to { -brand-monitor-plus } and we’ll scan for new exposures every month. Plus, we’ll automatically remove your info from any sites that are selling it.
  }

# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-your-data-scan-in-progress-all-fixed-description =
  { $exposures_resolved_num ->
    [one] Great work fixing { $exposures_resolved_num } exposure so far! We’re still scanning sites that sell your personal info. This should be done within a few minutes.
    *[other] Great work fixing { $exposures_resolved_num } exposures so far! We’re still scanning sites that sell your personal info. This should be done within a few minutes.
  }

exposure-card-description-info-for-sale-action-needed-manual-fix-page = This site is selling <data_broker_profile>these details about you</data_broker_profile>. Contact the site for removal, or <upsell_link>subscribe to { -brand-monitor-plus }</upsell_link> and we’ll do it for you.
exposure-card-description-info-for-sale-requested-removal-dashboard = We’ve started the process of removing <data_broker_profile>this profile</data_broker_profile>. Removal times vary, and this can take multiple attempts.
exposure-card-description-info-for-sale-action-needed-dashboard = This site is publicly publishing and selling <data_broker_profile>these details about you</data_broker_profile>. Remove this profile to protect your privacy.
exposure-card-description-info-for-sale-in-progress-dashboard = As a { -brand-monitor-plus } member, we’ve removed <data_broker_profile>this profile</data_broker_profile> and are confirming the data broker’s removal compliance.
exposure-card-description-info-for-sale-fixed = As a { -brand-monitor-plus } member, we’ve <data_broker_profile>removed this profile</data_broker_profile> for you and will continually monitor to make sure they don’t add you back.
exposure-card-description-info-for-sale-fixed-manually-fixed =  You marked this profile as fixed. Be sure you’ve followed all instructions on <data_broker_profile>the site</data_broker_profile> to ensure they remove your personal info.
exposure-card-description-info-for-sale-fixed-removal-under-maintenance-manually-fixed = You marked <data_broker_profile>this profile</data_broker_profile> as resolved. You could be added back in the future, so { -brand-monitor } will continue to scan data broker sites for new exposures.
exposure-card-description-info-for-sale-manual-removal-needed = We’ve asked this data broker to remove your profile but they haven’t done it. To start the process sooner, we can guide you step-by-step to manually remove your profile and resolve any exposures. Select <b>Resolve exposures</b> to get started.

## Manual Removal Data Broker

# Variables:
# $data_broker_name is the name of the data broker under removal maintenance
data-broker-removal-maintenance-header = { -brand-monitor } found this profile on <link_to_data_broker>{ $data_broker_name }</link_to_data_broker>
data-broker-removal-maintenance-cta-go-to-data-broker = Go to data broker site to get started
data-broker-removal-maintenance-cta-mark-as-resolved = Mark exposure resolved
# Est. is short for "estimated"
# Variables:
# $range is the range of minutes it would take to complete the removal. E.g. 3-5 minutes.
data-broker-removal-maintenance-estimated-time =
    { $range ->
        [one] Est. time to complete: { $range } minute
       *[other] Est. time to complete: { $range } minutes
    }
data-broker-removal-maintenance-steps-to-remove-header = How to remove your profile from data broker websites
data-broker-removal-maintenance-steps-to-remove-header-step-one = Visit this data broker website then locate their removal instructions. These may be purposely difficult to find, so check in the footer, terms page, privacy page, or “do not sell” page for removal instructions.
data-broker-removal-maintenance-steps-to-remove-header-step-two = When you’ve determined your profile was successfully removed, you can mark the exposure as resolved by toggling on the switch within this exposure data card in your dashboard.
data-broker-removal-maintenance-steps-to-remove-view-more-link = View removal instructions
data-broker-removal-maintenance-rationale-header = Why do I need to manually remove this profile?
data-broker-removal-maintenance-rationale-answer = { -brand-monitor } works hard to auto-remove your profiles from data broker sites. But some are more difficult than others or are non-compliant, which requires manual removal from the profile owner. <learn_about_data_exposure_link>Learn about data exposures</learn_about_data_exposure_link>

## Manual Removal Guide

data-broker-removal-guide-header = Removal guide for data broker websites
data-broker-removal-guide-top-section-para-1 = { -brand-mozilla-monitor } works hard to automatically remove your personal information from data brokers sites. However, some data brokers are more difficult and may ignore removal requests from third parties.
data-broker-removal-guide-top-section-para-2 = We’re sorry we couldn’t remove this profile for you. Data brokers benefit from sharing personal information, so they often change their removal instructions to prevent companies like us from protecting your information. We are constantly evaluating our auto-removal processes to counter this behavior. But in the meantime, here’s what you need to do to manually remove your information.
data-broker-removal-guide-step-1-header = Step 1: Go to the data broker site and find their opt out instructions
data-broker-removal-guide-step-1-body = Visit the data broker website and locate the instructions they provide for requesting removal of your profile. Because data brokers often make money by selling your information, they may intentionally make it hard to find these instructions. Here are a few tips to find removal instructions:
data-broker-removal-guide-step-1-list-item-1 = They may be called data suppression, delete my data, do not show my data, or opt out instructions.
data-broker-removal-guide-step-1-list-item-2 = Start by checking the footer of the website.
data-broker-removal-guide-step-1-list-item-3 = You can also check the Privacy section of their website.
data-broker-removal-guide-step-1-list-item-4 = You can also check the site FAQs.
data-broker-removal-guide-step-2-header = Step 2: Follow the instructions
data-broker-removal-guide-step-2-body-para-1 = Each data broker’s removal process is different, and they usually require you to submit personal details such as your name, email address, or physical address. Sometimes it’s as easy as submitting your email address. But some may require you to mail a physical letter. Be sure to follow the directions fully to ensure removal. Each removal should take only a few minutes.
data-broker-removal-guide-step-2-body-para-2 = If you have many exposures needing manual removal, try to do them in batches, and keep going until they’re all removed.
data-broker-removal-guide-step-3-header = Step 3: Verify removal
data-broker-removal-guide-step-3-body-para-1 = Once you’ve verified your profile has been removed from the data broker site, you can use { -brand-monitor } to track this status. After removal, simply go to the exposure card in your dashboard and you’ll see that it’s been marked as “Removed”. Because data brokers usually add profiles back to their databases, you can toggle the “Removed” status on or off in cases where you’ve been added back.
data-broker-removal-guide-step-3-body-para-2 = Data brokers can take 2 weeks to remove your information, and sometimes even longer.
data-broker-removal-guide-step-4-header = Step 4: Watch for re-exposures
data-broker-removal-guide-step-4-body = Please note that this process does not remove your information from public records, which means your information could be added back to data brokers that you’ve been removed from. As a { -brand-monitor-plus } subscriber, we’ll continually watch for new exposures from this data broker.
data-broker-removal-guide-button-back-to-exposures = Back to exposures

## CSAT survey banner for subscribers

survey-csat-question = How satisfied are you with your { -brand-mozilla-monitor } experience?
survey-csat-answer-very-dissatisfied = Very dissatisfied
survey-csat-answer-dissatisfied = Dissatisfied
survey-csat-answer-neutral = Neutral
survey-csat-answer-satisfied = Satisfied
survey-csat-answer-very-satisfied = Very satisfied
survey-csat-follow-up-link-label = Your feedback is helpful to us! How can we improve { -product-short-name } for you?
survey-csat-survey-dismiss-label = Dismiss

## Petition banner US data privacy law

petition-banner-data-privacy-title = Join the Movement for a U.S. Data Privacy Law
petition-banner-data-privacy-text = Advocate for stronger data protection laws with the { -brand-mozilla-foundation } — <b>your voice can shape a safer digital future!</b>
petition-banner-data-privacy-button-sign = Sign petition
petition-banner-data-privacy-button-dismiss = No, thank you

## Removal process explainer

removal-process-step-requested = Removal requested
removal-process-step-awaiting = Broker works on removal
removal-process-step-resolved = Resolved
