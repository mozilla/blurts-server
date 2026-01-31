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

settings-email-verification-callout = E-postverifiering krävs
settings-remove-email-button-label = Ta bort
settings-email-addresses-header = E-postadresser
settings-email-addresses-description = { -brand-monitor } varnar dig om dessa e-postadresser dyker upp i kända intrång.
settings-email-addresses-add-email-button = Lägg till e-postadress
# Variables:
#   $limit (number) - Number of emails that can be added for monitoring.
settings-email-addresses-add-email-indicator-limit = Lägg till upp till { $limit }
settings-email-addresses-add-email-resend-button-label = Skicka verifieringslänk igen
input-error-alt = Fel

## Email address dialog

settings-email-addresses-initial-dialog-header = Lägg till en e-postadress
settings-email-addresses-initial-dialog-description = Vi skickar en verifieringslänk för att bekräfta att du vill inkludera den i en framtida { -brand-monitor }-skanning.
settings-email-addresses-initial-dialog-add-email-input-label = Ange e-postadress
settings-email-addresses-initial-dialog-add-email-button-label = Skicka verifieringslänk
# Variables:
#   $email (string) - Email address the confirmation has been sent to.
settings-email-addresses-confirmation-dialog-header = Verifieringslänk skickad till <b>{ $email }</b>
settings-email-addresses-confirmation-dialog-description = Öppna länken för att lägga till den på det här kontot för framtida { -brand-monitor }-skanningar.
settings-email-addresses-confirmation-dialog-close-button = Stäng

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

## Settings page redesign

# Label for a navigation bar link to settings for updating the users scan profile info – “update” is used as a verb.
settings-tab-label-update-scan-info = Uppdatera skanningsinfo
settings-tab-label-edit-info = Redigera din info
settings-tab-label-notifications = Ställ in aviseringar
settings-tab-label-manage-account = Hantera konto
settings-tab-subtitle-manage-account = Hantera ditt { -product-name }-konto.
settings-tab-notifications-marketing-title = Marknadskommunikation
settings-tab-notifications-marketing-text = Periodiska uppdateringar om { -brand-monitor }, { -brand-mozilla } och våra andra säkerhetsprodukter.
settings-tab-notifications-marketing-link-label = Gå till e-postinställningar för { -brand-mozilla }
