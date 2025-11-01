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

error-not-subscribed = Dit e-mailadres is niet geabonneerd op { -product-name }.
error-hibp-throttled = Te veel verbindingen met { -brand-HIBP }.
error-hibp-connect = Fout bij verbinden met { -brand-HIBP }.
user-add-invalid-email = Ongeldig e-mailadres
user-add-too-many-emails = U bewaakt het maximale aantal e-mailadressen.
user-add-duplicate-email = Dit e-mailadres is al aan { -product-name } toegevoegd.
user-add-verification-email-just-sent = Zo snel kan een ander verificatie-e-mailbericht niet worden verzonden. Probeer het later opnieuw.
user-add-unknown-error = Er is iets misgegaan bij het toevoegen van een ander e-mailadres. Probeer het later opnieuw.
user-delete-unknown-error = Er is iets misgegaan bij het verwijderen van een e-mailadres. Probeer het later opnieuw.
user-verify-token-error = Verificatietoken is vereist.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Getroffen gegevens:
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Gegevens van datalekken verstrekt door { $hibp-link }
show-all = Alles tonen
sign-out = Afmelden
# Link title
preferences = Voorkeuren
# Link title
home = Start
# Link title
security-tips = Beveiligingstips
# Link title
more-about-this-breach = Meer over dit datalek
monitor-several-emails = Bewaak verschillende e-mailadressen
website-breach = Websitedatalek
sensitive-breach = Gevoelig websitedatalek
data-aggregator-breach = Datalek gegevensverzameling
what-data = Welke gegevens zijn gecompromitteerd:
sensitive-sites = Hoe behandelt { -product-name } gevoelige websites?
sensitive-sites-copy =
    { -product-name } onthult alleen accounts die zijn getroffen door dit
    soort lekken na verificatie van een e-mailadres. Dit betekent dat u de
    enige persoon bent die kan zien of uw informatie in dit lek voor komt
    (tenzij iemand anders toegang tot uw e-mailaccount heeft).
delayed-reporting-headline = Waarom duurde het zo lang voordat dit datalek werd gemeld?
delayed-reporting-copy =
    Het kan soms maanden of jaren duren voordat de aanmeldgegevens die in een datalek
    voor komen op het dark web verschijnen. Datalekken worden, zodra ze zijn ontdekt en
    geverifieerd, aan onze database toegevoegd.
fxm-warns-you =
    { -product-name } waarschuwt u als uw e-mailadres voor komt
    in een online datalek. Kijk of uw informatie is gelekt, lees hoe
    u uw online accounts beter kunt beschermen en ontvang een waarschuwing
    als uw e-mailadres voor komt in een nieuw datalek.
what-is-data-agg = Wat is een gegevensverzamelaar?
what-is-data-agg-blurb =
    Data-verzamelaars of gegevenshandelaars verzamelen informatie uit openbare
    bronnen en kopen deze van andere bedrijven. Ze vatten deze gegevens samen om ze voor marketingdoeleinden
    aan bedrijven te verkopen. Slachtoffers van deze lekken hebben minder kans om door financiële fraude te
    worden getroffen, maar hackers zouden deze gegevens kunnen gebruiken om zich als hen voor te doen of hen te profileren.
avoid-personal-info = Vermijd het gebruik van persoonlijke gegevens in wachtwoorden
send-verification = Verificatiekoppeling versturen
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = Samenvatting datalek

##

# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] Wachtwoord gelekt in alle datalekken
       *[other] Wachtwoorden gelekt in alle datalekken
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] Een bekend datalek heeft uw gegevens gelekt
       *[other] Bekende datalekken hebben uw gegevens gelekt
    }
what-is-a-website-breach = Wat is een websitedatalek?
website-breach-blurb = Een datalek van een website treedt op, wanneer cybercriminelen persoonlijke gegevens uit online-accounts stelen, kopiëren of blootleggen. Dat gebeurt het meest, wanneer hackers een zwakke plek in de beveiliging van de website vinden. Het kan echter ook optreden als accountinformatie per ongeluk wordt gelekt.
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Overzicht
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Op { $breachDate } is een lek opgetreden op { $breachTitle }. Na ontdekking en verificatie van het lek, is het op { $addedDate } toegevoegd aan onze database.
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Menu
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Verifieer de koppeling die naar { $userEmail } is verstuurd om dit aan { -product-name } toe te voegen.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Datalek toegevoegd:
# Section headline
rec-section-headline = Wat kunt u doen voor dit datalek
rec-section-subhead = We raden u aan de volgende stappen te nemen om uw persoonlijke gegevens veilig te houden en uw digitale identiteit te beschermen.
# Section headline
rec-section-headline-no-pw = Wat kunt u doen om uw persoonlijke gegevens te beschermen
rec-section-subhead-no-pw = Hoewel bij dit datalek geen wachtwoorden zijn gelekt, zijn er nog steeds stappen die u kunt nemen om uw persoonlijke gegevens beter te beschermen.

##

# A status indicator that appears in the top right corner of new breach cards
new-breach = Nieuw

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Mozilla-account
open-in-new-tab-alt = Koppeling openen in een nieuw tabblad

## Search Engine Optimization

meta-desc-2 = Ontdek met { -brand-fx-monitor } of u deel uitmaakte van een datalek. We helpen u te begrijpen wat u vervolgens moet doen en controleren voortdurend op nieuwe datalekken.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Aanmelden
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

mobile-menu-label = Hoofdmenu
main-nav-button-collapse-label = Menu samenvouwen
main-nav-button-collapse-tooltip = Menu samenvouwen
main-nav-button-expand-label = Menu uitvouwen
main-nav-button-expand-tooltip = Menu uitvouwen
main-nav-label = Navigatie
main-nav-link-home-label = Startpagina
main-nav-link-dashboard-label = Dashboard
main-nav-link-settings-label = Instellingen
main-nav-link-faq-label = FAQ’s
main-nav-link-faq-tooltip = Veelgestelde vragen

## User menu

user-menu-trigger-label = Gebruikersmenu openen
user-menu-trigger-tooltip = Profiel
user-menu-manage-fxa-label = Uw { -brand-mozilla-account } beheren
user-menu-settings-label = Instellingen
user-menu-settings-tooltip = { -brand-mozilla-monitor } configureren
user-menu-help-label = Hulp en ondersteuning
user-menu-help-tooltip = Krijg hulp bij het gebruik van { -brand-mozilla-monitor }
user-menu-signout-label = Afmelden
user-menu-signout-tooltip = Afmelden bij { -brand-mozilla-monitor }

## Footer

mozilla = { -brand-mozilla }
terms-of-service = Servicevoorwaarden
privacy-notice = Privacyverklaring
github = { -brand-github }
footer-nav-recent-breaches = Recente datalekken
footer-external-link-faq-label = FAQ’s
footer-external-link-faq-tooltip = Veelgestelde vragen

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Pagina niet gevonden
error-page-error-404-copy = Het spijt ons, de pagina die u zoekt bestaat niet meer.
error-page-error-404-cta-button = Terug
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } Er is iets misgegaan

## Breach overview page

all-breaches-headline-3 = Database met datalekken
all-breaches-lead = We volgen alle bekende datalekken om erachter te komen of uw persoonlijke gegevens in gevaar zijn gebracht. Hier is een volledige lijst van alle datalekken die sinds 2007 zijn gemeld.
search-breaches = Datalekken zoeken
# the kind of user data exposed to hackers in data breach.
exposed-data = Gelekte gegevens:

## Public breach detail page

find-out-if-2 = Ontdek of u getroffen bent door dit lek
find-out-if-description = We helpen u snel te zien of uw e-mailadres is gelekt bij dit datalek en te begrijpen wat u vervolgens moet doen.
breach-detail-cta-signup = Controleren op datalekken

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: nieuwe naam, vormgeving en nog meer manieren om <b>uw privacy op te eisen</b>.
banner-monitor-rebrand-dismiss-button-label = OK
banner-monitor-rebrand-dismiss-button-tooltip = Sluiten
loading-accessibility = Laden
