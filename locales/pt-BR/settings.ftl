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
settings-delete-email-button = Excluir endereço de email
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (numer) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Aparece em { $breachCount } vazamento conhecido.
       *[other] Aparece em { $breachCount } vazamentos conhecidos.
    }

## Cancel Premium subscription

settings-cancel-premium-subscription-title = Cancelar assinatura do { -brand-premium }
settings-cancel-premium-subscription-info = Sua assinatura será revertida para uma conta gratuita após o término do ciclo de cobrança atual. Os resultados de varredura de proteção de privacidade serão excluídos permanentemente e você só terá monitoramento de vazamento de dados de 1 endereço de email.
settings-cancel-premium-subscription-link-label = Cancelar da sua { -brand-fx-account }

## Deactivate account

settings-deactivate-account-title = Desativar conta
settings-deactivate-account-info = Você pode desativar o { -product-short-name } excluindo sua { -brand-fx-account }.
settings-fxa-link-label = Ir para as configurações do { -brand-firefox }

## Add email dialog

settings-email-dialog-title = Adicionar outro endereço de email
settings-add-email-text = Adicione outro endereço de email para ver se ele foi vítima de um vazamento.
settings-email-input-label = Endereço de email
settings-send-email-verification-button = Enviar link de verificação

## Unsubscribe Dialog Survey

