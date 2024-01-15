# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = Añadir otra dirección de correo electrónico
close-dialog-alt = Cerrar el diálogo
# $total is the number of emails a user is allowed to add
add-email-your-account-includes =
    { $total ->
        [one] Tu cuenta incluye la supervisión de hasta { $total } dirección de correo electrónico. Añade una nueva dirección de correo electrónico para ver si se ha visto afectada por una filtración.
       *[other] Tu cuenta incluye la supervisión de hasta { $total } direcciones de correo electrónico. Añade una nueva dirección de correo electrónico para ver si se ha visto afectada por una filtración.
    }
add-email-address-input-label = Correo electrónico
add-email-send-verification-button = Enviar enlace de verificación
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
# This string will be deprecated when the new Plus plan is live.
add-email-verify-the-link = Verifica el enlace enviado a { $email } para añadirlo a { -brand-fx-monitor }. Gestiona todas las direcciones de correo en <a { $settings-href }>Ajustes</a>.
# Variables:
#   $email (string) - An email address submitted by the user for monitoring, e.g. `example@example.com`
add-email-verify-the-link-2 = Verifica el enlace enviado a <b>{ $email }</b> para añadirlo a { -brand-mozilla-monitor }.
