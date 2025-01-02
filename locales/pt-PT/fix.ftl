# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = Violações de dados de alto risco
fix-flow-nav-leaked-passwords = Palavras-passe divulgadas
fix-flow-nav-security-recommendations = Recomendações de segurança
guided-resolution-flow-exit = Voltar ao painel
guided-resolution-flow-next-arrow = Ir para o passo seguinte
guided-resolution-flow-next-arrow-sub-step = Ir para próximo resultado
guided-resolution-flow-step-navigation-label = Passos guiados

# Celebration screens


## Shared CTA labels

fix-flow-celebration-next-label = Vamos continuar
fix-flow-celebration-next-recommendations-label = Ver recomendações
fix-flow-celebration-next-dashboard-label = Ir para o seu Painel

## High-risk flow

fix-flow-celebration-high-risk-title = Corrigiu as suas exposições de alto risco!
fix-flow-celebration-high-risk-description-in-progress = Fazer este trabalho pode parecer demasiado, mas é importante para se manter em segurança. Continue com o bom trabalho.
fix-flow-celebration-high-risk-description-done = Fazer este trabalho pode parecer demasiado, mas é importante para se manter em segurança.
fix-flow-celebration-high-risk-description-next-passwords = Vamos corrigir agora as suas palavras-passe expostas.
fix-flow-celebration-high-risk-description-next-security-questions = Vamos corrigir agora as suas perguntas de segurança expostas.
fix-flow-celebration-high-risk-description-next-security-recommendations = De seguida iremos fornecer-lhe recomendações de segurança personalizadas com base nos seus dados que foram expostos.
fix-flow-celebration-high-risk-description-next-dashboard = Chegou ao fim dos seus passos. Pode ver quaisquer itens de ação e acompanhar o seu progresso no seu painel.

## Leaked passwords and security questions flow

fix-flow-celebration-leaked-passwords-title = As suas palavras-passe estão agora protegidas!
fix-flow-celebration-security-questions-title = As suas perguntas de segurança estão protegidas!
fix-flow-celebration-leaked-passwords-description-next-security-questions = Agora vamos rever e atualizar as suas perguntas de segurança expostas.
fix-flow-celebration-leaked-passwords-description-next-security-recommendations = A seguir, iremos dar-lhe recomendações de segurança personalizadas com base nos seus dados que foram expostos.
fix-flow-celebration-leaked-passwords-description-next-dashboard = Boa! Chegou ao fim dos seus passos. Pode ver quaisquer itens de ação e acompanhar o seu progresso no seu painel.

## Security recommendations flow

fix-flow-celebration-security-recommendations-title = Concluiu todas as suas recomendações!
fix-flow-celebration-security-recommendations-description-next-dashboard = Boa! Chegou ao fim dos seus passos. Pode ver quaisquer itens de ação e acompanhar o seu progresso no seu painel.

# High Risk Data Breaches

high-risk-breach-heading = Eis o que fazer
high-risk-breach-subheading = Isto requer acesso à sua informação sensível, pelo que terá de a corrigir manualmente.
# Variables
# $num_breaches is the number of breaches where the high risk data was found.
high-risk-breach-summary =
    { $num_breaches ->
        [one] Apareceu em { $num_breaches } violação de dados:
       *[other] Apareceu em { $num_breaches } violações de dados:
    }
# Variables
# $breach_name is the name of the breach where the high risk data was found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
high-risk-breach-name-and-date = { $breach_name } <breach_date>a { $breach_date }</breach_date>
high-risk-breach-mark-as-fixed = Marcar como corrigido
high-risk-breach-skip = Ignorar por agora
# Variables:
# $estimated_time is the estimated time it would take for a user to complete breach resolution steps. It not be singular, and the + is meant as "or more".
# An example of this string is Your estimated time: 15+ minutes.
high-risk-breach-estimated-time =
    { $estimated_time ->
        [one] O seu tempo estimado: mais de { $estimated_time } minuto
       *[other] O seu tempo estimado: mais de { $estimated_time } minutos
    }

# Credit Card Breaches

high-risk-breach-credit-card-title = O número do seu cartão de crédito foi exposto
high-risk-breach-credit-card-description = Qualquer pessoa que obtenha o mesmo pode fazer compras não autorizadas relativamente às quais você pode ser responsável. Aja agora para evitar problemas financeiros.
high-risk-breach-credit-card-step-one = Se ainda tem este cartão, contacte o emissor para reportar o furto.
high-risk-breach-credit-card-step-two = Solicite um novo cartão com um novo número.
high-risk-breach-credit-card-step-three = Verifique se tem cobranças não autorizadas nas suas contas.

# Bank Account Breaches

high-risk-breach-bank-account-title = A sua conta bancária foi exposta
high-risk-breach-bank-account-description = Agir o mais rapidamente possível pode fornecer mais proteções legais para ajudar a recuperar qualquer perda.
high-risk-breach-bank-account-step-one = Notifique imediatamente o seu banco que o seu número de conta foi comprometido.
high-risk-breach-bank-account-step-two = Altere o número da sua conta.
high-risk-breach-bank-account-step-three = Verifique se tem cobranças não autorizadas nas suas contas.

# Social Security Number Breaches

high-risk-breach-social-security-title = O seu número da segurança social foi exposto
high-risk-breach-social-security-description = Os burlões podem conseguir novos empréstimos ou cartões de crédito com o seu número da segurança social. Aja rapidamente para evitar danos financeiros.
high-risk-breach-social-security-step-one = Proteja-se <link_to_info>configurando um alerta de fraude ou congelando o seu crédito.</link_to_info>
high-risk-breach-social-security-step-two = <link_to_info>Confirme o seu extracto de crédito</link_to_info> por contas desconhecidas.

# Social Security Number Modal

ssn-modal-title = Sobre os alertas de fraude e bloqueios de crédito
ssn-modal-description-fraud-part-one = <b>Um alerta de fraude</b> requer que as empresas verifiquem a sua identidade antes de emitir um novo crédito em seu nome. É gratuito, tem a duração de um ano e não afeta negativamente a sua pontuação de crédito.
ssn-modal-description-fraud-part-two = Para configurar um alerta, contacte qualquer um dos três serviços de crédito. Não precisa de contactar todos os três.
ssn-modal-description-freeze-credit-part-one = <b>Congelar o seu crédito</b> impede que alguém abra uma nova conta em seu nome. É gratuito e não irá afetar negativamente a sua pontuação de crédito, mas irá precisar de o desbloquear antes de abrir quaisquer novas contas.
ssn-modal-description-freeze-credit-part-two = Para congelar o seu crédito, contacte cada uma das três empresas de crédito – <equifax_link>Equifax</equifax_link>, <experian_link>Experian</experian_link> e <transunion_link>TransUnion</transunion_link>.
ssn-modal-learn-more = Saber mais sobre alertas de fraude e bloqueios de crédito
ssn-modal-ok = Ok

# PIN Breaches

high-risk-breach-pin-title = O seu PIN foi exposto
high-risk-breach-pin-description = Agir o mais rapidamente possível pode fornecer mais proteções legais para ajudar a recuperar qualquer perda.
high-risk-breach-pin-step-one = Notifique imediatamente o seu banco que o seu PIN foi comprometido.
high-risk-breach-pin-step-two = Altere o seu PIN em qualquer sítio onde tenha utilizado o mesmo.
high-risk-breach-pin-step-three = Verifique se tem cobranças não autorizadas nas suas contas.

# No high risk breaches found

high-risk-breach-none-title = Boas notícias: não encontrámos nenhuma violação de dados de alto risco
# Variables
# $email_list is list of emails that the user is monitoring for breaches. E.g. john@yahoo.com, ali@gmail.com, sam@hotmail.com
high-risk-breach-none-description = Detetámos violações de dados com base no seu endereço de e-mail e não encontrámos nenhuma violação de dados de alto risco para { $email_list }.
high-risk-breach-none-sub-description-part-one = As violações de dados de alto risco incluem:
high-risk-breach-none-sub-description-ssn = Número da segurança social
high-risk-breach-none-sub-description-bank-account = Informações da conta bancária
high-risk-breach-none-sub-description-cc-number = Números de cartão de crédito
high-risk-breach-none-sub-description-pin = PIN
high-risk-breach-none-continue = Continuar

# Security recommendations

security-recommendation-steps-label = Recomendações de segurança
security-recommendation-steps-title = Eis o nosso conselho:
security-recommendation-steps-cta-label = Compreendi!

# Phone security recommendation

security-recommendation-phone-title = Proteja o seu número de telefone
# $num_breaches is the number of breaches where the phone number was found.
security-recommendation-phone-summary =
    { $num_breaches ->
        [one] O seu número de telefone foi exposto em { $num_breaches } violação de dados:
       *[other] O seu número de telefone foi exposto em { $num_breaches } violações de dados:
    }
security-recommendation-phone-description = Infelizmente não a pode recuperar. Mas existem passos que pode tomar para ter a certeza que está seguro(a).
security-recommendation-phone-step-one = Bloqueie números de spam para evitar mais chamadas que não interessam
security-recommendation-phone-step-two = Não clique em ligações em mensagens de remetentes desconhecidos; se parecer ser de uma fonte confiável, ligue diretamente para confirmar

# Email security recommendation

security-recommendation-email-title = Proteja o seu endereço de e-mail
# $num_breaches is the number of breaches where the email address was found.
security-recommendation-email-summary =
    { $num_breaches ->
        [one] O seu endereço de e-mail foi exposto em { $num_breaches } violação de dados:
       *[other] O seu endereço de e-mail foi exposto em { $num_breaches } violações de dados:
    }
security-recommendation-email-description = Infelizmente não pode corrigir isto. Mas existem passos que pode tomar para se proteger.
security-recommendation-email-step-one = Não clique em ligações em mensagens de remetentes desconhecidos; se parece ser de uma fonte confiável, ligue diretamente para confirmar
security-recommendation-email-step-two = Tenha em consideração os <link_to_info>esquemas de phishing</link_to_info>
security-recommendation-email-step-three = Marcar e-mails suspeitos como spam e bloquear o remetente
security-recommendation-email-step-four = Utilize as <link_to_info>máscaras de e-mail da { -brand-relay }</link_to_info> para proteger o seu e-mail no futuro

# IP security recommendation

security-recommendation-ip-title = Utilize uma VPN para privacidade adicional
# $num_breaches is the number of breaches where the IP address was found.
security-recommendation-ip-summary =
    { $num_breaches ->
        [one] O seu endereço IP foi exposto em { $num_breaches } violação de dados:
       *[other] O seu endereço IP foi exposto em { $num_breaches } violações de dados:
    }
security-recommendation-ip-description = O seu endereço IP indica a sua localização e fornecedor de serviço de Internet. Os hackers podem utilizar esta informação para encontrar a sua localização ou tentarem ligar-se aos seus dispositivos.
security-recommendation-ip-step-one = Utilize uma VPN (como a <link_to_info>{ -brand-mozilla-vpn }</link_to_info>) para ocultar o seu endereço IP real e utilizar a Internet de forma privada.

# Leaked Passwords

# Variables
# $breach_name is the name of the breach where the leaked password was found.
leaked-passwords-title = A sua palavra-passe { $breach_name } foi exposta
# Variables
# $breach_date is the date when the breach occurred.
leaked-passwords-summary = Esta apareceu numa violação de dados a { $breach_date }.
leaked-passwords-description = Os burlões podem aceder à sua conta e é provável que tentem utilizá-la noutras contas para verificar se utilizou a mesma palavra-passe. Para se proteger, altere a mesma em qualquer sítio onde a tenha utilizado.
leaked-passwords-steps-title = Eis o que fazer
leaked-passwords-steps-subtitle = Isto requer acesso à sua conta, pelo que terá de o corrigir manualmente.
# Variables
# $breach_name is the name of the breach where the leaked password was found.
# $emails_affected are the emails associated with the breach.
leaked-passwords-step-one = Altere a sua palavra-passe para <b>{ $emails_affected }</b> em <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-passwords-step-two = Altere a mesma em qualquer outro sítio onde a tenha utilizado.
leaked-passwords-mark-as-fixed = Marcar como corrigido
leaked-passwords-skip = Ignorar por agora
# Variables
# $estimated_time is the amount of time it would take for a user to manually resolve a leaked password breach. It will always be a number greater than 1.
# "Est." is shortform for "Estimated".
# "mins" is shortform for "minutes".
leaked-passwords-estimated-time =
    { $estimated_time ->
        [one] Tempo estimado para concluir: { $estimated_time } minuto por site
       *[other] Tempo estimado para concluir: { $estimated_time } minutos por site
    }

# Leaked Security Questions

leaked-security-questions-title = As suas perguntas de segurança foram expostas
# Variables
# $breach_name is the name of the breach where the leaked security questions were found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
leaked-security-questions-summary = Estas apareceram numa violação de dados em { $breach_name } a { $breach_date }.
leaked-security-questions-description = Os burlões podem utilizá-las para aceder às suas contas e qualquer outro site em que tenha utilizado as mesmas perguntas de segurança. Atualize as mesmas já para proteger as suas contas.
leaked-security-questions-steps-title = Eis o que fazer
leaked-security-questions-steps-subtitle = Isto requer acesso à sua conta, pelo que terá de o corrigir manualmente.
# Variables
# $breach_name is the name of the breach where the security questions were found.
# $email_affected is the email associated with the breach.
leaked-security-questions-step-one = Atualize as suas perguntas de segurança para <b>{ $email_affected }</b> em <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-security-questions-step-two = Atualize-as em qualquer outro site em que tenha utilizado as mesmas perguntas de segurança. Certifique-se que utiliza perguntas de segurança diferentes para cada conta.
