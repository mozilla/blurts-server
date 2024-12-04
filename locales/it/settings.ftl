# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = Impostazioni di { -product-short-name }

## Breach alert preferences

settings-alert-email-preferences-title = Preferenze email
settings-alert-email-preferences-subtitle = Facci sapere quali email vuoi ricevere.
settings-alert-preferences-allow-breach-alerts-title = Avvisi per violazioni immediati
settings-alert-preferences-allow-breach-alerts-subtitle = Questi avvisi vengono inviati non appena viene rilevata una violazione di dati
settings-alert-preferences-option-one = Invia avvisi relativi alle violazioni all’indirizzo email coinvolto
settings-alert-preferences-option-two = Invia tutti gli avvisi di violazione all’indirizzo email principale

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-list-title = Indirizzi email controllati
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Il tuo account include il controllo di una email.
       *[other] Il tuo account include il controllo di un massimo di { $limit } email.
    }
settings-email-verification-callout = Richiesta verifica email
settings-resend-email-verification-link = Invia nuovamente l’email di conferma
settings-add-email-button = Aggiungi un indirizzo email
settings-remove-email-button-label = Rimuovi
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = Interrompi il monitoraggio di { $emailAddress }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Appare in { $breachCount } violazione conosciuta.
       *[other] Appare in { $breachCount } violazioni conosciute.
    }

## Delete Monitor account

settings-delete-monitor-free-account-title = Elimina l’account { -brand-monitor }
settings-delete-monitor-free-account-description = Questa operazione eliminerà definitivamente il tuo account { -brand-monitor } e tutte le notifiche verranno disattivate.
settings-delete-monitor-free-account-cta-label = Elimina account
settings-delete-monitor-free-account-dialog-title = Il tuo account { -brand-monitor } verrà eliminato definitivamente
settings-delete-monitor-free-account-dialog-lead-v2 = Tutte le informazioni del tuo account { -brand-monitor } verranno eliminate e non verranno più monitorate nuove violazioni di dati. Il tuo { -brand-mozilla-account } non verrà eliminato.
settings-delete-monitor-free-account-dialog-cta-label = Elimina account
settings-delete-monitor-free-account-dialog-cancel-button-label = Ho cambiato idea, torna indietro
settings-delete-monitor-account-confirmation-toast-label-2 = Il tuo account { -brand-monitor } è stato eliminato.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Chiudi

## Monthly Monitor Report

settings-alert-preferences-allow-monthly-monitor-report-title = Rapporto mensile di { -brand-monitor }
settings-alert-preferences-allow-monthly-monitor-report-subtitle = Un aggiornamento mensile delle nuove esposizioni, che cosa è stato corretto e che cosa richiede la tua attenzione.

## Settings page redesign

settings-tab-label-edit-info = Modifica le tue informazioni
settings-tab-label-notifications = Imposta notifiche
settings-tab-label-manage-account = Gestisci account
settings-tab-subtitle-manage-account = Gestisci il tuo account { -product-name }.
settings-tab-notifications-marketing-title = Comunicazioni di marketing
settings-tab-notifications-marketing-text = Aggiornamenti periodici su { -brand-monitor }, { -brand-mozilla } e altri nostri prodotti per la sicurezza.
settings-tab-notifications-marketing-link-label = Vai alle impostazioni email di { -brand-mozilla }
