# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-short-name = Monitor
-brand-name = Firefox
-brand-HIBP = Have I Been Pwned
-brand-lockwise = Firefox Lockwise
-brand-firefox = Firefox
-brand-monitor = Monitor
-brand-fx-monitor = Mozilla Monitor
-brand-mozilla = Mozilla
-brand-premium = Premium
-brand-monitor-premium = Monitor Premium
-brand-mozilla-foundation = Fundação Mozilla
-brand-github = GitHub
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay
-brand-mozilla-monitor = Mozilla Monitor
-brand-monitor-plus = Monitor Plus

##

error-not-subscribed = Este endereço de email não está cadastrado no { -product-name }
user-add-invalid-email = Endereço de email inválido
user-add-too-many-emails = Você está monitorando o número máximo de endereços de email.
user-add-duplicate-email = Este email já foi adicionado ao { -product-name }.
user-add-verification-email-just-sent = Outro email de verificação não pode ser enviado tão rapidamente. Tente novamente mais tarde.
user-add-unknown-error = Algo deu errado ao adicionar outro endereço de email. Tente novamente mais tarde.
user-delete-unknown-error = Algo deu errado ao remover um endereço de email. Tente novamente mais tarde.
user-verify-token-error = Token de verificação é necessário.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Dados comprometidos:
# Link title
more-about-this-breach = Mais informações sobre este vazamento
what-data = Que dados foram comprometidos:
delayed-reporting-headline = Por que demorou tanto para relatar este vazamento?
delayed-reporting-copy = Às vezes demora meses ou anos para que credenciais expostas em um vazamento de dados apareça na dark web. Vazamentos são adicionados ao nosso banco de dados assim que são descobertos e confirmados.

##

# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Visão geral
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Em { $breachDate }, { $breachTitle } foi vazado. Uma vez que o vazamento foi descoberto e confirmado, ele foi adicionado à nossa base de dados em { $addedDate }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Informações sobre o vazamento adicionadas em:
# Section headline
rec-section-headline = O que fazer a respeito deste vazamento
rec-section-subhead = Recomendamos que você siga estas etapas para manter suas informações pessoais seguras e proteger sua identidade digital.
# Section headline
rec-section-headline-no-pw = O que fazer para proteger suas informações pessoais
rec-section-subhead-no-pw = Apesar de não ter sido expostas senhas neste vazamento, ainda existem etapas que você pode seguir para proteger melhor suas informações pessoais.

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Conta Mozilla
open-in-new-tab-alt = Abrir link em nova aba

## Search Engine Optimization

meta-desc-2 = Descubra se você foi vítima de um vazamento de dados com o { -brand-fx-monitor }. Ajudaremos você a entender o que fazer a seguir e iremos monitorar continuamente novos vazamentos.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Entrar
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

mobile-menu-label = Menu principal
main-nav-button-collapse-label = Recolher menu
main-nav-button-collapse-tooltip = Recolher menu
main-nav-button-expand-label = Expandir menu
main-nav-button-expand-tooltip = Expandir menu
main-nav-label = Navegação
main-nav-link-home-label = Início
main-nav-link-dashboard-label = Painel
main-nav-link-settings-label = Configurações
main-nav-link-faq-label = Dúvidas frequentes
main-nav-link-faq-tooltip = Dúvidas frequentes

## User menu

user-menu-trigger-label = Abrir menu do usuário
user-menu-trigger-tooltip = Perfil
user-menu-manage-fxa-label = Gerenciar sua { -brand-mozilla-account }
user-menu-settings-label = Configurações
user-menu-settings-tooltip = Configurar o { -brand-mozilla-monitor }
user-menu-help-label = Ajuda e suporte
user-menu-help-tooltip = Obtenha ajuda em como usar o { -brand-mozilla-monitor }
user-menu-signout-label = Sair
user-menu-signout-tooltip = Sair do { -brand-mozilla-monitor }

## Footer

mozilla = { -brand-mozilla }
terms-of-service = Termos do serviço
privacy-notice = Aviso de privacidade
github = { -brand-github }
footer-nav-recent-breaches = Vazamentos recentes de dados
footer-external-link-faq-label = Dúvidas frequentes
footer-external-link-faq-tooltip = Dúvidas frequentes

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Página não encontrada
error-page-error-404-copy = Desculpe, a página que procura não existe mais.
error-page-error-404-cta-button = Voltar

## Breach overview page

all-breaches-headline-3 = Base de dados de vazamentos de dados
all-breaches-lead = Monitoramos todos os vazamentos de dados conhecidos para descobrir se suas informações pessoais foram comprometidas. Veja uma lista completa de todos os vazamentos relatados desde 2007.
search-breaches = Pesquisar vazamentos
# the kind of user data exposed to hackers in data breach.
exposed-data = Dados expostos:

## Public breach detail page

find-out-if-2 = Descubra se você foi vítima deste vazamento
find-out-if-description = Ajudaremos você a ver rapidamente se seu endereço de email foi exposto neste vazamento e saber o que fazer a seguir.
breach-detail-cta-signup = Verificar se há vazamentos
loading-accessibility = Carregando
