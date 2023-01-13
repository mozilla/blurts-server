# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Breaches header

# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = Vazamentos de dados de { $email-select }
# $count is the number of emails a user has added out of $total allowed
emails-monitored =
    { $total ->
        [one] { $count } de { $total } email monitorado
       *[other] { $count } de { $total } emails monitorados
    }
add-email-link = Adicionar endereço de email

## Breaches resolved filter

filter-label-unresolved = Vazamentos não resolvidos
filter-label-resolved = Vazamentos resolvidos

## Breaches table

column-company = EMPRESA
column-breached-data = DADOS VAZADOS
column-detected = DETECTADO
# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
breach-description = Em { $breachDate }, houve vazamento em { $companyName }. Depois que o vazamento foi descoberto e confirmado, ele foi adicionado à nossa base de dados em { $addedDate }. Este vazamento incluiu: { $dataClasses }

## Prompts the user for changes when there is a breach detected of password

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-pw-header = Acesse <a>{ $breachedCompanyUrl }</a> para alterar sua senha e ativar a autenticação em duas etapas.
breach-checklist-pw-body = Garanta que sua senha seja única e difícil de adivinhar. Se esta senha for usada em qualquer outra conta, certifique-se de alterar lá também. O <a>gerenciador de senhas do { -brand-firefox }</a> pode ajudar a manter o controle de todas as suas senhas com segurança.

## Prompts the user for changes when there is a breach detected of email

breach-checklist-email-header = Proteja seu email com um serviço de máscaras de email, como o <a>{ -brand-relay }</a>.
breach-checklist-email-body = Isso pode ocultar seu endereço de email verdadeiro, encaminhando emails para sua caixa de entrada real.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information. 
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Monitore seu relatório de crédito, verifique se há contas, empréstimos ou cartões de crédito que você não reconhece.
# A security freeze prevents prospective creditors from accessing your credit file. 
# Creditors typically won't offer you credit if they can't access your credit reporting file, 
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
breach-checklist-ssn-body = Você também pode congelar seu crédito em <a>Equifax</a>, <a>Experian</a> e <a>TransUnion</a> para impedir que golpistas abram novas contas em seu nome. É gratuito e não afeta sua avaliação de crédito.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Relate este vazamento para o emissor do seu cartão de crédito e solicite um novo cartão com outro número.
breach-checklist-cc-body = Você também deve verificar se há cobranças não reconhecidas nos extratos de seus cartões de crédito.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Notifique o banco imediatamente que o número da sua conta foi comprometido.
breach-checklist-bank-body = Fazer isso mais rápido pode fornecer mais proteções legais para te ajudar a recuperar quaisquer perdas. Você também deve verificar se há cobranças não reconhecidas em suas contas.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Notifique o emissor do seu cartão e altere seu PIN imediatamente.
breach-checklist-pin-body = Certifique-se de que seu novo PIN, ou qualquer outro PIN, não inclua números fáceis de adivinhar, como sua data de nascimento ou endereço físico.

## Prompts the user for changes when there is a breach detected of IP address

breach-checklist-ip-header = Use a internet de forma privativa com uma VPN, como o <a>{ -brand-mozilla-vpn }</a>.
breach-checklist-ip-body = Seu endereço IP (endereço de protocolo da internet) identifica sua localização e o provedor de serviços de internet. Uma VPN pode ocultar seu endereço IP real para você poder usar a internet com privacidade.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Altere senhas ou PINs que incluam qualquer parte do seu endereço.
breach-checklist-address-body = Endereços são fáceis de encontrar em registros públicos, podendo tornar essas senhas e PINs fáceis de adivinhar.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Altere senhas ou PINs que incluam sua data de nascimento.
breach-checklist-dob-body = Datas de nascimento são fáceis de encontrar em registros públicos, quem as encontra pode facilmente adivinhar seu PIN.

## Prompts the user for changes when there is a breach detected of phone number

breach-checklist-phone-header = Proteja seu número de celular com um serviço de máscaras como o <a>{ -brand-relay }</a>, que oculta seu número de celular verdadeiro.

## Prompts the user for changes when there is a breach detected of security questions

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-sq-header = Atualize suas perguntas de segurança em <a>{ $breachedCompanyUrl }</a>.
breach-checklist-sq-body = Use respostas longas e aleatórias e guarde em algum lugar seguro. Faça isso em qualquer outro lugar em que você usou as mesmas perguntas de segurança.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Crie senhas fortes e exclusivas em contas onde você reusou a mesma senha.
breach-checklist-hp-body = Um gerenciador de senhas, como o <a>gerenciador de senhas do { -brand-firefox }</a> (gratuito e integrado ao navegador { -brand-firefox }), pode ajudar a controlar todas as suas senhas e acessar com segurança em todos os seus dispositivos.

## Prompts the user for changes when there is a breach detected of other types

# NOTE: { $companyName } is a placeholder for the name of the company where the breach occurred 
breach-checklist-general-header = Entre em contato com { $companyName } para informar sobre este vazamento e peça instruções específicas do que você pode fazer.
