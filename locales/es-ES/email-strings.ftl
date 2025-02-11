# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-logo-alt = { -brand-mozilla-monitor }
email-header-button-sign-in = Iniciar sesión

## Email footers

email-footer-support-heading = ¿Tienes preguntas sobre { -brand-mozilla-monitor }?
email-footer-support-content = Visita nuestro <support-link>Centro de asistencia</support-link> para obtener ayuda
email-footer-trigger-transactional = Estás recibiendo este correo electrónico como suscriptor de { -brand-mozilla-monitor }.
email-footer-source-hibp = Datos de filtración proporcionados por <hibp-link>{ -brand-HIBP }</hibp-link>
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = Privacidad
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# A link to legal information about mozilla products.
legal = Legal
# Button text
verify-email-cta = Verificar correo electrónico
# Headline of verification email
email-link-expires = Este enlace caduca en 24 horas

##

# Subject line of email
email-subject-found-breaches = { -product-name } encontró tu información en estas filtraciones
# Subject line of email
email-subject-no-breaches = { -product-name } no encontró filtraciones conocidas
# Subject line of email
email-subject-verify = Comprueba tu correo con { -product-name }
fxm-warns-you-no-breaches =
    { -product-name } te advierte sobre las filtraciones de datos que afectan a tu información personal.
    Por ahora no se ha encontrado ninguna. Te enviaremos una alerta si tu dirección de correo aparece en una nueva filtración.
email-breach-alert-blurb =
    { -product-name } te advierte sobre las filtraciones de datos que afectan a tu información personal.
    Acabamos de recibir información sobre la filtración de datos de otra empresa.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Datos de filtración proporcionados por <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Verification email

email-verify-heading = Protege tus datos, empieza ahora mismo
email-verify-subhead = Verifica tu correo electrónico para empezar a proteger tus datos después de una filtración.
email-verify-simply-click = Simplemente haz clic en el enlace a continuación para terminar de verificar tu cuenta.

## Breach report

email-breach-summary = Aquí está el resumen de tu filtración de datos
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = Los resultados de búsqueda de tu cuenta { $email-address } han detectado que tu correo electrónico podría haber sido expuesto. Te recomendamos que actúes ahora para resolver esta filtración.
email-dashboard-cta = Ir al panel de control

## Breach alert email

email-breach-alert-all-subject = Nueva filtración de datos detectada
email-breach-alert-all-preview = Te guiaremos paso a paso para resolverlo.
email-breach-alert-all-hero-heading = Has sido afectado por una nueva filtración de datos
email-breach-alert-all-hero-subheading = No te preocupes, podemos ayudarte a resolver este problema.
email-breach-alert-all-lead = { -brand-mozilla-monitor } descubrió la siguiente filtración de datos que incluye tu información personal:
email-breach-alert-all-source-title = Fuente de la filtración:
email-breach-alert-all-data-points-title = Tus datos expuestos:
email-breach-alert-all-next-steps-lead = Te guiaremos paso a paso sobre cómo resolver esta filtración de datos.
email-breach-alert-all-next-steps-cta-label = Empecemos
email-breach-alert-all-next-steps-button-dashboard = Ir al panel de control
