# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = { -product-short-name }-innstillinger

## Breach alert preferences

settings-alert-email-preferences-title = E-postinnstillinger
settings-alert-email-preferences-subtitle = Fortell oss hvilke e-poster du ønsker å motta.
settings-alert-preferences-allow-breach-alerts-title = Øyeblikkelige varsler om datalekkasjer
settings-alert-preferences-allow-breach-alerts-subtitle = Disse varslene sendes umiddelbart når en datalekkasje oppdages
settings-alert-preferences-option-one = Send alle advarsler om datalekkasjer til den berørte e-postadressen
settings-alert-preferences-option-two = Send alle varsler om datalekkasjer til den primære e-postadressen

## Monitored email addresses

settings-email-verification-callout = E-postbekreftelse kreves
settings-email-addresses-header = E-postadresser
settings-email-addresses-description = { -brand-monitor } varsler deg hvis disse e-postadressene dukker opp i kjente datalekkasjer.
settings-email-addresses-add-email-button = Legg til e-postadresse
# Variables:
#   $limit (number) - Number of emails that can be added for monitoring.
settings-email-addresses-add-email-indicator-limit = Legg til opptil { $limit }
settings-email-addresses-add-email-resend-button-label = Send bekreftelseslenke på nytt
input-error-alt = Feil

## Email address dialog

settings-email-addresses-initial-dialog-header = Legg til en e-postadresse
settings-email-addresses-initial-dialog-description = Vi sender deg en bekreftelseslenke slik at du kan bekrefte at du ønsker å inkludere den i en fremtidig { -brand-monitor }-skanning.
settings-email-addresses-initial-dialog-add-email-input-label = Skriv inn e-postadresse
settings-email-addresses-initial-dialog-add-email-button-label = Send bekreftelseslenke
# Variables:
#   $email (string) - Email address the confirmation has been sent to.
settings-email-addresses-confirmation-dialog-header = Bekreftelseslenke sendt til <b>{ $email }</b>
settings-email-addresses-confirmation-dialog-description = Åpne lenken for å legge den til på denne kontoen for fremtidige { -brand-monitor }-skanninger.
settings-email-addresses-confirmation-dialog-close-button = Lukk

## Delete Monitor account

settings-delete-monitor-free-account-title = Slett { -brand-monitor }-kontoen
settings-delete-monitor-free-account-description = Dette vil slette { -brand-monitor }-kontoen din permanent og slå av alle varsler.
settings-delete-monitor-free-account-cta-label = Slett konto
settings-delete-monitor-free-account-dialog-title = Din { -brand-monitor }-konto vil bli slettet permanent
settings-delete-monitor-free-account-dialog-lead-v2 = All informasjon om { -brand-monitor }-kontoen din vil bli slettet, og vi vil ikke lenger overvåke nye datainnbrudd. Dette vil ikke slette { -brand-mozilla-account }-kontoen din.
settings-delete-monitor-free-account-dialog-cta-label = Slett konto
settings-delete-monitor-free-account-dialog-cancel-button-label = Glem det, ta meg tilbake
settings-delete-monitor-account-confirmation-toast-label-2 = Din { -brand-monitor }-konto er nå slettet.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Ignorer

## Settings page redesign

# Label for a navigation bar link to settings for updating the users scan profile info – “update” is used as a verb.
settings-tab-label-update-scan-info = Oppdater skanneinformasjon
settings-tab-label-edit-info = Rediger dine opplysninger
settings-tab-label-notifications = Still inn varsler
settings-tab-label-manage-account = Behandle konto
settings-tab-subtitle-manage-account = Behandle { -product-name }-kontoen din.
settings-tab-notifications-marketing-title = Markedskommunikasjon
settings-tab-notifications-marketing-text = Periodiske oppdateringer om { -brand-monitor }, { -brand-mozilla } og våre andre sikkerhetsprodukter.
settings-tab-notifications-marketing-link-label = Gå til e-postinnstillingene for { -brand-mozilla }
