# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-meta-title = { -brand-fx-monitor } — Paramètres
settings-page-title = Paramètres de { -product-short-name }

## Breach alert preferences

settings-alert-preferences-title = Préférences des alertes de fuites de données
settings-alert-preferences-option-one = Envoyer les alertes à l’adresse e-mail concernée
settings-alert-preferences-option-two = Envoyer toutes les alertes de fuites de données à l’adresse e-mail principale

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-label-primary = { $email } (principale)
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
# Deprecated
settings-delete-email-button = Supprimer l’adresse e-mail
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

## Cancel Premium subscription

settings-cancel-premium-subscription-title = Annuler l’abonnement à { -brand-premium }
settings-cancel-premium-subscription-info = Votre abonnement redeviendra un compte gratuit une fois le cycle de facturation en cours terminé. Les résultats de vos scans de protection de la vie privée seront supprimés définitivement, et vous ne pourrez surveiller les fuites de données que pour une seule adresse e-mail.

## Deactivate account

settings-deactivate-account-title = Désactiver le compte
settings-deactivate-account-info-2 = Vous pouvez désactiver { -product-short-name } en supprimant votre { -brand-mozilla-account }.
settings-fxa-link-label-3 = Ouvrir les paramètres du { -brand-mozilla-account }

## Delete Monitor account

settings-delete-monitor-free-account-title = Supprimer le compte { -brand-monitor }
settings-delete-monitor-free-account-description = Cette action supprimera définitivement votre compte { -brand-monitor } et désactivera toutes les notifications.
settings-delete-monitor-free-account-cta-label = Supprimer mon compte
settings-delete-monitor-free-account-dialog-title = Votre compte { -brand-monitor } sera supprimé définitivement
settings-delete-monitor-free-account-dialog-lead = Toutes les informations de votre compte { -brand-monitor } seront supprimées et nous ne surveillerons plus aucune nouvelle fuite de données. Cette action ne supprimera pas votre compte { -brand-mozilla }.
settings-delete-monitor-free-account-dialog-cta-label = Supprimer mon compte
settings-delete-monitor-free-account-dialog-cancel-button-label = J’ai changé d’avis, revenir en arrière
settings-delete-monitor-plus-account-title = Supprimer le compte { -brand-monitor }
settings-delete-monitor-plus-account-description = Cette action supprimera définitivement votre compte { -brand-monitor } et mettra fin immédiatement à votre abonnement payant à { -brand-monitor-plus }.
settings-delete-monitor-plus-account-cta-label = Supprimer mon compte
settings-delete-monitor-plus-account-dialog-title = Votre compte { -brand-monitor } sera supprimé définitivement
settings-delete-monitor-plus-account-dialog-lead-p1 = Toutes les informations de votre compte { -brand-monitor } seront supprimées, et nous ne surveillerons plus les nouvelles fuites de données ni l’apparition de vos informations chez les courtiers en données. Cette action ne supprimera pas votre compte { -brand-mozilla }.
settings-delete-monitor-plus-account-dialog-lead-p2 = Votre abonnement payant se terminera aujourd’hui et vous ne serez pas facturé·e au prorata pour le reste de votre abonnement.
settings-delete-monitor-plus-account-dialog-cta-label = Supprimer mon compte
settings-delete-monitor-plus-account-dialog-cancel-button-label = J’ai changé d’avis, revenir en arrière
settings-delete-monitor-account-confirmation-toast-label = Votre compte { -brand-monitor } a été supprimé définitivement.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Fermer

## Add email dialog

settings-email-dialog-title = Ajouter une autre adresse e-mail
settings-add-email-text = Ajoutez une nouvelle adresse e-mail pour vérifier si elle est concernée par une fuite de données.
settings-email-input-label = Adresse e-mail
settings-send-email-verification-button = Envoyer le lien de vérification

## Unsubscribe Dialog Survey

settings-unsubscribe-dialog-title = C’est triste de vous voir partir… <br /> Pourriez-vous nous dire pourquoi vous vous désabonnez ?
settings-unsubscribe-dialog-info = Votre expérience est importante pour nous. Nous lisons chaque réponse et la prenons en considération.
settings-unsubscribe-dialog-message-placeholder = Qu’aurions-nous pu faire de mieux ?
# $faq_href is the URL for the faq page. HTML tags should not be translated, e.g. `<a>`
settings-unsubscribe-dialog-confirmation = Veuillez noter que tous vos services { -brand-monitor-premium } seront <a { $faq_href }>supprimés définitivement</a> à la fin de votre cycle de facturation actuel.
settings-unsubscribe-dialog-continue = Continuer vers l’annulation
settings-unsubscribe-dialog-cancel = J’ai changé d’avis, revenir en arrière
