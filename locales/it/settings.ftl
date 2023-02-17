# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = { -product-short-name } Impostazioni

## Breach alert preferences

settings-alert-preferences-title = Violazione preferenze avvisi
settings-alert-preferences-option-one = Invia avvisi relativi alle violazioni all’indirizzo email coinvolto
settings-alert-preferences-option-two = Invia tutti gli avvisi di violazione all’indirizzo email principale

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-label-primary = { $email } (principale)
settings-email-list-title = Indirizzi email monitorati
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Il tuo account include il monitoraggio di un massimo di { $limit } email.
       *[other] Il tuo account include il monitoraggio di un massimo di { $limit } email.
    }
settings-email-verification-callout = Verifica email richiesta
settings-resend-email-verification-link = Invia nuovamente l’email di conferma
settings-add-email-button = Aggiungi un indirizzo email
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (numer) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Appare in { $breachCount } violazione nota.
       *[other] Appare in { $breachCount } violazioni note.
    }

## Deactivate account

settings-deactivate-account-title = Disattiva account
settings-deactivate-account-info = Puoi disattivare { -product-short-name } eliminando il tuo { -brand-fx-account }.
settings-fxa-link-label = Vai alle impostazioni di { -brand-firefox }

## Add email dialog

settings-email-dialog-title = Aggiungi un altro indirizzo email
settings-add-email-text = Aggiungi un nuovo indirizzo email per verificare se è stato coinvolto in una violazione.
settings-email-input-label = Indirizzo email
settings-send-email-verification-button = Invia link di verifica
