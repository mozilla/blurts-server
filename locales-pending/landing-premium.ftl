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
