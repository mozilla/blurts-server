# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-logo-alt = { -brand-mozilla-monitor }
email-header-button-sign-in = Entrar

## Email footers

email-footer-support-heading = Dúvidas sobre o { -brand-mozilla-monitor }?
email-footer-support-content = Visite nosso <support-link>centro de suporte</support-link> para obter ajuda
email-footer-trigger-transactional = Você recebeu este email por ter assinatura do { -brand-mozilla-monitor }.
email-footer-source-hibp = Dados de vazamentos fornecidos por <hibp-link>{ -brand-HIBP }</hibp-link>
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = Privacidade
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# A link to legal information about mozilla products.
legal = Legal
# Button text
verify-email-cta = Verificar email
# Headline of verification email
email-link-expires = Este link expira em 24 horas

##

# Subject line of email
email-subject-found-breaches = O { -product-name } encontrou informações suas nesses vazamentos
# Subject line of email
email-subject-no-breaches = O { -product-name } não encontrou nenhum vazamento conhecido
# Subject line of email
email-subject-verify = Confirme seu email no { -product-name }
fxm-warns-you-no-breaches =
    O { -product-name } avisa sobre vazamentos de dados que envolvem suas informações pessoais. 
    Até agora, nenhum vazamento foi encontrado. Enviaremos a você um alerta caso seu endereço de email apareça em um novo vazamento.
email-breach-alert-blurb =
    O { -product-name } avisa sobre vazamentos de dados que envolvem suas informações pessoais. 
    Acabamos de receber detalhes sobre um vazamento de dados de outra empresa.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Dados de vazamentos fornecidos por <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Verification email

email-verify-heading = Proteja seus dados, começando agora mesmo
email-verify-subhead = Verifique seu email para começar a proteger seus dados após um vazamento.
email-verify-simply-click = Basta clicar no link abaixo para concluir a verificação da sua conta.

## Breach report

email-breach-summary = Aqui está o resumo de vazamento de dados
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = Os resultados da pesquisa da sua conta { $email-address } detectaram que seu email pode ter sido exposto. Recomendamos você agir agora para resolver este vazamento.
email-dashboard-cta = Ir para o painel

## Breach alert email

email-breach-alert-all-subject = Detectado novo vazamento de dados
email-breach-alert-all-preview = Orientamos você nas etapas para resolver.
email-breach-alert-all-hero-heading = Você foi vítima de um novo vazamento de dados
email-breach-alert-all-hero-subheading = Não se preocupe, podemos ajudar a resolver esta exposição
email-breach-alert-all-lead = O { -brand-mozilla-monitor } descobriu o seguinte vazamento de dados que inclui suas informações pessoais:
email-breach-alert-all-source-title = Origem do vazamento:
email-breach-alert-all-data-points-title = Seus dados expostos:
email-breach-alert-all-next-steps-lead = Orientaremos você, passo a passo, sobre como resolver este vazamento de dados.
email-breach-alert-all-next-steps-cta-label = Vamos começar
email-breach-alert-all-next-steps-button-dashboard = Acesse o painel do usuário
