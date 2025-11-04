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

##

error-not-subscribed = Kjo adresë email s’është e pajtuar te { -product-name }.
error-hibp-throttled = Shumë lidhje me { -brand-HIBP }.
error-hibp-connect = Gabim në lidhjen me { -brand-HIBP }.
user-add-invalid-email = Email i Pavlefshëm
user-add-too-many-emails = Po mbikëqyret për ju numri maksimum i adresave email.
user-add-duplicate-email = Ky email është shtuar tashmë te { -product-name }.
user-add-verification-email-just-sent = Një email tjetër verifikimi s’mund të dërgohet kaq shpejt. Ju lutemi, riprovoni më vonë.
user-add-unknown-error = Diç shkoi ters me shtimin e një tjetre adrese email. Ju lutemi, riprovoni më vonë.
user-delete-unknown-error = Diç shkoi ters me heqjen e një adrese email. Ju lutemi, riprovoni më vonë.
user-verify-token-error = Token-i i verifikimit është i domosdoshëm.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Të dhëna të komprometuara
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Të dhëna shkeljesh furnizuar nga { $hibp-link }
show-all = Shfaqi krejt
sign-out = Dilni
# Link title
preferences = Parapëlqime
# Link title
home = Kreu
# Link title
security-tips = Ndihmëza Sigurie
# Link title
more-about-this-breach = Më tepër rreth këtij cenimi
monitor-several-emails = Mbikëqyrni disa email-e
website-breach = Cenim Sajti
sensitive-breach = Shkelje Sajti Me të Dhëna Rezervat
data-aggregator-breach = Shkelje të Dhënash Nga Grumbullues
what-data = Ç’të dhëna u komprometuan:
sensitive-sites = Si i trajton { -product-name } sajtet me të dhëna rezervat?
sensitive-sites-copy = { -product-name } vë në dukje llogaritë me këto lloje shkeljesh vetëm pasi të jetë verifikuar një adresë email. Kjo do thotë se jeni i vetmi person që mund të shohë nëse të dhënat tuaja qenë pjesë e kësaj shkeljeje (veç në pastë dikush tjetër hyrje te llogaria juaj email).
delayed-reporting-headline = Pse u desh kaq shumë kohë për njoftimin e këtij cenimi?
delayed-reporting-copy = Ndonjëherë mund të hajë muaj ose vite që kredenciale të ekspozuara në një shkelje të dhënash të shfaqen në web-in e errët. Shkeljet shtohen te baza jonë e të dhënave sapo të jenë zbuluar dhe verifikuar.
fxm-warns-you = { -product-name } ju sinjalizon nëse adresa juaj email qe ekspozuar në një shkelje internetore të dhënash. Shihni nëse janë ekspozuar të dhëna tuajat, mëson si të mbroni më mirë llogaritë tuaja internetore, dhe merrni sinjalizime, nëse adresa juaj email shfaqet në një shkelje të re.
what-is-data-agg = Ç’është një grumbullues të dhënash?
what-is-data-agg-blurb = Grumbulluesit e të dhënave, ose ndërmjetës tregtarë të dhënash, grumbullojnë të dhëna nga regjistra publikë dhe blejnë të tilla prej shoqërish të tjera. Këto të dhëna i përpilojnë për t’ua shitur shoqërie për synime marketingu. Pretë e këtyre shkeljeve ka më pak gjasa të përfshihen në mashtrime financiare, por hacker-at mund t’i përdorin këto të dhëna për t’u hequr ato apo për profilizim të tyre.
avoid-personal-info = Shmangni përdorimin e të dhënave personale në fjalëkalime
send-verification = Dërgo Lidhje Verifikimi
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = Përmbledhje Cenimi

##

# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] Fjalëkalim i ekspozuar nëpër krejt shkeljet
       *[other] Fjalëkalime të ekspozuar nëpër krejt shkeljet
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] Shkelje e ditur të dhënash ka ekspozuar të dhëna tuajat
       *[other] Shkelje të ditura të dhënash kanë ekspozuar të dhëna tuajat
    }
what-is-a-website-breach = Ç’është një shkelje sajti?
website-breach-blurb = Një shkelje të dhënash sajti ndodh kur keqbërës kibernetikë vjedhin, kopjojnë ose ekspozojnë të dhëna personale prej llogarish internetore. Zakonisht është rrjedhojë e gjetjes nga ana e hacker-ave të një pike të dobët në sigurinë e sajtit. Shkelje mund të ndodhin edhe kur të dhëna të një llogarie rrjedhin aksidentalisht.
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Përmbledhje
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Më { $breachDate } ndodhi { $breachTitle }. Pasi u zbulua dhe u verifikua shkelja, u shtua te baza jonë e të dhënave më { $addedDate }.
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Menu
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Verifikoni lidhjen e dërguar te { $userEmail } që të shtohet te { -product-name }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Shkelje e shtuar më:
# Section headline
rec-section-headline = Ç’të bëhet për këtë shkelje
rec-section-subhead = Këshillojmë të ndërmerrni këto hapa për t’i mbajtur të dhënat tuaja personale të sigurta dhe për të mbrojtur identitetin tuaj dixhital.
# Section headline
rec-section-headline-no-pw = Ç’të bëhet për të mbrojtur të dhënat tuaja personale
rec-section-subhead-no-pw = Edhe pse në këtë shkelje nuk u ekspozuan fjalëkalime, prapë ka hapa që është mirë të ndërmerren për të mbrojtur të dhënat tuaja personale.

##

# A status indicator that appears in the top right corner of new breach cards
new-breach = E re

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Llogari Mozilla
open-in-new-tab-alt = Hape lidhjen në skedë të re

## Search Engine Optimization

meta-desc-2 = Shihni nëse keni qenë pjesë e një cenimi të dhënash, me { -brand-fx-monitor }. Do t’ju ndihmojmë të kuptoni ç’të bëhet në vazhdim dhe të mbikëqyrni vazhdimisht për çfarëdo cenimesh.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Hyni
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

mobile-menu-label = Menuja kryesore
main-nav-button-collapse-label = Tkurre menunë
main-nav-button-collapse-tooltip = Tkurre menunë
main-nav-button-expand-label = Zgjeroje menunë
main-nav-button-expand-tooltip = Zgjeroje menunë
main-nav-label = Lëvizje
main-nav-link-home-label = Kreu
main-nav-link-dashboard-label = Pult
main-nav-link-settings-label = Rregullime
main-nav-link-faq-label = PBR
main-nav-link-faq-tooltip = Pyetje të bëra rëndom

## User menu

user-menu-trigger-label = Hap menu përdoruesi
user-menu-trigger-tooltip = Profil
user-menu-manage-fxa-label = Administroni { -brand-mozilla-account } tuaj
user-menu-settings-label = Rregullime
user-menu-settings-tooltip = Formësoni { -brand-mozilla-monitor }
user-menu-help-label = Ndihmë dhe asistencë
user-menu-help-tooltip = Merrni ndihmë rreth përdorimit të { -brand-mozilla-monitor }
user-menu-signout-label = Dilni
user-menu-signout-tooltip = Dilni nga { -brand-mozilla-monitor }

## Footer

mozilla = { -brand-mozilla }
terms-of-service = Kushtet e Shërbimit
privacy-notice = Shënim Mbi Privatësinë
github = { -brand-github }
footer-nav-recent-breaches = Cenime të Dhënash Së Fundi
footer-external-link-faq-label = PBR
footer-external-link-faq-tooltip = Pyetje të bëra rëndom

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } S’u gjet faqe
error-page-error-404-copy = Na ndjeni, faqja që po kërkonit, s’ekziston më.
error-page-error-404-cta-button = Kthehu mbrapsht
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } Diç shkoi ters

## Breach overview page

all-breaches-headline-3 = Bazë të Dhënash Cenimesh të Dhënash
all-breaches-lead = Mbikëqyrim krejt cenimet e ditura të të dhënave, për të parë nëse hollësitë tuaja personale qenë komprometuar. Ja një listë e plotë e krejt cenimeve që janë njoftuar që nga 2007-a.
search-breaches = Kërkoni Te Shkeljet
# the kind of user data exposed to hackers in data breach.
exposed-data = Të dhëna të ekspozuara:

## Public breach detail page

find-out-if-2 = Shihni nëse jeni përfshirë në këtë cenim
find-out-if-description = Do t’ju ndihmojmë të shihni shpejt e shpejt nëse adresa juaj email qe ekspozuar në këtë cenim dhe të kuptoni ç’të bëhet më pas.
breach-detail-cta-signup = Kontrolloni për cenime

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: Emër, pamje dhe më tepër rrugë të reja për <b> të pretenduar privatësinë tuaj</b>.
banner-monitor-rebrand-dismiss-button-label = OK
banner-monitor-rebrand-dismiss-button-tooltip = Hidhe tej
loading-accessibility = Po ngarkohet
