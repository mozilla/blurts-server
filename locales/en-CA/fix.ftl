# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = High risk data breaches
fix-flow-nav-leaked-passwords = Leaked passwords
fix-flow-nav-security-recommendations = Security recommendations
guided-resolution-flow-exit = Return to dashboard
guided-resolution-flow-next-arrow = Go to next step
guided-resolution-flow-next-arrow-sub-step = Go to next result
guided-resolution-flow-step-navigation-label = Guided steps

# Celebration screens


## Shared CTA labels

fix-flow-celebration-next-label = Let’s keep going
fix-flow-celebration-next-recommendations-label = See recommendations
fix-flow-celebration-next-dashboard-label = Go to your Dashboard

## High-risk flow

fix-flow-celebration-high-risk-title = You’ve fixed your high risk exposures!
fix-flow-celebration-high-risk-description-in-progress = Doing this work can feel like a lot, but it’s important to do so to keep yourself safe. Keep up the good work.
fix-flow-celebration-high-risk-description-done = Doing this work can feel like a lot, but it’s important to do so to keep yourself safe.
fix-flow-celebration-high-risk-description-next-passwords = Now let’s fix your exposed passwords.
fix-flow-celebration-high-risk-description-next-security-questions = Now let’s fix your exposed security questions.
fix-flow-celebration-high-risk-description-next-security-recommendations = Next, we’ll give you personalized security recommendations based on what data of yours has been exposed.
fix-flow-celebration-high-risk-description-next-dashboard = You’ve reached the end of your steps. You can view any action items and track your progress on your dashboard.

## Leaked passwords and security questions flow

fix-flow-celebration-leaked-passwords-title = Your passwords are now protected!
fix-flow-celebration-security-questions-title = Your security questions are protected!
fix-flow-celebration-leaked-passwords-description-next-security-questions = Now let’s review and update your exposed security questions.
fix-flow-celebration-leaked-passwords-description-next-security-recommendations = Next, we’ll give you personalized security recommendations based on what data of yours has been exposed.
fix-flow-celebration-leaked-passwords-description-next-dashboard = Nicely done! You’ve reached the end of your steps. You can view any action items and track your progress on your dashboard.

## Security recommendations flow

fix-flow-celebration-security-recommendations-title = You’ve completed all your recommendations!
fix-flow-celebration-security-recommendations-description-next-dashboard = Nicely done! You’ve reached the end of your steps. You can view any action items and track your progress on your dashboard.

# High Risk Data Breaches

high-risk-breach-heading = Here’s what to do
high-risk-breach-subheading = This requires access to your sensitive info, so you’ll need to manually fix it.
# Variables
# $num_breaches is the number of breaches where the high risk data was found.
high-risk-breach-summary =
    { $num_breaches ->
        [one] It appeared in { $num_breaches } data breach:
       *[other] It appeared in { $num_breaches } data breaches:
    }
# Variables
# $breach_name is the name of the breach where the high risk data was found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
high-risk-breach-name-and-date = { $breach_name } <breach_date>on { $breach_date }</breach_date>
high-risk-breach-mark-as-fixed = Mark as fixed
high-risk-breach-skip = Skip for now
# Variables:
# $estimated_time is the estimated time it would take for a user to complete breach resolution steps. It not be singular, and the + is meant as "or more".
# An example of this string is Your estimated time: 15+ minutes.
high-risk-breach-estimated-time =
    { $estimated_time ->
       *[other] Your estimated time: { $estimated_time }+ minutes
    }

# Credit Card Breaches

high-risk-breach-credit-card-title = Your credit card number was exposed
high-risk-breach-credit-card-description = Anyone who gets it can make unauthorized purchases that you may be liable for. Act now to prevent financial harm.
high-risk-breach-credit-card-step-one = If you still have this card, contact the issuer to report it stolen.
high-risk-breach-credit-card-step-two = Request a new card with a new number.
high-risk-breach-credit-card-step-three = Check your accounts for unauthorized charges.

# Bank Account Breaches

high-risk-breach-bank-account-title = Your bank account was exposed
high-risk-breach-bank-account-description = Taking action as soon as possible could give you more legal protections to help you recover any losses.
high-risk-breach-bank-account-step-one = Notify your bank immediately that your account number has been compromised.
high-risk-breach-bank-account-step-two = Change your account number.
high-risk-breach-bank-account-step-three = Check your accounts for unauthorized charges.

# Social Security Number Breaches

high-risk-breach-social-security-title = Your social security number was exposed
high-risk-breach-social-security-description = Scammers can open up new loans or credit cards with your social security number. Act fast to prevent financial harm.
high-risk-breach-social-security-step-one = Protect yourself by <link_to_info>setting up a fraud alert or freezing your credit.</link_to_info>
high-risk-breach-social-security-step-two = <link_to_info>Check your credit report</link_to_info> for unrecognized accounts.

# Social Security Number Modal

ssn-modal-title = About fraud alerts and credit freezes
ssn-modal-description-fraud-part-one = <b>A fraud alert</b> requires businesses to verify your identity before it issues new credit in your name. It’s free, lasts one year, and won’t negatively affect your credit score.
ssn-modal-description-fraud-part-two = To set one up, contact any one of the three credit bureaus. You don’t have to contact all three.
ssn-modal-description-freeze-credit-part-one = <b>Freezing your credit</b> prevents anyone from opening a new account in your name. It’s free and won’t negatively affect your credit score, but you’ll need to unfreeze it before opening any new accounts.
ssn-modal-description-freeze-credit-part-two = To freeze your credit, contact each of the three credit bureaus — <equifax_link>Equifax</equifax_link>, <experian_link>Experian</experian_link>, and <transunion_link>TransUnion</transunion_link>.
ssn-modal-learn-more = Learn more about fraud alerts and credit freezes
ssn-modal-ok = OK

# PIN Breaches

high-risk-breach-pin-title = Your PIN was exposed
high-risk-breach-pin-description = Taking action as soon as possible could give you more legal protections to help you recover any losses.
high-risk-breach-pin-step-one = Notify your bank immediately that your PIN has been compromised.
high-risk-breach-pin-step-two = Change your PIN anywhere you’ve used the same one.
high-risk-breach-pin-step-three = Check your accounts for unauthorized charges.

# No high risk breaches found

high-risk-breach-none-title = Great news, we didn’t find any high risk data breaches
# Variables
# $email_list is list of emails that the user is monitoring for breaches. E.g. john@yahoo.com, ali@gmail.com, sam@hotmail.com
high-risk-breach-none-description = We detect data breaches based on your email address, and we didn’t find any high risk data breaches for { $email_list }.
high-risk-breach-none-sub-description-part-one = High risk data breaches include:
high-risk-breach-none-sub-description-ssn = Social security number
high-risk-breach-none-sub-description-bank-account = Bank account info
high-risk-breach-none-sub-description-cc-number = Credit card numbers
high-risk-breach-none-sub-description-pin = PINs
high-risk-breach-none-continue = Continue

# Security recommendations

security-recommendation-steps-label = Security recommendations
security-recommendation-steps-title = Here’s our advice:
security-recommendation-steps-cta-label = Got it!

# Phone security recommendation

security-recommendation-phone-title = Protect your phone number
# $num_breaches is the number of breaches where the phone number was found.
security-recommendation-phone-summary =
    { $num_breaches ->
        [one] Your phone number was exposed in { $num_breaches } data breach:
       *[other] Your phone number was exposed in { $num_breaches } data breaches:
    }
security-recommendation-phone-description = Unfortunately you can’t take it back. But there are steps you can take to make sure you stay safe.
security-recommendation-phone-step-one = Block spam numbers to prevent more junk calls
security-recommendation-phone-step-two = Don’t click on links in texts from unknown senders; if it appears to be from a trusted source, call directly to confirm

# Email security recommendation

security-recommendation-email-title = Protect your email address
# $num_breaches is the number of breaches where the email address was found.
security-recommendation-email-summary =
    { $num_breaches ->
        [one] Your email address was exposed in { $num_breaches } data breach:
       *[other] Your email address was exposed in { $num_breaches } data breaches:
    }
security-recommendation-email-description = Unfortunately you can’t fix this. But there are steps you can take to protect yourself.
security-recommendation-email-step-one = Don’t click on links in emails from unknown senders; if it appears to be from trusted source, call directly to confirm
security-recommendation-email-step-two = Be aware of <link_to_info>phishing scams</link_to_info>
security-recommendation-email-step-three = Mark suspicious emails as spam and block the sender
security-recommendation-email-step-four = Use <link_to_info>{ -brand-relay } email masks</link_to_info> to protect your email in the future

# IP security recommendation

security-recommendation-ip-title = Use a VPN for added privacy
# $num_breaches is the number of breaches where the IP address was found.
security-recommendation-ip-summary =
    { $num_breaches ->
        [one] Your IP address was exposed in { $num_breaches } data breach:
       *[other] Your IP address was exposed in { $num_breaches } data breaches:
    }
security-recommendation-ip-description = Your IP address pinpoints your location and internet service provider. Hackers could use this information to find your location or try to connect to your devices.
security-recommendation-ip-step-one = Use a VPN (such as <link_to_info>{ -brand-mozilla-vpn }</link_to_info>) to hide your real IP address and use the internet privately.

# Leaked Passwords

# Variables
# $breach_name is the name of the breach where the leaked password was found.
leaked-passwords-title = Your { $breach_name } password was exposed
# Variables
# $breach_date is the date when the breach occurred.
leaked-passwords-summary = It appeared in a data breach on { $breach_date }.
leaked-passwords-description = Scammers can access your account and will likely try to use it on other accounts to see if you’ve used the same password. Change it anywhere you’ve used it to protect yourself.
leaked-passwords-steps-title = Here’s what to do
leaked-passwords-steps-subtitle = This requires access to your account, so you’ll need to manually fix it.
# Variables
# $breach_name is the name of the breach where the leaked password was found.
# $emails_affected are the emails associated with the breach.
leaked-passwords-step-one = Change your password for <b>{ $emails_affected }</b> on <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-passwords-step-two = Change it anywhere else you’ve used it.
leaked-passwords-mark-as-fixed = Mark as fixed
leaked-passwords-skip = Skip for now
# Variables
# $estimated_time is the amount of time it would take for a user to manually resolve a leaked password breach. It will always be a number greater than 1.
# "Est." is shortform for "Estimated".
# "mins" is shortform for "minutes".
leaked-passwords-estimated-time =
    { $estimated_time ->
       *[other] Est. time to complete: { $estimated_time } mins per site
    }

# Leaked Security Questions

leaked-security-questions-title = Your security questions were exposed
# Variables
# $breach_name is the name of the breach where the leaked security questions were found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
leaked-security-questions-summary = They appeared in a data breach on { $breach_name } on { $breach_date }.
leaked-security-questions-description = Scammers can use these to access your accounts, and any other site where you’ve used the same security questions. Update them now to protect your accounts.
leaked-security-questions-steps-title = Here’s what to do
leaked-security-questions-steps-subtitle = This requires access to your account, so you’ll need to manually fix it.
# Variables
# $breach_name is the name of the breach where the security questions were found.
# $email_affected is the email associated with the breach.
leaked-security-questions-step-one = Update your security questions for <b>{ $email_affected }</b> on <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-security-questions-step-two = Update them on any other site where you used the same security questions. Be sure to use different security questions for every account.
