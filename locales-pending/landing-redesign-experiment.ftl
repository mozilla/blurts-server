# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

### Landing page redesign experiment

## Hero

# Hero title

landing-redesign-hero-title = Find where your personal info is exposed <b>— and take it back</b>
landing-redesign-hero-lead = { -brand-monitor } finds where your info has been exposed, such as your home address, phone number, or email, and helps you protect your privacy.

# Hero CTA

landing-redesign-hero-cta-input-label = Start a free scan by creating an account
landing-redesign-hero-cta-button-label = Start scan

# Hero content

landing-redesign-hero-list-item-title-one = { -brand-monitor } works for you around the clock
landing-redesign-hero-list-item-description-one = Get data breach monitoring, account protection guidance, and automatic removal from data broker sites.

landing-redesign-hero-list-item-title-two = Saves you up to 50 hours annually
landing-redesign-hero-list-item-description-two = { -brand-monitor } simplifies the time-consuming task of removing your information from websites that sell or share it.

landing-redesign-hero-list-item-title-three = Over 10 million users trust { -brand-monitor }
landing-redesign-hero-list-item-description-three = Join the { -brand-monitor } community and start taking back control of your personal privacy online.

# Banner CTA

landing-redesign-banner-cta-header = There’s a $240 billion industry of data brokers selling your private information for profit. <b>It’s time to take back your privacy.</b>
landing-redesign-banner-cta-subheader = Create a free account to see if your personal data has been exposed by data brokers and data breaches.
landing-redesign-banner-cta-button-label = Start your free account

# Info blocks

landing-redesign-info-block-one-label = Proactive protection
landing-redesign-info-block-one-title = Stay protected with continuous data monitoring
landing-redesign-info-block-one-description = { -brand-mozilla-monitor } continuously scans the web for exposure of your personal data. By monitoring multiple types of personal information, you are better protected from identity theft or hackers.

landing-redesign-info-block-two-label = Enhanced privacy
landing-redesign-info-block-two-title = Take control of your privacy with automated data removal
landing-redesign-info-block-two-description = { -brand-monitor-plus } automatically removes your data from hundreds of data brokers. This process saves you time and effort to reduce your online footprint and gives you more control over where your personal information is shared.

landing-redesign-info-block-three-label = Stay informed
landing-redesign-info-block-three-title = Act fast with timely notifications
landing-redesign-info-block-three-description = With { -brand-monitor }, you will be notified when your data is found in data breaches or data brokers, allowing you to take action such as securing accounts, updating passwords, or requesting data removal, reducing the risk of privacy threats.

landing-redesign-info-block-cta-label = Get your free scan

# Pricing plans

landing-redesign-pricing-plans-section-title = Choose your level of protection
landing-redesign-pricing-plans-section-description = Your privacy is our priority, so data breach monitoring is always free. For more robust protection, { -brand-monitor-plus } includes continuous automatic removal of your personal information.
landing-redesign-pricing-plans-bundle-section-description = 30-day money-back guarantee (first-time customers only)
landing-redesign-pricing-plans-cards-title = Pricing plans

#   $yearlyPrice (string) - annual plan’s price in total, including currency, e.g. "$13.37"
landing-redesign-pricing-plans-card-cta-monthly-billing-label = Billed monthly
landing-redesign-pricing-plans-card-cta-yearly-billing-label = { $yearlyPrice } billed yearly
# There is not much room in the UI for this string:
# Abbreviating “month” with “mo”.
# Variables:
#   $monthlyPrice (string) - monthly plan’s price, including currency, e.g. "$13.37"
landing-redesign-pricing-plans-card-cta-monthly = { $monthlyPrice }/mo
landing-redesign-pricing-plans-card-cta-label = Get started

landing-redesign-pricing-plans-card-bundle-label = Best value, save 45%
landing-redesign-pricing-plans-card-bundle-title = { -product-name-privacy-products-bundle }
landing-redesign-pricing-plans-card-bundle-subtitle = 3 privacy tools, 1 price
landing-redesign-pricing-plans-bundle-item-mozilla-vpn-title = { -brand-mozilla-vpn }
landing-redesign-pricing-plans-bundle-item-mozilla-vpn-description = Online activity protection
landing-redesign-pricing-plans-bundle-item-monitor-plus-title = { -brand-monitor-plus }
landing-redesign-pricing-plans-bundle-item-monitor-plus-description = Data broker protection
landing-redesign-pricing-plans-bundle-item-relay-premium-title = { -brand-relay-premium }
landing-redesign-pricing-plans-bundle-item-relay-premium-description = Unlimited email masks for spam protection

landing-redesign-pricing-plans-card-plus-label = Recommended
landing-redesign-pricing-plans-card-plus-title = { -brand-monitor-plus }
landing-redesign-pricing-plans-card-plus-subtitle = Automatic data removal requests
landing-redesign-pricing-plans-card-plus-cta-label = Get { -brand-monitor-plus }
landing-redesign-pricing-plans-card-plus-included-features-label = Everything in Monitor

# Variables:
# $data_broker_sites_total_num is the total number of data broker sites available to scan. It will always be more than 1.
landing-redesign-pricing-plans-card-plus-feature-item-one = {
  $data_broker_sites_total_num ->
    *[other] <b>Monthly scans</b> of { $data_broker_sites_total_num }+ data brokers that may be selling your personal info
}
landing-redesign-pricing-plans-card-plus-feature-item-two = <b>Automatic removal</b> of personal info from data broker sites
landing-redesign-pricing-plans-card-plus-feature-item-three = Continuous monitoring for <b>data broker exposures and data breaches</b>
landing-redesign-pricing-plans-card-plus-feature-item-four = Receive <b>data broker and data breach exposure alerts</b>
# Variables:
# $discountPercentage is the percentage you can save subscribing to an annual/yearly plan
landing-redesign-pricing-plans-card-plus-feature-item-five = <b>Save { $discountPercentage }%</b> with a yearly { -brand-monitor-plus } subscription
# There is not much room in the UI for this string:
# Abbreviating “month” with “mo”.
# Variables:
#   $monthlyPrice (string) - annual plan’s price per month, including currency, e.g. "$13.37"
landing-redesign-pricing-plans-card-plus-cta-yearly = { $monthlyPrice }/mo
# Variables:
#   $yearlyPrice (string) - annual plan’s price in total, including currency, e.g. "$13.37"
landing-redesign-pricing-plans-card-plus-cta-yearly-sum = { $yearlyPrice } total
# Variables:
# There is not much room in the UI for this string:
# Abbreviating “month” with “mo”.
# Variables:
#   $monthlyPrice (string) - monthly plan’s price, including currency, e.g. "$13.37"
landing-redesign-pricing-plans-card-plus-cta-monthly = { $monthlyPrice }/mo

landing-redesign-pricing-plans-card-free-title = { -brand-monitor }
landing-redesign-pricing-plans-card-free-subtitle = Free breach alerts
landing-redesign-pricing-plans-card-free-price-label = Free
landing-redesign-pricing-plans-card-free-cta-label = Get { -brand-monitor } (Free)
# Variables:
# $data_broker_sites_total_num is the total number of data broker sites available to scan. It will always be more than 1.
landing-redesign-pricing-plans-card-free-feature-item-one = {
  $data_broker_sites_total_num ->
    *[other] <b>One-time scan</b> of { $data_broker_sites_total_num }+ data brokers that may be selling your personal info
}
landing-redesign-pricing-plans-card-free-feature-item-two = <b>Guided manual removal</b> of personal info from data broker sites
landing-redesign-pricing-plans-card-free-feature-item-three = Continuous monitoring <b>for data breach exposures</b>
landing-redesign-pricing-plans-card-free-feature-item-four = Receive <b>data breach exposure alerts</b>
landing-redesign-pricing-plans-card-free-feature-item-five = <b>Upgrade to { -brand-monitor-plus } anytime</b> for automated protection

# Logo block

landing-redesign-logo-block-title = Trusted by 10 million people worldwide
landing-redesign-logo-block-description = Since 2018, we’ve helped people in 237 countries protect their data when it has been exposed.

# FAQ (Frequently Asked Questions)

landing-redesign-faq-section-title = Questions and answers
landing-redesign-faq-expand-button-alt = Open
landing-redesign-faq-close-button-alt = Close
landing-redesign-faq-sumo-link-label = Read all FAQs

# Banner CTA with input

landing-redesign-cta-input-banner-header = <b>Take back control</b> of your data
landing-redesign-cta-input-banner-subheader = Enter your email address to create a free account and see where your personal data is exposed online.
