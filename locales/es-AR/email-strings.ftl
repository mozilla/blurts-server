# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-button-sign-in = Iniciar sesión

## Email footers

email-footer-support-heading = ¿Preguntas sobre { -brand-mozilla-monitor }?
email-footer-support-content = Visitá nuestro <support-link>Centro de asistencia</support-link> para obtener ayuda
email-footer-trigger-transactional = Recibís este correo porque te suscribiste a { -brand-mozilla-monitor }.
email-footer-reason-subscriber = Estás recibiendo este correo electrónico automático como suscriptor de { -brand-mozilla-monitor }. Si lo recibiste por error, no tenés que hacer nada. Para más información, visitá <support-link>Soporte de { -brand-mozilla } </support-link>.
email-footer-reason-subscriber-one-time = Estás recibiendo este correo electrónico automático por única vez porque estás suscripto a { -brand-monitor-plus }. No vas a recibir más correos electrónicos como este. Para más información, visitá <support-link>Soporte de { -brand-mozilla } </support-link>.
# Variables:
#    $support_link (string) - The URL the user can visit for support, e.g. "https://support.mozilla.org"
email-footer-support-content-plain = Visitá nuestro Centro de soporte para obtener ayuda: { $support_link }
# Variables:
#   $hibp_link (string) - URL to Have I Been Pwned, e.g. "https://haveibeenpwned.com".
email-footer-source-hibp-plain = Datos de filtración proporcionados por { -brand-HIBP }: { $hibp_link }
email-footer-source-hibp = Datos de filtración proporcionados por <hibp-link>{ -brand-HIBP }</hibp-link>
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = Privacidad
email-unsubscribe-link = <link_to_unsub>Desuscribirse</link_to_unsub>
# Variables:
#   $unsub_link (string) - URL to the unsubscribe page, e.g. "https://monitor.mozilla.org/unsubscribe/...".
email-unsubscribe-link-plain = Desuscribirse: { $unsub_link }
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# Button text
verify-email-cta = Verificar correo electrónico
# Headline of verification email
email-link-expires = Este enlace vence en 24 horas.

##

# Subject line of email
email-subject-found-breaches = { -product-name } encontró tu información en estas filtraciones
# Subject line of email
email-subject-no-breaches = { -product-name } no encontró filtraciones conocidas
# Subject line of email
email-subject-verify = Verificá tu correo electrónico para { -product-name }
fxm-warns-you-no-breaches =
    { -product-name } te advierte sobre filtraciones de datos involucrados con tu información personal.
    Hasta ahora, no se encontraron infracciones. Te enviaremos una alerta si tu dirección de correo electrónico aparece en una nueva filtración.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Datos de filtración provistos por <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Verification email

email-verify-heading = Protegé tus datos, empezando ahora mismo
email-verify-simply-click = Simplemente hacé clic en el enlace a continuación para terminar de verificar tu cuenta.

## Breach report

email-breach-summary = Acá está el resumen de tu filtración de datos
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = Los resultados de búsqueda de tu cuenta { $email-address } han detectado que tu correo electrónico puede haber sido expuesto. Te recomendamos que actués ahora para resolver esta filtración.
email-dashboard-cta = Ir al panel de control

## Breach alert email

email-breach-alert-all-subject = Nueva filtración de datos detectada
email-breach-alert-all-preview = Te guiaremos paso a paso para resolverlo.
email-breach-alert-all-hero-heading = Estuviste en una nueva filtración de datos
email-breach-alert-all-hero-subheading = No te preocupés, podemos ayudarte a resolver esta exposición
email-breach-alert-all-lead = { -brand-mozilla-monitor } descubrió la siguiente filtración de datos que incluye tu información personal:
email-breach-alert-all-source-title = Fuente de la filtración:
email-breach-alert-all-data-points-title = Tus datos expuestos:
email-breach-alert-all-next-steps-lead = Te guiaremos paso a paso sobre cómo resolver esta filtración de datos.
email-breach-alert-all-next-steps-cta-label = Empecemos
email-breach-alert-all-next-steps-button-dashboard = Ir al panel de control

## Breach alert redesigned strings

# $company-name is the name of the company/site that was breached.
email-breach-alert-all-hero-heading-1 = Detalles de filtración de datos de { $company-name }
# $company-name is the name of the company/site that was breached.
# $breach-date is the date of the breach.
email-breach-alert-all-lead-1 = { -brand-mozilla-monitor } encontró tu información en una filtración de datos de { $company-name } el { $breach-date }. Estás recibiendo esta alerta porque te registraste para recibir <link_to_settings>notificaciones de filtraciones</link_to_settings>.
email-breach-alert-all-source-title-1 = Detalles de la filtración
email-breach-alert-company = Empresa:
email-breach-alert-date-of-breach = Fecha de la filtración:
email-breach-alert-info-exposed = Tu información expuesta:
email-breach-alert-next-steps = Próximos pasos
email-breach-alert-next-steps-description = <sign_in_link>Iniciá sesión</sign_in_link> en tu panel de control de { -brand-mozilla-monitor }. Te guiaremos a través de los pasos necesarios para resolverlo.
email-breach-alert-all-next-steps-button-resolve-breach-on-dashboard = Resolver filtración en el panel de control
email-breach-alert-faqs-title = Preguntas frecuentes
email-breach-alert-faq-qn-1 = ¿Por qué estoy recibiendo esto?
email-breach-alert-faq-ans-1 = Te registraste para recibir alertas de filtración de datos. <link_to_settings>Actualizá tus preferencias</link_to_settings> en cualquier momento en la configuración.
email-breach-alert-faq-qn-2 = ¿Por qué no reconozco esta empresa o sitio?
email-breach-alert-faq-ans-2 = Puede haber cambiado de propietario o de nombre, involucrar una cuenta antigua o una que fue creada para vos, o provenir de una lista comprada de información personal expuesta.
email-breach-alert-faq-qn-3 = ¿Qué es una alerta de filtración de datos?
email-breach-alert-faq-ans-3 = Una notificación que { -brand-mozilla-monitor } envía cuando la información personal que estás monitoreando es expuesta, robada o copiada sin permiso.
email-breach-alert-faq-qn-4 = ¿Qué es { -brand-mozilla-monitor }?
email-breach-alert-faq-ans-4 = Un servicio gratuito de notificación de filtraciones de datos que te advierte si tus cuentas en línea se han visto involucradas en una filtración de datos.
