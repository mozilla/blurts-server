# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# A link to legal information about mozilla products.
legal = Legal
# Unsubscribe link in email.
email-unsub-link = Cancelar suscripción
# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb = Estás recibiendo este correo electrónico porque te registraste en alerteas de { -product-name } ¿No querés recibir más estos correos? { $unsubLink }. Este es un correo electrónico automatizado. Buscá ayuda en  { $faqLink }.
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
    { -product-name } te advierte sobre filtraciones de datos relacionadas con tu información personal.
    Hasta el momento, no se encontraron infracciones. Te enviaremos un alerta si tu dirección de correo electrónico aparece en una nueva filtración.
email-breach-alert-blurb =
    { -product-name } te advierte sobre filtraciones de datos relacionadas con tu información personal.
    Recién recibimos detalles sobre la filtración de datos de otra empresa.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Datos de filtración provistos por <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Verification email

email-verify-heading = Protegé tus datos, empezando ahora mismo
email-verify-subhead = Verificá tu correo electrónico para empezar a proteger tus datos después de una filtración.
email-verify-simply-click = Simplemente hacé clic en el enlace a continuación para terminar de verificar tu cuenta.

## Breach report

email-breach-summary = Acá está el resumen de tu filtración de datos
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = Los resultados de búsqueda de tu cuenta { $email-address } han detectado que tu correo electrónico puede haber sido expuesto. Te recomendamos que actués ahora para resolver esta filtración.
# Variables:
#   $email-address (string) - Email address
email-breach-detected-2 = Los resultados de búsqueda de tu cuenta <b>{ $email-address }</b> han detectado que tu correo electrónico puede haber sido expuesto. Te recomendamos que actués ahora para resolver esta filtración.
email-dashboard-cta = Ir al panel de control

## Breach alert

email-spotted-new-breach = Hemos detectado una nueva filtración de datos
