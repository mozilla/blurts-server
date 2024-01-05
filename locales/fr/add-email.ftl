# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = Ajouter une autre adresse e-mail
close-dialog-alt = Fermer la boîte de dialogue
# $total is the number of emails a user is allowed to add
add-email-your-account-includes =
    { $total ->
        [1] Votre compte permet de surveiller jusqu’à { $total } adresse e-mail. Ajoutez une nouvelle adresse e-mail pour vérifier si elle est concernée par une fuite de données.
       *[other] Votre compte permet de surveiller jusqu’à { $total } adresses e-mail. Ajoutez une nouvelle adresse e-mail pour vérifier si elle est concernée par une fuite de données.
    }
add-email-address-input-label = Adresse e-mail
add-email-send-verification-button = Envoyer le lien de vérification
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
# This string will be deprecated when the new Plus plan is live.
add-email-verify-the-link = Vérifiez le lien envoyé à { $email } pour l’ajouter à { -brand-fx-monitor }. Gérez toutes les adresses e-mail depuis les <a { $settings-href }>paramètres</a>.
# Variables:
#   $email (string) - An email address submitted by the user for monitoring, e.g. `example@example.com`
add-email-verify-the-link-2 = Vérifiez le lien envoyé à <b>{ $email }</b> pour l’ajouter à { -brand-mozilla-monitor }.
