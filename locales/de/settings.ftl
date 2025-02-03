# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = Einstellungen für { -product-short-name }

## Breach alert preferences

settings-alert-email-preferences-title = Einstellungen zu E-Mails
settings-alert-email-preferences-subtitle = Teilen Sie uns mit, welche E-Mails Sie erhalten möchten.
settings-alert-preferences-allow-breach-alerts-title = Sofortige Warnmeldungen bei Datenlecks
settings-alert-preferences-allow-breach-alerts-subtitle = Diese Warnmeldungen werden sofort gesendet, wenn ein Datenleck erkannt wird.
settings-alert-preferences-option-one = Benachrichtigungen über Datenlecks an die betroffene E-Mail-Adresse schicken
settings-alert-preferences-option-two = Alle Warnungen zu Datenlecks an die primäre E-Mail-Adresse senden

## Monitored email addresses

# Variables:
#   $email (string) - Email address
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

## Delete Monitor account

settings-delete-monitor-free-account-title = { -brand-monitor }-Konto löschen
settings-delete-monitor-free-account-description = Dies löscht Ihr { -brand-monitor }-Konto dauerhaft und alle Benachrichtigungen werden deaktiviert.
settings-delete-monitor-free-account-cta-label = Konto löschen
settings-delete-monitor-free-account-dialog-title = Ihr { -brand-monitor }-Konto wird dauerhaft gelöscht
settings-delete-monitor-free-account-dialog-lead-v2 = Alle Ihre { -brand-monitor }-Kontodaten werden gelöscht und es findet keine Überwachung auf neue Datenlecks mehr statt. Ihr { -brand-mozilla-account } wird dadurch nicht gelöscht.
settings-delete-monitor-free-account-dialog-cta-label = Konto löschen
settings-delete-monitor-free-account-dialog-cancel-button-label = Ich habe es mir anders überlegt – zurück zur vorherigen Seite
settings-delete-monitor-account-confirmation-toast-label-2 = Ihr { -brand-monitor }-Konto ist jetzt gelöscht.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Schließen

## Monthly Monitor Report

settings-alert-preferences-allow-monthly-monitor-report-title = Monatlicher { -brand-monitor }-Bericht
settings-alert-preferences-allow-monthly-monitor-report-subtitle = Eine monatlich aktualisierte Information über neue Datenlecks, behobene Probleme und was Ihre Aufmerksamkeit erfordert.

## Settings page redesign

settings-tab-label-edit-info = Ihre Daten bearbeiten
settings-tab-label-notifications = Benachrichtigungen festlegen
settings-tab-label-manage-account = Benutzerkonto verwalten
settings-tab-subtitle-manage-account = Verwalten Sie Ihr { -product-name }-Konto.
settings-tab-notifications-marketing-title = Marketingkommunikation
settings-tab-notifications-marketing-text = Regelmäßige Neuigkeiten zu { -brand-monitor }, { -brand-mozilla } und unseren anderen Sicherheitsprodukten.
settings-tab-notifications-marketing-link-label = Zu den { -brand-mozilla }-E-Mail-Einstellungen
