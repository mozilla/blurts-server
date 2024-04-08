# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = Inställningar { -product-short-name }

## Breach alert preferences

settings-alert-preferences-title = Inställningar för intrångsvarning
settings-alert-preferences-option-one = Skicka intrångsvarningar till den drabbade e-postadressen
settings-alert-preferences-option-two = Skicka alla intrångsvarningar till den primära e-postadressen

## Monitored email addresses

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

## Cancel Premium subscription

## Deactivate account

settings-deactivate-account-title = Inaktivera konto
settings-deactivate-account-info-2 = Du kan inaktivera { -product-short-name } genom att ta bort ditt { -brand-mozilla-account }.
settings-fxa-link-label-3 = Gå till inställningarna för { -brand-mozilla-account }

## Delete Monitor account

settings-delete-monitor-free-account-title = Ta bort { -brand-monitor }-konto
settings-delete-monitor-free-account-description = Detta tar permanent bort ditt { -brand-monitor }-konto och stänger av alla aviseringar.
settings-delete-monitor-free-account-cta-label = Ta bort konto
settings-delete-monitor-free-account-dialog-title = Ditt { -brand-monitor }-konto kommer att tas bort permanent
settings-delete-monitor-free-account-dialog-lead = All din { -brand-monitor }-kontoinformation kommer att raderas och vi kommer inte längre att övervaka nya dataintrång. Detta tar inte bort ditt { -brand-mozilla }-konto.
settings-delete-monitor-free-account-dialog-cta-label = Ta bort konto
settings-delete-monitor-free-account-dialog-cancel-button-label = Glöm det, ta mig tillbaka
settings-delete-monitor-account-confirmation-toast-label-2 = Ditt { -brand-monitor }-konto är nu raderat.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Ignorera

## Add email dialog

## Unsubscribe Dialog Survey

