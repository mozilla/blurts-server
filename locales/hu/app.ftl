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

error-not-subscribed = Ez az e-mail-cím nincs feliratkozva a { -product-name }ra.
user-add-invalid-email = Érvénytelen e-mail-cím
user-add-too-many-emails = A lehető legnagyobb számú e-mail-címet figyeli.
user-add-duplicate-email = Ez az e-mail-cím már hozzáadásra került a { -product-name }hoz.
user-add-verification-email-just-sent = Nem küldhető ilyen gyorsan újabb megerősítő e-mail. Próbálja újra később.
user-add-unknown-error = Hiba történt egy másik e-mail-cím hozzáadása során. Próbálja újra később.
user-delete-unknown-error = Hiba történt egy e-mail-cím eltávolításakor. Próbálja újra később.
user-verify-token-error = Az ellenőrzési token lejárt.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Veszélyeztetett adatok:
# Link title
more-about-this-breach = További tudnivalók erről az adatvédelmi incidensről
sensitive-sites = Hogyan kezeli a { -product-name } az érzékeny webhelyeket?
sensitive-sites-copy =
    A { -product-name } csak akkor fedi fel az ezekkel az adatvédelmi incidensekkel
    kapcsolatos fiókokat, ha az e-mail-cím megerősítésre került. Ez azt jelenti, hogy
    csak Ön láthatja, hogy szerepelt-e ebben az adatvédelmi incidensben (hacsak valaki
    más nem fér hozzá az e-mail-fiókjához).
what-data = Milyen adatok kerültek veszélybe:
delayed-reporting-headline = Miért tartott ilyen sokáig az adatvédelmi incidens jelentése?
delayed-reporting-copy =
    Néha hónapokra vagy évekre is szükség lehet, amíg az adatvédelmi incidensekben
    kikerült adatok megjelennek a sötét weben. Az adatvédelmi incidensek akkor kerülnek
    az adatbázisunkba, ha felfedezték és megerősítették őket.

##

what-is-a-website-breach = Mi az a webhelyen történt adatvédelmi incidens?
website-breach-blurb = Weboldalon történő adatvédelmi incidens akkor történik, ha számítógépes bűnözők ellopják, lemásolják vagy nyilvánosságra hozzák az online fiókok személyes adatait. Ez általában annak a következménye, hogy a hackerek gyenge pontot találnak a weboldal biztonságában. Adatvédelmi incidensek akkor is előfordulhatnak, ha a fiókadatok véletlenül szivárognak ki.
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Áttekintés
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = A(z) { $breachTitle } adatvédelmi incidens áldozata lett ekkor: { $breachDate }. Amint az adatvédelmi incidens felfedezésre és megerősítésre került, hozzáadásra került az adatbázisunkhoz, ekkor: { $addedDate }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Adatvédelmi incidens hozzáadva:
# Section headline
rec-section-headline = Mi a teendő ezzel az adatvédelmi incidenssel?
rec-section-subhead = Javasoljuk, hogy tegye meg ezeket a lépéseket a személyes adatai biztonságának és a digitális személyazonosságának védelme érdekében.
# Section headline
rec-section-headline-no-pw = Mit tegyen a személyes adatainak védelme érdekében?
rec-section-subhead-no-pw = Bár a jelszavak nem kerültek ki ebben az adatvédelmi incidensben, még mindig tehet többet a személyes adatai védelme érdekében.

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Mozilla-fiók
open-in-new-tab-alt = Hivatkozás megnyitása új lapon

## Search Engine Optimization

meta-desc-2 = Tudja meg a { -brand-fx-monitor } segítségével, hogy érintett volt-e adatvédelmi incidensben. Segítünk megérteni, hogy mit tegyen, és folyamatosan figyeljük az új adatvédelmi incidenseket.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Bejelentkezés
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

mobile-menu-label = Főmenü
main-nav-button-collapse-label = Menü összecsukása
main-nav-button-collapse-tooltip = Menü összecsukása
main-nav-button-expand-label = Menü kinyitása
main-nav-button-expand-tooltip = Menü kinyitása
main-nav-label = Navigáció
main-nav-link-home-label = Kezdőlap
main-nav-link-dashboard-label = Vezérlőpult
main-nav-link-settings-label = Beállítások
main-nav-link-faq-label = GYIK
main-nav-link-faq-tooltip = Gyakran ismételt kérdések

## User menu

user-menu-trigger-label = Felhasználói menü megnyitása
user-menu-trigger-tooltip = Profil
user-menu-manage-fxa-label = A { -brand-mozilla-account } kezelése
user-menu-settings-label = Beállítások
user-menu-settings-tooltip = A { -brand-mozilla-monitor } beállítása
user-menu-help-label = Súgó és támogatás
user-menu-help-tooltip = Kérjen segítséget a { -brand-mozilla-monitor } használatához
user-menu-signout-label = Kijelentkezés
user-menu-signout-tooltip = Kijelentkezés a { -brand-mozilla-monitor }ból

## Footer

mozilla = { -brand-mozilla }
terms-of-service = Szolgáltatás feltételei
privacy-notice = Adatvédelmi nyilatkozat
github = { -brand-github }
footer-nav-recent-breaches = Legutóbbi adatvédelmi incidensek
footer-external-link-faq-label = GYIK
footer-external-link-faq-tooltip = Gyakran ismételt kérdések

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Az oldal nem található
error-page-error-404-copy = Sajnáljuk, a keresett oldal már nem létezik.
error-page-error-404-cta-button = Ugrás vissza

## Breach overview page

all-breaches-headline-3 = Adatvédelmi incidensek adatbázisa
all-breaches-lead = Minden ismert adatvédelmi incidenst monitorozunk, hogy megtudjuk, hogy kikerültek-e személyes adatai. Itt van a 2007 óta jelentett adatvédelmi incidensek teljes listája.
search-breaches = Adatvédelmi incidensek keresése
# the kind of user data exposed to hackers in data breach.
exposed-data = Kikerült adatok:

## Public breach detail page

find-out-if-2 = Tudja meg, hogy érintett-e ebben az adatvédelmi incidensben
find-out-if-description = Segítünk gyorsan megnézni, hogy kikerült-e az e-mail-címe ebben az adatvédelmi incidensben, és hogy mi legyen a következő teendője.
breach-detail-cta-signup = Adatvédelmi incidensek keresése
loading-accessibility = Betöltés
