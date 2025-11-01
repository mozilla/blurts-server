# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-short-name = Monitor
-brand-name =
    { $sklon ->
        [rodilnik] Firefoxa
        [dajalnik] Firefoxu
        [orodnik] Firefoxom
       *[imenovalnik] Firefox
    }
-brand-HIBP = Have I Been Pwned
-brand-lockwise = Firefox Lockwise
-brand-firefox =
    { $sklon ->
        [rodilnik] Firefoxa
        [dajalnik] Firefoxu
        [tozilnik] Firefox
        [mestnik] Firefoxu
        [orodnik] Firefoxom
       *[imenovalnik] Firefox
    }
-brand-monitor = Monitor
-brand-fx-monitor = Mozilla Monitor
-brand-mozilla =
    { $sklon ->
        [rodilnik] Mozille
        [dajalnik] Mozilli
        [tozilnik] Mozillo
        [mestnik] Mozilli
        [orodnik] Mozillo
       *[imenovalnik] Mozilla
    }
-brand-premium = Premium
-brand-monitor-premium = Monitor Premium
-brand-mozilla-foundation = Mozilla Foundation
-brand-github =
    { $sklon ->
        [rodilnik] GitHuba
        [dajalnik] GitHubu
        [tozilnik] GitHub
        [mestnik] GitHubu
        [orodnik] GitHubom
       *[imenovalnik] GitHub
    }
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay
-brand-mozilla-monitor =
    { $sklon ->
        [rodilnik] Mozilla Monitorja
        [dajalnik] Mozilla Monitorju
        [tozilnik] Mozilla Monitor
        [mestnik] Mozilla Monitorju
        [orodnik] Mozilla Monitorjem
       *[imenovalnik] Mozilla Monitor
    }
-brand-monitor-plus =
    { $sklon ->
        [rodilnik] Monitorja Plus
        [dajalnik] Monitorju Plus
        [tozilnik] Monitor Plus
        [mestnik] Monitorju Plus
        [orodnik] Monitorjem Plus
       *[imenovalnik] Monitor Plus
    }

##

error-not-subscribed = Ta e-poštni naslov ni naročen na { -product-name }.
error-hibp-throttled = Preveč povezav na { -brand-HIBP }.
error-hibp-connect = Napaka pri povezovanju na { -brand-HIBP }.
user-add-invalid-email = Neveljavna e-pošta
user-add-too-many-emails = Spremljate največje dovoljeno število e-poštnih naslovov.
user-add-duplicate-email = Ta e-poštni naslov je že bil dodan v { -product-name }.
user-add-verification-email-just-sent = Drugega potrditvenega sporočila ni mogoče poslati tako hitro. Poskusite znova pozneje.
user-add-unknown-error = Pri dodajanju drugega e-poštnega naslova je prišlo do napake. Poskusite znova pozneje.
user-delete-unknown-error = Pri odstranjevanju e-poštnega naslova je prišlo do napake. Poskusite znova pozneje.
user-verify-token-error = Zahtevan je potrditveni žeton.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Ogroženi podatki:
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Podatke o krajah podatkov omogoča { $hibp-link }
show-all = Prikaži vse
sign-out = Odjava
# Link title
preferences = Nastavitve
# Link title
home = Domov
# Link title
security-tips = Varnostni nasveti
# Link title
more-about-this-breach = Več o tej kraji podatkov
monitor-several-emails = Spremljajte več e-poštnih naslovov
website-breach = Kraja podatkov spletne strani
sensitive-breach = Kraja podatkov občutljivih spletnih strani
data-aggregator-breach = Kraja podatkov zbiralnika podatkov
what-data = Kateri podatki so bili ogroženi:
sensitive-sites = Kako { -product-name } obravnava občutljiva spletna mesta?
sensitive-sites-copy =
    { -product-name } razkriva račune, povezane s temi 
    vrstami kraj, samo po potrditvi e-poštnega naslova. To pomeni, da samo vi 
    vidite, ali so bili vaši podatki del te kraje podatkov (razen, če ima kdo drug 
    dostop do vašega e-poštnega računa).
delayed-reporting-headline = Zakaj je trajalo toliko časa, da je bila kraja podatkov prijavljena?
delayed-reporting-copy =
    Včasih traja mesece ali leta, da pride do izpostavitve prijavnih podatkov 
    v primeru kraje podatkov. Kraje podatkov se dodajo v našo bazo 
    takoj ko so odkrite in preverjene.
fxm-warns-you =
    { -product-name } vas opozori, če je bil vaš e-poštni naslov izpostavljen
    v spletni kraji podatkov. Preverite, ali so bili vaši podatki izpostavljeni, 
    spoznajte kako bolje zaščititi svoje spletne račune in prejmite opozorilo,
    če se vaš e-poštni naslov pojavi v novi kraji.
what-is-data-agg = Kaj je zbiralnik podatkov?
what-is-data-agg-blurb =
    Zbiralniki podatkov ali posredniki podatkov, zbirajo podatke iz javno 
    dostopnih virov in kupujejo od drugih podjetij. Zbrane podatke prodajajo podjetjem 
    za namene oglaševanja. Za žrtve teh kraj podatkov je malo verjetno, da bi doživele finančno 
    goljufijo, vendar lahko hekerji te podatke uporabijo za lažno predstavljanje ali ustvarjanje njihovega profila.
avoid-personal-info = Izogibajte se uporabi osebnih podatkov v geslih
send-verification = Pošlji potrditveno povezavo
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = Povzetek kraj podatkov

##

# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] geslo je bilo izpostavljeno v vseh krajah
        [two] gesli sta bili izpostavljeni v vseh krajah
        [few] gesla so bila izpostavljena v vseh krajah
       *[other] gesel je bilo izpostavljenih v vseh krajah
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] znana kraja podatkov je izpostavila vaše podatke
        [two] znani kraji podatkov sta izpostavili vaše podatke
        [few] znane kraje podatkov so izpostavile vaše podatke
       *[other] znanih kraj podatkov je izpostavilo vaše podatke
    }
what-is-a-website-breach = Kaj je kraja podatkov spletne strani?
website-breach-blurb = Do kraje podatkov spletne strani pride, ko spletni napadalci ukradejo, kopirajo ali razkrijejo osebne podatke spletnih računov. Običajno je rezultat tega, da hekerji odkrijejo šibko točko varnosti spletne strani. Kraje se lahko zgodijo tudi, če se podatki o računu na spletu pojavijo po naključju.
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Pregled
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Dne { $breachDate } je prišlo do kraje podatkov { $breachTitle }. Ko je bila kraja odkrita in preverjena, smo jo dne { $addedDate } dodali v našo bazo podatkov.
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Meni
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Potrdite povezavo poslano na { $userEmail }, da e-poštni naslov dodate v { -product-name }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Kraja dodana:
# Section headline
rec-section-headline = Kaj storiti za to krajo podatkov
rec-section-subhead = Priporočamo vam naslednje ukrepe, da ohranite varnost svojih osebnih podatkov in zaščitite svojo digitalno identiteto.
# Section headline
rec-section-headline-no-pw = Kaj storiti, da zaščitite svoje osebne podatke
rec-section-subhead-no-pw = Čeprav gesla v tej kraji podatkov niso bila izpostavljena, lahko še vedno ukrepate, da bolje zaščitite svoje osebne podatke.

##

# A status indicator that appears in the top right corner of new breach cards
new-breach = Novo

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account =
    { $sklon ->
        [rodilnik] Računa Mozilla
        [dajalnik] Računu Mozilla
        [tozilnik] Račun Mozilla
        [mestnik] Računu Mozilla
        [orodnik] Računom Mozilla
       *[imenovalnik] Račun Mozilla
    }
open-in-new-tab-alt = Odpri povezavo v novem zavihku

## Search Engine Optimization

meta-desc-2 = Ugotovite, ali ste bili vpleteni v krajo podatkov s { -brand-fx-monitor }jem. Pomagali vam bomo razumeti, kaj lahko storite, in nenehno spremljali morebitne nove kraje.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Prijavite se
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

mobile-menu-label = Glavni meni
main-nav-button-collapse-label = Strni meni
main-nav-button-collapse-tooltip = Strni meni
main-nav-button-expand-label = Razširi meni
main-nav-button-expand-tooltip = Razširi meni
main-nav-label = Krmarjenje
main-nav-link-home-label = Domov
main-nav-link-dashboard-label = Nadzorna plošča
main-nav-link-settings-label = Nastavitve
main-nav-link-faq-label = Pogosta vprašanja
main-nav-link-faq-tooltip = Pogosto zastavljena vprašanja

## User menu

user-menu-trigger-label = Odpri uporabniški meni
user-menu-trigger-tooltip = Profil
user-menu-manage-fxa-label = Upravljajte svoj { -brand-mozilla-account }
user-menu-settings-label = Nastavitve
user-menu-settings-tooltip = Nastavi { -brand-mozilla-monitor }
user-menu-help-label = Pomoč in podpora
user-menu-help-tooltip = Pomoč pri uporabi { -brand-mozilla-monitor(sklon: "rodilnik") }
user-menu-signout-label = Odjava
user-menu-signout-tooltip = Odjava iz { -brand-mozilla-monitor(sklon: "rodilnik") }

## Footer

mozilla = { -brand-mozilla }
terms-of-service = Pogoji uporabe
privacy-notice = Obvestilo o zasebnosti
github = { -brand-github }
footer-nav-recent-breaches = Nedavne kraje podatkov
footer-external-link-faq-label = Pogosta vprašanja
footer-external-link-faq-tooltip = Pogosto zastavljena vprašanja

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Strani ni bilo mogoče najti
error-page-error-404-copy = Stran, ki jo iščete, žal ne obstaja več.
error-page-error-404-cta-button = Nazaj
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } Prišlo je do napake

## Breach overview page

all-breaches-headline-3 = Podatkovna zbirka o krajah podatkov
all-breaches-lead = Spremljamo vse znane kraje podatkov, da ugotovimo, ali so bili vaši osebni podatki ogroženi. Tukaj je celoten seznam vseh kraj, prijavljenih od leta 2007 naprej.
search-breaches = Iskanje kraj podatkov
# the kind of user data exposed to hackers in data breach.
exposed-data = Izpostavljeni podatki:

## Public breach detail page

find-out-if-2 = Ugotovite, ali ste bili vpleteni v to krajo
find-out-if-description = Pomagali vam bomo hitro ugotoviti, ali je bil vaš e-poštni naslov izpostavljen v tej kraji, in razumeti, kaj morate storiti.
breach-detail-cta-signup = Preverite kraje podatkov

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: Novo ime, nova podoba in novi načini za <b>povrnitev zasebnosti</b>.
banner-monitor-rebrand-dismiss-button-label = V redu
banner-monitor-rebrand-dismiss-button-tooltip = Skrij
loading-accessibility = Nalaganje
