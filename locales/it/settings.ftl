# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-meta-title = { -brand-fx-monitor } - Impostazioni
settings-page-title = Impostazioni di { -product-short-name }

## Breach alert preferences

settings-alert-preferences-title = Preferenze per gli avvisi relativi alle violazioni
settings-alert-preferences-option-one = Invia avvisi relativi alle violazioni all’indirizzo email coinvolto
settings-alert-preferences-option-two = Invia tutti gli avvisi di violazione all’indirizzo email principale

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-label-primary = { $email } (principale)
settings-email-list-title = Indirizzi email controllati
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Il tuo account include il controllo di un massimo di { $limit } email.
       *[other] Il tuo account include il controllo di un massimo di { $limit } email.
    }
settings-email-verification-callout = Richiesta verifica email
settings-resend-email-verification-link = Invia nuovamente l’email di conferma
settings-add-email-button = Aggiungi un indirizzo email
settings-delete-email-button = Elimina indirizzo email
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (numer) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Appare in { $breachCount } violazione conosciuta.
       *[other] Appare in { $breachCount } violazioni conosciute.
    }

## Cancel Premium subscription

settings-cancel-premium-subscription-title = Annulla l’abbonamento a { -brand-premium }
settings-cancel-premium-subscription-info = Il tuo abbonamento tornerà a un account gratuito al termine del ciclo di fatturazione corrente. I risultati della scansione per la protezione della privacy verranno eliminati in modo permanente e il monitoraggio delle violazioni di dati sarà possibile solo per 1 indirizzo email.
settings-cancel-premium-subscription-link-label = Annulla dal tuo { -brand-fx-account }

## Deactivate account

settings-deactivate-account-title = Disattiva account
settings-deactivate-account-info = Puoi disattivare { -product-short-name } eliminando il tuo { -brand-fx-account }.
settings-fxa-link-label = Vai alle impostazioni di { -brand-firefox }

## Add email dialog

settings-email-dialog-title = Aggiungi un altro indirizzo email
settings-add-email-text = Aggiungi un nuovo indirizzo email per verificare se è stato coinvolto in una violazione.
settings-email-input-label = Indirizzo email
settings-send-email-verification-button = Invia link di verifica

## Unsubscribe Dialog Survey

settings-unsubscribe-dialog-title = Ci dispiace per la tua decisione. <br /> Puoi spiegarci le motivazioni della tua scelta?
settings-unsubscribe-dialog-info = La tua esperienza è importante per noi. Leggiamo ogni risposta e la prendiamo in considerazione.
settings-unsubscribe-dialog-message-placeholder = Che cosa poteva essere gestito meglio?
# $faq_href is the URL for the faq page. HTML tags should not be translated, e.g. `<a>`
settings-unsubscribe-dialog-confirmation = Tieni presente che tutti i tuoi servizi { -brand-monitor-premium } verranno <a { $faq_href }>eliminati definitivamente</a> al termine del ciclo di fatturazione corrente.
settings-unsubscribe-dialog-continue = Prosegui con l’annullamento
settings-unsubscribe-dialog-cancel = Ho cambiato idea, torna indietro
