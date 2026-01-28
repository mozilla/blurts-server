# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = { -product-short-name }-instellingen

## Breach alert preferences

settings-alert-email-preferences-title = E-mailvoorkeuren
settings-alert-email-preferences-subtitle = Vertel ons welke e-mailberichten u wilt ontvangen.
settings-alert-preferences-allow-breach-alerts-title = Directe waarschuwingen over datalekken
settings-alert-preferences-allow-breach-alerts-subtitle = Deze waarschuwingen worden direct verzonden zodra een datalek wordt gedetecteerd
settings-alert-preferences-option-one = Waarschuwingen over datalekken naar het getroffen e-mailadres sturen
settings-alert-preferences-option-two = Alle waarschuwingen over datalekken naar het primaire e-mailadres sturen

## Monitored email addresses

settings-email-verification-callout = E-mailverificatie vereist
settings-email-addresses-header = E-mailadressen
settings-email-addresses-description = { -brand-monitor } waarschuwt u als deze e-mailadressen in bekende datalekken voorkomen.
settings-email-addresses-add-email-button = E-mailadres toevoegen
# Variables:
#   $limit (number) - Number of emails that can be added for monitoring.
settings-email-addresses-add-email-indicator-limit = U kunt er maximaal { $limit } toevoegen
settings-email-addresses-add-email-resend-button-label = Verificatiekoppeling opnieuw verzenden
input-error-alt = Fout

## Email address dialog

settings-email-addresses-initial-dialog-header = Een e-mailadres toevoegen
settings-email-addresses-initial-dialog-description = We sturen een verificatiekoppeling om te bevestigen dat u deze in een toekomstige { -brand-monitor }-scan wilt opnemen.
settings-email-addresses-initial-dialog-add-email-input-label = Voer e-mailadres in
settings-email-addresses-initial-dialog-add-email-button-label = Verificatiekoppeling versturen
# Variables:
#   $email (string) - Email address the confirmation has been sent to.
settings-email-addresses-confirmation-dialog-header = Verificatiekoppeling verzonden naar <b>{ $email }</b>
settings-email-addresses-confirmation-dialog-description = Open de koppeling om dit aan deze account toe te voegen voor toekomstige { -brand-monitor }-scans.
settings-email-addresses-confirmation-dialog-close-button = Sluiten

## Delete Monitor account

settings-delete-monitor-free-account-title = { -brand-monitor }-account verwijderen
settings-delete-monitor-free-account-description = Dit zal uw { -brand-monitor }-account voorgoed verwijderen en alle notificaties uitschakelen.
settings-delete-monitor-free-account-cta-label = Account verwijderen
settings-delete-monitor-free-account-dialog-title = Uw { -brand-monitor }-account wordt permanent verwijderd
settings-delete-monitor-free-account-dialog-lead-v2 = Al uw { -brand-monitor }-accountgegevens worden verwijderd en we controleren niet meer op nieuwe datalekken. Dit zal uw { -brand-mozilla-account } niet verwijderen.
settings-delete-monitor-free-account-dialog-cta-label = Account verwijderen
settings-delete-monitor-free-account-dialog-cancel-button-label = Laat maar zitten, breng me terug
settings-delete-monitor-account-confirmation-toast-label-2 = Uw { -brand-monitor }-account is nu verwijderd.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Sluiten

## Settings page redesign

# Label for a navigation bar link to settings for updating the users scan profile info – “update” is used as a verb.
settings-tab-label-update-scan-info = Scaninformatie bijwerken
settings-tab-label-edit-info = Uw gegevens bewerken
settings-tab-label-notifications = Notificaties instellen
settings-tab-label-manage-account = Account beheren
settings-tab-subtitle-manage-account = Uw { -product-name }-account beheren.
settings-tab-notifications-marketing-title = Marketingcommunicatie
settings-tab-notifications-marketing-text = Periodieke updates over { -brand-monitor }, { -brand-mozilla } en onze andere beveiligingsproducten.
settings-tab-notifications-marketing-link-label = Naar de e-mailinstellingen van { -brand-mozilla }
