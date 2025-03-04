# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = Filtraciones de datos de alto riesgo
fix-flow-nav-leaked-passwords = Contraseñas filtradas
fix-flow-nav-security-recommendations = Recomendaciones de seguridad
guided-resolution-flow-exit = Regresar al panel
guided-resolution-flow-next-arrow = Ir al siguiente paso
guided-resolution-flow-next-arrow-sub-step = Ir al siguiente resultado
guided-resolution-flow-step-navigation-label = Pasos guiados

# Celebration screens


## Shared CTA labels

fix-flow-celebration-next-label = Sigamos adelante
fix-flow-celebration-next-recommendations-label = Ver recomendaciones
fix-flow-celebration-next-dashboard-label = Ve a tu panel de control

## High-risk flow

fix-flow-celebration-high-risk-title = ¡Has solucionado tus exposiciones de alto riesgo!
fix-flow-celebration-high-risk-description-in-progress = Hacer este trabajo puede parecer mucho, pero es importante hacerlo para mantenerse a salvo. Sigan con el buen trabajo.
fix-flow-celebration-high-risk-description-done = Hacer este trabajo puede parecer mucho, pero es importante hacerlo para mantenerse a salvo.
fix-flow-celebration-high-risk-description-next-passwords = Ahora arreglemos sus contraseñas expuestas.
fix-flow-celebration-high-risk-description-next-security-questions = Ahora solucionemos sus preguntas de seguridad expuestas.
fix-flow-celebration-high-risk-description-next-security-recommendations = A continuación, le brindaremos recomendaciones de seguridad personalizadas en función de los datos suyos que hayan quedado expuestos.
fix-flow-celebration-high-risk-description-next-dashboard = Has llegado al final de tus pasos. Puede ver cualquier elemento de acción y realizar un seguimiento de su progreso en su panel.

## Leaked passwords and security questions flow

fix-flow-celebration-leaked-passwords-title = ¡Tus contraseñas ahora están protegidas!
fix-flow-celebration-security-questions-title = ¡Tus preguntas de seguridad están protegidas!
fix-flow-celebration-leaked-passwords-description-next-security-questions = Ahora revisemos y actualicemos sus preguntas de seguridad expuestas.
fix-flow-celebration-leaked-passwords-description-next-security-recommendations = A continuación, le brindaremos recomendaciones de seguridad personalizadas en función de los datos suyos que hayan quedado expuestos.
fix-flow-celebration-leaked-passwords-description-next-dashboard = ¡Bien hecho! Has llegado al final de tus pasos. Puede ver cualquier elemento de acción y realizar un seguimiento de su progreso en su panel.

## Security recommendations flow

fix-flow-celebration-security-recommendations-title = ¡Has completado todas tus recomendaciones!
fix-flow-celebration-security-recommendations-description-next-dashboard = ¡Bien hecho! Has llegado al final de tus pasos. Puede ver cualquier elemento de acción y realizar un seguimiento de su progreso en su panel de control.

# High Risk Data Breaches

high-risk-breach-heading = Esto es lo que debes hacer
high-risk-breach-subheading = Esto requiere acceso a su información confidencial, por lo que deberá corregirlo manualmente.
# Variables
# $num_breaches is the number of breaches where the high risk data was found.
high-risk-breach-summary =
    { $num_breaches ->
        [one] Apareció en { $num_breaches } violación de datos:
       *[other] Apareció en { $num_breaches } violaciones de datos:
    }
# Variables
# $breach_name is the name of the breach where the high risk data was found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
high-risk-breach-name-and-date = { $breach_name } <breach_date>el { $breach_date }</breach_date>
high-risk-breach-mark-as-fixed = Marcar como arreglado
high-risk-breach-skip = Saltar por ahora
# Variables:
# $estimated_time is the estimated time it would take for a user to complete breach resolution steps. It not be singular, and the + is meant as "or more".
# An example of this string is Your estimated time: 15+ minutes.
high-risk-breach-estimated-time =
    { $estimated_time ->
        [one] Tu tiempo estimado: { $estimated_time }+ minuto
       *[other] Tu tiempo estimado: { $estimated_time }+ minutos
    }

# Credit Card Breaches

high-risk-breach-credit-card-title = Su número de tarjeta de crédito fue expuesto
high-risk-breach-credit-card-description = Cualquiera que lo obtenga puede realizar compras no autorizadas de las que usted puede ser responsable. Actúe ahora para evitar daños financieros.
high-risk-breach-credit-card-step-one = Si todavía tienes esta tarjeta, comunícate con el emisor para informar del robo.
high-risk-breach-credit-card-step-two = Solicita una nueva tarjeta con un nuevo número.
high-risk-breach-credit-card-step-three = Revisa tus cuentas en busca de cargos no autorizados.

# Bank Account Breaches

high-risk-breach-bank-account-title = Tu cuenta bancaria fue expuesta
high-risk-breach-bank-account-description = Tomar medidas lo antes posible podría brindarte más protección legal para ayudarte a recuperar cualquier pérdida.
high-risk-breach-bank-account-step-one = Notifica inmediatamente a tu banco de que tu número de cuenta se ha visto comprometido.
high-risk-breach-bank-account-step-two = Cambia tu número de cuenta.
high-risk-breach-bank-account-step-three = Revisa tus cuentas en busca de cargos no autorizados.

# Social Security Number Breaches

high-risk-breach-social-security-title = Tu número de la seguridad social fue expuesto
high-risk-breach-social-security-description = Los estafadores pueden abrir nuevos préstamos o tarjetas de crédito con tu número de la seguridad social. Actúa rápido para evitar daños financieros.
high-risk-breach-social-security-step-one = Protégete <link_to_info>configurando una alerta de fraude o congelando tu crédito.</link_to_info>
high-risk-breach-social-security-step-two = <link_to_info>Consulta tu informe de crédito</link_to_info> para detectar cuentas no reconocidas.

# Social Security Number Modal

ssn-modal-title = Acerca de las alertas de fraude y el bloqueo de crédito
ssn-modal-description-fraud-part-one = <b>Una alerta de fraude</b> requiere que las empresas verifiquen tu identidad antes de emitir nuevo crédito a tu nombre. Es gratis, tiene una duración de un año y no afectará negativamente tu puntuación crediticia.
ssn-modal-description-fraud-part-two = Para establecer uno, comunícate con cualquiera de las tres agencias de crédito. No es necesario que contactes a las tres.
ssn-modal-description-freeze-credit-part-one = <b>Congelar tu crédito</b> impide que alguien abra una nueva cuenta a tu nombre. Es gratis y no afectará negativamente tu puntuación crediticia, pero deberás descongelarlo antes de abrir cuentas nuevas.
ssn-modal-description-freeze-credit-part-two = Para congelar su crédito, comunícate con cada una de las tres agencias de crédito: <equifax_link>Equifax</equifax_link>, <experian_link>Experian</experian_link> y <transunion_link>TransUnion</transunion_link>.
ssn-modal-learn-more = Saber más sobre las alertas de fraude y las congelaciones de crédito
ssn-modal-ok = Aceptar

# PIN Breaches

high-risk-breach-pin-title = Tu PIN fue expuesto
high-risk-breach-pin-description = Tomar medidas lo antes posible podría brindarte más protección legal para ayudarte a recuperar cualquier pérdida.
high-risk-breach-pin-step-one = Notifica inmediatamente a tu banco de que tu PIN se ha visto comprometido.
high-risk-breach-pin-step-two = Cambia tu PIN en cualquier lugar donde hayas usado el mismo.
high-risk-breach-pin-step-three = Revisa tus cuentas en busca de cargos no autorizados.

# No high risk breaches found

high-risk-breach-none-title = Buenas noticias, no encontramos ninguna filtración de datos de alto riesgo.
# Variables
# $email_list is list of emails that the user is monitoring for breaches. E.g. john@yahoo.com, ali@gmail.com, sam@hotmail.com
high-risk-breach-none-description = Detectamos filtraciones de datos en base a tu dirección de correo electrónico, y no encontramos ninguna filtración de datos de alto riesgo para { $email_list }.
high-risk-breach-none-sub-description-part-one = Las filtraciones de datos de alto riesgo incluyen:
high-risk-breach-none-sub-description-ssn = Número de seguro social
high-risk-breach-none-sub-description-bank-account = información de cuenta bancaria
high-risk-breach-none-sub-description-cc-number = Números de tarjetas de crédito
high-risk-breach-none-sub-description-pin = PINs
high-risk-breach-none-continue = Continuar

# Security recommendations

security-recommendation-steps-label = Recomendaciones de seguridad
security-recommendation-steps-title = Aquí está nuestro consejo:
security-recommendation-steps-cta-label = ¡Entendido!

# Phone security recommendation

security-recommendation-phone-title = Protege tu número de teléfono
# $num_breaches is the number of breaches where the phone number was found.
security-recommendation-phone-summary =
    { $num_breaches ->
        [one] Su número de teléfono quedó expuesto en { $num_breaches } violación de datos:
       *[other] Su número de teléfono quedó expuesto en { $num_breaches } violaciones de datos:
    }
security-recommendation-phone-description = Lamentablemente no puedes retirarlo. Pero hay medidas que puede tomar para asegurarse de mantenerse a salvo.
security-recommendation-phone-step-one = Bloquea números spam para evitar más llamadas no deseadas
security-recommendation-phone-step-two = No haga clic en enlaces en mensajes de texto de remitentes desconocidos; Si parece ser de una fuente confiable, llame directamente para confirmar.

# Email security recommendation

security-recommendation-email-title = Protege tu dirección de correo electrónico
# $num_breaches is the number of breaches where the email address was found.
security-recommendation-email-summary =
    { $num_breaches ->
        [one] Tu dirección de correo electrónico quedó expuesta en{ $num_breaches }filtración de datos:
       *[other] Tu dirección de correo electrónico quedó expuesta en { $num_breaches } filtraciones de datos:
    }
security-recommendation-email-description = Lamentablemente, no es posible solucionar este problema, pero hay medidas que puedes tomar para protegerte.
security-recommendation-email-step-one = No hagas clic en enlaces incluidos en correos electrónicos de remitentes desconocidos; Si parece ser de una fuente confiable, llama directamente para confirmar.
security-recommendation-email-step-two = Ten cuidado con las <link_to_info>estafas de phishing</link_to_info>
security-recommendation-email-step-three = Marcar correos electrónicos sospechosos como spam y bloquear al remitente
security-recommendation-email-step-four = Utiliza <link_to_info>máscaras de correo electrónico de { -brand-relay }</link_to_info> para proteger tu correo electrónico en el futuro

# IP security recommendation

security-recommendation-ip-title = Utiliza un VPN para mayor privacidad
# $num_breaches is the number of breaches where the IP address was found.
security-recommendation-ip-summary =
    { $num_breaches ->
        [one] Tu dirección IP quedó expuesta en { $num_breaches } filtración de datos:
       *[other] Tu dirección IP quedó expuesta en { $num_breaches } filtraciones de datos:
    }
security-recommendation-ip-description = Tu dirección IP indica tu ubicación y proveedor de servicios de Internet. Los hackers podrían utilizar esta información para encontrar tu ubicación o intentar conectarse a tus dispositivos.
security-recommendation-ip-step-one = Utiliza un VPN (como <link_to_info>{ -brand-mozilla-vpn }</link_to_info>) para ocultar tu dirección IP real y usar Internet de forma privada.

# Leaked Passwords

# Variables
# $breach_name is the name of the breach where the leaked password was found.
leaked-passwords-title = Tu contraseña de { $breach_name } fue expuesta
# Variables
# $breach_date is the date when the breach occurred.
leaked-passwords-summary = Apareciste en una filtración de datos el { $breach_date }.
leaked-passwords-description = Los estafadores pueden acceder a tu cuenta y probablemente intentarán usarla en otras cuentas para ver si reutilizaste la misma contraseña. Cámbiala en cualquier lugar donde la hayas usado para protegerte.
leaked-passwords-steps-title = Esto es lo que debes hacer
leaked-passwords-steps-subtitle = Esto requiere acceso a tu cuenta, por lo que deberás solucionarlo manualmente.
# Variables
# $breach_name is the name of the breach where the leaked password was found.
# $emails_affected are the emails associated with the breach.
leaked-passwords-step-one = Cambia tu contraseña para <b>{ $emails_affected }</b> en <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-passwords-step-two = Cámbiala en cualquier otro lugar donde la hayas utilizado.
leaked-passwords-mark-as-fixed = Marcar como corregido
leaked-passwords-skip = Saltar por ahora
# Variables
# $estimated_time is the amount of time it would take for a user to manually resolve a leaked password breach. It will always be a number greater than 1.
# "Est." is shortform for "Estimated".
# "mins" is shortform for "minutes".
leaked-passwords-estimated-time =
    { $estimated_time ->
        [one] Tiempo estimado para completar: { $estimated_time } minuto por sitio
       *[other] Tiempo estimado para completar: { $estimated_time } minutos por sitio
    }

# Leaked Security Questions

leaked-security-questions-title = Tus preguntas de seguridad fueron expuestas
# Variables
# $breach_name is the name of the breach where the leaked security questions were found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
leaked-security-questions-summary = Aparecieron en una filtración de datos de { $breach_name } el { $breach_date }.
leaked-security-questions-description = Los estafadores pueden usarlas para acceder a tus cuentas y a cualquier otro sitio donde haya utilizado las mismas preguntas de seguridad. Actualízalas ahora para proteger tus cuentas.
leaked-security-questions-steps-title = Esto es lo que debes hacer
leaked-security-questions-steps-subtitle = Esto requiere acceso a su cuenta, por lo que deberá solucionarlo manualmente.
# Variables
# $breach_name is the name of the breach where the security questions were found.
# $email_affected is the email associated with the breach.
leaked-security-questions-step-one = Actualice sus preguntas de seguridad para <b>{ $email_affected }</b> en <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-security-questions-step-two = Actualiza en cualquier otro sitio donde hayas utilizado las mismas preguntas de seguridad. Asegúrate de utilizar diferentes preguntas de seguridad para cada cuenta.
