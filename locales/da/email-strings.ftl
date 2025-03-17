# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-logo-alt = { -brand-mozilla-monitor }
email-header-button-sign-in = Log ind

## Email footers

email-footer-support-heading = Har du spørgsmål om { -brand-mozilla-monitor }?
email-footer-support-content = Besøg vores <support-link>supportcenter</support-link> for at få hjælp
email-footer-trigger-transactional = Du modtager denne mail, fordi du abonnerer på { -brand-mozilla-monitor }.
email-footer-source-hibp = Information om datalæk stammer fra <hibp-link>{ -brand-HIBP }</hibp-link>
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = Privatliv
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
email-dashboard-cta = Gå til oversigten

## Breach alert email

email-breach-alert-all-subject = Ny datalæk opdaget
email-breach-alert-all-preview = Vi guider dig gennem løsningen trin for trin.
email-breach-alert-all-hero-heading = Du er blevet ramt af en nyt datalæk
email-breach-alert-all-hero-subheading = Bare rolig, vi kan hjælpe dig med at løse problemet
email-breach-alert-all-lead = { -brand-mozilla-monitor } opdagede følgende datalæk, der inkluderer dine personlige oplysninger:
email-breach-alert-all-source-title = Kilde for datalæk:
email-breach-alert-all-data-points-title = Dine eksponerede data:
email-breach-alert-all-next-steps-lead = Vi viser dig trin for trin, hvordan du løser denne datalæk.
email-breach-alert-all-next-steps-cta-label = Lad os komme i gang
email-breach-alert-all-next-steps-button-dashboard = Gå til oversigten
