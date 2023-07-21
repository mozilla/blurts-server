# Strings in this file are not yet final, and thus should not be localised yet.

fix-flow-nav-data-broker-profiles = Data broker profiles
fix-flow-nav-high-risk-data-breaches = High risk data breaches
fix-flow-nav-leaked-passwords = Leaked passwords
fix-flow-nav-security-recommendations = Security recommendations
fix-flow-data-broker-profiles-start-free-scan-headline = Find out which sites are selling your personal info
# Variables:
# $data_broker_count is the number of data brokers scanned monthly
fix-flow-data-broker-profiles-start-free-scan-content-p1 =
  { $data_broker_count ->
    *[other] Before you review your data breaches, would you like us to search for you on { $data_broker_count } data broker sites that may be selling your personal information?
  }
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
fix-flow-data-broker-profiles-manual-remove-how-to-remove-step-4-content = This process does not remove your information from public records, so even after your information is removed, sites often add you back. If you’d like us to handle this for you and automatically remove any new exposures, upgrade to { -brand-monitor-premium }.
fix-flow-data-broker-profiles-manual-remove-review-profiles-headline = Review & remove your profiles
fix-flow-data-broker-profiles-manual-remove-button-remove-for-me = Remove them for me
fix-flow-data-broker-profiles-manual-remove-button-skip = Skip for now 
fix-flow-data-broker-profiles-automatic-remove-headline = We’ll auto-remove these and guide you through exposures that need manual fixes
# Variables:
# $data_broker_count is the number of data brokers scanned monthly
fix-flow-data-broker-profiles-automatic-remove-subheadline = {
  $data_broker_count ->
      *[other] Removing these stops the sale of your personal info on { $data_broker_count } sites. Upgrade to { -brand-monitor-premium } and you’ll get:
}
# Variables:
# $percent is the percentage you can save subscribing to an annual/yearly plan
fix-flow-data-broker-profiles-automatic-remove-save-percent = Save { $percent }% with yearly plan 🎉
fix-flow-data-broker-profiles-automatic-remove-features-select-plan-headline = { -brand-premium } Protection
fix-flow-data-broker-profiles-automatic-remove-features-select-plan-toggle-yearly = Yearly
fix-flow-data-broker-profiles-automatic-remove-features-select-plan-toggle-monthly = Monthly
fix-flow-data-broker-profiles-automatic-remove-features-select-plan-monthly-frequency = Billed monthly
fix-flow-data-broker-profiles-automatic-remove-features-select-plan-monthly-button = Select monthly plan
fix-flow-data-broker-profiles-automatic-remove-features-select-plan-yearly-frequency = Billed yearly
fix-flow-data-broker-profiles-automatic-remove-features-select-plan-yearly-button = Select yearly plan
fix-flow-data-broker-profiles-automatic-remove-features-headline = Features:
fix-flow-data-broker-profiles-automatic-remove-features-remove-personal-info = Automatic removal of personal info from sites that are selling it
fix-flow-data-broker-profiles-automatic-remove-features-guided-experience = Guided experience through high risk data breaches that require manual steps
fix-flow-data-broker-profiles-automatic-remove-features-continuous-monitoring = Continuous monitoring for new exposures
fix-flow-data-broker-profiles-automatic-remove-features-breach-alerts = Alerts when your data has been breached
# Variables:
# $data_broker_count is the number of data brokers scanned monthly
fix-flow-data-broker-profiles-automatic-remove-features-monthly-scan =
  { $data_broker_count ->
    *[other] Monthly scan of { $data_broker_count } data broker sites that may be selling your personal info
  }
# Variables:
# $price is the price of a monthly plan. "/mo" is short for "monthly"
fix-flow-data-broker-profiles-automatic-remove-features-price = ${ $price }/mo
