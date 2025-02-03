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

# Variables:
#   $email (string) - Email address
settings-email-list-title = Gemonitorde e-mailadressen
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Uw account omvat het monitoren van maximaal { $limit } e-mailadres.
       *[other] Uw account omvat het monitoren van maximaal { $limit } e-mailadressen.
    }
settings-email-verification-callout = E-mailverificatie vereist
settings-resend-email-verification-link = Verificatie-e-mailbericht opnieuw versturen
settings-add-email-button = E-mailadres toevoegen
settings-remove-email-button-label = Verwijderen
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = Monitoren van { $emailAddress } stoppen
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Komt voor in { $breachCount } bekend datalek.
       *[other] Komt voor in { $breachCount } bekende datalekken.
    }

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

## Monthly Monitor Report

settings-alert-preferences-allow-monthly-monitor-report-title = Maandelijks { -brand-monitor }-rapport
settings-alert-preferences-allow-monthly-monitor-report-subtitle = Een maandelijkse update van nieuwe lekken, wat is opgelost en wat uw aandacht nodig heeft.

## Settings page redesign

settings-tab-label-edit-info = Uw gegevens bewerken
settings-tab-label-notifications = Notificaties instellen
settings-tab-label-manage-account = Account beheren
settings-tab-subtitle-manage-account = Uw { -product-name }-account beheren.
settings-tab-notifications-marketing-title = Marketingcommunicatie
settings-tab-notifications-marketing-text = Periodieke updates over { -brand-monitor }, { -brand-mozilla } en onze andere beveiligingsproducten.
settings-tab-notifications-marketing-link-label = Naar de e-mailinstellingen van { -brand-mozilla }
