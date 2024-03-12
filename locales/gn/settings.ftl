# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-meta-title = { -brand-fx-monitor } - Ñemboheko
settings-page-title = { -product-short-name } Ñemboheko

## Breach alert preferences

settings-alert-preferences-title = Kyhyjerã ñembogua erohoryvéva
settings-alert-preferences-option-one = Emondo ñembogua kyhyjerã ñanduti veve imarãkuapavape
settings-alert-preferences-option-two = Emondopaite kyhyjerã ñembogua ñanduti veve kundaharape ñepyrũguápe

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-label-primary = { $email } (ñepyrũha)
settings-email-list-title = Ñanduti veve kundaharape ojehechameméva
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Ne mba’etépe oike jehechameme { $limit } peve ñanduti veve.
        [many] Ne mba’etépe oike jehechameme { $limit } peve ñanduti veve.
       *[other] Ne mba’etépe oike jehechameme { $limit } peve ñanduti veve.
    }
settings-email-verification-callout = Ñanduti veve jehechajey jerurepyre
settings-resend-email-verification-link = Emondojey ñanduti veve jehechajeyrã
settings-add-email-button = Embojuaju ñanduti veve kundaharape
# Deprecated
settings-delete-email-button = Embogue ñandutiveve kundaharape
settings-remove-email-button-label = Mboguete
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = Anive ema’ẽagui { $emailAddress } rehe
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Ojekuaa { $breachCount }-pe ñembyaikuéra ojehecháva.
        [many] Ojekuaa { $breachCount }-pe ñembyaikuéra ojehecháva.
       *[other] Ojekuaa { $breachCount }-pe ñembyaikuéra ojehecháva.
    }

## Cancel Premium subscription

settings-cancel-premium-subscription-title = Eipe’a { -brand-premium } ñemboheraguapy
settings-cancel-premium-subscription-info = Ne ñemboheraguapýgui oikojeýta mba’ete reiguáva opa rire ehepyme’ẽva reikóvo. Umi ñemo’ã resa’ỹijokuégui osẽva oñemboguetéta ha ehechameméta mba’ekuaarã ñembogua añoite 1 ñanduti veve kundaharapépe g̃uarã.

## Deactivate account

settings-deactivate-account-title = Emboguete mba’ete
settings-deactivate-account-info-2 = Eipe’aitekuaa { -product-short-name } emboguévo nde { -brand-mozilla-account }.
settings-fxa-link-label-3 = Eho { -brand-mozilla-account } ñembohekópe

## Delete Monitor account

settings-delete-monitor-free-account-title = Embogue { -brand-monitor } mba’ete
settings-delete-monitor-free-account-description = Kóva omboguepáta ne mba’ete { -brand-monitor } pegua ha omboykéta opaite marandu’ikuéra.
settings-delete-monitor-free-account-cta-label = Emboguete mba’ete
settings-delete-monitor-free-account-dialog-title = Ne mba’ete { -brand-monitor } pegua oñemboguetéta
settings-delete-monitor-free-account-dialog-cta-label = Emboguete mba’ete
settings-delete-monitor-free-account-dialog-cancel-button-label = Marave ndoikói, jajevyjey
settings-delete-monitor-plus-account-title = Embogue { -brand-monitor } mba’ete
settings-delete-monitor-plus-account-description = Kóva omboguepáta ne mba’ete { -brand-monitor } pegua ha ojeipáta ne ñemboheraguapy tepyme’ẽgua { -brand-monitor-plus } pegua.
settings-delete-monitor-plus-account-cta-label = Emboguete mba’ete
settings-delete-monitor-plus-account-dialog-title = Ne mba’ete { -brand-monitor } pegua oñemboguetétama
settings-delete-monitor-plus-account-dialog-cta-label = Emboguete mba’ete
settings-delete-monitor-plus-account-dialog-cancel-button-label = Marave ndoikói, jajevyjey
settings-delete-monitor-account-confirmation-toast-label = Ne mba’ete { -brand-monitor } pegua oñemboguetéma
settings-delete-monitor-account-confirmation-toast-dismiss-label = Mboyke

## Add email dialog

settings-email-dialog-title = Emoĩve ambue ñanduti veve kundaharape
settings-add-email-text = Emoĩve ñanduti veve kundaharape pyahu ehecha hag̃ua eimépa ñemboguápe.
settings-email-input-label = Ñanduti veve
settings-send-email-verification-button = Emondo juajuha jehechajeyrã

## Unsubscribe Dialog Survey

settings-unsubscribe-dialog-title = Rombyasy resẽ haguére. <br /> ¿Ikatúpa emombe’umi mba’érepa resẽra’e?
settings-unsubscribe-dialog-info = Nde rekoasakue ore romomba’eterei. Romoñe’ẽ peteĩteĩva ñembohovái ha rohecharamo akóinte.
settings-unsubscribe-dialog-message-placeholder = ¿Mba’épa pe ohoporãvekuaáva?
# $faq_href is the URL for the faq page. HTML tags should not be translated, e.g. `<a>`
settings-unsubscribe-dialog-confirmation = Ikatúpa, ehecháke opaite ne mba’eporu { -brand-monitor-premium } rehegua <a { $faq_href }>oñembogue tapiáta</a> opaite rire nde kuatiañemure ag̃agua.
settings-unsubscribe-dialog-continue = Emongu’ejey pe jeipe’a
settings-unsubscribe-dialog-cancel = Marave ndoikói, jajevyjey
