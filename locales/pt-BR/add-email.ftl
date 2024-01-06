# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = Adicionar outro endereço de email
close-dialog-alt = Fechar diálogo
# $total is the number of emails a user is allowed to add
add-email-your-account-includes =
    { $total ->
        [one] Sua conta inclui monitoração de { $total } endereço de email. Adicione outro endereço de email para ver se ele foi vítima de um vazamento.
       *[other] Sua conta inclui monitoração de até { $total } endereços de email. Adicione outro endereço de email para ver se ele foi vítima de um vazamento.
    }
add-email-address-input-label = Endereço de email
add-email-send-verification-button = Enviar link de verificação
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
# This string will be deprecated when the new Plus plan is live.
add-email-verify-the-link = Verifique o link enviado para { $email } para adicionar ao { -brand-fx-monitor }. Gerencie todos os endereços de email nas <a { $settings-href }>configurações</a>.
# Variables:
#   $email (string) - An email address submitted by the user for monitoring, e.g. `example@example.com`
add-email-verify-the-link-2 = Verifique o link enviado para <b>{ $email }</b> para adicionar ao { -brand-mozilla-monitor }.
