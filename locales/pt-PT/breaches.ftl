# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

breach-meta-title = { -brand-fx-monitor } - Painel
breach-all-meta-title = { -brand-fx-monitor } - Todas as violações de dados
breach-all-meta-social-title = Todas as violações detetadas por { -brand-fx-monitor }
breach-all-meta-social-description = Navegue na lista completa de violações de dados conhecidas detetadas pelo { -brand-fx-monitor } e descubra se a sua informação foi exposta.
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-title = { -brand-fx-monitor } - { $company } Violação de Dados
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-social-title = Você foi afetado pela violação de dados de { $company }?
breach-detail-meta-social-description = Utilize o { -brand-fx-monitor } para descobrir se a sua informação pessoal foi exposta nesta violação de dados e perceber o que fazer a seguir.
breach-scan-meta-title = { -brand-fx-monitor } - Resultados da violação
breach-scan-meta-social-title = { -brand-fx-monitor }, resultados da violação
breach-scan-meta-social-description = Inicie sessão no { -brand-fx-monitor } para resolver violações de dados e obter monitorização contínua para quaisquer novas violações de dados conhecidas.

## Breaches header

# Data classes pie chart title
breach-chart-title = Dados violados
# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = Violações de dados para { $email-select }
# $count is the number of emails a user has added out of $total allowed
emails-monitored =
    { $total ->
        [one] { $count } de { $total } e-mail monitorizado
       *[other] { $count } de { $total } e-mails monitorizados
    }
# link to Settings page where user can add/remove emails and set message preferences
manage-emails-link = Gerir e-mails

## Breaches resolved filter

filter-label-unresolved = Violações não resolvidas
filter-label-resolved = Violações resolvidas

## Breaches table

column-company = EMPRESA
column-breached-data = DADOS VIOLADOS
column-detected = DETETADA
# “Resolved” is shown next to a breach if all recommended actions in response to the breach have been taken.
column-status-badge-resolved = Resolvida
# “Active” is shown next to a breach if the user still has at least one recommended action to perform in response to the breach.
column-status-badge-active = Ativa
breaches-resolve-heading = Resolver esta falha de segurança:
breaches-none-headline = Não foram encontradas violações
# Variables:
#   $email (String) - An email address that we did not find breaches for, e.g. `someone@example.com`
breaches-none-copy = Boas notícias! Não foram reportadas violações de dados conhecidas para { $email }. Iremos continuar a monitorizar este e-mail e iremos informar se ocorrerem novas violações de dados.
breaches-none-cta-blurb = Gostaria de monitorizar outro e-mail?
breaches-none-cta-button = Adicionar endereço de e-mail
breaches-all-resolved-headline = Todas as violações resolvidas
# Variables:
#   $email (String) - An email address for which all breaches have been resolved, e.g. `someone@example.com`
breaches-all-resolved-copy = Boa! Resolveu todas as violações de dados para { $email }. Iremos continuar a monitorizar este e-mail e iremos informar se ocorrerem novas violações de dados.
breaches-all-resolved-cta-blurb = Gostaria de monitorizar outro e-mail?
breaches-all-resolved-cta-button = Adicionar endereço de e-mail
# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-description = A { $breachDate }, { $companyName } foi comprometido. Assim que a violação de dados foi descoberta e confirmada, foi adicionada à nossa base de dados a { $addedDate }. Esta violação de dados incluiu: { $dataClasses }

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = Gestor de palavras-passe do { -brand-firefox }
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }

## Prompts the user for changes when there is a breach detected of password

breach-checklist-pw-header-text = Atualize as suas palavras-passe e ative a autenticação de dois fatores (2FA).
# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-pw-body-text = Na maioria dos casos, nós recomendamos que altere a sua palavra-passe no site da empresa. Mas <b>o site pode estar offline ou conter conteúdo malicioso</b>, por isso tenha cuidado ao <breached-company-link>visitar o site</breached-company-link>. Para uma proteção adicional, certifique-se que está a utilizar palavras-passe únicas para todas as contas, para que quaisquer palavras-passe divulgadas não possam ser utilizadas para aceder a outras contas. { $passwordManagerLink } pode ajudar-lhe a acompanhar com segurança todas as suas palavras-passe.

## Prompts the user for changes when there is a breach detected of email

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-email-header-2 = Proteja o seu e-mail com um serviço de máscaras de e-mail como o { $firefoxRelayLink }.
breach-checklist-email-body = Isto pode ocultar o seu endereço de e-mail real enquanto reencaminha mensagens para a sua caixa de entrada real.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information.
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Monitorize o seu informações de crédito para contas, empréstimos ou cartões de crédito que não reconheça.
# A security freeze prevents prospective creditors from accessing your credit file.
# Creditors typically won't offer you credit if they can't access your credit reporting file,
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
# This will only be shown to users in the US.
# Variables:
#   $equifaxLink (string) - a link to the Equifax website
#   $experianLink (string) - a link to the Experian website
#   $transUnionLink (string) - a link to the TransUnion website
breach-checklist-ssn-body-2 = Pode também considerar congelar o seu crédito em { $equifaxLink }, { $experianLink } e { $transUnionLink } para impedir que os burlões abram novas contas em seu nome. É gratuito e não afeta a sua pontuação de crédito.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Reporte esta violação de dados ao emissor do seu cartão de crédito e solicite um novo cartão com um novo número.
breach-checklist-cc-body = Deve também rever os extratos do seu cartão de crédito por cobranças não reconhecidas.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Notifique imediatamente o seu banco que o número da sua conta foi comprometido.
breach-checklist-bank-body = Fazer isto mais rapidamente pode fornecer mais proteções legais para ajudar a recuperar quaisquer perdas. Também poderá querer verificar as suas contas para identificar quaisquer cobranças não reconhecidas.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Notifique o emissor do seu cartão e altere o seu PIN imediatamente.
breach-checklist-pin-body = Certifique-se que o seu novo PIN, ou qualquer outro PIN, não inclui números que possam ser deduzidos com facilidade, tais como a sua data de nascimento ou morada.

## Prompts the user for changes when there is a breach detected of IP address

# Variables:
#   $mozillaVpnLink (string) - a link to the Mozilla VPN website, with { -breach-checklist-link-mozilla-vpn } as the label
breach-checklist-ip-header-2 = Utilize a Internet de forma privada com uma VPN, como a { $mozillaVpnLink }.
breach-checklist-ip-body = O seu endereço IP (endereço do protocolo da Internet) indica a sua localização e fornecedor de serviço de Internet. Uma VPN pode ocultar o seu endereço IP real para que possa utilizar a Internet com privacidade.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Altere quaisquer palavras-passe ou PIN que incluam qualquer parte do seu endereço.
breach-checklist-address-body = Os endereços são fáceis de encontrar em registos públicos e podem fazer com que estas palavras-passe e PIN sejam fáceis de adivinhar.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Altere quaisquer palavras-passe ou PIN que incluam a sua data de nascimento.
breach-checklist-dob-body = As datas de nascimento são fáceis de encontrar em registos públicos e as pessoas que as encontrarem poderão adivinhar facilmente o seu PIN.

## Prompts the user for changes when there is a breach detected of phone number

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-phone-header-2 = Proteja o seu número de telefone com um serviço de máscaras como o { $firefoxRelayLink }, que oculta o seu número de telefone real.

## Prompts the user for changes when there is a breach detected of security questions

breach-checklist-sq-header-text = Atualize as suas perguntas de segurança.
# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
breach-checklist-sq-body-text = Na maioria dos casos, recomendamos que atualize as suas perguntas de segurança no site da empresa. Mas <b>o site pode estar offline ou conter conteúdo malicioso</b>, por isso tenha cuidado ao <breached-company-link>visitar o site</breached-company-link>. Para uma proteção adicional, atualize estas perguntas de segurança em quaisquer contas importantes nas quais as tenha utilizado e crie palavras-passe únicas para todas as contas.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Crie palavras-passe fortes e exclusivas para qualquer conta em que reutilizou palavras-passe.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-hp-body-2 = Um gestor de palavras-passe como o { $passwordManagerLink } (que é gratuito e integrado no { -brand-firefox }) pode ajudar a gerir todas as suas palavras-passe e a aceder às mesmas com segurança, em todos os seus dispositivos.

## Prompts the user for changes when there is a breach detected of other types

# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-checklist-general-header = Entre em contacto com a { $companyName } para os informar sobre esta violação de dados e questionar sobre os passos específicos que pode executar.
