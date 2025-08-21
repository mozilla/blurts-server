# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Strings in this file are not yet final, and thus should not be localised yet.

onboarding-steps-get-started-label = Get started
onboarding-steps-enter-info-label = Enter info
onboarding-steps-enter-info-back = Go back
onboarding-steps-find-exposures-label = Find exposures
onboarding-get-started-heading = Welcome to { -product-short-name }. Let’s find your exposed information.
onboarding-get-started-content-data = To find and fix your exposed data, we’ll need to ask for your personal info. Rest assured we will safeguard your information like it’s our own.
onboarding-get-started-content-price = We believe in your right to privacy, so basic { -product-short-name } is always free. Subscribe to { -brand-monitor-plus } for continuous protection and automatic removal of your personal info.
onboarding-get-started-content-explainer = See how we protect your data
onboarding-get-started-cta-label = Start my free scan
onboarding-get-started-how-it-works-dialog-heading-line1 = We’re here to protect your personal information
onboarding-get-started-how-it-works-dialog-heading-line2 = Here’s how it works:
onboarding-get-started-how-it-works-dialog-step1-heading = Scan for exposures
# Variables:
#   $dataBrokerTotalCount (number) - number of scanned data broker sites, e.g. 190
onboarding-get-started-how-it-works-dialog-step1-content = {
    $dataBrokerTotalCount ->
        *[other] With just a few key pieces of information, we’ll search for you in all known data breaches and { $dataBrokerTotalCount } major data broker sites. All users get the first scan free.
}
onboarding-get-started-how-it-works-dialog-step1-content-masked =  With just a few key pieces of information, we’ll search for you in all known data breaches and major data broker sites. All users get the first scan free.
onboarding-get-started-how-it-works-dialog-step2-heading = Remove your personal info
onboarding-get-started-how-it-works-dialog-step2-content = We’ll show you what personal info each data broker site is selling. You’ll need to contact each data broker to request removal. Removal typically takes 7-10 business days, but some can take longer. Subscribe to { -brand-monitor-plus } and we’ll handle this for you.
onboarding-get-started-how-it-works-dialog-step3-heading = Resolve data breaches
onboarding-get-started-how-it-works-dialog-step3-content = They’ll require access to your accounts, so you’ll need to resolve them manually even if you subscribe to { -brand-monitor-plus }.
onboarding-get-started-how-it-works-dialog-confirm-label = OK

onboarding-enter-details-title = Enter the details you want to protect
onboarding-enter-details-text = We’ll use this to find exposures of your personal information, and then guide you step-by-step on how to fix it.
onboarding-enter-details-why-button-label = Why do we need this info?
onboarding-enter-details-dialog = There’s a $240 billion industry of data brokers that expose and sell your personal information for a profit. They scrape your data from publicly available sources to create profiles that include your name(s), current and previous addresses, family member names, criminal history, and much much more.
onboarding-enter-details-diaglog-subheader = To find your profiles on these sites, we use three key pieces of information:
onboarding-enter-details-dialog-name-label = Name
onboarding-enter-details-dialog-name-text = Your full legal name will help us find profiles of you, but your aliases or previous names may also appear in search results.
onboarding-enter-details-dialog-location-label = Location
onboarding-enter-details-dialog-location-text = Your current city and state will help us narrow down the results, but your past addresses may also appear in search results.
onboarding-enter-details-dialog-date-label = Date of birth
onboarding-enter-details-dialog-date-text = This will reduce chances of finding profiles of people with the same name as you.
onboarding-enter-details-dialog-data-protection-text = We fully encrypt data you share with us, and we are committed to protecting it. Read our <privacy-policy-link>Privacy Policy</privacy-policy-link>, and <privacy-protection-link>learn more about how we protect your privacy</privacy-protection-link>.
onboarding-enter-details-comfirm-dialog-title = Is this correct?
onboarding-enter-details-comfirm-dialog-text = To ensure accurate results, please confirm this is your correct information. You won’t be able to update this later for your one-time free scan.
onboarding-enter-details-comfirm-dialog-button-edit = Edit
onboarding-enter-details-comfirm-dialog-button-confirm = Confirm
onboarding-enter-details-label-first-name = First name
onboarding-enter-details-placeholder-first-name = Enter first name
onboarding-enter-details-label-middle-name = Middle name
onboarding-enter-details-placeholder-middle-name = Enter middle name
onboarding-enter-details-label-last-name = Last name
onboarding-enter-details-placeholder-last-name = Enter last name
# A name suffix follows a person’s full name and provides additional information
# about their position, accreditation, etc.
# Examples: “PhD”, “CCNA”, “OBE”, “Jr.”, “Sr.”, etc.
onboarding-enter-details-label-name-suffix = Suffix
onboarding-enter-details-placeholder-name-suffix = Enter suffix
onboarding-enter-details-label-location = City and state
onboarding-enter-details-placeholder-location = Enter city and state
onboarding-enter-details-placeholder-location-results = No location found
onboarding-enter-details-label-date-of-birth = Date of birth
onboarding-enter-details-input-error-message-generic = Required to complete the scan
onboarding-enter-details-input-error-message-location = Type location and select from list
onboarding-enter-details-input-error-alt = Error
onboarding-enter-details-input-info-text-location = Use the location you’ve spent the most time in recently.

onboarding-find-exposures-progress-label = Scanning for exposures…
# Variables:
#   $breachesTotalCount (number) - number of scanned breaches, e.g. 672
#   $breachesScannedCount (number) - number of the currently scanned breaches, e.g. between 0 and $breachesTotalCount
onboarding-find-exposures-progress-breaches-counter = {
    $breachesTotalCount ->
        *[other] { $breachesScannedCount } of { $breachesTotalCount } known data breaches
}
# Variables:
#   $dataBrokerTotalCount (number) - number of scanned data broker sites, e.g. 190
#   $dataBrokerScannedCount (number) - number of the currently scanned data broker sites, e.g. between 0 and $dataBrokerTotalCount
onboarding-find-exposures-progress-broker-counter = {
    $dataBrokerTotalCount ->
        *[other] { $dataBrokerScannedCount } of { $dataBrokerTotalCount } data broker sites
}
# Variables:
#   $dataBrokerScannedCount (number) - number of the currently scanned data broker sites, e.g. between 0 and $dataBrokerTotalCount
onboarding-find-exposures-progress-broker-counter-masked = { $dataBrokerScannedCount } of data brokers
