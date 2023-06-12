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
settings-delete-email-button = Eliminar la dirección de correo electrónico
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (numer) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Aparece en { $breachCount } filtración conocida.
        [many] Aparece en { $breachCount } filtraciones conocidas.
       *[other] Aparece en { $breachCount } filtraciones conocidas.
    }

## Cancel Premium subscription

settings-cancel-premium-subscription-title = Cancelar la suscripción de { -brand-premium }
settings-cancel-premium-subscription-info = Tu suscripción volverá a ser una cuenta gratuita una vez que finalice el ciclo de facturación actual. Los resultados del análisis de protección de privacidad se eliminarán permanentemente y solo tendrás monitoreo de violación de datos para 1 dirección de correo electrónico.
settings-cancel-premium-subscription-link-label = Cancelar desde tu { -brand-fx-account }

## Deactivate account

settings-deactivate-account-title = Desactivar cuenta
settings-deactivate-account-info = Podés desactivar { -product-short-name } borrando tu { -brand-fx-account }.
settings-fxa-link-label = Ir a opciones de { -brand-firefox }

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
