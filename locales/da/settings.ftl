# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = { -product-short-name }-instillinger

## Breach alert preferences

settings-alert-email-preferences-title = Mailindstillinger
settings-alert-email-preferences-subtitle = Fortæl os, hvilke mails du gerne vil modtage.
settings-alert-preferences-allow-breach-alerts-title = Øjeblikkelige advarsler om datalæk
settings-alert-preferences-allow-breach-alerts-subtitle = Disse advarsler sendes straks, når en datalæk er opdaget
settings-alert-preferences-option-one = Send alle advarsler om datalæk til den berørte mailadresse
settings-alert-preferences-option-two = Send alle advarsler om datalæk til den primære mailadresse

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-list-title = Overvågede mailadresser
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Din konto inkluderer overvågning af { $limit } mailadresse.
       *[other] Din konto inkluderer overvågning af op til { $limit } mailadresser.
    }
settings-email-verification-callout = Bekræftelse af mailadresse påkrævet
settings-resend-email-verification-link = Send bekræftelsesmail igen
settings-add-email-button = Tilføj mailadresse
settings-remove-email-button-label = Fjern
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = Stop med at holde øje med { $emailAddress }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Optræder i { $breachCount } kendt datalæk
       *[other] Optræder i { $breachCount } kendte datalæk
    }

## Delete Monitor account

settings-delete-monitor-free-account-title = Slet { -brand-monitor }-konto
settings-delete-monitor-free-account-description = Dette vil permanent slette din { -brand-monitor }-konto og slå alle advarsler fra.
settings-delete-monitor-free-account-cta-label = Slet konto
settings-delete-monitor-free-account-dialog-title = Din { -brand-monitor }-konto vil blive slettet permanent
settings-delete-monitor-free-account-dialog-lead-v2 = Alle dine kontooplysninger for { -brand-monitor } vil blive slettet, og vi holder ikke længere øje med nye datalæk. Denne handling sletter ikke din { -brand-mozilla-account }.
settings-delete-monitor-free-account-dialog-cta-label = Slet konto
settings-delete-monitor-free-account-dialog-cancel-button-label = Jag har skiftet mening - gå tilbage
settings-delete-monitor-account-confirmation-toast-label-2 = Din { -brand-monitor }-konto er nu slettet.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Afvis

## Monthly Monitor Report

settings-alert-preferences-allow-monthly-monitor-report-title = Månedlig { -brand-monitor }-rapport
settings-alert-preferences-allow-monthly-monitor-report-subtitle = En månedlig opdatering af nye eksponeringer, hvad der er blevet løst, og hvad der kræver din opmærksomhed.

## Settings page redesign

settings-tab-label-edit-info = Rediger dine oplysninger
settings-tab-label-notifications = Indstil notifikationer
settings-tab-label-manage-account = Håndter konto
settings-tab-subtitle-manage-account = Håndter din { -product-name }-konto.
settings-tab-notifications-marketing-title = Markedsføring
settings-tab-notifications-marketing-text = Periodiske opdateringer om { -brand-monitor }, { -brand-mozilla } og vores andre sikkerhedsprodukter.
settings-tab-notifications-marketing-link-label = Gå til indstillinger for mails fra { -brand-mozilla }
