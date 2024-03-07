# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-meta-title = { -brand-fx-monitor } - Configurações
settings-page-title = Configurações do { -product-short-name }

## Breach alert preferences

settings-alert-preferences-title = Preferências de alerta de vazamentos
settings-alert-preferences-option-one = Enviar alertas de vazamento para os endereços de email afetados
settings-alert-preferences-option-two = Enviar todos os alertas de vazamento para o endereço de email principal

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-label-primary = { $email } (principal)
settings-email-list-title = Endereços de email monitorados
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Sua conta inclui monitoração de até { $limit } email.
       *[other] Sua conta inclui monitoração de até { $limit } emails.
    }
settings-email-verification-callout = Verificação de email é necessária
settings-resend-email-verification-link = Enviar email de verificação novamente
settings-add-email-button = Adicionar endereço de email
# Deprecated
settings-delete-email-button = Excluir endereço de email
settings-remove-email-button-label = Remover
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = Parar de monitorar { $emailAddress }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Aparece em { $breachCount } vazamento conhecido.
       *[other] Aparece em { $breachCount } vazamentos conhecidos.
    }

## Cancel Premium subscription

settings-cancel-premium-subscription-title = Cancelar assinatura do { -brand-premium }
settings-cancel-premium-subscription-info = Sua assinatura será revertida para uma conta gratuita após o término do ciclo de cobrança atual. Os resultados de varredura de proteção de privacidade serão excluídos permanentemente e você só terá monitoramento de vazamento de dados de 1 endereço de email.

## Deactivate account

settings-deactivate-account-title = Desativar conta
settings-deactivate-account-info-2 = Você pode desativar o { -product-short-name } excluindo sua { -brand-mozilla-account }.
settings-fxa-link-label-3 = Ir para as configurações da { -brand-mozilla-account }

## Delete Monitor account

settings-delete-monitor-free-account-title = Excluir conta do { -brand-monitor }
settings-delete-monitor-free-account-description = Sua conta do { -brand-monitor } será excluída permanentemente e todas as notificações serão desativadas.
settings-delete-monitor-free-account-cta-label = Excluir conta
settings-delete-monitor-free-account-dialog-title = Sua conta do { -brand-monitor } será excluída permanentemente
settings-delete-monitor-free-account-dialog-lead = Todas as informações da sua conta do { -brand-monitor } serão excluídas e não iremos mais monitorar novos vazamentos de dados. Isso não exclui sua conta { -brand-mozilla }.
settings-delete-monitor-free-account-dialog-cta-label = Excluir conta
settings-delete-monitor-free-account-dialog-cancel-button-label = Mudei de ideia, voltar
settings-delete-monitor-plus-account-title = Excluir conta do { -brand-monitor }
settings-delete-monitor-plus-account-description = Sua conta do { -brand-monitor } será excluída permanentemente e sua assinatura paga do { -brand-monitor-plus } será encerrada imediatamente.
settings-delete-monitor-plus-account-cta-label = Excluir conta
settings-delete-monitor-plus-account-dialog-title = Sua conta do { -brand-monitor } será excluída permanentemente
settings-delete-monitor-plus-account-dialog-lead-p1 = Todas as informações da sua conta do { -brand-monitor } serão excluídas e não iremos mais monitorar novos vazamentos de dados ou o aparecimento de suas informações em vendedores de dados. Isso não exclui sua conta { -brand-mozilla }.
settings-delete-monitor-plus-account-dialog-lead-p2 = Sua assinatura paga será encerrada hoje e não haverá reembolso proporcional ao restante da assinatura.
settings-delete-monitor-plus-account-dialog-cta-label = Excluir conta
settings-delete-monitor-plus-account-dialog-cancel-button-label = Mudei de ideia, voltar
settings-delete-monitor-account-confirmation-toast-label = Sua conta do { -brand-monitor } foi definitivamente excluída.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Descartar

## Add email dialog

settings-email-dialog-title = Adicionar outro endereço de email
settings-add-email-text = Adicione outro endereço de email para ver se ele foi vítima de um vazamento.
settings-email-input-label = Endereço de email
settings-send-email-verification-button = Enviar link de verificação

## Unsubscribe Dialog Survey

settings-unsubscribe-dialog-title = Lamentamos ver você partir. <br /> Quer nos dizer o motivo?
settings-unsubscribe-dialog-info = Sua experiência de uso é importante para nós. Lemos todas as respostas e as levamos em consideração.
settings-unsubscribe-dialog-message-placeholder = O que poderia ter sido melhor?
# $faq_href is the URL for the faq page. HTML tags should not be translated, e.g. `<a>`
settings-unsubscribe-dialog-confirmation = Observe que todos os seus serviços do { -brand-monitor-premium } serão <a { $faq_href }>excluídos permanentemente</a> após o término do seu ciclo de cobrança atual.
settings-unsubscribe-dialog-continue = Continuar o cancelamento
settings-unsubscribe-dialog-cancel = Mudei de ideia, vamos voltar
