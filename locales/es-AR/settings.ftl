# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = Opciones de { -product-short-name }

## Breach alert preferences

settings-alert-email-preferences-title = Preferencias de correo electrónico
settings-alert-email-preferences-subtitle = Decinos qué correos electrónicos te gustaría recibir.
settings-alert-preferences-allow-breach-alerts-title = Alertas instantáneas de filtraciones
settings-alert-preferences-allow-breach-alerts-subtitle = Estas alertas se envían inmediatamente una vez que se detecta una filtración de datos
settings-alert-preferences-option-one = Enviar alertas de filtración a la dirección de correo electrónico afectada
settings-alert-preferences-option-two = Enviar todas las alertas de filtración a la dirección de correo electrónico primaria

## Monitored email addresses

settings-email-verification-callout = Verificación de correo electrónico requerida
settings-remove-email-button-label = Eliminar
settings-email-addresses-header = Direcciones de correo electrónico
settings-email-addresses-description = { -brand-monitor } te avisará si estos correos electrónicos aparecen en filtraciones conocidas.
settings-email-addresses-add-email-button = Agregar dirección de correo electrónico
# Variables:
#   $limit (number) - Number of emails that can be added for monitoring.
settings-email-addresses-add-email-indicator-limit = Agregar hasta { $limit }
settings-email-addresses-add-email-resend-button-label = Reenviar enlace de verificación
input-error-alt = Error

## Email address dialog

settings-email-addresses-initial-dialog-header = Agregar una dirección de correo electrónico
settings-email-addresses-initial-dialog-description = Te enviaremos un enlace de verificación para que confirmes que te gustaría incluirlo en un futuro escaneo de { -brand-monitor }.
settings-email-addresses-initial-dialog-add-email-input-label = Ingresar dirección de correo electrónico
settings-email-addresses-initial-dialog-add-email-button-label = Enviar enlace de verificación
# Variables:
#   $email (string) - Email address the confirmation has been sent to.
settings-email-addresses-confirmation-dialog-header = Enlace de verificación enviado a <b>{ $email }</b>
settings-email-addresses-confirmation-dialog-description = Abrí el enlace para agregarlo a esta cuenta para futuros escaneos de { -brand-monitor }.
settings-email-addresses-confirmation-dialog-close-button = Cerrar

## Delete Monitor account

settings-delete-monitor-free-account-title = Eliminar la cuenta de { -brand-monitor }
settings-delete-monitor-free-account-description = Esto eliminará permanentemente tu cuenta de { -brand-monitor } y desactivará todas las notificaciones.
settings-delete-monitor-free-account-cta-label = Eliminar la cuenta
settings-delete-monitor-free-account-dialog-title = Tu cuenta de { -brand-monitor } se eliminará para siempre
settings-delete-monitor-free-account-dialog-lead-v2 = Se eliminará toda la información de tu cuenta de { -brand-monitor } y ya no monitorearemos nuevas filtraciones de datos. Esto no eliminará tu { -brand-mozilla-account }.
settings-delete-monitor-free-account-dialog-cta-label = Eliminar la cuenta
settings-delete-monitor-free-account-dialog-cancel-button-label = No importa, volvamos
settings-delete-monitor-account-confirmation-toast-label-2 = Se eliminó tu cuenta de { -brand-monitor }.
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
settings-tab-notifications-marketing-link-label = Ir a la configuración de correo electrónico de { -brand-mozilla }
