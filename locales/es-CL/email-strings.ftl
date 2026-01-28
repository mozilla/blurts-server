# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-button-sign-in = Conectarse

## Email footers

email-footer-support-heading = ¿Tienes preguntas acerca de { -brand-mozilla-monitor }?
email-footer-support-content = Visita nuestro <support-link>Centro de soporte</support-link> para obtener ayuda
email-footer-trigger-transactional = Estás recibiendo este correo electrónico como suscriptor de { -brand-mozilla-monitor }.
email-footer-reason-subscriber = Recibes este correo electrónico automático como suscriptor de { -brand-mozilla-monitor }. Si lo recibiste por error, no es necesario que hagas nada. Para más información, visita el soporte de <support-link>{ -brand-mozilla }</support-link>.
email-footer-reason-subscriber-one-time = Has recibido este correo electrónico automático único porque estás suscrito a { -brand-monitor-plus }. No recibirás más correos como este. Para más información, visita el soporte de <support-link>{ -brand-mozilla }</support-link>.
# Variables:
#    $support_link (string) - The URL the user can visit for support, e.g. "https://support.mozilla.org"
email-footer-support-content-plain =
    Visita nuestro Centro de soporte para obtener ayuda:
    { $support_link }
# Variables:
#   $hibp_link (string) - URL to Have I Been Pwned, e.g. "https://haveibeenpwned.com".
email-footer-source-hibp-plain = Datos de filtración proporcionados por { -brand-HIBP }: { $hibp_link }
email-footer-source-hibp = Datos de filtración provistos por <hibp-link>{ -brand-HIBP }</hibp-link>
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = Privacidad
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# Button text
verify-email-cta = Verificar correo
# Headline of verification email
email-link-expires = Este enlace expira en 24 horas.

##

# Subject line of email
email-subject-found-breaches = { -product-name } encontró tu información en las siguientes filtraciones
# Subject line of email
email-subject-no-breaches = { -product-name } no encontró filtraciones conocidas
# Subject line of email
email-subject-verify = Verifica tu correo para { -product-name }
fxm-warns-you-no-breaches =
    { -product-name } te advierte sobre filtraciones de datos que involucren información personal tuya.
    Hasta el momento, no se han encontrado filtraciones. Te enviaremos una alerta si tu correo aparece en una nueva filtración.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Datos de filtración provistos por <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Verification email

email-verify-heading = Protege tus datos, empieza ya
email-verify-simply-click = Simplemente haz clic en el enlace a continuación para terminar de verificar tu cuenta.

## Breach report

email-breach-summary = Aquí está el resumen de tu filtración de datos
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = Los resultados de búsqueda de tu cuenta { $email-address } han detectado que tu correo electrónico podría haber sido expuesto. Te recomendamos que actúes ahora para resolver este problema.
email-dashboard-cta = Ir al panel de control

## Breach alert email

email-breach-alert-all-subject = Nueva filtración de datos detectada
email-breach-alert-all-preview = Te guiaremos a través de los pasos para resolverlo.
email-breach-alert-all-hero-heading = Has estado presente en una nueva filtración de datos.
email-breach-alert-all-hero-subheading = No te preocupes, podemos ayudarte a resolver esta exposición.
email-breach-alert-all-lead = { -brand-mozilla-monitor } descubrió la siguiente filtración de datos que incluye tu información personal:
email-breach-alert-all-source-title = Fuente de la filtración:
email-breach-alert-all-data-points-title = Tus datos expuestos:
email-breach-alert-all-next-steps-lead = Te guiaremos paso a paso sobre cómo resolver esta filtración de datos.
email-breach-alert-all-next-steps-cta-label = Empecemos
email-breach-alert-all-next-steps-button-dashboard = Ir al panel de control
