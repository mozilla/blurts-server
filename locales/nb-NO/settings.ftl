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

# Variables:
#   $email (string) - Email address
settings-email-list-title = Overvåkede e-postadresser
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Kontoen din inkluderer overvåking av opptil { $limit } e-postadresse.
       *[other] Kontoen din inkluderer overvåking av opptil { $limit } e-postadresser.
    }
settings-email-verification-callout = E-postbekreftelse kreves
settings-resend-email-verification-link = Send e-postbekreftelse på nytt
settings-add-email-button = Legg til e-postadresse
settings-remove-email-button-label = Fjern
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = Stopp overvåking av { $emailAddress }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Vises i { $breachCount } kjent datalekkasje.
       *[other] Vises i { $breachCount } kjente datalekkasjer.
    }

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

## Monthly Monitor Report

settings-alert-preferences-allow-monthly-monitor-report-title = Månedlig { -brand-monitor }-rapport
settings-alert-preferences-allow-monthly-monitor-report-subtitle = En månedlig oppdatering av nye eksponeringer, hva som er fikset og hva som trenger din oppmerksomhet.

## Settings page redesign

settings-tab-label-edit-info = Rediger dine opplysninger
settings-tab-label-notifications = Still inn varsler
settings-tab-label-manage-account = Behandle konto
settings-tab-subtitle-manage-account = Behandle { -product-name }-kontoen din.
settings-tab-notifications-marketing-title = Markedskommunikasjon
settings-tab-notifications-marketing-text = Periodiske oppdateringer om { -brand-monitor }, { -brand-mozilla } og våre andre sikkerhetsprodukter.
settings-tab-notifications-marketing-link-label = Gå til e-postinnstillingene for { -brand-mozilla }
