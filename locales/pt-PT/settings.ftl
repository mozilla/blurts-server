# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-meta-title = { -brand-fx-monitor } – Definições
settings-page-title = Definições do { -product-short-name }

## Breach alert preferences

settings-alert-preferences-title = Preferências de alerta de falhas de segurança
settings-alert-preferences-option-one = Enviar alertas de falhas de segurança para o endereço de e-mail afetado
settings-alert-preferences-option-two = Enviar todos alertas de violações de dados para o endereço de e-mail primário

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-label-primary = { $email } (principal)
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
# Deprecated
settings-delete-email-button = Eliminar endereço de e-mail
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

## Cancel Premium subscription

settings-cancel-premium-subscription-title = Cancelar subscrição do { -brand-premium }
settings-cancel-premium-subscription-info = A sua subscrição irá reverter para uma conta gratuita após o ciclo de faturação atual terminar. Os seus resultados da verificação de proteção de privacidade serão eliminados permanentemente e apenas terá a monitorização de violações de dados para 1 endereço de e-mail.

## Deactivate account

settings-deactivate-account-title = Desativar conta
settings-deactivate-account-info-2 = Pode desativar o { -product-short-name } eliminando a sua { -brand-mozilla-account }.
settings-fxa-link-label-3 = Ir para as definições da { -brand-mozilla-account }

## Delete Monitor account

settings-delete-monitor-free-account-title = Eliminar a conta do { -brand-monitor }
settings-delete-monitor-free-account-description = Isto irá eliminar permanentemente a sua conta { -brand-monitor } e desativar todas as notificações.
settings-delete-monitor-free-account-cta-label = Eliminar conta
settings-delete-monitor-free-account-dialog-title = A sua conta { -brand-monitor } será permanentemente eliminada
settings-delete-monitor-free-account-dialog-lead = Toda a informação da sua conta { -brand-monitor } será eliminada e nós deixaremos de monitorizar para novas violações de dados. Isto não irá eliminar a sua conta { -brand-mozilla }.
settings-delete-monitor-free-account-dialog-cta-label = Eliminar conta
settings-delete-monitor-free-account-dialog-cancel-button-label = Não importa, eu quero voltar
settings-delete-monitor-plus-account-title = Eliminar a conta do { -brand-monitor }
settings-delete-monitor-plus-account-description = Isto irá eliminar permanentemente a sua conta { -brand-monitor } e terminar imediatamente a sua subscrição paga do { -brand-monitor-plus }.
settings-delete-monitor-plus-account-cta-label = Eliminar conta
settings-delete-monitor-plus-account-dialog-title = A sua conta { -brand-monitor } será permanentemente eliminada
settings-delete-monitor-plus-account-dialog-lead-p1 = Toda a informação da sua conta { -brand-monitor } será eliminada e nós não iremos mais monitorizar novas violações de dados ou exposição a agentes de dados. Isto não irá eliminar a sua conta { -brand-mozilla }.
settings-delete-monitor-plus-account-dialog-lead-p2 = A sua subscrição paga irá terminar hoje e não será proporcional ao remanescente da sua subscrição.
settings-delete-monitor-plus-account-dialog-cta-label = Eliminar conta
settings-delete-monitor-plus-account-dialog-cancel-button-label = Não importa, eu quero voltar
settings-delete-monitor-account-confirmation-toast-label = A sua conta { -brand-monitor } foi agora permanentemente eliminada.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Ignorar

## Add email dialog

settings-email-dialog-title = Adicionar outro endereço de e-mail
settings-add-email-text = Adicione um novo endereço de e-mail para ver se o mesmo está envolvido numa violação.
settings-email-input-label = Endereço de e-mail
settings-send-email-verification-button = Enviar ligação de verificação

## Unsubscribe Dialog Survey

settings-unsubscribe-dialog-title = Lamentamos a sua partida. <br />Poderia indicar-nos o motivo?
settings-unsubscribe-dialog-info = A sua experiência é importante para nós. Nós lemos todas as respostas e temos as mesmas em consideração.
settings-unsubscribe-dialog-message-placeholder = O que poderia ter sido melhor?
# $faq_href is the URL for the faq page. HTML tags should not be translated, e.g. `<a>`
settings-unsubscribe-dialog-confirmation = Por favor, note que todos os seus serviços { -brand-monitor-premium } serão <a { $faq_href }>permanentemente eliminados</a> após o final do seu ciclo de faturação atual.
settings-unsubscribe-dialog-continue = Continuar para o cancelamento
settings-unsubscribe-dialog-cancel = Não importa, quero voltar
