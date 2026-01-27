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

settings-email-verification-callout = E-Mail-Bestätigung erforderlich
settings-email-addresses-header = E-Mail-Adressen
settings-email-addresses-description = { -brand-monitor } wird Sie warnen, wenn diese E-Mail-Adressen in bekannten Datenlecks auftauchen.
settings-email-addresses-add-email-button = E-Mail-Adresse hinzufügen
# Variables:
#   $limit (number) - Number of emails that can be added for monitoring.
settings-email-addresses-add-email-indicator-limit = Fügen Sie bis zu { $limit } E-Mail-Adressen hinzu
settings-email-addresses-add-email-resend-button-label = Bestätigungslink erneut senden
input-error-alt = Fehler

## Email address dialog

settings-email-addresses-initial-dialog-header = Eine E-Mail-Adresse hinzufügen
settings-email-addresses-initial-dialog-description = Wir senden Ihnen einen Bestätigungslink, um zu bestätigen, dass Sie diese E-Mail-Adresse künftig von { -brand-monitor } prüfen lassen möchten.
settings-email-addresses-initial-dialog-add-email-input-label = E-Mail-Adresse eingeben
settings-email-addresses-initial-dialog-add-email-button-label = Bestätigungslink senden
# Variables:
#   $email (string) - Email address the confirmation has been sent to.
settings-email-addresses-confirmation-dialog-header = Bestätigungslink an <b>{ $email }</b> gesendet
settings-email-addresses-confirmation-dialog-description = Öffnen Sie den Link, um es diesem Konto für zukünftige { -brand-monitor }-Scans hinzuzufügen.
settings-email-addresses-confirmation-dialog-close-button = Schließen

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

## Settings page redesign

# Label for a navigation bar link to settings for updating the users scan profile info – “update” is used as a verb.
settings-tab-label-update-scan-info = Scan-Informationen aktualisieren
settings-tab-label-edit-info = Ihre Daten bearbeiten
settings-tab-label-notifications = Benachrichtigungen festlegen
settings-tab-label-manage-account = Benutzerkonto verwalten
settings-tab-subtitle-manage-account = Verwalten Sie Ihr { -product-name }-Konto.
settings-tab-notifications-marketing-title = Marketingkommunikation
settings-tab-notifications-marketing-text = Regelmäßige Neuigkeiten zu { -brand-monitor }, { -brand-mozilla } und unseren anderen Sicherheitsprodukten.
settings-tab-notifications-marketing-link-label = Zu den { -brand-mozilla }-E-Mail-Einstellungen
