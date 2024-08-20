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
legal = Juridisk

# Unsubscribe link in email.
email-unsub-link = Avslutt abonnement

# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    Du mottar denne e-postmeldingen fordi du registrerte deg for { -product-name }-varsler.
    Vil du ikke lenger ha disse e-postmeldingene? { $unsubLink }. Dette er en automatisert e-post. Hvis du ønsker brukerstøtte, besøk { $faqLink }.

# Button text
verify-email-cta = Bekreft e-post

# Headline of verification email
email-link-expires = Denne lenken utløper om 24 timer

## Variables:
##   $userEmail (string) - User email address

##

# Subject line of email
email-subject-found-breaches = { -product-name } fant din informasjon i disse datalekkasjene

# Subject line of email
email-subject-no-breaches = { -product-name } fant ingen kjente datalekkasjer

# Subject line of email
email-subject-verify = Bekreft e-postadressen din for { -product-name }

fxm-warns-you-no-breaches =
    { -product-name } advarer deg om datalekkasjer som involverer din personlige informasjon. 
    Så langt har det ikke hendt. Vi sender deg et varsel hvis e-postadressen din vises i en ny datalekkasje.

email-breach-alert-blurb =
    { -product-name } advarer deg om datalekkasjer som involverer din personlige informasjon. 
    Vi har nettopp mottatt detaljer om et annet selskaps datalekkasje.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address

## Verification email

## Breach report
## Variables:
##   $email-address (string) - Email address

## Breach alert

