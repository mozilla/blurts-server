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
-brand-fxa = Firefox-account
-brand-pocket = Pocket
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

error-not-subscribed = Dit e-mailadres is net abonnearre op { -product-name }.
error-hibp-throttled = Te folle ferbiningen mei { -brand-HIBP }.
error-hibp-connect = Flater by ferbinen mei { -brand-HIBP }.
user-add-invalid-email = Unjildich e-mailadres
user-add-too-many-emails = Jo bewekje it maksimale oantal e-mailadressen.
user-add-duplicate-email = Dit e-mailadres is al oan { -product-name } tafoege.
user-add-verification-email-just-sent = Sa gau kin in oar ferifikaasje-e-mailberjocht net ferstjoerd wurde. Probearje it letter opnij.
user-add-unknown-error = Der is wat misgien by it tafoegjen fan in oar e-mailadres. Probearje it letter opnij.
user-delete-unknown-error = Der is wat misgien by it fuortsmiten fan in e-mailadres. Probearje it letter opnij.
user-verify-token-error = Ferifikaasjetoken is fereaske.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Troffen gegevens:
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Gegevens fan datalekken ferstrekt troch { $hibp-link }
show-all = Alles toane
sign-out = Ofmelde
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = { -brand-fxa } beheare
# Link title
preferences = Foarkarren
# Link title
home = Startside
# Link title
security-tips = Befeiligingstips
# Link title
more-about-this-breach = Mear oer dit datalek
monitor-several-emails = Beweitsje ferskate e-mailadressen
website-breach = Websitedatalek
sensitive-breach = Gefoelich websitedatalek
data-aggregator-breach = Datalek gegevenssamling
what-data = Hokker gegevens binne kompromittearre:
sensitive-sites = Hoe behannelet { -product-name } gefoelige websites?
sensitive-sites-copy =
    { -product-name } ûntbleatet allinnich accounts dy’t troffen binne troch dit
    soarte datalekken nei ferifikaasje fan in e-mailadres. Dit betsjut dat jo de
    iennige persoan binne dy’t sjen kin oft jo ynformaasje yn dit datalek foar komt
    (útsein in oar tagong ta jo e-mailaccount hat).
delayed-reporting-headline = Wêrom duorre it sa lang eardat dit datalek meld waard?
delayed-reporting-copy =
    It kin somtiden moannen of jierren duorje eardat de oanmeldgegevens dy’t yn in datalek
    foar komme op it dark web ferskine. Datalekken wurde, sa gau as se ûntdekt binne en
    ferifiearre, oan ús database tafoege.
fxm-warns-you =
    { -product-name } warskôget jo as jo e-mailadres foar komt
    yn in online datalek. Sjoch oft jo ynformaasje lekt is, lês hoe’t
    jo jo online accounts better beskermje kinne en ûntfang in warskôging
    as jo e-mailadres foar komt yn in nij datalek.
what-is-data-agg = Wat is in gegevenssamler?
what-is-data-agg-blurb =
    Data-samlers of gegevenshannelers sammelje ynformaasje út iepenbiere
    boarnen en keapje dizze fan oare bedriuwen. Se fetsje dizze gegevens tegearre om se foar marketingdoeleinen
    oan bedriuwen te ferkeapjen. Slachtoffers fan dizze lekken hawwe minder kâns om troch finansjele fraude troffen te
    wurden, mar hackers soene dizze gegevens brûke kinne om harren as har foar te dwaan of harren te profilearjen.
avoid-personal-info = Mij it gebrûk fan persoanlike gegevens yn wachtwurden
send-verification = Ferifikaasjekeppeling ferstjoere
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = Gearfetting datalek

##

# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] Wachtwurd lekt yn alle datalekken
       *[other] Wachtwurden lekt yn alle datalekken
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] In bekend datalek hat jo gegevens lekt
       *[other] Bekende datalekken hawwe jo gegevens lekt
    }
what-is-a-website-breach = Wat is in websitedatalek?
website-breach-blurb = In datalek fan in website bart, wannear cyberkriminelen persoanlike gegevens út online-accounts stelle, kopiearje of bleatlizze. Dat bart it meast, wannear hackers in swak plak yn de befeiliging fan de website fine. It kin lykwols ek barre as accountynformaasje by fersin lekt wurdt.
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Oersjoch
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Op { $breachDate } is in lek bard op { $breachTitle }. Nei ûntdutsing en ferifikaasje fan it lek, is it op { $addedDate } tafoege oan ús database.
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Menu
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Ferifiearje de keppeling dy’t nei { $userEmail } ferstjoerd is om dy oan { -product-name } ta te foegjen.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Datalek tafoege:
# Section headline
rec-section-headline = Wat kinne jo dwaan foar dit datalek
rec-section-subhead = Wy riede jo oan de folgjende stappen te nimmen om jo persoanlike gegevens feilich te hâlden en jo digitale identiteit te beskermjen.
# Section headline
rec-section-headline-no-pw = Wat kinne jo dwaan om jo persoanlike gegevens te beskermjen
rec-section-subhead-no-pw = Hoewol by dit datalek gjin wachtwurden lekt binne, binne der noch hieltyd stappen dy’t jo nimme kinne om jo personlike gegevens better te beskermjen.

##

# A status indicator that appears in the top right corner of new breach cards
new-breach = Nij

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Mozilla-account
open-in-new-tab-alt = Keppeling iepenje yn in nij ljepblêd

## Search Engine Optimization

meta-desc-2 = Untdek mei { -brand-fx-monitor } of jo ûnderdiel binne fan in datalek. Wy helpe jo te begripen wat jo dêrnei dwaan moatte en kontrolearje trochgeand op nije datalekken.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Oanmelde
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

mobile-menu-label = Haadmenu
main-nav-button-collapse-label = Menu ynklappe
main-nav-button-collapse-tooltip = Menu ynklappe
main-nav-button-expand-label = Menu útklappe
main-nav-button-expand-tooltip = Menu útklappe
main-nav-label = Navigaasje
main-nav-link-home-label = Startside
main-nav-link-dashboard-label = Dashboerd
main-nav-link-settings-label = Ynstellingen
main-nav-link-faq-label = FAQ’s
main-nav-link-faq-tooltip = Faak stelde fragen

## User menu

user-menu-trigger-label = Brûkersmenu iepenje
user-menu-trigger-tooltip = Profyl
user-menu-manage-fxa-label = Jo { -brand-mozilla-account } beheare
user-menu-settings-label = Ynstellingen
user-menu-settings-tooltip = { -brand-mozilla-monitor } konfigurearje
user-menu-help-label = Help en stipe
user-menu-help-tooltip = Krij help mei it brûken fan { -brand-mozilla-monitor }
user-menu-signout-label = Ofmelde
user-menu-signout-tooltip = Ofmelde by { -brand-mozilla-monitor }

## Footer

mozilla = { -brand-mozilla }
terms-of-service = Tsjinstbetingsten
privacy-notice = Privacyferklearring
github = { -brand-github }
footer-nav-recent-breaches = Resinte datalekken
footer-external-link-faq-label = FAQ’s
footer-external-link-faq-tooltip = Faak stelde fragen

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Side net fûn
error-page-error-404-copy = It spyt ús, de side dêr’t jo nei sykje bestiet net mear.
error-page-error-404-cta-button = Tebek
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } Der is wat misgien

## Breach overview page

all-breaches-headline-3 = Database mei datalekken
all-breaches-lead = Wy folgje alle bekende datalekken om derefter te kommen oft jo persoanlike gegevens yn gefaar brocht binne. Hjir is in folsleine list fan alle datalekken dy’t sûnt 2007 meld binne.
search-breaches = Datalekken sykje
# the kind of user data exposed to hackers in data breach.
exposed-data = Lekte gegevens:

## Public breach detail page

find-out-if-2 = Untdek oft jo troffen binne troch dit lek
find-out-if-description = Wy helpe jo fluch te sjen oft jo e-mailadres lekt is by dit datalek en te begripen wat jo dêrnei dwaan moatte.
breach-detail-cta-signup = Kontrolearje op datalekken

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: Nije namme, uterlik en noch mear manieren om <b>jo privacy werom te winnen</b>.
banner-monitor-rebrand-dismiss-button-label = OK
banner-monitor-rebrand-dismiss-button-tooltip = Slute
loading-accessibility = Lade
