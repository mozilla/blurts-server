# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = Ajustes de { -product-short-name }

## Breach alert preferences

settings-alert-email-preferences-title = Preferencias de correo
settings-alert-email-preferences-subtitle = Dinos qué correos electrónicos te gustaría recibir.
settings-alert-preferences-allow-breach-alerts-title = Alertas instantáneas sobre filtraciones
settings-alert-preferences-allow-breach-alerts-subtitle = Estas alertas se envían inmediatamente una vez que se detecta una filtración de datos.
settings-alert-preferences-option-one = Enviar alertas de filtraciones a las direcciones de correo afectadas
settings-alert-preferences-option-two = Enviar todas las alertas de filtraciones al correo electrónico principal.

## Monitored email addresses

settings-email-verification-callout = Se requiere verificación de correo electrónico
settings-remove-email-button-label = Eliminar
settings-email-addresses-header = Direcciones de correo electrónico
settings-email-addresses-description = { -brand-monitor } te avisará si estos correos electrónicos aparecen en filtraciones conocidas.
settings-email-addresses-add-email-button = Añadir dirección de correo electrónico
# Variables:
#   $limit (number) - Number of emails that can be added for monitoring.
settings-email-addresses-add-email-indicator-limit = Añade hasta { $limit }
settings-email-addresses-add-email-resend-button-label = Reenviar enlace de verificación
input-error-alt = Error

## Email address dialog

settings-email-addresses-initial-dialog-header = Añadir una dirección de correo electrónico
settings-email-addresses-initial-dialog-description = Te enviaremos un enlace de verificación para que confirmes que deseas incluirlo en un futuro escaneo de { -brand-monitor }.
settings-email-addresses-initial-dialog-add-email-input-label = Escribe tu dirección de correo
settings-email-addresses-initial-dialog-add-email-button-label = Enviar enlace de verificación
# Variables:
#   $email (string) - Email address the confirmation has been sent to.
settings-email-addresses-confirmation-dialog-header = Enlace de verificación enviado a <b>{ $email }</b>
settings-email-addresses-confirmation-dialog-description = Abre el enlace para añadirlo a esta cuenta para futuros escaneos de { -brand-monitor }.
settings-email-addresses-confirmation-dialog-close-button = Cerrar

## Delete Monitor account

settings-delete-monitor-free-account-title = Eliminar cuenta de { -brand-monitor }
settings-delete-monitor-free-account-description = Esto eliminará permanentemente tu cuenta de { -brand-monitor } y desactivará todas las notificaciones.
settings-delete-monitor-free-account-cta-label = Eliminar cuenta
settings-delete-monitor-free-account-dialog-title = Tu cuenta { -brand-monitor } será eliminada permanentemente
settings-delete-monitor-free-account-dialog-lead-v2 = Toda la información de tu cuenta de { -brand-monitor } será eliminada y ya no controlaremos nuevas filtraciones de datos. Esto no eliminará tu { -brand-mozilla-account }.
settings-delete-monitor-free-account-dialog-cta-label = Eliminar cuenta
settings-delete-monitor-free-account-dialog-cancel-button-label = No importa, volvamos
settings-delete-monitor-account-confirmation-toast-label-2 = Tu cuenta { -brand-monitor } ha sido eliminada.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Descartar

## Settings page redesign

# Label for a navigation bar link to settings for updating the users scan profile info – “update” is used as a verb.
settings-tab-label-update-scan-info = Actualizar información de escaneo
settings-tab-label-edit-info = Editar tu información
settings-tab-label-notifications = Establecer notificaciones
settings-tab-label-manage-account = Administrar cuenta
settings-tab-subtitle-manage-account = Administrar tu cuenta de { -product-name }.
settings-tab-notifications-marketing-title = Comunicaciones de marketing
settings-tab-notifications-marketing-text = Actualizaciones periódicas sobre { -brand-monitor }, { -brand-mozilla } y nuestros otros productos de seguridad.
settings-tab-notifications-marketing-link-label = Ir a los ajustes de correo electrónico de { -brand-mozilla }
