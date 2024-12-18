# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = Vazamentos de dados de alto risco
fix-flow-nav-leaked-passwords = Senhas vazadas
fix-flow-nav-security-recommendations = Recomendações de segurança
guided-resolution-flow-exit = Voltar ao painel
guided-resolution-flow-next-arrow = Ir para a próxima etapa
guided-resolution-flow-next-arrow-sub-step = Ir para o próximo resultado
guided-resolution-flow-step-navigation-label = Etapas guiadas

# Celebration screens


## Shared CTA labels

fix-flow-celebration-next-label = Vamos continuar
fix-flow-celebration-next-recommendations-label = Ver recomendações
fix-flow-celebration-next-dashboard-label = Ir para seu painel

## High-risk flow

fix-flow-celebration-high-risk-title = Você resolveu suas exposições de alto risco!
fix-flow-celebration-high-risk-description-in-progress = Pode parecer trabalhoso, mas é importante para sua segurança. Mantenha o bom trabalho!
fix-flow-celebration-high-risk-description-done = Pode parecer trabalhoso, mas é importante para sua segurança.
fix-flow-celebration-high-risk-description-next-passwords = Agora vamos resolver suas senhas expostas.
fix-flow-celebration-high-risk-description-next-security-questions = Agora vamos resolver suas perguntas de segurança expostas.
fix-flow-celebration-high-risk-description-next-security-recommendations = A seguir, fornecemos recomendações de segurança personalizadas com base em quais dados seus foram expostos.
fix-flow-celebration-high-risk-description-next-dashboard = Você chegou ao final das etapas. Pode ver qualquer item de ação e acompanhar o andamento no seu painel.

## Leaked passwords and security questions flow

fix-flow-celebration-leaked-passwords-title = Suas senhas agora estão protegidas!
fix-flow-celebration-security-questions-title = Suas perguntas de segurança estão protegidas!
fix-flow-celebration-leaked-passwords-description-next-security-questions = Agora vamos revisar e alterar suas perguntas de segurança expostas.
fix-flow-celebration-leaked-passwords-description-next-security-recommendations = A seguir, fornecemos recomendações de segurança personalizadas com base em quais dados seus foram expostos.
fix-flow-celebration-leaked-passwords-description-next-dashboard = Ótimo! Você chegou ao final das etapas. Pode ver qualquer item de ação e acompanhar o andamento no seu painel.

## Security recommendations flow

fix-flow-celebration-security-recommendations-title = Você concluiu todas as recomendações!
fix-flow-celebration-security-recommendations-description-next-dashboard = Ótimo! Você chegou ao final das etapas. Pode ver qualquer item de ação e acompanhar o andamento no seu painel.

# High Risk Data Breaches

high-risk-breach-heading = O que fazer
high-risk-breach-subheading = Isso requer acesso a suas informações confidenciais, então você precisa resolver manualmente.
# Variables
# $num_breaches is the number of breaches where the high risk data was found.
high-risk-breach-summary =
    { $num_breaches ->
        [one] Apareceu em { $num_breaches } vazamento de dados:
       *[other] Apareceu em { $num_breaches } vazamentos de dados:
    }
# Variables
# $breach_name is the name of the breach where the high risk data was found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
high-risk-breach-name-and-date = { $breach_name } <breach_date>em { $breach_date }</breach_date>
high-risk-breach-mark-as-fixed = Marcar como resolvido
high-risk-breach-skip = Ignorar por enquanto
# Variables:
# $estimated_time is the estimated time it would take for a user to complete breach resolution steps. It not be singular, and the + is meant as "or more".
# An example of this string is Your estimated time: 15+ minutes.
high-risk-breach-estimated-time =
    { $estimated_time ->
        [one] Tempo estimado: { $estimated_time } minuto
       *[other] Tempo estimado: { $estimated_time } minutos ou mais
    }

# Credit Card Breaches

high-risk-breach-credit-card-title = O número do seu cartão de crédito foi exposto
high-risk-breach-credit-card-description = Qualquer pessoa que obtiver pode fazer compras não autorizadas, pelas quais você poderá ser responsabilizado. Aja agora para evitar danos financeiros.
high-risk-breach-credit-card-step-one = Se você ainda tiver este cartão, entre em contato com o emissor para relatar o roubo.
high-risk-breach-credit-card-step-two = Solicite um novo cartão com outro número.
high-risk-breach-credit-card-step-three = Verifique se há cobranças não autorizadas em suas contas.

# Bank Account Breaches

high-risk-breach-bank-account-title = Sua conta bancária foi exposta
high-risk-breach-bank-account-description = Agir o mais rápido possível pode lhe dar mais proteções legais para ajudar a recuperar quaisquer perdas.
high-risk-breach-bank-account-step-one = Notifique o banco imediatamente que o número da sua conta foi comprometido.
high-risk-breach-bank-account-step-two = Altere o número da sua conta.
high-risk-breach-bank-account-step-three = Verifique se há cobranças não autorizadas em suas contas.

# Social Security Number Breaches

high-risk-breach-social-security-title = Seu número de previdência social foi exposto
high-risk-breach-social-security-description = Fraudadores podem obter novos empréstimos ou cartões de crédito com seu número de previdência social. Aja rápido para evitar danos financeiros.
high-risk-breach-social-security-step-one = Proteja-se <link_to_info>criando um alerta de fraude ou congelando seu crédito</link_to_info>.
high-risk-breach-social-security-step-two = <link_to_info>Verifique seu relatório de crédito</link_to_info> para ver se há contas não reconhecidas.

# Social Security Number Modal

ssn-modal-title = Informações sobre alertas de fraude e congelamento de crédito
ssn-modal-description-fraud-part-one = <b>Um alerta de fraude</b> exige que empresas verifiquem sua identidade antes de emitir novos créditos em seu nome. É gratuito, dura um ano e não afeta negativamente sua pontuação de crédito.
ssn-modal-description-fraud-part-two = Para criar um, entre em contato com qualquer uma das três agências de crédito. Você não precisa entrar em contato com todas.
ssn-modal-description-freeze-credit-part-one = <b>Congelar seu crédito</b> impede que alguém abra uma nova conta em seu nome. É gratuito e não afeta negativamente sua pontuação de crédito, mas você precisa descongelar antes de abrir novas contas.
ssn-modal-description-freeze-credit-part-two = Para congelar seu crédito, entre em contato com cada uma das três agências de crédito — <equifax_link>Equifax</equifax_link>, <experian_link>Experian</experian_link> e <transunion_link>TransUnion</transunion_link>.
ssn-modal-learn-more = Saiba mais sobre alertas de fraude e congelamento de crédito
ssn-modal-ok = OK

# PIN Breaches

high-risk-breach-pin-title = Seu PIN foi exposto
high-risk-breach-pin-description = Agir o mais rápido possível pode lhe dar mais proteções legais para ajudar a recuperar quaisquer perdas.
high-risk-breach-pin-step-one = Notifique o banco imediatamente que seu PIN foi comprometido.
high-risk-breach-pin-step-two = Altere seu PIN em qualquer lugar onde tenha usado o mesmo.
high-risk-breach-pin-step-three = Verifique se há cobranças não autorizadas em suas contas.

# No high risk breaches found

high-risk-breach-none-title = Boas notícias, não encontramos nenhum vazamento de dados de alto risco
# Variables
# $email_list is list of emails that the user is monitoring for breaches. E.g. john@yahoo.com, ali@gmail.com, sam@hotmail.com
high-risk-breach-none-description = Detectamos vazamentos de dados com base em seu endereço de email, não encontramos nenhum vazamento de dados de alto risco de { $email_list }.
high-risk-breach-none-sub-description-part-one = Vazamentos de dados de alto risco incluem:
high-risk-breach-none-sub-description-ssn = Número de previdência social
high-risk-breach-none-sub-description-bank-account = Informações de conta bancária
high-risk-breach-none-sub-description-cc-number = Números de cartão de crédito
high-risk-breach-none-sub-description-pin = PINs
high-risk-breach-none-continue = Avançar

# Security recommendations

security-recommendation-steps-label = Recomendações de segurança
security-recommendation-steps-title = Aqui está nosso conselho:
security-recommendation-steps-cta-label = Entendi

# Phone security recommendation

security-recommendation-phone-title = Proteja seu número de celular
# $num_breaches is the number of breaches where the phone number was found.
security-recommendation-phone-summary =
    { $num_breaches ->
        [one] Seu número de celular foi exposto em { $num_breaches } vazamento de dados:
       *[other] Seu número de celular foi exposto em { $num_breaches } vazamentos de dados:
    }
security-recommendation-phone-description = Infelizmente você não pode voltar atrás. Mas há medidas que você pode tomar para garantir sua segurança.
security-recommendation-phone-step-one = Bloquear números de spam para evitar mais chamadas indesejadas
security-recommendation-phone-step-two = Não clicar em links de textos de remetentes desconhecidos. Se parecer ser de uma fonte confiável, ligue diretamente para confirmar

# Email security recommendation

security-recommendation-email-title = Proteja seu endereço de email
# $num_breaches is the number of breaches where the email address was found.
security-recommendation-email-summary =
    { $num_breaches ->
        [one] Seu endereço de email foi exposto em { $num_breaches } vazamento de dados:
       *[other] Seu endereço de email foi exposto em { $num_breaches } vazamentos de dados:
    }
security-recommendation-email-description = Infelizmente você não pode voltar atrás. Mas há medidas que você pode tomar se proteger.
security-recommendation-email-step-one = Não clicar em links de emails de remetentes desconhecidos. Se parecer ser de uma fonte confiável, ligue diretamente para confirmar
security-recommendation-email-step-two = Estar atento a <link_to_info>golpes de obtenção de informações</link_to_info>
security-recommendation-email-step-three = Marcar emails suspeitos como spam e bloquear o remetente
security-recommendation-email-step-four = Usar <link_to_info>máscaras de email do { -brand-relay }</link_to_info> para proteger seu email no futuro

# IP security recommendation

security-recommendation-ip-title = Use uma VPN para maior privacidade
# $num_breaches is the number of breaches where the IP address was found.
security-recommendation-ip-summary =
    { $num_breaches ->
        [one] Seu endereço IP foi exposto em { $num_breaches } vazamento de dados:
       *[other] Seu endereço IP foi exposto em { $num_breaches } vazamentos de dados:
    }
security-recommendation-ip-description = Seu endereço IP identifica sua localização e provedor de serviços de internet. Hackers podem usar essas informações para encontrar sua localização ou tentar se conectar a seus dispositivos.
security-recommendation-ip-step-one = Use uma VPN (como o <link_to_info>{ -brand-mozilla-vpn }</link_to_info>) para ocultar seu endereço IP real e usar a internet de forma privativa.

# Leaked Passwords

# Variables
# $breach_name is the name of the breach where the leaked password was found.
leaked-passwords-title = Sua senha em { $breach_name } foi exposta
# Variables
# $breach_date is the date when the breach occurred.
leaked-passwords-summary = Apareceu em um vazamento de dados em { $breach_date }.
leaked-passwords-description = Fraudadores podem acessar sua conta e provavelmente tentar usar em outras contas para ver se você usou a mesma senha. Altere em todo lugar onde você usou para se proteger.
leaked-passwords-steps-title = O que fazer
leaked-passwords-steps-subtitle = Isso requer acesso à sua conta, então você precisa resolver manualmente.
# Variables
# $breach_name is the name of the breach where the leaked password was found.
# $emails_affected are the emails associated with the breach.
leaked-passwords-step-one = Mude sua senha de <b>{ $emails_affected }</b> em <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-passwords-step-two = Mude em qualquer outro lugar onde a tenha usado.
leaked-passwords-mark-as-fixed = Marcar como resolvido
leaked-passwords-skip = Ignorar por enquanto
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

leaked-security-questions-title = Suas perguntas de segurança foram expostas
# Variables
# $breach_name is the name of the breach where the leaked security questions were found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
leaked-security-questions-summary = Apareceram em um vazamento de dados de { $breach_name } em { $breach_date }.
leaked-security-questions-description = Fraudadores podem usar para acessar suas contas e qualquer outro site onde você tenha usado as mesmas perguntas de segurança. Altere agora mesmo para proteger suas contas.
leaked-security-questions-steps-title = O que fazer
leaked-security-questions-steps-subtitle = Isso requer acesso à sua conta, então você precisa resolver manualmente.
# Variables
# $breach_name is the name of the breach where the security questions were found.
# $email_affected is the email associated with the breach.
leaked-security-questions-step-one = Altere suas perguntas de segurança de <b>{ $email_affected }</b> em <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-security-questions-step-two = Altere em qualquer outro site onde tenha usado as mesmas perguntas de segurança. Certifique-se de usar perguntas de segurança diferentes em cada conta.
