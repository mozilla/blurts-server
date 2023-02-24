# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Breaches header

# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = Filtraciones de datos para { $email-select }
# $count is the number of emails a user has added out of $total allowed
emails-monitored =
    { $total ->
        [one] { $count } de { $total } correos monitoreado
        [many] { $count } de { $total } correos monitoreados
       *[other] { $count } de { $total } correos monitoreados
    }
# link to Settings page where user can add/remove emails and set message preferences
manage-emails-link = Gestionar correos

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
breaches-none-headline = No se encontraron filtraciones
# Variables:
#   $email (String) - An email address that we did not find breaches for, e.g. `someone@example.com`
breaches-none-copy = ¡Buenas noticias! No se reportaron filtraciones conocidas para { $email }. Seguiremos monitoreando este correo electrónico y te informaremos si se producen nuevas filtraciones.
breaches-none-cta-blurb = ¿Te gustaría monitorear otro correo electrónico?
breaches-none-cta-button = Añadir dirección de correo electrónico
breaches-all-resolved-headline = Todas las filtraciones resueltas
# Variables:
#   $email (String) - An email address for which all breaches have been resolved, e.g. `someone@example.com`
breaches-all-resolved-copy = ¡Bien hecho! Has resuelto todas las filtraciones de { $email }. Seguiremos monitoreando este correo electrónico y te informaremos si se producen nuevas filtraciones.
breaches-all-resolved-cta-blurb = ¿Te gustaría monitorear otro correo electrónico?
breaches-all-resolved-cta-button = Añadir dirección de correo electrónico
# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
breach-description = El { $breachDate }, { $companyName } fue vulnerada. Una vez que la filtración fue descubierta y verificada, ésta fue añadida a nuestra base de datos el { $addedDate }. Esta filtración incluyó: { $dataClasses }

## Prompts the user for changes when there is a breach detected of password

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-pw-header = Ve a <a>{ $breachedCompanyUrl }</a> para cambiar tu contraseña y habilitar la autenticación en dos pasos (2FA).
breach-checklist-pw-body = Asegúrate de que tu contraseña sea única y difícil de adivinar. Si esta contraseña se usa en otras cuentas, asegúrate de cambiarla allí también. El <a>Administrador de contraseñas de { -brand-firefox }</a> puede ayudarte a realizar un seguimiento seguro de todas tus contraseñas.

## Prompts the user for changes when there is a breach detected of email

breach-checklist-email-header = Protege tu correo electrónico con un servicio de enmascaramiento de correo electrónico como <a>{ -brand-relay }</a>.
breach-checklist-email-body = Esto puede ocultar tu verdadera dirección de correo electrónico mientras reenvías los correos electrónicos a tu bandeja de entrada real.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information. 
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Supervisa tu estado de cuenta del banco en busca de cuentas, préstamos o tarjetas de crédito que no reconozcas.
# A security freeze prevents prospective creditors from accessing your credit file. 
# Creditors typically won't offer you credit if they can't access your credit reporting file, 
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
breach-checklist-ssn-body = También puedes considerar congelar tus créditos en <a>Equifax</a>, <a>Experian</a> y <a>TransUnion</a> para evitar que los estafadores abran nuevas cuentas a tu nombre. Es gratis y no afectará tu puntaje crediticio.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Informa esta filtración al emisor de tu tarjeta de crédito y solicita una nueva tarjeta con un nuevo número.
breach-checklist-cc-body = También debieras revisar los estados de cuenta de tu tarjeta de crédito en busca de cargos no reconocidos.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Notifica inmediatamente a tu banco de que tu número de cuenta se ha visto comprometido.
breach-checklist-bank-body = Hacerlo más rápido podría brindarte más protecciones legales para ayudarte a recuperar cualquier pérdida. También querrás verificar tus cuentas en busca de cargos no reconocidos.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Notifica al emisor de tu tarjeta y cambia tu PIN inmediatamente.
breach-checklist-pin-body = Asegúrate de que tu nuevo PIN, o cualquier otro PIN, no incluya números fáciles de adivinar, como tu fecha de nacimiento o dirección.

## Prompts the user for changes when there is a breach detected of IP address

breach-checklist-ip-header = Usa Internet de forma privada con un VPN, como <a>{ -brand-mozilla-vpn }</a>.
breach-checklist-ip-body = Tu dirección IP (dirección de Protocolo de Internet) señala tu ubicación y proveedor de servicios de Internet. Un VPN puede ocultar tu dirección IP real para que puedas usar Internet de forma privada.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Cambia cualquier contraseña o PIN que incluya alguna parte de tu dirección.
breach-checklist-address-body = Las direcciones son fáciles de encontrar en los registros públicos y pueden hacer que esas contraseñas y PIN sean fáciles de adivinar.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Cambia cualquier contraseña o PIN que incluya tu fecha de nacimiento.
breach-checklist-dob-body = Las fechas de nacimiento son fáciles de encontrar en los registros públicos, y las personas que las encuentren podrían adivinar fácilmente tu PIN.

## Prompts the user for changes when there is a breach detected of phone number

breach-checklist-phone-header = Protege tu número de teléfono con un servicio de enmascaramiento como <a>{ -brand-relay }</a>, que oculta tu verdadero número de teléfono.

## Prompts the user for changes when there is a breach detected of security questions

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-sq-header = Actualiza tus preguntas de seguridad en <a>{ $breachedCompanyUrl }</a>.
breach-checklist-sq-body = Usa respuestas largas y aleatorias y guárdalas en un lugar seguro. Haz esto en cualquier otro lugar donde hayas usado las mismas preguntas de seguridad.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Crea contraseñas seguras y únicas para cualquier cuenta en la que hayas reutilizado contraseñas.
breach-checklist-hp-body = Un administrador de contraseñas como el <a>Administrador de contraseñas de { -brand-firefox }</a> (que es gratuito y está integrado en el navegador { -brand-firefox }) puede ayudarte a realizar un seguimiento de todas tus contraseñas y acceder a ellas de forma segura desde todos tus dispositivos.

## Prompts the user for changes when there is a breach detected of other types

# NOTE: { $companyName } is a placeholder for the name of the company where the breach occurred 
breach-checklist-general-header = Comunícate con { $companyName } para informarles sobre esta filtración y solicitar los pasos específicos a tomar.
