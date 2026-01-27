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

error-not-subscribed = Denne e-postadressa abonnerer ikkje på { -product-name }.
user-add-invalid-email = Ugyldig e-postadresse
user-add-too-many-emails = Du overvakar maksimalt antal e-postadresser.
user-add-duplicate-email = Denne e-postadressa er allereie lagt til i { -product-name }.
user-add-verification-email-just-sent = Ein ny stadfestings e-post kan ikkje sendast etter så kort tid. Prøv igjen seinare.
user-add-unknown-error = Noko gjekk gale når ytterlegare ei e-postadresse skulle leggjast til. Prøv igjen seinare.
user-delete-unknown-error = Noko gjekk gale når ei e-postadresse skulle fjernast. Prøv igjen seinare.
user-verify-token-error = Stadfestings-token er påkravd.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Kompromiterte data:
# Link title
more-about-this-breach = Meir om denne datalekkasjen
what-data = Kva for nokre data er kompromitterte:
delayed-reporting-headline = Kvifor tok det så lang tid å rapportere denne datalekkasjen?
delayed-reporting-copy =
    Det kan nokre gongar ta månadar eller år før data involverte 
    i ein datalekkasje dukkar opp på nettstadar som vert brukte av kriminelle (kjent som det mørke nettet eller dark web). Datalekkasjar blir lagt til i databasen vår 
    så snart dei er oppdaga og stadfesta.

##

# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Oversyn
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Den { $breachDate } vart { $breachTitle } utsett for ein datalekkasje. Når datalekkasjen vart oppdaga og stadfesta, vart han lagt til i databasen vår den { $addedDate }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Datalekkasje lagt til:
# Section headline
rec-section-headline = Kva må du gjere med denne datalekkasjen
rec-section-subhead = Vi tilrår at du gjer dette for å halde den personlege informasjonen din trygg, og beskytte den digitale identiteten din.
# Section headline
rec-section-headline-no-pw = Kva du skal gjere for å beskytte den personlege informasjonen din
rec-section-subhead-no-pw = Sjølv om passord ikkje vart lekne i denne datalekkasjen, er det framleis ting du kan gjere for å ta betre vare på den personlege informasjonen din.

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Mozilla-konto
open-in-new-tab-alt = Opne lenke i ei ny fane

## Search Engine Optimization

meta-desc-2 = FInn ut om du har vore del av ein datalekkasje med { -brand-fx-monitor }. Vi rettleiar deg i kva du skal gjere, og overvakar heile tider nettstadar for eventuelle nye datalekkasjar.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Logg inn
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

mobile-menu-label = Hovudmeny
main-nav-button-collapse-label = Slå saman menyen
main-nav-button-collapse-tooltip = Slå saman menyen
main-nav-button-expand-label = Utvid meny
main-nav-button-expand-tooltip = Utvid meny
main-nav-label = Navigasjon
main-nav-link-home-label = Heim
main-nav-link-dashboard-label = Oversyn
main-nav-link-settings-label = Innstillingar
main-nav-link-faq-label = Vanlege spørsmål (FAQ)
main-nav-link-faq-tooltip = Vanlege spørsmål

## User menu

user-menu-trigger-label = Opne brukarmeny
user-menu-trigger-tooltip = Profil
user-menu-manage-fxa-label = Handsam { -brand-mozilla-account }en din
user-menu-settings-label = Innstillingar
user-menu-settings-tooltip = Konfigurer { -brand-mozilla-monitor }
user-menu-help-label = Hjelp og brukarstøtte
user-menu-help-tooltip = Få hjelp til å bruke { -brand-mozilla-monitor }
user-menu-signout-label = Logg ut
user-menu-signout-tooltip = Logg ut frå { -brand-mozilla-monitor }

## Footer

mozilla = { -brand-mozilla }
terms-of-service = Tenestevilkår
privacy-notice = Personvernfråsegn
github = { -brand-github }
footer-nav-recent-breaches = Nylege datalekkasjar
footer-external-link-faq-label = Vanlege spørsmål (FAQ)
footer-external-link-faq-tooltip = Vanlege spørsmål

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Fann ikkje sida
error-page-error-404-copy = Vi beklagar, sida du ser etter finst ikkje lenger.
error-page-error-404-cta-button = Gå tilbake

## Breach overview page

all-breaches-headline-3 = Database for datalekkasjar
all-breaches-lead = Vi overvakar heile tida kjende datalekkasjar for å finne ut om din personelege informasjon er komprommitert. Her er ei fullstendig liste over alle datalekkasjar som er rapporterte sidan 2007.
search-breaches = Søk etter datalekkasjar
# the kind of user data exposed to hackers in data breach.
exposed-data = Eksponerte data:

## Public breach detail page

find-out-if-2 = Finn ut om du har vore involvert i denne datalekkasjen
find-out-if-description = Vi hjelper deg raskt med å finne ut om e-postadressa di er eksponert i denne datalekkasjen, og viser deg kva du skal gjere vidare.
breach-detail-cta-signup = Sjå etter datalekkasjar
loading-accessibility = Lastar
