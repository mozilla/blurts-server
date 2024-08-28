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
# Button text
verify-email-cta = Bekræft mailadresse
# Headline of verification email
email-link-expires = Dette link udløber om 24 timer

##

# Subject line of email
email-subject-found-breaches = { -product-name } fandt dine informationer i disse datalæk
# Subject line of email
email-subject-no-breaches = { -product-name } fandt ingen kendte datalæk
# Subject line of email
email-subject-verify = Bekræft din mailadresse for { -product-name }
fxm-warns-you-no-breaches =
    { -product-name } advarer dig om datalæk, der omfatter dine personlige data.
    Indtil videre er det ikke sket. Vi sender dig en advarsel, hvis din mailadresse optræder i en ny datalæk.
email-breach-alert-blurb =
    { -product-name } advarer dig om datalæk, der omfatter dine personlige data.
    Vi har lige modtaget detaljer om et andet firmas datalæk.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Information om datalæk stammer fra <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Verification email

email-verify-heading = Beskyt dine data med det samme
email-verify-subhead = Bekræft din mailadresse for at beskytte dine data efter en datalæk.
email-verify-simply-click = Klik på linket nedenfor for at færdiggøre bekræften af din konto.

## Breach report

email-breach-summary = Her er din oversigt over datalæk
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = Resultatet af en søgning efter { $email-address } viser, at din mailadresse kan være involveret i en datalæk. Vi anbefaler, at du reagerer med det samme for at løse denne datalæk.
# Variables:
#   $email-address (string) - Email address
email-breach-detected-2 = Resultatet af en søgning efter <b>{ $email-address }</b> viser, at din mailadresse kan være involveret i en datalæk. Vi anbefaler, at du reagerer med det samme for at løse denne datalæk.
email-dashboard-cta = Gå til oversigten

## Breach alert

email-spotted-new-breach = Vi har opdaget en ny datalæk
