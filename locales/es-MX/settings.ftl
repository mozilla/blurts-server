# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = Ajustes de { -product-short-name }

## Breach alert preferences

settings-alert-email-preferences-title = Preferencias de correo electrónico
settings-alert-email-preferences-subtitle = Dinos qué correos electrónicos te gustaría recibir.
settings-alert-preferences-allow-breach-alerts-title = Alertas instantáneas de filtraciones
settings-alert-preferences-allow-breach-alerts-subtitle = Estas alertas se envían inmediatamente cuando se detecta una filtración de datos.
settings-alert-preferences-option-one = Enviar alertas de filtraciones a las direcciones de correo eletrónico afectadas
settings-alert-preferences-option-two = Enviar todas las alertas de filtraciones a la dirección de correo electrónico principal

## Monitored email addresses

settings-email-verification-callout = Se requiere verificación de correo electrónico
settings-remove-email-button-label = Eliminar
settings-email-addresses-header = Direcciones de correo electrónico
settings-email-addresses-description = { -brand-monitor } te alertará si estos correos electrónicos aparecen en filtraciones conocidas.
settings-email-addresses-add-email-button = Agregar dirección de correo electrónico
# Variables:
#   $limit (number) - Number of emails that can be added for monitoring.
settings-email-addresses-add-email-indicator-limit = Agregar hasta { $limit }
settings-email-addresses-add-email-resend-button-label = Reenviar enlace de verificación
input-error-alt = Error

## Email address dialog

settings-email-addresses-initial-dialog-header = Agregar una dirección de correo electrónico
settings-email-addresses-initial-dialog-description = Te enviaremos un enlace de verificación para confirmar que quieres incluir esta dirección en futuros escaneos de { -brand-monitor }.
settings-email-addresses-initial-dialog-add-email-input-label = Ingresar dirección de correo electrónico
settings-email-addresses-initial-dialog-add-email-button-label = Enviar enlace de verificación
# Variables:
#   $email (string) - Email address the confirmation has been sent to.
settings-email-addresses-confirmation-dialog-header = Enlace de verificación enviado a <b>{ $email }</b>
settings-email-addresses-confirmation-dialog-description = Abre el enlace para agregar esta dirección a la cuenta y que se incluya en futuros escaneos de { -brand-monitor }.
settings-email-addresses-confirmation-dialog-close-button = Cerrar

## Delete Monitor account

settings-delete-monitor-free-account-title = Eliminar cuenta { -brand-monitor }
settings-delete-monitor-free-account-description = Esto eliminará permanentemente tu cuenta { -brand-monitor } y desactivará todas las notificaciones.
settings-delete-monitor-free-account-cta-label = Eliminar cuenta
settings-delete-monitor-free-account-dialog-title = Su cuenta { -brand-monitor } se eliminará permanentemente
settings-delete-monitor-free-account-dialog-lead-v2 = Toda la información de tu cuenta de { -brand-monitor } se eliminará y ya no se realizará el monitoreo de nuevas filtraciones de datos. Esto no eliminará tu { -brand-mozilla-account }.
settings-delete-monitor-free-account-dialog-cta-label = Eliminar cuenta
settings-delete-monitor-free-account-dialog-cancel-button-label = No importa, llévame de vuelta
settings-delete-monitor-account-confirmation-toast-label-2 = Tu cuenta { -brand-monitor } ahora esta eliminada.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Ignorar

## Settings page redesign

# Label for a navigation bar link to settings for updating the users scan profile info – “update” is used as a verb.
settings-tab-label-update-scan-info = Actualizar información de escaneo
settings-tab-label-edit-info = Editar tu información
settings-tab-label-notifications = Establecer notificaciones
settings-tab-label-manage-account = Administrar cuenta
settings-tab-subtitle-manage-account = Administra tu cuenta de { -product-name }.
settings-tab-notifications-marketing-title = Comunicaciones de marketing
settings-tab-notifications-marketing-text = Actualizaciones periódicas sobre { -brand-monitor }, { -brand-mozilla } y nuestros otros productos de seguridad.
settings-tab-notifications-marketing-link-label = Ir a ajustes de correo electrónico de { -brand-mozilla }
