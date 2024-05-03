# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = Parametros de { -product-short-name }

## Breach alert preferences

settings-alert-email-preferences-title = Preferentias de e-posta
settings-alert-email-preferences-subtitle = Conta nos que emails tu amarea reciper.
settings-alert-preferences-allow-breach-alerts-title = Alertas de violation instantanee
settings-alert-preferences-allow-breach-alerts-subtitle = Iste alertas es inviate instantaneemente un vice que un violation de datos es revelate
settings-alert-preferences-option-one = Inviar avisos de violation al adresse de email afficite
settings-alert-preferences-option-two = Inviar tote le avisos de violation al adresse email primari
settings-alert-preferences-allow-monthly-monitor-report-title = Reporto de { -brand-monitor } mensual
settings-alert-preferences-allow-monthly-monitor-report-subtitle = Un actualisation mensual de nove expositiones, que ha essite remediate, e que besonia de tu attention.

## Monitored email addresses

# Variables:
#   $email (string) - Email address
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

## Deactivate account

settings-deactivate-account-title = Disactivar le conto
settings-deactivate-account-info-2 = Tu pote disactivar { -product-short-name } delente tu { -brand-mozilla-account }.
settings-fxa-link-label-3 = Ir a parametros de { -brand-mozilla-account }

## Delete Monitor account

settings-delete-monitor-free-account-title = Deler conto { -brand-monitor }
settings-delete-monitor-free-account-description = Isto permanentemente delera tu conto { -brand-monitor } e disactivara tote le notificationes.
settings-delete-monitor-free-account-cta-label = Deler le conto
settings-delete-monitor-free-account-dialog-title = Tu conto conto { -brand-monitor } sera permanentemente delite
settings-delete-monitor-free-account-dialog-lead = Tote le informationes de tu conto { -brand-monitor } sera delite e nos non plus surveliara pro nove violationes de datos. Isto non delera tu conto { -brand-mozilla }.
settings-delete-monitor-free-account-dialog-cta-label = Deler le conto
settings-delete-monitor-free-account-dialog-cancel-button-label = Non importa, tornar retro
settings-delete-monitor-account-confirmation-toast-label-2 = Tu conto { -brand-monitor } es delite.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Dimitter
