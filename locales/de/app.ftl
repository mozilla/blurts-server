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

error-not-subscribed = Diese E-Mail-Adresse hat { -product-name } nicht abonniert.
user-add-invalid-email = Ungültige E-Mail-Adresse
user-add-too-many-emails = Du überwachst die maximale Anzahl von E-Mail-Adressen.
user-add-duplicate-email = Diese E-Mail-Adresse wurde schon zu { -product-name } hinzugefügt.
user-add-verification-email-just-sent = Eine weitere Verifizierungs-E-Mail kann nicht so schnell gesendet werden. Bitte versuchen Sie es später erneut.
user-add-unknown-error = Beim Hinzufügen einer weiteren E-Mail-Adresse ist etwas schiefgegangen. Bitte versuchen Sie es später erneut.
user-delete-unknown-error = Beim Entfernen einer E-Mail-Adresse ist etwas schiefgegangen. Bitte versuchen Sie es später erneut.
user-verify-token-error = Verifikations-Token wird benötigt.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Kompromittierte Daten:
# Link title
more-about-this-breach = Mehr zu diesem Datenleck
sensitive-sites = Wie behandelt { -product-name } vertrauliche Websites?
sensitive-sites-copy =
    { -product-name } zeigt nur Konten an, die von Datenlecks
    dieser Art betroffen waren, nachdem eine E-Mail-Adresse verifiziert wurde. Dies
    bedeutet, dass Sie die einzige Person sind, die sehen können, ob Ihre Daten von
    diesem Datenleck betroffen waren (es sei denn, jemand anderes hat Zugriff auf
    Ihr E-Mail-Konto).
what-data = Welche Daten wurden kompromittiert:
delayed-reporting-headline = Warum hat es so lange gedauert, bis dieses Leck gemeldet wurde?
delayed-reporting-copy = Es kann manchmal Monate oder Jahre dauern, bis offengelegte Daten aus einem Datenleck im Dark Web auftauchen. Lecks werden, sobald sie entdeckt und verifiziert wurden, zu unserer Datenbank hinzugefügt.

##

what-is-a-website-breach = Was ist ein Website-Datenleck?
website-breach-blurb = Ein Datenleak einer Website liegt vor, wenn Cyber-Kriminelle persönliche Daten aus Online-Konten stehlen, kopieren oder offenlegen. Das passiert meist dann, wenn Hacker eine Schwachstelle in der Sicherheit der Website finden. Es kann aber auch vorkommen, dass Kontoinformationen versehentlich geleakt werden.
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Übersicht
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Am { $breachDate } gab es bei { $breachTitle } ein Datenleck. Nachdem das Datenleck entdeckt und bestätigt wurde, wurde es am { $addedDate } unserer Datenbank hinzugefügt.

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
loading-accessibility = Wird geladen…
