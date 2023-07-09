# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = Adicionar outro endereço de e-mail
close-dialog-alt = Fechar janela
# $total is the number of emails a user is allowed to add
add-email-your-account-includes =
    { $total ->
        [one] A sua conta inclui a monitorização de { $total } endereço de e-mail. Adicione um novo endereço de e-mail para ver se ele está envolvido numa violação.
       *[other] A sua conta inclui a monitorização de até { $total } endereços de e-mail. Adicione um novo endereço de e-mail para ver se ele está envolvido numa violação.
    }
add-email-address-input-label = Endereço de e-mail
add-email-send-verification-button = Enviar ligação de verificação
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
add-email-verify-the-link = Verifique a ligação enviada para { $email } para a adicionar ao { -brand-fx-monitor }. Controle todos os endereços de e-mail nas <a { $settings-href }>Definições</a>.
