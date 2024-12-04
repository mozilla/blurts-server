# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = Paramètres de { -product-short-name }

## Breach alert preferences

settings-alert-email-preferences-title = Préférences de communication
settings-alert-email-preferences-subtitle = Dites-nous quels e-mails vous souhaitez recevoir.
settings-alert-preferences-allow-breach-alerts-title = Alertes instantanées de fuites de données
settings-alert-preferences-allow-breach-alerts-subtitle = Ces alertes sont envoyées immédiatement dès qu’une fuite de données est détectée
settings-alert-preferences-option-one = Envoyer les alertes à l’adresse e-mail concernée
settings-alert-preferences-option-two = Envoyer toutes les alertes de fuites de données à l’adresse e-mail principale

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-list-title = Adresses e-mail surveillées
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Votre compte permet de surveiller jusqu’à { $limit } adresse e-mail.
       *[other] Votre compte permet de surveiller jusqu’à { $limit } adresses e-mail.
    }
settings-email-verification-callout = Vérification de l’adresse e-mail nécessaire
settings-resend-email-verification-link = Renvoyer l’e-mail de vérification
settings-add-email-button = Ajouter une adresse e-mail
settings-remove-email-button-label = Supprimer
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = Arrêter de surveiller { $emailAddress }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Apparaît dans { $breachCount } fuite de données connue.
       *[other] Apparaît dans { $breachCount } fuites de données connues.
    }

## Delete Monitor account

settings-delete-monitor-free-account-title = Supprimer le compte { -brand-monitor }
settings-delete-monitor-free-account-description = Cette action supprimera définitivement votre compte { -brand-monitor } et désactivera toutes les notifications.
settings-delete-monitor-free-account-cta-label = Supprimer mon compte
settings-delete-monitor-free-account-dialog-title = Votre compte { -brand-monitor } sera supprimé définitivement
settings-delete-monitor-free-account-dialog-lead-v2 = Toutes les informations de votre compte { -brand-monitor } seront supprimées et nous ne surveillerons plus aucune nouvelle fuite de données. Cette action ne supprimera pas votre { -brand-mozilla-account }.
settings-delete-monitor-free-account-dialog-cta-label = Supprimer mon compte
settings-delete-monitor-free-account-dialog-cancel-button-label = J’ai changé d’avis, revenir en arrière
settings-delete-monitor-account-confirmation-toast-label-2 = Votre compte { -brand-monitor } a été supprimé.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Fermer

## Monthly Monitor Report

settings-alert-preferences-allow-monthly-monitor-report-title = Rapport { -brand-monitor } mensuel
settings-alert-preferences-allow-monthly-monitor-report-subtitle = Un récapitulatif mensuel des nouvelles fuites de données, celles qui ont été résolues et celles qui nécessitent votre attention.

## Settings page redesign

settings-tab-label-edit-info = Modifier vos informations
settings-tab-label-notifications = Configurer les notifications
settings-tab-label-manage-account = Gérer le compte
settings-tab-subtitle-manage-account = Gérez votre compte { -product-name }.
settings-tab-notifications-marketing-title = Communications marketing
settings-tab-notifications-marketing-text = Des informations régulières sur { -brand-monitor }, { -brand-mozilla } et nos autres logiciels de sécurité.
settings-tab-notifications-marketing-link-label = Afficher les paramètres de communication de { -brand-mozilla }
