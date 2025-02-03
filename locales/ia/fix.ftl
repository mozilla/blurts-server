# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = Violationes de datos a alte risco
fix-flow-nav-leaked-passwords = Contrasignos revelate
fix-flow-nav-security-recommendations = Recommendationes de securitate
guided-resolution-flow-exit = Retornar a pannello de controlo
guided-resolution-flow-next-arrow = Va al passo successive
guided-resolution-flow-next-arrow-sub-step = Ir al resultato successive
guided-resolution-flow-step-navigation-label = Passos guidate

# Celebration screens


## Shared CTA labels

fix-flow-celebration-next-label = Que nos persevera
fix-flow-celebration-next-recommendations-label = Vide le recommendationes
fix-flow-celebration-next-dashboard-label = Va a tu pannello de controlo

## High-risk flow

fix-flow-celebration-high-risk-title = Tu ha remediate a tu expositiones a alte risco!
fix-flow-celebration-high-risk-description-in-progress = Facer iste labor pote parer multo, ma il es importante facer lo pro mantener te secur. Continua le bon labor.
fix-flow-celebration-high-risk-description-done = Facer iste labor pote parer multo, ma il es importante facer lo pro mantener te secur.
fix-flow-celebration-high-risk-description-next-passwords = Ora que nos remedia a tu contrasignos revelate.
fix-flow-celebration-high-risk-description-next-security-questions = Ora que nos remedia a tu demandas de securitate revelate.
fix-flow-celebration-high-risk-description-next-security-recommendations = Successivemente nos te dara recommendationes de securitate personalisate in base a que tu datos ha essite exponite.
fix-flow-celebration-high-risk-description-next-dashboard = Tu ha attingite le fin de tu passos. Tu pote vider qualcunque elementos del action e traciar tu progresso sur tu pannello de controlo.

## Leaked passwords and security questions flow

fix-flow-celebration-leaked-passwords-title = Tu contrasignos es ora protegite!
fix-flow-celebration-security-questions-title = Tu demandas de securitate es protegite!
fix-flow-celebration-leaked-passwords-description-next-security-questions = Ora que nos revide e actualisa tu demandas de securitate revelate.
fix-flow-celebration-leaked-passwords-description-next-security-recommendations = Successivemente nos te dara recommendationes de securitate personalisate in base a que tu datos ha essite exponite.
fix-flow-celebration-leaked-passwords-description-next-dashboard = Ben facite! Tu ha attingite le fin de tu passos. Tu pote vider qualcunque elementos del action e traciar tu progresso sur tu pannello de controlo.

## Security recommendations flow

fix-flow-celebration-security-recommendations-title = Tu ha completate tote tu recommendationes!
fix-flow-celebration-security-recommendations-description-next-dashboard = Ben facite! Tu ha attingite le fin de tu passos. Tu pote vider qualcunque elementos del action e traciar tu progresso sur tu pannello de controlo.

# High Risk Data Breaches

high-risk-breach-heading = Ecce que facer
high-risk-breach-subheading = Isto require accesso a tu info sensibile, assi tu debera manualmente corriger lo.
# Variables
# $num_breaches is the number of breaches where the high risk data was found.
high-risk-breach-summary =
    { $num_breaches ->
        [one] Illo appareva in { $num_breaches } violation de datos:
       *[other] Illo appareva in { $num_breaches } violationes de datos:
    }
# Variables
# $breach_name is the name of the breach where the high risk data was found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
high-risk-breach-name-and-date = { $breach_name } <breach_date>le { $breach_date }</breach_date>
high-risk-breach-mark-as-fixed = Marcar como remediate
high-risk-breach-skip = Saltar pro iste momento
# Variables:
# $estimated_time is the estimated time it would take for a user to complete breach resolution steps. It not be singular, and the + is meant as "or more".
# An example of this string is Your estimated time: 15+ minutes.
high-risk-breach-estimated-time =
    { $estimated_time ->
        [one] Tempore estimate: plus que { $estimated_time } minuta
       *[other] Tempore estimate: plus que { $estimated_time } minutas
    }

# Credit Card Breaches

high-risk-breach-credit-card-title = Tu numero de carta de credito era exponite
high-risk-breach-credit-card-description = Quicunque lo recipe pote facer compras non autorisate pro que tu pote esser responsabile. Ora age pro impedir damno financiari.
high-risk-breach-credit-card-step-one = Si tu ancora ha iste carta, continge le emissor pro reportar lo robate.
high-risk-breach-credit-card-step-two = Requesta un nove carta con un nove numero.
high-risk-breach-credit-card-step-three = Verifica tu contos pro debitos non autorisate.

# Bank Account Breaches

high-risk-breach-bank-account-title = Tu conto bancari era exponite
high-risk-breach-bank-account-description = Interprender action al plus tosto possibile poterea dar te plus protectiones legal pro adjutar te a recuperar alcun perditas.
high-risk-breach-bank-account-step-one = Notifica tu banca immediatemente que tu numero de conto ha essite compromittite.
high-risk-breach-bank-account-step-two = Cambia tu numero de conto.
high-risk-breach-bank-account-step-three = Verifica tu contos pro debitos non autorisate.

# Social Security Number Breaches

high-risk-breach-social-security-title = Tu numero de securitate social era exponite
high-risk-breach-social-security-description = Fraudatores pote aperir nove prestos o cartas de credito con tu numero de securitate social. Rapidemente age pro prevenir damno financiari.
high-risk-breach-social-security-step-one = Protege te per <link_to_info>le predefinition de un aviso fraude o blocante tu credito.</link_to_info>
high-risk-breach-social-security-step-two = <link_to_info>Verifica tu reporto de credito</link_to_info> pro contos incognite.

# Social Security Number Modal

ssn-modal-title = Re avisos de fraude e blocadas de credito
ssn-modal-description-fraud-part-one = <b>Un aviso de fraude</b> require al negotios de verificar tu identitate ante que illo attribue nove credito in tu nomine. Illo es gratuite, dura un anno, e non afficera negativemente tu punctuation de credito.
ssn-modal-description-fraud-part-two = Pro crear uno, contacta un del tres bureaus de credito. Tu non debe contactar tote tres.
ssn-modal-description-freeze-credit-part-one = <b>Gelar tu credito</b> impedi a quicunque de aperir un nove conto in tu nomine. Illo es libere e non afficera negativemente tu punctuation de credito, ma tu besoniara de disgelar lo ante aperir ulle nove contos.
ssn-modal-description-freeze-credit-part-two = Pro gelar tu credito, contacta cata del tres bureaus de credito: <equifax_link>Equifax</equifax_link>, <experian_link>Experian</experian_link>, e <transunion_link>TransUnion</transunion_link>.
ssn-modal-learn-more = Saper plus circa avisos de fraude e blocadas de credito
ssn-modal-ok = OK

# PIN Breaches

high-risk-breach-pin-title = Tu PIN era exponite
high-risk-breach-pin-description = Interprender action al plus tosto possibile poterea dar te plus protectiones legal pro adjutar te a recuperar alcun perditas.
high-risk-breach-pin-step-one = Notifica tu banca immediatemente que tu PIN ha essite compromittite.
high-risk-breach-pin-step-two = Cambia tu PIN ubique tu ha usate illo mesme.
high-risk-breach-pin-step-three = Verifica tu contos pro debitos non autorisate.

# No high risk breaches found

high-risk-breach-none-title = Grande novas, nos non trovava alcun violationes de datos a alte risco
# Variables
# $email_list is list of emails that the user is monitoring for breaches. E.g. john@yahoo.com, ali@gmail.com, sam@hotmail.com
high-risk-breach-none-description = Nos discoperi violationes de datos in base a tu adresse email, e nos non trova alcun violationes de datos a alte risco pro { $email_list }
high-risk-breach-none-sub-description-part-one = Violationes de datos a alte risco include:
high-risk-breach-none-sub-description-ssn = Numero de securitate social
high-risk-breach-none-sub-description-bank-account = Informationes de conto bancari
high-risk-breach-none-sub-description-cc-number = Numeros de carta de credito
high-risk-breach-none-sub-description-pin = PINs
high-risk-breach-none-continue = Continuar

# Security recommendations

security-recommendation-steps-label = Recommendationes de securitate
security-recommendation-steps-title = Ecce nostre consilio:
security-recommendation-steps-cta-label = OK

# Phone security recommendation

security-recommendation-phone-title = Protege tu numero de telephono
# $num_breaches is the number of breaches where the phone number was found.
security-recommendation-phone-summary =
    { $num_breaches ->
        [one] Tu numero de telephono era exponite in { $num_breaches } violation de datos:
       *[other] Tu numero de telephono era exponite in { $num_breaches } violationes de datos:
    }
security-recommendation-phone-description = Infortunatemente tu non pote recuperar lo. Ma il ha passos que tu pote facer pro verificar que tu sta secur.
security-recommendation-phone-step-one = Bloca le numeros spam pro impedir altere appellos immunditia
security-recommendation-phone-step-two = Non clicca sur ligamines in textos de expeditores incognite; si illo pare esser ab un fonte digne de fide, appella directemente pro confirmar

# Email security recommendation

security-recommendation-email-title = Protege tu adresse email
# $num_breaches is the number of breaches where the email address was found.
security-recommendation-email-summary =
    { $num_breaches ->
        [one] Tu adresse email era exponite in { $num_breaches } violation de datos:
       *[other] Tu adresse email era exponite in { $num_breaches } violationes de datos:
    }
security-recommendation-email-description = Infortunatemente tu non pote remediar a isto. Ma il ha passos que tu pote facer pro proteger te.
security-recommendation-email-step-one = Non clicca sur ligamines in emails de expeditores incognite; si illo appare esser ab fonte digne de fide, appella directemente pro confirmar
security-recommendation-email-step-two = Sia conscie de <link_to_info>attaccos fraudulente</link_to_info>
security-recommendation-email-step-three = Marcar emails suspecte como spam e blocar le expeditor
security-recommendation-email-step-four = Usa <link_to_info>le mascas de emails de { -brand-relay }</link_to_info> pro proteger tu email in le futuro

# IP security recommendation

security-recommendation-ip-title = Usa un VPN pro ulterior confidentialitate
# $num_breaches is the number of breaches where the IP address was found.
security-recommendation-ip-summary =
    { $num_breaches ->
        [one] Adresse adresse IP era exponite in { $num_breaches } violation de datos:
       *[other] Tu adresse IP era exponite in { $num_breaches } violationes de datos:
    }
security-recommendation-ip-description = Tu adresse IP indica tu position e fornitor de servicio internet. Piratas informatic poterea usar iste informationes pro trovar tu position o tentar de connecter se a tu apparatos.
security-recommendation-ip-step-one = Usa un VPN (tal como <link_to_info>{ -brand-mozilla-vpn }</link_to_info>) pro celar tu real adresse IP e usar internet reservatemente.

# Leaked Passwords

# Variables
# $breach_name is the name of the breach where the leaked password was found.
leaked-passwords-title = Tu { $breach_name } contrasigno era exponite
# Variables
# $breach_date is the date when the breach occurred.
leaked-passwords-summary = Illo appareva in un violation de datos le { $breach_date }.
leaked-passwords-description = Fraudatores pote acceder tu conto e probabilemente tentara de usar lo sur altere contos pro vider si tu ha usate le mesme contrasigno. Cambia lo ubique tu lo ha usate pro proteger te.
leaked-passwords-steps-title = Ecce que facer
leaked-passwords-steps-subtitle = Isto require accesso a tu conto, assi tu debera manualmente corriger lo.
# Variables
# $breach_name is the name of the breach where the leaked password was found.
# $emails_affected are the emails associated with the breach.
leaked-passwords-step-one = Cambia tu contrasigno pro <b>{ $emails_affected }</b> sur <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-passwords-step-two = Cambia lo ubique tu lo ha usate.
leaked-passwords-mark-as-fixed = Marcar como remediate
leaked-passwords-skip = Saltar pro iste momento
# Variables
# $estimated_time is the amount of time it would take for a user to manually resolve a leaked password breach. It will always be a number greater than 1.
# "Est." is shortform for "Estimated".
# "mins" is shortform for "minutes".
leaked-passwords-estimated-time =
    { $estimated_time ->
        [one] Tempore ext. pro completar: { $estimated_time } minuta per sito
       *[other] Tempore ext. pro completar: { $estimated_time } minutas per sito
    }

# Leaked Security Questions

leaked-security-questions-title = Tu demandas de securitate era exponite
# Variables
# $breach_name is the name of the breach where the leaked security questions were found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
leaked-security-questions-summary = Illos appareva in un violation de datos sur { $breach_name } le { $breach_date }.
leaked-security-questions-description = Fraudatores pote usar los pro acceder a tu contos, e ulle altere sito ubi tu ha usate le mesme demandas de securitate.
leaked-security-questions-steps-title = Ecce que facer
leaked-security-questions-steps-subtitle = Isto require accesso a tu conto, assi tu debera manualmente corriger lo.
# Variables
# $breach_name is the name of the breach where the security questions were found.
# $email_affected is the email associated with the breach.
leaked-security-questions-step-one = Actualisa tu demandas de securitate pro <b>{ $email_affected }</b> sur <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-security-questions-step-two = Actualisa los sur ulle altere sito ubi tu usava le mesme demandas de securitate. Cura de usar differente demandas de securitate pro cata conto.
