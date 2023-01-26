# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Breaches header

# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = Filtraciones de datos para { $email-select }
# $count is the number of emails a user has added out of $total allowed
emails-monitored =
    { $total ->
        [one] { $count } de { $total } correo electrónico supervisado
        [many] { $count } de { $total } correos electrónicos supervisados
       *[other] { $count } de { $total } correos electrónicos supervisados
    }
add-email-link = Añadir dirección de correo electrónico

## Breaches resolved filter

filter-label-unresolved = Filtraciones sin resolver
filter-label-resolved = Filtraciones resueltas

## Breaches table

column-company = EMPRESA
column-breached-data = DATOS FILTRADOS
column-detected = DETECTADO
# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
breach-description = El { $breachDate }, { $companyName } tuvo una filtración. Una vez descubierta y verificada la filtración, la añadimos a nuestra base de datos el { $addedDate }. Esta filtración incluye: { $dataClasses }

## Prompts the user for changes when there is a breach detected of password

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-pw-header = Visita <a>{ $breachedCompanyUrl }</a> para cambiar tu contraseña y activar la autenticación de dos factores (2FA).
breach-checklist-pw-body = Asegúrate de que tu contraseña sea única y difícil de adivinar. Si esta contraseña se usa en otras cuentas, asegúrate de cambiarla ahí también. <a>El administrador de contraseñas de { -brand-firefox }</a> puede ayudarte a realizar un seguimiento seguro de todas tus contraseñas.

## Prompts the user for changes when there is a breach detected of email

breach-checklist-email-header = Protege tu correo electrónico con un servicio de enmascaramiento de correo electrónico como <a>{ -brand-relay }</a>.
breach-checklist-email-body = Esto puede ocultar tu verdadera dirección de correo electrónico mientras reenvía correos electrónicos a tu bandeja de entrada real.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information. 
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Revisa tu informe de crédito en busca de cuentas, préstamos o tarjetas de crédito que no reconozcas.
# A security freeze prevents prospective creditors from accessing your credit file. 
# Creditors typically won't offer you credit if they can't access your credit reporting file, 
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
breach-checklist-ssn-body = También puedes considerar congelar tu crédito en <a>Equifax</a>, <a>Experian</a> y <a>TransUnion</a> para evitar que los estafadores abran nuevas cuentas a tu nombre. Es gratis y no afectará tu puntuación crediticia.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Informa debesta filtración al emisor de tu tarjeta de crédito y solicita una nueva tarjeta con un nuevo número.
breach-checklist-cc-body = También deberías revisar los extractos de cuenta de tu tarjeta de crédito en busca de cargos no reconocidos.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Notifica inmediatamente a tu banco de que tu número de cuenta se ha visto comprometido.
breach-checklist-bank-body = Hacerlo rápidamente podría brindarte más protecciones legales para ayudarte a recuperar cualquier pérdida. También querrás verificar tus cuentas en busca de cargos no reconocidos.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Notifica al emisor de tu tarjeta y cambia tu PIN inmediatamente.
breach-checklist-pin-body = Asegúrate de que tu nuevo PIN, o cualquier otro PIN, no incluya números fáciles de adivinar, como tu fecha de nacimiento o dirección.

## Prompts the user for changes when there is a breach detected of IP address

breach-checklist-ip-header = Usa Internet de forma privada con una VPN, como <a>{ -brand-mozilla-vpn }</a>.
breach-checklist-ip-body = Tu dirección IP (dirección de Protocolo de Internet) permite saber tu ubicación y proveedor de servicios de Internet. Una VPN puede ocultar tu dirección IP real para que puedas usar Internet de forma privada.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Cambia cualquier contraseña o PIN que incluya alguna parte de tu dirección.
breach-checklist-address-body = Las direcciones son fáciles de encontrar en los registros públicos y pueden hacer que esas contraseñas y PIN sean fáciles de adivinar.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Cambia cualquier contraseña o PIN que incluya tu fecha de nacimiento.
breach-checklist-dob-body = Las fechas de nacimiento son fáciles de encontrar en los registros públicos, y las personas que las encuentren podrían adivinar fácilmente tu PIN.

## Prompts the user for changes when there is a breach detected of phone number


## Prompts the user for changes when there is a breach detected of security questions


## Prompts the user for changes when there is a breach detected of historical password


## Prompts the user for changes when there is a breach detected of other types

