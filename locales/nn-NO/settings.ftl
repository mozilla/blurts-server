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

settings-email-verification-callout = Stadfesting av e-post påkravd
settings-remove-email-button-label = Fjern
settings-email-addresses-header = E-postadresser
settings-email-addresses-description = { -brand-monitor } varslar deg dersom desse e-postadressene dukkar opp i kjende datalekkasjar.
settings-email-addresses-add-email-button = Legg til e-postadresse
# Variables:
#   $limit (number) - Number of emails that can be added for monitoring.
settings-email-addresses-add-email-indicator-limit = Legg til opptil { $limit }
settings-email-addresses-add-email-resend-button-label = Send stadfestingslenke på nytt
input-error-alt = Feil

## Email address dialog

settings-email-addresses-initial-dialog-header = Legg til ei e-postadresse
settings-email-addresses-initial-dialog-description = Vi sender deg ei stadfestingslenke slik at du kan stadfeste at du ønskjer å inkludere henne i ei framtidig { -brand-monitor }-skanning.
settings-email-addresses-initial-dialog-add-email-input-label = Skriv inn e-postadresse
settings-email-addresses-initial-dialog-add-email-button-label = Send stadfestingslenke
# Variables:
#   $email (string) - Email address the confirmation has been sent to.
settings-email-addresses-confirmation-dialog-header = Stadfestingslenke sendt til <b>{ $email }</b>
settings-email-addresses-confirmation-dialog-description = Opne lenkja for å leggje den til på denne kontoen for framtidige { -brand-monitor }-skanningar.
settings-email-addresses-confirmation-dialog-close-button = Lat att

## Delete Monitor account

settings-delete-monitor-free-account-title = Slett { -brand-monitor }-kontoen
settings-delete-monitor-free-account-description = Dette vil permanent slette { -brand-monitor }-kontoen din og slå av alle varsel.
settings-delete-monitor-free-account-cta-label = Slett kontoen
settings-delete-monitor-free-account-dialog-title = { -brand-monitor }-kontoen din vert permanent sletta
settings-delete-monitor-free-account-dialog-lead-v2 = All { -brand-monitor }-kontoinformasjonen din vil bli sletta, og vi vil ikkje lenger overvake nye datalekkasjar. Dette vil ikkje slette { -brand-mozilla-account }en din.
settings-delete-monitor-free-account-dialog-cta-label = Slett kontoen
settings-delete-monitor-free-account-dialog-cancel-button-label = Gløym det, ta meg tilbake
settings-delete-monitor-account-confirmation-toast-label-2 = { -brand-monitor }-kontoen din er no sletta.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Ignorer

## Settings page redesign

# Label for a navigation bar link to settings for updating the users scan profile info – “update” is used as a verb.
settings-tab-label-update-scan-info = Oppdater skanneinformasjon
settings-tab-label-edit-info = Rediger opplysningane dine
settings-tab-label-notifications = Still inn varsel
settings-tab-label-manage-account = Handsam kontoen
settings-tab-subtitle-manage-account = Handsam { -product-name }-kontoen din.
settings-tab-notifications-marketing-title = Marknadskommunikasjon
settings-tab-notifications-marketing-text = Periodiske oppdateringar om { -brand-monitor }, { -brand-mozilla } og dei andre tryggingsprodukta våre.
settings-tab-notifications-marketing-link-label = Gå til e-postinnstillingar for { -brand-mozilla }
