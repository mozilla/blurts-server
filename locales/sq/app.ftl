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

error-not-subscribed = Kjo adresë email s’është e pajtuar te { -product-name }.
user-add-invalid-email = Email i Pavlefshëm
user-add-too-many-emails = Po mbikëqyret për ju numri maksimum i adresave email.
user-add-duplicate-email = Ky email është shtuar tashmë te { -product-name }.
user-add-verification-email-just-sent = Një email tjetër verifikimi s’mund të dërgohet kaq shpejt. Ju lutemi, riprovoni më vonë.
user-add-unknown-error = Diç shkoi ters me shtimin e një tjetre adrese email. Ju lutemi, riprovoni më vonë.
user-delete-unknown-error = Diç shkoi ters me heqjen e një adrese email. Ju lutemi, riprovoni më vonë.
user-verify-token-error = Token-i i verifikimit është i domosdoshëm.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Të dhëna të komprometuara
# Link title
more-about-this-breach = Më tepër rreth këtij cenimi
what-data = Ç’të dhëna u komprometuan:
delayed-reporting-headline = Pse u desh kaq shumë kohë për njoftimin e këtij cenimi?
delayed-reporting-copy = Ndonjëherë mund të hajë muaj ose vite që kredenciale të ekspozuara në një shkelje të dhënash të shfaqen në web-in e errët. Shkeljet shtohen te baza jonë e të dhënave sapo të jenë zbuluar dhe verifikuar.

##

# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Përmbledhje
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Më { $breachDate } ndodhi { $breachTitle }. Pasi u zbulua dhe u verifikua shkelja, u shtua te baza jonë e të dhënave më { $addedDate }.

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
loading-accessibility = Po ngarkohet
