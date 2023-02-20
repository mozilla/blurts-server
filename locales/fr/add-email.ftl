# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = Ajouter une autre adresse e-mail
# $total is the number of emails a user is allowed to add
add-email-your-account-includes =
    { $total ->
        [1] Votre compte permet de surveiller jusqu’à { $total } adresse e-mail. Ajoutez une nouvelle adresse e-mail pour vérifier si elle est concernée par une fuite de données.
       *[other] Votre compte permet de surveiller jusqu’à { $total } adresses e-mail. Ajoutez une nouvelle adresse e-mail pour vérifier si elle est concernée par une fuite de données.
    }
add-email-address-input-label = Adresse e-mail
add-email-send-verification-button = Envoyer le lien de vérification
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
add-email-verify-the-link = Vérifiez le lien envoyé à { $email } pour l’ajouter à { -brand-fx-monitor }. Gérez toutes les adresses e-mail depuis les <a { $settings-href }>paramètres</a>.
