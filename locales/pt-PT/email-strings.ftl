# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-button-sign-in = Iniciar sessão

## Email footers

email-footer-support-heading = Questões sobre o { -brand-mozilla-monitor }?
email-footer-support-content = Visite o nosso <support-link>Centro de Apoio</support-link> para ajuda
email-footer-trigger-transactional = Está a receber este e-mail como subscritor do { -brand-mozilla-monitor }.
email-footer-reason-subscriber = Está a receber este e-mail automático como subscritor de { -brand-mozilla-monitor }. Se o recebeu por erro, nenhuma ação é necessária. Para mais informação, por favor visite o <support-link>Apoio do { -brand-mozilla }</support-link>.
email-footer-reason-subscriber-one-time = Recebeu este e-mail automático porque está subscrito a { -brand-monitor-plus }. Não irá receber mais e-mails como este. Para mais informação, por favor visite o <support-link>Apoio do { -brand-mozilla }</support-link>.
# Variables:
#    $support_link (string) - The URL the user can visit for support, e.g. "https://support.mozilla.org"
email-footer-support-content-plain = Visite o nosso Centro de Apoio para obter ajuda: { $support_link }
# Variables:
#   $hibp_link (string) - URL to Have I Been Pwned, e.g. "https://haveibeenpwned.com".
email-footer-source-hibp-plain = Dados de brechas fornecidos por { -brand-HIBP }: { $hibp_link }
email-footer-source-hibp = Dados de violação de dados fornecidos por <hibp-link>{ -brand-HIBP }</hibp-link>
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = Privacidade
email-unsubscribe-link = <link_to_unsub>Cancelar subscrição</link_to_unsub>
# Variables:
#   $unsub_link (string) - URL to the unsubscribe page, e.g. "https://monitor.mozilla.org/unsubscribe/...".
email-unsubscribe-link-plain = Anular a subscrição: { $unsub_link }
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# Button text
verify-email-cta = Confirmar e-mail
# Headline of verification email
email-link-expires = Esta ligação expira em 24 horas

##

# Subject line of email
email-subject-found-breaches = { -product-name } encontrou a sua informação numa destas violações de dados
# Subject line of email
email-subject-no-breaches = { -product-name } não encontrou violações de dados conhecidas
# Subject line of email
email-subject-verify = Confirme o seu e-mail para { -product-name }
fxm-warns-you-no-breaches =
    O { -product-name } alerta sobre violações de dados que envolvam os seus dados pessoais. 
    Até ao momento, não foram encontradas violações de dados. Nós iremos enviar-lhe um alerta se o seu endereço de e-mail aparecer numa nova violação de dados.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Dados de violação de dados fornecidos por <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Verification email

email-verify-heading = Proteja os seus dados, a partir de agora
email-verify-simply-click = Basta clicar na ligação abaixo para concluir a confirmação da sua conta.

## Breach report

email-breach-summary = Eis o resumo da sua violação de dados
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = Os resultados da pesquisa para a sua conta { $email-address } detetaram que o seu e-mail pode ter sido exposto. Recomendamos que atue imediatamente para resolver esta violação de dados.
email-dashboard-cta = Ir para o painel

## Breach alert email

email-breach-alert-all-subject = Nova violação de dados detetada
email-breach-alert-all-preview = Iremos apoiar, passo a passo, na resolução da mesma.
email-breach-alert-all-hero-heading = Esteve numa nova violação de dados
email-breach-alert-all-hero-subheading = Não se preocupe, nós podemos ajudar a resolver esta exposição
email-breach-alert-all-lead = O { -brand-mozilla-monitor } descobriu a seguinte violação de dados que inclui a sua informação pessoal:
email-breach-alert-all-source-title = Fonte da violação de dados
email-breach-alert-all-data-points-title = Os seus dados expostos:
email-breach-alert-all-next-steps-lead = Iremos apoiar, passo a passo, na forma para resolver esta violação de dados.
email-breach-alert-all-next-steps-cta-label = Vamos começar
email-breach-alert-all-next-steps-button-dashboard = Ir para o painel

## Breach alert redesigned strings

# $company-name is the name of the company/site that was breached.
email-breach-alert-all-hero-heading-1 = { $company-name } detalhes da violação de dados
# $company-name is the name of the company/site that was breached.
# $breach-date is the date of the breach.
email-breach-alert-all-lead-1 = { -brand-mozilla-monitor } encontrou a sua informação numa brecha de dados { $company-name } em { $breach-date }. Está a receber este alerta porque subscreveu às <link_to_settings>notificações de violação de dados</link_to_settings>.
email-breach-alert-all-source-title-1 = Detalhes da violação de dados
email-breach-alert-company = Empresa:
email-breach-alert-date-of-breach = Data da violação de dados
email-breach-alert-info-exposed = A sua informação exposta:
email-breach-alert-next-steps = Passos seguintes
email-breach-alert-next-steps-description = <sign_in_link>Inicie sessão</sign_in_link> no seu painel { -brand-mozilla-monitor }. Iremos guiar-lhe através dos passos necessários para o resolver.
email-breach-alert-all-next-steps-button-resolve-breach-on-dashboard = Resolver violação de dados no painel
email-breach-alert-faqs-title = Perguntas frequentes
email-breach-alert-faq-qn-1 = Porque é que estou a receber isto?
email-breach-alert-faq-ans-1 = Inscreveu-se para alertas de violações de dados. <link_to_settings>Atualize as suas preferências</link_to_settings> a qualquer momento nas definições.
email-breach-alert-faq-qn-2 = Porque é que não reconheço esta empresa ou site?
email-breach-alert-faq-ans-2 = Pode ter alterado a propriedade ou o nome, envolver uma conta antiga ou uma que foi criada para si, ou vir de uma lista comprada de informação pessoal exposta.
email-breach-alert-faq-qn-3 = O que é um alerta de violação de dados?
email-breach-alert-faq-ans-3 = Uma notificação que o { -brand-mozilla-monitor } envia quando uma informação pessoal que está a monitorizar é exposta, furtada ou copiada sem permissão.
email-breach-alert-faq-qn-4 = O que é { -brand-mozilla-monitor }?
email-breach-alert-faq-ans-4 = Um serviço gratuito de notificação de violações de dados que avisa se as suas contas online estiveram envolvidas numa violação de dados.
