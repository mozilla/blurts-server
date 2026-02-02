# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name =
    { $case ->
        [gen] Mozilla Monitora
        [dat] Mozilla Monitoru
        [acc] Mozilla Monitor
        [loc] Mozilla Monitore
        [ins] Mozilla Monitorom
       *[nom] Mozilla Monitor
    }
-product-short-name =
    { $case ->
        [gen] Monitora
        [dat] Monitoru
        [acc] Monitor
        [loc] Monitore
        [ins] Monitorom
       *[nom] Monitor
    }
-brand-name =
    { $case ->
        [gen] Firefoxu
        [dat] Firefoxu
        [acc] Firefox
        [loc] Firefoxe
        [ins] Firefoxom
       *[nom] Firefox
    }
-brand-HIBP = Have I Been Pwned
-brand-lockwise = Firefox Lockwise
-brand-firefox =
    { $case ->
        [gen] Firefoxu
        [dat] Firefoxu
        [acc] Firefox
        [loc] Firefoxe
        [ins] Firefoxom
       *[nom] Firefox
    }
-brand-monitor =
    { $case ->
        [gen] Monitora
        [dat] Monitoru
        [acc] Monitor
        [loc] Monitore
        [ins] Monitorom
       *[nom] Monitor
    }
-brand-fx-monitor =
    { $case ->
        [gen] Mozilla Monitora
        [dat] Mozilla Monitoru
        [acc] Mozilla Monitor
        [loc] Mozilla Monitore
        [ins] Mozilla Monitorom
       *[nom] Mozilla Monitor
    }
-brand-mozilla =
    { $case ->
        [gen] Mozilly
        [dat] Mozille
        [acc] Mozillu
        [loc] Mozille
        [ins] Mozillou
       *[nom] Mozilla
    }
-brand-premium = Premium
-brand-monitor-premium = Monitor Premium
-brand-mozilla-foundation = Mozilla Foundation
-brand-github = GitHub
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay
-brand-mozilla-monitor =
    { $case ->
        [gen] Mozilla Monitora
        [dat] Mozilla Monitoru
        [acc] Mozilla Monitor
        [loc] Mozilla Monitore
        [ins] Mozilla Monitorom
       *[nom] Mozilla Monitor
    }
-brand-monitor-plus = Monitor Plus
-brand-solo-ai = Solo AI

##

error-not-subscribed = Táto e‑mailová adresa nie je prihlásená na odber upozornení z { -product-name(case: "gen") }.
user-add-invalid-email = Neplatná e‑mailová adresa
user-add-too-many-emails = Monitorujete maximálny počet e‑mailových adries.
user-add-duplicate-email = Táto e‑mailová adresa už bola do { -product-name(case: "gen") } pridaná.
user-add-verification-email-just-sent = Ďalší overovací e‑mail nie je možné odoslať takto rýchlo. Skúste to znovu neskôr.
user-add-unknown-error = Pri pridávaní ďalšej e‑mailovej adresy sa vyskytla chyba. Skúste to znova neskôr.
user-delete-unknown-error = Pri odstraňovaní e‑mailovej adresy sa vyskytla chyba. Skúste to znova neskôr.
user-verify-token-error = Vyžaduje sa overovací token.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Kompromitované údaje:
# Link title
more-about-this-breach = Ďalšie informácie o tomto úniku
sensitive-sites = Ako sa { -product-name } chová v prípade webov obsahujúcich citlivé údaje?
sensitive-sites-copy =
    { -product-name } zverejňuje tieto účty iba v prípade, že je e‑mailová adresa overená. 
    Znamená to, že vy ste jediná osoba, ktorá môže zistiť, či boli vaše údaje súčasťou tohto úniku 
    (ak teda nemá do vášho počítača prístup niekto iný).
what-data = Aké údaje boli kompromitované:
delayed-reporting-headline = Prečo nahlásenie tohto úniku trvalo tak dlho?
delayed-reporting-copy =
    Niekedy môže trvať mesiace či roky, než sa prihlasovacie údaje vyzradené v úniku 
    objavia na dark webe. Úniky sú pridávané do našej databázy hneď, akonáhle sú odhalené a potvrdené.

##

what-is-a-website-breach = Čo je únik údajov z webovej stránky?
website-breach-blurb = Únik údajov z webovej stránky sa odohrá, keď kybernetickí zločinci odcudzia, skopírujú alebo zverejnia osobné údaje z internetových účtov. Spravidla je to výsledkom činnosti hackerov, ktorí našli slabé miesto v zabezpečení webu. K úniku osobných údajov z účtov však môže dôjsť aj nedopatrením.
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Prehľad
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Dňa { $breachDate } došlo k úniku údajov { $breachTitle }. Ihneď po odhalení a potvrdení bol dňa { $addedDate } pridaný do našej databázy.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Dátum pridania:
# Section headline
rec-section-headline = Čo robiť s týmto únikom údajov
rec-section-subhead = Pre ochranu vašich osobných údajov a vašej digitálnej identity odporúčame nasledujúce kroky.
# Section headline
rec-section-headline-no-pw = Čo robiť pre ochranu vašich osobných údajov
rec-section-subhead-no-pw = Napriek tomu, že súčasťou úniku neboli heslá, odporúčame urobiť nasledujúce kroky pre lepšiu ochranu vašich osobných údajov.

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account =
    { $case ->
        [gen]
            { $capitalization ->
                [lower] účtu Mozilla
               *[upper] Účtu Mozilla
            }
        [dat]
            { $capitalization ->
                [lower] účtu Mozilla
               *[upper] Účtu Mozilla
            }
        [acc]
            { $capitalization ->
                [lower] účet Mozilla
               *[upper] Účet Mozilla
            }
        [loc]
            { $capitalization ->
                [lower] účte Mozilla
               *[upper] Účte Mozilla
            }
        [ins]
            { $capitalization ->
                [lower] účtom Mozilla
               *[upper] Účtom Mozilla
            }
       *[nom]
            { $capitalization ->
                [lower] účet Mozilla
               *[upper] Účet Mozilla
            }
    }
open-in-new-tab-alt = Otvoriť odkaz na novej karte

## Search Engine Optimization

meta-desc-2 = Zistite, či ste boli súčasťou úniku údajov pomocou služby { -brand-fx-monitor }. Pomôžeme vám pochopiť, čo máte robiť ďalej, a budeme neustále monitorovať akékoľvek nové úniky údajov.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Prihlásiť sa
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

mobile-menu-label = Hlavná ponuka
main-nav-button-collapse-label = Zbaliť ponuku
main-nav-button-collapse-tooltip = Zbaliť ponuku
main-nav-button-expand-label = Rozbaliť ponuku
main-nav-button-expand-tooltip = Rozbaliť ponuku
main-nav-label = Navigácia
main-nav-link-home-label = Domov
main-nav-link-dashboard-label = Nástenka
main-nav-link-settings-label = Nastavenia
main-nav-link-faq-label = Často kladené otázky
main-nav-link-faq-tooltip = Často kladené otázky

## User menu

user-menu-trigger-label = Otvoriť ponuku používateľa
user-menu-trigger-tooltip = Profil
user-menu-manage-fxa-label = Spravovať { -brand-mozilla-account(case: "acc", capitalization: "lower") }
user-menu-settings-label = Nastavenia
user-menu-settings-tooltip = Upraviť { -brand-mozilla-monitor(case: "acc", capitalization: "lower") }
user-menu-help-label = Pomoc a podpora
user-menu-help-tooltip = Získať pomoc pri používaní { -brand-mozilla-monitor(case: "gen") }
user-menu-signout-label = Odhlásiť sa
user-menu-signout-tooltip = Odhlásiť sa z { -brand-mozilla-monitor(case: "gen") }

## Footer

mozilla = { -brand-mozilla }
terms-of-service = Podmienky používania služby
privacy-notice = Vyhlásenie o ochrane osobných údajov
github = { -brand-github }
footer-nav-recent-breaches = Nedávne úniky údajov
footer-external-link-faq-label = Často kladené otázky
footer-external-link-faq-tooltip = Často kladené otázky

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Stránka sa nenašla
error-page-error-404-copy = Ľutujeme, stránka, ktorú hľadáte, už neexistuje.
error-page-error-404-cta-button = Prejsť naspäť

## Breach overview page

all-breaches-headline-3 = Databáza únikov údajov
all-breaches-lead = Monitorujeme všetky známe úniky údajov, aby sme zistili, či nedošlo k ohrozeniu vašich osobných údajov. Tu je úplný zoznam všetkých únikov, ktoré boli nahlásené od roku 2007.
search-breaches = Hľadať
# the kind of user data exposed to hackers in data breach.
exposed-data = Odhalené údaje:

## Public breach detail page

find-out-if-2 = Zistite, či ste boli súčasťou tohto úniku
find-out-if-description = Pomôžeme vám rýchlo zistiť, či bola pri tomto úniku odhalená vaša e‑mailová adresa, a takisto vám pomôžeme pochopiť, čo robiť ďalej.
breach-detail-cta-signup = Skontrolovať úniky
loading-accessibility = Načítava sa
