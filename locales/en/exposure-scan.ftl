# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Unused
exposure-landing-hero-heading = Find out if your personal information has been compromised
# Unused
exposure-landing-hero-lead = Stay safe with privacy tools from the makers of { -brand-firefox } that protect you from hackers and companies that publish and sell your personal information. We’ll alert you of any known data breaches, find and remove your exposed info and continually watch for new exposures.
# Unused
exposure-landing-hero-email-label = Email address
# Unused
exposure-landing-hero-email-placeholder = Enter email address
# Unused
exposure-landing-hero-cta-label = Check for breaches

# Unused
exposure-landing-result-loading = Loading, please wait…
# Unused
exposure-landing-result-error = Something went wrong while checking for breaches. Please refresh the page and try again.

# Variables:
#   $email (string) - The user's email address, used to identify their data in breaches
#   $count (number) - Number of data breaches in which the user's data was found
exposure-landing-result-hero-heading =
    { $count ->
        [one] We found <email>{ $email }</email> exposed in <count>1</count> data breach.
       *[other] We found <email>{ $email }</email> exposed in <count>{ $count }</count> data breaches.
    }

# Unused
exposure-landing-result-card-added = Breach Added:
# Unused
exposure-landing-result-card-data = Exposed Data:
# Unused
exposure-landing-result-card-nothing = No breaches found

# Unused
exposure-landing-result-footer-attribution = Breach data provided by <hibp-link>{ -brand-HIBP }</hibp-link>

# Unused
exposure-landing-result-overflow-hero-lead = Sign in to get clear steps on how to resolve these breaches, view all breaches, and get continuous monitoring for any new known breaches.
# Unused
exposure-landing-result-overflow-hero-cta-label = Sign in to resolve breaches
# Unused
exposure-landing-result-overflow-footer-cta-label = Sign in to view all

# Unused
exposure-landing-result-some-hero-lead = Sign in to get clear steps on how to resolve these breaches, view all breaches, and get continuous monitoring for any new known breaches.
# Unused
exposure-landing-result-some-hero-cta-label = Sign in to resolve breaches
# Unused
exposure-landing-result-some-footer-cta-label = Sign in to resolve breaches

# Unused
exposure-landing-result-none-hero-lead = Good news! No known breaches were found. Stay safe by signing up for alerts for new breaches. We’ll keep monitoring this email and let you know if it appears in a new breach.
# Unused
exposure-landing-result-none-hero-cta-label = Get alerts about new breaches
# Unused
exposure-landing-result-none-footer-cta-label = Sign up for alerts
