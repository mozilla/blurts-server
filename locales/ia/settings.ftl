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
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (numer) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Appare in { $breachCount } violation note.
       *[other] Appare in { $breachCount } violationes note.
    }

## Deactivate account

settings-deactivate-account-title = Disactivar le conto
settings-deactivate-account-info = Tu pote disactivar { -product-short-name } delente tu { -brand-fx-account }.
settings-fxa-link-label = Ir a parametros de { -brand-firefox }

## Add email dialog

settings-email-dialog-title = Adder altere adresse email
settings-add-email-text = Adde un nove adresse email pro vider si illo ha essite implicate in violationes.
settings-email-input-label = Adresse email
settings-send-email-verification-button = Inviar ligamine de verification
