# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-meta-title = { -brand-fx-monitor } - Configuración
settings-page-title = Opciones de { -product-short-name }

## Breach alert preferences

settings-alert-preferences-title = Preferencias de alerta de filtraciones
settings-alert-preferences-option-one = Enviar alertas de filtración a la dirección de correo electrónico afectada
settings-alert-preferences-option-two = Enviar todas las alertas de filtración a la dirección de correo electrónico primaria

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-label-primary = { $email } (primaria)
settings-email-list-title = Direcciones de correo electrónico monitoreadas
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Tu cuenta incluye monitoreo de hasta { $limit } correo electrónico.
        [many] Tu cuenta incluye monitoreo de hasta { $limit } correos electrónicos.
       *[other] Tu cuenta incluye monitoreo de hasta { $limit } correos electrónicos.
    }
settings-email-verification-callout = Verificación de correo electrónico requerida
settings-resend-email-verification-link = Reenviar correo electrónico de verificación
settings-add-email-button = Agregar dirección de correo electrónico
# Deprecated
settings-delete-email-button = Eliminar la dirección de correo electrónico
settings-remove-email-button-label = Eliminar
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = Dejar de monitorear { $emailAddress }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Aparece en { $breachCount } filtración conocida.
        [many] Aparece en { $breachCount } filtraciones conocidas.
       *[other] Aparece en { $breachCount } filtraciones conocidas.
    }

## Cancel Premium subscription

settings-cancel-premium-subscription-title = Cancelar la suscripción de { -brand-premium }
settings-cancel-premium-subscription-info = Tu suscripción volverá a ser una cuenta gratuita una vez que finalice el ciclo de facturación actual. Los resultados del análisis de protección de privacidad se eliminarán permanentemente y solo tendrás monitoreo de violación de datos para 1 dirección de correo electrónico.

## Deactivate account

settings-deactivate-account-title = Desactivar cuenta
settings-deactivate-account-info-2 = Podés desactivar { -product-short-name } borrando tu { -brand-mozilla-account }.
settings-fxa-link-label-3 = Ir a ajustes de la { -brand-mozilla-account }

## Delete Monitor account

settings-delete-monitor-free-account-title = Eliminar la cuenta de { -brand-monitor }
settings-delete-monitor-free-account-description = Esto eliminará permanentemente tu cuenta de { -brand-monitor } y desactivará todas las notificaciones.
settings-delete-monitor-free-account-cta-label = Eliminar la cuenta
settings-delete-monitor-free-account-dialog-title = Tu cuenta de { -brand-monitor } se eliminará para siempre
settings-delete-monitor-free-account-dialog-lead = Se eliminará toda la información de tu cuenta de { -brand-monitor } y ya no controlaremos nuevas violaciones de datos. Esto no eliminará tu cuenta de { -brand-mozilla }.
settings-delete-monitor-free-account-dialog-cta-label = Eliminar la cuenta
settings-delete-monitor-free-account-dialog-cancel-button-label = No importa, volvamos
settings-delete-monitor-plus-account-title = Eliminar la cuenta de { -brand-monitor }
settings-delete-monitor-plus-account-description = Esto eliminará permanentemente tu cuenta de { -brand-monitor } y finalizará inmediatamente tu suscripción paga de { -brand-monitor-plus }.
settings-delete-monitor-plus-account-cta-label = Eliminar la cuenta
settings-delete-monitor-plus-account-dialog-title = Tu cuenta de { -brand-monitor } se eliminará para siempre
settings-delete-monitor-plus-account-dialog-lead-p1 = Se eliminará toda la información de tu cuenta de { -brand-monitor } y ya no controlaremos nuevas filtraciones de datos o exposiciones de agentes de datos. Esto no eliminará tu cuenta de { -brand-mozilla }.
settings-delete-monitor-plus-account-dialog-lead-p2 = Tu suscripción paga terminará hoy y no se te prorrateará por el resto de la suscripción.
settings-delete-monitor-plus-account-dialog-cta-label = Eliminar la cuenta
settings-delete-monitor-plus-account-dialog-cancel-button-label = No importa, volvamos
settings-delete-monitor-account-confirmation-toast-label = Tu cuenta de { -brand-monitor } está eliminada.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Descartar

## Add email dialog

settings-email-dialog-title = Agregar otra dirección de correo electrónico
settings-add-email-text = Agregar una nueva dirección de correo electrónico para ver si está involucrada en una filtración.
settings-email-input-label = Dirección de correo electrónico
settings-send-email-verification-button = Enviar enlace de verificación

## Unsubscribe Dialog Survey

settings-unsubscribe-dialog-title = Lamentamos que te vayas. <br /> ¿Nos contarías por qué?
settings-unsubscribe-dialog-info = Tu experiencia es importante para nosotros Leemos cada respuesta y la tenemos en cuenta.
settings-unsubscribe-dialog-message-placeholder = ¿Algo podría haber funcionado mejor?
# $faq_href is the URL for the faq page. HTML tags should not be translated, e.g. `<a>`
settings-unsubscribe-dialog-confirmation = Tenné en cuenta que todos tus servicios de { -brand-monitor-premium } serán <a { $faq_href }> eliminados permanentemente </a> después de que finalice tu ciclo de facturación actual.
settings-unsubscribe-dialog-continue = Continuar hasta la cancelación
settings-unsubscribe-dialog-cancel = No importa, volvamos
