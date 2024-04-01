# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox

# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN

# A link to legal information about mozilla products.
legal = Usḍif

# Unsubscribe link in email.
email-unsub-link = Ffeɣ seg ujerred

# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    Tremseḍ-d izen-a acku tjerrdeḍ ɣer yilɣa n { -product-name }
    Ur tebɣiḍ ara ad tremseḍ iznan-a? { $unsubLink }. Wagi d izen awurman. I wugar n tallelt, rzu ɣer { $faqLink }-nneɣ.

# Button text
verify-email-cta = Senqed tansa imayl

# Headline of verification email
email-link-expires = Aseɣwen-agi ad yemmet akka 24 isragen

## Variables:
##   $userEmail (string) - User email address

##

# Subject line of email
email-subject-found-breaches = { -product-name } yufa-d talɣut-ik deg tkerḍiwin-a n yisefka

# Subject line of email
email-subject-no-breaches = { -product-name } ur d-yufi ara takerḍa n yisefka yettwassnen

# Subject line of email
email-subject-verify = Senqed tansa imayl-ik/im i { -product-name }

fxm-warns-you-no-breaches =
    { -product-name } ad d-id-yelɣu ɣef trewliwin n yisefka i yeḥuzan talɣut-ik tudmawant
    Akka tura, ulac tarewla n yisefka yettwafen. Ad ak-d-nazen alɣu ma yella tansa-ik imayl tban-d deg trewla tamaynut n yisefka.

email-breach-alert-blurb =
    { -product-name } ad d-id-yelɣu ɣef trewliwin n yisefka i yeḥuzan talɣut-ik tudmawant
    Akken kan i d-nermes talqut ɣef trewla n yisefka i yeḥuzan takebbanit-nniḍen.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`


## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address

email-breach-status = Addad n trewla tamirant
# table row 2 label
email-breach-total = Amḍan asemday n wanfalen:
# table row 3 label
email-resolved = Anfalen yefran:
# table row 4 label
email-unresolved = Tirewliwin ur nefri ara:
email-resolve-cta = Fru tirewliwin

## Verification email


## Breach report
## Variables:
##   $email-address (string) - Email address

email-dashboard-cta = Ddu ɣer tfelwit n usenqed

## Breach alert

