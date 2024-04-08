# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = { -product-short-name } Ñemboheko

## Breach alert preferences

settings-alert-preferences-title = Kyhyjerã ñembogua erohoryvéva
settings-alert-preferences-option-one = Emondo ñembogua kyhyjerã ñanduti veve imarãkuapavape
settings-alert-preferences-option-two = Emondopaite kyhyjerã ñembogua ñanduti veve kundaharape ñepyrũguápe

## Monitored email addresses

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
settings-delete-monitor-account-confirmation-toast-dismiss-label = Mboyke

## Add email dialog

## Unsubscribe Dialog Survey

