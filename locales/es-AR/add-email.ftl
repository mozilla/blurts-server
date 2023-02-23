# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = Agregar otra dirección de correo electrónico
# $total is the number of emails a user is allowed to add
add-email-your-account-includes =
    { $total ->
        [one] Tu cuenta incluye monitoreo de { $total } dirección de correo electrónico. Agregá una nueva dirección de correo electrónico para ver si ha estado involucrada en una filtración.
        [many] Tu cuenta incluye monitoreo de hasta { $total } direcciones de correo electrónico. Agregá una nueva dirección de correo electrónico para ver si ha estado involucrada en una filtración.
       *[other] Tu cuenta incluye monitoreo de hasta { $total } dirección de correo electrónico. Agregá una nueva direcciones de correo electrónico para ver si ha estado involucrada en una filtración.
    }
add-email-address-input-label = Dirección de correo electrónico
add-email-send-verification-button = Enviar enlace de verificación
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
add-email-verify-the-link = Verificá el enlace enviado a { $email } para agregarlo a { -brand-fx-monitor }. Admisistrá todas las direcciones de correo electrónico en <a { $settings-href }>Opciones</a>.
