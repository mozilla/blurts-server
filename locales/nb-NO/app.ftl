# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-short-name = Monitor
-brand-name = Firefox
-brand-HIBP = Have I Been Pwned
-brand-lockwise = Firefox Lockwise
-brand-firefox = Firefox
-brand-monitor = Monitor
-brand-fx-monitor = Mozilla Monitor
-brand-mozilla = Mozilla
-brand-premium = Premium
-brand-monitor-premium = Monitor Premium
-brand-mozilla-foundation = Mozilla Foundation
-brand-github = GitHub
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay
-brand-mozilla-monitor = Mozilla Monitor
-brand-monitor-plus = Monitor Plus
-brand-solo-ai = Solo AI

##

error-not-subscribed = Denne e-postadressen abonnerer ikke på { -product-name }.
user-add-invalid-email = Ugyldig epostadresse
user-add-too-many-emails = Du overvåker det maksimale antallet e-postadresser.
user-add-duplicate-email = Denne e-postadressen er allerede lagt til { -product-name }.
user-add-verification-email-just-sent = En ny bekreftelses-e-post kan ikke sendes så raskt. Prøv på nytt senere.
user-add-unknown-error = Noe gikk galt da en ekstra e-postadresse skulle legges til. Prøv igjen senere.
user-delete-unknown-error = Noe gikk galt da en e-postadresse skulle fjernes. Prøv på nytt senere.
user-verify-token-error = Bekreftelsessymbol er påkrevd.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Kompromiterte data:
# Link title
more-about-this-breach = Mer om denne datalekkasjen
what-data = Hvilke data ble kompromittert:
delayed-reporting-headline = Hvorfor tok det så lang tid å rapportere denne datalekkasjen?
delayed-reporting-copy =
    Det kan noen ganger ta måneder eller år før data involvert 
    i en datalekkasje dukker opp på nettsteder som brukes av kriminelle (kjent som det mørke nettet eller dark web). Datalekkasjer blir lagt til i vår database 
    så snart de er oppdaget og bekreftet.

##

# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Oversikt
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Den { $breachDate } ble { $breachTitle } utsatt for en datalekkasje. Når datalekkasjen ble oppdaget og bekreftet, ble det lagt til databasen vår den { $addedDate }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Datalekkasje lagt til:
# Section headline
rec-section-headline = Hva du skal gjøre med denne datalekkasjen
rec-section-subhead = Vi anbefaler at du tar disse forhåndsregler for å holde din personlige informasjon trygg og beskytte din digitale identitet.
# Section headline
rec-section-headline-no-pw = Hva du skal gjøre for å beskytte din personlige informasjon
rec-section-subhead-no-pw = Selv om passord ikke ble lekket i denne datalekkasjen, er det fremdeles forhåndsregler du kan ta for å bedre beskytte din personlige informasjon.

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Mozilla-konto
open-in-new-tab-alt = Åpne lenke i en ny fane

## Search Engine Optimization

meta-desc-2 = Finn ut om du har vært en del av en datalekkasje med { -brand-fx-monitor }. Vi hjelper deg med å forstå hva du skal gjøre videre og overvåker kontinuerlig for nye datalekkasjer.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Logg inn
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

mobile-menu-label = Hovedmeny
main-nav-button-collapse-label = Skjul meny
main-nav-button-collapse-tooltip = Skjul meny
main-nav-button-expand-label = Utvid meny
main-nav-button-expand-tooltip = Utvid meny
main-nav-label = Navigasjon
main-nav-link-home-label = Hjem
main-nav-link-dashboard-label = Oversikt
main-nav-link-settings-label = Innstillinger
main-nav-link-faq-label = Ofte stilte spørsmål
main-nav-link-faq-tooltip = Ofte stilte spørsmål

## User menu

user-menu-trigger-label = Åpne brukermeny
user-menu-trigger-tooltip = Profil
user-menu-manage-fxa-label = Behandle din { -brand-mozilla-account }
user-menu-settings-label = Innstillinger
user-menu-settings-tooltip = Konfigurer { -brand-mozilla-monitor }
user-menu-help-label = Hjelp og brukerstøtte
user-menu-help-tooltip = Få hjelp med å bruke { -brand-mozilla-monitor }
user-menu-signout-label = Logg ut
user-menu-signout-tooltip = Logg ut av { -brand-mozilla-monitor }

## Footer

mozilla = { -brand-mozilla }
terms-of-service = Bruksvilkår
privacy-notice = Personvernerklæring
github = { -brand-github }
footer-nav-recent-breaches = Nylige datalekkasjer
footer-external-link-faq-label = Ofte stilte spørsmål
footer-external-link-faq-tooltip = Ofte stilte spørsmål

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Fant ikke siden
error-page-error-404-copy = Beklager, siden du leter etter finnes ikke lenger.
error-page-error-404-cta-button = Gå tilbake

## Breach overview page

all-breaches-headline-3 = Database over datalekkasjer
all-breaches-lead = Vi overvåker alle kjente datalekkasjer for å finne ut om dine personopplysninger har blitt kompromittert. Her er en komplett liste over alle datalekkasjene som er rapportert siden 2007.
search-breaches = Søk etter datalekkasjer
# the kind of user data exposed to hackers in data breach.
exposed-data = Eksponerte data:

## Public breach detail page

find-out-if-2 = Finn ut om du var involvert i denne datalekkasjen
find-out-if-description = Vi hjelper deg med å raskt se om e-postadressen din ble eksponert i denne datalekkasjen, og viser deg hva du skal gjøre videre.
breach-detail-cta-signup = Se etter datalekkasjer
loading-accessibility = Laster
