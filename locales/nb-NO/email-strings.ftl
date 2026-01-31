# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-button-sign-in = Logg inn

## Email footers

email-footer-support-heading = Spørsmål om { -brand-mozilla-monitor }?
email-footer-support-content = Besøk vårt <support-link>brukerstøttesenter</support-link> for å få hjelp
email-footer-trigger-transactional = Du mottar denne e-posten som abonnent på { -brand-mozilla-monitor }.
email-footer-reason-subscriber = Du mottar denne automatiske e-posten fordi du abonnerer på { -brand-mozilla-monitor }. Hvis du har mottatt den ved en feil, trenger du ikke å gjøre noe. For mer informasjon kan du besøke <support-link>{ -brand-mozilla } kundestøtte</support-link>.
email-footer-reason-subscriber-one-time = Du har mottatt denne engangs automatiserte e-posten fordi du abonnerer på { -brand-monitor-plus }. Du vil ikke motta flere e-poster som denne. For mer informasjon kan du besøke <support-link>{ -brand-mozilla }-brukerstøtte</support-link>.
# Variables:
#    $support_link (string) - The URL the user can visit for support, e.g. "https://support.mozilla.org"
email-footer-support-content-plain =
    Besøk brukerstøttesenteret vårt for hjelp:
    { $support_link }
# Variables:
#   $hibp_link (string) - URL to Have I Been Pwned, e.g. "https://haveibeenpwned.com".
email-footer-source-hibp-plain = Datalekkasjeinformasjon levert av { -brand-HIBP }: { $hibp_link }
email-footer-source-hibp = Informasjon om datalekkasje stammer fra <hibp-link>{ -brand-HIBP }</hibp-link>
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = Personvern
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# Button text
verify-email-cta = Bekreft e-post
# Headline of verification email
email-link-expires = Denne lenken utløper om 24 timer

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

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Informasjon om datalekkasje stammer fra <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Verification email

email-verify-heading = Beskytt dine data med det samme
email-verify-simply-click = Bare klikk på lenken nedenfor for å fullføre bekreftelsen av kontoen din.

## Breach report

email-breach-summary = Her er sammendraget ditt av datalekkasjer
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = Søkeresultatene for { $email-address }-kontoen din viser at e-postadressen din kan ha blitt eksponert. Vi anbefaler at du setter i verk tiltak nå for å håndtere denne datalekkasjen.
email-dashboard-cta = Gå til oversikten

## Breach alert email

email-breach-alert-all-subject = Ny datalekkasje oppdaget
email-breach-alert-all-preview = Vi veileder deg gjennom trinnene for å løse det.
email-breach-alert-all-hero-heading = Du har vært involvert i en nytt datalekkasje
email-breach-alert-all-hero-subheading = Ikke bekymre deg, vi kan hjelpe deg med å løse denne eksponeringen
email-breach-alert-all-lead = { -brand-mozilla-monitor } oppdaget følgende datalekkasje som inkluderer dine personopplysninger:
email-breach-alert-all-source-title = Lekkasjekilde:
email-breach-alert-all-data-points-title = Dine eksponerte data:
email-breach-alert-all-next-steps-lead = Vi vil veilede deg trinn for trinn i hvordan du løser denne datalekkasjen
email-breach-alert-all-next-steps-cta-label = La oss komme i gang
email-breach-alert-all-next-steps-button-dashboard = Gå til oversikten
