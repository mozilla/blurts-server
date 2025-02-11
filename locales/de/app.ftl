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
-brand-fxa = Firefox-Konto
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

error-not-subscribed = Diese E-Mail-Adresse hat { -product-name } nicht abonniert.
error-hibp-throttled = Zu viele Verbindungen mit { -brand-HIBP }.
error-hibp-connect = Fehler beim Verbinden mit { -brand-HIBP }.
user-add-invalid-email = Ungültige E-Mail-Adresse
user-add-too-many-emails = Du überwachst die maximale Anzahl von E-Mail-Adressen.
user-add-duplicate-email = Diese E-Mail-Adresse wurde schon zu { -product-name } hinzugefügt.
user-add-verification-email-just-sent = Eine weitere Verifizierungs-E-Mail kann nicht so schnell gesendet werden. Bitte versuchen Sie es später erneut.
user-add-unknown-error = Beim Hinzufügen einer weiteren E-Mail-Adresse ist etwas schiefgegangen. Bitte versuchen Sie es später erneut.
user-delete-unknown-error = Beim Entfernen einer E-Mail-Adresse ist etwas schiefgegangen. Bitte versuchen Sie es später erneut.
user-verify-token-error = Verifikations-Token wird benötigt.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Kompromittierte Daten:
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Informationen zum Datenleck stammen von { $hibp-link }
show-all = Alle anzeigen
sign-out = Ausloggen
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = { -brand-fxa } verwalten
# Link title
preferences = Einstellungen
# Link title
home = Startseite
# Link title
security-tips = Sicherheitstipps
# Link title
more-about-this-breach = Mehr zu diesem Datenleck
monitor-several-emails = Überprüfe mehrere E-Mail-Adressen
website-breach = Datenleck einer Website
sensitive-breach = Sensibles Datenleck einer Website
data-aggregator-breach = Leck eines Daten-Aggregators
what-data = Welche Daten wurden kompromittiert:
sensitive-sites = Wie geht { -product-name } mit sensiblen Websites um?
sensitive-sites-copy = { -product-name } zeigt die von dem Datenleck betroffenen Konten nur an, nachdem eine E-Mail-Adresse verifiziert wurde. Das bedeutet, dass auch nur du sehen kannst, ob deine Daten Teil eines Leaks wurden. (Es sei denn, jemand anderes hat Zugang zu deinem E-Mail-Konto.)
delayed-reporting-headline = Warum hat es so lange gedauert, bis dieses Leck gemeldet wurde?
delayed-reporting-copy = Es kann manchmal Monate oder Jahre dauern, bis offengelegte Daten aus einem Datenleck im Dark Web auftauchen. Lecks werden, sobald sie entdeckt und verifiziert wurden, zu unserer Datenbank hinzugefügt.
fxm-warns-you = { -product-name } warnt dich, wenn deine E-Mail-Adresse bei einem Datenleck offengelegt wurde. Finde heraus, ob Informationen von dir geleakt wurden, lerne, wie du deine Online-Konten besser schützen kannst und lass dich warnen, sobald deine E-Mail-Adresse in einem neuen Datenleck auftaucht.
what-is-data-agg = Was ist ein Daten-Aggregator?
what-is-data-agg-blurb = Daten-Aggregatoren oder auch Daten-Broker sammeln Informationen aus öffentlichen Unterlagen und kaufen sie von anderen Unternehmen. Sie erheben diese Daten, um sie zu Marketingzwecken an Unternehmen zu verkaufen. Opfer solcher Datenlecks sind zwar weniger anfällig für Finanzbetrug, aber Hacker könnten diese Daten verwenden, um sich als jemand anderes auszugeben oder Profile zu erstellen.
avoid-personal-info = Nutze keine persönlichen Infos in Passwörtern
send-verification = Link zum Bestätigen senden
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = Zusammenfassung der Datenlecks

##

# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] Passwort wurde in allen Datenlecks offengelegt
       *[other] Passwörter wurden in allen Datenlecks offengelegt
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] bekanntes Datenleck hat Ihre Daten preisgegeben
       *[other] bekannte Datenlecks haben Ihre Daten preisgegeben
    }
what-is-a-website-breach = Was ist ein Website-Datenleck?
website-breach-blurb = Ein Datenleak einer Website liegt vor, wenn Cyber-Kriminelle persönliche Daten aus Online-Konten stehlen, kopieren oder offenlegen. Das passiert meist dann, wenn Hacker eine Schwachstelle in der Sicherheit der Website finden. Es kann aber auch vorkommen, dass Kontoinformationen versehentlich geleakt werden.
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Übersicht
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Am { $breachDate } gab es bei { $breachTitle } ein Datenleck. Nachdem das Datenleck entdeckt und bestätigt wurde, wurde es am { $addedDate } unserer Datenbank hinzugefügt.
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Menü
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Bestätigen Sie den Link der an { $userEmail } gesendet wurde, um sie zu { -product-name } hinzuzufügen.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Datenleck hinzugefügt:
# Section headline
rec-section-headline = Was müssen Sie bei diesem Datenleck tun?
rec-section-subhead = Wir empfehlen Ihnen, diese Schritte zu unternehmen, um Ihre persönlichen Daten und Ihre digitale Identität zu schützen.
# Section headline
rec-section-headline-no-pw = Was tun, um Ihre persönlichen Daten zu schützen?
rec-section-subhead-no-pw = Obwohl bei diesem Datenleck keine Passwörter offengelegt wurden, können Sie dennoch Maßnahmen ergreifen, um Ihre persönlichen Daten besser zu schützen.

##

# A status indicator that appears in the top right corner of new breach cards
new-breach = Neu

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Mozilla-Konto
open-in-new-tab-alt = Link in einem neuem Tab öffnen

## Search Engine Optimization

meta-desc-2 = Überprüfen Sie mit { -brand-fx-monitor }, ob Sie von einem Datenleck betroffen sind. Wir helfen Ihnen, zu verstehen, was als Nächstes zu tun ist und überwachen fortlaufend, ob neue Datenlecks auftreten.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Einloggen
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

mobile-menu-label = Hauptmenü
main-nav-button-collapse-label = Menü einklappen
main-nav-button-collapse-tooltip = Menü einklappen
main-nav-button-expand-label = Menü ausklappen
main-nav-button-expand-tooltip = Menü ausklappen
main-nav-label = Navigation
main-nav-link-home-label = Startseite
main-nav-link-dashboard-label = Übersicht
main-nav-link-settings-label = Einstellungen
main-nav-link-faq-label = Häufig gestellte Fragen
main-nav-link-faq-tooltip = Häufig gestellte Fragen

## User menu

user-menu-trigger-label = Benutzermenü öffnen
user-menu-trigger-tooltip = Profil
user-menu-manage-fxa-label = Verwalten Sie Ihr { -brand-mozilla-account }
user-menu-settings-label = Einstellungen
user-menu-settings-tooltip = { -brand-mozilla-monitor } einstellen
user-menu-help-label = Hilfe und Unterstützung
user-menu-help-tooltip = Hilfe bei der Verwendung von { -brand-mozilla-monitor }
user-menu-signout-label = Abmelden
user-menu-signout-tooltip = Von { -brand-mozilla-monitor } abmelden

## Footer

mozilla = { -brand-mozilla }
terms-of-service = Nutzungsbedingungen
privacy-notice = Datenschutzhinweis
github = { -brand-github }
footer-nav-recent-breaches = Neueste Datenlecks
footer-external-link-faq-label = Häufig gestellte Fragen
footer-external-link-faq-tooltip = Häufig gestellte Fragen

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Seite nicht gefunden
error-page-error-404-copy = Es tut uns leid, die von Ihnen gesuchte Seite existiert nicht mehr.
error-page-error-404-cta-button = Zurück
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } Ein Fehler ist aufgetreten

## Breach overview page

all-breaches-headline-3 = Datenbank für Datenlecks
all-breaches-lead = Wir überwachen alle bekannten Datenlecks, um herauszufinden, ob Ihre persönlichen Daten kompromittiert wurden. Hier ist eine vollständige Liste aller Lecks, die seit 2007 gemeldet wurden.
search-breaches = Datenlecks suchen
# the kind of user data exposed to hackers in data breach.
exposed-data = Offengelegte Daten:

## Public breach detail page

find-out-if-2 = Erfahren Sie, ob Sie von diesem Datenleck betroffen waren
find-out-if-description = Wir helfen Ihnen, schnell zu erkennen, ob Ihre E-Mail-Adresse bei diesem Datenleck offengelegt wurde, und zu verstehen, was als Nächstes zu tun ist.
breach-detail-cta-signup = Auf Datenlecks überprüfen

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: Neuer Name, neues Aussehen und noch mehr Möglichkeiten, um <b>Ihre Privatsphäre zurückzugewinnen</b>.
banner-monitor-rebrand-dismiss-button-label = OK
banner-monitor-rebrand-dismiss-button-tooltip = Schließen
loading-accessibility = Wird geladen…
