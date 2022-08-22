# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = { -product-name } Report
report-date = Report Date:
email-address = Email Address:
# A link to legal information about mozilla products.
legal = Legal
# Unsubscribe link in email.
email-unsub-link = Unsubscribe
# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    You’re receiving this email because you signed up for { -product-name } 
    alerts. No longer want these emails? { $unsubLink }. This is an automated email. For support, visit { $faqLink }.
# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy =
    You’re receiving this email because you signed up for { -product-name } alerts. 
    This is an automated email. For support, visit { $faqLink }.
# Button text
verify-email-cta = Verify Email
# Button text
see-all-breaches = See All Breaches
# Headline of verification email
email-link-expires = This link expires in 24 hours
email-verify-blurb = Verify your email to add it to { -product-name } and sign up for breach alerts.
# Email headline
email-found-breaches-hl = Here’s your summary of past data breaches
# Email headline
email-breach-summary-for-email = Breach summary for { $userEmail }
# Email headline
email-no-breaches-hl = { $userEmail } appeared in 0 known data breaches
# Email headline
email-alert-hl = { $userEmail } appeared in a new data breach
# Subject line of email
email-subject-found-breaches = { -product-name } found your info in these breaches
# Subject line of email
email-subject-no-breaches = { -product-name } found no known breaches
# Subject line of email
email-subject-verify = Verify your email for { -product-name }
# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Learn more about { $fxmLink }
email-sensitive-disclaimer =
    Due to the sensitive nature of this breach, emails involved are not publicly discoverable. 
    You’re receiving this alert because you’re the verified owner of this email address.
fxm-warns-you-no-breaches =
    { -product-name } warns you about data breaches involving your personal info. 
    So far, no breaches were found. We’ll send you an alert if your email address appears in a new breach.
fxm-warns-you-found-breaches =
    { -product-name } warns you about data breaches involving your personal info. 
    You’re also signed up to receive alerts if your email address appears in a new breach.
email-breach-alert-blurb =
    { -product-name } warns you about data breaches involving your personal info. 
    We just received details about another company’s data breach.
# List headline
faq-list-headline = Frequently asked questions
# Link Title
faq-v2-1 = I don’t recognise one of these companies or web sites. Why am I in this breach?
# Link Title
faq-v2-2 = Do I need to do anything if a breach happened years ago or this is an old account?
# Link Title
faq-v2-3 = I just found out I’m in a data breach. What do I do next?
# Link Title
faq-v2-4 = How does { -product-name } treat sensitive sites?
# This string contains nested markup that becomes a link to Firefox Monitor
# later in the code. Please do not modify or remove "<a>" and "</a>".
pre-fxa-message = <a>Create a free { -brand-fxa }</a>, and you can add up to 15 email addresses.
# Section headline
monitor-another-email = Want to monitor another email?
# Subject line of email
pre-fxa-subject = An update from { -product-name }
pre-fxa-headline = What’s changing with { -product-name }
pre-fxa-blurb =
    Here’s what’s changed since you signed up for { -product-name }, the service that 
    monitors known data breaches for your personal info. We’re linking it to Firefox accounts.
pre-fxa-tout-1 = Stay alert to more breaches
pre-fxa-p-1 =
    <a>Create an account</a> to monitor up to 15 email address for 
    data breaches. We recommend adding any email addresses you’ve used to create online accounts.
pre-fxa-tout-2 = Get a dashboard view
pre-fxa-p-2 =
    See all data breaches in one place so you know which passwords to change. 
    The breach dashboard is only available with an account.
pre-fxa-tout-3 = Keep getting email alerts
pre-fxa-p-3 =
    You’ll still receive alerts from { -product-name }. We’ll let you know if your info 
    appears in a new data breach.
# Button at the bottom of pre-fxa email.
create-account = Create Account
# More security products
more-products-headline = Protect yourself with more of our products
more-products-vpn = Protection for your whole device, on every device.
more-products-cta-vpn = Get { -product-name-vpn }
more-products-relay = Hide your real email address to help protect your identity.
more-products-cta-relay = Get { -product-name-relay }

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

email-2022-unsubscribe = You’re receiving this automated email as a subscriber of { -product-name }. <br>Feel free to change your email preferences at any time <a { $unsubscribe-link-attr }>here</a>.
# Have I Been Pwned attribution
email-2022-hibp-attribution = Breach data provided by <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`

email-unresolved-heading = You have unresolved breaches
email-unresolved-subhead = Your email has been exposed. <br>Fix it right away with { -product-name }.
email-is-affected = Your email, { $email-address }, is affected by at least one data breach
email-more-detail = Sign in to { -product-name } now to see more details about your breaches (including when they occurred and what data was exposed), and learn what you should do when your email’s been exposed in a data breach.
email-breach-status = Current breach status
# table row 1 label
email-monitored = Total emails monitored:
# table row 2 label
email-breach-total = Total number of breaches:
# table row 3 label
email-resolved = Resolved breaches:
# table row 4 label
email-unresolved = Unresolved breaches:
email-resolve-cta = Resolve breaches
