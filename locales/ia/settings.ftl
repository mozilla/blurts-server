# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-meta-title = { -brand-fx-monitor } - Parametros
settings-page-title = Parametros de { -product-short-name }

## Breach alert preferences

settings-alert-preferences-title = Preferentias de alerta violation
settings-alert-preferences-option-one = Inviar avisos de violation al adresse de email afficite
settings-alert-preferences-option-two = Inviar tote le avisos de violation al adresse email primari

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-label-primary = { $email } (primari)
settings-email-list-title = Adresses email surveliate
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Tu conto include surveliantia pro usque { $limit } email.
       *[other] Tu conto include surveliantia pro usque { $limit } emails.
    }
settings-email-verification-callout = Verification del email requirite.
settings-resend-email-verification-link = Reinviar email de verification
settings-add-email-button = Adder adresse email
# Deprecated
settings-delete-email-button = Deler adresse email
settings-remove-email-button-label = Remover
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = Cessar de surveliar { $emailAddress }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Appare in { $breachCount } violation note.
       *[other] Appare in { $breachCount } violationes note.
    }

## Cancel Premium subscription

settings-cancel-premium-subscription-title = Cancellar abonamento { -brand-premium }
settings-cancel-premium-subscription-info = Tu abonamento revertera a un conto gratuite post que le currente termino de facturation fini. Le resultatos de tu scansion de protection del confidentialitate sera permanentemente delite, e tu habera solo surveliantia de violation de datos pro 1 adresse email.

## Deactivate account

settings-deactivate-account-title = Disactivar le conto
settings-deactivate-account-info-2 = Tu pote disactivar { -product-short-name } delente tu { -brand-mozilla-account }.
settings-fxa-link-label-3 = Ir a parametros de { -brand-mozilla-account }

## Add email dialog

settings-email-dialog-title = Adder altere adresse email
settings-add-email-text = Adde un nove adresse email pro vider si illo ha essite implicate in violationes.
settings-email-input-label = Adresse email
settings-send-email-verification-button = Inviar ligamine de verification

## Unsubscribe Dialog Survey

settings-unsubscribe-dialog-title = Nos regretta de vider te ir. <br /> Vole tu dicer nos perque tu exi?
settings-unsubscribe-dialog-info = Tu experientia es importante pro nos. Nos lege cata responsa e lo prende in consideration.
settings-unsubscribe-dialog-message-placeholder = Que poteva haber ite melio?
# $faq_href is the URL for the faq page. HTML tags should not be translated, e.g. `<a>`
settings-unsubscribe-dialog-confirmation = Nota, tote tu servicios de { -brand-monitor-premium } era <a { $faq_href }>permanentemente delit</a> post que tu actual termino de facturation fini.
settings-unsubscribe-dialog-continue = Continuar le cancellation
settings-unsubscribe-dialog-cancel = Non importa, tornar retro
