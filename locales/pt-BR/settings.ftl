# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = Configurações do { -product-short-name }

## Breach alert preferences

settings-alert-email-preferences-title = Preferências de email
settings-alert-email-preferences-subtitle = Diga-nos quais emails você quer receber.
settings-alert-preferences-allow-breach-alerts-title = Alertas imediatos de vazamentos
settings-alert-preferences-allow-breach-alerts-subtitle = Esses alertas são enviados imediatamente, assim que um vazamento de dados é detectado
settings-alert-preferences-option-one = Enviar alertas de vazamento para os endereços de email afetados
settings-alert-preferences-option-two = Enviar todos os alertas de vazamento para o endereço de email principal

## Monitored email addresses

# Variables:
#   $email (string) - Email address
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

## Delete Monitor account

settings-delete-monitor-free-account-title = Excluir conta do { -brand-monitor }
settings-delete-monitor-free-account-description = Sua conta do { -brand-monitor } será excluída permanentemente e todas as notificações serão desativadas.
settings-delete-monitor-free-account-cta-label = Excluir conta
settings-delete-monitor-free-account-dialog-title = Sua conta do { -brand-monitor } será excluída permanentemente
settings-delete-monitor-free-account-dialog-lead-v2 = Todas as informações da sua conta do { -brand-monitor } serão excluídas e não iremos mais monitorar novos vazamentos de dados. Isso não exclui sua { -brand-mozilla-account }.
settings-delete-monitor-free-account-dialog-cta-label = Excluir conta
settings-delete-monitor-free-account-dialog-cancel-button-label = Mudei de ideia, voltar
settings-delete-monitor-account-confirmation-toast-label-2 = Sua conta do { -brand-monitor } foi excluída.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Descartar

## Monthly Monitor Report

settings-alert-preferences-allow-monthly-monitor-report-title = Relatório mensal do { -brand-monitor }
settings-alert-preferences-allow-monthly-monitor-report-subtitle = Uma atualização mensal de novas exposições, o que foi resolvido e o que precisa da sua atenção.

## Settings page redesign

settings-tab-label-edit-info = Editar suas informações
settings-tab-label-notifications = Definir notificações
settings-tab-label-manage-account = Gerenciar conta
settings-tab-subtitle-manage-account = Gerenciar sua conta { -product-name }.
settings-tab-notifications-marketing-title = Comunicações de marketing
settings-tab-notifications-marketing-text = Novidades periódicas sobre { -brand-monitor }, { -brand-mozilla } e nossos outros produtos de segurança.
settings-tab-notifications-marketing-link-label = Ir para configurações de email da { -brand-mozilla }
