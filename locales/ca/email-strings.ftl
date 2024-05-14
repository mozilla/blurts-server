# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox

# A link to legal information about mozilla products.
legal = Avisos legals

# Unsubscribe link in email.
email-unsub-link = Cancel·la la subscripció

# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    Rebeu aquest correu perquè us heu subscrit a les alertes del { -product-name }. 
    No voleu rebre més correus d'aquest tipus? { $unsubLink }. Aquest és un correu automatitzat. Per obtenir assistència, visiteu { $faqLink }.

# Button text
verify-email-cta = Verifica l'adreça electrònica

# Headline of verification email
email-link-expires = Aquest enllaç caduca d'aquí a 24 hores

## Variables:
##   $userEmail (string) - User email address

##

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address

## Verification email

## Breach report
## Variables:
##   $email-address (string) - Email address

## Breach alert

