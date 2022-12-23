# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Strings for the breach details checklists


## Prompts the user for changes when there is a breach detected of password

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-pw-header = Visitá <a>{ $breachedCompanyUrl }</a> para cambiar tu contraseña y habilitar la autenticación de dos factores (2FA).
breach-checklist-pw-body = Asegurate de que tu contraseña sea única y difícil de adivinar. Si esta contraseña se usa en otras cuentas, asegurate de cambiarla allá también. <a>El administrador de contraseñas de { -brand-firefox }</a> puede ayudarte a realizar un seguimiento seguro de todas tus contraseñas.

## Prompts the user for changes when there is a breach detected of email

breach-checklist-email-header = Protegé tu correo electrónico con un servicio de enmascaramiento de correo electrónico como <a>{ -brand-relay }</a>.
breach-checklist-email-body = Esto puede ocultar tu verdadera dirección de correo electrónico mientras reenvía correos electrónicos a tu bandeja de entrada real.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information. 
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Revisá tu informe de crédito en busca de cuentas, préstamos o tarjetas de crédito que no reconozcas.
# A security freeze prevents prospective creditors from accessing your credit file. 
# Creditors typically won't offer you credit if they can't access your credit reporting file, 
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
breach-checklist-ssn-body = También podés considerar congelar tus créditos en <a>Equifax</a>, <a>Experian</a> y <a>TransUnion</a> para evitar que los estafadores abran nuevas cuentas a tu nombre. Es gratis y no afectará tu puntaje crediticio.

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

breach-checklist-ip-header = Usá Internet de forma privada con una VPN, como <a>{ -brand-mozilla-vpn }</a>.
breach-checklist-ip-body = Tu dirección IP (dirección de Protocolo de Internet) señala tu ubicación y proveedor de servicios de Internet. Una VPN puede ocultar tu dirección IP real para que puedas usar Internet de forma privada.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Cambiá cualquier contraseña o PIN que incluya alguna parte de tu dirección.
breach-checklist-address-body = Las direcciones son fáciles de encontrar en los registros públicos y pueden hacer que esas contraseñas y PINS sean fáciles de adivinar.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Cambiá cualquier contraseña o PIN que incluya tu fecha de nacimiento.
breach-checklist-dob-body = Las fechas de nacimiento son fáciles de encontrar en registros públicos y las personas que las encuentren podrían adivinar fácilmente tu PIN.

## Prompts the user for changes when there is a breach detected of phone number

breach-checklist-phone-header = Protegé tu número de teléfono con un servicio de enmascaramiento como <a>{ -brand-relay }</a>, que oculta tu verdadero número de teléfono.

## Prompts the user for changes when there is a breach detected of security questions

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-sq-header = Actualizá tus preguntas de seguridad en <a>{ $breachedCompanyUrl }</a>.
breach-checklist-sq-body = Usá respuestas largas y aleatorias y guardalas en un lugar seguro. Hacé esto en cualquier otro lugar donde hayás usado las mismas preguntas de seguridad.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Creá contraseñas seguras y únicas para cualquier cuenta en la que hayas reutilizado contraseñas.
breach-checklist-hp-body = Un administrador de contraseñas como el <a>Administrador de contraseñas de { -brand-firefox }</a> (que es gratuito y está integrado en el navegador { -brand-firefox }) puede ayudarte a realizar el seguimiento de todas tus contraseñas y acceder a ellas de forma segura desde todos tus dispositivos.

## Prompts the user for changes when there is a breach detected of other types

# NOTE: { $companyName } is a placeholder for the name of the company where the breach occurred 
breach-checklist-general-header = Comunicate con { $companyName } para informarles sobre esta violación y solicitar los pasos específicos a tomar.
