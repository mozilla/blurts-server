# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Breaches header

# Data classes pie chart title
breach-chart-title = Datos filtrados
# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = Filtraciones de datos para { $email-select }
# $count is the number of emails a user has added out of $total allowed
emails-monitored =
    { $total ->
        [one] { $count } de { $total } correo electrónico monitoreado
        [many] { $count } de { $total } correos electrónicos monitoreados
       *[other] { $count } de { $total } correos electrónicos monitoreados
    }
# link to Settings page where user can add/remove emails and set message preferences
manage-emails-link = Administrar correos electrónicos

## Breaches resolved filter

filter-label-unresolved = Filtraciones sin resolver
filter-label-resolved = Filtraciones resueltas

## Breaches table

column-company = EMPRESA
column-breached-data = DATOS FILTRADOS
column-detected = DETECTADO
# “Resolved” is shown next to a breach if all recommended actions in response to the breach have been taken.
column-status-badge-resolved = Resuelta
# “Active” is shown next to a breach if the user still has at least one recommended action to perform in response to the breach.
column-status-badge-active = Activa
breaches-resolve-heading = Resolver esta filtración:
breaches-none-headline = No sé encontraron filtraciones
# Variables:
#   $email (String) - An email address that we did not find breaches for, e.g. `someone@example.com`
breaches-none-copy = ¡Buenas noticias! No hay filtraciones conocidas informadas para { $email }. Seguiremos monitoreando este correo electrónico y te haremos saber si aparece alguna nueva filtración.
breaches-none-cta-blurb = ¿Querés monitorear otro correo electrónico?
breaches-none-cta-button = Agregar dirección de correo electrónico
breaches-all-resolved-headline = Todas las filtraciones resueltas
# Variables:
#   $email (String) - An email address for which all breaches have been resolved, e.g. `someone@example.com`
breaches-all-resolved-copy = ¡Bien hecho! Resolviste todas las filtraciones para { $email }. Seguiremos monitoreando este correo electrónico y te haremos saber si aparecen nuevas filtraciones.
breaches-all-resolved-cta-blurb = ¿Querés monitorear otro correo electrónico?
breaches-all-resolved-cta-button = Agregar dirección de correo electrónico
# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
breach-description = El { $breachDate }, { $companyName } tuvo una filtración. Cuando se descubrió y verificó, fue agregada a nuestra base de datos el { $addedDate }. Está filtración incluía: { $dataClasses }

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = Administrador de contraseñas de { -brand-firefox }
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }

## Prompts the user for changes when there is a breach detected of password

# { $breachedCompanyLink } will link to the website of the company where the breach occurred
breach-checklist-pw-header-2 = Visitá el sitio web de la compañía para cambiar tu contraseña y habilitar la autenticación de dos pasos (2FA).
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-pw-body-2 = Asegurate de que tu contraseña sea única y difícil de adivinar. Si esta contraseña se usa en otras cuentas, asegurate de cambiarla allá también. { $passwordManagerLink } puede ayudarte a realizar un seguimiento seguro de todas tus contraseñas.

## Prompts the user for changes when there is a breach detected of email

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-email-header-2 = Protegé tu correo electrónico con un servicio de enmascaramiento de correo electrónico como { $firefoxRelayLink }.
breach-checklist-email-body = Esto puede ocultar tu verdadera dirección de correo electrónico mientras reenvía correos electrónicos a tu bandeja de entrada real.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information. 
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Revisá tu informe de crédito en busca de cuentas, préstamos o tarjetas de crédito que no reconozcas.
# A security freeze prevents prospective creditors from accessing your credit file. 
# Creditors typically won't offer you credit if they can't access your credit reporting file, 
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
# This will only be shown to users in the US.
# Variables:
#   $equifaxLink (string) - a link to the Equifax website, with { -breach-checklist-link-equifax } as the label
#   $experianLink (string) - a link to the Experian website, with { -breach-checklist-link-experian } as the label
#   $transUnionLink (string) - a link to the TransUnion website, with { -breach-checklist-link-transunion } as the label
breach-checklist-ssn-body-2 = También podés considerar congelar tus créditos en { $equifaxLink }, { $experianLink } y { $transUnionLink } para evitar que los estafadores abran nuevas cuentas a tu nombre. Es gratis y no afectará tu puntaje crediticio.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Informá esta filtración al emisor de tu tarjeta de crédito y pedí una nueva tarjeta con un nuevo número.
breach-checklist-cc-body = También deberías revisar los estados de cuenta de tu tarjeta de crédito en busca de cargos no reconocidos.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Notificá inmediatamente a tu banco que su número de cuenta ha sido comprometido.
breach-checklist-bank-body = Hacerlo más rápido podría brindarte más protecciones legales para ayudarte a recuperar cualquier pérdida. También querrás verificar tus cuentas en busca de cargos no reconocidos.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Notificá al emisor de tu tarjeta y cambiá tu PIN inmediatamente.
breach-checklist-pin-body = Asegurate de que tu nuevo PIN, o cualquier otro PIN, no incluya números fáciles de adivinar, como tu fecha de nacimiento o dirección.

## Prompts the user for changes when there is a breach detected of IP address

# Variables:
#   $mozillaVpnLink (string) - a link to the Mozilla VPN website, with { -breach-checklist-link-mozilla-vpn } as the label
breach-checklist-ip-header-2 = Usá Internet de forma privada con una VPN, como { $mozillaVpnLink }.
breach-checklist-ip-body = Tu dirección IP (dirección de Protocolo de Internet) señala tu ubicación y proveedor de servicios de Internet. Una VPN puede ocultar tu dirección IP real para que puedas usar Internet de forma privada.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Cambiá cualquier contraseña o PIN que incluya alguna parte de tu dirección.
breach-checklist-address-body = Las direcciones son fáciles de encontrar en los registros públicos y pueden hacer que esas contraseñas y PINS sean fáciles de adivinar.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Cambiá cualquier contraseña o PIN que incluya tu fecha de nacimiento.
breach-checklist-dob-body = Las fechas de nacimiento son fáciles de encontrar en registros públicos y las personas que las encuentren podrían adivinar fácilmente tu PIN.

## Prompts the user for changes when there is a breach detected of phone number

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-phone-header-2 = Protegé tu número de teléfono con un servicio de enmascaramiento como { $firefoxRelayLink }, que oculta tu verdadero número de teléfono.

## Prompts the user for changes when there is a breach detected of security questions

# { $breachedCompanyLink } will link to the website of the company where the breach occurred
breach-checklist-sq-header-2 = Actualizá las preguntas de seguridad en el sitio web de la compañía.
breach-checklist-sq-body = Usá respuestas largas y aleatorias y guardalas en un lugar seguro. Hacé esto en cualquier otro lugar donde hayás usado las mismas preguntas de seguridad.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Creá contraseñas seguras y únicas para cualquier cuenta en la que hayas reutilizado contraseñas.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-hp-body-2 = Un administrador de contraseñas como el { $passwordManagerLink } (que es gratuito y está integrado en el navegador { -brand-firefox }) puede ayudarte a realizar el seguimiento de todas tus contraseñas y acceder a ellas de forma segura desde todos tus dispositivos.

## Prompts the user for changes when there is a breach detected of other types

# NOTE: { $companyName } is a placeholder for the name of the company where the breach occurred 
breach-checklist-general-header = Comunicate con { $companyName } para informarles sobre esta violación y solicitar los pasos específicos a tomar.
