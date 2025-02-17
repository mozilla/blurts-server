# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = { -product-short-name }-innstillingar

## Breach alert preferences

settings-alert-email-preferences-title = E-postinnstillingar
settings-alert-email-preferences-subtitle = Fortel oss kva for e-postar du ønskjer å få.
settings-alert-preferences-allow-breach-alerts-title = Direkte datalekkasjevarsel
settings-alert-preferences-allow-breach-alerts-subtitle = Desse varsla vert sende med ein gong ein datalekkasje er oppdaga
settings-alert-preferences-option-one = Send alle åtvaringar om datalekkasjar til den ramma e-postadressa
settings-alert-preferences-option-two = Send alle åtvaringar om datalekkasjar til den primære e-postadressa

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-list-title = Overvaka e-postadresser
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Kontoen din inkluderer overvaking av opptil { $limit } e-postadresse.
       *[other] Kontoen din inkluderer overvaking av opptil { $limit } e-postadresser.
    }
settings-email-verification-callout = Stadfesting av e-post påkravd
settings-resend-email-verification-link = Send stadfestings e-posten på nytt
settings-add-email-button = Legg til e-postadresse
settings-remove-email-button-label = Fjern
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = Slutt å overvake { $emailAddress }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Er i { $breachCount } kjend datalekkasje.
       *[other] Er i { $breachCount } kjende datalekkasjar.
    }

## Delete Monitor account

settings-delete-monitor-free-account-title = Slett { -brand-monitor }-kontoen
settings-delete-monitor-free-account-description = Dette vil permanent slette { -brand-monitor }-kontoen din og slå av alle varsel.
settings-delete-monitor-free-account-cta-label = Slett kontoen
settings-delete-monitor-free-account-dialog-title = { -brand-monitor }-kontoen din vert permanent sletta
settings-delete-monitor-free-account-dialog-lead-v2 = All { -brand-monitor }-kontoinformasjonen din vil bli sletta, og vi vil ikkje lenger overvake nye datalekkasjar. Dette vil ikkje slette { -brand-mozilla-account }en din.
settings-delete-monitor-free-account-dialog-cta-label = Slett kontoen
settings-delete-monitor-free-account-dialog-cancel-button-label = Gløym det, ta meg tillbake
settings-delete-monitor-account-confirmation-toast-label-2 = { -brand-monitor }-kontoen din er no sletta.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Ignorer

## Monthly Monitor Report

settings-alert-preferences-allow-monthly-monitor-report-title = Månadleg { -brand-monitor }-rapport
settings-alert-preferences-allow-monthly-monitor-report-subtitle = Ei månadleg oppdatering av nye eksponeringar, kva som er fiksa og kva som krev di merksemd.

## Settings page redesign

settings-tab-label-edit-info = Rediger opplysningane dine
settings-tab-label-notifications = Still inn varsel
settings-tab-label-manage-account = Handsam kontoen
settings-tab-subtitle-manage-account = Handsam { -product-name }-kontoen din.
settings-tab-notifications-marketing-link-label = Gå til e-postinnstillingar for { -brand-mozilla }
