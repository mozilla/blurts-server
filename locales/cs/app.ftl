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

##

error-not-subscribed = Tato e-mailová adresa není zaregistrována k příjmu upozornění od { -product-name(case: "gen") }.
error-hibp-throttled = Příliš mnoho spojení k { -brand-HIBP }.
error-hibp-connect = Chyba při připojování k { -brand-HIBP }.
user-add-invalid-email = Neplatná e-mailová adresa
user-add-too-many-emails = Již monitorujete maximální počet e-mailových adres.
user-add-duplicate-email = Tato e-mailová adresa již byla do { -product-name(case: "gen") } přidána.
user-add-verification-email-just-sent = Další ověřovací e-mail nelze odeslat tak rychle. Zkuste to prosím později.
user-add-unknown-error = Něco se pokazilo při přidávání další e-mailové adresy. Zkuste to prosím později.
user-delete-unknown-error = Při odstraňování e-mailové adresy se něco pokazilo. Zkuste to prosím znovu později.
user-verify-token-error = Je vyžadován ověřovací token.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Kompromitovaná data:
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Data o únicích poskytuje { $hibp-link }
show-all = Zobrazit vše
sign-out = Odhlášení
# Link title
preferences = Předvolby
# Link title
home = Domů
# Link title
security-tips = Bezpečnostní tipy
# Link title
more-about-this-breach = Další informace o tomto úniku
monitor-several-emails = Monitorujte několik e-mailových adres
website-breach = Únik z webových stránek
sensitive-breach = Únik citlivých údajů z webových stránek
data-aggregator-breach = Únik z agregátoru dat
what-data = Jaké údaje byly vyzrazeny:
sensitive-sites = Jak se { -product-name } chová v případě webů obsahující citlivé údaje?
sensitive-sites-copy = Účty, které jsou spojené s těmito typy úniků, { -product-name } prozradí až po ověření e-mailové adresy. To znamená, že vy jste jediná osoba, která může zjistit, jestli byly vaše údaje součástí tohoto úniku (pokud nemá do vašeho poštovního účtu přístup ještě někdo jiný).
delayed-reporting-headline = Proč nahlášení tohoto úniku trvalo tak dlouho?
delayed-reporting-copy = Občas to může trvat měsíce či roky, než se přihlašovací údaje vyzrazené v úniku dat objeví na temném Webu. Úniky jsou přidány do naší databáze, jakmile byly odhaleny a potvrzeny.
fxm-warns-you = { -product-name } vás upozorní, jestliže byla vaše e-mailová adresa vyzrazena v nějakém internetovém úniku dat. Ověřte si, jestli nebyly vaše osobní údaje vyzrazeny, zjistěte, jak lépe ochránit své internetové účty, a buďte upozorněni v případě, že se vaše e-mailová adresa objeví v novém úniku dat.
what-is-data-agg = Co je to agregátor dat?
what-is-data-agg-blurb =
    Agregátory dat či zprostředkovatelé údajů sbírají údaje z veřejných
    záznamů a rovněž je kupují od jiných společností. Tyto údaje shromažďují za účelem jejich prodeje různým společnostem, jimž slouží k marketingovým účelům. U obětí těchto úniků sice existuje menší pravděpodobnost, že na nich bude spáchán finanční podvod, ale hackeři by mohli tyto údaje použít k vydávání se za ně nebo k vytvoření jejich profilu.
avoid-personal-info = Nepoužívejte v heslech osobní údaje
send-verification = Zaslat ověřovací odkaz
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = Souhrnné informace

##

# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] vaše heslo bylo vyzrazeno souhrnně ve všech únicích
        [few] vaše hesla byla vyzrazena souhrnně ve všech únicích
       *[other] vašich hesel bylo vyzrazeno souhrnně ve všech únicích
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] známý únik dat vyzradil vaše údaje
        [few] známé úniky dat vyzradily vaše údaje
       *[other] známých úniků dat vyzradilo vaše údaje
    }
what-is-a-website-breach = Co je to únik dat z webových stránek?
website-breach-blurb = Únik dat z webových stránek se odehraje, když kyberzločinci odcizí, zkopírují nebo zveřejní osobní údaje z internetových účtů. Zpravidla je to výsledkem činnosti hackerů, kteří nalezli slabé místo v zabezpečení webu. K úniku osobních údajů z účtu však také může dojít nedopatřením.
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Přehled
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Dne { $breachDate } došlo u subjektu { $breachTitle } k úniku dat. Ihned po odhalení a potvrzení úniku byl dne { $addedDate } přidán do naší databáze.
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Nabídka
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Pro přidání adresy { $userEmail } do { -product-name(case: "gen") } klepněte na odkaz zaslaný na tuto adresu.

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

# A status indicator that appears in the top right corner of new breach cards
new-breach = Nový

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
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = Něco se pokazilo. Chyba: { $errorCode }

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

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: Nové jméno, vzhled a ještě více způsobů, jak <b>získat zpět své soukromí</b>.
banner-monitor-rebrand-dismiss-button-label = OK
banner-monitor-rebrand-dismiss-button-tooltip = Zavřít
loading-accessibility = Načítání
