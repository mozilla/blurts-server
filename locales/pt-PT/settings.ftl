# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = Definições do { -product-short-name }

## Breach alert preferences

settings-alert-email-preferences-title = Preferências de e-mail
settings-alert-email-preferences-subtitle = Diga-nos que e-mails gostaria de receber.
settings-alert-preferences-allow-breach-alerts-title = Alertas instantâneos de violações de dados
settings-alert-preferences-allow-breach-alerts-subtitle = Estes alertas são enviados imediatamente assim que uma violação de dados é detetada
settings-alert-preferences-option-one = Enviar alertas de falhas de segurança para o endereço de e-mail afetado
settings-alert-preferences-option-two = Enviar todos alertas de violações de dados para o endereço de e-mail primário

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-list-title = Endereços de e-mail monitorizados
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] A sua conta inclui a monitorização de até { $limit } e-mail.
       *[other] A sua conta inclui a monitorização de até { $limit } e-mails.
    }
settings-email-verification-callout = Verificação de e-mail necessária
settings-resend-email-verification-link = Reenviar e-mail de verificação
settings-add-email-button = Adicionar endereço de e-mail
settings-remove-email-button-label = Remover
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = Parar de monitorizar { $emailAddress }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Aparece em { $breachCount } falha de segurança de dados conhecida.
       *[other] Aparece em { $breachCount } falhas de segurança de dados conhecidas.
    }

## Delete Monitor account

settings-delete-monitor-free-account-title = Eliminar a conta do { -brand-monitor }
settings-delete-monitor-free-account-description = Isto irá eliminar permanentemente a sua conta { -brand-monitor } e desativar todas as notificações.
settings-delete-monitor-free-account-cta-label = Eliminar conta
settings-delete-monitor-free-account-dialog-title = A sua conta { -brand-monitor } será permanentemente eliminada
settings-delete-monitor-free-account-dialog-lead-v2 = Toda a informação da sua conta { -brand-monitor } será eliminada e nós deixaremos de monitorizar para novas violações de dados. Isto não irá eliminar a sua { -brand-mozilla-account }.
settings-delete-monitor-free-account-dialog-cta-label = Eliminar conta
settings-delete-monitor-free-account-dialog-cancel-button-label = Não importa, eu quero voltar
settings-delete-monitor-account-confirmation-toast-label-2 = A sua conta { -brand-monitor } foi agora eliminada.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Ignorar

## Monthly Monitor Report

settings-alert-preferences-allow-monthly-monitor-report-title = Relatório mensal do { -brand-monitor }
settings-alert-preferences-allow-monthly-monitor-report-subtitle = Uma atualização mensal das novas exposições, o que foi corrigido e o que necessita da sua atenção.

## Settings page redesign

settings-tab-label-edit-info = Editar as suas informações
settings-tab-label-notifications = Definir notificações
settings-tab-label-manage-account = Gerir conta
settings-tab-subtitle-manage-account = Gerir a sua conta { -product-name }.
settings-tab-notifications-marketing-title = Comunicações de marketing
settings-tab-notifications-marketing-text = Atualizações periódicas sobre o { -brand-monitor }, a { -brand-mozilla } e os nossos outros produtos de segurança.
settings-tab-notifications-marketing-link-label = Ir para as definições de e-mail da { -brand-mozilla }
