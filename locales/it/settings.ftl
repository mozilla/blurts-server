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

settings-email-verification-callout = Richiesta verifica email
settings-email-addresses-header = Indirizzi email
settings-email-addresses-description = { -brand-monitor } ti avviserà se queste email sono coinvolte in violazioni conosciute.
settings-email-addresses-add-email-button = Aggiungi indirizzo email
# Variables:
#   $limit (number) - Number of emails that can be added for monitoring.
settings-email-addresses-add-email-indicator-limit = Aggiungi fino a { $limit }
settings-email-addresses-add-email-resend-button-label = Invia nuovamente il link di verifica
input-error-alt = Errore

## Email address dialog

settings-email-addresses-initial-dialog-header = Aggiungi indirizzo email
settings-email-addresses-initial-dialog-description = Ti invieremo un link di verifica per confermare che desideri includerlo in una futura scansione di { -brand-monitor }.
settings-email-addresses-initial-dialog-add-email-input-label = Inserisci un indirizzo email
settings-email-addresses-initial-dialog-add-email-button-label = Invia link di verifica
# Variables:
#   $email (string) - Email address the confirmation has been sent to.
settings-email-addresses-confirmation-dialog-header = Link di verifica inviato a <b>{ $email }</b>
settings-email-addresses-confirmation-dialog-description = Apri il link per aggiungere l’indirizzo a questo account per future scansioni di { -brand-monitor }.
settings-email-addresses-confirmation-dialog-close-button = Chiudi

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

## Settings page redesign

# Label for a navigation bar link to settings for updating the users scan profile info – “update” is used as a verb.
settings-tab-label-update-scan-info = Aggiorna le informazioni di scansione
settings-tab-label-edit-info = Modifica le tue informazioni
settings-tab-label-notifications = Imposta notifiche
settings-tab-label-manage-account = Gestisci account
settings-tab-subtitle-manage-account = Gestisci il tuo account { -product-name }.
settings-tab-notifications-marketing-title = Comunicazioni di marketing
settings-tab-notifications-marketing-text = Aggiornamenti periodici su { -brand-monitor }, { -brand-mozilla } e altri nostri prodotti per la sicurezza.
settings-tab-notifications-marketing-link-label = Vai alle impostazioni email di { -brand-mozilla }
