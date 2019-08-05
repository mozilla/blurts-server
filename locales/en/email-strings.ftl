# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox

click-to-verify = 
  Select the Verify My Email button within 24 hours to confirm your Firefox Monitor account. 
  Your report will then be on its way.
verify-my-email = Verify My Email
report-scan-another-email = Scan Another Email in {-product-name}

automated-message = 
  This is an automated email; if you received it in error, no action is required.

# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = We sent this message to { $userEmail } because the email address opted into alerts from {-product-name}.

unsubscribe-email-link  = 
  If you no longer want {-product-name} alerts, unsubscribe.

# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = {-product-name} Report 
report-date = Report Date:
email-address = Email Address:

# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = What To Do Next

report-headline = 
  { $breachCount ->
      [0] So far, so good.
      [one] Your account appeared in { $breachCount } breach.
     *[other] Your accounts appeared in { $breachCount } breaches.
  }

report-subhead-no-breaches =
  Your account doesn’t appear in our full report of breaches. 
  That’s good news, but there is more you can do. 
  Data breaches happen at any time, so read on to learn how you can protect your passwords.

report-subhead-found-breaches =
  Here’s your full Firefox Monitor report, which includes all known data breaches that contain this email address. 

report-pwt-blurb = 
  Passwords are so valuable, that thousands of them are stolen every day and traded or sold on the black market. 
  Stronger passwords protect your accounts and all the personal information that resides inside them. 

report-pwt-headline-1 = Use a different password for every account
report-pwt-summary-1 = 
  Reusing the same password everywhere opens the door for hackers. 
  They can use that password to log into your other accounts. 

report-pwt-headline-2 = Create strong, unique passwords
report-pwt-summary-2 = 
  Hackers use lists of common passwords to try to guess yours. 
  The longer and more random your password is, the harder it will be to steal.

report-pwt-headline-3 = Treat security questions like extra passwords
report-pwt-summary-3 = 
  Websites don’t check that your answers are accurate, just that they match every time. 
  Create long, random answers and store them somewhere safe.

report-pwt-headline-4 = Use a password manager 
report-pwt-summary-4 = 
  Services like 1Password, LastPass, Dashlane, and Bitwarden generate strong passwords, store them securely, 
  and fill them into websites so you don’t have to remember every single one.

# A link to legal information about mozilla products.
legal = Legal


# Share Firefox Monitor by email subject line
share-by-email-subject = See if you’ve been part of a data breach.

# Share Firefox Monitor by email message. {"https://monitor.firefox.com"} should not be translated or modified. 
share-by-email-message = 
    Hi,
    {-brand-name} has a free service where you can check to see if you’ve been part of a data breach. Here’s how it works:
    1. Go to {"https://monitor.firefox.com"} and search your email.
    2. See if your online accounts have been exposed in a data breach.
    3. Get tips from {-product-name} about what to do next.


# Unsubscribe link in email.
email-unsub-link =  Unsubscribe

# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb = You’re receiving this email because you signed up for {-product-name} 
  alerts. No longer want these emails? { $unsubLink }. This is an automated email. For support, visit { $faqLink }.

# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy = You’re receiving this email because you signed up for {-product-name} alerts. 
  This is an automated email. For support, visit { $faqLink }.

# Button text that takes the user to their signed in user dashboard.
view-my-dashboard-cta = View My Dashboard

# Button text
verify-email-cta = Verify Email

# Button text
see-all-breaches = See All Breaches

# Headline of verification email
email-link-expires = This link expires in 24 hours
email-verify-blurb = Verify your email to add it to {-product-name} and sign up for breach alerts.

# Email headline
email-found-breaches-hl = Here’s your summary of past data breaches

# Email headline
email-breach-summary-for-email = Breach summary for { $userEmail }

# Email headline
email-no-breaches-hl = { $userEmail } appeared in 0 known data breaches

# Email headline
email-alert-hl = { $userEmail } appeared in a new data breach

# Subject line of email
email-subject-found-breaches = {-product-name} found your info in these breaches

# Subject line of email
email-subject-no-breaches = {-product-name} found no known breaches

# Subject line of email
email-subject-verify = Verify your email for {-product-name}

# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Learn more about { $fxmLink }

email-sensitive-disclaimer = Due to the sensitive nature of this breach, emails involved are not publicly discoverable. 
  You’re receiving this alert because you’re the verified owner of this email address.

fxm-warns-you-no-breaches = {-product-name} warns you about data breaches involving your personal info. 
  So far, no breaches were found. We’ll send you an alert if your email address appears in a new breach.

fxm-warns-you-found-breaches = {-product-name} warns you about data breaches involving your personal info. 
  You’re also signed up to receive alerts if your email address appears in a new breach.

email-breach-alert-blurb = 
  {-product-name} warns you about data breaches involving your personal info. 
  We just received details about another company’s data breach.

# List headline
faq-list-headline = Frequently asked questions

# Link Title
faq-v2-1 = I don’t recognize one of these companies or websites. Why am I in this breach?

# Link Title
faq-v2-2 = Do I need to do anything if a breach happened years ago or this is an old account?

# Link Title
faq-v2-3 = I just found out I’m in a data breach. What do I do next?

# Link Title
faq-v2-4 = How does {-product-name} treat sensitive sites?
