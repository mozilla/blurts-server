# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-meta-title = { -brand-fx-monitor } - Einstellungen
settings-page-title = Einstellungen für { -product-short-name }

## Breach alert preferences

settings-alert-preferences-title = Einstellungen für Datenlecks
settings-alert-preferences-option-one = Benachrichtigungen über Datenlecks an die betroffene E-Mail-Adresse schicken
settings-alert-preferences-option-two = Alle Warnungen zu Datenlecks an die primäre E-Mail-Adresse senden

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-label-primary = { $email } (primär)
settings-email-list-title = Überwachte E-Mail-Adressen
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Ihr Konto überwacht bis zu { $limit } E-Mail-Adresse.
       *[other] Ihr Konto überwacht bis zu { $limit } E-Mail-Adressen.
    }
settings-email-verification-callout = E-Mail-Bestätigung erforderlich
settings-resend-email-verification-link = Bestätigungs-Mail erneut versenden
settings-add-email-button = E-Mail-Adresse hinzufügen
# Deprecated
settings-delete-email-button = E-Mail-Adresse löschen
settings-remove-email-button-label = Entfernen
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = { $emailAddress } nicht mehr überwachen
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Ist von { $breachCount } bekannten Datenleck betroffen.
       *[other] Ist von { $breachCount } bekannten Datenlecks betroffen.
    }

## Cancel Premium subscription

settings-cancel-premium-subscription-title = { -brand-premium }-Abonnement kündigen
settings-cancel-premium-subscription-info = Ihr Abonnement wird nach Ende des aktuellen Abrechnungszeitraums auf ein kostenloses Konto zurückgesetzt. Die Ergebnisse Ihrer Datenschutz-Scans werden dauerhaft gelöscht und es wird nur eine E-Mail-Adresse auf Datenlecks überwacht.

## Deactivate account

settings-deactivate-account-title = Konto deaktivieren
settings-deactivate-account-info-2 = Sie können { -product-short-name } deaktivieren, indem Sie Ihr { -brand-mozilla-account } löschen.
settings-fxa-link-label-3 = Zu den { -brand-mozilla-account }-Einstellungen gehen

## Delete Monitor account

settings-delete-monitor-free-account-title = { -brand-monitor }-Konto löschen
settings-delete-monitor-free-account-description = Dies löscht Ihr { -brand-monitor }-Konto dauerhaft und alle Benachrichtigungen werden deaktiviert.
settings-delete-monitor-free-account-cta-label = Konto löschen
settings-delete-monitor-free-account-dialog-title = Ihr { -brand-monitor }-Konto wird dauerhaft gelöscht
settings-delete-monitor-free-account-dialog-lead = Alle Ihre { -brand-monitor }-Kontodaten werden gelöscht und es findet keine Überwachung auf neue Datenlecks mehr statt. Ihr { -brand-mozilla }-Konto wird dadurch nicht gelöscht.
settings-delete-monitor-free-account-dialog-cta-label = Konto löschen
settings-delete-monitor-free-account-dialog-cancel-button-label = Ich habe es mir anders überlegt – zurück zur vorherigen Seite
settings-delete-monitor-plus-account-title = { -brand-monitor }-Konto löschen
settings-delete-monitor-plus-account-description = Dies löscht Ihr { -brand-monitor }-Konto dauerhaft und Ihr bezahltes { -brand-monitor-plus }-Abonnement endet sofort.
settings-delete-monitor-plus-account-cta-label = Konto löschen
settings-delete-monitor-plus-account-dialog-title = Ihr { -brand-monitor }-Konto wird dauerhaft gelöscht
settings-delete-monitor-plus-account-dialog-lead-p1 = Alle Ihre { -brand-monitor }-Kontodaten werden gelöscht und es findet keine Überwachung auf neue Datenlecks oder ein Aufdecken von Datenhändlern mehr statt. Ihr { -brand-mozilla }-Konto wird dadurch nicht gelöscht.
settings-delete-monitor-plus-account-dialog-lead-p2 = Ihr kostenpflichtiges Abonnement endet heute und die verbleibende Dauer Ihres Abonnements wird nicht angerechnet.
settings-delete-monitor-plus-account-dialog-cta-label = Konto löschen
settings-delete-monitor-plus-account-dialog-cancel-button-label = Ich habe es mir anders überlegt – zurück zur vorherigen Seite
settings-delete-monitor-account-confirmation-toast-label = Ihr { -brand-monitor }-Konto wurde jetzt dauerhaft gelöscht.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Schließen

## Add email dialog

settings-email-dialog-title = Eine weitere E-Mail-Adresse hinzufügen
settings-add-email-text = Fügen Sie eine neue E-Mail-Adresse hinzu, um zu sehen, ob sie von einem Datenleck betroffen ist.
settings-email-input-label = E-Mail-Adresse
settings-send-email-verification-button = Bestätigungslink senden

## Unsubscribe Dialog Survey

settings-unsubscribe-dialog-title = Es tut uns leid, dass Sie gehen. <br /> Möchten Sie uns den Grund nennen?
settings-unsubscribe-dialog-info = Ihre Erfahrung ist uns wichtig. Wir lesen jede Antwort und berücksichtigen sie.
settings-unsubscribe-dialog-message-placeholder = Was hätte besser laufen können?
# $faq_href is the URL for the faq page. HTML tags should not be translated, e.g. `<a>`
settings-unsubscribe-dialog-confirmation = Bitte beachten Sie, dass alle Ihre { -brand-monitor-premium }-Dienste nach Ende Ihres aktuellen Abrechnungszeitraums <a { $faq_href }>dauerhaft gelöscht werden</a>.
settings-unsubscribe-dialog-continue = Weiter zur Kündigung
settings-unsubscribe-dialog-cancel = Ich habe es mir anders überlegt – zurück zur vorherigen Seite
