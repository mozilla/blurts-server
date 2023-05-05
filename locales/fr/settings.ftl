# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-meta-title = { -brand-fx-monitor } - Paramètres
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
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (numer) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Apparaît dans { $breachCount } fuite de données connue.
       *[other] Apparaît dans { $breachCount } fuites de données connues.
    }

## Deactivate account

settings-deactivate-account-title = Désactiver le compte
settings-deactivate-account-info = Vous pouvez désactiver { -product-short-name } en supprimant votre { -brand-fx-account }.
settings-fxa-link-label = Ouvrir les paramètres de { -brand-firefox }

## Add email dialog

settings-email-dialog-title = Ajouter une autre adresse e-mail
settings-add-email-text = Ajoutez une nouvelle adresse e-mail pour vérifier si elle est concernée par une fuite de données.
settings-email-input-label = Adresse e-mail
settings-send-email-verification-button = Envoyer le lien de vérification
