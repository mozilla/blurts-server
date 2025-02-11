# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Strings for the main app


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-short-name = Monitor
-brand-name = Firefox
-brand-HIBP = Have I Been Pwned
-brand-fxa = Firefox Account
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-firefox = Firefox
-brand-monitor = Monitor
-brand-fx-monitor = Mozilla Monitor
-brand-mozilla = Mozilla
-brand-premium = Iporãvéva
-brand-monitor-premium = Mba’erechaha iporãvéva
-brand-mozilla-foundation = Fundación Mozilla
-brand-github = GitHub
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay
-brand-mozilla-monitor = Mozilla Monitor
-brand-monitor-plus = Monitor Plus

##

error-not-subscribed = Ko ñanduti veve kundaharape noñemboheraguapýi { -product-name } ndive.
error-hibp-throttled = Hetáma oikéva { -brand-HIBP } ndive.
error-hibp-connect = Ojavy eikévo { -brand-HIBP } ndive.
user-add-invalid-email = Ñanduti veve oiko’ỹva
user-add-too-many-emails = Ehechahína hetavéva ñanduti veve ikatuháicha.
user-add-duplicate-email = Ko ñanduti veve ojuajúma { -product-name } rehe.
user-add-verification-email-just-sent = Ndereguerahaukakuaái ambue ñanduti veve rechajeyha ipya’éva. Eha’ãjey ag̃ave.
user-add-unknown-error = Oĩ osẽvaíva embojuajúvo ambue ñanduti veve kundaharape. Ikatu eha’ãjey ag̃ave.
user-delete-unknown-error = Oĩ osẽvaíva embojuajúvo ambue ñanduti veve kundaharape. Ikatu eha’ãjey ag̃ave.
user-verify-token-error = Oñekotevẽ token jehechajeyrã.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Mba’ekuaarã ivaikuaáva:
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Mba’ekuaarã ivaikuaáva ome’ẽ { $hibp-link }
show-all = Ehechaukapa
sign-out = Emboty tembiapo
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Eñangareko { -brand-fxa }
# Link title
preferences = Jerohoryvéva
# Link title
home = Ñepyrũ
# Link title
security-tips = Ñe’ẽporã tekorosãrã
# Link title
more-about-this-breach = Eikuaave ñembyai rehegua
monitor-several-emails = Ema’ẽke heta ñanduti vevére
website-breach = Ñanduti renda ñembyai
sensitive-breach = Ñanduti renda ñembyai vai
data-aggregator-breach = Mba’ekuaarã mbyatyha ñembyai
what-data = Mba’ete mba’ekuaarã ivaikuaa:
sensitive-sites = ¿Mba’e ojapo { -product-name } umi tenda ikangývare?
sensitive-sites-copy =
    { -product-name } ohechauka umi mba’ete ojokupytýva ko’ã
    ñembyai rehegua ojehechajey vove ñanduti veve kundaharape. Kóva he’ise nde ha’eha
    neañomi ehechataha ne marandúpa oñembyaikuaápara’e (peteĩva noiméiramo
    oikekuaa ne mba’ete ñanduti veve reheguápe).
delayed-reporting-headline = Mba’ére eha’ãrõiterei ñembyai ñemomarandu
delayed-reporting-copy = Ikatu oraha heta jasy térã ary umi credencial ojehechakuaáva rehegua mba’ekuaarã ñembyaíva osẽkuaáva ñanduti ypytũme. Umi ñembyai ojuajúta ñane mba’ekuaarã rendápe pya’ete ojejuhu térã ojehechajey rire.
fxm-warns-you = { -product-name } ne ñatõi ne mba’ete ñandutigua oĩpara’e mba’ekuaarã ñemboguápe. Ehechajey ne marandúpa oñembyaikuaára’e, eikuaa mba’éichapa ikatu emo’ã porãvéta ne mba’ete ñandutípe ha og̃uahẽta ndéve ne ñanduti veve kundaharapépe ikatúpa oñembyai.
what-is-data-agg = ¿Mba’e mba’ekuaarã mbojuapyhára?
what-is-data-agg-blurb =
    Umi mba’ekuaarã mbyatyha omono’õ marandu opavave mba’évagui 
    ha avei ojogua ambue mba’apohaguasúgui. Ombojuaju marandu ovende hag̃ua ambue 
    mba’apohaguasúpe jekuaaukarãve. Umi ohupytýva ko’ã ñembyai ndorekói 
    araka’eve viru ñemonda, hákatu umi hekovaíva ñadutípe ikatu oiporu pe marandu omyendague hag̃ua chupe.
avoid-personal-info = Ani eiporu marandu jehegua ñe’ẽñemíme
send-verification = Emondo juajuha jehechajeyrã
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = Ñembyai ñemomichĩ

##

# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] Ñe’ẽñemi ojekuaareíva opaite ñembyai rupive
       *[other] Ñe’ẽñemikuéra ojekuaareíva opaite ñembyai rupive
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] Mba’ekuaarã ñembyai ojekuaáva omomarãkuaa ne marandu
       *[other] Mba’ekuaarãkuéra ñembyai ojekuaáva omomarãkuaa ne marandu
    }
what-is-a-website-breach = ¿Mba’e ñembyai ñanduti rendápe?
website-breach-blurb = Peteĩ ñanduti ñembogua oiko umi hekovaíva ñadutípe omonda, ombokuatia térã ohechaukáramo maranduete ñandutigua. Kóva oiko hekovaíva ñadutípe ojuhúramo nahekorosãiha heta kuatiarogue, ikatu avei oñembogua marandu mba’etégui eheka’ỹre.
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Jehechapa
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Ko { $breachDate }, { $breachTitle } oñembyai. Ojejuhu rire ha ojehechajey ko ñembyai, oñembojuajúma ore mba’ekuaarã rendápe ko { $addedDate }.
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Poravorã
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Ehechajey juajuha emondóva { $userEmail }-pe embojuaju hag̃ua { -product-name } rehe.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Mboguapy mbojuajupyre:
# Section headline
rec-section-headline = ¿Mba’e ejapóta ko ñembyaípe?
rec-section-subhead = Ro’e ndéve eguata hag̃ua ko tapére ha emohekorosã ne maranduete ha péicha emo’ã nde reratee ñandutípe.
# Section headline
rec-section-headline-no-pw = Mba’e ejapóta emo’ã hag̃ua ne maranduete
rec-section-subhead-no-pw = Umi ñe’ẽñemi ndojehechakuaáiramo jeje ko ñembyaípe, oĩ gueteri heta mba’e ikatúva rejapo emo’ãve hag̃ua ne maranduete.

##

# A status indicator that appears in the top right corner of new breach cards
new-breach = Pyahu

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Mozilla mba’ete
open-in-new-tab-alt = Embojuruja juajuha tendayke pyahúpe

## Search Engine Optimization

meta-desc-2 = Ehecha { -brand-fx-monitor } ndive eguerekópa mba’ekuaarã ñembogua. Roipytyvõta eikuaa hag̃ua mba’épa ejapóta ha roma’ẽag̃uíta oimeraẽva ñembogua pyahúre.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Eñepyrũ tembiapo
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

mobile-menu-label = Poravorã tuichavéva
main-nav-button-collapse-label = Poravorã pa’ãmbyre
main-nav-button-collapse-tooltip = Poravorã pa’ãmbyre
main-nav-button-expand-label = Emyasãi poravorã
main-nav-button-expand-tooltip = Emyasãi poravorã
main-nav-label = Ñeikundaha
main-nav-link-home-label = Óga
main-nav-link-dashboard-label = Mba’erupa
main-nav-link-settings-label = Ñemboheko
main-nav-link-faq-label = FAQs
main-nav-link-faq-tooltip = Porandu py’ỹiguáva

## User menu

user-menu-trigger-label = Embojuruja poruhára jeporavoha
user-menu-trigger-tooltip = Mba’ete
user-menu-manage-fxa-label = Eñangareko { -brand-mozilla-account } rehe
user-menu-settings-label = Ñemboheko
user-menu-settings-tooltip = Emboheko { -brand-mozilla-monitor }
user-menu-help-label = Ñepytvõ ha jeykeko
user-menu-help-tooltip = Eñepytyvõuka eiporu hag̃ua { -brand-mozilla-monitor }
user-menu-signout-label = Emboty tembiapo
user-menu-signout-tooltip = Emboty tembiapo { -brand-mozilla-monitor }-pe

## Footer

mozilla = { -brand-mozilla }
terms-of-service = Mba’epytyvõrã ñemboguata
privacy-notice = Marandu’i ñemiguáva
github = { -brand-github }
footer-nav-recent-breaches = Mba’ekuaarã ñembogua pyahu
footer-external-link-faq-label = FAQs
footer-external-link-faq-tooltip = Porandu py’ỹiguáva

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Kuatiarogue ojejuhu’ỹva
error-page-error-404-copy = Rombyasy, pe kuatiarogue rehekáva ndaiporivéima.
error-page-error-404-cta-button = Guevijey
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } Oĩ osẽvaíva

## Breach overview page

all-breaches-headline-3 = Mba’ekuaarã rupa ñembogua rehegua
all-breaches-lead = Rohechapaite umi mba’ekuaarã ñembogua roikuaa hag̃ua ne maranduetépa oñembyaikuaára’e. Ko’ápe oĩ peteĩ tysýi opaite ñembogua oñemomaranduva’ekue rehegua ary 2007 guive.
search-breaches = Ñembyai jeheka
# the kind of user data exposed to hackers in data breach.
exposed-data = Mba’ekuaarã imarãkuaáva:

## Public breach detail page

find-out-if-2 = Ehechaporãke eimépara’e ko ñemboguápe
find-out-if-description = Rohechaukáta pya’e ndéve ne ñanduti renda kundaharape oñembiaikuaaha eikuaa hag̃ua mba’épa ejapóta tenondeve.
breach-detail-cta-signup = Ehechajey oĩpa ñembogua

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: Héra pyahu, ha’ãnga ha avei mba’éichapa <b>erujeýta nde rekoñemi</b>.
banner-monitor-rebrand-dismiss-button-label = MONEĨ
banner-monitor-rebrand-dismiss-button-tooltip = Mboyke
loading-accessibility = Henyhẽhína
