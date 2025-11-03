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
error-hibp-throttled = Liian monta yhteyttä tuotteeseen { -brand-HIBP }.
error-hibp-connect = Virhe muodostettaessa yhteyttä tuotteeseen { -brand-HIBP }.
user-add-invalid-email = Virheellinen sähköpostiosoite
user-add-too-many-emails = Seuraat enimmäismäärää sähköpostiosoitteita.
user-add-duplicate-email = Tämä sähköposti on jo lisätty tuotteeseen { -product-name }.
user-add-verification-email-just-sent = Toista vahvistussähköpostia ei voi lähettää näin nopeasti. Yritä uudelleen myöhemmin.
user-add-unknown-error = Jotain meni pieleen toisen sähköpostiosoitteen lisäämisessä. Yritä uudelleen myöhemmin.
user-delete-unknown-error = Jotain meni pieleen toisen sähköpostiosoitteen poistamisessa. Yritä uudelleen myöhemmin.
user-verify-token-error = Vahvistuspoletti vaaditaan.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Paljastuneet tiedot:
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Vuototiedot tarjoaa { $hibp-link }
show-all = Näytä kaikki
sign-out = Kirjaudu ulos
# Link title
preferences = Asetukset
# Link title
home = Etusivu
# Link title
security-tips = Turvallisuusvinkit
# Link title
more-about-this-breach = Lisätietoja tietovuodosta
monitor-several-emails = Tarkkaile useita sähköposteja
website-breach = Tietovuoto verkkosivustolta
sensitive-breach = Tietovuoto arkaluonteiselta verkkosivulta
data-aggregator-breach = Tietovuoto datakokoajalta
what-data = Paljastuneet tiedot:
sensitive-sites = Kuinka { -product-name } käsittelee arkaluonteisia sivustoja?
sensitive-sites-copy =
    { -product-name } paljastaa tämänkaltaisten vuotojen tilit vasta, 
    kun sähköpostiosoite ovat vahvistettu. Tämä tarkoittaa, että olet
    ainoa henkilö, joka voi nähdä, ovatko tietosi vuotaneet (ellei jollain
    muulla ole pääsyä sähköpostiisi).
delayed-reporting-headline = Miksi vuodosta ilmoittaminen kesti niin kauan?
delayed-reporting-copy =
    Vuotaneiden käyttäjätunnusten esiintulo voi kestää vuosia tai kuukausia
    tietovuodosta pimeässä verkossa. Vuodot lisätään tietokantaamme heti, kun ne ovat löydetty ja vahvistettu.
fxm-warns-you =
    { -product-name } varoittaa, jos sähköpostiosoitteesi löytyy tietovuodosta.
    Selvitä, onko tietojasi paljastunut, tutustu miten voit suojata verkkotilejäsi,
    ja saa ilmoituksia tietovuodoista, joista sähköpostiosoitteesi löytyy.
what-is-data-agg = Mikä on datakokoaja?
what-is-data-agg-blurb =
    Datakokoajat keräävät tietoja julkisista rekistereistä ja ostavat niitä 
    muilta yrityksiltä. Ne kokoavat nämä tiedot myydäkseen ne yrityksille
    markkinointitarkoituksiin. Näiden tietovuotojen uhreille tästä aiheutuu 
    harvemmin taloudellista vahinkoa, mutta hakkerit voivat käyttää tietoja 
    esiintyäkseen heinä tai profiloidakseen heitä.
avoid-personal-info = Vältä henkilökohtaisten tietojen käyttöä salasanoissa
send-verification = Lähetä vahvistuslinkki
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = Vuotojen yhteenveto

##

# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] salasana paljastunut kaikissa vuodoissa
       *[other] salasanaa paljastunut kaikissa vuodoissa
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] tunnettu tietovuoto paljasti tietojasi
       *[other] tunnettua tietovuotoa paljasti tietojasi
    }
what-is-a-website-breach = Mitä verkkosivuston vuodolla tarkoitetaan?
website-breach-blurb = Tietovuoto verkkosivustolta tapahtuu, kun kyberrikolliset varastavat, kopioivat tai paljastavat verkkotilien henkilökohtaisia tietoja. Tämä on usein seurausta hakkereiden löytämästä heikkoudesta verkkosivuston tietoturvassa. Tiedot voivat vuotaa myös vahingossa.
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Yhteenveto
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = { $breachTitle } vuodettiin { $breachDate }. Kun tietovuoto oli löydetty  ja vahvistettu, se lisättiin tietokantaamme { $addedDate }.
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Valikko
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Vahvista linkki, joka lähetettiin osoitteeseen { $userEmail }, lisätäksesi sen { -product-name }iin.

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

# A status indicator that appears in the top right corner of new breach cards
new-breach = Uusi

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
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } Jokin meni pieleen

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

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: Uusi nimi, ulkoasu ja lisää tapoja <b>palauttaa yksityisyys</b>.
banner-monitor-rebrand-dismiss-button-label = OK
banner-monitor-rebrand-dismiss-button-tooltip = Hylkää
loading-accessibility = Ladataan
