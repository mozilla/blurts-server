# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

breach-all-meta-page-title = Base de dados de vazamentos de dados — { -brand-fx-monitor }
breach-all-meta-social-title = Todos os vazamentos detectados pelo { -brand-fx-monitor }
breach-all-meta-social-description = Navegue pela lista completa de vazamentos conhecidas detectados pelo { -brand-fx-monitor } e descubra se suas informações foram expostas.
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-page-title = Vazamento de dados de { $company } – { -brand-fx-monitor }
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-social-title = Você foi afetado pelo vazamento de dados de { $company }?
breach-detail-meta-social-description = Use o { -brand-fx-monitor } para descobrir se suas informações pessoais foram expostas neste vazamento e entender o que fazer a seguir.

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = Gerenciador de senhas do { -brand-firefox }
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }

## Prompts the user for changes when there is a breach detected of password

breach-checklist-pw-header-text = Atualize suas senhas e ative a autenticação em duas etapas.
# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-pw-body-text = Na maioria dos casos, recomendamos que altere sua senha no site da empresa. Mas <b>o site pode estar fora do ar ou conter conteúdo malicioso</b>, portanto tenha cuidado se você <breached-company-link>visitar o site</breached-company-link>. Para proteção adicional, certifique-se de usar uma senha exclusiva em cada conta, de forma que qualquer senha vazada não possa ser usada para acessar outras contas. O { $passwordManagerLink } pode te ajudar a manter o controle de todas as suas senhas com segurança.

## Prompts the user for changes when there is a breach detected of email

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-email-header-2 = Proteja seu email com um serviço de máscaras de email, como o { $firefoxRelayLink }.
breach-checklist-email-body = Isso pode ocultar seu endereço de email verdadeiro, encaminhando emails para sua caixa de entrada real.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information.
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Monitore seu relatório de crédito, verifique se há contas, empréstimos ou cartões de crédito que você não reconhece.
# A security freeze prevents prospective creditors from accessing your credit file.
# Creditors typically won't offer you credit if they can't access your credit reporting file,
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
# This will only be shown to users in the US.
# Variables:
#   $equifaxLink (string) - a link to the Equifax website
#   $experianLink (string) - a link to the Experian website
#   $transUnionLink (string) - a link to the TransUnion website
breach-checklist-ssn-body-2 = Você também pode congelar seu crédito em { $equifaxLink }, { $experianLink } e { $transUnionLink } para impedir que golpistas abram novas contas em seu nome. É gratuito e não afeta sua avaliação de crédito.

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

# Variables:
#   $mozillaVpnLink (string) - a link to the Mozilla VPN website, with { -breach-checklist-link-mozilla-vpn } as the label
breach-checklist-ip-header-2 = Use a internet de forma privativa com uma VPN, como o { $mozillaVpnLink }.
breach-checklist-ip-body = Seu endereço IP (endereço de protocolo da internet) identifica sua localização e o provedor de serviços de internet. Uma VPN pode ocultar seu endereço IP real para você poder usar a internet com privacidade.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Altere senhas ou PINs que incluam qualquer parte do seu endereço.
breach-checklist-address-body = Endereços são fáceis de encontrar em registros públicos, podendo tornar essas senhas e PINs fáceis de adivinhar.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Altere senhas ou PINs que incluam sua data de nascimento.
breach-checklist-dob-body = Datas de nascimento são fáceis de encontrar em registros públicos, quem as encontra pode facilmente adivinhar seu PIN.

## Prompts the user for changes when there is a breach detected of phone number

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-phone-header-2 = Proteja seu número de celular com um serviço de máscaras, como o { $firefoxRelayLink }, que oculta seu número de celular verdadeiro.

## Prompts the user for changes when there is a breach detected of security questions

breach-checklist-sq-header-text = Atualize suas perguntas de segurança.
# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
breach-checklist-sq-body-text = Na maioria dos casos, recomendamos que altere suas perguntas de segurança no site da empresa. Mas <b>o site pode estar fora do ar ou conter conteúdo malicioso</b>, portanto tenha cuidado se você <breached-company-link>visitar o site</breached-company-link>. Para proteção adicional, altere essas perguntas de segurança em todas as contas importantes em que as usou e crie uma senha exclusiva em cada conta.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Crie senhas fortes e exclusivas em contas onde você reusou a mesma senha.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-hp-body-2 = Um gerenciador de senhas, como o { $passwordManagerLink } (gratuito e integrado ao navegador { -brand-firefox }), pode te ajudar a controlar todas as suas senhas e acessar com segurança em todos os seus dispositivos.

## Prompts the user for changes when there is a breach detected of other types

# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-checklist-general-header = Entre em contato com { $companyName } para informar sobre este vazamento e peça instruções específicas do que você pode fazer.
