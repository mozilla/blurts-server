# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = Inställningar { -product-short-name }

## Breach alert preferences

settings-alert-email-preferences-title = E-postinställningar
settings-alert-email-preferences-subtitle = Berätta vilka e-postmeddelanden du vill få.
settings-alert-preferences-allow-breach-alerts-title = Omedelbara intrångsvarningar
settings-alert-preferences-allow-breach-alerts-subtitle = Dessa varningar skickas omedelbart när ett dataintrång upptäcks
settings-alert-preferences-option-one = Skicka intrångsvarningar till den drabbade e-postadressen
settings-alert-preferences-option-two = Skicka alla intrångsvarningar till den primära e-postadressen

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-list-title = Övervakade e-postadresser
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Ditt konto inkluderar övervakning av { $limit } e-postadress.
       *[other] Ditt konto inkluderar övervakning av upp till { $limit } e-postadresser.
    }
settings-email-verification-callout = E-postverifiering krävs
settings-resend-email-verification-link = Skicka e-postverifiering igen
settings-add-email-button = Lägg till e-postadress
settings-remove-email-button-label = Ta bort
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = Sluta övervaka { $emailAddress }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Förekommer i { $breachCount } känt intrång.
       *[other] Förekommer i { $breachCount } kända intrång.
    }

## Delete Monitor account

settings-delete-monitor-free-account-title = Ta bort { -brand-monitor }-konto
settings-delete-monitor-free-account-description = Detta tar permanent bort ditt { -brand-monitor }-konto och stänger av alla aviseringar.
settings-delete-monitor-free-account-cta-label = Ta bort konto
settings-delete-monitor-free-account-dialog-title = Ditt { -brand-monitor }-konto kommer att tas bort permanent
settings-delete-monitor-free-account-dialog-lead-v2 = All din { -brand-monitor }-kontoinformation kommer att raderas och vi kommer inte längre att övervaka nya dataintrång. Detta tar inte bort ditt { -brand-mozilla-account }.
settings-delete-monitor-free-account-dialog-cta-label = Ta bort konto
settings-delete-monitor-free-account-dialog-cancel-button-label = Glöm det, ta mig tillbaka
settings-delete-monitor-account-confirmation-toast-label-2 = Ditt { -brand-monitor }-konto är nu raderat.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Ignorera

## Monthly Monitor Report

settings-alert-preferences-allow-monthly-monitor-report-title = Månatlig { -brand-monitor }-rapport
settings-alert-preferences-allow-monthly-monitor-report-subtitle = En månatlig uppdatering av nya exponeringar, vad som har fixats och vad som behöver din åtgärd.

## Settings page redesign

settings-tab-label-edit-info = Redigera din info
settings-tab-label-notifications = Ställ in aviseringar
settings-tab-label-manage-account = Hantera konto
settings-tab-subtitle-manage-account = Hantera ditt { -product-name }-konto.
settings-tab-notifications-marketing-title = Marknadskommunikation
settings-tab-notifications-marketing-text = Periodiska uppdateringar om { -brand-monitor }, { -brand-mozilla } och våra andra säkerhetsprodukter.
settings-tab-notifications-marketing-link-label = Gå till e-postinställningar för { -brand-mozilla }
