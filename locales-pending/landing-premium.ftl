# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

## Top navbar

landing-premium-hero-navbar-link-how-it-works = How it works
landing-premium-hero-navbar-link-pricing = Pricing
landing-premium-hero-navbar-link-faqs = FAQs
landing-premium-hero-navbar-link-recent-breaches = Recent data breaches

##

landing-premium-hero-lead = We scan to see if your phone number, passwords or home address have been leaked, and help you make it private again.

landing-premium-hero-emailform-input-label = Enter your email address to check for data breach exposures and sites selling your info.

# This will be displayed in a smaller font, underneath the number 46, displayed
# in a large font. This is part of a demo image, which is why the number is fixed.
# Note: the hyphen is a so-called "non-breaking hyphen", which prevents
# "auto‑removed" from being split across two lines. You might want to
# copy-paste it when you also need a hyphen in your translation, unless it
# results in a relatively long word.
landing-premium-hero-image-removal-badge-label = exposures auto‑removed

# This is a label underneath a big number "50" - it's an image that demos Monitor.
landing-premium-hero-image-chart-label = fixed

landing-premium-plans-heading = Choose your level of protection
landing-premium-plans-lead = We believe in your right to privacy, so data breach monitoring is always free. For more robust protection, { -brand-monitor } also offers continuous automatic removal of your personal information.
landing-premium-plans-table-annotation-plus = Recommended
landing-premium-plans-table-heading-feature = Features
# Users can click a button with this label to see a popover with a bit more detail.
landing-premium-plans-table-feature-callout-trigger = More info
landing-premium-plans-table-heading-free-title = { -brand-monitor }
landing-premium-plans-table-heading-free-subtitle = Free breach alerts
landing-premium-plans-table-heading-plus-title = { -brand-monitor } <b>Plus</b>
landing-premium-plans-table-heading-plus-subtitle = Automatic data removal
# Variables:
#   $dataBrokerTotalCount (number) - number of scanned data broker sites, e.g. 190
landing-premium-plans-table-feature-scan-label =
    { $dataBrokerTotalCount ->
        [one] Scan { $dataBrokerTotalCount } data broker site that may be selling your personal info
       *[other] Scan { $dataBrokerTotalCount } data broker sites that may be selling your personal info
    }
landing-premium-plans-table-feature-scan-label-masked = Scan data broker sites that may be selling your personal info
landing-premium-plans-table-feature-scan-free = One-time
landing-premium-plans-table-feature-scan-plus = Monthly
landing-premium-plans-table-feature-removal-label = Remove personal info from sites that are selling it
landing-premium-plans-table-feature-removal-free = Manual removal
landing-premium-plans-table-feature-removal-plus = Automatic removal
landing-premium-plans-table-feature-removal-free-callout = We’ll let you know which data brokers are selling your info so you can contact them to request removal.
# Variables:
#   $dataBrokerTotalCount (number) - number of scanned data broker sites, e.g. 190
landing-premium-plans-table-feature-removal-plus-callout =
    { $dataBrokerTotalCount ->
        [one] We’ll automatically request removal of your private info across { $dataBrokerTotalCount } data broker site.
       *[other] We’ll automatically request removal of your private info across more than { $dataBrokerTotalCount } data broker sites.
    }
landing-premium-plans-table-feature-removal-plus-callout-masked = We’ll automatically request removal of your private info across a number of data broker sites.
landing-premium-plans-table-feature-alerts-label = Get alerts when your data has been breached
landing-premium-plans-table-feature-alerts-free = Included
landing-premium-plans-table-feature-alerts-plus = Included
landing-premium-plans-table-feature-guidance-label = Fix high-risk data breaches
landing-premium-plans-table-feature-guidance-free = Guided
landing-premium-plans-table-feature-guidance-plus = Guided
landing-premium-plans-table-feature-monitoring-label = Continuous monitoring
landing-premium-plans-table-feature-monitoring-free = Included
landing-premium-plans-table-feature-monitoring-plus = Included
landing-premium-plans-table-billing-label = Price
landing-premium-plans-table-billing-free = Always free
# Label for the options "Yearly" and "Monthly"
landing-premium-plans-table-billing-plus-period-label = Billing
landing-premium-plans-table-billing-plus-period-yearly = Yearly
landing-premium-plans-table-billing-plus-period-monthly = Monthly
# There is not much room in the UI for this string, so abbreviating "month",
# if possible, is probably a good idea:
# Variables:
#   $monthlyPrice (string) - annual plan's price per month, including currency, e.g. "$13.37"
landing-premium-plans-table-price-plus-yearly = { $monthlyPrice }/mo.
# Variables:
#   $discountPercentage (number) - how much percent the yearly plan is cheaper than the monthly plan, without the percentage sign, e.g. `42`
landing-premium-plans-table-price-plus-yearly-discount = Save { $discountPercentage }%
# Variables:
#   $yearlyPrice (string) - annual plan's price in total, including currency, e.g. "$13.37"
landing-premium-plans-table-price-plus-yearly-sum = { $yearlyPrice } total
# There is not much room in the UI for this string, so abbreviating "month",
# if possible, is probably a good idea:
# Variables:
#   $monthlyPrice (string) - monthly plan's price, including currency, e.g. "$13.37"
landing-premium-plans-table-price-plus-monthly = { $monthlyPrice }/mo.
landing-premium-plans-table-cta-free-label = Start free monitoring
landing-premium-plans-table-cta-plus-label = Get data removal
landing-premium-plans-table-reassurance-free-label = Upgrade anytime
landing-premium-plans-table-reassurance-plus-label = Cancel anytime


landing-premium-plans-cards-feature-included = Included:
landing-premium-plans-cards-feature-not-included = Not included:
# Variables:
#   $dataBrokerTotalCount (number) - number of scanned data broker sites, e.g. 190
landing-premium-plans-cards-feature-scan-free =
    { $dataBrokerTotalCount ->
        [one] <b>One-time</b> scan of { $dataBrokerTotalCount } data broker site that may be selling your personal info
       *[other] <b>One-time</b> scan of { $dataBrokerTotalCount } data broker sites that may be selling your personal info
    }
landing-premium-plans-cards-feature-scan-free-masked = <b>One-time</b> scan of data brokers that may be selling your personal info
# Variables:
#   $dataBrokerTotalCount (number) - number of scanned data broker sites, e.g. 190
landing-premium-plans-cards-feature-scan-plus =
    { $dataBrokerTotalCount ->
        [one] <b>Monthly</b> scan of { $dataBrokerTotalCount } data broker site that may be selling your personal info
       *[other] <b>Monthly</b> scan of { $dataBrokerTotalCount } data broker sites that may be selling your personal info
    }
landing-premium-plans-cards-feature-scan-plus-masked = <b>Monthly</b> scan of data brokers that may be selling your personal info
landing-premium-plans-cards-feature-removal-free = <b>Manual removal</b> of personal info from sites that are selling it
landing-premium-plans-cards-feature-removal-plus = <b>Automatic data removal</b> from sites that are selling your personal info
landing-premium-plans-cards-feature-alerts = Get alerts when your data has been breached
landing-premium-plans-cards-feature-guidance = <b>Guided help</b> to fix high-risk data breaches
landing-premium-plans-cards-feature-monitoring = Continuous monitoring

# Value proposition

landing-premium-value-prop-fix-exposures-description = We provide steps to follow when you’ve been affected by a data breach and can even remove your data from more than 190 sites trying to sell it — and we <privacy_link>respect your privacy</privacy_link> in the process.
landing-premium-value-prop-info-at-risk-description = Details like your <exposure_type_list>home address, family members’ names, financial info</exposure_type_list> and more can be exposed when a website is hacked — or sold on data broker sites to anyone looking for you. Knowing what info is out there is the first step in protecting yourself.
landing-premium-value-prop-progress-card-illustration-alt = Progress card delineating exposures that are fixed, in progress or manually fixed

# Quote

landing-premium-quote = There’s a $240 billion industry of <data_brokers>data brokers</data_brokers> selling your private information for profit. It’s time to take back your privacy.

# US FAQ

landing-premium-what-websites-sell-info-qn = What kinds of websites sell my personal information?
landing-premium-what-websites-sell-info-ans = Certain websites are in the business of collecting and selling people’s personal information without their consent, which is unfortunately legal in the US. These sites are called data brokers and they make up a $240 billion dollar industry. They use sophisticated methods to collect personal, financial, location, and even health information, often without your consent or even your knowledge. They’ll sell what they’ve collected to third parties, profiting from your information and leaving you open to violations of your privacy and security.
landing-premium-continuous-data-removal-qn = How does continuous data removal work?
# Variables:
# $data_broker_sites_total_num is the total number of data broker sites available to scan. It will always be plural.
landing-premium-continuous-data-removal-ans = { $data_broker_sites_total_num ->
   *[other] Every month, we use the information you provided about yourself (name, location and birthdate) to search across { $data_broker_sites_total_num } data broker sites that sell people’s private information. If we find your data on any of these sites, we initiate the request for removal. This feature is available for { -brand-monitor-plus } users only. <learn_more_link>Learn more here.</learn_more_link>
}
landing-premium-continuous-data-removal-ans-masked = Every month, we use the information you provided about yourself (name, location and birthdate) to search across data brokers that sell people’s private information. If we find your data on any of these sites, we initiate the request for removal. This feature is available for { -brand-monitor-plus } users only. <learn_more_link>Learn more here.</learn_more_link>

# Scan Limit

landing-premium-max-scan = We’ve reached the maximum scans for the month. Enter your email to get on our waitlist.
landing-premium-max-scan-at-capacity = At capacity
landing-premium-max-scan-waitlist = Join waitlist
landing-premium-waitlist-section-pt-1 = We’ve reached the maximum scans for the month.
landing-premium-waitlist-section-pt-2 = Enter your email to get on our waitlist.
