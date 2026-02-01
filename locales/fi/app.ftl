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
-brand-mozilla-foundation = Mozilla-säätiö
-brand-github = GitHub
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay
-brand-mozilla-monitor = Mozilla Monitor
-brand-monitor-plus = Monitor Plus

##

error-not-subscribed = Tätä sähköpostiosoitetta ei ole tilattu { -product-name }iin.
user-add-invalid-email = Virheellinen sähköpostiosoite
user-add-too-many-emails = Seuraat enimmäismäärää sähköpostiosoitteita.
user-add-duplicate-email = Tämä sähköposti on jo lisätty tuotteeseen { -product-name }.
user-add-verification-email-just-sent = Toista vahvistussähköpostia ei voi lähettää näin nopeasti. Yritä uudelleen myöhemmin.
user-add-unknown-error = Jotain meni pieleen toisen sähköpostiosoitteen lisäämisessä. Yritä uudelleen myöhemmin.
user-delete-unknown-error = Jotain meni pieleen toisen sähköpostiosoitteen poistamisessa. Yritä uudelleen myöhemmin.
user-verify-token-error = Vahvistuspoletti vaaditaan.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Paljastuneet tiedot:
# Link title
more-about-this-breach = Lisätietoja tietovuodosta
what-data = Paljastuneet tiedot:
delayed-reporting-headline = Miksi vuodosta ilmoittaminen kesti niin kauan?
delayed-reporting-copy =
    Vuotaneiden käyttäjätunnusten esiintulo voi kestää vuosia tai kuukausia
    tietovuodosta pimeässä verkossa. Vuodot lisätään tietokantaamme heti, kun ne ovat löydetty ja vahvistettu.

##

# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Yhteenveto
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = { $breachTitle } vuodettiin { $breachDate }. Kun tietovuoto oli löydetty  ja vahvistettu, se lisättiin tietokantaamme { $addedDate }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Vuoto lisätty:
# Section headline
rec-section-headline = Mitä tehdä tälle vuodolle
rec-section-subhead = Suosittelemme sinua tekemään seuraavat asiat suojataksesi henkilökohtaisia tietojasi ja digitaalista henkilöyttäsi.
# Section headline
rec-section-headline-no-pw = Mitä tehdä henkilökohtaisten tietojen suojaamiseksi
rec-section-subhead-no-pw = Vaikka salasanoja ei paljastunutkaan tässä vuodossa, voit tehdä asioita suojataksesi henkilökohtaisia tietojasi aiempaa paremmin.

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Mozilla-tili
open-in-new-tab-alt = Avaa linkki uuteen välilehteen

## Search Engine Optimization

meta-desc-2 = Selvitä { -brand-fx-monitor }illa, oletko joutunut osalliseksi tietovuotoon. Autamme sinua ymmärtämään, mitä tehdä seuraavaksi, ja seuraamme jatkuvasti uusia tietovuotoja.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Kirjaudu sisään
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

mobile-menu-label = Päävalikko
main-nav-button-collapse-label = Supista valikko
main-nav-button-collapse-tooltip = Supista valikko
main-nav-button-expand-label = Laajenna valikko
main-nav-button-expand-tooltip = Laajenna valikko
main-nav-label = Navigointi
main-nav-link-home-label = Etusivu
main-nav-link-dashboard-label = Kojelauta
main-nav-link-settings-label = Asetukset
main-nav-link-faq-label = UKK
main-nav-link-faq-tooltip = Usein kysytyt kysymykset

## User menu

user-menu-trigger-label = Avaa käyttäjävalikko
user-menu-trigger-tooltip = Profiili
user-menu-manage-fxa-label = Hallitse { -brand-mozilla-account }äsi
user-menu-settings-label = Asetukset
user-menu-settings-tooltip = Määritä { -brand-mozilla-monitor }
user-menu-help-label = Ohjeet ja tuki
user-menu-help-tooltip = Ohjeita { -brand-mozilla-monitor }in käyttöön
user-menu-signout-label = Kirjaudu ulos
user-menu-signout-tooltip = Kirjaudu ulos { -brand-mozilla-monitor }ista

## Footer

mozilla = { -brand-mozilla }
terms-of-service = Käyttöehdot
privacy-notice = Tietosuojakäytäntö
github = { -brand-github }
footer-nav-recent-breaches = Viimeisimmät tietovuodot
footer-external-link-faq-label = UKK:t
footer-external-link-faq-tooltip = Usein kysytyt kysymykset

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Sivua ei löydy
error-page-error-404-copy = Valitettavasti etsimääsi sivua ei enää ole.
error-page-error-404-cta-button = Takaisin

## Breach overview page

all-breaches-headline-3 = Tietovuotojen tietokanta
all-breaches-lead = Valvomme kaikkia tunnettuja tietovuotoja selvittääksemme, ovatko henkilökohtaiset tietosi vaarantuneet. Tässä on täydellinen luettelo kaikista tietovuodoista, jotka on raportoitu vuoden 2007 jälkeen.
search-breaches = Etsi vuotoja
# the kind of user data exposed to hackers in data breach.
exposed-data = Paljastuneet tiedot:

## Public breach detail page

find-out-if-2 = Ota selvää, jouduitko osalliseksi tässä tietovuodossa
find-out-if-description = Autamme sinua nopeasti selvittämään, paljastuiko sähköpostiosoitteesi tässä tietovuodossa, ja autamme ymmärtämään, mitä tehdä seuraavaksi.
breach-detail-cta-signup = Tarkista vuotojen varalta
loading-accessibility = Ladataan
