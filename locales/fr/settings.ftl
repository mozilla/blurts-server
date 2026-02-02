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

settings-email-verification-callout = Vérification de l’adresse e-mail nécessaire
settings-remove-email-button-label = Supprimer
settings-email-addresses-header = Adresses e-mail
settings-email-addresses-description = { -brand-monitor } vous alertera si ces adresses e-mail apparaissent dans des fuites de données connues.
settings-email-addresses-add-email-button = Ajouter une adresse e-mail
# Variables:
#   $limit (number) - Number of emails that can be added for monitoring.
settings-email-addresses-add-email-indicator-limit = Ajoutez jusqu’à { $limit } adresses e-mail
settings-email-addresses-add-email-resend-button-label = Renvoyer le lien de vérification
input-error-alt = Erreur

## Email address dialog

settings-email-addresses-initial-dialog-header = Ajouter une adresse e-mail
settings-email-addresses-initial-dialog-description = Nous vous enverrons un lien de vérification pour que vous confirmiez que vous souhaitez l’inclure dans une prochaine analyse de { -brand-monitor }.
settings-email-addresses-initial-dialog-add-email-input-label = Saisissez votre adresse e-mail
settings-email-addresses-initial-dialog-add-email-button-label = Envoyer le lien de vérification
# Variables:
#   $email (string) - Email address the confirmation has been sent to.
settings-email-addresses-confirmation-dialog-header = Lien de vérification envoyé à <b>{ $email }</b>
settings-email-addresses-confirmation-dialog-description = Ouvrez le lien pour l’ajouter à ce compte lors des prochaines analyses de { -brand-monitor }.
settings-email-addresses-confirmation-dialog-close-button = Fermer

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

## Settings page redesign

# Label for a navigation bar link to settings for updating the users scan profile info – “update” is used as a verb.
settings-tab-label-update-scan-info = Mettre à jour les informations d’analyse
settings-tab-label-edit-info = Modifier vos informations
settings-tab-label-notifications = Configurer les notifications
settings-tab-label-manage-account = Gérer le compte
settings-tab-subtitle-manage-account = Gérez votre compte { -product-name }.
settings-tab-notifications-marketing-title = Communications marketing
settings-tab-notifications-marketing-text = Des informations régulières sur { -brand-monitor }, { -brand-mozilla } et nos autres logiciels de sécurité.
settings-tab-notifications-marketing-link-label = Afficher les paramètres de communication de { -brand-mozilla }
