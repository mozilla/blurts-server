# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-logo-alt = { -brand-mozilla-monitor }
email-header-button-sign-in = Conectarse

## Email footers

email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = Privacidad
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# A link to legal information about mozilla products.
legal = Legal
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
email-breach-alert-blurb =
    { -product-name } te advierte sobre filtraciones de datos que involucren información personal tuya.
    Acabamos de recibir detalles acerca de una filtración de datos de otra compañía.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Datos de filtración provistos por <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Verification email

email-verify-heading = Protege tus datos, empieza ya
email-verify-subhead = Verifica tu correo electrónico para empezar a proteger tus datos después de una filtración.
email-verify-simply-click = Simplemente haz clic en el enlace a continuación para terminar de verificar tu cuenta.

## Breach report

email-breach-summary = Aquí está el resumen de tu filtración de datos
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = Los resultados de búsqueda de tu cuenta { $email-address } han detectado que tu correo electrónico podría haber sido expuesto. Te recomendamos que actúes ahora para resolver este problema.
# Deprecated after the redesigned breach alert email is launched
# Variables:
#   $email-address (string) - Email address
email-breach-detected-2 = Los resultados de búsqueda de tu cuenta <b>{ $email-address }</b> han detectado que tu correo electrónico podría haber sido expuesto. Te recomendamos que actúes ahora para resolver este problema.
email-dashboard-cta = Ir al panel de control

## Breach alert

# Deprecated after the redesigned breach alert email is launched
email-spotted-new-breach = Hemos detectado una nueva filtración de datos

## Redesigned breach alert email

email-breach-alert-all-source-title = Fuente de la filtración:
email-breach-alert-all-data-points-title = Tus datos expuestos:
