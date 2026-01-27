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
-brand-solo-ai = Solo AI

##

error-not-subscribed = Este endereço de email não está subscrito no { -product-name }.
user-add-invalid-email = Email inválido
user-add-too-many-emails = Está a monitorizar o número máximo de endereços de email.
user-add-duplicate-email = Este e-mail já foi adicionado ao { -product-name }.
user-add-verification-email-just-sent = Não é possível enviar outro e-mail de verificação num intervalo de tempo tão curto. Por favor, tente novamente mais tarde.
user-add-unknown-error = Algo correu mal ao adicionar outro endereço de e-mail. Por favor, tente novamente mais tarde.
user-delete-unknown-error = Ocorreu algo de errado ao remover um endereço de e-mail. Por favor, tente novamente mais tarde.
user-verify-token-error = É necessário um código de verificação.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Dados comprometidos:
# Link title
more-about-this-breach = Mais acerca desta brecha
what-data = Que dados foram comprometidos:
delayed-reporting-headline = Porque demorou tanto tempo até esta violação de dados ser reportada?
delayed-reporting-copy =
    Pode demorar meses ou até mesmo anos para as credenciais expostas 
    numa violação de dados aparecerem na dark web. As violações de dados são adicionadas à nossa base de dados 
    assim que são descobertas e validadas.

##

# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Sinopse
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = A { $breachDate }, { $breachTitle } foi comprometido. Assim que a violação de dados foi descoberta e confirmada, foi adicionada à nossa base de dados a { $addedDate }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Brecha adicionada:
# Section headline
rec-section-headline = O que fazer para esta violação de dados
rec-section-subhead = Recomendamos que siga estes passos para manter os seus dados pessoais seguros e proteger a sua identidade digital.
# Section headline
rec-section-headline-no-pw = O que fazer para proteger os seus dados pessoais
rec-section-subhead-no-pw = Embora as palavras-passe não tenham sido expostas nesta violação de dados, ainda existem passos que pode executar para proteger melhor os seus dados pessoais.

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Conta Mozilla
open-in-new-tab-alt = Abrir ligação num novo separador

## Search Engine Optimization

meta-desc-2 = Descubra se fez parte de uma violação de dados com o { -brand-fx-monitor }. Iremos ajudar a compreender o que fazer a seguir e mantemos uma monitorização contínua à procura de quaisquer novas violações de dados.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Iniciar sessão
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

mobile-menu-label = Menu principal
main-nav-button-collapse-label = Colapsar menu
main-nav-button-collapse-tooltip = Colapsar menu
main-nav-button-expand-label = Expandir menu
main-nav-button-expand-tooltip = Expandir menu
main-nav-label = Navegação
main-nav-link-home-label = Início
main-nav-link-dashboard-label = Painel
main-nav-link-settings-label = Definições
main-nav-link-faq-label = Perguntas frequentes
main-nav-link-faq-tooltip = Perguntas frequentes

## User menu

user-menu-trigger-label = Abrir menu do utilizador
user-menu-trigger-tooltip = Perfil
user-menu-manage-fxa-label = Gerir a sua { -brand-mozilla-account }
user-menu-settings-label = Definições
user-menu-settings-tooltip = Configurar a { -brand-mozilla-monitor }
user-menu-help-label = Ajuda e apoio
user-menu-help-tooltip = Obter ajuda na utilização do { -brand-mozilla-monitor }
user-menu-signout-label = Terminar sessão
user-menu-signout-tooltip = Terminar sessão do { -brand-mozilla-monitor }?

## Footer

mozilla = { -brand-mozilla }
terms-of-service = Termos do serviço
privacy-notice = Informação de privacidade
github = { -brand-github }
footer-nav-recent-breaches = Violações de Dados Recentes
footer-external-link-faq-label = Perguntas frequentes
footer-external-link-faq-tooltip = Perguntas frequentes

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Página não encontrada
error-page-error-404-copy = Infelizmente, a página que está à procura já não existe.
error-page-error-404-cta-button = Voltar

## Breach overview page

all-breaches-headline-3 = Base de dados de violações de dados
all-breaches-lead = Monitorizamos todas as violações de dados conhecidas para descobrir se a sua informação pessoal foi comprometida. Aqui está uma lista completa de todas as violações de dados que foram reportadas desde 2007.
search-breaches = Procurar por violações de dados
# the kind of user data exposed to hackers in data breach.
exposed-data = Dados expostos:

## Public breach detail page

find-out-if-2 = Saiba se esteve envolvido nesta falha de segurança
find-out-if-description = Iremos ajudar a perceber muito rapidamente se o seu endereço de e-mail foi exposto nesta violação de dados e a compreender o que fazer a seguir.
breach-detail-cta-signup = Pesquisar por falhas de segurança
loading-accessibility = A carregar
