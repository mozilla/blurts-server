# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-meta-title = { -brand-fx-monitor } - Ajustes
settings-page-title = Ajustes de { -product-short-name }

## Breach alert preferences

settings-alert-preferences-title = Preferencias de alertas de filtraciones
settings-alert-preferences-option-one = Enviar alertas de filtraciones a los correos afectados
settings-alert-preferences-option-two = Enviar todas las alertas de filtraciones al correo electrónico principal.

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-label-primary = { $email } (principal)
settings-email-list-title = Direcciones de correo monitoreadas
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Tu cuenta incluye el seguimiento de hasta { $limit } correo.
        [many] Tu cuenta incluye el seguimiento de hasta { $limit } correos.
       *[other] Tu cuenta incluye el seguimiento de hasta { $limit } correos.
    }
settings-email-verification-callout = Verificación de correo requerida
settings-resend-email-verification-link = Reenviar correo de verificación
settings-add-email-button = Añadir dirección de correo electrónico
# Deprecated
settings-delete-email-button = Eliminar dirección de correo
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

settings-cancel-premium-subscription-title = Cancelar suscripción de { -brand-premium }
settings-cancel-premium-subscription-info = Tu suscripción volverá a ser una cuenta gratuita después de que finalice el ciclo de facturación actual. Los resultados del análisis de protección de la privacidad se eliminarán de forma permanente y solo podrás monitorear la filtración de datos para 1 dirección de correo electrónico.

## Deactivate account

settings-deactivate-account-title = Desactivar cuenta
settings-deactivate-account-info-2 = Puede desactivar { -product-short-name } eliminando tu { -brand-mozilla-account }.
settings-fxa-link-label-3 = Ir a ajustes de { -brand-mozilla-account }

## Delete Monitor account

settings-delete-monitor-free-account-title = Eliminar cuenta de { -brand-monitor }
settings-delete-monitor-free-account-description = Esto eliminará permanentemente tu cuenta de { -brand-monitor } y desactivará todas las notificaciones.
settings-delete-monitor-free-account-cta-label = Eliminar cuenta
settings-delete-monitor-free-account-dialog-title = Tu cuenta { -brand-monitor } será eliminada permanentemente
settings-delete-monitor-free-account-dialog-lead = Toda la información de tu cuenta de { -brand-monitor } será eliminada y ya no monitorearemos nuevas filtraciones de datos. Esto no eliminará tu cuenta de { -brand-mozilla }.
settings-delete-monitor-free-account-dialog-cta-label = Eliminar cuenta
settings-delete-monitor-free-account-dialog-cancel-button-label = No importa, llévenme de vuelta
settings-delete-monitor-plus-account-title = Eliminar cuenta de { -brand-monitor }
settings-delete-monitor-plus-account-description = Esto eliminará permanentemente tu cuenta de { -brand-monitor } y finalizará inmediatamente tu suscripción pagada de { -brand-monitor-plus }.
settings-delete-monitor-plus-account-cta-label = Eliminar cuenta
settings-delete-monitor-plus-account-dialog-title = Tu cuenta { -brand-monitor } será eliminada permanentemente
settings-delete-monitor-plus-account-dialog-lead-p1 = Toda la información de tu cuenta de { -brand-monitor } será eliminada y ya no monitorearemos nuevas filtraciones de datos o exposiciones de agentes de datos. Esto no eliminará tu cuenta de { -brand-mozilla }.
settings-delete-monitor-plus-account-dialog-lead-p2 = Tu suscripción de pago finalizará hoy y no recibirás un reembolso proporcional por el resto de su suscripción.
settings-delete-monitor-plus-account-dialog-cta-label = Eliminar cuenta
settings-delete-monitor-plus-account-dialog-cancel-button-label = No importa, llévenme de vuelta
settings-delete-monitor-account-confirmation-toast-label = Tu cuenta { -brand-monitor } esta ahora eliminada permanentemente.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Descartar

## Add email dialog

settings-email-dialog-title = Añadir otra dirección de correo
settings-add-email-text = Añade una nueva dirección de correo para ver si está afectada por una filtración.
settings-email-input-label = Correo electrónico
settings-send-email-verification-button = Enviar enlace de verificación

## Unsubscribe Dialog Survey

settings-unsubscribe-dialog-title = Lamentamos que te vayas. <br /> ¿Nos contarías el por qué te vas?
settings-unsubscribe-dialog-info = Tu experiencia es importante para nosotros. Leemos cada respuesta y la tomamos en consideración.
settings-unsubscribe-dialog-message-placeholder = ¿Qué podría haber ido mejor?
# $faq_href is the URL for the faq page. HTML tags should not be translated, e.g. `<a>`
settings-unsubscribe-dialog-confirmation = Por favor, ten en cuenta que todos tus servicios de { -brand-monitor-premium } se <a { $faq_href }>eliminarán de forma permanente</a> después de que finalice tu ciclo de facturación actual.
settings-unsubscribe-dialog-continue = Continuar con la cancelación
settings-unsubscribe-dialog-cancel = No importa, llévenme de vuelta
