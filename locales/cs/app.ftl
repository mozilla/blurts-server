# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name =
    { $case ->
        [gen] Mozilla Monitoru
        [dat] Mozilla Monitoru
        [acc] Mozilla Monitor
        [voc] Mozilla Monitore
        [loc] Mozilla Monitoru
        [ins] Mozilla Monitorem
       *[nom] Mozilla Monitor
    }
    .gender = masculine
-product-short-name =
    { $case ->
        [gen] Monitoru
        [dat] Monitoru
        [acc] Monitor
        [voc] Monitore
        [loc] Monitoru
        [ins] Monitorem
       *[nom] Monitor
    }
-brand-name =
    { $case ->
        [gen] Firefoxu
        [dat] Firefoxu
        [acc] Firefox
        [voc] Firefoxe
        [loc] Firefoxu
        [ins] Firefoxem
       *[nom] Firefox
    }
-brand-HIBP = Have I Been Pwned
-brand-lockwise =
    { $case ->
        [gen] Firefoxu Lockwise
        [dat] Firefoxu Lockwise
        [acc] Firefox Lockwise
        [voc] Firefoxe Lockwise
        [loc] Firefoxu Lockwise
        [ins] Firefoxem Lockwise
       *[nom] Firefox Lockwise
    }
    .gender = masculine
-brand-firefox =
    { $case ->
        [gen] Firefoxu
        [dat] Firefoxu
        [acc] Firefox
        [voc] Firefoxe
        [loc] Firefoxu
        [ins] Firefoxem
       *[nom] Firefox
    }
    .gender = masculine
-brand-monitor = Monitor
-brand-fx-monitor =
    { $case ->
        [gen] Mozilla Monitoru
        [dat] Mozilla Monitoru
        [acc] Mozilla Monitor
        [voc] Mozilla Monitore
        [loc] Mozilla Monitoru
        [ins] Mozilla Monitorem
       *[nom] Mozilla Monitor
    }
    .gender = masculine
-brand-mozilla =
    { $case ->
        [gen] Mozilly
        [dat] Mozille
        [acc] Mozillu
        [voc] Mozillo
        [loc] Mozille
        [ins] Mozillou
       *[nom] Mozilla
    }
    .gender = feminine
-brand-premium = Placené
-brand-monitor-premium = Monitor Premium
-brand-mozilla-foundation =
    { $case ->
        [gen] Mozilly Foundation
        [dat] Mozille Foundation
        [acc] Mozillu Foundation
        [voc] Mozillo Foundation
        [loc] Mozille Foundation
        [ins] Mozillou Foundation
       *[nom] Mozilla Foundation
    }
    .gender = feminine
-brand-github =
    { $case ->
        [gen] GitHubu
        [dat] GitHubu
        [acc] GitHub
        [voc] GitHube
        [loc] GitHubu
        [ins] GitHubem
       *[nom] GitHub
    }
    .gender = masculine
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay
-brand-mozilla-monitor = Mozilla Monitor
-brand-monitor-plus = Monitor Plus
-brand-solo-ai = Solo AI

##

error-not-subscribed = Tato e-mailová adresa není zaregistrována k příjmu upozornění od { -product-name(case: "gen") }.
user-add-invalid-email = Neplatná e-mailová adresa
user-add-too-many-emails = Již monitorujete maximální počet e-mailových adres.
user-add-duplicate-email = Tato e-mailová adresa již byla do { -product-name(case: "gen") } přidána.
user-add-verification-email-just-sent = Další ověřovací e-mail nelze odeslat tak rychle. Zkuste to prosím později.
user-add-unknown-error = Něco se pokazilo při přidávání další e-mailové adresy. Zkuste to prosím později.
user-delete-unknown-error = Při odstraňování e-mailové adresy se něco pokazilo. Zkuste to prosím znovu později.
user-verify-token-error = Je vyžadován ověřovací token.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Kompromitovaná data:
# Link title
more-about-this-breach = Další informace o tomto úniku
what-data = Jaké údaje byly vyzrazeny:
delayed-reporting-headline = Proč nahlášení tohoto úniku trvalo tak dlouho?
delayed-reporting-copy = Občas to může trvat měsíce či roky, než se přihlašovací údaje vyzrazené v úniku dat objeví na temném Webu. Úniky jsou přidány do naší databáze, jakmile byly odhaleny a potvrzeny.

##

# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Přehled
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Dne { $breachDate } došlo u subjektu { $breachTitle } k úniku dat. Ihned po odhalení a potvrzení úniku byl dne { $addedDate } přidán do naší databáze.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Datum přidání:
# Section headline
rec-section-headline = Co dělat s tímto únikem dat
rec-section-subhead = Za účelem zabezpečení vašich osobních údajů a ochrany vaší digitální identity doporučujeme podniknout následující opatření.
# Section headline
rec-section-headline-no-pw = Co dělat pro ochranu vašich osobních údajů
rec-section-subhead-no-pw = Přestože součástí úniku nebyla hesla, doporučujeme učinit následující kroky pro lepší ochranu vašich osobních údajů.

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
open-in-new-tab-alt = Otevřít odkaz v novém panelu

## Search Engine Optimization

meta-desc-2 = Zjistěte pomocí { -brand-fx-monitor }, zda jste nebyli součástí úniku dat. Pomůžeme vám porozumět tomu, co dělat dále, a budeme průběžně sledovat jakékoli nové úniky dat.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Přihlásit se
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

mobile-menu-label = Hlavní nabídka
main-nav-button-collapse-label = Sbalit nabídku
main-nav-button-collapse-tooltip = Sbalit nabídku
main-nav-button-expand-label = Rozbalit nabídku
main-nav-button-expand-tooltip = Rozbalit nabídku
main-nav-label = Navigace
main-nav-link-home-label = Domů
main-nav-link-dashboard-label = Nástěnka
main-nav-link-settings-label = Nastavení
main-nav-link-faq-label = FAQ
main-nav-link-faq-tooltip = Často kladené otázky

## User menu

user-menu-trigger-label = Otevřít uživatelskou nabídku
user-menu-trigger-tooltip = Profil
user-menu-manage-fxa-label = Spravovat { -brand-mozilla-account(case: "acc", capitalization: "lower") }
user-menu-settings-label = Nastavení
user-menu-settings-tooltip = Upravit { -brand-mozilla-monitor(case: "acc", capitalization: "lower") }
user-menu-help-label = Nápověda a podpora
user-menu-help-tooltip = Získat pomoc s používáním { -brand-mozilla-monitor(case: "gen") }
user-menu-signout-label = Odhlásit se
user-menu-signout-tooltip = Odhlásit se z { -brand-mozilla-monitor(case: "gen") }

## Footer

mozilla = { -brand-mozilla }
terms-of-service = Podmínky služby
privacy-notice = Zásady ochrany osobních údajů
github = { -brand-github }
footer-nav-recent-breaches = Nedávné úniky dat
footer-external-link-faq-label = FAQ
footer-external-link-faq-tooltip = Často kladené otázky

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Stránka nebyla nalezena
error-page-error-404-copy = Je nám líto, ale stránka, kterou hledáte, již neexistuje.
error-page-error-404-cta-button = Přejít zpět

## Breach overview page

all-breaches-headline-3 = Databáze úniků dat
all-breaches-lead = Monitorujeme všechny známé úniky údajů, abysme zjistili, zda nedošlo k ohrožení vašich osobních údajů. Zde je úplný seznam všech úniků, které byly nahlášeny od roku 2007.
search-breaches = Prohledat úniky dat
# the kind of user data exposed to hackers in data breach.
exposed-data = Odhalené údaje:

## Public breach detail page

find-out-if-2 = Zjistěte, zda jste byli součástí tohoto úniku
find-out-if-description = Pomůžeme vám rychle zjistit, zda byla při tomto úniku odhalena vaše e-mailová adresa a pomůžeme vám pochopit, co dělat dále.
breach-detail-cta-signup = Prohledat úniky
loading-accessibility = Načítání
