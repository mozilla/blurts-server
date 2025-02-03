# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = { -product-short-name }-ynstellingen

## Breach alert preferences

settings-alert-email-preferences-title = E-mailfoarkarren
settings-alert-email-preferences-subtitle = Fertel ús hokker e-mailberjochten jo ûntfange wolle.
settings-alert-preferences-allow-breach-alerts-title = Daliks warskôgingen oer datalekken
settings-alert-preferences-allow-breach-alerts-subtitle = Dizze warskôgingen wurde fuortendaliks ferstjoerd, sa gau as in datalek detektearre wurdt
settings-alert-preferences-option-one = Warskôgingen oer datalekken nei it troffen e-mailadres stjoere
settings-alert-preferences-option-two = Alle warskôgingen oer datalekken nei it primêre e-mailadres stjoere

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-list-title = Kontrolearre e-mailadressen
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Jo account omfettet it monitoaren fan maksimaal { $limit } e-mailadres.
       *[other] Jo account omfettet it monitoaren fan maksimaal { $limit } e-mailadressen.
    }
settings-email-verification-callout = E-mailferifikaasje fereaske
settings-resend-email-verification-link = Ferifikaasje-e-mailberjocht opnij ferstjoere
settings-add-email-button = E-mailadres tafoegje
settings-remove-email-button-label = Fuortsmite
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = Kontrolearjen fan { $emailAddress } stopje
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Komt foar yn { $breachCount } bekend datalek.
       *[other] Komt foar yn { $breachCount } bekende datalekken.
    }

## Delete Monitor account

settings-delete-monitor-free-account-title = { -brand-monitor }-account fuortsmite
settings-delete-monitor-free-account-description = Dit sil jo { -brand-monitor }-account permanint fuortsmite en alle notifikaasjes útskeakelje.
settings-delete-monitor-free-account-cta-label = Account fuortsmite
settings-delete-monitor-free-account-dialog-title = Jo { -brand-monitor }-account wurdt permanint fuortsmiten
settings-delete-monitor-free-account-dialog-lead-v2 = Al jo { -brand-monitor }-accountgegevens wurde fuortsmiten en wy kontrolearje net mear op nije datalekken. Dit sil jo { -brand-mozilla-account } net fuortsmite.
settings-delete-monitor-free-account-dialog-cta-label = Account fuortsmite
settings-delete-monitor-free-account-dialog-cancel-button-label = Lit mar, bring my werom
settings-delete-monitor-account-confirmation-toast-label-2 = Jo { -brand-monitor }-account is no fuortsmiten
settings-delete-monitor-account-confirmation-toast-dismiss-label = Slute

## Monthly Monitor Report

settings-alert-preferences-allow-monthly-monitor-report-title = Moanliks { -brand-monitor }-rapport
settings-alert-preferences-allow-monthly-monitor-report-subtitle = In moanlikse update fan nije lekken, wat is oplost en wat jo oandacht nedich hat.

## Settings page redesign

settings-tab-label-edit-info = Jo gegevens bewurkje
settings-tab-label-notifications = Notifikaasjes ynstelle
settings-tab-label-manage-account = Account beheare
settings-tab-subtitle-manage-account = Jo { -product-name }-account beheare.
settings-tab-notifications-marketing-title = Marketingkommunikaasje
settings-tab-notifications-marketing-text = Periodike updates oer { -brand-monitor }, { -brand-mozilla }, en ús oare befeiligingsprodukten.
settings-tab-notifications-marketing-link-label = Nei de e-mailynstellingen fan { -brand-mozilla }
