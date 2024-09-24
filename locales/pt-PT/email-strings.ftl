# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-logo-alt = { -brand-mozilla-monitor }
email-header-button-sign-in = Iniciar sessão

## Email footers

email-footer-support-heading = Questões sobre o { -brand-mozilla-monitor }?
email-footer-support-content = Visite o nosso <support-link>Centro de Apoio</support-link> para ajuda
email-footer-trigger-transactional = Está a receber este e-mail como subscritor do { -brand-mozilla-monitor }.
email-footer-source-hibp = Dados de violação de dados fornecidos por <hibp-link>{ -brand-HIBP }</hibp-link>
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = Privacidade
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# A link to legal information about mozilla products.
legal = Informação legal
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
email-breach-alert-blurb =
    O { -product-name } alerta sobre violações de dados que envolvam os seus dados pessoais. 
    Acabámos de receber detalhes sobre uma violação de dados de outra empresa.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Dados de violação de dados fornecidos por <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Verification email

email-verify-heading = Proteja os seus dados, a partir de agora
email-verify-subhead = Confirme o seu e-mail para começar a proteger os seus dados após uma violação de dados.
email-verify-simply-click = Basta clicar na ligação abaixo para concluir a confirmação da sua conta.

## Breach report

email-breach-summary = Eis o resumo da sua violação de dados
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = Os resultados da pesquisa para a sua conta { $email-address } detetaram que o seu e-mail pode ter sido exposto. Recomendamos que atue imediatamente para resolver esta violação de dados.
# Deprecated after the redesigned breach alert email is launched
# Variables:
#   $email-address (string) - Email address
email-breach-detected-2 = Os resultados da pesquisa para a sua conta <b>{ $email-address }</b> detetaram que o seu e-mail pode ter sido exposto. Nós recomendamos que atue imediatamente para resolver esta violação.
email-dashboard-cta = Ir para o painel

## Breach alert

# Deprecated after the redesigned breach alert email is launched
email-spotted-new-breach = Detetámos uma nova violação de dados

## Redesigned breach alert email

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
