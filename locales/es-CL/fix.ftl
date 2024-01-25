# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = Filtraciones de datos de alto riesgo
fix-flow-nav-leaked-passwords = Contraseñas filtradas
fix-flow-nav-security-recommendations = Recomendaciones de seguridad
guided-resolution-flow-exit = Regresar al panel
guided-resolution-flow-back-arrow = Ir al paso anterior
guided-resolution-flow-next-arrow = Ir al paso siguiente
guided-resolution-flow-step-navigation-label = Pasos guiados

# Celebration screens


## Shared CTA labels

fix-flow-celebration-next-label = Sigamos adelante
fix-flow-celebration-next-recommendations-label = Ver recomendaciones
fix-flow-celebration-next-dashboard-label = Ir a tu panel

## High-risk flow

fix-flow-celebration-high-risk-title = ¡Has corregido tus exposiciones de alto riesgo!
fix-flow-celebration-high-risk-description-in-progress = Hacer este trabajo puede parecer mucho, pero es importante hacerlo para mantenerte seguro. Sigue así con el buen trabajo.
fix-flow-celebration-high-risk-description-done = Hacer este trabajo puede parecer mucho, pero es importante hacerlo para mantenerte seguro.
fix-flow-celebration-high-risk-description-next-passwords = Ahora arreglemos tus contraseñas expuestas.
fix-flow-celebration-high-risk-description-next-security-questions = Ahora arreglemos tus preguntas de seguridad expuestas.

## Leaked passwords and security questions flow

fix-flow-celebration-leaked-passwords-title = ¡Tus contraseñas ahora están protegidas!
fix-flow-celebration-security-questions-title = ¡Tus preguntas de seguridad están protegidas!
fix-flow-celebration-leaked-passwords-description-next-security-questions = Ahora revisemos y actualicemos tus preguntas de seguridad expuestas.

## Security recommendations flow

fix-flow-celebration-security-recommendations-title = ¡Has completado todas tus recomendaciones!

# High Risk Data Breaches

high-risk-breach-heading = Esto es lo que debes hacer
# Variables
# $num_breaches is the number of breaches where the high risk data was found.
high-risk-breach-summary =
    { $num_breaches ->
        [one] Apareció en { $num_breaches } filtración de datos:
       *[other] Apareció en { $num_breaches } filtraciones de datos:
    }
# Variables
# $breach_name is the name of the breach where the high risk data was found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
high-risk-breach-name-and-date = { $breach_name } <breach_date> el { $breach_date }</breach_date>
high-risk-breach-mark-as-fixed = Marcar como corregido
high-risk-breach-skip = Saltar por ahora

# Credit Card Breaches

high-risk-breach-credit-card-title = Tu número de tarjeta de crédito fue expuesto
high-risk-breach-credit-card-step-one = Si todavía tienes esta tarjeta, comunícate con el emisor para reportar el robo.
high-risk-breach-credit-card-step-two = Solicita una nueva tarjeta con un nuevo número.
high-risk-breach-credit-card-step-three = Revisa tus cuentas en busca de cargos no autorizados.

# Bank Account Breaches

high-risk-breach-bank-account-title = Tu cuenta bancaria quedó expuesta
high-risk-breach-bank-account-step-two = Cambia tu número de cuenta.
high-risk-breach-bank-account-step-three = Revisa tus cuentas en busca de cargos no autorizados.

# Social Security Number Breaches

high-risk-breach-social-security-title = Tu número de seguro social fue expuesto

# Social Security Number Modal

ssn-modal-title = Acerca de las alertas de fraude y los congelamientos de crédito
ssn-modal-description-fraud-part-one = <b>Una alerta de fraude</b> requiere que las empresas verifiquen su identidad antes de emitir nuevo crédito a su nombre. Es gratis, tiene una duración de un año y no afectará negativamente tu puntaje crediticio.
ssn-modal-description-fraud-part-two = Para establecer uno, comunícate con cualquiera de las tres agencias de crédito. No es necesario que contactes a las tres.
ssn-modal-description-freeze-credit-part-one = <b>Congelar tu crédito</b> impide que alguien abra una nueva cuenta a tu nombre. Es gratis y no afectará negativamente tu puntaje crediticio, pero deberás descongelarlo antes de abrir cuentas nuevas.
ssn-modal-description-freeze-credit-part-two = Para congelar su crédito, comuníquese con cada una de las tres agencias de crédito: <equifax_link>Equifax</equifax_link>, <experian_link>Experian</experian_link> y <transunion_link>TransUnion</transunion_link>.
ssn-modal-learn-more = Aprende más acerca de las alertas de fraude y los congelamientos de crédito
ssn-modal-ok = Aceptar

# PIN Breaches

high-risk-breach-pin-title = Tu PIN fue expuesto

# No high risk breaches found

high-risk-breach-none-sub-description-part-one = Las filtraciones de datos de alto riesgo incluyen:
high-risk-breach-none-sub-description-ssn = Número de seguridad social
high-risk-breach-none-sub-description-bank-account = Información de la cuenta bancaria
high-risk-breach-none-sub-description-cc-number = Números de tarjetas de crédito
high-risk-breach-none-sub-description-pin = PINs
high-risk-breach-none-continue = Continuar

# Security recommendations

security-recommendation-steps-label = Recomendaciones de seguridad
security-recommendation-steps-title = Aquí está nuestro consejo:
security-recommendation-steps-cta-label = ¡Entendido!

# Phone security recommendation

security-recommendation-phone-title = Protege tu número de teléfono

# Email security recommendation

security-recommendation-email-title = Protege tu email

# IP security recommendation

security-recommendation-ip-title = Utiliza un VPN para mayor privacidad

# Leaked Passwords

# Variables
# $breach_name is the name of the breach where the leaked password was found.
leaked-passwords-title = Tu contraseña de { $breach_name } fue expuesta
leaked-passwords-steps-title = Esto es lo que debes hacer
leaked-passwords-steps-subtitle = Esto requiere acceso a tu cuenta, por lo que deberás solucionarlo manualmente.
# Variables
# $breach_name is the name of the breach where the leaked password was found.
# $emails_affected are the emails associated with the breach.
leaked-passwords-step-one = Cambia tu contraseña para <b>{ $emails_affected }</b> en <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-passwords-step-two = Cámbiala en cualquier otro lugar donde la hayas usado.
leaked-passwords-mark-as-fixed = Marcar como corregido
leaked-passwords-skip = Saltar por ahora

# Leaked Security Questions

leaked-security-questions-title = Tus preguntas de seguridad fueron expuestas
# Variables
# $breach_name is the name of the breach where the leaked security questions were found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
leaked-security-questions-summary = Aparecieron en una filtración de datos de { $breach_name } el { $breach_date }.
leaked-security-questions-description = Los estafadores pueden usarlas para acceder a tus cuentas y a cualquier otro sitio donde haya utilizado las mismas preguntas de seguridad. Actualízalas ahora para proteger tus cuentas.
leaked-security-questions-steps-title = Esto es lo que debes hacer
leaked-security-questions-steps-subtitle = Esto requiere acceso a tu cuenta, por lo que deberás solucionarlo manualmente.
# Variables
# $breach_name is the name of the breach where the security questions were found.
# $email_affected is the email associated with the breach.
leaked-security-questions-step-one = Actualiza tus preguntas de seguridad para <b>{ $email_affected }</b> en <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
