# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Strings for the breach details checklists


## Prompts the user for changes when there is a breach detected of password

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-pw-header = Acesse <a>{ $breachedCompanyUrl }</a> para alterar sua senha e ativar a autenticação em duas etapas.

## Prompts the user for changes when there is a breach detected of email

breach-checklist-email-header = Proteja seu email com um serviço de máscaras de email, como o <a>{ -brand-relay }</a>.
breach-checklist-email-body = Isso pode ocultar seu endereço de email verdadeiro, encaminhando emails para sua caixa de entrada real.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information. 
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Monitore seu relatório de crédito, verifique se há contas, empréstimos ou cartões de crédito que você não reconhece.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Relate este vazamento para o emissor do seu cartão de crédito e solicite um novo cartão com outro número.
breach-checklist-cc-body = Você também deve verificar se há cobranças não reconhecidas nos extratos de seus cartões de crédito.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Notifique o banco imediatamente que o número da sua conta foi comprometido.
breach-checklist-bank-body = Fazer isso mais rápido pode fornecer mais proteções legais para te ajudar a recuperar quaisquer perdas. Você também deve verificar se há cobranças não reconhecidas em suas contas.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Notifique o emissor do seu cartão e altere seu PIN imediatamente.

## Prompts the user for changes when there is a breach detected of IP address

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
