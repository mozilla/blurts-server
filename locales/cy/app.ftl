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
-brand-fxa = Cyfrif Firefox
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-firefox = Firefox
-brand-monitor = Monitor
-brand-fx-monitor = Mozilla Monitor
-brand-mozilla = Mozilla
-brand-premium = Premiwm
-brand-monitor-premium = Monitro Premiwm
-brand-mozilla-foundation = Mozilla Foundation
-brand-github = GitHub
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay
-brand-mozilla-monitor = Mozilla Monitor
-brand-monitor-plus = Monitor Plus

##

error-not-subscribed = Nid yw'r cyfeiriad e-bost hwn wedi'i danysgrifio i { -product-name }.
error-hibp-throttled = Gormod o gysylltiadau i { -brand-HIBP }.
error-hibp-connect = Gwall wrth gysylltu i { -brand-HIBP }.
user-add-invalid-email = E-bost Annilys
user-add-too-many-emails = Rydych yn monitro'r nifer mwyaf o gyfeiriadau e-byst.
user-add-duplicate-email = Mae'r e-bost hwn eisoes wedi'i ychwanegu at { -product-name }.
user-add-verification-email-just-sent = Nid oes modd anfon yr e-bost dilysu arall hwn mor fuan. Ceisiwch eto yn nes ymlaen.
user-add-unknown-error = Aeth rhywbeth o'i le wrth ychwanegu cyfeiriad e-bost arall. Ceisiwch eto yn nes ymlaen.
user-delete-unknown-error = Aeth rhywbeth o'i le wrth ddileu cyfeiriad e-bost. Ceisiwch eto yn nes ymlaen.
user-verify-token-error = Mae angen tocyn dilysu.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Data wedi ei gyfaddawdu:
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Mae data tor-data wedi ei ddarparu gan { $hibp-link }
show-all = Dangos y cyfan
sign-out = Allgofnodi
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Rheoli { -brand-fxa }
# Link title
preferences = Dewisiadau
# Link title
home = Cartref
# Link title
security-tips = Awgrymiadau Diogelwch
# Link title
more-about-this-breach = Rhagor am y tor-data hwn
monitor-several-emails = Monitro sawl cyfrif e-bost
website-breach = Tor-data Gwefan
sensitive-breach = Tor-data Gwefan Sensitif
data-aggregator-breach = Tor-data Casglwr Data
what-data = Pa ddata a gyfaddawdwyd:
sensitive-sites = Sut mae { -product-name } yn trin gwefannau sensitif?
sensitive-sites-copy = Dim ond ar ôl gwirio cyfeiriad e-bost y mae { -product-name } yn datgelu cyfrifon sy'n gysylltiedig â'r mathau yma o dor-data. Mae hyn yn golygu mai chi yw'r unig berson a all weld a oedd eich manylion yn y tor-data hwn (oni bai bod gan rywun arall fynediad arall i'ch cyfrif e-bost.)
delayed-reporting-headline = Pam y cymerodd gymaint o amser i adrodd ar y tor-data hwn?
delayed-reporting-copy =
    Weithiau gall gymryd rhai misoedd neu flynyddoedd i fanylion gafodd eu datgelu mewn tor-data i ymddangos ar y we dywyll. Caiff tori-data eu hychwanegu at ein cronfa ddata 
    cyn gynted ag y byddant yn cael eu darganfod a'u dilysu.
fxm-warns-you =
    Mae { -product-name } yn eich rhybuddio os yw eich cyfeiriad e-bost wedi'i ddatgelu
    mewn tor-data ar-lein. Edrychwch a yw eich manylion wedi cael eu datgelu, dysgwch sut
    i ddiogelu eich cyfrifon ar-lein yn well, a chael gwybod os yw eich cyfeiriad e-bost
    yn ymddangos mewn tor-data newydd.
what-is-data-agg = Beth yw gasglwr data?
what-is-data-agg-blurb = Mae casglwyr data, neu froceriaid data, yn casglu gwybodaeth o gofnodion cyhoeddus ac y ei brynu gan gwmnïau eraill. Maen nhw'n crynhoi'r data hwn i'w werthu i gwmnïau at ddibenion marchnata. Mae dioddefwyr yr achosion hyn o tor-data yn llai tebygol o brofi twyll ariannol, ond gall hacwyr ddefnyddio'r data hwn i'w dynwared neu'u proffilio.
avoid-personal-info = Peidiwch â defnyddio gwybodaeth bersonol mewn cyfrineiriau
send-verification = Anfon Dolen Dilysu
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = Crynodeb o'r Tor-data

##

# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [zero] Cyfrineiriau wedi'u hamlygu
        [one] Cyfrinair wedi'i amlygu ym mhob tor-data
        [two] Gyfrinair wedi'u hamlygu ym mhob tor-data
        [few] Cyfrinair wedi'u hamlygu ym mhob tor-data
        [many] Chyfrinair wedi'u hamlygu ym mhob tor-data
       *[other] Cyfrinair wedi'u hamlygu ym mhob tor-data
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [zero] Tor-data hysbys wedi datgelu eich manylion
        [one] Tor-data hysbys wedi datgelu eich manylion
        [two] Tor-data hysbys wedi datgelu eich manylion
        [few] Tor-data hysbys wedi datgelu eich manylion
        [many] Tor-data hysbys wedi datgelu eich manylion
       *[other] Tor-data hysbys wedi datgelu eich manylion
    }
what-is-a-website-breach = Beth yw tor-data gwefan?
website-breach-blurb = Mae tor-data gwefan yn digwydd pan fydd troseddwyr seibr yn dwyn, copïo neu ddatgelu manylion personol o gyfrifon ar-lein. Mae fel arfer yn ganlyniad i hacwyr yn dod o hyd i fan gwan ym maes diogelwch y wefan. Gall achosion o dor-data ddigwydd hefyd pan fydd manylion cyfrifon yn cael eu datgelu'n ddamweiniol.
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Trosolwg
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Ar { $breachDate }, profodd { $breachTitle } dor-data. Unwaith y cafodd y tor-data ei ddarganfod a'i ddilysu, cafodd ei ychwanegu at ein cronfa ddata ar { $addedDate }.
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Dewislen
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Gwiriwch y ddolen a anfonwyd at { $userEmail } i'w hychwanegu at { -product-name }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Ychwanegwyd y tor-data:
# Section headline
rec-section-headline = Beth i'w wneud am y tor-data hwn
rec-section-subhead = Rydym yn argymell eich bod yn cymryd y camau hyn i gadw'ch manylion personol yn ddiogel ac amddiffyn eich hunaniaeth ddigidol.
# Section headline
rec-section-headline-no-pw = Beth i'w wneud i ddiogelu eich manylion personol
rec-section-subhead-no-pw = Er nad oedd cyfrineiriau wedi'u hamlygu yn y tor-data hwn, mae yna gamau y gallwch eu cymryd o hyd i ddiogelu eich manylion personol yn well.

##

# A status indicator that appears in the top right corner of new breach cards
new-breach = Newydd

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Cyfrif Mozilla
open-in-new-tab-alt = Agorwch y ddolen mewn tab newydd

## Search Engine Optimization

meta-desc-2 = Darganfyddwch os ydych wedi bod yn rhan o dor-data gyda { -brand-fx-monitor }. Byddwn yn eich helpu i wybod beth i'w wneud nesaf ac yn monitro am unrhyw dor-data newydd ar ôl hynny.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Mewngofnodi
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

mobile-menu-label = Prif ddewislen
main-nav-button-collapse-label = Cau'r ddewislen
main-nav-button-collapse-tooltip = Cau'r ddewislen
main-nav-button-expand-label = Ehangu'r ddewislen
main-nav-button-expand-tooltip = Ehangu'r ddewislen
main-nav-label = Llywio
main-nav-link-home-label = Cartref
main-nav-link-dashboard-label = Bwrdd Gwaith
main-nav-link-settings-label = Gosodiadau
main-nav-link-faq-label = Cwestiynau Cyffredin
main-nav-link-faq-tooltip = Cwestiynau cyffredin

## User menu

user-menu-trigger-label = Agor dewislen defnyddiwr
user-menu-trigger-tooltip = Proffil
user-menu-manage-fxa-label = Rheoli eich cyfrif { -brand-mozilla-account }
user-menu-settings-label = Gosodiadau
user-menu-settings-tooltip = Ffurfweddu { -brand-mozilla-monitor }
user-menu-help-label = Cymorth a chefnogaeth
user-menu-help-tooltip = Cael cymorth wrth ddefnyddio { -brand-mozilla-monitor }
user-menu-signout-label = Allgofnodi
user-menu-signout-tooltip = Allgofnodi o { -brand-mozilla-monitor }

## Footer

mozilla = { -brand-mozilla }
terms-of-service = Amodau Gwasanaeth
privacy-notice = Hysbysiad Preifatrwydd
github = { -brand-github }
footer-nav-recent-breaches = Tor-data Diweddar
footer-external-link-faq-label = Cwestiynau Cyffredin
footer-external-link-faq-tooltip = Cwestiynau cyffredin

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Tudalen heb ei chanfod
error-page-error-404-copy = Ymddiheuriadau, nid yw'r dudalen rydych yn chwilio amdani yn bodoli bellach.
error-page-error-404-cta-button = Nôl
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } Aeth rhywbeth o'i le

## Breach overview page

all-breaches-headline-3 = Cronfa Ddata Tor-data
all-breaches-lead = Rydym yn monitro'r holl achosion hysbys o dor-data i ganfod a gafodd eich manylion personol eu peryglu. Dyma restr lawn o’r holl dor-data sydd wedi’u hadrodd ers 2007.
search-breaches = Chwilio am Dor-data
# the kind of user data exposed to hackers in data breach.
exposed-data = Data datgeledig:

## Public breach detail page

find-out-if-2 = Darganfyddwch a oeddech yn gysylltiedig â'r tor-data hwn
find-out-if-description = Byddwn yn eich helpu i weld yn gyflym a oedd eich cyfeiriad e-bost wedi'i ddatgelu drwy'r tor-data hwn, a gwybod beth i'w wneud nesaf.
breach-detail-cta-signup = Gwiriwch am dor-data

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: Enw, golwg newydd a rhagor o ffyrdd i <b>adennill eich preifatrwydd</b>.
banner-monitor-rebrand-dismiss-button-label = Iawn
banner-monitor-rebrand-dismiss-button-tooltip = Cau
loading-accessibility = Yn llwytho
