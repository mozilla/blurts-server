# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

breach-all-meta-page-title = Base de datos de filtraciones — { -brand-fx-monitor }
breach-all-meta-social-title = Todas las filtraciones detectadas por { -brand-fx-monitor }
breach-all-meta-social-description = Navegá por la lista completa de filtraciones conocidas detectadas por { -brand-fx-monitor } y luego fijate si tu información fue expuesta.
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-page-title = Filtración de datos de { $company } – { -brand-fx-monitor }
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-social-title = ¿Te afectó la filtración de datos de { $company }?
breach-detail-meta-social-description = Usá { -brand-fx-monitor } para averiguar si tu información personal fue expuesta en esta filtración y saber qué hacer a continuación.

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = Administrador de contraseñas de { -brand-firefox }
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }

## Prompts the user for changes when there is a breach detected of password

breach-checklist-pw-header-text = Actualizá tus contraseñas y habilitá la autenticación de dos factores (2FA).
# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-pw-body-text = En la mayoría de los casos, le recomendamos que cambie su contraseña en el sitio web de la empresa. Pero <b>su sitio web puede estar inactivo o contener contenido malicioso</b>, así que tenga cuidado si <breached-company-link>visita el sitio </breached-company-link>. Para mayor protección, asegúrate de usar contraseñas únicas para todas las cuentas, de modo que las contraseñas filtradas no puedan usarse para acceder a otras cuentas. { $passwordManagerLink } ayudarte a realizar un seguimiento de todas tus contraseñas de forma segura.

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
#   $equifaxLink (string) - a link to the Equifax website
#   $experianLink (string) - a link to the Experian website
#   $transUnionLink (string) - a link to the TransUnion website
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

breach-checklist-sq-header-text = Actualizá tus preguntas de seguridad.
# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
breach-checklist-sq-body-text = En la mayoría de los casos, te recomendamos que actualices tus preguntas de seguridad en el sitio web de la empresa. Pero <b>ese sitio web puede estar inactivo o contener contenido malicioso</b>, así que tené cuidado si <breached-company-link>visitás el sitio</breached-company-link>. Para mayor protección, actualizá estas preguntas de seguridad en cualquier cuenta importante donde las hayas usado y creá contraseñas únicas para todas las cuentas.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Creá contraseñas seguras y únicas para cualquier cuenta en la que hayas reutilizado contraseñas.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-hp-body-2 = Un administrador de contraseñas como el { $passwordManagerLink } (que es gratuito y está integrado en el navegador { -brand-firefox }) puede ayudarte a realizar el seguimiento de todas tus contraseñas y acceder a ellas de forma segura desde todos tus dispositivos.

## Prompts the user for changes when there is a breach detected of other types

# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-checklist-general-header = Comunicate con { $companyName } para informarles sobre esta violación y solicitar los pasos específicos a tomar.
